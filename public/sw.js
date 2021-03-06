importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js');

const {strategies} = workbox;
const {ExpirationPlugin} = workbox.expiration;
const {CacheableResponsePlugin} = workbox.cacheableResponse

workbox.routing.registerRoute(      // caching images
    /\.(?:png|gif|jpg|jpeg|webp|svg)$/,
    new strategies.CacheFirst({
      cacheName: 'images',
      plugins: [
        new ExpirationPlugin({
          maxEntries: 60,
          maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
        }),
      ],
    })
);


workbox.routing.registerRoute(
    /^https:\/\/fonts\.gstatic\home\.com/,   // caching fonts and other underlying files 
    new strategies.CacheFirst({
      cacheName: 'google-fonts-webfonts',
      plugins: [
        new CacheableResponsePlugin({
          statuses: [0, 200],
        }),
        new ExpirationPlugin({
          maxAgeSeconds: 60 * 60 * 24 * 365,
          maxEntries: 30,
        }),
      ],
    })
);


workbox.routing.registerRoute(  // caching other css and js files that are not cache 
    /\.(?:js|css|scss)$/,
    new strategies.StaleWhileRevalidate({
      cacheName: 'static-resources',
    })
);

workbox.precaching.precacheAndRoute([{"revision":"ed9b0170c12acf55b35d30e4ed5427c0","url":"index.html"},{"revision":"33dbdd0177549353eeeb785d02c294af","url":"logo192.png"},{"revision":"917515db74ea8d1aee6a246cfbcc0b45","url":"logo512.png"},{"revision":"414b09c7b9a6af0531b27088b7cef071","url":"manifest.json"}]);