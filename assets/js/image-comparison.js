function initImageComparisonSliders() {
  var sliders = $(".image-comparison-slider");

  if (!sliders.length) {
    return;
  }

  sliders.each(function (index) {
    var slider = $(this);
    var frame = slider.find(".image-comparison-frame").first();
    var range = slider.find(".image-comparison-range").first();
    var namespace = ".imageComparison" + index;
    var isDragging = false;

    if (!frame.length || !range.length) {
      return;
    }

    var updateComparisonPosition = function (value) {
      value = Number(value);

      if (isNaN(value)) {
        value = 50;
      }

      value = Math.max(0, Math.min(100, value));
      range.val(value);
      slider.css("--comparison-position", value + "%");
    };

    var getEventPageX = function (event) {
      var originalEvent = event.originalEvent || event;
      var touch = originalEvent.touches && originalEvent.touches[0]
        ? originalEvent.touches[0]
        : originalEvent.changedTouches && originalEvent.changedTouches[0]
          ? originalEvent.changedTouches[0]
          : null;

      return touch ? touch.pageX : event.pageX;
    };

    var updateComparisonPositionFromEvent = function (event) {
      var pageX = getEventPageX(event);
      var frameOffset = frame.offset();
      var frameWidth = frame.outerWidth();

      if (!frameOffset || !frameWidth) {
        return;
      }

      updateComparisonPosition(((pageX - frameOffset.left) / frameWidth) * 100);
    };

    var stopDragging = function () {
      isDragging = false;
      $(document).off(namespace);
    };

    range
      .off("input.imageComparison change.imageComparison")
      .on("input.imageComparison change.imageComparison", function () {
        updateComparisonPosition(range.val());
      });

    frame
      .off(namespace)
      .on("mousedown" + namespace + " touchstart" + namespace, function (event) {
        isDragging = true;
        updateComparisonPositionFromEvent(event);
        event.preventDefault();

        $(document)
          .off(namespace)
          .on("mousemove" + namespace + " touchmove" + namespace, function (moveEvent) {
            if (!isDragging) {
              return;
            }

            updateComparisonPositionFromEvent(moveEvent);
            moveEvent.preventDefault();
          })
          .on("mouseup" + namespace + " touchend" + namespace + " touchcancel" + namespace, stopDragging);
      });

    updateComparisonPosition(range.val());
  });
}
