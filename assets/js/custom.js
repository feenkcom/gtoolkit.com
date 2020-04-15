window.onload = function registerBehaviour(isHomePage) {
  window.scrollTo(0, 0);
  handleMenuSelection();
  addVersionNumbers();
}

function addVersionNumbers() {
  $.get(
    {
      url: 'https://dl.feenk.com/gt/GToolkitWin64-release',
      cache: false
    },
    (data) => {
      addVersionNumbersToButton('win64', 'GToolkitWin64-', data);
    });
  $.get(
    {
      url: 'https://dl.feenk.com/gt/GToolkitOSX64-release',
      cache: false
    },
    (data) => {
      addVersionNumbersToButton('osx64', 'GToolkitOSX64-', data);
    });
  $.get(
    {
      url: 'https://dl.feenk.com/gt/GToolkitLinux64-release',
      cache: false
    },
    (data) => {
      addVersionNumbersToButton('linux64', 'GToolkitLinux64-', data);
    });

  $.get(
    {
      url: 'https://dl.feenk.com/gt/.releasedateinseconds',
      cache: false
    },
    (data) => {
      var d = new Date(data * 1000);
      const month = d.toLocaleString('en-us', { month: 'long' });
      var datestring = month + " " + d.getDate() + " " + d.getHours() + ":" + ((d.getMinutes() < 10 ? '0' : '') + d.getMinutes());
      $(".releasedate").text(datestring);
    });
}

function addVersionNumbersToButton(buttonId, downloadIdentifier, data) {
  $('#' + buttonId).attr("href", "https://dl.feenk.com/gt/" + data);
  var version = data.replace(downloadIdentifier, '').replace('.zip', '');
  $(".gtversion").text(version);
}

function detectOS() {
  var userPlatform = this.platform.os.family;
  var platforms = $('.download-button');
  for (var i = 0; i < platforms.length; i++) {
    var platform = platforms[i].getAttribute('data-switcher-content');
    if (platform.toLowerCase().startsWith(userPlatform.toLowerCase())) {
      $(platforms[i]).addClass('btn-default download-active');
    }
    else {
      $(platforms[i]).addClass('download-inactive');
    }
  }
}

function handleMenuSelection() {
  $(".nav .nav-link").on("click", function () {
    $(".nav").find(".active").removeClass("active");
    $(this).addClass("active");
  });
}
