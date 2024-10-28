'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "1e3ab1a6d8230f0480464521d191f6c1",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "87543463a137bc358f9e5204ba93cad6",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "33119c3b513c1baaf627c13e56559676",
".git/logs/refs/heads/main": "d2fd61225c7ad4f518be46f4d51552fb",
".git/logs/refs/remotes/origin/main": "fa1c344121d5ac88d5f9e746e268130f",
".git/objects/00/3240364b889adebc9f54b1a599993063af0e0a": "f2dd41d5ee8627729a77d77743f7c90a",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/0b/d28ec241b6b5519de0eecc976cb62d321d69e6": "89fa6a56787f613df6fac4e3eb7921a6",
".git/objects/10/e4a3323a308643fe6d7a60570b38ed8da63614": "fdb7aa08dcf50b416926285b831ecaa7",
".git/objects/11/94f7d3ac50692e9451e2a6c01892f0325866bb": "72567a26c6c5f069788ad2af219b48ec",
".git/objects/1d/90d5df15addd343fca125b4bf0dcf269745543": "2ef59161d202fd2e5843f0f50d7d8cb8",
".git/objects/1e/ce6cc2d9c0fa7deba7478d4fe652b1603e8c24": "b2bd09607d18029f0c8453aa570babe2",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/23/bde405d3e556a4649f16fc18ead31ebabf9c1d": "dc57dde69c530b6bec2d9c3c4e94742b",
".git/objects/24/48ec80bf3b5b241583f07b1ed0c0e3b0e3517e": "4be816613c4a3988da6dbadec1b19980",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/27/87f5cc2623b11069b2e258dc4e2dac643ab743": "5eda2e7ac80e7b71e69388ae4f731991",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/31/d095934c852bc775c09859df349817d4731569": "468c9615fe9eeb1eff006f0e770680eb",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4a/526f43f0fe903e9cd42908dfd568835a833353": "10abdea3c13f4132d26c45551a6d9163",
".git/objects/53/e36b7ae6e54effd282ae0934432bf4c63d1290": "6b10171251451a119cb263231172e782",
".git/objects/54/f710281b84dcb86e9584055e6a765f000577fd": "9be30a5285163a713bbf3e2d10323a6d",
".git/objects/56/feddb0c5675f3d696a17a14d6caf12d198d34f": "3c0f4f5cecd6ce9fe2a30edd378e5f10",
".git/objects/57/4d82467c742f7784226f25e1f79f784b57a3fb": "79bfc7ee37de95490875e35fb4addcbe",
".git/objects/60/d9127fd61abb19c44546b7cca153d30e1ac2d1": "f3c106cf2060502d9cf057506064e057",
".git/objects/65/29cfba55f6b18881be0b115a762a2c53324771": "88361ee226f965f8fc7c8931385f1b26",
".git/objects/65/3f89a0b0dd52c325285cd336aa995bdcd65ab4": "ac579582da82d3dfbef237f1914c72bd",
".git/objects/68/ecbb2db210b061f9097f93842d65ac0dbe9a8a": "3a3cc138cf8fc52e5195c5b111c6b8f3",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/6d/3632331566d97928e8026d6816ca6e511c0cf6": "746092e68ea2b046a1207c92e5a8d0e3",
".git/objects/72/a6ae7bd9975e6c314c64c30e98e529f2012902": "785318538d8bd2c7b058b672eff2734a",
".git/objects/79/48b622a8a3c68581b9b817e28c0d7b9b19affa": "1320d4d34d5dc86777a46f699d551423",
".git/objects/80/bd060254ed40dfb3b7323229934b7e810ce755": "302104b0b4d3918184f81e3bd1b6cb81",
".git/objects/85/1031bc1d4d376ed0d4fb23c191e8d1ba51720a": "b12045f2b20ae4f653875e8762672764",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/ec40212cfdf8d2ca199b9f7a105df395590063": "dbbf8e04dff75cf82642b2612f914533",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/95/9de2a093fba8b05707d929cb5ff58907d90310": "50e1dc0d7914e9359a0f3f8e74d24e74",
".git/objects/a0/7c3605696237d563d7b3c9d2ff44888908f83c": "96ab21c761eb17dfc09dc6d956969199",
".git/objects/ad/5f06892d2186daa8127451fb70f25e1dd88abc": "3db6ae821422f7553a8c7849b4b966cd",
".git/objects/af/59bc852eb0b628aef82201782339c3d473e225": "70e4c28c0464d6b9f6b863dc086b766c",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b2/dbc91dda3abd670d85f861c9caae02cc4e7af8": "d7fffd8371c58289ab44defff4dea6ad",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/cc/df6f759b5344228594d44e2a8cc89305fac276": "68365e230173b97bf93f0a0ca9e7713d",
".git/objects/d1/ce14ef0fd53ec4c1ac3609c76d25091689a723": "f19e15ac85a3560856c15c048ff2d232",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/da/465b6fd79bcba1d6fb7ee817087db3e1d83ff6": "2435a74b74f71236cba3fbfe79084485",
".git/objects/dc/30bc737e667fb1973c3670a85ea7aeb5648ea9": "5f0ef48c5ded62a17f64a51fef139c06",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/refs/heads/main": "8f47f0ecf84b574f5871044101b57f9c",
".git/refs/remotes/origin/main": "8f47f0ecf84b574f5871044101b57f9c",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "8ea08ea2444cc58ec5807fd7669e488f",
"assets/NOTICES": "e1c4f0bd38ad7d25555d74ddf494849e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "4f699b7ee2874b7a9366fcc9e2e27c40",
"canvaskit/canvaskit.js.symbols": "02ca0d4423b290767d0606bde2056641",
"canvaskit/canvaskit.wasm": "f172263ba40d86b24d99c470a02c81a0",
"canvaskit/chromium/canvaskit.js": "a8a985c372a3da4adddce08dddd93e4a",
"canvaskit/chromium/canvaskit.js.symbols": "11433155525b511a0fe6197be0f2d4dd",
"canvaskit/chromium/canvaskit.wasm": "97db98fab2b4be98243c00b674bf4f5e",
"canvaskit/skwasm.js": "6c600d9c23a1d942bfa63d333b31dbb6",
"canvaskit/skwasm.js.symbols": "3639cda4d0074069873d30e32dfd6a83",
"canvaskit/skwasm.wasm": "a8d94e2ed35c809aacb0f183b9b67517",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"css/style.css": "f009890f0e3a73e6336c3dcb20bb04f8",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "0d887f6cf72fdd14a8af3f78925f2d4f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "563c2456b8218bd321cc3c25f4c24a13",
"/": "563c2456b8218bd321cc3c25f4c24a13",
"js/js-interop.js": "2cd9c4f4430adcc9d5baa19379696e5b",
"main.dart.js": "52875f69cfc73d2678c7e7c720f3860c",
"manifest.json": "2fb9188af0bb263135877d3e3a776209",
"version.json": "9094aacdae789dccd67fa32109ff1a18"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
