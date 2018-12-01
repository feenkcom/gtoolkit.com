page('*', init.ctx);
page('/', route.home);
page('/components', route.components);
page('/gallery', route.gallery);
page('/install', route.install);
page('*', render.content);
page();