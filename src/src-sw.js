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

workbox.precaching.precacheAndRoute(self.__WB_MANIFEST);