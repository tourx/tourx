'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "a760c495f03e482490695376fcfbc84a",
"assets/assets/icons/account.svg": "8a53e762832801c9014e6922bcec6edd",
"assets/assets/icons/accountActive.svg": "e7006d5f6250118c06062974028723a3",
"assets/assets/icons/explore.svg": "c0920529266b0f4fe8e566c897b1193f",
"assets/assets/icons/exploreActive.svg": "a688007c8b601386d8a2f8858b573d6c",
"assets/assets/icons/home.svg": "326a4ce553836f05a48e1b49ff0e013f",
"assets/assets/icons/homeActive.svg": "30c895180341fb7e16b77c2c2a029052",
"assets/assets/icons/ticket.svg": "df4cdf9aeabadca38c1b702772fbeb7d",
"assets/assets/icons/ticketActive.svg": "be6a6e98b2f46c26b61a5672714492ef",
"assets/assets/images/navigation.png": "4902a3f6d990d349fd6ea8034fa72076",
"assets/assets/images/tourx.png": "5596b2b976996f1c2b23349a8f0504c7",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/icons/airplane.svg": "1cc993a3ad8e2bee1517a4b1685211a8",
"assets/icons/bed.svg": "25d0ca72457cc3d2fad9b29471088157",
"assets/icons/bus.svg": "b8dbc61bd16940fced9ad2a93cd54ab8",
"assets/icons/event.svg": "e71715b1d0b13d34834b378f602fa635",
"assets/images/banner.png": "ff39778a208d37186d7d17698723ffdd",
"assets/images/bogalake.jpg": "040cf36fb72b8c30a1facfcc5de4ccb3",
"assets/images/bus.png": "b969f6b5fc503b6631d77a36422ddf86",
"assets/images/bus_status.png": "89a3945b654a8f99e21eecda7ab0531f",
"assets/images/check-in.png": "c79e3e92fd692c4452720a809f64afdd",
"assets/images/check-out.png": "c07747ae3e9df0f85f183e38f313d933",
"assets/images/daffodil.jpg": "18f531d4e4845dac272b0986cd65b7ae",
"assets/images/dhaka.jpg": "5f26cf7f84428c99af3e432ebbbf3904",
"assets/images/flight%2520status.png": "60d4ea42df95d6e673976274081b9a84",
"assets/images/flight.png": "ca2d6fb18b509fa7b6234fccac97de52",
"assets/images/guide.png": "702569e163ad1d02f666e6e89435301e",
"assets/images/hakaloki.jpg": "4bb5886296ee1b814f421027d0eb57ae",
"assets/images/hanging.jpg": "d83b23b26034eb1098c0b8fcdae304ec",
"assets/images/jaflong.jpg": "5ba8bec6496d268955f01f225a7e7827",
"assets/images/nijhum.jpg": "dd94275d20d6f2c0af2364a80e9f6b65",
"assets/images/nikli.jpg": "7f12667c2bafa2a94690730482f577f2",
"assets/images/notification.png": "4a672fde25ecb43922b9bdffa5ace69e",
"assets/images/package.png": "905f3f5f60ad7d375addb5aad1b4b5d4",
"assets/images/paharpur.jpg": "6eeddb396be5aa2a1ce4d857759e7487",
"assets/images/ratargul.jpg": "5f6e9d475c2daa0bf28d71d52bb5ea0b",
"assets/images/sadapathor.jpg": "4bec17fce2f39233e71be3ea20d6e1b8",
"assets/images/saintmartin.jpg": "3c7b56b601c0640674260029c358a663",
"assets/images/sajek.jpg": "697e91d586f30781adbc3eaabc1acf75",
"assets/images/scan.png": "5f9784ecb418e8d4e94221c1442d1f9f",
"assets/images/shatgambuj.jpg": "14803f5c2675c653a3943b475940ba1e",
"assets/images/shundorbon.jpg": "5355903bb23b746606d382342751418d",
"assets/images/srimongol.jpg": "eeafd324937111ee9fbdfa4c0cbe5a17",
"assets/images/stay.png": "f068dc07642acccbb7401c07f83e0c69",
"assets/images/tanguar.jpg": "84ba1d1b5b8c78e234d95fd3919448c9",
"assets/images/tourxlogo.png": "0cf7e1d3dab7d7b1086a59da17182dd3",
"assets/NOTICES": "2ade1c7733d843402af1e9afcca9bb29",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "41ab402ec8a65fe37e4fcc5b9414dc48",
"/": "41ab402ec8a65fe37e4fcc5b9414dc48",
"main.dart.js": "e7814a318a39807ef4184249d0bf085d",
"manifest.json": "7f7a916810248940646f3c84429c801a",
"version.json": "55928724918bf6d95100f9889824a948"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
