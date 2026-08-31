// Marsala Volley — Service Worker v50 (Network-First per Aggiornamenti Immediati)
const CACHE_NAME = 'marsala-v50-live';

const STATIC_ASSETS = [
  './logo.jpg',
  './manifest.json'
];

self.addEventListener('install', event => {
  // Salta immediatamente l'attesa per attivarsi subito
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(STATIC_ASSETS))
  );
});

self.addEventListener('activate', event => {
  // Elimina TUTTE le vecchie cache (es. schede-v47, vecchie versioni)
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.filter(key => key !== CACHE_NAME).map(key => {
          console.log('[SW] Rimozione vecchia cache:', key);
          return caches.delete(key);
        })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  // Per chiamate API Google Apps Script: solo rete diretta
  if (url.hostname.includes('script.google.com')) {
    event.respondWith(fetch(event.request));
    return;
  }

  // Per TUTTO il resto (HTML, CSS, JS): NETWORK-FIRST (sempre ultima versione online, fallback cache se offline)
  event.respondWith(
    fetch(event.request)
      .then(response => {
        if (response && response.status === 200 && response.type === 'basic') {
          const responseToCache = response.clone();
          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, responseToCache);
          });
        }
        return response;
      })
      .catch(() => {
        // Se offline in palestra, usa la cache salvata
        return caches.match(event.request);
      })
  );
});

// Push Notifications
self.addEventListener('push', event => {
  const data = event.data ? event.data.json() : {};
  event.waitUntil(
    self.registration.showNotification(data.title || '🏐 Marsala Volley', {
      body: data.body || 'Compila il questionario wellness di oggi',
      icon: './logo.jpg',
      badge: './logo.jpg',
      tag: 'wellness-daily',
      renotify: true,
      data: { url: data.url || './wellness.html' }
    })
  );
});

self.addEventListener('notificationclick', event => {
  event.notification.close();
  const targetUrl = event.notification.data?.url || './wellness.html';
  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then(windowClients => {
      for (let client of windowClients) {
        if (client.url.includes('wellness.html') || client.url.includes('schede-allenamento')) {
          client.focus();
          return client.navigate(targetUrl);
        }
      }
      return clients.openWindow(targetUrl);
    })
  );
});
