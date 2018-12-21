function loadHTML(url, id) {
  req = new XMLHttpRequest();
  req.open('GET', url);
  req.send();
  req.onload = () => {
    document.getElementById(id).innerHTML = req.responseText;
  };
}

// use #! to hash
router = new Navigo(null, true, '#');
router.on({
  'components': () => { loadHTML('./views/components.html', 'view'); },
  'gallery': () => { loadHTML('./views/gallery.html', 'view'); },
  'install': () => { loadHTML('./views/install.html', 'view'); }
});

router.on(() => { loadHTML('./views/home.html', 'view'); });

router.notFound((query) => { $id('view').innerHTML = '<h3>Couldn\'t find the page you\'re looking for...</h3>'; });

router.resolve();
