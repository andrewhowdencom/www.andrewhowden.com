(global=>{var cacheName="59";var preCache=["/network-error/"];var networkFailurePage="/network-error/";var networkFailureResponseOpts={status:503,statusText:"NetworkFailure"};var hostPort="";if(location.port){hostPort+=":"+location.port}var host=location.protocol+"//"+location.hostname+hostPort;var isUrlDocument=function(url){return/\/$|\/[A-z]{1,}$/m.test(url)};var cacheFirst=function(request){if(request.url.indexOf(host)===-1){return fetch(request)}return caches.open(cacheName).then(function(cache){return cache.match(request).then(function(response){var fetchPromise=fetch(request).then(function(networkResponse){if(networkResponse.ok!==false){cache.put(request,networkResponse.clone())}return networkResponse});return response||fetchPromise})})};var networkFailure=function(request){if(!isUrlDocument(request.url)){return new Response(new Blob,networkFailureResponseOpts)}return caches.open(cacheName).then(function(cache){return cache.match(networkFailurePage).then(function(response){return response.blob().then(function(failureBlob){return new Response(failureBlob,networkFailureResponseOpts)})})})};global.addEventListener("install",(event=>event.waitUntil(caches.open(cacheName).then((cache=>{return cache.addAll(preCache)})))));global.addEventListener("activate",(event=>event.waitUntil(caches.keys().then(function(oldCaches){return Promise.all(oldCaches.filter(function(oldCacheName){return oldCacheName!==cacheName}).map(function(oldCacheName){return caches.delete(oldCacheName)}))}))));global.addEventListener("fetch",function(e){e.respondWith(cacheFirst(e.request).catch(function(){return networkFailure(e.request)}))})})(self);
//# sourceMappingURL=site/static/serviceworker.js.map