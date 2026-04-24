window.onload = function registerBehaviour() {
  window.scrollTo(0, 0);
  handleMenuSelection();
  detectOS();
  addVersionNumbers();
  initCardStack();
  initHomeImageWall();
};

function addVersionNumbers() {
  $("#release-datetime").append(
    "<h2>Release <span class='gtversion'> </span> &mdash; <span class='releasedate'></span></h2>"
  );
  $.get(
    {
      url: "https://dl.feenk.com/gt/GlamorousToolkitWin64-release",
      cache: false,
    },
    (data) => {
      addVersionNumbersToButton("win64", "GlamorousToolkit-Windows-x86_64-", data);
    }
  );
  $.get(
    {
      url: "https://dl.feenk.com/gt/GlamorousToolkitWinArm64-release",
      cache: false,
    },
    (data) => {
      addVersionNumbersToButton("winArm64", "GlamorousToolkit-Windows-aarch64-", data);
    }
  );
  $.get(
    {
      url: "https://dl.feenk.com/gt/GlamorousToolkitOSX64-release",
      cache: false,
    },
    (data) => {
      addVersionNumbersToButton("osx64", "GlamorousToolkit-MacOS-x86_64-", data);
    }
  );
  $.get(
    {
      url: "https://dl.feenk.com/gt/GlamorousToolkitOSXM1-release",
      cache: false,
    },
    (data) => {
      addVersionNumbersToButton("osxM1", "GlamorousToolkit-MacOS-aarch64-", data);
    }
  );
  $.get(
    {
      url: "https://dl.feenk.com/gt/GlamorousToolkitLinux64-release",
      cache: false,
    },
    (data) => {
      addVersionNumbersToButton("linux64", "GlamorousToolkit-Linux-x86_64-", data);
    }
  );
    $.get(
    {
      url: "https://dl.feenk.com/gt/GlamorousToolkitLinuxArm64-release",
      cache: false,
    },
    (data) => {
      addVersionNumbersToButton("linuxArm64", "GlamorousToolkit-Linux-aarch64-", data);
    }
  );

  $.get(
    {
      url: "https://dl.feenk.com/gt/.releasedateinseconds",
      cache: false,
    },
    (data) => {
      var d = new Date(data * 1000);
      const month = d.toLocaleString("en-us", { month: "long" });
      var datestring =
        month +
        " " +
        d.getDate() +
        " " +
        d.getHours() +
        ":" +
        ((d.getMinutes() < 10 ? "0" : "") + d.getMinutes());
      $(".releasedate").text(datestring);
    }
  );
}

function addVersionNumbersToButton(buttonId, downloadIdentifier, data) {
  $("#" + buttonId).attr("href", "https://dl.feenk.com/gt/" + data);
  var version = data.replace(downloadIdentifier, "").replace(".zip", "");
  $(".gtversion").text(version);
}

function detectOS() {
  var userPlatform = this.platform.os.family.toLowerCase();
  var userAgent = this.platform.ua.toLowerCase();
  var platforms = $(".download-button");
  var match = "no match"
  for (var i = 0; i < platforms.length; i++) {
    var platform = platforms[i].getAttribute("data-switcher-content").toLowerCase();
    var button = $(platforms[i]);
    button.removeClass("btn-primary btn-default download-active download-inactive");
    if (platform.startsWith(userPlatform) || userAgent.includes(platform)) {
      match = platform;
      button.addClass("btn-primary download-active");
    } else {
      button.addClass("btn-default download-inactive");
    }
  }
  return match;
}

function handleMenuSelection() {
  $(".nav .nav-link").on("click", function () {
    $(".nav").find(".active").removeClass("active");
    $(this).addClass("active");
  });
}

function initCardStack() {
  var trigger = $("#cardStackTrigger");
  var modal = $("#expandedModal");
  var cards = collectCardStackItems(trigger);

  if (!trigger.length || !modal.length || !cards.length) {
    return;
  }

  applyCardStackLayout(trigger);
  $(window)
    .off("resize.cardStack")
    .on("resize.cardStack", function () {
      applyCardStackLayout(trigger);
    });

  trigger.off("click.cardStack").on("click.cardStack", function (event) {
    event.preventDefault();
    renderCardStackGallery(0);
    modal.modal("show");
  });

  modal
    .off("click.cardStack", ".card-stack-gallery-selector")
    .on("click.cardStack", ".card-stack-gallery-selector", function () {
      renderCardStackGallery(Number($(this).attr("data-index")));
    });

  modal.off("hidden.bs.modal.cardStack").on("hidden.bs.modal.cardStack", function () {
    modal.find(".modal-body").empty();
    modal.find(".modal-header .caption p").text("");
  });
}

