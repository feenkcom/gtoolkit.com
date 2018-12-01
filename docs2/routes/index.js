
(function () {
  // private api

  var cache = {};

  function get (url, cb) {
    if (cache[url]) return cb(cache[url]);
    $.ajax({
      url: url,
      success: function(data) {
        cache[url] = data;
        cb(data);
      },
      error: function(jqXHR, textStatus, errorThrown) {
        console.log(jqXHR, textStatus, errorThrown);
      },
      dataType: 'text'
    });
  }

  // public api

  window.init = {
    ctx: function (ctx, next) {
      ctx.content = '';
      next();
    }
  };

  window.route = {
    home: function (ctx, next) {
      get('views/home.html', function (html) {
        ctx.content = html;
        next();
      });
    },
    components: function (ctx, next) {
      get('views/components.html', function (html) {
        get('views/modal.html', function (modalHtml) {
          ctx.content = html+modalHtml;
          next();
        });
      });
    },
    gallery: function (ctx, next) {
      get('views/gallery.html', function (html) {
        get('views/modal.html', function (modalHtml) {
          ctx.content = html+modalHtml;
          next();
        });
      });
    },
    install: function (ctx, next) {
      get('views/install.html', function (html) {
        ctx.content = html;
        next();
      });
    }
  };

  window.render = {
    content: function (ctx, next) {
      get('views/home.html', function (html) {
        $('#content').empty().append(ctx.content);
          addPreview();
          buildCarousels();
          // buildInstructions();
          detectOS()
      });
    }
  };

  window.done = null;
}());
