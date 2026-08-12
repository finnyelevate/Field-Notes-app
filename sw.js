const CACHE='efn-v6';
const ASSETS=['./','index.html','manifest.json','icon-192.png','icon-512.png',
 'lib/jspdf.umd.min.js',
 'lib/jszip.min.js',
 'lib/pdf.min.js',
 'lib/pdf.worker.min.js'];
self.addEventListener('install',e=>{
  e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting()));
});
self.addEventListener('activate',e=>{
  e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE&&k!=='efn-docs').map(k=>caches.delete(k)))).then(()=>self.clients.claim()));
});
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET')return;
  const url=new URL(e.request.url);
  const isShell=e.request.mode==='navigate'||url.pathname.endsWith('/index.html')||
    url.pathname.endsWith('/sw.js')||url.pathname.endsWith('/manifest.json')||url.pathname.endsWith('/resources.json');
  if(isShell){
    // network-first: always get the newest build when online
    e.respondWith(
      fetch(e.request,{cache:'no-cache'}).then(res=>{
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
