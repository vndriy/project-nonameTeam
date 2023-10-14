var Z=(e,t,n)=>{if(!t.has(e))throw TypeError("Cannot "+n)};var E=(e,t,n)=>(Z(e,t,"read from private field"),n?n.call(e):t.get(e)),v=(e,t,n)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,n)},D=(e,t,n,r)=>(Z(e,t,"write to private field"),r?r.call(e,n):t.set(e,n),n);var be=(e,t,n)=>(Z(e,t,"access private method"),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();function Ue(e,t){return function(){return e.apply(t,arguments)}}const{toString:tt}=Object.prototype,{getPrototypeOf:ue}=Object,_=(e=>t=>{const n=tt.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),C=e=>(e=e.toLowerCase(),t=>_(t)===e),Y=e=>t=>typeof t===e,{isArray:U}=Array,I=Y("undefined");function nt(e){return e!==null&&!I(e)&&e.constructor!==null&&!I(e.constructor)&&S(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const De=C("ArrayBuffer");function rt(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&De(e.buffer),t}const st=Y("string"),S=Y("function"),Fe=Y("number"),Q=e=>e!==null&&typeof e=="object",ot=e=>e===!0||e===!1,J=e=>{if(_(e)!=="object")return!1;const t=ue(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},it=C("Date"),at=C("File"),ct=C("Blob"),lt=C("FileList"),ut=e=>Q(e)&&S(e.pipe),dt=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||S(e.append)&&((t=_(e))==="formdata"||t==="object"&&S(e.toString)&&e.toString()==="[object FormData]"))},ft=C("URLSearchParams"),pt=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function j(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,s;if(typeof e!="object"&&(e=[e]),U(e))for(r=0,s=e.length;r<s;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),i=o.length;let l;for(r=0;r<i;r++)l=o[r],t.call(null,e[l],l,e)}}function Ie(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,s;for(;r-- >0;)if(s=n[r],t===s.toLowerCase())return s;return null}const je=e=>!I(e)&&e!=={};function re(){const{caseless:e}=je(this)&&this||{},t={},n=(r,s)=>{const o=e&&Ie(t,s)||s;J(t[o])&&J(r)?t[o]=re(t[o],r):J(r)?t[o]=re({},r):U(r)?t[o]=r.slice():t[o]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&j(arguments[r],n);return t}const ht=(e,t,n,{allOwnKeys:r}={})=>(j(t,(s,o)=>{n&&S(s)?e[o]=Ue(s,n):e[o]=s},{allOwnKeys:r}),e),mt=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),At=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},yt=(e,t,n,r)=>{let s,o,i;const l={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),o=s.length;o-- >0;)i=s[o],(!r||r(i,e,t))&&!l[i]&&(t[i]=e[i],l[i]=!0);e=n!==!1&&ue(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},Et=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},bt=e=>{if(!e)return null;if(U(e))return e;let t=e.length;if(!Fe(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},gt=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&ue(Uint8Array)),wt=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let s;for(;(s=r.next())&&!s.done;){const o=s.value;t.call(e,o[0],o[1])}},St=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},Rt=C("HTMLFormElement"),Ot=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),ge=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),Tt=C("RegExp"),qe=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};j(n,(s,o)=>{let i;(i=t(s,o,e))!==!1&&(r[o]=i||s)}),Object.defineProperties(e,r)},Bt=e=>{qe(e,(t,n)=>{if(S(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(S(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Ct=(e,t)=>{const n={},r=s=>{s.forEach(o=>{n[o]=!0})};return U(e)?r(e):r(String(e).split(t)),n},kt=()=>{},Nt=(e,t)=>(e=+e,Number.isFinite(e)?e:t),$="abcdefghijklmnopqrstuvwxyz",we="0123456789",He={DIGIT:we,ALPHA:$,ALPHA_DIGIT:$+$.toUpperCase()+we},xt=(e=16,t=He.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function Lt(e){return!!(e&&S(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const Pt=e=>{const t=new Array(10),n=(r,s)=>{if(Q(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[s]=r;const o=U(r)?[]:{};return j(r,(i,l)=>{const d=n(i,s+1);!I(d)&&(o[l]=d)}),t[s]=void 0,o}}return r};return n(e,0)},Ut=C("AsyncFunction"),Dt=e=>e&&(Q(e)||S(e))&&S(e.then)&&S(e.catch),a={isArray:U,isArrayBuffer:De,isBuffer:nt,isFormData:dt,isArrayBufferView:rt,isString:st,isNumber:Fe,isBoolean:ot,isObject:Q,isPlainObject:J,isUndefined:I,isDate:it,isFile:at,isBlob:ct,isRegExp:Tt,isFunction:S,isStream:ut,isURLSearchParams:ft,isTypedArray:gt,isFileList:lt,forEach:j,merge:re,extend:ht,trim:pt,stripBOM:mt,inherits:At,toFlatObject:yt,kindOf:_,kindOfTest:C,endsWith:Et,toArray:bt,forEachEntry:wt,matchAll:St,isHTMLForm:Rt,hasOwnProperty:ge,hasOwnProp:ge,reduceDescriptors:qe,freezeMethods:Bt,toObjectSet:Ct,toCamelCase:Ot,noop:kt,toFiniteNumber:Nt,findKey:Ie,global:{},isContextDefined:je,ALPHABET:He,generateString:xt,isSpecCompliantForm:Lt,toJSONObject:Pt,isAsyncFn:Ut,isThenable:Dt};function m(e,t,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s)}a.inherits(m,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const ve=m.prototype,Je={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Je[e]={value:e}});Object.defineProperties(m,Je);Object.defineProperty(ve,"isAxiosError",{value:!0});m.from=(e,t,n,r,s,o)=>{const i=Object.create(ve);return a.toFlatObject(e,i,function(d){return d!==Error.prototype},l=>l!=="isAxiosError"),m.call(i,e.message,t,n,r,s),i.cause=e,i.name=e.name,o&&Object.assign(i,o),i};const Ft=null;function se(e){return a.isPlainObject(e)||a.isArray(e)}function Me(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function Se(e,t,n){return e?e.concat(t).map(function(s,o){return s=Me(s),!n&&o?"["+s+"]":s}).join(n?".":""):t}function It(e){return a.isArray(e)&&!e.some(se)}const jt=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function G(e,t,n){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=a.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(h,w){return!a.isUndefined(w[h])});const r=n.metaTokens,s=n.visitor||c,o=n.dots,i=n.indexes,d=(n.Blob||typeof Blob<"u"&&Blob)&&a.isSpecCompliantForm(t);if(!a.isFunction(s))throw new TypeError("visitor must be a function");function f(u){if(u===null)return"";if(a.isDate(u))return u.toISOString();if(!d&&a.isBlob(u))throw new m("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(u)||a.isTypedArray(u)?d&&typeof Blob=="function"?new Blob([u]):Buffer.from(u):u}function c(u,h,w){let k=u;if(u&&!w&&typeof u=="object"){if(a.endsWith(h,"{}"))h=r?h:h.slice(0,-2),u=JSON.stringify(u);else if(a.isArray(u)&&It(u)||(a.isFileList(u)||a.endsWith(h,"[]"))&&(k=a.toArray(u)))return h=Me(h),k.forEach(function(H,et){!(a.isUndefined(H)||H===null)&&t.append(i===!0?Se([h],et,o):i===null?h:h+"[]",f(H))}),!1}return se(u)?!0:(t.append(Se(w,h,o),f(u)),!1)}const p=[],y=Object.assign(jt,{defaultVisitor:c,convertValue:f,isVisitable:se});function g(u,h){if(!a.isUndefined(u)){if(p.indexOf(u)!==-1)throw Error("Circular reference detected in "+h.join("."));p.push(u),a.forEach(u,function(k,R){(!(a.isUndefined(k)||k===null)&&s.call(t,k,a.isString(R)?R.trim():R,h,y))===!0&&g(k,h?h.concat(R):[R])}),p.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return g(e),t}function Re(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function de(e,t){this._pairs=[],e&&G(e,this,t)}const Ve=de.prototype;Ve.append=function(t,n){this._pairs.push([t,n])};Ve.toString=function(t){const n=t?function(r){return t.call(this,r,Re)}:Re;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function qt(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function ze(e,t,n){if(!t)return e;const r=n&&n.encode||qt,s=n&&n.serialize;let o;if(s?o=s(t,n):o=a.isURLSearchParams(t)?t.toString():new de(t,n).toString(r),o){const i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class Ht{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(r){r!==null&&t(r)})}}const Oe=Ht,We={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},vt=typeof URLSearchParams<"u"?URLSearchParams:de,Jt=typeof FormData<"u"?FormData:null,Mt=typeof Blob<"u"?Blob:null,Vt=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),zt=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),B={isBrowser:!0,classes:{URLSearchParams:vt,FormData:Jt,Blob:Mt},isStandardBrowserEnv:Vt,isStandardBrowserWebWorkerEnv:zt,protocols:["http","https","file","blob","url","data"]};function Wt(e,t){return G(e,new B.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,o){return B.isNode&&a.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function Kt(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function _t(e){const t={},n=Object.keys(e);let r;const s=n.length;let o;for(r=0;r<s;r++)o=n[r],t[o]=e[o];return t}function Ke(e){function t(n,r,s,o){let i=n[o++];const l=Number.isFinite(+i),d=o>=n.length;return i=!i&&a.isArray(s)?s.length:i,d?(a.hasOwnProp(s,i)?s[i]=[s[i],r]:s[i]=r,!l):((!s[i]||!a.isObject(s[i]))&&(s[i]=[]),t(n,r,s[i],o)&&a.isArray(s[i])&&(s[i]=_t(s[i])),!l)}if(a.isFormData(e)&&a.isFunction(e.entries)){const n={};return a.forEachEntry(e,(r,s)=>{t(Kt(r),s,n,0)}),n}return null}function Yt(e,t,n){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const fe={transitional:We,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,o=a.isObject(t);if(o&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return s&&s?JSON.stringify(Ke(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let l;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return Wt(t,this.formSerializer).toString();if((l=a.isFileList(t))||r.indexOf("multipart/form-data")>-1){const d=this.env&&this.env.FormData;return G(l?{"files[]":t}:t,d&&new d,this.formSerializer)}}return o||s?(n.setContentType("application/json",!1),Yt(t)):t}],transformResponse:[function(t){const n=this.transitional||fe.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(t&&a.isString(t)&&(r&&!this.responseType||s)){const i=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(l){if(i)throw l.name==="SyntaxError"?m.from(l,m.ERR_BAD_RESPONSE,this,null,this.response):l}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:B.classes.FormData,Blob:B.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};a.forEach(["delete","get","head","post","put","patch"],e=>{fe.headers[e]={}});const pe=fe,Qt=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Gt=e=>{const t={};let n,r,s;return e&&e.split(`
`).forEach(function(i){s=i.indexOf(":"),n=i.substring(0,s).trim().toLowerCase(),r=i.substring(s+1).trim(),!(!n||t[n]&&Qt[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},Te=Symbol("internals");function F(e){return e&&String(e).trim().toLowerCase()}function M(e){return e===!1||e==null?e:a.isArray(e)?e.map(M):String(e)}function Xt(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const Zt=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function ee(e,t,n,r,s){if(a.isFunction(r))return r.call(this,t,n);if(s&&(t=n),!!a.isString(t)){if(a.isString(r))return t.indexOf(r)!==-1;if(a.isRegExp(r))return r.test(t)}}function $t(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function en(e,t){const n=a.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(s,o,i){return this[r].call(this,t,s,o,i)},configurable:!0})})}class X{constructor(t){t&&this.set(t)}set(t,n,r){const s=this;function o(l,d,f){const c=F(d);if(!c)throw new Error("header name must be a non-empty string");const p=a.findKey(s,c);(!p||s[p]===void 0||f===!0||f===void 0&&s[p]!==!1)&&(s[p||d]=M(l))}const i=(l,d)=>a.forEach(l,(f,c)=>o(f,c,d));return a.isPlainObject(t)||t instanceof this.constructor?i(t,n):a.isString(t)&&(t=t.trim())&&!Zt(t)?i(Gt(t),n):t!=null&&o(n,t,r),this}get(t,n){if(t=F(t),t){const r=a.findKey(this,t);if(r){const s=this[r];if(!n)return s;if(n===!0)return Xt(s);if(a.isFunction(n))return n.call(this,s,r);if(a.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=F(t),t){const r=a.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||ee(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let s=!1;function o(i){if(i=F(i),i){const l=a.findKey(r,i);l&&(!n||ee(r,r[l],l,n))&&(delete r[l],s=!0)}}return a.isArray(t)?t.forEach(o):o(t),s}clear(t){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const o=n[r];(!t||ee(this,this[o],o,t,!0))&&(delete this[o],s=!0)}return s}normalize(t){const n=this,r={};return a.forEach(this,(s,o)=>{const i=a.findKey(r,o);if(i){n[i]=M(s),delete n[o];return}const l=t?$t(o):String(o).trim();l!==o&&delete n[o],n[l]=M(s),r[l]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return a.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=t&&a.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(s=>r.set(s)),r}static accessor(t){const r=(this[Te]=this[Te]={accessors:{}}).accessors,s=this.prototype;function o(i){const l=F(i);r[l]||(en(s,i),r[l]=!0)}return a.isArray(t)?t.forEach(o):o(t),this}}X.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);a.reduceDescriptors(X.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});a.freezeMethods(X);const N=X;function te(e,t){const n=this||pe,r=t||n,s=N.from(r.headers);let o=r.data;return a.forEach(e,function(l){o=l.call(n,o,s.normalize(),t?t.status:void 0)}),s.normalize(),o}function _e(e){return!!(e&&e.__CANCEL__)}function q(e,t,n){m.call(this,e??"canceled",m.ERR_CANCELED,t,n),this.name="CanceledError"}a.inherits(q,m,{__CANCEL__:!0});function tn(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new m("Request failed with status code "+n.status,[m.ERR_BAD_REQUEST,m.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const nn=B.isStandardBrowserEnv?function(){return{write:function(n,r,s,o,i,l){const d=[];d.push(n+"="+encodeURIComponent(r)),a.isNumber(s)&&d.push("expires="+new Date(s).toGMTString()),a.isString(o)&&d.push("path="+o),a.isString(i)&&d.push("domain="+i),l===!0&&d.push("secure"),document.cookie=d.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function rn(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function sn(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function Ye(e,t){return e&&!rn(t)?sn(e,t):t}const on=B.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function s(o){let i=o;return t&&(n.setAttribute("href",i),i=n.href),n.setAttribute("href",i),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(i){const l=a.isString(i)?s(i):i;return l.protocol===r.protocol&&l.host===r.host}}():function(){return function(){return!0}}();function an(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function cn(e,t){e=e||10;const n=new Array(e),r=new Array(e);let s=0,o=0,i;return t=t!==void 0?t:1e3,function(d){const f=Date.now(),c=r[o];i||(i=f),n[s]=d,r[s]=f;let p=o,y=0;for(;p!==s;)y+=n[p++],p=p%e;if(s=(s+1)%e,s===o&&(o=(o+1)%e),f-i<t)return;const g=c&&f-c;return g?Math.round(y*1e3/g):void 0}}function Be(e,t){let n=0;const r=cn(50,250);return s=>{const o=s.loaded,i=s.lengthComputable?s.total:void 0,l=o-n,d=r(l),f=o<=i;n=o;const c={loaded:o,total:i,progress:i?o/i:void 0,bytes:l,rate:d||void 0,estimated:d&&i&&f?(i-o)/d:void 0,event:s};c[t?"download":"upload"]=!0,e(c)}}const ln=typeof XMLHttpRequest<"u",un=ln&&function(e){return new Promise(function(n,r){let s=e.data;const o=N.from(e.headers).normalize(),i=e.responseType;let l;function d(){e.cancelToken&&e.cancelToken.unsubscribe(l),e.signal&&e.signal.removeEventListener("abort",l)}let f;a.isFormData(s)&&(B.isStandardBrowserEnv||B.isStandardBrowserWebWorkerEnv?o.setContentType(!1):o.getContentType(/^\s*multipart\/form-data/)?a.isString(f=o.getContentType())&&o.setContentType(f.replace(/^\s*(multipart\/form-data);+/,"$1")):o.setContentType("multipart/form-data"));let c=new XMLHttpRequest;if(e.auth){const u=e.auth.username||"",h=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(u+":"+h))}const p=Ye(e.baseURL,e.url);c.open(e.method.toUpperCase(),ze(p,e.params,e.paramsSerializer),!0),c.timeout=e.timeout;function y(){if(!c)return;const u=N.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),w={data:!i||i==="text"||i==="json"?c.responseText:c.response,status:c.status,statusText:c.statusText,headers:u,config:e,request:c};tn(function(R){n(R),d()},function(R){r(R),d()},w),c=null}if("onloadend"in c?c.onloadend=y:c.onreadystatechange=function(){!c||c.readyState!==4||c.status===0&&!(c.responseURL&&c.responseURL.indexOf("file:")===0)||setTimeout(y)},c.onabort=function(){c&&(r(new m("Request aborted",m.ECONNABORTED,e,c)),c=null)},c.onerror=function(){r(new m("Network Error",m.ERR_NETWORK,e,c)),c=null},c.ontimeout=function(){let h=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const w=e.transitional||We;e.timeoutErrorMessage&&(h=e.timeoutErrorMessage),r(new m(h,w.clarifyTimeoutError?m.ETIMEDOUT:m.ECONNABORTED,e,c)),c=null},B.isStandardBrowserEnv){const u=(e.withCredentials||on(p))&&e.xsrfCookieName&&nn.read(e.xsrfCookieName);u&&o.set(e.xsrfHeaderName,u)}s===void 0&&o.setContentType(null),"setRequestHeader"in c&&a.forEach(o.toJSON(),function(h,w){c.setRequestHeader(w,h)}),a.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),i&&i!=="json"&&(c.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&c.addEventListener("progress",Be(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&c.upload&&c.upload.addEventListener("progress",Be(e.onUploadProgress)),(e.cancelToken||e.signal)&&(l=u=>{c&&(r(!u||u.type?new q(null,e,c):u),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(l),e.signal&&(e.signal.aborted?l():e.signal.addEventListener("abort",l)));const g=an(p);if(g&&B.protocols.indexOf(g)===-1){r(new m("Unsupported protocol "+g+":",m.ERR_BAD_REQUEST,e));return}c.send(s||null)})},oe={http:Ft,xhr:un};a.forEach(oe,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Ce=e=>`- ${e}`,dn=e=>a.isFunction(e)||e===null||e===!1,Qe={getAdapter:e=>{e=a.isArray(e)?e:[e];const{length:t}=e;let n,r;const s={};for(let o=0;o<t;o++){n=e[o];let i;if(r=n,!dn(n)&&(r=oe[(i=String(n)).toLowerCase()],r===void 0))throw new m(`Unknown adapter '${i}'`);if(r)break;s[i||"#"+o]=r}if(!r){const o=Object.entries(s).map(([l,d])=>`adapter ${l} `+(d===!1?"is not supported by the environment":"is not available in the build"));let i=t?o.length>1?`since :
`+o.map(Ce).join(`
`):" "+Ce(o[0]):"as no adapter specified";throw new m("There is no suitable adapter to dispatch the request "+i,"ERR_NOT_SUPPORT")}return r},adapters:oe};function ne(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new q(null,e)}function ke(e){return ne(e),e.headers=N.from(e.headers),e.data=te.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Qe.getAdapter(e.adapter||pe.adapter)(e).then(function(r){return ne(e),r.data=te.call(e,e.transformResponse,r),r.headers=N.from(r.headers),r},function(r){return _e(r)||(ne(e),r&&r.response&&(r.response.data=te.call(e,e.transformResponse,r.response),r.response.headers=N.from(r.response.headers))),Promise.reject(r)})}const Ne=e=>e instanceof N?e.toJSON():e;function P(e,t){t=t||{};const n={};function r(f,c,p){return a.isPlainObject(f)&&a.isPlainObject(c)?a.merge.call({caseless:p},f,c):a.isPlainObject(c)?a.merge({},c):a.isArray(c)?c.slice():c}function s(f,c,p){if(a.isUndefined(c)){if(!a.isUndefined(f))return r(void 0,f,p)}else return r(f,c,p)}function o(f,c){if(!a.isUndefined(c))return r(void 0,c)}function i(f,c){if(a.isUndefined(c)){if(!a.isUndefined(f))return r(void 0,f)}else return r(void 0,c)}function l(f,c,p){if(p in t)return r(f,c);if(p in e)return r(void 0,f)}const d={url:o,method:o,data:o,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:l,headers:(f,c)=>s(Ne(f),Ne(c),!0)};return a.forEach(Object.keys(Object.assign({},e,t)),function(c){const p=d[c]||s,y=p(e[c],t[c],c);a.isUndefined(y)&&p!==l||(n[c]=y)}),n}const Ge="1.5.1",he={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{he[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const xe={};he.transitional=function(t,n,r){function s(o,i){return"[Axios v"+Ge+"] Transitional option '"+o+"'"+i+(r?". "+r:"")}return(o,i,l)=>{if(t===!1)throw new m(s(i," has been removed"+(n?" in "+n:"")),m.ERR_DEPRECATED);return n&&!xe[i]&&(xe[i]=!0,console.warn(s(i," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,i,l):!0}};function fn(e,t,n){if(typeof e!="object")throw new m("options must be an object",m.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let s=r.length;for(;s-- >0;){const o=r[s],i=t[o];if(i){const l=e[o],d=l===void 0||i(l,o,e);if(d!==!0)throw new m("option "+o+" must be "+d,m.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new m("Unknown option "+o,m.ERR_BAD_OPTION)}}const ie={assertOptions:fn,validators:he},x=ie.validators;class z{constructor(t){this.defaults=t,this.interceptors={request:new Oe,response:new Oe}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=P(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:o}=n;r!==void 0&&ie.assertOptions(r,{silentJSONParsing:x.transitional(x.boolean),forcedJSONParsing:x.transitional(x.boolean),clarifyTimeoutError:x.transitional(x.boolean)},!1),s!=null&&(a.isFunction(s)?n.paramsSerializer={serialize:s}:ie.assertOptions(s,{encode:x.function,serialize:x.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let i=o&&a.merge(o.common,o[n.method]);o&&a.forEach(["delete","get","head","post","put","patch","common"],u=>{delete o[u]}),n.headers=N.concat(i,o);const l=[];let d=!0;this.interceptors.request.forEach(function(h){typeof h.runWhen=="function"&&h.runWhen(n)===!1||(d=d&&h.synchronous,l.unshift(h.fulfilled,h.rejected))});const f=[];this.interceptors.response.forEach(function(h){f.push(h.fulfilled,h.rejected)});let c,p=0,y;if(!d){const u=[ke.bind(this),void 0];for(u.unshift.apply(u,l),u.push.apply(u,f),y=u.length,c=Promise.resolve(n);p<y;)c=c.then(u[p++],u[p++]);return c}y=l.length;let g=n;for(p=0;p<y;){const u=l[p++],h=l[p++];try{g=u(g)}catch(w){h.call(this,w);break}}try{c=ke.call(this,g)}catch(u){return Promise.reject(u)}for(p=0,y=f.length;p<y;)c=c.then(f[p++],f[p++]);return c}getUri(t){t=P(this.defaults,t);const n=Ye(t.baseURL,t.url);return ze(n,t.params,t.paramsSerializer)}}a.forEach(["delete","get","head","options"],function(t){z.prototype[t]=function(n,r){return this.request(P(r||{},{method:t,url:n,data:(r||{}).data}))}});a.forEach(["post","put","patch"],function(t){function n(r){return function(o,i,l){return this.request(P(l||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:i}))}}z.prototype[t]=n(),z.prototype[t+"Form"]=n(!0)});const V=z;class me{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(s=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](s);r._listeners=null}),this.promise.then=s=>{let o;const i=new Promise(l=>{r.subscribe(l),o=l}).then(s);return i.cancel=function(){r.unsubscribe(o)},i},t(function(o,i,l){r.reason||(r.reason=new q(o,i,l),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new me(function(s){t=s}),cancel:t}}}const pn=me;function hn(e){return function(n){return e.apply(null,n)}}function mn(e){return a.isObject(e)&&e.isAxiosError===!0}const ae={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(ae).forEach(([e,t])=>{ae[t]=e});const An=ae;function Xe(e){const t=new V(e),n=Ue(V.prototype.request,t);return a.extend(n,V.prototype,t,{allOwnKeys:!0}),a.extend(n,t,null,{allOwnKeys:!0}),n.create=function(s){return Xe(P(e,s))},n}const A=Xe(pe);A.Axios=V;A.CanceledError=q;A.CancelToken=pn;A.isCancel=_e;A.VERSION=Ge;A.toFormData=G;A.AxiosError=m;A.Cancel=A.CanceledError;A.all=function(t){return Promise.all(t)};A.spread=hn;A.isAxiosError=mn;A.mergeConfig=P;A.AxiosHeaders=N;A.formToJSON=e=>Ke(a.isHTMLForm(e)?new FormData(e):e);A.getAdapter=Qe.getAdapter;A.HttpStatusCode=An;A.default=A;const Ae=A,ye="https://books-backend.p.goit.global";async function yn(){return(await Ae(`${ye}/books/category-list`)).data}async function En(){return(await Ae(`${ye}/books/top-books`)).data}async function bn(e){return(await Ae.get(`${ye}/books/${e}`)).data}const gn="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD4AAAAUCAYAAADV9o4UAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAc8SURBVHgBxVh9bFNVFD/n9nVsc4UNN/mwvG4DEYaAgDMTETEoREhUQMCERCAgoAEBgcSgBAX5wz8EggECgSiiZASDJiZI+NIYhBHAIYbwNbq2K0hhsA3HVtb2XX/39fWtjg2HG/Ekt/frfN9zzr2vTEmg63qBJuXzGKaRlOeM2tojvurq6sR+jx49enIk0iHCfC0tHI6Qy1VoCKFhq8Tn81VnZ2e7MtLShkohBDMfVWtN+GdpzEOZqK80jJtAKy3z+0sT+4relZqaR82B0xkqLy8PJaZ5eXkeGY0+SQ7HHUxPQdbVxF5ubm6mEQ53NzQtEgwGLyq7HET9DGaIi8tjEzEnp6sjLW2TJBpDzFqSuDLhdL5WVlZ2xhTm8VwFQRcMt6IVog0wsaT8I8Y8DYRfg0dfi7ZcRKPDyy5fDqpJvsczHt0WtKwk/hLy1nl9voVqnK/rIzE/0KzhzJ8C7/0hQ4Y4b1ZWroYes7CaYu2GsP8x9jeasnR9PuZrzR3DeIeEWINRB0vXFd5AYLlQY0d6+grJ/AqUVvPv0XZbDHvJhoZVtmzLUVLKl22j40r1h0d3JBlt+klq2hw16O12P4puvTIaOOWg34x2xWQp5fyeHs8zCi8iZQ266qQWsT0k5V+qr7pxYzGUmGsZfRD8zqLvgv3P8vPznzJxmVNsLYRYZhsd13UhIqKrMpRBPAiEwOdir98/Dm0C1o/Fj4QG093e72DEYkUgmWQrRpSDEB8FDV+KT82fAtVHhVAOyQS+YRCNLA8EZkPWuzatYRSpvqKi4gRkZ6mGEB4IXjHL6oq6cHjtiBEjNIwXWLxLgPeiw+kchPENVukZiy1oqipkHudwWDlmn7XkQjMNl2BQCGVSs7Kzp3Xu3LljL3UCUgrLSO0uu+EUXzB4DDS7gRe1lkuRg/sRRgdAU2kJNXmoNchIq62v74Qc86lagRDUbeWESE3mPxFBCCO+Ax9zXaVRKBS6Df4qyh4xdZByr+qRhncwLrHkjTOdk6yrlCsvhULXWIjiJGek2UjI31lVlZXTM12uwUbcYGoJEmFn6kQUhsczsFibjBBnwTKx5PF4+iIdFnXMzZ2EbRfdA07q+mKyIk2lhT8QOKTGQsp+tl5S3mq0jkOWvPQr589nUkpjpMeEuGzuEdXLRhFsnggKzwZsfG4J26FCGEilLSmWbJBVF/6xRlYtSAByKhdGqxOaYUh5Gaf9HvrlzfHu6Xb3QrfMml5KZf7IliWlozkamUgJZWh6umhJ12QQOAl1fcwwZ4axGyE5BSG8CwTXqe1gChWGMRWdGdpaQ8N4b0XFGgfz4WbwGQXxW2j7kEnHPPOs3/9nYlNzOHxJjB+yiZjNCLLqVE1C7r1AcCymcibFYmBePTigVPDob+FkNM2b5oy7JzD3SgzrhLhmKVlobxOpqk89dX0mNgYm1hEVP6LiBxGRW9xu92Okab/ZNcXhGK46db1hbZjF57DKeWoFCJGSUqVkmMowT8zV9amIp2Iw6WbhuAJe70pqGyRqAjk1bWWers9T14q9yzyhr8fTDfKLmtClyrhTZjgdjs0w6hZwt5kkhvEC6tKHVdevr8OaW63hMbWBWgma1+u9CEVUaE/GvBvC60uchipYq1ARF0KZGta0g9QGQFFaj1fTFAw7IgHfVgUKjj0COapyz8GJHa1nrhfxmngC8wM4iXN42TVg3ht4o9nKb9wAHyAln4W+fcBjZaLYgXI1Xm87W6uTCmEZwetGE+IQmPdnh6MuJmWxetoh/0s5Gr1U7vefMrFRaAzDyIFzTiYYQOxS4GeC9pTNlXl5Ml5ZIHAmr3v3p+HAaTAiA3H2O0J1V1ZWVh1eYSdwRxer66qgoGBJHaB8uj9K2dSJOoP9BdqJ8rYC6fe44qWerTk5OYUZ6elvQHYR5MZg9A+oS3sokXZC7MM7Ix3OMeAMs1YhQk6jApoFNWYYfm6Nd+QWGklBOgoF6ugBgtxIuTAVz02aSeqKjEMNbvWxPJN+pXYE0SqsKAWoKx2Xm2m+bHJVtSsIcuPMfkEbi6ozDJKWYLUTxg9TO0OrjZBbKR8v572gSEHbBOW+4dlwSDuD3IQgZ0Le03mKkRenfQJyn+C5dIbaEe7r9KBUJ3RL0dRJqLD/GafxFU6qpC1OgFNdiKrx0GYMDH6V1IcH02SM1cfLcvDOp3aG/xS2cj2+wjTajOGwpOUytBI4QZ3MaTjEi8+GCn6Tbtt0P4HqAnWHkQUYqVdiHowrghZ9SBVaiWtP0iJ8ZG5HPQnD0fvBbzu/Bee2M7QpX+UGeg6hqL6I1BdZS+/vGIyJQpKqJ1ozMlUlPofVLdRA2xDSN8zFLyiT7tAnNJvm4cb690fSfUK7FCorL1/HKY9GPwBq6uibf+1JU6p6vQUx3gOaA3DeEYRz5C5U9TfFAzCa6AFUaDkRZoyC4RH8U8OoCRpuYzzYSNUESVdg6HXMrvKMxtfc/wF/Awc9FGL0f5Y9AAAAAElFTkSuQmCC",wn="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAgCAYAAACcuBHKAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAN/SURBVHgB7VdJjExBGP7+6uluYmgkthmS0YdhLpYgHIZEuFhCiHBxJXFzEOHiKBFbuFhCxBEniUQcjEhExBJMIhwsI5a2RmaEWbpf/f5+vVW9rvf6dTJu8yeVrqr31V9f/VtVA2NSEor6yOfTnV6y0E2gaQpIaY7Gm6IIrDXyDP6c0N4j2oWXaIYEX8Q8RvKKdBdi9OQtjeTX0B70oREJPof5rJIPQJQpz8DNNWw+EpcnxlLaNdJrIlrqllDqpqzL+GvdPBvMR+KSovYaM+YT1XZQJqJwNrUVmjqkodg48BvW2DHmkLH8dnrn0uvMfS0SxLSaWYDlhsBvWINjjJBxqa82mPta7hCWWXKZuWUikN0Iamkt2gvc3wd8vC2slY1rXwWamAUSKfDfHPDtMfAnB4eH2kJJKKY0cwC/7ABo0V4gPcnQIfL1CfStncDAe6B1NtTaC8DsVTZmuB/88Ai495Sc0FRMrda+5kB7MjZ8SR2bQcsPWQSqMmMJaO0lwYmSTdctAlVJZ0ArD4Oy26yYUcwq1BLggHknzEGUUNsKcKYLmNoVicO4GaVYqIi2XW6T8IqaDUDANU6ZsqAxhv14q0VbIOzswKxEb0V0jGpALY0QJb26Vhg4cDpbg2+mJi3BMYoWw3ZBlCWgFWplluNv0CyJaEuYNGOW5dgkjHGgvtS7o2yE0uI4loiJqViCAoTgsAQb2UEajfXHwFRLtt8v8ohKUU7YlS2OqWORgBUTHBmYdXXC6A9JCf7xxvcntS9yY7w8+KdgBvtB0+cB4yeXiVJdgQolIbcoWyW+mCCfnkPfOAjOPRVFhdLkuMlQy3dDrdlftZbuOQF+cAY89AuVoKb2xVBbTjeXHfImLNe1Eki/kDvh0WU5YcFYKN//9kPfOSrdhG8Jfesw9L2TZUgtu/jDM3inusUiGcttHBUTYonf1Y2KMvDD/Iqg6J5jQEc3+NlVub4TcIuk4+Bva70E83AoCU9TLgHrzHWxSdXT+DSA13f90l3JJK7D1PQYFehdgKbBiNUNjni2uZ5u/s1b/4SDS09lXlb0uA5WYU4j+2a+kgTpxP+TvtTRL3MRZgn/DtV6OzQX/EAa7ebxgBTD9UFWzuTlAzM78sMoPiKzCBNXwEQK97KiHenjuVcuVeHL9s7q8pRaxqzbpJImm/0bKPEyIhn8nRN837X5mATlH/NXv+oaRoVuAAAAAElFTkSuQmCC",Sn=document.querySelector(".modal-book-content-wrap");function Rn(e){const{book_image:t,title:n,author:r,description:s,buy_links:o}=e,i=`
    <img
      class="modal-book-book-cover"
      src="${t}" 
      alt="${n}"
      width="335" 
      height="762" 
      loading="lazy"/>
    <div class="modal-book-content-text-wrap">
      <div class="modal-book-text-wrap">
        <div class="modal-book-title-wrap">
          <h3 class="modal-book-title">${n}</h3>
          <p class="modal-book-author">${r}</p>
        </div>
        ${s?`<p class="modal-book-description scrollbar">${s}</p>`:'<p class="modal-book-description not-description scrollbar">No description</p>'}
      </div>
      <ul class="modal-book-marketplaces">
        ${On(o)}
      </ul>
    </div>
  `;Sn.innerHTML=i}function On(e){return e.map(({name:t,url:n})=>{const r=t.toLowerCase().replace(" ","-"),s=o=>`
          <li class="trading-platform-color">
            <a
              href="${n}" class="modal-book-trading-platform"
              target="_blank"
              rel="noopener noreferrer"
              >
                <img class="${r}" height="36" width="36" src="${o}" alt="${t}" loading="lazy"/>
            </a>
          </li>
        `;switch(r){case"amazon":return s(gn);case"apple-books":return s(wn)}}).join("")}var O,b,K,Ze;class Tn{constructor(){v(this,K);v(this,O,"shopping-list");v(this,b,[]);be(this,K,Ze).call(this)}setBook(t){D(this,b,JSON.parse(localStorage.getItem(E(this,O)))),E(this,b).push(t),localStorage.setItem(E(this,O),JSON.stringify(E(this,b)))}removeBook(t){D(this,b,JSON.parse(localStorage.getItem(E(this,O))));const n=E(this,b).splice(E(this,b).findIndex(r=>r._id===t),1);return n&&localStorage.setItem(E(this,O),JSON.stringify(E(this,b))),n.length>0}findBook(t){return D(this,b,JSON.parse(localStorage.getItem(E(this,O)))),!!E(this,b).find(r=>r._id===t)}}O=new WeakMap,b=new WeakMap,K=new WeakSet,Ze=function(){D(this,b,JSON.parse(localStorage.getItem(E(this,O)))),E(this,b)||localStorage.setItem(E(this,O),"[]")};const ce=new Tn,L=document.querySelector(".backdrop"),Le=L.querySelector(".close"),Ee=L.querySelector("#modal"),T=Ee.querySelector(".modal-book-shopping-list-btn"),W=Ee.querySelector(".modal-book-shopping-list-btn-shopping-list-message");let $e;T.addEventListener("click",()=>{Cn($e)});function Bn(e){bn(e).then(t=>{$e=t,Rn(t),ce.findBook(t._id)?(T.textContent="Remove from shopping list",T.dataset.isAdd="true",W.classList.remove("message-hide")):(T.textContent="Add to shopping list",T.dataset.isAdd="false",W.classList.add("message-hide")),L.classList.remove("is-hidden");const r=()=>{L.classList.add("is-hidden"),Le.removeEventListener("click",s),L.removeEventListener("click",o),window.removeEventListener("keydown",i)},s=Le.addEventListener("click",()=>{r()}),o=L.addEventListener("click",l=>{Ee.contains(l.target)||r()}),i=window.addEventListener("keydown",l=>{l.code==="Escape"&&r()})}).catch(t=>{console.log(t)})}function Cn(e){T.dataset.isAdd==="true"?ce.removeBook(e._id)&&(T.textContent="add to shopping list",T.dataset.isAdd="false",W.classList.add("message-hide")):(ce.setBook(e),T.textContent="remove from the shopping list",T.dataset.isAdd="true",W.classList.remove("message-hide"))}const Pe=document.querySelector(".categories"),le=document.querySelector(".list-of-books");yn().then(e=>{const t=document.createElement("li");t.textContent="All categories",t.classList.add("list-item"),Pe.appendChild(t),e.forEach(n=>{const r=document.createElement("li");r.classList.add("list-item"),r.textContent=n.list_name,Pe.appendChild(r)})}).catch(e=>{console.error(e)});En().then(e=>{e.forEach(t=>{const n=t.books.sort((f,c)=>f.rank-c.rank),r=window.innerWidth>=375&&window.innerWidth<768?1:window.innerWidth>=768&&window.innerWidth<1440?3:5,s=document.createElement("div"),o=document.createElement("div"),i=document.createElement("button"),l=document.createElement("ul");i.textContent="see more",i.classList.add("see-more-btn"),s.classList.add("contain"),o.classList.add("category-information"),l.classList.add("book-list"),o.textContent=t.list_name,s.append(o),le.append(s);const d=kn(n.slice(0,r));l.innerHTML=d,s.append(l),le.append(s),s.append(i)})}).catch(e=>{console.error(e)});function kn(e){return e.map(({_id:n,author:r,title:s,book_image:o})=>`
        <li class="book-card" data-book-id="${n}">
          <a href="#" class="book-link">
            <div class="overlay-wrapper">
              <img class="book-image-category" src="${o}" alt="${s}" loading="lazy"/>
            </div>
            <h2 class="book-title">${s}</h2>
            <p class="author">${r}</p>
          </a>
        </li>
      `).join("")}le.addEventListener("click",e=>{e.preventDefault();const t=e.target.closest(".book-card");console.log(t),t&&Bn(t.dataset.bookId)});
