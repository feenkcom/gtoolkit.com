(function () {
  var svgNamespace = "http://www.w3.org/2000/svg";
  var underlinePath = "M4 11 C52 10, 126 10, 176 16";

  function createSvg(className, viewBox) {
    var svg = document.createElementNS(svgNamespace, "svg");
    svg.setAttribute("class", className);
    svg.setAttribute("viewBox", viewBox);
    svg.setAttribute("preserveAspectRatio", "none");
    svg.setAttribute("aria-hidden", "true");
    svg.setAttribute("focusable", "false");
    return svg;
  }

  function createPath(d) {
    var path = document.createElementNS(svgNamespace, "path");
    path.setAttribute("d", d);
    return path;
  }

  function formatInsertLabel(text) {
    return text.trim().replace(/\s+/, "\n");
  }

  function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
  }

  function updateInsertLabelPosition(label) {
    var context = label.parentElement || label;
    var contextFontSize = parseFloat(window.getComputedStyle(context).fontSize);
    var labelFontSize = parseFloat(window.getComputedStyle(label, "::before").fontSize);
    if (!contextFontSize || !labelFontSize) {
      return;
    }

    var sizeRatio = labelFontSize / contextFontSize;
    var responsiveRange = window.matchMedia("(max-width: 991.98px)").matches
      ? { maxBottom: 1.52, minBottom: 1.1 }
      : { maxBottom: 1.78, minBottom: 1.3 };
    var ratioProgress = clamp((sizeRatio - 0.5) / 0.35, 0, 1);
    var bottom = responsiveRange.maxBottom - (responsiveRange.maxBottom - responsiveRange.minBottom) * ratioProgress;
    label.style.setProperty("--insert-label-bottom", bottom.toFixed(2) + "em");
  }

  function updateInsertLabelPositions(root) {
    var labels = root.querySelectorAll(".insert-label");
    for (var i = 0; i < labels.length; i++) {
      updateInsertLabelPosition(labels[i]);
    }
  }

  function hydrateInsertLabels(root) {
    var labels = root.querySelectorAll(".insert-label");
    for (var i = 0; i < labels.length; i++) {
      if (!labels[i].getAttribute("data-label")) {
        labels[i].setAttribute("data-label", formatInsertLabel(labels[i].textContent));
      }
      labels[i].textContent = "";
      if (!labels[i].querySelector(".insert-mark")) {
        var mark = document.createElement("span");
        mark.setAttribute("class", "insert-mark");
        labels[i].appendChild(mark);
      }
      labels[i].setAttribute("aria-hidden", "true");
    }
    updateInsertLabelPositions(root);
  }

  function hydrateAnnotatedUnderlines(root) {
    var underlines = root.querySelectorAll(".manual-underline");
    for (var i = 0; i < underlines.length; i++) {
      if (!underlines[i].querySelector(".manual-underline-mark")) {
        var svg = createSvg("manual-underline-mark", "0 0 180 28");
        svg.appendChild(createPath(underlinePath));
        underlines[i].appendChild(svg);
      }
    }
  }

  function initAnnotations(root) {
    var target = root || document;
    hydrateInsertLabels(target);
    hydrateAnnotatedUnderlines(target);
  }

  window.initAnnotations = initAnnotations;

  var resizeTimer;
  window.addEventListener("resize", function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
      updateInsertLabelPositions(document);
    }, 120);
  });

  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(function () {
      updateInsertLabelPositions(document);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () {
      initAnnotations(document);
    });
  } else {
    initAnnotations(document);
  }
})();