function initHomeImageWall() {
  var links = $(".home-image-wall-link[data-image]");
  var modal = $("#expandedModal");
  var items = collectHomeImageWallItems(links);

  if (!links.length || !modal.length || !items.length) {
    return;
  }

  links.off("click.homeImageWall").on("click.homeImageWall", function (event) {
    event.preventDefault();
    renderHomeImageWallModal(items, links.index(this));
    modal.modal("show");
  });

  modal
    .off("slid.bs.carousel.homeImageWall", "#homeImageWallCarousel")
    .on("slid.bs.carousel.homeImageWall", "#homeImageWallCarousel", function () {
      var activeIndex = Number(
        $(this)
          .find(".carousel-item.active")
          .attr("data-index")
      );
      updateHomeImageWallCaption(items, activeIndex);
    });

  modal.off("hidden.bs.modal.homeImageWall").on("hidden.bs.modal.homeImageWall", function () {
    modal.find(".modal-body").empty();
    modal.find(".modal-header .caption p").text("");
  });
}

function collectHomeImageWallItems(links) {
  return links
    .map(function () {
      var link = $(this);
      return {
        image: link.attr("data-image") || "",
        caption: link.attr("data-caption") || "",
        label: link.find(".home-image-wall-label").text().trim(),
      };
    })
    .get()
    .filter(function (item) {
      return Boolean(item.image);
    });
}

function renderHomeImageWallModal(items, activeIndex) {
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
      ? '<a class="carousel-control-prev" href="#homeImageWallCarousel" role="button" data-slide="prev">' +
          '<span class="carousel-control-prev-icon" aria-hidden="true"></span>' +
          '<span class="sr-only">Previous</span>' +
        "</a>" +
        '<a class="carousel-control-next" href="#homeImageWallCarousel" role="button" data-slide="next">' +
          '<span class="carousel-control-next-icon" aria-hidden="true"></span>' +
          '<span class="sr-only">Next</span>' +
        "</a>"
      : "";

  modal.find(".modal-body").html(
    '<div id="homeImageWallCarousel" class="carousel slide home-image-wall-modal" data-interval="false">' +
      '<div class="carousel-inner">' +
        slidesMarkup +
      "</div>" +
      controlsMarkup +
    "</div>"
  );
  modal.find("#homeImageWallCarousel").carousel({
    interval: false,
    keyboard: true,
    ride: false,
    wrap: true,
  });
  updateHomeImageWallCaption(items, normalizedIndex);
}

function updateHomeImageWallCaption(items, activeIndex) {
  var modal = $("#expandedModal");
  var activeItem = items[activeIndex] || items[0];
  modal.find(".modal-header .caption p").text(activeItem ? activeItem.caption : "");
}

function renderCardStackGallery(activeIndex) {
  var trigger = $("#cardStackTrigger");
  var cards = collectCardStackItems(trigger);
  var modal = $("#expandedModal");
  var activeCard = cards[activeIndex] || cards[0];
  if (!activeCard) {
    return;
  }
  var selectorsMarkup = cards
    .map(function (card, index) {
      var activeClass = index === activeIndex ? " is-active" : "";
      var pressed = index === activeIndex ? "true" : "false";
      return (
        '<button type="button" class="card-stack-gallery-selector' +
        activeClass +
        '" data-index="' +
        index +
        '" aria-pressed="' +
        pressed +
        '">' +
        '<img src="' +
        card.image +
        '" alt="' +
        escapeHtml(card.caption) +
        '">' +
        '<span class="card-stack-gallery-label">' +
        escapeHtml(card.caption) +
        "</span>" +
        "</button>"
      );
    })
    .join("");

  modal.find(".modal-body").html(
    '<div class="card-stack-gallery">' +
      '<div class="card-stack-gallery-active">' +
        '<img src="' +
        activeCard.image +
        '" alt="' +
        escapeHtml(activeCard.caption) +
        '">' +
      "</div>" +
      '<div class="card-stack-gallery-selectors">' +
        selectorsMarkup +
      "</div>" +
    "</div>"
  );
  modal.find(".modal-header .caption p").text(activeCard.caption);
}

function collectCardStackItems(trigger) {
  return trigger
    .find("[data-card-stack-item]")
    .map(function () {
      var card = $(this);
      var image = card.attr("data-image") || card.find("img").attr("src");
      var caption = card.attr("data-caption") || card.find("img").attr("alt") || "";
      var index = Number(card.attr("data-gallery-index"));
      return {
        image: image,
        caption: caption,
        index: isNaN(index) ? 0 : index,
      };
    })
    .get()
    .sort(function (left, right) {
      return left.index - right.index;
    })
    .map(function (card) {
      return {
        image: card.image,
        caption: card.caption,
      };
    });
}

function applyCardStackLayout(trigger) {
  var stack = trigger.find(".card-stack");
  var cards = trigger
    .find("[data-card-stack-item]")
    .get()
    .sort(function (left, right) {
      return Number($(left).attr("data-gallery-index")) - Number($(right).attr("data-gallery-index"));
    });
  var isCompact = window.matchMedia("(max-width: 767.98px)").matches;
  var frontY = isCompact ? 24 : 44;
  var baseStepX = isCompact ? 18 : 24;
  var baseStepY = isCompact ? 10 : 14;
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

  stack.css("--stack-min-height", computeStackMinHeight(maxDepth, isCompact) + "px");
}

function computeStackMinHeight(maxDepth, isCompact) {
  var baseHeight = isCompact ? 265 : 470;
  var extraDepth = Math.max(0, maxDepth - 3);
  return baseHeight + extraDepth * (isCompact ? 28 : 44);
}

function escapeHtml(text) {
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
