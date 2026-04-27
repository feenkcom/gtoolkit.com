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

function escapeHtml(text) {
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
