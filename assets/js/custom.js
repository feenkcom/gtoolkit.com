window.onload = function registerBehaviour() {
  window.scrollTo(0, 0);
  handleMenuSelection();
  detectOS();
  addVersionNumbers();
  if (typeof initImageStack === "function") {
    initImageStack();
  }
  if (typeof initImageWall === "function") {
    initImageWall();
  }
  if (typeof initImageComparisonSliders === "function") {
    initImageComparisonSliders();
  }
};

function addVersionNumbers() {
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
      $(".releasedate").text(formatReleaseDate(d));
    }
  );
}

function formatReleaseDate(date) {
  const month = date.toLocaleString("en-US", { month: "long" });
  const minutes = (date.getMinutes() < 10 ? "0" : "") + date.getMinutes();
  return month + " " + date.getDate() + ", " + date.getHours() + ":" + minutes;
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

function escapeHtml(text) {
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
