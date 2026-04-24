function initImageWall() {
  var links = $(".image-wall-link[data-image]");
  var modal = $("#expandedModal");
  var items = collectImageWallItems(links);

  if (!links.length || !modal.length || !items.length) {
    return;
  }

  links.off("click.imageWall").on("click.imageWall", function (event) {
    event.preventDefault();
    renderImageWallModal(items, links.index(this));
    modal.modal("show");
  });

  modal
    .off("slid.bs.carousel.imageWall", "#imageWallCarousel")
    .on("slid.bs.carousel.imageWall", "#imageWallCarousel", function () {
      var activeIndex = Number(
        $(this)
          .find(".carousel-item.active")
          .attr("data-index")
      );
      updateImageWallCaption(items, activeIndex);
    });

  modal.off("keydown.imageWall").on("keydown.imageWall", function (event) {
    handleImageWallKeyboard(event, modal, items.length);
  });

  modal.off("hidden.bs.modal.imageWall").on("hidden.bs.modal.imageWall", function () {
    modal.find(".modal-body").empty();
    modal.find(".modal-header .caption p").text("");
  });
}

function collectImageWallItems(links) {
  return links
    .map(function () {
      var link = $(this);
      return {
        image: link.attr("data-image") || "",
        caption: link.attr("data-caption") || "",
        label: link.find(".image-wall-label").text().trim(),
      };
    })
    .get()
    .filter(function (item) {
      return Boolean(item.image);
    });
}

function renderImageWallModal(items, activeIndex) {
  var modal = $("#expandedModal");
  var normalizedIndex = Math.max(0, Math.min(activeIndex || 0, items.length - 1));

  if (!items.length) {
    return;
  }

  var slidesMarkup = items
    .map(function (item, index) {
      return (
        '<div class="carousel-item' +
        (index === normalizedIndex ? " active" : "") +
        '" data-index="' +
        index +
        '">' +
          '<img src="' +
          item.image +
          '" alt="' +
          escapeHtml(item.label || item.caption) +
          '">' +
        "</div>"
      );
    })
    .join("");

  var controlsMarkup =
    items.length > 1
      ? '<a class="carousel-control-prev" href="#imageWallCarousel" role="button" data-slide="prev">' +
          '<span class="carousel-control-prev-icon" aria-hidden="true"></span>' +
          '<span class="sr-only">Previous</span>' +
        "</a>" +
        '<a class="carousel-control-next" href="#imageWallCarousel" role="button" data-slide="next">' +
          '<span class="carousel-control-next-icon" aria-hidden="true"></span>' +
          '<span class="sr-only">Next</span>' +
        "</a>"
      : "";

  modal.find(".modal-body").html(
    '<div id="imageWallCarousel" class="carousel slide image-wall-modal" data-interval="false">' +
      '<div class="carousel-inner">' +
        slidesMarkup +
      "</div>" +
      controlsMarkup +
    "</div>"
  );
  modal.find("#imageWallCarousel").carousel({
    interval: false,
    keyboard: true,
    ride: false,
    wrap: true,
  });
  updateImageWallCaption(items, normalizedIndex);
}

function updateImageWallCaption(items, activeIndex) {
  var modal = $("#expandedModal");
  var activeItem = items[activeIndex] || items[0];
  modal.find(".modal-header .caption p").text(activeItem ? activeItem.caption : "");
}

function handleImageWallKeyboard(event, modal, itemCount) {
  var carousel = modal.find("#imageWallCarousel");

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
