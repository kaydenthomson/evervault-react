!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("react"));else if("function"==typeof define&&define.amd)define(["react"],t);else{var r="object"==typeof exports?t(require("react")):t(e.react);for(var n in r)("object"==typeof exports?exports:e)[n]=r[n]}}(window,(function(e){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=2)}([function(e,t,r){const n=r(3);e.exports={keyStore:new class{constructor(){let e=void 0;this.encryptString=t=>{const r=n.dataToBuffer(t),o=window.crypto.getRandomValues(new Uint8Array(12));return window.crypto.subtle.encrypt({name:"AES-GCM",iv:o},e,r).then(e=>n.buildEvervaultString(o,e)).catch(e=>{throw new Error("Encryption operation failed.")})},this.decryptString=t=>{if(n.isEvervaultString(t)){const r=n.parseEvervaultString(t),o=n.b64ToBuffer(r.browserData),a=n.b64ToBuffer(r.iv);return window.crypto.subtle.decrypt({name:"AES-GCM",iv:a},e,o).then(e=>n.bufferToString(e)).catch(e=>{throw new Error(e)})}return t},this.updateKey=async t=>{if(!e){const r=await n.getEncryptionKey(t||localStorage.getItem("evervault-privateKey"));e=r}}}},urls:{auth:"https://auth.evervault.com",api:"https://api.evervault.com"},init:function(e){Object.assign(this.urls,e)},encrypt:function(e,t={}){const r=(e,t)=>{if(e){return(async(e,t)=>{let r=Object.assign({},e);for(let e=0;e<t.length;e++){let o=t[e];r[o]&&(r[o]=await this.keyStore.encryptString(n.ensureString(r[o])))}return r})(e,t)}};if("object"==typeof e&&e&&"Array"!==e.constructor.name&&t.preserveObjectShape){const n=t.fieldsToEncrypt||Object.keys(e);return this.keyStore.updateKey(t.privateKey).then(()=>r(e,n))}if(void 0!==e&&"symbol"!=typeof e)return this.keyStore.updateKey(t.privateKey).then(()=>this.keyStore.encryptString(n.ensureString(e)))},decrypt:function(e,t){const r=e=>(async t=>{let r=new Array(t.length);for(let o=0;o<e.length;o++)r[o]=await this.keyStore.decryptString(n.ensureString(t[o]));return r})(e),o=(e,t)=>{if(e){return(async(e,t)=>{let r=Object.assign({},e);for(let e=0;e<t.length;e++){let o=t[e];r[o]&&(r[o]=await this.keyStore.decryptString(n.ensureString(r[o])))}return r})(e,t)}};return"object"==typeof e?"Array"===e.constructor.name?this.keyStore.updateKey(t).then(()=>r(e)):this.keyStore.updateKey(t).then(()=>o(e,Object.keys(e))):void 0!==e&&"symbol"!=typeof e?this.keyStore.updateKey(t).then(()=>this.keyStore.decryptString(n.ensureString(e))):e},logout:function(e){localStorage.removeItem("evervault-privateKey"),localStorage.removeItem("evervault-accessToken"),localStorage.removeItem("evervault-refreshToken"),localStorage.removeItem("evervault-haiku"),n.handleRedirect(`${this.urls.auth}/${e}`)},refreshAccessToken:function(e,t){const r={accessToken:e||localStorage.getItem("evervault-accessToken"),refreshToken:t||localStorage.getItem("evervault-refreshToken")};return fetch(`${this.urls.api}/v1/token/refresh`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)}).then(e=>e.json()).then(({accessToken:e})=>e).catch(e=>{throw e})},checkAuth:function(e){const t=window.location.hash.substring(2);window.location.hash="/";const r=localStorage.getItem("evervault-privateKey"),o=localStorage.getItem("evervault-accessToken"),a=localStorage.getItem("evervault-refreshToken");o&&a&&r||t?t&&n.setUserKeysInStorage(t):n.handleRedirect(`${this.urls.auth}/${e}`)}}},function(t,r){t.exports=e},function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return p}));var n=r(1),o=r.n(n),a=r(0),i=r.n(a);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e,t,r,n){return function(a){function c(e){var o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),o=s(this,l(c).call(this,e)),i.a.init({auth:r,api:n}),i.a.checkAuth(t),o.state={evervault:i.a},o}var p,y,h;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(c,a),p=c,(y=[{key:"render",value:function(){return o.a.createElement(e,{evervault:this.state.evervault})}}])&&u(p.prototype,y),h&&u(p,h),c}(o.a.Component)}},function(e,t){e.exports=class e{static getEncryptionKey(e){const t=this.b64ToBuffer(e);return window.crypto.subtle.importKey("raw",t,{name:"AES-GCM"},!1,["encrypt","decrypt"])}static b64ToBuffer(e){const t=window.atob(e);for(var r=new ArrayBuffer(t.length),n=new Uint8Array(r),o=0;o<t.length;o++)n[o]=t.charCodeAt(o);return n}static ensureString(e){return(e=>"string"==typeof e?e:["bigint","function"].includes(typeof e)?e.toString():JSON.stringify(e))(e).trim()}static bufToStr(e){const t=new Uint8Array(e);let r,n=0,o="",a=8*n;for(;a+8<t.length;)r=t.subarray(a,a+8),o+=String.fromCharCode.apply(null,r),n++,a=8*n;return o+=String.fromCharCode.apply(null,t.subarray(a)),o}static bufferToB64(e){return window.btoa(this.bufToStr(e))}static dataToBuffer(e){return(new TextEncoder).encode(e)}static parseEvervaultString(e){const t=e.split(":");if(t.length<4)throw new Error("String does not match expected structure");return{prefix:t[0],version:t[1],iv:t[2],browserData:t[3]}}static isEvervaultString(e){return/^enc:v\d:(?:[A-Za-z0-9+\/]{4})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)?:(?:[A-Za-z0-9+\/]{4})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)?$/s.test(e)}static bufferToString(e){const t=new Uint8Array(e);let r,n=0,o="",a=8*n,i=new TextDecoder("utf-8");for(;a+8<t.length;)r=t.subarray(a,a+8),o+=i.decode(r),n++,a=8*n;return o+=i.decode(t.subarray(a)),o}static buildEvervaultString(e,t){return`enc:v1:${this.bufferToB64(e)}:${this.bufferToB64(t)}`}static setUserKeysInStorage(e){const t=e.split(":");localStorage.setItem("evervault-privateKey",t[0]),localStorage.setItem("evervault-accessToken",t[1]),localStorage.setItem("evervault-refreshToken",t[2]),localStorage.setItem("evervault-haiku",JSON.parse(window.atob(t[1].split(".")[1])).haiku)}static handleRedirect(t){const r=e.getParams(),n=["redirectUrl","state","nonce"],o=Object.keys(r).filter(e=>n.includes(e)).map(e=>`${e}=${encodeURI(r[e])}`).join("&");window.location.replace(`${t}?${o}`)}static getParams(){let e={};return window.location.search.substr(1).split("&").forEach(t=>{const[r,n]=t.split("=");e[r]=decodeURIComponent(n)}),e}}}])}));