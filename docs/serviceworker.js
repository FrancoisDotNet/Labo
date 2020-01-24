var cacheName = 'blazor-pwa';
var filesToCache = [
    //wwwroot
    './.nojekyll',
    './icon-192.png',
    './icon-512.png',
    './index.html',
    './manifest.json',
    './serviceworker.js',
    //css
    './css/bootstrap.css',
    './css/bootstrap.min.css',   
    //_framework
    './_framework/blazor.boot.json',
    './_framework/blazor.webassembly.js',
    //_framework/wasm
    './_framework/wasm/mono.js',
    './_framework/wasm/mono.wasm',
    //_framework/_bin
    './_framework/_bin/BlazorPwa.dll',
    './_framework/_bin/Microsoft.AspNetCore.Authorization.dll',
    './_framework/_bin/Microsoft.AspNetCore.Blazor.dll',
    './_framework/_bin/Microsoft.AspNetCore.Blazor.HttpClient.dll',
    './_framework/_bin/Microsoft.AspNetCore.Components.dll',
    './_framework/_bin/Microsoft.AspNetCore.Components.Forms.dll',
    './_framework/_bin/Microsoft.AspNetCore.Components.Web.dll',
    './_framework/_bin/Microsoft.AspNetCore.Metadata.dll',
    './_framework/_bin/Microsoft.Bcl.AsyncInterfaces.dll',
    './_framework/_bin/Microsoft.Extensions.DependencyInjection.Abstractions.dll',
    './_framework/_bin/Microsoft.Extensions.DependencyInjection.dll',
    './_framework/_bin/Microsoft.Extensions.Logging.Abstractions.dll',
    './_framework/_bin/Microsoft.Extensions.Options.dll',
    './_framework/_bin/Microsoft.Extensions.Primitives.dll',
    './_framework/_bin/Microsoft.JSInterop.dll',
    './_framework/_bin/Mono.WebAssembly.Interop.dll',
    './_framework/_bin/mscorlib.dll',
    './_framework/_bin/System.ComponentModel.DataAnnotations.dll',
    './_framework/_bin/System.Core.dll',
    './_framework/_bin/System.dll',
    './_framework/_bin/System.Net.Http.dll',
    './_framework/_bin/System.Runtime.CompilerServices.Unsafe.dll',
    './_framework/_bin/System.Text.Encodings.Web.dll',
    './_framework/_bin/System.Text.Json.dll',
    './_framework/_bin/WebAssembly.Bindings.dll',
    './_framework/_bin/WebAssembly.Net.Http.dll'
];

self.addEventListener('install', function (e) {
    e.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.addAll(filesToCache); 
        })
    );
});

self.addEventListener('activate', event => {
    event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request, { ignoreSearch: true }).then(response => {
            return response || fetch(event.request);
        })
    );
});