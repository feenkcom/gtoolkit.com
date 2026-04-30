function bindImageGalleryModalEvents(modal, namespace, dataKey) {
  modal
    .off("slid.bs.carousel." + namespace, "#imageGalleryCarousel")
    .on("slid.bs.carousel." + namespace, "#imageGalleryCarousel", function () {
      var items = getImageGalleryItems(modal, dataKey);

      if (!items.length) {
        return;
      }

      pauseImageGalleryVideos(modal);

      var activeIndex = Number(
        $(this)
          .find(".carousel-item.active")
          .attr("data-index")
      );
      updateImageGalleryCaption(modal, items, activeIndex);
    });

  modal.off("keydown." + namespace).on("keydown." + namespace, function (event) {
    handleImageGalleryKeyboard(event, modal, dataKey);
  });

  modal.off("hidden.bs.modal." + namespace).on("hidden.bs.modal." + namespace, function () {
    pauseImageGalleryVideos(modal);
    clearImageGalleryModal(modal, dataKey);
  });
}

function collectImageGalleryItems(elements, options) {
  return elements
    .map(function () {
      var element = $(this);
      var label = options.labelSelector
        ? element.find(options.labelSelector).text().trim()
        : options.labelGetter
          ? options.labelGetter(element)
          : "";
      return {
        image: element.attr(options.imageAttribute || "data-image") || "",
        video: element.attr(options.videoAttribute || "data-video") || "",
        videoType: element.attr(options.videoTypeAttribute || "data-video-type") || "video/mp4",
        caption: element.attr(options.captionAttribute || "data-caption") || "",
        label: label,
      };
    })
    .get()
    .filter(function (item) {
      return Boolean(item.image || item.video);
    });
}

function openImageGalleryModal(modal, dataKey, items, activeIndex) {
  var normalizedIndex = Math.max(0, Math.min(activeIndex || 0, items.length - 1));

  if (!items.length) {
    return;
  }

  modal.data(dataKey, items);
  modal.find(".modal-body").html(buildImageGalleryMarkup(items, normalizedIndex));
  modal.find("#imageGalleryCarousel").carousel({
    interval: false,
    keyboard: true,
    ride: false,
    wrap: true,
  });
  updateImageGalleryCaption(modal, items, normalizedIndex);
}

function buildImageGalleryMarkup(items, activeIndex) {
  var slidesMarkup = items
    .map(function (item, index) {
      return (
        '<div class="carousel-item' +
        (index === activeIndex ? " active" : "") +
        '" data-index="' +
        index +
        '">' +
          buildImageGalleryMediaMarkup(item) +
        "</div>"
      );
    })
    .join("");

  var controlsMarkup =
    items.length > 1
      ? '<a class="carousel-control-prev" href="#imageGalleryCarousel" role="button" data-slide="prev">' +
          '<span class="carousel-control-prev-icon" aria-hidden="true"></span>' +
          '<span class="sr-only">Previous</span>' +
        "</a>" +
        '<a class="carousel-control-next" href="#imageGalleryCarousel" role="button" data-slide="next">' +
          '<span class="carousel-control-next-icon" aria-hidden="true"></span>' +
          '<span class="sr-only">Next</span>' +
        "</a>"
      : "";

  return (
    '<div id="imageGalleryCarousel" class="carousel slide image-wall-modal" data-interval="false">' +
      '<div class="carousel-inner">' +
        slidesMarkup +
      "</div>" +
      controlsMarkup +
    "</div>"
  );
}

function buildImageGalleryMediaMarkup(item) {
  var label = escapeHtml(item.label || item.caption);

  if (item.video) {
    var posterMarkup = item.image ? ' poster="' + escapeHtml(item.image) + '"' : "";

    return (
      '<video controls playsinline preload="metadata"' +
        posterMarkup +
        ' aria-label="' +
        label +
        '">' +
          '<source src="' +
          escapeHtml(item.video) +
          '" type="' +
          escapeHtml(item.videoType) +
          '">' +
          "Your browser does not support the video tag." +
      "</video>"
    );
  }

  return (
    '<img src="' +
      escapeHtml(item.image) +
      '" alt="' +
      label +
      '">'
  );
}

function getImageGalleryItems(modal, dataKey) {
  return modal.data(dataKey) || [];
}

function updateImageGalleryCaption(modal, items, activeIndex) {
  var activeItem = items[activeIndex] || items[0];
  modal.find(".modal-header .caption p").text(activeItem ? activeItem.caption : "");
}

function handleImageGalleryKeyboard(event, modal, dataKey) {
  var carousel = modal.find("#imageGalleryCarousel");
  var itemCount = getImageGalleryItems(modal, dataKey).length;

  if (!modal.hasClass("show") || itemCount < 2 || !carousel.length) {
    return;
  }

  if (event.key === "ArrowLeft") {
    event.preventDefault();
    carousel.carousel("prev");
  }

  if (event.key === "ArrowRight") {
    event.preventDefault();
    carousel.carousel("next");
  }
}

function clearImageGalleryModal(modal, dataKey) {
  if (!getImageGalleryItems(modal, dataKey).length) {
    return;
  }

  modal.find(".modal-body").empty();
  modal.find(".modal-header .caption p").text("");
  modal.removeData(dataKey);
}

function pauseImageGalleryVideos(modal) {
  modal.find("#imageGalleryCarousel video").each(function () {
    this.pause();
  });
}
