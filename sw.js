const CACHE='efn-v3';
const ASSETS=['./','index.html','manifest.json','icon-192.png','icon-512.png',
 'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js',
 'https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js',
 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js',
 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js'];
self.addEventListener('install',e=>{
  e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting()));
});
self.addEventListener('activate',e=>{
  e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));
});
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET')return;
  const url=new URL(e.request.url);
  const isShell=e.request.mode==='navigate'||url.pathname.endsWith('/index.html')||
    url.pathname.endsWith('/sw.js')||url.pathname.endsWith('/manifest.json');
  if(isShell){
    // network-first: always get the newest build when online
    e.respondWith(
      fetch(e.request).then(res=>{
        if(res.ok){const cl=res.clone();caches.open(CACHE).then(c=>c.put(e.request,cl));}
        return res;
      }).catch(()=>caches.match(e.request,{ignoreSearch:true})
        .then(r=>r||caches.match('index.html')))
    );
    return;
  }
  // cache-first for libraries, icons, everything static
  e.respondWith(caches.match(e.request,{ignoreSearch:true}).then(r=>r||fetch(e.request).then(res=>{
    if(res.ok){const cl=res.clone();caches.open(CACHE).then(c=>c.put(e.request,cl));}
    return res;
  }).catch(()=>caches.match('index.html'))));
});
