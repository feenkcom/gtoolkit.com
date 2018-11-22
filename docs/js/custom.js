function training_action() {
  var text = new Array ();
  text[0] = "Intrigued?";
  text[1] = "Looking for an in-house course?";
  text[2] = "Looking for more details?";
  text[3] = "Curious?";
  var i = Math.floor(4*Math.random())
  document.write(text[i]);
}

function consulting_coaching_action() {
  var text = new Array ();
  text[0] = "Intrigued?";
  text[1] = "Open questions?";
  text[2] = "Looking for more details?";
  text[3] = "Curious?";
  var i = Math.floor(4*Math.random())
  document.write(text[i]);
}


document.addEventListener("DOMContentLoaded", function(event) {
  addPreview();
  buildCarousels();
  buildInstructions();
});


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

function buildInstructions() {
  $('.list-group-item').click(function(e) {
    var element = $(e.target);
    if (!element.hasClass('list-group-item'))
      element = element.closest('.list-group-item');
    var parent = element.closest('.row');
    if (!element.hasClass('selected')) {
      element.addClass('selected').siblings().removeClass('selected');
      parent.find('.instructions-item').removeClass('selected');
      parent.find(".instructions-item[area-labelledby='"+element.attr('id')+"']").addClass('selected');
    }
    e.preventDefault();
  });
}
