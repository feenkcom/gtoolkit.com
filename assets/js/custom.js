window.onload = function registerBehaviour() {
  window.scrollTo(0, 0);
  handleMenuSelection();
  detectOS();
  addVersionNumbers();
};

function addVersionNumbers() {
  $("#release-datetime").append(
    "<h2><span class='gtversion'> </span> released on <span class='releasedate'></span></h2>"
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
  var userPlatform = this.platform.os.family;
  var platforms = $(".download-button");
  for (var i = 0; i < platforms.length; i++) {
    var platform = platforms[i].getAttribute("data-switcher-content");
    if (platform.toLowerCase().startsWith(userPlatform.toLowerCase())) {
      $(platforms[i]).addClass("btn-primary download-active");
    } else {
      $(platforms[i]).addClass("btn-default download-inactive");
    }
  }
}

function handleMenuSelection() {
  $(".nav .nav-link").on("click", function () {
    $(".nav").find(".active").removeClass("active");
    $(this).addClass("active");
  });
}
