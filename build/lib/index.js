!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("react"));else if("function"==typeof define&&define.amd)define(["react"],t);else{var r="object"==typeof exports?t(require("react")):t(e.react);for(var n in r)("object"==typeof exports?exports:e)[n]=r[n]}}(window,(function(e){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=2)}([function(t,r){t.exports=e},function(e,t,r){(function(t){const n=r(4);e.exports={keyStore:new class{constructor(){let e=void 0;this.encryptString=t=>{const r=n.dataToBuffer(t),o=window.crypto.getRandomValues(new Uint8Array(12));return window.crypto.subtle.encrypt({name:"AES-GCM",iv:o},e,r).then(e=>n.buildEvervaultString(o,e)).catch(e=>{throw new Error("Encryption operation failed.")})},this.decryptString=t=>{if(n.isEvervaultString(t)){const r=n.parseEvervaultString(t),o=n.b64ToBuffer(r.browserData),i=n.b64ToBuffer(r.iv);return window.crypto.subtle.decrypt({name:"AES-GCM",iv:i},e,o).then(e=>n.bufferToString(e)).catch(e=>{throw new Error(e)})}return t},this.updateKey=async t=>{if(!e){const r=await n.getEncryptionKey(t||localStorage.getItem("evervault-privateKey"));e=r}}}},encrypt:function(e,t={}){const r=(e,t)=>{if(e){return(async(e,t)=>{let r=Object.assign({},e);for(let e=0;e<t.length;e++){let o=t[e];r[o]&&(r[o]=await this.keyStore.encryptString(n.ensureString(r[o])))}return r})(e,t)}};if("object"==typeof e&&e&&"Array"!==e.constructor.name&&t.preserveObjectShape){const n=t.fieldsToEncrypt||Object.keys(e);return this.keyStore.updateKey(t.privateKey).then(()=>r(e,n))}if(void 0!==e&&"symbol"!=typeof e)return this.keyStore.updateKey(t.privateKey).then(()=>this.keyStore.encryptString(n.ensureString(e)))},decrypt:function(e,t){const r=e=>(async t=>{let r=new Array(t.length);for(let o=0;o<e.length;o++)r[o]=await this.keyStore.decryptString(n.ensureString(t[o]));return r})(e),o=(e,t)=>{if(e){return(async(e,t)=>{let r=Object.assign({},e);for(let e=0;e<t.length;e++){let o=t[e];r[o]&&(r[o]=await this.keyStore.decryptString(n.ensureString(r[o])))}return r})(e,t)}};return"object"==typeof e?"Array"===e.constructor.name?this.keyStore.updateKey(t).then(()=>r(e)):this.keyStore.updateKey(t).then(()=>o(e,Object.keys(e))):void 0!==e&&"symbol"!=typeof e?this.keyStore.updateKey(t).then(()=>this.keyStore.decryptString(n.ensureString(e))):e},logout:()=>{localStorage.removeItem("evervault-privateKey"),localStorage.removeItem("evervault-accessToken"),localStorage.removeItem("evervault-refreshToken"),localStorage.removeItem("evervault-haiku"),n.handleRedirect(`${authRedirectUrl}/${MACHINE_NAME}`)},refreshAccessToken:(e,t)=>{const r={accessToken:e||localStorage.getItem("evervault-accessToken"),refreshToken:t||localStorage.getItem("evervault-refreshToken")};return fetch("https://api.evervault.dev/v1/token/refresh",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)}).then(e=>e.json()).then(({accessToken:e})=>e).catch(e=>{throw e})},checkAuth:e=>{const r=window.location.hash.substring(2);window.location.hash="/";const o=localStorage.getItem("evervault-privateKey"),i=localStorage.getItem("evervault-accessToken"),a=localStorage.getItem("evervault-refreshToken"),c=t.ENV.AUTH_REDIRECT_URL;i&&a&&o||r?r&&n.setUserKeysInStorage(r):n.handleRedirect(`${c}/${e}`)}}}).call(this,r(3))},function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return p}));var n=r(0),o=r.n(n),i=r(1),a=r.n(i);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e,t,r){return function(r){function n(e){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),(r=s(this,l(n).call(this,e))).state={evervault:a()(t,"https://auth.evervault.com")},r}var i,c,p;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(n,r),i=n,(c=[{key:"render",value:function(){return o.a.createElement(e,{evervault:this.state.evervault})}}])&&u(i.prototype,c),p&&u(i,p),n}(o.a.Component)}},function(e,t){var r,n,o=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function c(e){if(r===setTimeout)return setTimeout(e,0);if((r===i||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0);try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:i}catch(e){r=i}try{n="function"==typeof clearTimeout?clearTimeout:a}catch(e){n=a}}();var u,s=[],l=!1,f=-1;function p(){l&&u&&(l=!1,u.length?s=u.concat(s):f=-1,s.length&&y())}function y(){if(!l){var e=c(p);l=!0;for(var t=s.length;t;){for(u=s,s=[];++f<t;)u&&u[f].run();f=-1,t=s.length}u=null,l=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===a||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function d(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];s.push(new h(e,t)),1!==s.length||l||c(y)},h.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=d,o.addListener=d,o.once=d,o.off=d,o.removeListener=d,o.removeAllListeners=d,o.emit=d,o.prependListener=d,o.prependOnceListener=d,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(e,t){e.exports=class e{static getEncryptionKey(e){const t=this.b64ToBuffer(e);return window.crypto.subtle.importKey("raw",t,{name:"AES-GCM"},!1,["encrypt","decrypt"])}static b64ToBuffer(e){const t=window.atob(e);for(var r=new ArrayBuffer(t.length),n=new Uint8Array(r),o=0;o<t.length;o++)n[o]=t.charCodeAt(o);return n}static ensureString(e){return(e=>"string"==typeof e?e:["bigint","function"].includes(typeof e)?e.toString():JSON.stringify(e))(e).trim()}static bufToStr(e){const t=new Uint8Array(e);let r,n=0,o="",i=8*n;for(;i+8<t.length;)r=t.subarray(i,i+8),o+=String.fromCharCode.apply(null,r),n++,i=8*n;return o+=String.fromCharCode.apply(null,t.subarray(i)),o}static bufferToB64(e){return window.btoa(this.bufToStr(e))}static dataToBuffer(e){return(new TextEncoder).encode(e)}static parseEvervaultString(e){const t=e.split(":");if(t.length<4)throw new Error("String does not match expected structure");return{prefix:t[0],version:t[1],iv:t[2],browserData:t[3]}}static isEvervaultString(e){return/^enc:v\d:(?:[A-Za-z0-9+\/]{4})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)?:(?:[A-Za-z0-9+\/]{4})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)?$/s.test(e)}static bufferToString(e){const t=new Uint8Array(e);let r,n=0,o="",i=8*n,a=new TextDecoder("utf-8");for(;i+8<t.length;)r=t.subarray(i,i+8),o+=a.decode(r),n++,i=8*n;return o+=a.decode(t.subarray(i)),o}static buildEvervaultString(e,t){return`enc:v1:${this.bufferToB64(e)}:${this.bufferToB64(t)}`}static setUserKeysInStorage(e){const t=e.split(":");localStorage.setItem("evervault-privateKey",t[0]),localStorage.setItem("evervault-accessToken",t[1]),localStorage.setItem("evervault-refreshToken",t[2]),localStorage.setItem("evervault-haiku",JSON.parse(window.atob(t[1].split(".")[1])).haiku)}static handleRedirect(t){const r=e.getParams(),n=["redirectUrl","state","nonce"],o=Object.keys(r).filter(e=>n.includes(e)).map(e=>`${e}=${encodeURI(r[e])}`).join("&");window.location.replace(`${t}?${o}`)}static getParams(){let e={};return window.location.search.substr(1).split("&").forEach(t=>{const[r,n]=t.split("=");e[r]=decodeURIComponent(n)}),e}}}])}));