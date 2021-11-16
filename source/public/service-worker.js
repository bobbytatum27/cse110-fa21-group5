/* eslint-disable no-undef */
// service-worker.js

/** @const @private {string} Cache name. */
const CACHE_NAME = 'recipe-manager';

// Once the service worker has been installed, feed it some initial URLs to cache
self.addEventListener('install', function (event) {
	const urlsToCache = ['/'];

	// Perform install steps
	event.waitUntil(
		caches.open(CACHE_NAME).then(function (cache) {
			console.log('Opened cache');
			return cache.addAll(urlsToCache);
		})
	);
});

/**
 * Once the service worker 'activates', this makes it so clients loaded
 * in the same scope do not need to be reloaded before their fetches will
 * go through this service worker
 */
self.addEventListener('activate', function (event) {
	event.waitUntil(clients.claim());
});

// Intercept fetch requests and store them in the cache
self.addEventListener('fetch', function (event) {
	event.respondWith(
		caches.match(event.request).then(function (response) {
			// Cache hit - return response
			if (response) {
				return response;
			}

			return fetch(event.request).then(function (response) {
				// Check if we received a valid response
				if (!response || response.status !== 200 || response.type !== 'basic') {
					return response;
				}

				// IMPORTANT: Clone the response. A response is a stream
				// and because we want the browser to consume the response
				// as well as the cache consuming the response, we need
				// to clone it so we have two streams.
				const responseToCache = response.clone();

				caches.open(CACHE_NAME).then(function (cache) {
					cache.put(event.request, responseToCache);
				});

				return response;
			});
		})
	);
});
