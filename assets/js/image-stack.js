function initImageStack() {
  var triggers = $("[data-image-stack-trigger], .card-stack-button");
  var modal = $("#expandedModal");
  var dataKey = "imageStackItems";

  if (!triggers.length || !modal.length) {
    return;
  }

  bindImageGalleryModalEvents(modal, "imageStack", dataKey);

  triggers.each(function () {
    applyImageStackLayout($(this));
  });

  $(window)
    .off("resize.imageStack")
    .on("resize.imageStack", function () {
      triggers.each(function () {
        applyImageStackLayout($(this));
      });
    });

  triggers.off("click.imageStack").on("click.imageStack", function (event) {
    var trigger = $(this);
    var items = collectImageStackItems(trigger);

    if (!items.length) {
      return;
    }

    event.preventDefault();
    openImageGalleryModal(modal, dataKey, items, 0);
    modal.modal("show");
  });
}

function collectImageStackItems(trigger) {
  return collectImageGalleryItems(
    trigger.find("[data-image-stack-item], [data-card-stack-item]"),
    {
      imageAttribute: "data-image",
      captionAttribute: "data-caption",
      labelGetter: function () {
        return "";
      },
    }
  );
}

function applyImageStackLayout(trigger) {
  var stack = trigger.find(".image-stack, .card-stack").first();
  var cards = trigger
    .find("[data-image-stack-item], [data-card-stack-item]")
    .get()
    .sort(function (left, right) {
      return Number($(left).attr("data-gallery-index")) - Number($(right).attr("data-gallery-index"));
    });
  var isCompact = window.matchMedia("(max-width: 767.98px)").matches;
  var frontY = readImageStackMetric(
    stack,
    isCompact ? "stackCompactFrontY" : "stackFrontY",
    isCompact ? 24 : 44
  );
  var baseStepX = readImageStackMetric(
    stack,
    isCompact ? "stackCompactStepX" : "stackStepX",
    isCompact ? 18 : 24
  );
  var baseStepY = readImageStackMetric(
    stack,
    isCompact ? "stackCompactStepY" : "stackStepY",
    isCompact ? 10 : 14
  );
  var baseHeight = readImageStackMetric(
    stack,
    isCompact ? "stackCompactBaseHeight" : "stackBaseHeight",
    isCompact ? 265 : 470
  );
  var extraDepthHeight = readImageStackMetric(
    stack,
    isCompact ? "stackCompactExtraDepth" : "stackExtraDepth",
    isCompact ? 28 : 44
  );
  var maxDepth = Math.max(cards.length - 1, 0);

  cards.forEach(function (card, depth) {
    var cardElement = $(card);
    var sign = depth === 0 ? 0 : depth % 2 === 1 ? 1 : -1;
    var magnitude = depth === 0 ? 0 : baseStepX + (depth - 1) * (isCompact ? 10 : 16);
    var x = sign * magnitude;
    var y = Math.max(0, frontY - depth * baseStepY);
    var rotation = depth === 0 ? 0 : sign * (2.5 + depth * 1.1);
    var scale = Math.max(isCompact ? 0.86 : 0.82, 1 - depth * 0.035);
    var opacity = Math.max(0.32, 1 - depth * 0.14);
    var hoverX = x + sign * (depth === 0 ? baseStepX + 10 : baseStepX + 18);
    var hoverY = Math.max(-16, y - (depth === 0 ? 14 : 18));
    var hoverRotation = rotation + sign * 1.3;

    cardElement
      .attr("data-stack-depth", depth)
      .css("--stack-x", x + "px")
      .css("--stack-y", y + "px")
      .css("--stack-rotate", rotation + "deg")
      .css("--stack-scale", scale)
      .css("--stack-opacity", opacity)
      .css("--stack-filter", depth === 0 ? "none" : "grayscale(100%)")
      .css("--stack-z", String(cards.length - depth))
      .css("--stack-hover-x", hoverX + "px")
      .css("--stack-hover-y", hoverY + "px")
      .css("--stack-hover-rotate", hoverRotation + "deg");
  });

  stack.css(
    "--stack-min-height",
    computeImageStackMinHeight(maxDepth, baseHeight, extraDepthHeight) + "px"
  );
}

function readImageStackMetric(stack, key, fallback) {
  var value = Number(stack.data(key));
  return isNaN(value) ? fallback : value;
}

function computeImageStackMinHeight(maxDepth, baseHeight, extraDepthHeight) {
  var extraDepth = Math.max(0, maxDepth - 3);
  return baseHeight + extraDepth * extraDepthHeight;
}
