// Minimaler Service Worker: macht die App installierbar, lädt immer die aktuelle Version.
self.addEventListener('install', function(e){ self.skipWaiting(); });
self.addEventListener('activate', function(e){ e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function(e){ /* Netzwerk wie gewohnt */ });
