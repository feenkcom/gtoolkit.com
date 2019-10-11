window.onload = function registerBehaviour(isHomePage) {
  window.scrollTo(0,0);
  handleMenuSelection();
  addVersionNumbers();
  addPreview();
  buildCarousels();
}

function addVersionNumbers() {
  $.get('https://dl.feenk.com/gt/GToolkitWin64-release', (data) => {
    addVersionNumbersToButton('win64', 'GToolkitWin64-', data);
  }); 
  $.get('https://dl.feenk.com/gt/GToolkitOSX64-release', (data) => {
    addVersionNumbersToButton('osx64', 'GToolkitOSX64-', data);
  });
  $.get('https://dl.feenk.com/gt/GToolkitLinux64-release', (data) => {
    addVersionNumbersToButton('linux64', 'GToolkitLinux64-', data);
  }); 

  $.get('https://dl.feenk.com/gt/.releasedateinseconds', (data) => { 
    var d = new Date (data * 1000);
    const month = d.toLocaleString('en-us', { month: 'long' });
    var datestring = month + " " + d.getDate() + " " + d.getHours() + ":" + d.getMinutes();
    $(".releasedate").text(datestring);
  }); 
}

function addVersionNumbersToButton(buttonId, downloadIdentifier, data) {
  $('#' + buttonId).attr("href", "https://dl.feenk.com/gt/" + data);
  var version = data.replace(downloadIdentifier, '').replace('.zip', '');
  $(".gtversion").text(version);
  $('#' + buttonId).click(function () {
    gtag('event', 'download', {
      'event_category': 'Install',
      'event_action': buttonId,
      });
    });
  }
            
function detectOS() {
  var userPlatform = this.platform.os.family;
  var platforms = $('.download-button');
  for (var i=0; i < platforms.length; i++) {
    var platform = platforms[i].getAttribute('data-switcher-content');
    if (platform.toLowerCase().startsWith(userPlatform.toLowerCase())) {
      $(platforms[i]).addClass('btn-default download-active');
    }
    else {
     $(platforms[i]).addClass('download-inactive'); 
    }
  }
}


function buildCarousels() {
  $('.carousel').each(function() {
    var carousel = $(this);
    if (carousel.find('ol').length == 0) {
      var ol = document.createElement('ol');
      ol.className = 'carousel-indicators';

      for (var i = 0; i < $(this).find('.carousel-item').length; i++) {
        var li = document.createElement('li');
        if (i == 0)
          li.className = 'active';
        li.setAttribute('data-target', '#'+carousel.attr('id'));
        li.setAttribute('data-slide-to', i);
        ol.append(li);
      }
      carousel.prepend(ol);

      carousel.append(createControl('left', 'prev', carousel.attr('id')));
      carousel.append(createControl('right', 'next', carousel.attr('id')));
    }
  });
}

function createControl(position, slideTo, carouselId) {
  var a = document.createElement('a');
  a.className = position + ' carousel-control carousel-control-'+slideTo;
  a.setAttribute('data-target', '#' + carouselId);
  a.setAttribute('role', 'button');
  a.setAttribute('data-slide', slideTo);
  var spanIcon = document.createElement('i');
  spanIcon.className = "fas fa-fw fa-2x fa-chevron-"+position;
  spanIcon.setAttribute('aria-hidden', true);
  a.append(spanIcon);
  return a;
}


function addPreview() {
  $('.thumbnail a, .carousel img, .carousel video').click(function(e) { 
    e.preventDefault();
    $("#expandedModal .modal-body").html($(e.target).clone());
    $("#expandedModal .modal-footer p").text(e.target.nextElementSibling.innerText.trim());
    $("#expandedModal").modal('show');
  });
}

function handleMenuSelection() {
  $('.nav li a').removeClass('active');

  route = window.location.hash.substr(1).trim();
  if (route == '') route = '/';

  $('.nav li a[href="'+route+'"]').addClass('active');

  $('.nav li a').on('click', function(){
    $('.nav li').removeClass('active');
    $(this).addClass('active');
  });
}
