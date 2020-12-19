(()=>{"use strict";var e={496:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(645),o=n.n(r),a=n(667),i=n.n(a),c=n(479),d=o()((function(e){return e[1]})),s=i()(c);d.push([e.id,'@keyframes fadeIn{0%{opacity:0}100%{opacity:1}}body{padding:0;margin:0;font-family:"Montserrat",sans-serif}#content{margin:0;padding:0}#content header{display:flex;align-items:center;justify-content:space-between;max-width:960px;margin:0 auto;padding:2.2rem 1rem 1rem}#content header h1{font-size:1.4rem;font-family:"Poiret One",cursive}#content header nav{margin-left:0}#content header nav button{outline:none;border:none;background:none;font-size:1rem;text-transform:uppercase;padding:.6rem 1.3rem;animation:fadeIn ease .6s}#content header nav button:hover,#content header nav button.active{background-color:#9a2820;color:#fff;transition:.3s}#content #main-content{max-width:100%;padding:0;margin:0}#content #main-content .inner{display:grid;grid-template-columns:repeat(2, 1fr);gap:100px;padding:15rem 2rem;color:#fff;background:url('+s+') no-repeat center center;background-size:cover;animation:fadeIn ease 1s}#content #main-content .inner h1{font-size:2.4rem;font-family:"Poiret One",cursive}#content #main-content .inner h2{font-size:2rem;font-family:"Poiret One",cursive}#content #main-content .inner p{font-size:1rem;line-height:2rem;text-align:center}#content #main-content .inner .grid-item{display:flex;flex-direction:column;justify-content:center;align-items:center;border-radius:4px;background:rgba(0,0,0,.2);padding:3rem}#content #main-content .menu{backround-image:none;padding:10rem;margin:10rem}#content #footer{max-width:960px;margin:2rem auto;text-align:center;padding:1rem}@media(max-width: 900px){#content #main-content .inner{grid-template-columns:repeat(1, 1fr)}}@media(max-width: 550px){#content header{padding:1rem}#content header h1{font-size:1rem}#content header nav{margin-left:0}#content header nav button{border:none;background:none;font-family:"Montserrat",sans-serif;font-size:.8rem;text-transform:uppercase;padding:0rem .5rem}#content #main-content .inner{grid-template-columns:repeat(1, 1fr)}}',""]);const l=d},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);r&&o[d[0]]||(n&&(d[2]?d[2]="".concat(n," and ").concat(d[2]):d[2]=n),t.push(d))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},379:(e,t,n)=>{var r,o=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a=[];function i(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function c(e,t){for(var n={},r=[],o=0;o<e.length;o++){var c=e[o],d=t.base?c[0]+t.base:c[0],s=n[d]||0,l="".concat(d," ").concat(s);n[d]=s+1;var u=i(l),m={css:c[1],media:c[2],sourceMap:c[3]};-1!==u?(a[u].references++,a[u].updater(m)):a.push({identifier:l,updater:h(m,t),references:1}),r.push(l)}return r}function d(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var a=n.nc;a&&(r.nonce=a)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var i=o(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var s,l=(s=[],function(e,t){return s[e]=t,s.filter(Boolean).join("\n")});function u(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=l(t,o);else{var a=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}function m(e,t,n){var r=n.css,o=n.media,a=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var p=null,f=0;function h(e,t){var n,r,o;if(t.singleton){var a=f++;n=p||(p=d(t)),r=u.bind(null,n,a,!1),o=u.bind(null,n,a,!0)}else n=d(t),r=m.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var n=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=i(n[r]);a[o].references--}for(var d=c(e,t),s=0;s<n.length;s++){var l=i(n[s]);0===a[l].references&&(a[l].updater(),a.splice(l,1))}n=d}}}},479:(e,t,n)=>{e.exports=n.p+"images/7924a988e50fbd4bb591.jpg"}},t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={id:r,exports:{}};return e[r](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),(()=>{var e=n(379),t=n.n(e),r=n(496);t()(r.Z,{insert:"head",singleton:!1}),r.Z.locals;const o=function(e,t,n){let r=document.createElement("button");return r.setAttribute(e,t),r.textContent=n,r.className="nav-button",r},a="home";function i(e,t,n){let r=document.createElement("div");r.className="grid-item";let o=document.createElement("h1"),a=document.createElement("h2"),i=document.createElement("p");return o.innerText=e,a.innerText=t,i.innerText=n,r.appendChild(o),r.appendChild(a),r.appendChild(i),r}const c=function(){(e=>{let t=document.getElementById("home"),n=document.querySelectorAll(".nav-button");for(let e=0;e<n.length;e++)n[e].getAttribute("id")==a?t.classList.add("active"):n[e].className="nav-button"})();let e=document.getElementById("main-content");e.innerHTML="";let t=document.createElement("div");t.className="inner",e.appendChild(t),t.appendChild(i("Holiday Pop-up!","All Dogs 50% off!","Our dogs are loaded with nitrates and sodium - the best dogs in San Francisco or your money back!")),t.appendChild(i("Wine Shop","Only Premium Quality!","This isn't Two Buck Chuck from Trader Joe's, this is Costco Quality!"))},d="menu",s=function(){(e=>{let t=document.getElementById("menu"),n=document.querySelectorAll(".nav-button");for(let e=0;e<n.length;e++)n[e].getAttribute("id")==d?t.classList.add("active"):n[e].className="nav-button"})();let e=document.getElementById("main-content");e.innerHTML="",e.classList.add("menu");let t=document.createElement("div");t.classList.add("inner","menu"),e.appendChild(t)},l="contact",u=function(){(e=>{let t=document.getElementById("contact"),n=document.querySelectorAll(".nav-button");for(let e=0;e<n.length;e++)n[e].getAttribute("id")==l?t.classList.add("active"):n[e].className="nav-button"})();let e=document.getElementById("main-content");e.innerHTML="",e.classList.add("menu");let t=document.createElement("div");t.classList.add("inner","menu"),e.appendChild(t)};(function(){const e=document.getElementById("content"),t=document.createElement("header");e.appendChild(t);const n=document.createElement("h1");n.textContent="Hot Dogs + Wine",t.appendChild(n);const r=document.createElement("nav");r.setAttribute("id","global-nav"),r.appendChild(o("id","home","Home")),r.appendChild(o("id","menu","Menu")),r.appendChild(o("id","contact","Contact")),t.appendChild(r)})(),function(){const e=document.createElement("main");e.setAttribute("id","main-content"),content.appendChild(e)}(),function(){const e=document.getElementById("home"),t=document.getElementById("menu"),n=document.getElementById("contact");e.addEventListener("click",c),t.addEventListener("click",s),n.addEventListener("click",u)}(),c(),function(){const e=document.createElement("footer");e.setAttribute("id","footer"),e.textContent="Seriously, Costco Hot Dogs + Wine. Copyright 2020.",content.appendChild(e)}()})()})();