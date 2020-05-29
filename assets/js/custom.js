window.onload = function registerBehaviour() {
  window.scrollTo(0, 0);
  handleMenuSelection();
  detectOS();
  addVersionNumbers();
};

function addVersionNumbers() {
  $.get(
    {
      url: "https://dl.feenk.com/gt/GlamorousToolkitWin64-release",
      cache: false,
    },
    (data) => {
      addVersionNumbersToButton("win64", "GlamorousToolkitWin64-", data);
    }
  );
  $.get(
    {
      url: "https://dl.feenk.com/gt/GlamorousToolkitOSX64-release",
      cache: false,
    },
    (data) => {
      addVersionNumbersToButton("osx64", "GlamorousToolkitOSX64-", data);
    }
  );
  $.get(
    {
      url: "https://dl.feenk.com/gt/GlamorousToolkitLinux64-release",
      cache: false,
    },
    (data) => {
      addVersionNumbersToButton("linux64", "GlamorousToolkitLinux64-", data);
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
