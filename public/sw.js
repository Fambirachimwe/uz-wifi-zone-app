const staticCacheName = 'site-static-v1';
const dynamicCache = 'site-dynamic-v1'


self.addEventListener('install', (evt) => {
    evt.waitUntil(
        caches.open(staticCacheName).then(cache =>{
            console.log('caching shell assets')
            
    }));
    
});

 //activate service worker
 self.addEventListener('activate', evt => {
    console.log('service worker has been activated');
});


 //fetch event 
 self.addEventListener('fetch', (evt) => {
    evt.respondWith(
        caches.match(evt.request).then(cachesRes => {
            return cachesRes || fetch(evt.request).then(fetchRes =>{
                return caches.open(dynamicCache).then(cache => {
                    // if (!/^https?:$/i.test(new URL(request.url).protocol)) return;
                    cache.put(evt.request.url, fetchRes.clone());
                    return fetchRes
                })
            })
        }).catch(() => {
            if(evt.request.url.indexOf('.html') > -1){
                return caches.match('./pages/fallback.html')
            }
        }
            
    ))
});