//Precache + cache fallback to web -------------------------------------------------
const cacheVersionName = ["staticCache-v1"];

//her kan der evt scannes directory på serveren .. og bygge et array til cache

//static elements to cache
//all elements to create the app chaches here
let staticUrlsToCache = [
  "/assets/css/main.css",
  "/assets/js/app.js",
  "/assets/visuals/icons/icon-192x192.png",
  "/assets/visuals/icons/icon-256x256.png",
  "/assets/visuals/icons/icon-384x384.png",
  "/assets/visuals/icons/icon-512x512.png",
  "/assets/visuals/img/dot-icon.png",
  "/assets/visuals/svg/the-header.svg",
  "/assets/visuals/svg/the-needle.svg",
  "/assets/visuals/svg/the-wheel.svg",
  "/assets/visuals/svg/turn-phone-around.svg",
  "/index.html",
  "/manifest.json"
];

self.addEventListener("install", (event) => {
  //perform install steps
  console.log("installing.....");
  //here we cache the event
  event.waitUntil(
    //opret cache til static elements. hvis man bruger caches.open på en cache navn der eksistere så oprettes cachen automatisk
    caches.open(cacheVersionName[0]).then((cache) => {
      console.log("Initial cache of statics");
      return cache.addAll(staticUrlsToCache);
    })
  );
});

//activate sletter gamle caches virker udfra cacheVersionName
self.addEventListener("activate", (event) => {
  //find alle cache keys (cache navne) og fortsæt md en array med cache navn

  event.waitUntil(
    caches.keys().then((keys) => {
      //slet caches der ikke findes i cacheVersionName
      return Promise.all(
        keys.map((key) => {
          if (!cacheVersionName.includes(key)) {
            //her slettes den enkelte cache der ikke er i arrayet
            return caches.delete(key);
          }
        })
      );
    })
  );
});

//cache then fallback to web and cache result

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.open(cacheVersionName[0]).then((cache) => {
      return cache
        .match(event.request)
        .then((response) => {
          if (response) {
            //er der noget i cache
            console.log("found response in cache:", response);

            return response;
          }
          console.log(
            "No response for %s found in cache. About to fetch" +
              "from network...",
            event.request.url
          );

          return fetch(event.request.clone()).then((response) => {
            console.log(
              "response for %s from network is: %0",
              event.request.url,
              response
            );
            if (response.status < 400 && response.headers.has("content-type")) {
              console.log("Caching the response to", event.request.url);
              cache.put(event.request, response.clone());
            } else {
              console.log("not caching the response to", event.request.url);
            }

            return response;
          });
        })
        .catch((error) => {
          // excptions fra match() or fetch(). ikke https
          console.error(" error in fetch handler:", error);

          throw error;
        });
    })
  );
  return;
});
