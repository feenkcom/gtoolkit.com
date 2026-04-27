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
  }

  function hydrateAnnotatedUnderlines(root) {
    var underlines = root.querySelectorAll(".annotated-underline");
    for (var i = 0; i < underlines.length; i++) {
      if (!underlines[i].querySelector(".annotated-underline-mark")) {
        var svg = createSvg("annotated-underline-mark", "0 0 180 28");
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

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () {
      initAnnotations(document);
    });
  } else {
    initAnnotations(document);
  }
})();
