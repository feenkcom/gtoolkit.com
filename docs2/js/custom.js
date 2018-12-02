function registerBehaviour() {
  handleMenuSelection();
  detectOS();
  addPreview();
  buildCarousels();
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

      for (var i=0; i < $(this).find('.item').length; i++) {
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
  a.className = position + ' carousel-control';
  a.setAttribute('data-target', '#' + carouselId);
  a.setAttribute('role', 'button');
  a.setAttribute('data-slide', slideTo);
  var spanIcon = document.createElement('span');
  spanIcon.className = "glyphicon glyphicon-chevron-"+position;
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
  $('.nav li').on('click', function(){
    $('.nav li').removeClass('active');
    $(this).addClass('active');
  });
}
