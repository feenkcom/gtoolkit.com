function loadHTML(url, id) {
  req = new XMLHttpRequest();
  req.open('GET', url);
  req.send();
  req.onload = () => {
    modalReq = new XMLHttpRequest();
    modalReq.open('GET', './views/modal.html');
    modalReq.send();
    modalReq.onload = () => {
      document.getElementById('view').innerHTML = req.responseText + modalReq.responseText;
      registerBehaviour();
    }
  };
}

// use #! to hash
router = new Navigo(null, true, '#');
router.on({
  'components': () => { loadHTML('./views/components.html'); },
  'gallery': () => { loadHTML('./views/gallery.html'); },
  'install': () => { loadHTML('./views/install.html'); }
});

router.on(() => { loadHTML('./views/home.html'); });

router.notFound((query) => { $id('view').innerHTML = '<h3>Couldn\'t find the page you\'re looking for...</h3>'; });

router.resolve();
