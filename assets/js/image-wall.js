function initImageWall() {
  var links = $(".image-wall-link[data-image]");
  var modal = $("#expandedModal");
  var dataKey = "imageWallItems";

  if (!links.length || !modal.length) {
    return;
  }

  bindImageGalleryModalEvents(modal, "imageWall", dataKey);

  links.off("click.imageWall").on("click.imageWall", function (event) {
    var group = findImageWallGroup($(this));
    var groupLinks = group.find(".image-wall-link[data-image]");
    var items = collectImageGalleryItems(groupLinks, {
      imageAttribute: "data-image",
      captionAttribute: "data-caption",
      labelSelector: ".image-wall-label",
    });

    if (!items.length) {
      return;
    }

    event.preventDefault();
    openImageGalleryModal(modal, dataKey, items, groupLinks.index(this));
    modal.modal("show");
  });
}

function findImageWallGroup(link) {
  return link.closest(".image-wall-grid, .image-wall-vertical");
}
