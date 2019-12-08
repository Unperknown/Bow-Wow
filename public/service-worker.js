self.__precacheManifest = [].concat(self.__precacheManifest || []);
// workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

self.addEventListener('install', function (e) {
    e.waitUntil(
        caches.open('bow-wow').then(function (cache) {
            return cache.addAll([
                '/offline.html',
                '/favicon.ico'
            ]);
        })
    );
});

self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request).then(function (response) {
            if (response) {
                return response;
            }
            return caches.match('/offline.html');
        }).catch(function() {
            return caches.match('/offline.html');
        })
    );
});

self.addEventListener("message", msg => {
    if (msg.data.action == 'skipWaiting') {
        self.skipWaiting()
    }
})