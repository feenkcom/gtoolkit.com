function loadHTML(url, isHomePage) {
  req = new XMLHttpRequest();
  req.open('GET', url);
  req.send();
  req.onload = () => {
    modalReq = new XMLHttpRequest();
    modalReq.open('GET', './views/modal.html');
    modalReq.send();
    modalReq.onload = () => {
      document.getElementById('view').innerHTML = req.responseText + modalReq.responseText;
      registerBehaviour(isHomePage);
    }
  };
}

// use #! to hash
router = new Navigo(null, true, '#');
router.on({
  'components': () => { loadHTML('./views/components.html'); },
  'design': () => { loadHTML('./views/design.html'); },
  'moldable': () => { loadHTML('./views/moldable.html'); },
  'gallery': () => { loadHTML('./views/gallery.html'); },
  'install': () => { loadHTML('./views/install.html'); },
  'about': () => { loadHTML('./views/about.html'); }
});

router.on(() => { loadHTML('./views/home.html', true); });

router.notFound((query) => { $id('view').innerHTML = '<h3>Couldn\'t find the page you\'re looking for...</h3>'; });

router.resolve();
