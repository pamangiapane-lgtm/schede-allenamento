const CACHE = 'schede-v30';
const BASE = '/schede-allenamento';
const STATIC = [
  BASE + '/', BASE + '/index.html', BASE + '/scheda.html',
  BASE + '/style.css', BASE + '/logo.jpg', BASE + '/icon.svg', BASE + '/manifest.json'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE)
      .then(c => Promise.allSettled(STATIC.map(u => c.add(u))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);

  // API Google Apps Script: sempre rete, nessuna cache
  if (url.hostname.includes('script.google.com')) {
    // AKfycbyxLzbnm: passa direttamente senza fallback (debug CORS)
    if (url.pathname.includes('AKfycbyxLzbnm')) {
      e.respondWith(fetch(e.request));
      return;
    }
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

self.addEventListener('push', e => {
  const data = e.data ? e.data.json() : {};
  e.waitUntil(
    self.registration.showNotification(data.title || '🏐 Marsala Volley', {
      body: data.body || 'Compila il questionario wellness di oggi',
      icon: '/schede-allenamento/logo.jpg',
      badge: '/schede-allenamento/logo.jpg',
      tag: 'wellness-daily',
      renotify: false,
      data: { url: data.url || '/schede-allenamento/scheda.html' }
    })
  );
});

self.addEventListener('notificationclick', e => {
  e.notification.close();
  const url = e.notification.data?.url || '/schede-allenamento/scheda.html';
  e.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then(wins => {
      for (const w of wins) {
        if (w.url.includes('scheda.html')) { w.focus(); return w.navigate(url); }
      }
      return clients.openWindow(url);
    })
  );
});
