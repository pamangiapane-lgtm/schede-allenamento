// Service Worker Coach Command Center (v270-update-baseline-weights-14sept)
const CACHE_NAME = 'coach-v289-anja-w4s2-aligned';

self.addEventListener('install', event => {
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.filter(k => k.startsWith('coach-') && k !== CACHE_NAME).map(k => caches.delete(k))
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  // Richieste HTML / navigazione: sempre Network-First per mostrare le modifiche subito
  if (event.request.mode === 'navigate' || event.request.destination === 'document' || event.request.url.includes('index.html') || event.request.url.includes('coach')) {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          if (response && response.status === 200) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
          }
          return response;
        })
        .catch(() => caches.match(event.request))
    );
    return;
  }

  // Non intercettare chiamate API dirette verso Supabase o Google Apps Script (sempre live via rete)
  if (event.request.url.includes('supabase.co') || event.request.url.includes('script.google.com')) {
    return;
  }

  // Risorse statiche
  event.respondWith(
    fetch(event.request)
      .then(response => {
        if (response && response.status === 200) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        }
        return response;
      })
      .catch(() => caches.match(event.request))
  );
});
