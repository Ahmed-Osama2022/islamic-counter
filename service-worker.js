importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.0.2/workbox-sw.js');

workbox.routing.registerRoute(
    ({ request }) => request.destination === 'image',
    new workbox.strategies.CacheFirst()
    // new workbox.strategies.NetworkFirst()
);

// const staticCacheName = 'site-static';
const staticCacheName = 'site-static-ahmed-v2';
const assets = [
    '/',
    '/index.html',
    './main.js',
    './islamic-logo.jpg',
    './style.css',
    './prophet-muhammad/changes.css',
    './prophet-muhammad/changes.js',
    './prophet-muhammad/index.html',
    './Noto_Naskh_Arabic/NotoNaskhArabic-VariableFont_wght.ttf',
    './Noto_Naskh_Arabic/static/NotoNaskhArabic-Regular.ttf',
    './Noto_Naskh_Arabic/static/NotoNaskhArabic-Medium.ttf',
    './Noto_Naskh_Arabic/static/NotoNaskhArabic-Bold.ttf',
    './Noto_Naskh_Arabic/static/NotoNaskhArabic-SemiBold.ttf'
];

self.addEventListener('install', evt => {
    // console.log('service worker has been installed');
    evt.waitUntil(caches.open(staticCacheName).then(cache => {
        console.log('caching shell assets');
        // cache.addAll() >> It's async task!!
        cache.addAll(assets);
    }))
});

// Activate event 
self.addEventListener('activate', evt => {
    evt.waitUntil(
        caches.keys().then(keys => {
            // console.log(keys);
            return Promise.all(keys
                .filter(key => key !== staticCacheName)
                .map(key => caches.delete(key))
            )

        })
    )
});

// fetch event 
self.addEventListener('fetch', evt => {
    // console.log('fetch event', evt);
    evt.respondWith(
        caches.match(evt.request).then(cacheRes => {
            return cacheRes || fetch(evt.request);
        })
    );
});