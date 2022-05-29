if ("serviceWorker" in navigator) { let registration; const registerServiceWorker = async() => { registration = await navigator.serviceWorker.register("./service-worker.js"); };
    registerServiceWorker(); }
const cacheName = 'xopbot-cache';
const filesToCache = ['/index.html', '/server.js', '/css/mobile.css', '/css/video.css', '/css/profile.css', '/css/styles.css', '/bootstrap/css/bootstrap.min.css', '/bootstrap/css/bootstrap1.min.css', '/bootstrap/css/xopcomment2.css', '/bootstrap/js/bootstrap.min.js', '/js/cookies.js', '/js/slider.js', '/js/video.js', '/fonts/FontAwesome.otf', '/fonts/Simple-Line-Icons.svg', '/fonts/Simple-Line-Icons.woff2', '/fonts/fa-brands-400.svg', '/fonts/fa-brands-400.woff2', '/fonts/fa-regular-400.svg', '/fonts/fa-regular-400.woff2'];
self.addEventListener('activate', e => self.clients.claim());
self.addEventListener('install', e => { e.waitUntil(caches.open(cacheName).then(cache => cache.addAll(filesToCache))); });
self.addEventListener('fetch', e => { e.respondWith(caches.match(e.request).then(response => response ? response : fetch(e.request))) });