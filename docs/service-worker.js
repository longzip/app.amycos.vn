if(!self.define){let n,e={};const i=(i,c)=>(i=new URL(i+".js",c).href,e[i]||new Promise((e=>{if("document"in self){const n=document.createElement("script");n.src=i,n.onload=e,document.head.appendChild(n)}else n=i,importScripts(i),e()})).then((()=>{let n=e[i];if(!n)throw new Error(`Module ${i} didn’t register its module`);return n})));self.define=(c,o)=>{const s=n||("document"in self?document.currentScript.src:"")||location.href;if(e[s])return;let l={};const f=n=>i(n,s),r={module:{uri:s},exports:l,require:f};e[s]=Promise.all(c.map((n=>r[n]||f(n)))).then((n=>(o(...n),l)))}}define(["./workbox-49d4ab5b"],(function(n){"use strict";n.setCacheNameDetails({prefix:"amycos"}),self.addEventListener("message",(n=>{n.data&&"SKIP_WAITING"===n.data.type&&self.skipWaiting()})),n.precacheAndRoute([{url:"CNAME",revision:"1cf539fb6a256e557fcc4e2338170e16"},{url:"css/app.31d6cfe0.css",revision:null},{url:"css/vendor.e92fdd62.css",revision:null},{url:"favicon.ico",revision:"1102ff6f4b2a87efed297b8f901c6ab8"},{url:"fonts/KFOkCnqEu92Fr1MmgVxIIzQ.68bb21d0.woff",revision:null},{url:"fonts/KFOlCnqEu92Fr1MmEU9fBBc-.48af7707.woff",revision:null},{url:"fonts/KFOlCnqEu92Fr1MmSU5fBBc-.c2f7ab22.woff",revision:null},{url:"fonts/KFOlCnqEu92Fr1MmWUlfBBc-.77ecb942.woff",revision:null},{url:"fonts/KFOlCnqEu92Fr1MmYUtfBBc-.f5677eb2.woff",revision:null},{url:"fonts/KFOmCnqEu92Fr1Mu4mxM.f1e2a767.woff",revision:null},{url:"fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.4d73cb90.woff",revision:null},{url:"fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.c5371cfb.woff2",revision:null},{url:"icons/apple-icon-120x120.png",revision:"a00320ab743c648ddc702c72da3daf11"},{url:"icons/apple-icon-152x152.png",revision:"886830b7a8d586dd965f7a55697a9c44"},{url:"icons/apple-icon-167x167.png",revision:"2d93a5396b7f7cd65fab12caa4447761"},{url:"icons/apple-icon-180x180.png",revision:"6a8e5e6f7ddec8e1995a824337b77f84"},{url:"icons/apple-launch-1080x2340.png",revision:"43b257f36edf0c2e98ac28b359df4041"},{url:"icons/apple-launch-1125x2436.png",revision:"351b6490790a09aa711346d9190d5b69"},{url:"icons/apple-launch-1170x2532.png",revision:"d21d33961caac7de06f3a9efcc6d1666"},{url:"icons/apple-launch-1179x2556.png",revision:"c979452c9b54aca180a56d5422aeae95"},{url:"icons/apple-launch-1242x2208.png",revision:"c4bd53f1b1de16e232e305120f5d84be"},{url:"icons/apple-launch-1242x2688.png",revision:"67ce4e3dc051b606b7dfff3e5e4b3887"},{url:"icons/apple-launch-1284x2778.png",revision:"d0385f843a2537f0251a69facb4f1bf2"},{url:"icons/apple-launch-1290x2796.png",revision:"98cd8992dc013f3a05487582b01bb8ea"},{url:"icons/apple-launch-1536x2048.png",revision:"4114c8b131658faaa47d47a3f4b6ced2"},{url:"icons/apple-launch-1620x2160.png",revision:"202e4b338d3d3fffd9d371f62597b39e"},{url:"icons/apple-launch-1668x2224.png",revision:"6331e85d753f457492d6e40da8061a73"},{url:"icons/apple-launch-1668x2388.png",revision:"49c25fa05d6fa97ca098221279ef5d47"},{url:"icons/apple-launch-2048x2732.png",revision:"d63d9c8ab97e046a416fc7063f1f3fbe"},{url:"icons/apple-launch-750x1334.png",revision:"1efd2acd3a36dc3a4bbdd31e13b7205b"},{url:"icons/apple-launch-828x1792.png",revision:"e74001fe0cc792340bdbefad6cf75445"},{url:"icons/favicon-128x128.png",revision:"445b2cdf61d52af8130bbf7b2fb2e6e8"},{url:"icons/favicon-16x16.png",revision:"f67fa177691dfb805850deb923e5f87e"},{url:"icons/favicon-32x32.png",revision:"897e7fe1f6d1112149e1b32f9dcc75da"},{url:"icons/favicon-96x96.png",revision:"234ec5d601ffb4217d4f274449beb6f0"},{url:"icons/icon-128x128.png",revision:"445b2cdf61d52af8130bbf7b2fb2e6e8"},{url:"icons/icon-192x192.png",revision:"f68f6a757bd6b084ca0ac068d7b4c302"},{url:"icons/icon-256x256.png",revision:"77c93d3273e16101d76ce874d0547ad3"},{url:"icons/icon-384x384.png",revision:"973dfa3242a3b5f3a9851cf0f699fed3"},{url:"icons/icon-512x512.png",revision:"7bd19488cdd45be6ddf13e2691e21263"},{url:"icons/ms-icon-144x144.png",revision:"1add49531756d2686f2862198ae31a98"},{url:"icons/safari-pinned-tab.svg",revision:"44f3b8d5282bc2adb3623e52f46a6a05"},{url:"index.html",revision:"8911572b6979e8816214c416bf67ad81"},{url:"js/134.bd4261ca.js",revision:null},{url:"js/473.c9333622.js",revision:null},{url:"js/968.d1c8871e.js",revision:null},{url:"js/app.afc1872b.js",revision:null},{url:"js/vendor.cc58746b.js",revision:null},{url:"manifest.json",revision:"a06e58cc59dac2cc900774f651d01b1a"}],{}),n.registerRoute(new n.NavigationRoute(n.createHandlerBoundToURL("index.html"),{denylist:[/service-worker\.js$/,/workbox-(.)*\.js$/]}))}));
