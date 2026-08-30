const CACHE = 'schede-v17';
const STATIC = ['/', '/index.html', '/scheda.html', '/style.css', '/logo.jpg', '/icon.svg', '/manifest.json'];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(STATIC)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('push', event => {
  const data = event.data ? event.data.json() : {};
  event.waitUntil(
    self.registration.showNotification(data.title || 'Marsala Volley 🏐', {
      body:  data.body  || 'Compila il wellness prima della seduta di oggi!',
      icon:  '/schede-allenamento/icon.svg',
      badge: '/schede-allenamento/icon.svg',
      tag:   'wellness-reminder',
      data:  { url: data.url || '/schede-allenamento/scheda.html' }
    })
  );
});

self.addEventListener('notificationclick', event => {
  event.notification.close();
  const url = event.notification.data?.url || '/schede-allenamento/scheda.html';
  event.waitUntil(clients.openWindow(url));
});

self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);

  // API Google Apps Script: sempre rete, nessuna cache
  if (url.hostname.includes('script.google.com')) {
    e.respondWith(fetch(e.request).catch(() =>
      new Response(JSON.stringify({ errore: 'Offline — nessuna connessione' }), {
        headers: { 'Content-Type': 'application/json' }
      })
    ));
    return;
  }

  // Risorse statiche: cache-first, fallback rete
  e.respondWith(
    caches.match(e.request).then(cached => cached || fetch(e.request).then(res => {
      if (res.ok) {
        const clone = res.clone();
        caches.open(CACHE).then(c => c.put(e.request, clone));
      }
      return res;
    }))
  );
});
