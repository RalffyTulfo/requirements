const C="req-v1",S=["./","index.html","manifest.webmanifest","icon-192.png","icon-512.png"];
addEventListener("install",e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(S)));skipWaiting()});
addEventListener("activate",e=>e.waitUntil(clients.claim()));
addEventListener("fetch",e=>{
  const r=e.request;
  if(r.method!=="GET"||new URL(r.url).origin!==location.origin)return;
  e.respondWith(fetch(r).then(x=>{const k=x.clone();caches.open(C).then(c=>c.put(r,k));return x}).catch(()=>caches.match(r)));
});
