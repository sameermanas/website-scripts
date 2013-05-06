// FROM: http://platform.twitter.com/widgets.js
if(!window.__twttrlr){(function(a,b){function s(a){for(var b=1,c;c=arguments[b];b++)for(var d in c)a[d]=c[d];return a}function t(a){return Array.prototype.slice.call(a)}function v(a,b){for(var c=0,d;d=a[c];c++)if(b==d)return c;return-1}function w(){var a=t(arguments),b=[];for(var c=0,d=a.length;c<d;c++)a[c].length>0&&b.push(a[c].replace(/\/$/,""));return b.join("/")}function x(a,b,c){var d=b.split("/"),e=a;while(d.length>1){var f=d.shift();e=e[f]=e[f]||{}}e[d[0]]=c}function y(){}function z(a,b){this.id=this.path=a,this.force=!!b}function A(a,b){this.id=a,this.body=b,typeof b=="undefined"&&(this.path=this.resolvePath(a))}function B(a,b){this.deps=a,this.collectResults=b,this.deps.length==0&&this.complete()}function C(a,b){this.deps=a,this.collectResults=b}function D(){for(var a in d)if(d[a].readyState=="interactive")return l[d[a].id]}function E(a,b){var d;return!a&&c&&(d=k||D()),d?(delete l[d.scriptId],d.body=b,d.execute()):(j=d=new A(a,b),i[d.id]=d),d}function F(){var a=t(arguments),b,c;return typeof a[0]=="string"&&(b=a.shift()),c=a.shift(),E(b,c)}function G(a,b){var c=b.id||"",d=c.split("/");d.pop();var e=d.join("/");return a.replace(/^\./,e)}function H(a,b){function d(a){return A.exports[G(a,b)]}var c=[];for(var e=0,f=a.length;e<f;e++){if(a[e]=="require"){c.push(d);continue}if(a[e]=="exports"){b.exports=b.exports||{},c.push(b.exports);continue}c.push(d(a[e]))}return c}function I(){var a=t(arguments),b=[],c,d;return typeof a[0]=="string"&&(c=a.shift()),u(a[0])&&(b=a.shift()),d=a.shift(),E(c,function(a){function f(){var e=H(t(b),c),f;typeof d=="function"?f=d.apply(c,e):f=d,typeof f=="undefined"&&(f=c.exports),a(f)}var c=this,e=[];for(var g=0,h=b.length;g<h;g++){var i=b[g];v(["require","exports"],i)==-1&&e.push(G(i,c))}e.length>0?J.apply(this,e.concat(f)):f()})}function J(){var a=t(arguments),b,c;typeof a[a.length-1]=="function"&&(b=a.pop()),typeof a[a.length-1]=="boolean"&&(c=a.pop());var d=new B(K(a,c),c);return b&&d.then(b),d}function K(a,b){var c=[];for(var d=0,e;e=a[d];d++)typeof e=="string"&&(e=L(e)),u(e)&&(e=new C(K(e,b),b)),c.push(e);return c}function L(a){var b,c;for(var d=0,e;e=J.matchers[d];d++){var f=e[0],g=e[1];if(b=a.match(f))return g(a)}throw new Error(a+" was not recognised by loader")}function N(){return a.using=m,a.provide=n,a.define=o,a.loadrunner=p,M}function O(a){for(var b=0;b<J.bundles.length;b++)for(var c in J.bundles[b])if(c!=a&&v(J.bundles[b][c],a)>-1)return c}var c=a.attachEvent&&!a.opera,d=b.getElementsByTagName("script"),e=0,f,g=b.createElement("script"),h={},i={},j,k,l={},m=a.using,n=a.provide,o=a.define,p=a.loadrunner;for(var q=0,r;r=d[q];q++)if(r.src.match(/loadrunner\.js(\?|#|$)/)){f=r;break}var u=Array.isArray||function(a){return a.constructor==Array};y.prototype.then=function(b){var c=this;return this.started||(this.started=!0,this.start()),this.completed?b.apply(a,this.results):(this.callbacks=this.callbacks||[],this.callbacks.push(b)),this},y.prototype.start=function(){},y.prototype.complete=function(){if(!this.completed){this.results=t(arguments),this.completed=!0;if(this.callbacks)for(var b=0,c;c=this.callbacks[b];b++)c.apply(a,this.results)}},z.loaded=[],z.prototype=new y,z.prototype.start=function(){var a=this,b,c,d;return(d=i[this.id])?(d.then(function(){a.complete()}),this):((b=h[this.id])?b.then(function(){a.loaded()}):!this.force&&v(z.loaded,this.id)>-1?this.loaded():(c=O(this.id))?J(c,function(){a.loaded()}):this.load(),this)},z.prototype.load=function(){var b=this;h[this.id]=b;var c=g.cloneNode(!1);this.scriptId=c.id="LR"+ ++e,c.type="text/javascript",c.async=!0,c.onerror=function(){throw new Error(b.path+" not loaded")},c.onreadystatechange=c.onload=function(c){c=a.event||c;if(c.type=="load"||v(["loaded","complete"],this.readyState)>-1)this.onreadystatechange=null,b.loaded()},c.src=this.path,k=this,d[0].parentNode.insertBefore(c,d[0]),k=null,l[c.id]=this},z.prototype.loaded=function(){this.complete()},z.prototype.complete=function(){v(z.loaded,this.id)==-1&&z.loaded.push(this.id),delete h[this.id],y.prototype.complete.apply(this,arguments)},A.exports={},A.prototype=new z,A.prototype.resolvePath=function(a){return w(J.path,a+".js")},A.prototype.start=function(){var a,b,c=this,d;this.body?this.execute():(a=A.exports[this.id])?this.exp(a):(b=i[this.id])?b.then(function(a){c.exp(a)}):(bundle=O(this.id))?J(bundle,function(){c.start()}):(i[this.id]=this,this.load())},A.prototype.loaded=function(){var a,b,d=this;c?(b=A.exports[this.id])?this.exp(b):(a=i[this.id])&&a.then(function(a){d.exp(a)}):(a=j,j=null,a.id=a.id||this.id,a.then(function(a){d.exp(a)}))},A.prototype.complete=function(){delete i[this.id],z.prototype.complete.apply(this,arguments)},A.prototype.execute=function(){var a=this;typeof this.body=="object"?this.exp(this.body):typeof this.body=="function"&&this.body.apply(window,[function(b){a.exp(b)}])},A.prototype.exp=function(a){this.complete(this.exports=A.exports[this.id]=a||{})},B.prototype=new y,B.prototype.start=function(){function b(){var b=[];a.collectResults&&(b[0]={});for(var c=0,d;d=a.deps[c];c++){if(!d.completed)return;d.results.length>0&&(a.collectResults?d instanceof C?s(b[0],d.results[0]):x(b[0],d.id,d.results[0]):b=b.concat(d.results))}a.complete.apply(a,b)}var a=this;for(var c=0,d;d=this.deps[c];c++)d.then(b);return this},C.prototype=new y,C.prototype.start=function(){var a=this,b=0,c=[];return a.collectResults&&(c[0]={}),function d(){var e=a.deps[b++];e?e.then(function(b){e.results.length>0&&(a.collectResults?e instanceof C?s(c[0],e.results[0]):x(c[0],e.id,e.results[0]):c.push(e.results[0])),d()}):a.complete.apply(a,c)}(),this},I.amd={};var M=function(a){return a(J,F,M,define)};M.Script=z,M.Module=A,M.Collection=B,M.Sequence=C,M.Dependency=y,M.noConflict=N,a.loadrunner=M,a.using=J,a.provide=F,a.define=I,J.path="",J.matchers=[],J.matchers.add=function(a,b){this.unshift([a,b])},J.matchers.add(/(^script!|\.js$)/,function(a){var b=new z(a.replace(/^\$/,J.path.replace(/\/$/,"")+"/").replace(/^script!/,""),!1);return b.id=a,b}),J.matchers.add(/^[a-zA-Z0-9_\-\/]+$/,function(a){return new A(a)}),J.bundles=[],f&&(J.path=f.getAttribute("data-path")||f.src.split(/loadrunner\.js/)[0]||"",(main=f.getAttribute("data-main"))&&J.apply(a,main.split(/\s*,\s*/)).then(function(){}))})(this,document);(window.__twttrlr = loadrunner.noConflict());}__twttrlr(function(using, provide, loadrunner, define) {provide("util/util",function(a){function b(a){var b=1,c,d;for(;c=arguments[b];b++)for(d in c)if(!c.hasOwnProperty||c.hasOwnProperty(d))a[d]=c[d];return a}function c(a){for(var b in a)a.hasOwnProperty(b)&&(k(a[b])&&(c(a[b]),l(a[b])&&delete a[b]),(a[b]===undefined||a[b]===null||a[b]==="")&&delete a[b]);return a}function d(a,b){var c=0,d;for(;d=a[c];c++)if(b==d)return c;return-1}function e(a,b){if(!a)return null;if(a.filter)return a.filter.apply(a,[b]);if(!b)return a;var c=[],d=0,e;for(;e=a[d];d++)b(e)&&c.push(e);return c}function f(a,b){if(!a)return null;if(a.map)return a.map.apply(a,[b]);if(!b)return a;var c=[],d=0,e;for(;e=a[d];d++)c.push(b(e));return c}function g(a){return a&&a.replace(/(^\s+|\s+$)/g,"")}function h(a){return{}.toString.call(a).match(/\s([a-zA-Z]+)/)[1].toLowerCase()}function i(a){return a&&String(a).toLowerCase().indexOf("[native code]")>-1}function j(a,b){if(a.contains)return a.contains(b);var c=b.parentNode;while(c){if(c===a)return!0;c=c.parentNode}return!1}function k(a){return a===Object(a)}function l(a){if(!k(a))return!1;if(Object.keys)return!Object.keys(a).length;for(var b in a)if(a.hasOwnProperty(b))return!1;return!0}a({aug:b,compact:c,containsElement:j,filter:e,map:f,trim:g,indexOf:d,isNative:i,isObject:k,isEmptyObject:l,toType:h})});
provide("util/events",function(a){using("util/util",function(b){function d(){this.completed=!1,this.callbacks=[]}var c={bind:function(a,b){return this._handlers=this._handlers||{},this._handlers[a]=this._handlers[a]||[],this._handlers[a].push(b)},unbind:function(a,c){if(!this._handlers[a])return;if(c){var d=b.indexOf(this._handlers[a],c);d>=0&&this._handlers[a].splice(d,1)}else this._handlers[a]=[]},trigger:function(a,b){var c=this._handlers&&this._handlers[a];b.type=a;if(c)for(var d=0,e;e=c[d];d++)e.call(this,b)}};d.prototype.addCallback=function(a){this.completed?a.apply(this,this.results):this.callbacks.push(a)},d.prototype.complete=function(){this.results=makeArray(arguments),this.completed=!0;for(var a=0,b;b=this.callbacks[a];a++)b.apply(this,this.results)},a({Emitter:c,Promise:d})})});
provide("tfw/util/globals",function(a){function c(){var a=document.getElementsByTagName("meta"),c,d,e=0;for(;c=a[e];e++){if(!/^twitter:/.test(c.name))continue;d=c.name.replace(/^twitter:/,""),b[d]=c.content}}function d(a){return b[a]}var b={};a({init:c,val:d})});
provide("util/querystring",function(a){function b(a){return encodeURIComponent(a).replace(/\+/g,"%2B")}function c(a){return decodeURIComponent(a)}function d(a){var c=[],d;for(d in a)a[d]!==null&&typeof a[d]!="undefined"&&c.push(b(d)+"="+b(a[d]));return c.sort().join("&")}function e(a){var b={},d,e,f,g;if(a){d=a.split("&");for(g=0;f=d[g];g++)e=f.split("="),e.length==2&&(b[c(e[0])]=c(e[1]))}return b}function f(a,b){var c=d(b);return c.length>0?a.indexOf("?")>=0?a+"&"+d(b):a+"?"+d(b):a}function g(a){var b=a&&a.split("?");return b.length==2?e(b[1]):{}}a({url:f,decodeURL:g,decode:e,encode:d,encodePart:b,decodePart:c})});
provide("util/twitter",function(a){using("util/querystring",function(b){function g(a){return typeof a=="string"&&c.test(a)&&RegExp.$1.length<=20}function h(a){if(g(a))return RegExp.$1}function i(a){var c=b.decodeURL(a);c.screen_name=h(a);if(c.screen_name)return b.url("https://twitter.com/intent/user",c)}function j(a){return typeof a=="string"&&f.test(a)}function k(a,b){b=b===undefined?!0:b;if(j(a))return(b?"#":"")+RegExp.$1}function l(a){return typeof a=="string"&&d.test(a)}function m(a){return l(a)&&RegExp.$1}function n(a){return e.test(a)}var c=/(?:^|(?:https?\:)?\/\/(?:www\.)?twitter\.com(?:\:\d+)?(?:\/intent\/(?:follow|user)\/?\?screen_name=|(?:\/#!)?\/))@?([\w]+)(?:\?|&|$)/i,d=/(?:^|(?:https?\:)?\/\/(?:www\.)?twitter\.com(?:\:\d+)?\/(?:#!\/)?[\w_]+\/status(?:es)?\/)(\d+)/i,e=/^http(s?):\/\/((www\.)?)twitter\.com\//,f=/^#?([^.,<>!\s\/#\-\(\)\'\"]+)$/;a({isHashTag:j,hashTag:k,isScreenName:g,screenName:h,isStatus:l,status:m,intentForProfileURL:i,isTwitterURL:n,regexen:{profile:c}})})});
provide("util/uri",function(a){using("util/querystring","util/util","util/twitter",function(b,c,d){function e(a,b){var c,d;return b=b||location,/^https?:\/\//.test(a)?a:/^\/\//.test(a)?b.protocol+a:(c=b.host+(b.port.length?":"+b.port:""),a.indexOf("/")!==0&&(d=b.pathname.split("/"),d.pop(),d.push(a),a="/"+d.join("/")),[b.protocol,"//",c,a].join(""))}function f(){var a=document.getElementsByTagName("link"),b=0,c;for(;c=a[b];b++)if(c.rel=="canonical")return e(c.href)}function g(){var a=document.getElementsByTagName("a"),b=document.getElementsByTagName("link"),c=[a,b],e,f,g=0,h=0,i=/\bme\b/,j;for(;e=c[g];g++)for(h=0;f=e[h];h++)if(i.test(f.rel)&&(j=d.screenName(f.href)))return j}a({absolutize:e,getCanonicalURL:f,getScreenNameFromPage:g})})});
provide("util/typevalidator",function(a){using("util/util",function(b){function c(a){return a!==undefined&&a!==null&&a!==""}function d(a){return f(a)&&a%1===0}function e(a){return f(a)&&!d(a)}function f(a){return c(a)&&!isNaN(a)}function g(a){return c(a)&&b.toType(a)=="array"}function h(a){if(!c(a))return;switch(a){case"true":case"TRUE":return!0;case"false":case"FALSE":return!1;default:return!!a}}function i(a){if(f(a))return a}function j(a){if(e(a))return a}function k(a){if(d(a))return a}a({hasValue:c,isInt:d,isFloat:e,isNumber:f,isArray:g,asInt:k,asFloat:j,asNumber:i,asBoolean:h})})});
provide("util/iframe",function(a){a(function(a){var b=(a.replace&&a.replace.ownerDocument||document).createElement("div"),c,d,e;b.innerHTML="<iframe allowtransparency='true' frameBorder='0' scrolling='no'></iframe>",c=b.firstChild,c.src=a.url,c.className=a.className||"";if(a.css)for(d in a.css)a.css.hasOwnProperty(d)&&(c.style[d]=a.css[d]);if(a.attributes)for(e in a.attributes)a.attributes.hasOwnProperty(e)&&c.setAttribute(e,a.attributes[e]);return a.replace?a.replace.parentNode.replaceChild(c,a.replace):a.insertTarget&&a.insertTarget.appendChild(c),c})});
provide("dom/get",function(a){using("util/util",function(b){function c(a,c,d,e){var f,g,h=[],i,j,k,l,m,n;c=c||document;if(b.isNative(c.getElementsByClassName))return h=b.filter(c.getElementsByClassName(a),function(a){return!d||a.tagName.toLowerCase()==d.toLowerCase()}),[].slice.call(h,0,e||h.length);i=a.split(" "),l=i.length,f=c.getElementsByTagName(d||"*"),n=f.length;for(k=0;k<l&&n>0;k++){h=[],j=i[k];for(m=0;m<n;m++){g=f[m],~b.indexOf(g.className.split(" "),j)&&h.push(g);if(k+1==l&&h.length===e)break}f=h,n=f.length}return h}function d(a,b,d){return c(a,b,d,1)[0]}function e(a,c,d){var f=c&&c.parentNode,g;if(!f||f===d)return;return f.tagName==a?f:(g=f.className.split(" "),0===a.indexOf(".")&&~b.indexOf(g,a.slice(1))?f:e(a,f,d))}a({all:c,one:d,ancestor:e})})});
provide("util/domready",function(a){function k(){b=1;for(var a=0,d=c.length;a<d;a++)c[a]()}var b=0,c=[],d,e,f=!1,g=document.createElement("a"),h="DOMContentLoaded",i="addEventListener",j="onreadystatechange";/^loade|c/.test(document.readyState)&&(b=1),document[i]&&document[i](h,e=function(){document.removeEventListener(h,e,f),k()},f),g.doScroll&&document.attachEvent(j,d=function(){/^c/.test(document.readyState)&&(document.detachEvent(j,d),k())});var l=g.doScroll?function(a){self!=top?b?a():c.push(a):!function(){try{g.doScroll("left")}catch(b){return setTimeout(function(){l(a)},50)}a()}()}:function(a){b?a():c.push(a)};a(l)});
provide("tfw/widget/base",function(a){using("util/util","util/domready","dom/get","util/querystring","util/iframe","util/typevalidator",function(b,c,d,e,f,g){function m(a){var b;if(!a)return;a.ownerDocument?(this.srcEl=a,this.classAttr=a.className.split(" ")):(this.srcOb=a,this.classAttr=[]),b=this.params(),this.id=o(),this.setLanguage(),this.related=b.related||this.dataAttr("related"),this.partner=b.partner||this.dataAttr("partner"),this.dnt=b.dnt||this.dataAttr("dnt")||"",this.styleAttr=[],this.targetEl=a.targetEl}function n(){var a=0,b;for(;b=k[a];a++)b.call()}function o(){return this.srcEl&&this.srcEl.id||"twitter-widget-"+h++}function p(a){if(!a)return;return a.lang?a.lang:p(a.parentNode)}var h=0,i,j={list:[],byId:{}},k=[],l={ar:{"%{followers_count} followers":"Ø¹Ø¯Ø¯ Ø§Ù„Ù…ØªØ§Ø¨Ø¹ÙŠÙ† %{followers_count}","100K+":"+100 Ø£Ù„Ù","10k unit":"10 Ø¢Ù„Ø§Ù ÙˆØ­Ø¯Ø©",Follow:"ØªØ§Ø¨ÙØ¹","Follow %{screen_name}":"ØªØ§Ø¨ÙØ¹ %{screen_name}",K:"Ø£Ù„Ù",M:"Ù…Ù„ÙŠÙˆÙ†",Tweet:"ØºØ±ÙÙ‘Ø¯","Tweet %{hashtag}":"ØºØ±ÙÙ‘Ø¯ %{hashtag}","Tweet to %{name}":"ØºØ±ÙÙ‘Ø¯ Ù„Ù€ %{name}","Twitter Stream":"Ø®Ø·Ù‘ ØªÙˆÙŠØªØ± Ø§Ù„Ø²Ù…Ù†ÙŠÙ‘"},da:{"%{followers_count} followers":"%{followers_count} fÃ¸lgere","100K+":"100K+","10k unit":"10k enhed",Follow:"FÃ¸lg","Follow %{screen_name}":"FÃ¸lg %{screen_name}",K:"K",M:"M",Tweet:"Tweet","Tweet %{hashtag}":"Tweet %{hashtag}","Tweet to %{name}":"Tweet til %{name}","Twitter Stream":"Twitter-strÃ¸m"},de:{"%{followers_count} followers":"%{followers_count} Follower","100K+":"100Tsd+","10k unit":"10tsd-Einheit",Follow:"Folgen","Follow %{screen_name}":"%{screen_name} folgen",K:"Tsd",M:"M",Tweet:"Twittern","Tweet %{hashtag}":"Tweet %{hashtag}","Tweet to %{name}":"Tweet an %{name}","Twitter Stream":"Twitter Stream"},es:{"%{followers_count} followers":"%{followers_count} seguidores","100K+":"100K+","10k unit":"10k unidad",Follow:"Seguir","Follow %{screen_name}":"Seguir a %{screen_name}",K:"K",M:"M",Tweet:"Twittear","Tweet %{hashtag}":"Twittear %{hashtag}","Tweet to %{name}":"Twittear a %{name}","Twitter Stream":"CronologÃ­a de Twitter"},fa:{"%{followers_count} followers":"%{followers_count} Ø¯Ù†Ø¨Ø§Ù„â€ŒÚ©Ù†Ù†Ø¯Ù‡","100K+":">Û±Û°Û°Ù‡Ø²Ø§Ø±","10k unit":"Û±Û°Ù‡Ø²Ø§Ø± ÙˆØ§Ø­Ø¯",Follow:"Ø¯Ù†Ø¨Ø§Ù„ Ú©Ø±Ø¯Ù†","Follow %{screen_name}":"Ø¯Ù†Ø¨Ø§Ù„ Ú©Ø±Ø¯Ù† %{screen_name}",K:"Ù‡Ø²Ø§Ø±",M:"Ù…ÛŒÙ„ÛŒÙˆÙ†",Tweet:"ØªÙˆÛŒÛŒØª","Tweet %{hashtag}":"ØªÙˆÛŒÛŒØª Ú©Ø±Ø¯Ù† %{hashtag}","Tweet to %{name}":"Ø¨Ù‡ %{name} ØªÙˆÛŒÛŒØª Ú©Ù†ÛŒØ¯","Twitter Stream":"Ø¬Ø±ÛŒØ§Ù† ØªÙˆÛŒÛŒØªâ€ŒÙ‡Ø§"},fi:{"%{followers_count} followers":"%{followers_count} seuraajaa","100K+":"100 000+","10k unit":"10 000 yksikkÃ¶Ã¤",Follow:"Seuraa","Follow %{screen_name}":"Seuraa kÃ¤yttÃ¤jÃ¤Ã¤ %{screen_name}",K:"tuhatta",M:"milj.",Tweet:"Twiittaa","Tweet %{hashtag}":"Twiittaa %{hashtag}","Tweet to %{name}":"Twiittaa kÃ¤yttÃ¤jÃ¤lle %{name}","Twitter Stream":"Twitter-virta"},fil:{"%{followers_count} followers":"%{followers_count} mga tagasunod","100K+":"100K+","10k unit":"10k yunit",Follow:"Sundan","Follow %{screen_name}":"Sundan si %{screen_name}",K:"K",M:"M",Tweet:"I-tweet","Tweet %{hashtag}":"I-tweet ang %{hashtag}","Tweet to %{name}":"Mag-Tweet kay %{name}","Twitter Stream":"Stream ng Twitter"},fr:{"%{followers_count} followers":"%{followers_count} abonnÃ©s","100K+":"100K+","10k unit":"unitÃ© de 10k",Follow:"Suivre","Follow %{screen_name}":"Suivre %{screen_name}",K:"K",M:"M",Tweet:"Tweeter","Tweet %{hashtag}":"Tweeter %{hashtag}","Tweet to %{name}":"Tweeter Ã  %{name}","Twitter Stream":"Flux Twitter"},he:{"%{followers_count} followers":"%{followers_count} ×¢×•×§×‘×™×","100K+":"×ž××•×ª ××œ×¤×™×","10k unit":"×¢×©×¨×•×ª ××œ×¤×™×",Follow:"×ž×¢×§×‘","Follow %{screen_name}":"×œ×¢×§×•×‘ ××—×¨ %{screen_name}",K:"××œ×£",M:"×ž×™×œ×™×•×Ÿ",Tweet:"×¦×™×•×¥","Tweet %{hashtag}":"×¦×™×™×¦×• %{hashtag}","Tweet to %{name}":"×¦×™×•×¥ ××œ %{name}","Twitter Stream":"×”×ª×–×¨×™× ×©×œ ×˜×•×•×™×˜×¨"},hi:{"%{followers_count} followers":"%{followers_count} à¤«à¤¼à¥‰à¤²à¥‹à¤…à¤°à¥à¤¸","100K+":"1 à¤²à¤¾à¤–+","10k unit":"10 à¤¹à¤œà¤¾à¤° à¤‡à¤•à¤¾à¤ˆà¤¯à¤¾à¤‚",Follow:"à¤«à¤¼à¥‰à¤²à¥‹","Follow %{screen_name}":"%{screen_name} à¤•à¥‹ à¤«à¤¼à¥‰à¤²à¥‹ à¤•à¤°à¥‡à¤‚",K:"à¤¹à¤œà¤¾à¤°",M:"à¤®à¤¿à¤²à¤¿à¤¯à¤¨",Tweet:"à¤Ÿà¥à¤µà¥€à¤Ÿ","Tweet %{hashtag}":"à¤Ÿà¥à¤µà¥€à¤Ÿ %{hashtag}","Tweet to %{name}":"%{name} à¤•à¥‹ à¤Ÿà¥à¤µà¥€à¤Ÿ à¤•à¤°à¥‡à¤‚","Twitter Stream":"à¤Ÿà¥à¤µà¤¿à¤Ÿà¤° à¤¸à¥à¤Ÿà¥à¤°à¥€à¤®"},hu:{"%{followers_count} followers":"%{followers_count} kÃ¶vetÅ‘","100K+":"100E+","10k unit":"10E+",Follow:"KÃ¶vetÃ©s","Follow %{screen_name}":"%{screen_name} kÃ¶vetÃ©se",K:"E",M:"M",Tweet:"Tweet","Tweet %{hashtag}":"%{hashtag} tweetelÃ©se","Tweet to %{name}":"Tweet kÃ¼ldÃ©se neki: %{name}","Twitter Stream":"Twitter HÃ­rfolyam"},id:{"%{followers_count} followers":"%{followers_count} pengikut","100K+":"100 ribu+","10k unit":"10 ribu unit",Follow:"Ikuti","Follow %{screen_name}":"Ikuti %{screen_name}",K:"&nbsp;ribu",M:"&nbsp;juta",Tweet:"Tweet","Tweet %{hashtag}":"Tweet %{hashtag}","Tweet to %{name}":"Tweet ke %{name}","Twitter Stream":"Aliran Twitter"},it:{"%{followers_count} followers":"%{followers_count} follower","100K+":"100K+","10k unit":"10k unitÃ ",Follow:"Segui","Follow %{screen_name}":"Segui %{screen_name}",K:"K",M:"M",Tweet:"Tweet","Tweet %{hashtag}":"Twitta %{hashtag}","Tweet to %{name}":"Twitta a %{name}","Twitter Stream":"Twitter Stream"},ja:{"%{followers_count} followers":"%{followers_count}äººã®ãƒ•ã‚©ãƒ­ãƒ¯ãƒ¼","100K+":"100Kä»¥ä¸Š","10k unit":"ä¸‡",Follow:"ãƒ•ã‚©ãƒ­ãƒ¼ã™ã‚‹","Follow %{screen_name}":"%{screen_name}ã•ã‚“ã‚’ãƒ•ã‚©ãƒ­ãƒ¼",K:"K",M:"M",Tweet:"ãƒ„ã‚¤ãƒ¼ãƒˆ","Tweet %{hashtag}":"%{hashtag} ã‚’ãƒ„ã‚¤ãƒ¼ãƒˆã™ã‚‹","Tweet to %{name}":"%{name}ã•ã‚“ã¸ãƒ„ã‚¤ãƒ¼ãƒˆã™ã‚‹","Twitter Stream":"Twitterã‚¹ãƒˆãƒªãƒ¼ãƒ "},ko:{"%{followers_count} followers":"%{followers_count}ëª…ì˜ íŒ”ë¡œì›Œ","100K+":"100ë§Œ ì´ìƒ","10k unit":"ë§Œ ë‹¨ìœ„",Follow:"íŒ”ë¡œìš°","Follow %{screen_name}":"%{screen_name} íŒ”ë¡œìš°í•˜ê¸°",K:"ì²œ",M:"ë°±ë§Œ",Tweet:"íŠ¸ìœ—","Tweet %{hashtag}":"%{hashtag} ê´€ë ¨ íŠ¸ìœ—í•˜ê¸°","Tweet to %{name}":"%{name}ë‹˜ì—ê²Œ íŠ¸ìœ—í•˜ê¸°","Twitter Stream":"íŠ¸ìœ„í„° ìŠ¤íŠ¸ë¦¼"},msa:{"%{followers_count} followers":"%{followers_count} pengikut","100K+":"100 ribu+","10k unit":"10 ribu unit",Follow:"Ikut","Follow %{screen_name}":"Ikut %{screen_name}",K:"ribu",M:"juta",Tweet:"Tweet","Tweet %{hashtag}":"Tweet %{hashtag}","Tweet to %{name}":"Tweet kepada %{name}","Twitter Stream":"Strim Twitter"},nl:{"%{followers_count} followers":"%{followers_count} volgers","100K+":"100k+","10k unit":"10k-eenheid",Follow:"Volgen","Follow %{screen_name}":"%{screen_name} volgen",K:"k",M:" mln.",Tweet:"Tweeten","Tweet %{hashtag}":"%{hashtag} tweeten","Tweet to %{name}":"Tweeten naar %{name}","Twitter Stream":"Twitter Stream"},no:{"%{followers_count} followers":"%{followers_count} fÃ¸lgere","100K+":"100 K+","10k unit":"10 K-enhet",Follow:"FÃ¸lg","Follow %{screen_name}":"FÃ¸lg %{screen_name}",K:"K",M:"M",Tweet:"Tweet","Tweet %{hashtag}":"Tweet %{hashtag}","Tweet to %{name}":"Send tweet til %{name}","Twitter Stream":"Twitter-strÃ¸m"},pl:{"%{followers_count} followers":"%{followers_count} obserwujÄ…cych","100K+":"100 tys.+","10k unit":"10 tys.",Follow:"Obserwuj","Follow %{screen_name}":"Obserwuj %{screen_name}",K:"tys.",M:"mln",Tweet:"Tweetnij","Tweet %{hashtag}":"Tweetnij %{hashtag}","Tweet to %{name}":"Tweetnij do %{name}","Twitter Stream":"StrumieÅ„ Twittera"},pt:{"%{followers_count} followers":"%{followers_count} seguidores","100K+":"+100 mil","10k unit":"10 mil unidades",Follow:"Seguir","Follow %{screen_name}":"Seguir %{screen_name}",K:"Mil",M:"M",Tweet:"Tweetar","Tweet %{hashtag}":"Tweetar %{hashtag}","Tweet to %{name}":"Tweetar para %{name}","Twitter Stream":"TransmissÃµes do Twitter"},ru:{"%{followers_count} followers":"Ð§Ð¸Ñ‚Ð°Ñ‚ÐµÐ»Ð¸: %{followers_count} ","100K+":"100 Ñ‚Ñ‹Ñ.+","10k unit":"Ð±Ð»Ð¾Ðº 10k",Follow:"Ð§Ð¸Ñ‚Ð°Ñ‚ÑŒ","Follow %{screen_name}":"Ð§Ð¸Ñ‚Ð°Ñ‚ÑŒ %{screen_name}",K:"Ñ‚Ñ‹Ñ.",M:"Ð¼Ð»Ð½.",Tweet:"Ð¢Ð²Ð¸Ñ‚Ð½ÑƒÑ‚ÑŒ","Tweet %{hashtag}":"Ð¢Ð²Ð¸Ñ‚Ð½ÑƒÑ‚ÑŒ %{hashtag}","Tweet to %{name}":"Ð¢Ð²Ð¸Ñ‚Ð½ÑƒÑ‚ÑŒ %{name}","Twitter Stream":"ÐŸÐ¾Ñ‚Ð¾Ðº Ð² Ð¢Ð²Ð¸Ñ‚Ñ‚ÐµÑ€Ðµ"},sv:{"%{followers_count} followers":"%{followers_count} fÃ¶ljare","100K+":"100K+","10k unit":"10k",Follow:"FÃ¶lj","Follow %{screen_name}":"FÃ¶lj %{screen_name}",K:"K",M:"M",Tweet:"Tweeta","Tweet %{hashtag}":"Tweeta %{hashtag}","Tweet to %{name}":"Tweeta till %{name}","Twitter Stream":"TwitterflÃ¶de"},th:{"%{followers_count} followers":"%{followers_count} à¸œà¸¹à¹‰à¸•à¸´à¸”à¸•à¸²à¸¡","100K+":"100à¸žà¸±à¸™+","10k unit":"à¸«à¸™à¹ˆà¸§à¸¢ 10à¸žà¸±à¸™",Follow:"à¸•à¸´à¸”à¸•à¸²à¸¡","Follow %{screen_name}":"à¸•à¸´à¸”à¸•à¸²à¸¡ %{screen_name}",K:"à¸žà¸±à¸™",M:"à¸¥à¹‰à¸²à¸™",Tweet:"à¸—à¸§à¸µà¸•","Tweet %{hashtag}":"à¸—à¸§à¸µà¸• %{hashtag}","Tweet to %{name}":"à¸—à¸§à¸µà¸•à¸–à¸¶à¸‡ %{name}","Twitter Stream":"à¸—à¸§à¸´à¸•à¹€à¸•à¸­à¸£à¹Œà¸ªà¸•à¸£à¸µà¸¡"},tr:{"%{followers_count} followers":"%{followers_count} takipÃ§i","100K+":"+100 bin","10k unit":"10 bin birim",Follow:"Takip et","Follow %{screen_name}":"Takip et: %{screen_name}",K:"bin",M:"milyon",Tweet:"Tweetle","Tweet %{hashtag}":"Tweetle: %{hashtag}","Tweet to %{name}":"Tweetle: %{name}","Twitter Stream":"Twitter AkÄ±ÅŸÄ±"},ur:{"%{followers_count} followers":"%{followers_count} ÙØ§Ù„ÙˆØ±Ø²","100K+":"Ø§ÛŒÚ© Ù„Ø§Ú©Ú¾ Ø³Û’ Ø²ÛŒØ§Ø¯Û","10k unit":"Ø¯Ø³ ÛØ²Ø§Ø± ÛŒÙˆÙ†Ù¹",Follow:"ÙØ§Ù„Ùˆ Ú©Ø±ÛŒÚº","Follow %{screen_name}":"%{screen_name} Ú©Ùˆ ÙØ§Ù„Ùˆ Ú©Ø±ÛŒÚº",K:"ÛØ²Ø§Ø±",M:"Ù…Ù„ÛŒÙ†",Tweet:"Ù¹ÙˆÛŒÙ¹ Ú©Ø±ÛŒÚº","Tweet %{hashtag}":"%{hashtag} Ù¹ÙˆÛŒÙ¹ Ú©Ø±ÛŒÚº","Tweet to %{name}":"%{name} Ú©Ùˆ Ù¹ÙˆÛŒÙ¹ Ú©Ø±ÛŒÚº","Twitter Stream":"Ù¹ÙˆØ¦Ù¹Ø± Ø³Ù¹Ø±ÛŒÙ…"},"zh-cn":{"%{followers_count} followers":"%{followers_count} å…³æ³¨è€…","100K+":"10ä¸‡+","10k unit":"1ä¸‡å•å…ƒ",Follow:"å…³æ³¨","Follow %{screen_name}":"å…³æ³¨ %{screen_name}",K:"åƒ",M:"ç™¾ä¸‡",Tweet:"å‘æŽ¨","Tweet %{hashtag}":"ä»¥ %{hashtag} å‘æŽ¨","Tweet to %{name}":"å‘æŽ¨ç»™ %{name}","Twitter Stream":"Twitter ä¿¡æ¯æµ"},"zh-tw":{"%{followers_count} followers":"%{followers_count} ä½è·Ÿéš¨è€…","100K+":"è¶…éŽåè¬","10k unit":"1è¬ å–®ä½",Follow:"è·Ÿéš¨","Follow %{screen_name}":"è·Ÿéš¨ %{screen_name}",K:"åƒ",M:"ç™¾è¬",Tweet:"æŽ¨æ–‡","Tweet %{hashtag}":"æŽ¨æ–‡%{hashtag}","Tweet to %{name}":"æŽ¨æ–‡çµ¦%{name}"}};b.aug(m.prototype,{setLanguage:function(a){var b;a||(a=this.params().lang||this.dataAttr("lang")||p(this.srcEl)),a=a&&a.toLowerCase();if(!a)return this.lang="en";if(l[a])return this.lang=a;b=a.replace(/[\-_].*/,"");if(l[b])return this.lang=b;this.lang="en"},_:function(a,b){var c=this.lang;b=b||{};if(!c||!l.hasOwnProperty(c))c=this.lang="en";return a=l[c]&&l[c][a]||a,this.ringo(a,b,/%\{([\w_]+)\}/g)},ringo:function(a,b,c){return c=c||/\{\{([\w_]+)\}\}/g,a.replace(c,function(a,c){return b[c]!==undefined?b[c]:a})},add:function(a){j.list.push(this),j.byId[this.id]=a},create:function(a,b,c){return c["data-twttr-rendered"]=!0,f({url:a,css:b,className:this.classAttr.join(" "),id:this.id,attributes:c,replace:this.srcEl,insertTarget:this.targetEl})},params:function(){var a,b;return this.srcOb?b=this.srcOb:(a=this.srcEl&&this.srcEl.href&&this.srcEl.href.split("?")[1],b=a?e.decode(a):{}),this.params=function(){return b},b},dataAttr:function(a){return this.srcEl&&this.srcEl.getAttribute("data-"+a)},attr:function(a){return this.srcEl&&this.srcEl.getAttribute(a)},styles:{base:[["font","normal normal normal 11px/18px 'Helvetica Neue', Arial, sans-serif"],["margin","0"],["padding","0"],["whiteSpace","nowrap"]],button:[["fontWeight","bold"],["textShadow","0 1px 0 rgba(255,255,255,.5)"]],large:[["fontSize","13px"],["lineHeight","26px"]],vbubble:[["fontSize","16px"]]},width:function(){throw new Error(name+" not implemented")},height:function(){return this.size=="m"?20:28},minWidth:function(){},maxWidth:function(){},minHeight:function(){},maxHeight:function(){},dimensions:function(){function a(a){switch(typeof a){case"string":return a;case"undefined":return;default:return a+"px"}}var b,c={width:this.width(),height:this.height()};this.minWidth()&&(c["min-width"]=this.minWidth()),this.maxWidth()&&(c["max-width"]=this.maxWidth()),this.minHeight()&&(c["min-height"]=this.minHeight()),this.maxHeight()&&(c["max-height"]=this.maxHeight());for(b in c)c[b]=a(c[b]);return c},generateId:o}),m.afterLoad=function(a){k.push(a)},m.init=function(a){i=a},m.find=function(a){return a&&j.byId[a]?j.byId[a].element:null},m.embed=function(a){var b=i.widgets,c,e,f=0,h,k,l,m,o;g.isArray(a)||(a=[a||document]);for(;e=a[f];f++)for(k in b)if(b.hasOwnProperty(k)){k.match(/\./)?(l=k.split("."),c=d.all(l[1],e,l[0])):c=e.getElementsByTagName(k);for(m=0;o=c[m];m++){if(o.getAttribute("data-twttr-rendered"))continue;o.setAttribute("data-twttr-rendered","true"),h=new b[k](o),j.list.push(h),j.byId[h.id]=h,h.render(i)}}n()},a(m)})});
provide("tfw/widget/intent",function(a){using("tfw/widget/base","util/util","util/querystring","util/uri",function(b,c,d,e){function m(a){var b=Math.round(k/2-h/2),c=0;j>i&&(c=Math.round(j/2-i/2)),window.open(a,undefined,[g,"width="+h,"height="+i,"left="+b,"top="+c].join(","))}function n(a,b){using("tfw/hub/client",function(c){c.openIntent(a,b)})}function o(a){var b="original_referer="+location.href;return[a,b].join(a.indexOf("?")==-1?"?":"&")}function p(a){var b,d,e,g;a=a||window.event,b=a.target||a.srcElement;if(a.altKey||a.metaKey||a.shiftKey)return;while(b){if(~c.indexOf(["A","AREA"],b.nodeName))break;b=b.parentNode}b&&b.href&&(d=b.href.match(f),d&&(g=o(b.href),g=g.replace(/^http[:]/,"https:"),g=g.replace(/^\/\//,"https://"),q(g,b),a.returnValue=!1,a.preventDefault&&a.preventDefault()))}function q(a,b){if(twttr.events.hub&&b){var c=new r(l.generateId(),b);l.add(c),n(a,b),twttr.events.trigger("click",{target:b,region:"intent",type:"click",data:{}})}else m(a)}function r(a,b){this.id=a,this.element=this.srcEl=b}function s(a){this.srcEl=[],this.element=a}var f=/twitter\.com(\:\d{2,4})?\/intent\/(\w+)/,g="scrollbars=yes,resizable=yes,toolbar=no,location=yes",h=550,i=520,j=screen.height,k=screen.width,l;s.prototype=new b,c.aug(s.prototype,{render:function(a){l=this,window.__twitterIntentHandler||(document.addEventListener?document.addEventListener("click",p,!1):document.attachEvent&&document.attachEvent("onclick",p),window.__twitterIntentHandler=!0)}}),s.open=q,a(s)})});
provide("dom/classname",function(a){function b(a,b){a.classList?a.classList.add(b):f(b).test(a.className)||(a.className+=" "+b)}function c(a,b){a.classList?a.classList.remove(b):a.className=a.className.replace(f(b)," ")}function d(a,d,g){a.classList&&e(a,d)?(c(a,d),b(a,g)):a.className=a.className.replace(f(d),g)}function e(a,b){return a.classList?a.classList.contains(b):f(b).test(a.className)}function f(a){return new RegExp("\\b"+a+"\\b","g")}a({add:b,remove:c,replace:d,present:e})});
provide("util/env",function(a){var b=window.navigator.userAgent;a({retina:function(){return(window.devicePixelRatio||1)>1},anyIE:function(){return/MSIE \d/.test(b)},ie6:function(){return/MSIE 6/.test(b)},ie7:function(){return/MSIE 7/.test(b)},cspEnabledIE:function(){return/MSIE 1\d/.test(b)},touch:function(){return"ontouchstart"in window||/Opera Mini/.test(b)||navigator.msMaxTouchPoints>0},cssTransitions:function(){var a=document.body.style;return a.transition!==undefined||a.webkitTransition!==undefined||a.mozTransition!==undefined||a.oTransition!==undefined||a.msTransition!==undefined}})});
provide("dom/delegate",function(a){using("util/env",function(b){function e(a){var b=a.getAttribute("data-twitter-event-id");return b?b:(a.setAttribute("data-twitter-event-id",++d),d)}function f(a,b,c){var d=0,e=a&&a.length||0;for(d=0;d<e;d++)a[d].call(b,c)}function g(a,b,c){var d=c||a.target||a.srcElement,e=d.className.split(" "),h=0,i,j=e.length;for(;h<j;h++)f(b["."+e[h]],d,a);f(b[d.tagName],d,a);if(a.cease)return;d!==this&&g.call(this,a,b,d.parentElement||d.parentNode)}function h(a,b,c){if(a.addEventListener){a.addEventListener(b,function(d){g.call(a,d,c[b])},!1);return}a.attachEvent&&a.attachEvent("on"+b,function(){g.call(a,a.ownerDocument.parentWindow.event,c[b])})}function i(a,b,d,f){var g=e(a);c[g]=c[g]||{},c[g][b]||(c[g][b]={},h(a,b,c[g])),c[g][b][d]=c[g][b][d]||[],c[g][b][d].push(f)}function j(a,b,d){var f=e(b),h=c[f]&&c[f];g.call(b,{target:d},h[a])}function k(a){return m(a),l(a),!1}function l(a){a&&a.preventDefault?a.preventDefault():a.returnValue=!1}function m(a){a&&(a.cease=!0)&&a.stopPropagation?a.stopPropagation():a.cancelBubble=!0}var c={},d=-1;a({stop:k,stopPropagation:m,preventDefault:l,delegate:i,simulate:j})})});
provide("util/throttle",function(a){function b(a,b,c){function g(){var c=+(new Date);window.clearTimeout(f);if(c-e>b){e=c,a.call(d);return}f=window.setTimeout(g,b)}var d=c||this,e=0,f;return g}a(b)});
provide("util/insert",function(a){a(function(a,b){if(b){if(!b.parentNode)return b;b.parentNode.replaceChild(a,b),delete b}else document.body.insertBefore(a,document.body.firstChild);return a})});
provide("util/css",function(a){using("util/util",function(b){a({sanitize:function(a,c,d){var e=/^[\w ,%\/"'\-_#]+$/,f=a&&b.map(a.split(";"),function(a){return b.map(a.split(":").slice(0,2),function(a){return b.trim(a)})}),g=0,h,i=[],j=d?"!important":"";c=c||/^(font|text\-|letter\-|color|line\-)[\w\-]*$/;for(;f&&(h=f[g]);g++)h[0].match(c)&&h[1].match(e)&&i.push(h.join(":")+j);return i.join(";")}})})});
provide("tfw/util/params",function(a){using("util/querystring","util/twitter",function(b,c){a(function(a,d){return function(e){var f,g="data-tw-params",h,i=e.innerHTML;if(!e)return;if(!c.isTwitterURL(e.href))return;if(e.getAttribute(g))return;e.setAttribute(g,!0);if(typeof d=="function"){f=d.call(this,e);for(h in f)f.hasOwnProperty(h)&&(a[h]=f[h])}e.href=b.url(e.href,a),e.innerHTML=i}})})});
provide("$xd/json2.js", function(exports) {window.JSON||(window.JSON={}),function(){function f(a){return a<10?"0"+a:a}function quote(a){return escapable.lastIndex=0,escapable.test(a)?'"'+a.replace(escapable,function(a){var b=meta[a];return typeof b=="string"?b:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+a+'"'}function str(a,b){var c,d,e,f,g=gap,h,i=b[a];i&&typeof i=="object"&&typeof i.toJSON=="function"&&(i=i.toJSON(a)),typeof rep=="function"&&(i=rep.call(b,a,i));switch(typeof i){case"string":return quote(i);case"number":return isFinite(i)?String(i):"null";case"boolean":case"null":return String(i);case"object":if(!i)return"null";gap+=indent,h=[];if(Object.prototype.toString.apply(i)==="[object Array]"){f=i.length;for(c=0;c<f;c+=1)h[c]=str(c,i)||"null";return e=h.length===0?"[]":gap?"[\n"+gap+h.join(",\n"+gap)+"\n"+g+"]":"["+h.join(",")+"]",gap=g,e}if(rep&&typeof rep=="object"){f=rep.length;for(c=0;c<f;c+=1)d=rep[c],typeof d=="string"&&(e=str(d,i),e&&h.push(quote(d)+(gap?": ":":")+e))}else for(d in i)Object.hasOwnProperty.call(i,d)&&(e=str(d,i),e&&h.push(quote(d)+(gap?": ":":")+e));return e=h.length===0?"{}":gap?"{\n"+gap+h.join(",\n"+gap)+"\n"+g+"}":"{"+h.join(",")+"}",gap=g,e}}typeof Date.prototype.toJSON!="function"&&(Date.prototype.toJSON=function(a){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(a){return this.valueOf()});var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},rep;typeof JSON.stringify!="function"&&(JSON.stringify=function(a,b,c){var d;gap="",indent="";if(typeof c=="number")for(d=0;d<c;d+=1)indent+=" ";else typeof c=="string"&&(indent=c);rep=b;if(!b||typeof b=="function"||typeof b=="object"&&typeof b.length=="number")return str("",{"":a});throw new Error("JSON.stringify")}),typeof JSON.parse!="function"&&(JSON.parse=function(text,reviver){function walk(a,b){var c,d,e=a[b];if(e&&typeof e=="object")for(c in e)Object.hasOwnProperty.call(e,c)&&(d=walk(e,c),d!==undefined?e[c]=d:delete e[c]);return reviver.call(a,b,e)}var j;cx.lastIndex=0,cx.test(text)&&(text=text.replace(cx,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)}));if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return j=eval("("+text+")"),typeof reviver=="function"?walk({"":j},""):j;throw new SyntaxError("JSON.parse")})}();exports();loadrunner.Script.loaded.push("$xd/json2.js")});
provide("util/params",function(a){using("util/querystring",function(b){var c=function(a){var c=a.search.substr(1);return b.decode(c)},d=function(a){var c=a.href,d=c.indexOf("#"),e=d<0?"":c.substring(d+1);return b.decode(e)},e=function(a){var b={},e=c(a),f=d(a);for(var g in e)e.hasOwnProperty(g)&&(b[g]=e[g]);for(var g in f)f.hasOwnProperty(g)&&(b[g]=f[g]);return b};a({combined:e,fromQuery:c,fromFragment:d})})});
provide("tfw/util/env",function(a){using("util/params",function(b){function d(){var a=36e5,d=b.combined(document.location)._;return c!==undefined?c:(c=!1,d&&/^\d+$/.test(d)&&(c=+(new Date)-parseInt(d)<a),c)}var c;a({isDynamicWidget:d})})});
provide("util/decider",function(a){function c(a){var c=b[a]||!1;if(!c)return!1;if(c===!0||c===100)return!0;var d=Math.random()*100,e=c>=d;return b[a]=e,e}var b={force_new_cookie:100,rufous_pixel:100,decider_fixture:12.34};a({isAvailable:c})});
provide("dom/cookie",function(a){using("util/util",function(b){a(function(a,c,d){var e=b.aug({},d);if(arguments.length>1&&String(c)!=="[object Object]"){if(c===null||c===undefined)e.expires=-1;if(typeof e.expires=="number"){var f=e.expires,g=new Date((new Date).getTime()+f*60*1e3);e.expires=g}return c=String(c),document.cookie=[encodeURIComponent(a),"=",e.raw?c:encodeURIComponent(c),e.expires?"; expires="+e.expires.toUTCString():"",e.path?"; path="+e.path:"",e.domain?"; domain="+e.domain:"",e.secure?"; secure":""].join("")}e=c||{};var h,i=e.raw?function(a){return a}:decodeURIComponent;return(h=(new RegExp("(?:^|; )"+encodeURIComponent(a)+"=([^;]*)")).exec(document.cookie))?i(h[1]):null})})});
provide("util/donottrack",function(a){using("dom/cookie",function(b){a(function(a){var c=/\.(gov|mil)(:\d+)?$/i,d=/https?:\/\/([^\/]+).*/i;return a=a||document.referrer,a=d.test(a)&&d.exec(a)[1],b("dnt")?!0:c.test(document.location.host)?!0:a&&c.test(a)?!0:document.navigator?document.navigator["doNotTrack"]==1:navigator?navigator["doNotTrack"]==1||navigator["msDoNotTrack"]==1:!1})})});
provide("tfw/util/guest_cookie",function(a){using("dom/cookie","util/donottrack","util/decider",function(b,c,d){function f(){var a=b(e)||!1;if(!a)return;a.match(/^v3\:/)||g()}function g(){b(e)&&b(e,null,{domain:".twitter.com",path:"/"})}function h(){c()&&g()}var e="pid";a({set:h,destroy:g,forceNewCookie:f,guest_id_cookie:e})})});
provide("dom/sandbox",function(a){using("util/domready","util/env",function(b,c){function e(a,b){var c,d,e;if(a.name){try{e=document.createElement('<iframe name="'+a.name+'"></iframe>')}catch(f){e=document.createElement("iframe"),e.name=a.name}delete a.name}else e=document.createElement("iframe");a.id&&(e.id=a.id,delete a.id);for(c in a)a.hasOwnProperty(c)&&e.setAttribute(c,a[c]);e.allowtransparency="true",e.scrolling="no",e.setAttribute("frameBorder",0),e.setAttribute("allowTransparency",!0);for(d in b||{})b.hasOwnProperty(d)&&(e.style[d]=b[d]);return e}function f(a,b,c,d){var f;this.attrs=b||{},this.styles=c||{},this.appender=d,this.onReady=a,this.sandbox={},f=e(this.attrs,this.styles),f.onreadystatechange=f.onload=this.getCallback(this.onLoad),this.sandbox.frame=f,d?d(f):document.body.appendChild(f)}function g(a,c,d,e){b(function(){new f(a,c,d,e)})}var d=0;window.twttr||(window.twttr={}),window.twttr.sandbox||(window.twttr.sandbox={}),f.prototype.getCallback=function(a){var b=this,c=!1;return function(){c||(c=!0,a.call(b))}},f.prototype.registerCallback=function(a){var b="cb"+d++;return window.twttr.sandbox[b]=a,b},f.prototype.onLoad=function(){try{this.sandbox.frame.contentWindow.document}catch(a){this.setDocDomain();return}this.sandbox.win=this.sandbox.frame.contentWindow,this.sandbox.doc=this.sandbox.frame.contentWindow.document,this.writeStandardsDoc(),this.sandbox.body=this.sandbox.frame.contentWindow.document.body,this.onReady(this.sandbox)},f.prototype.setDocDomain=function(){var a,b=this.registerCallback(this.getCallback(this.onLoad));a=["javascript:",'document.write("");',"try { window.parent.document; }","catch (e) {",'document.domain="'+document.domain+'";',"}",'window.parent.twttr.sandbox["'+b+'"]();'].join(""),this.sandbox.frame.parentNode.removeChild(this.sandbox.frame),this.sandbox.frame=null,this.sandbox.frame=e(this.attrs,this.styles),this.sandbox.frame.src=a,this.appender?this.appender(this.sandbox.frame):document.body.appendChild(this.sandbox.frame)},f.prototype.writeStandardsDoc=function(){if(!c.anyIE()||c.cspEnabledIE())return;var a=["<!DOCTYPE html>","<html>","<head>","<scr","ipt>","try { window.parent.document; }",'catch (e) {document.domain="'+document.domain+'";}',"</scr","ipt>","</head>","<body></body>","</html>"].join("");this.sandbox.doc.write(a),this.sandbox.doc.close()},a(g)})});
provide("tfw/util/tracking",function(a){using("dom/cookie","dom/sandbox","util/donottrack","tfw/util/guest_cookie","tfw/util/env","util/util","$xd/json2.js",function(b,c,d,e,f,g){function t(){r=document.getElementById("rufous-sandbox");if(r){q=r.contentWindow.document,p=q.body;return}c(function(a){r=a.frame,q=a.doc,p=a.doc.body,l=E(),m=F();while(n[0])y.apply(this,n.shift());o&&z()},{id:"rufous-sandbox"},{display:"none"})}function u(a,b,c,d){var e=!g.isObject(a),f=b?!g.isObject(b):!1,h,i;if(e||f)return;if(/Firefox/.test(navigator.userAgent))return;h=B(a),i=C(b,!!c,!!d),x(h,i,!0)}function v(a,c,h,j){var k=i[c],l,m,n=e.guest_id_cookie;if(!k)return;a=a||{},j=!!j,h=!!h,m=a.original_redirect_referrer||document.referrer,j=j||d(m),l=g.aug({},a),h||(w(l,"referrer",m),w(l,"widget",+f.isDynamicWidget()),w(l,"hask",+!!b("k")),w(l,"li",+!!b("twid")),w(l,n,b(n)||"")),j&&(w(l,"dnt",1),H(l)),G(k+"?"+D(l))}function w(a,b,c){var d=h+b;if(!a)return;return a[d]=c,a}function x(a,b,c){var d,e,f,h,i="https://r.twimg.com/jot?";if(!g.isObject(a)||!g.isObject(b))return;if(Math.random()>s)return;f=g.aug({},b,{event_namespace:a}),c?(i+=D({l:I(f)}),G(i)):(d=l.firstChild,d.value=+d.value||+f.dnt,h=I(f),e=q.createElement("input"),e.type="hidden",e.name="l",e.value=h,l.appendChild(e))}function y(a,b,c,d){var e=!g.isObject(a),f=b?!g.isObject(b):!1,h,i;if(e||f)return;if(!p||!l){n.push([a,b,c,d]);return}h=B(a),i=C(b,!!c,!!d),x(h,i)}function z(){var a=A(l,m);if(!l){o=!0;return}if(l.children.length<=1)return;p.appendChild(l),p.appendChild(m),m.addEventListener&&m.addEventListener("load",function(){window.setTimeout(a,0)}),l.submit(),window.setTimeout(a,6e4),l=E(),m=F()}function A(a,b){return function(){var c=a.parentNode;if(!c)return;c.removeChild(a),c.removeChild(b)}}function B(a){return g.aug({client:"tfw"},a||{})}function C(a,b,c){var e={_category_:"tfw_client_event"},f,h;return b=!!b,c=!!c,f=g.aug(e,a||{}),h=f.widget_origin||document.referrer,f.format_version=1,f.dnt=c=c||d(h),f.triggered_on=f.triggered_on||+(new Date),b||(f.widget_origin=h),c&&H(f),f}function D(a){var b=[],c,d,e;for(c in a)a.hasOwnProperty(c)&&(d=encodeURIComponent(c),e=encodeURIComponent(a[c]),e=e.replace(/'/g,"%27"),b.push(d+"="+e));return b.join("&")}function E(){var a=q.createElement("form"),b=q.createElement("input");return k++,a.action="https://r.twimg.com/jot",a.method="POST",a.target="rufous-frame-"+k,a.id="rufous-form-"+k,b.type="hidden",b.name="dnt",b.value=0,a.appendChild(b),a}function F(){var a,b="rufous-frame-"+k;try{a=q.createElement("<iframe name="+b+">")}catch(c){a=q.createElement("iframe"),a.name=b}return a.id=b,a.style.display="none",a.width=0,a.height=0,a.border=0,a}function G(a){var b=document.createElement("img");b.src=a,b.alt="",b.style.position="absolute",b.style.height="1px",b.style.width="1px",b.style.top="-9999px",b.style.left="-9999px",document.body.appendChild(b)}function H(a){var b;for(b in a)~g.indexOf(j,b)&&delete a[b]}function I(a){var b=Array.prototype.toJSON,c;return delete Array.prototype.toJSON,c=JSON.stringify(a),b&&(Array.prototype.toJSON=b),c}var h="twttr_",i={tweetbutton:"//p.twitter.com/t.gif",followbutton:"//p.twitter.com/f.gif",tweetembed:"//p.twitter.com/e.gif"},j=["hask","li","logged_in","pid","user_id",e.guest_id_cookie,h+"hask",h+"li",h+e.guest_id_cookie],k=0,l,m,n=[],o,p,q,r,s=1;e.forceNewCookie(),a({enqueue:y,flush:z,initPostLogging:t,addPixel:u,addLegacyPixel:v,addVar:w})})});
provide("util/logger",function(a){function c(a){window[b]&&window[b].log&&window[b].log(a)}function d(a){window[b]&&window[b].warn&&window[b].warn(a)}function e(a){window[b]&&window[b].error&&window[b].error(a)}var b=["con","sole"].join("");a({info:c,warn:d,error:e})});
provide("tfw/util/data",function(a){using("util/logger","util/util","util/querystring",function(b,c,d){function l(a,b){return a=={}.toString.call(b).match(/\s([a-zA-Z]+)/)[1].toLowerCase()}function m(a){return function(c){c.error?a.error&&a.error(c):c.headers&&c.headers.status!=200?(a.error&&a.error(c),b.warn(c.headers.message)):a.success&&a.success(c),a.complete&&a.complete(c),n(a)}}function n(a){var b=a.script;b&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),a.script=undefined,b=undefined),a.callbackName&&twttr.tfw.callbacks[a.callbackName]&&delete twttr.tfw.callbacks[a.callbackName]}function o(a){var b={};return a.success&&l("function",a.success)&&(b.success=a.success),a.error&&l("function",a.error)&&(b.error=a.error),a.complete&&l("function",a.complete)&&(b.complete=a.complete),b}function p(a,b,c){var d=a.length,e=[],f={},g=0;return function(e){var h,i=[],j=[],k=[],l,m;h=c(e),f[h]=e;if(++g===d){for(l=0;l<d;l++)m=f[a[l]],i.push(m),m.error?k.push(m):j.push(m);b.error&&k.length>0&&b.error(k),b.success&&j.length>0&&b.success(j),b.complete&&b.complete(i)}}}twttr=twttr||{},twttr.tfw=twttr.tfw||{},twttr.tfw.callbacks=twttr.tfw.callbacks||{};var e="twttr.tfw.callbacks",f=twttr.tfw.callbacks,g="cb",h=0,i=!1,j={},k={userLookup:"//api.twitter.com/1/users/lookup.json",userShow:"//cdn.api.twitter.com/1/users/show.json",status:"//cdn.api.twitter.com/1/statuses/show.json",tweets:"//syndication.twimg.com/tweets.json",count:"//cdn.api.twitter.com/1/urls/count.json",friendship:"//cdn.api.twitter.com/1/friendships/exists.json",timeline:"//cdn.syndication.twimg.com/widgets/timelines/",timelinePoll:"//syndication.twimg.com/widgets/timelines/paged/",timelinePreview:"//syndication.twimg.com/widgets/timelines/preview/"};twttr.widgets&&twttr.widgets.endpoints&&c.aug(k,twttr.widgets.endpoints),j.jsonp=function(a,b,c){var j=c||g+h,k=e+"."+j,l=document.createElement("script"),n={callback:k,suppress_response_codes:!0};f[j]=m(b);if(i||!/^https?\:$/.test(window.location.protocol))a=a.replace(/^\/\//,"https://");l.src=d.url(a,n),l.async="async",document.body.appendChild(l),b.script=l,b.callbackName=j,c||h++},j.config=function(a){if(a.forceSSL===!0||a.forceSSL===!1)i=a.forceSSL},j.user=function(){var a,b={},c,e,f;arguments.length===1?(a=arguments[0].screenName,b=o(arguments[0])):(a=arguments[0],b.success=arguments[1]),c=l("array",a)?k.userLookup:k.userShow,a=l("array",a)?a.join(","):a,e={screen_name:a},f=d.url(c,e),this.jsonp(f,b)},j.userById=function(a){var b,c={},e,f,g;arguments.length===1?(b=arguments[0].ids,c=o(arguments[0])):(b=arguments[0],c.success=arguments[1]),e=l("array",b)?k.userLookup:k.userShow,b=l("array",b)?b.join(","):b,f={user_id:b},g=d.url(e,f),this.jsonp(g,c)},j.status=function(){var a,b={},c,e,f,g;arguments.length===1?(a=arguments[0].id,b=o(arguments[0])):(a=arguments[0],b.success=arguments[1]);if(!l("array",a))c={id:a,include_entities:!0},e=d.url(k.status,c),this.jsonp(e,b);else{f=p(a,b,function(a){return a.error?a.request.split("id=")[1].split("&")[0]:a.id_str});for(g=0;g<a.length;g++)c={id:a[g],include_entities:!0},e=d.url(k.status,c),this.jsonp(e,{success:f,error:f})}},j.tweets=function(a){var b=arguments[0],c=o(b),e={ids:a.ids.join(","),lang:a.lang},f=d.url(k.tweets,e);this.jsonp(f,c)},j.count=function(){var a="",b,c,e={};arguments.length===1?(a=arguments[0].url,e=o(arguments[0])):arguments.length===2&&(a=arguments[0],e.success=arguments[1]),c={url:a},b=d.url(k.count,c),this.jsonp(b,e)},j.friendshipExists=function(a){var b=arguments[0],c=o(arguments[0]),e={screen_name_a:a.screenNameA,screen_name_b:a.screenNameB},f=d.url(k.friendship,e);this.jsonp(f,c)},j.timeline=function(a){var b=arguments[0],c=o(b),e,f=9e5,g=Math.floor(+(new Date)/f),h={lang:a.lang,t:g,domain:window.location.host};a.dnt&&(h.dnt=a.dnt),a.screenName&&(h.screen_name=a.screenName),a.userId&&(h.user_id=a.userId),a.withReplies&&(h.with_replies=a.withReplies),e=d.url(k.timeline+a.id,h),this.jsonp(e,c,"tl_"+a.id)},j.timelinePoll=function(a){var b=arguments[0],c=o(b),e={lang:a.lang,since_id:a.sinceId,max_id:a.maxId,domain:window.location.host},f;a.dnt&&(e.dnt=a.dnt),a.screenName&&(e.screen_name=a.screenName),a.userId&&(e.user_id=a.userId),a.withReplies&&(e.with_replies=a.withReplies),f=d.url(k.timelinePoll+a.id,e),this.jsonp(f,c,"tlPoll_"+a.id+"_"+(a.sinceId||a.maxId))},j.timelinePreview=function(a){var b=arguments[0],c=o(b),e=a.params,f=d.url(k.timelinePreview,e);this.jsonp(f,c)},a(j)})});
provide("anim/transition",function(a){function b(a,b){var c;return b=b||window,c=b.requestAnimationFrame||b.webkitRequestAnimationFrame||b.mozRequestAnimationFrame||b.msRequestAnimationFrame||b.oRequestAnimationFrame||function(c){b.setTimeout(function(){a(+(new Date))},1e3/60)},c(a)}function c(a,b){return Math.sin(Math.PI/2*b)*a}function d(a,c,d,e,f){function i(){var h=+(new Date),j=h-g,k=Math.min(j/d,1),l=e?e(c,k):c*k;a(l);if(k==1)return;b(i,f)}var g=+(new Date),h;b(i)}a({animate:d,requestAnimationFrame:b,easeOut:c})});
provide("util/datetime",function(a){using("util/util",function(b){function m(a){return a<10?"0"+a:a}function n(a){function e(a,c){return b&&b[a]&&(a=b[a]),a.replace(/%\{([\w_]+)\}/g,function(a,b){return c[b]!==undefined?c[b]:a})}var b=a&&a.phrases,c=a&&a.months||f,d=a&&a.formats||g;this.timeAgo=function(a){var b=n.parseDate(a),f=+(new Date),g=f-b,m;return b?isNaN(g)||g<h*2?e("now"):g<i?(m=Math.floor(g/h),e(d.abbr,{number:m,symbol:e(l,{abbr:e("s"),expanded:m>1?e("seconds"):e("second")})})):g<j?(m=Math.floor(g/i),e(d.abbr,{number:m,symbol:e(l,{abbr:e("m"),expanded:m>1?e("minutes"):e("minute")})})):g<k?(m=Math.floor(g/j),e(d.abbr,{number:m,symbol:e(l,{abbr:e("h"),expanded:m>1?e("hours"):e("hour")})})):g<k*365?e(d.shortdate,{day:b.getDate(),month:e(c[b.getMonth()])}):e(d.longdate,{day:b.getDate(),month:e(c[b.getMonth()]),year:b.getFullYear().toString().slice(2)}):""},this.localTimeStamp=function(a){var b=n.parseDate(a),f=b&&b.getHours();return b?e(d.full,{day:b.getDate(),month:e(c[b.getMonth()]),year:b.getFullYear(),hours24:m(f),hours12:f<13?f?f:"12":f-12,minutes:m(b.getMinutes()),seconds:m(b.getSeconds()),amPm:f<12?e("AM"):e("PM")}):""}}var c=/(\d{4})-?(\d{2})-?(\d{2})T(\d{2}):?(\d{2}):?(\d{2})(Z|[\+\-]\d{2}:?\d{2})/,d=/[a-z]{3,4} ([a-z]{3}) (\d{1,2}) (\d{1,2}):(\d{2}):(\d{2}) ([\+\-]\d{2}:?\d{2}) (\d{4})/i,e=/^\d+$/,f=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],g={abbr:"%{number}%{symbol}",shortdate:"%{day} %{month}",longdate:"%{day} %{month} %{year}",full:"%{hours12}:%{minutes} %{amPm} - %{day} %{month} %{year}"},h=1e3,i=h*60,j=i*60,k=j*24,l='<abbr title="%{expanded}">%{abbr}</abbr>';n.parseDate=function(a){var g=a||"",h=g.toString(),i,j;return i=function(){var a;if(e.test(h))return parseInt(h,10);if(a=h.match(d))return Date.UTC(a[7],b.indexOf(f,a[1]),a[2],a[3],a[4],a[5]);if(a=h.match(c))return Date.UTC(a[1],a[2]-1,a[3],a[4],a[5],a[6])}(),i?(j=new Date(i),!isNaN(j.getTime())&&j):!1},a(n)})});
provide("tfw/util/assets",function(a){using("util/env",function(b){function d(a,d){var e=c[a],f;return b.retina()?f="2x":b.ie6()||b.ie7()?f="gif":f="default",d&&(f+=".rtl"),e[f]}var c={"embed/timeline.css":{"default":"embed/timeline.a8a9d8000b798895f6161cfba89aa641.default.css","2x":"embed/timeline.a8a9d8000b798895f6161cfba89aa641.2x.css",gif:"embed/timeline.a8a9d8000b798895f6161cfba89aa641.gif.css","default.rtl":"embed/timeline.a8a9d8000b798895f6161cfba89aa641.default.rtl.css","2x.rtl":"embed/timeline.a8a9d8000b798895f6161cfba89aa641.2x.rtl.css","gif.rtl":"embed/timeline.a8a9d8000b798895f6161cfba89aa641.gif.rtl.css"}};a(d)})});
provide("tfw/widget/syndicatedbase",function(a){using("tfw/widget/base","tfw/widget/intent","tfw/util/assets","tfw/util/globals","dom/classname","dom/delegate","dom/sandbox","util/env","util/twitter","util/util",function(b,c,d,e,f,g,h,i,j,k){function s(){p=v.VALID_COLOR.test(e.val("widgets:link-color"))&&RegExp.$1,r=v.VALID_COLOR.test(e.val("widgets:border-color"))&&RegExp.$1,q=e.val("widgets:theme")}function t(a,b,c){var d;c=c||document;if(c.getElementById(a))return;d=c.createElement("link"),d.id=a,d.rel="stylesheet",d.type="text/css",d.href=twttr.widgets.config.assetUrl()+"/"+b,c.getElementsByTagName("head")[0].appendChild(d)}function u(a){t("twitter-widget-css",d("embed/timeline.css"),a)}function v(a){if(!a)return;var c,d,e=this;this.sandboxReadyCallbacks=[],b.apply(this,[a]),c=this.params(),this.targetEl=this.srcEl&&this.srcEl.parentNode||c.targetEl||document.body,this.containerWidth=this.targetEl&&this.targetEl.offsetWidth,d=c.width||this.attr("width")||this.containerWidth||this.dimensions.DEFAULT_WIDTH,this.height=v.VALID_UNIT.test(c.height||this.attr("height"))&&RegExp.$1,this.width=Math.max(this.dimensions.MIN_WIDTH,Math.min(v.VALID_UNIT.test(d)?RegExp.$1:this.dimensions.DEFAULT_WIDTH,this.dimensions.DEFAULT_WIDTH)),this.narrow=c.narrow||this.width<=this.dimensions.NARROW_WIDTH,this.narrow&&this.classAttr.push("var-narrow"),v.VALID_COLOR.test(c.linkColor||this.dataAttr("link-color"))?this.linkColor=RegExp.$1:this.linkColor=p,v.VALID_COLOR.test(c.borderColor||this.dataAttr("border-color"))?this.borderColor=RegExp.$1:this.borderColor=r,this.theme=c.theme||this.attr("data-theme")||q,this.theme=/(dark|light)/.test(this.theme)?this.theme:"",this.classAttr.push(i.touch()?"is-touch":"not-touch"),h(function(a){e.sandboxReady=!0,e.setupSandbox.call(e,a)},{"class":this.renderedClassNames,id:this.id},{width:"1px",height:"1px",border:"none",position:"absolute"},function(a){e.srcEl?e.targetEl.insertBefore(a,e.srcEl):e.targetEl.appendChild(a)})}var l=[".customisable",".customisable:link",".customisable:visited",".customisable:hover",".customisable:active",".customisable-highlight:hover","a:hover .customisable-highlight","a:focus .customisable-highlight"],m=["a:hover .ic-mask","a:focus .ic-mask"],n=[".customisable-border"],o=[".timeline-header h1.summary",".timeline-header h1.summary a:link",".timeline-header h1.summary a:visited"],p,q,r;v.prototype=new b,k.aug(v.prototype,{setupSandbox:function(a){var b=a.doc,c=b.createElement("base"),d=b.createElement("style"),f=b.getElementsByTagName("head")[0],g="body{display:none}",h=this,i;this.sandbox=a,a.frame.title=this.a11yTitle,u(a.doc),c.target="_blank",f.appendChild(c),e.val("widgets:csp")!="on"&&(d.type="text/css",d.styleSheet?d.styleSheet.cssText=g:d.appendChild(b.createTextNode(g)),f.appendChild(d)),this.handleResize&&window.addEventListener?window.addEventListener("resize",function(){h.handleResize()},!0):document.body.attachEvent("onresize",function(){h.handleResize()}),a.win.onresize=function(a){h.handleResize&&h.handleResize()},this.frameIsReady=!0;for(;i=this.sandboxReadyCallbacks.shift();)i.fn.apply(i.context,i.args)},callsWhenSandboxReady:function(a){var b=this;return function(){var c=[],d=arguments.length,e=0;for(;e<d;e++)c.push(arguments[e]);b.callIfSandboxReady(a,b,c)}},callIfSandboxReady:function(a,b,c){c=c||[],b.frameIsReady?a.apply(b,[!1].concat(c)):b.sandboxReadyCallbacks.push({fn:a,context:b,args:[!0].concat(c)})},contentWidth:function(){var a=this.chromeless?0:this.narrow?this.dimensions.NARROW_MEDIA_PADDING:this.dimensions.WIDE_MEDIA_PADDING;return this.width-a},addSiteStyles:function(){var a=this,b=this.sandbox.doc,c=this.id+"-styles",d,f=0,g=function(b){return(a.theme=="dark"?".thm-dark ":"")+b},h="",i="",j="",p="";if(e.val("widgets:csp")=="on")return;if(b.getElementById(c))return;this.headingStyle&&(j=k.map(o,g).join(",")+"{"+this.headingStyle+"}"),this.linkColor&&(h=k.map(l,g).join(",")+"{color:"+this.linkColor+"}",i=k.map(m,g).join(",")+"{background-color:"+this.linkColor+"}"),this.borderColor&&(p=k.map(n,g).concat(this.theme=="dark"?[".thm-dark.customisable-border"]:[]).join(",")+"{border-color:"+this.borderColor+"}");if(!h&&!i&&!j)return;d=b.createElement("style"),d.id=c,d.type="text/css",d.styleSheet?d.styleSheet.cssText=h+i+j+p:(d.appendChild(b.createTextNode(h)),d.appendChild(b.createTextNode(i)),d.appendChild(b.createTextNode(j)),d.appendChild(b.createTextNode(p))),b.getElementsByTagName("head")[0].appendChild(d)},bindIntentHandlers:function(){var a=this,b=this.element;g.delegate(b,"click",".profile",function(b){var d;a.addUrlParams(this),d=j.intentForProfileURL(this.href);if(b.altKey||b.metaKey||b.shiftKey)return;d&&(c.open(d,a.sandbox.frame),g.preventDefault(b))}),g.delegate(b,"click",".web-intent",function(b){a.addUrlParams(this);if(b.altKey||b.metaKey||b.shiftKey)return;c.open(this.href,a.sandbox.frame),g.preventDefault(b)})}}),v.VALID_UNIT=/^([0-9]+)( ?px)?$/,v.VALID_COLOR=/^(#(?:[0-9a-f]{3}|[0-9a-f]{6}))$/i,v.retinize=function(a){if(!i.retina())return;var b=a.getElementsByTagName("IMG"),c,d,e=0,f=b.length;for(;e<f;e++)c=b[e],d=c.getAttribute("data-src-2x"),d&&(c.src=d)},v.scaleDimensions=function(a,b,c,d){return b>a&&b>d?(a*=d/b,b=d):a>c&&(b*=c/a,a=c,b>d&&(a*=d/b,b=d)),{width:Math.ceil(a),height:Math.ceil(b)}},v.constrainMedia=function(a,b){var c=a.getElementsByTagName("IMG"),d=a.getElementsByTagName("IFRAME"),e,f,g,h=0,i=0,j;for(;e=[c,d][i];i++)if(e.length)for(j=0;f=e[j];j++)g=v.scaleDimensions(f.getAttribute("width")||f.width,f.getAttribute("height")||f.height,b,375),g.width>0&&(f.width=g.width),g.height>0&&(f.height=g.height),h=g.height>h?g.height:h;return h},s(),a(v)})});
provide("tfw/widget/timeline",function(a){using("tfw/widget/syndicatedbase","util/datetime","anim/transition","tfw/util/data","tfw/util/tracking","tfw/util/params","util/css","util/env","util/iframe","util/insert","util/throttle","util/twitter","util/querystring","util/typevalidator","util/util","dom/delegate","dom/classname","dom/get",function(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){function L(a){if(!a)return;var c,d,e;this.a11yTitle=this._("Twitter Timeline Widget"),b.apply(this,[a]),c=this.params(),d=(c.chrome||this.dataAttr("chrome")||"").split(" "),this.preview=c.previewParams,this.widgetId=c.widgetId||this.dataAttr("widget-id"),this.widgetScreenName=c.screenName||this.dataAttr("screen-name"),this.widgetUserId=c.userId||this.dataAttr("user-id");if(c.showReplies===!0||this.dataAttr("show-replies")=="true")this.widgetShowReplies="true";this.tweetLimit=o.asInt(c.tweetLimit||this.dataAttr("tweet-limit")),this.staticTimeline=this.tweetLimit>0,d.length&&(e=~p.indexOf(d,"none"),this.chromeless=e||~p.indexOf(d,"transparent"),this.headerless=e||~p.indexOf(d,"noheader"),this.footerless=e||~p.indexOf(d,"nofooter"),this.borderless=e||~p.indexOf(d,"noborders"),this.noscrollbar=~p.indexOf(d,"noscrollbar")),this.headingStyle=h.sanitize(c.headingStyle||this.dataAttr("heading-style"),undefined,!0),this.classAttr.push("twitter-timeline-rendered"),this.ariaPolite=c.ariaPolite||this.dataAttr("aria-polite")}function M(a,c){var d=a.ownerDocument,e=s.one(D,a,"DIV"),f=e&&e.children[0],g=f&&f.getAttribute("data-expanded-media"),h,i=0,j=s.one(E,a,"A"),k=j&&j.getElementsByTagName("B")[0],l=k&&(k.innerText||k.textContent),m;if(!k)return;k.innerHTML=j.getAttribute("data-toggled-text"),j.setAttribute("data-toggled-text",l);if(r.present(a,C)){r.remove(a,C);if(!e)return;e.style.cssText="",f.innerHTML="";return}g&&(h=d.createElement("DIV"),h.innerHTML=g,b.retinize(h),i=b.constrainMedia(h,c),f.appendChild(h)),e&&(m=Math.max(f.offsetHeight,i),e.style.cssText="height:"+m+"px"),r.add(a,C)}var t="1.0",u={CLIENT_SIDE_USER:0,CLIENT_SIDE_APP:2},v="timeline",w="new-tweets-bar",x="timeline-header",y="timeline-footer",z="stream",A="h-feed",B="tweet",C="expanded",D="detail-expander",E="expand",F="permalink",G="twitter-follow-button",H="no-more-pane",I="pending-scroll-in",J="pending-new-tweet",K="show-new-tweet";L.prototype=new b,p.aug(L.prototype,{renderedClassNames:"twitter-timeline twitter-timeline-rendered",dimensions:{DEFAULT_HEIGHT:"600",DEFAULT_WIDTH:"520",NARROW_WIDTH:"320",MIN_WIDTH:"180",MIN_HEIGHT:"200",WIDE_MEDIA_PADDING:81,NARROW_MEDIA_PADDING:16},create:function(a){var c=this.sandbox.doc.createElement("div"),d,e=this,g,h,i,j=[],k,l;c.innerHTML=a.body,d=c.children[0]||!1;if(!d)return;this.reconfigure(a.config),this.discardStaticOverflow(d),this.augmentWidgets(d),b.retinize(d),b.constrainMedia(d,this.contentWidth()),this.searchQuery=d.getAttribute("data-search-query"),this.profileId=d.getAttribute("data-profile-id"),k=this.getTweetDetails(c);for(l in k)k.hasOwnProperty(l)&&j.push(l);return f.enqueue({page:"timeline",component:"timeline",element:"initial",action:j.length?"results":"no_results"},{widget_id:this.widgetId,widget_origin:document.location.href,item_ids:j,item_details:k,client_version:t,message:this.partner,query:this.searchQuery,profile_id:this.profileId},!0,this.dnt),f.flush(),this.ariaPolite=="assertive"&&(h=s.one(w,d,"DIV"),h.setAttribute("aria-polite","assertive")),d.id=this.id,d.className+=" "+this.classAttr.join(" "),d.lang=this.lang,twttr.widgets.load(d),i=function(){e.sandbox.body.appendChild(d),e.staticTimeline?e.sandbox.win.setTimeout(function(){e.sandbox.frame.height=e.height=d.offsetHeight},500):e.sandbox.win.setTimeout(function(){var a=s.one(x,d,"DIV"),b=s.one(y,d,"DIV"),c=s.one(z,d,"DIV");b?g=a.offsetHeight+b.offsetHeight:g=a.offsetHeight,c.style.cssText="height:"+(e.height-g-2)+"px",e.noscrollbar&&e.hideStreamScrollBar()},500),e.sandbox.frame.style.cssText="",e.sandbox.frame.width=e.width,e.sandbox.frame.height=e.height,e.sandbox.frame.style.border="none",e.sandbox.frame.style.maxWidth="100%",e.sandbox.frame.style.minWidth=e.dimensions.MIN_WIDTH+"px"},this.callsWhenSandboxReady(i)(),this.srcEl&&this.srcEl.parentNode&&this.srcEl.parentNode.removeChild(this.srcEl),d},render:function(a,b){function h(){d.success=function(a){c.element=c.create(a),c.readTranslations(),c.bindInteractions(),b&&b(c.sandbox.frame);return},d.error=function(a){a&&a.headers&&b&&b(a.headers.status)},d.params=c.preview,e.timelinePreview(d);return}function i(){f.initPostLogging(),e.timeline({id:c.widgetId,screenName:c.widgetScreenName,userId:c.widgetUserId,withReplies:c.widgetShowReplies,dnt:c.dnt,lang:c.lang,success:function(a){c.element=c.create(a),c.readTranslations(),c.bindInteractions(),a.headers.xPolling&&/\d/.test(a.headers.xPolling)&&(c.pollInterval=a.headers.xPolling*1e3),c.updateTimeStamps(),c.staticTimeline||c.schedulePolling(),b&&b(c.sandbox.frame);return},error:function(a){a&&a.headers&&b&&b(a.headers.status)}})}var c=this,d={},g;if(!this.preview&&!this.widgetId){b&&b(400);return}g=this.preview?h:i,this.sandboxReady?g():window.setTimeout(g,0)},reconfigure:function(a){this.lang=a.lang,this.theme||(this.theme=a.theme),this.theme=="dark"&&this.classAttr.push("thm-dark"),this.chromeless&&this.classAttr.push("var-chromeless"),this.borderless&&this.classAttr.push("var-borderless"),this.headerless&&this.classAttr.push("var-headerless"),this.footerless&&this.classAttr.push("var-footerless"),this.staticTimeline&&this.classAttr.push("var-static"),!this.linkColor&&a.linkColor&&b.VALID_COLOR.test(a.linkColor)&&(this.linkColor=RegExp.$1),this.addSiteStyles(),!this.height&&b.VALID_UNIT.test(a.height)&&(this.height=RegExp.$1),this.height=Math.max(this.dimensions.MIN_HEIGHT,this.height?this.height:this.dimensions.DEFAULT_HEIGHT),this.preview&&this.classAttr.push("var-preview"),this.narrow=this.width<=this.dimensions.NARROW_WIDTH,this.narrow&&this.classAttr.push("var-narrow")},getTweetDetails:function(a){var b=s.all(B,a,"LI"),c={},d,e,f,g,h={TWEET:0,RETWEET:10},i=0;for(;d=b[i];i++)e=s.one(F,d,"A"),f=m.status(e.href),g=d.getAttribute("data-tweet-id"),f===g?c[f]={item_type:h.TWEET}:c[f]={item_type:h.RETWEET,target_type:h.TWEET,target_id:g};return c},bindInteractions:function(){var a=this,b=this.element,c=!0;this.bindIntentHandlers(),q.delegate(b,"click",".load-tweets",function(b){c&&(c=!1,a.forceLoad(),q.stop(b))}),q.delegate(b,"click",".display-sensitive-image",function(c){a.showNSFW(s.ancestor("."+B,this,b)),q.stop(c)}),q.delegate(b,"mouseover","."+v,function(){a.mouseOver=!0}),q.delegate(b,"mouseout","."+v,function(){a.mouseOver=!1}),q.delegate(b,"mouseover","."+w,function(){a.mouseOverNotifier=!0}),q.delegate(b,"mouseout","."+w,function(){a.mouseOverNotifier=!1,window.setTimeout(function(){a.hideNewTweetNotifier()},3e3)});if(this.staticTimeline)return;q.delegate(b,"click","."+E,function(c){if(c.altKey||c.metaKey||c.shiftKey)return;M(s.ancestor("."+B,this,b),a.contentWidth()),q.stop(c)}),q.delegate(b,"click","A",function(a){q.stopPropagation(a)}),q.delegate(b,"click",".with-expansion",function(b){M(this,a.contentWidth()),q.stop(b)}),q.delegate(b,"click",".load-more",function(){a.loadMore()}),q.delegate(b,"click","."+w,function(){a.scrollToTop(),a.hideNewTweetNotifier(!0)})},scrollToTop:function(){var a=s.one(z,this.element,"DIV");a.scrollTop=0,a.focus()},update:function(){var a=this,b=s.one(B,this.element,"LI"),c=b&&b.getAttribute("data-tweet-id");this.updateTimeStamps(),this.requestTweets(c,!0,function(b){b.childNodes.length>0&&a.insertNewTweets(b)})},loadMore:function(){var a=this,b=s.all(B,this.element,"LI").pop(),c=b&&b.getAttribute("data-tweet-id");this.requestTweets(c,!1,function(b){var d=s.one(H,a.element,"P"),e=b.childNodes[0];d.style.cssText="",e&&e.getAttribute("data-tweet-id")==c&&b.removeChild(e);if(b.childNodes.length>0){a.appendTweets(b);return}r.add(a.element,"no-more"),d.focus()})},forceLoad:function(){var a=this,b=!!s.all(A,this.element,"OL").length;this.requestTweets(1,!0,function(c){c.childNodes.length&&(a[b?"insertNewTweets":"appendTweets"](c),r.add(a.element,"has-tweets"))})},schedulePolling:function(a){var b=this;if(this.pollInterval===null)return;a=twttr.widgets.poll||a||this.pollInterval||1e4,a>-1&&window.setTimeout(function(){this.isUpdating||b.update(),b.schedulePolling()},a)},requestTweets:function(a,c,d){var g=this,h={id:this.widgetId,screenName:this.widgetScreenName,userId:this.widgetUserId,withReplies:this.widgetShowReplies,dnt:this.dnt,lang:this.lang};h[c?"sinceId":"maxId"]=a,h.complete=function(){this.isUpdating=!1},h.error=function(a){if(a&&a.headers){if(a.headers.status=="404"){g.pollInterval=null;return}if(a.headers.status=="503"){g.pollInterval*=1.5;return}}},h.success=function(a){var e=g.sandbox.doc.createDocumentFragment(),h=g.sandbox.doc.createElement("div"),i=[],j,k;a&&a.headers&&a.headers.xPolling&&/\d+/.test(a.headers.xPolling)&&(g.pollInterval=a.headers.xPolling*1e3);if(a&&a.body!==undefined){h.innerHTML=a.body;if(h.children[0]&&h.children[0].tagName!="LI")return;j=g.getTweetDetails(h);for(k in j)j.hasOwnProperty(k)&&i.push(k);i.length&&(f.enqueue({page:"timeline",component:"timeline",element:c?"newer":"older",action:"results"},{widget_id:g.widgetId,widget_origin:document.location.href,item_ids:i,item_details:j,client_version:t,message:g.partner,query:g.searchQuery,profile_id:g.profileId,event_initiator:c?u.CLIENT_SIDE_APP:u.CLIENT_SIDE_USER},!0,g.dnt),f.flush()),b.retinize(h),b.constrainMedia(h,g.contentWidth());while(h.children[0])e.appendChild(h.children[0]);d(e)}},e.timelinePoll(h)},insertNewTweets:function(a){var b=this,c=s.one(z,this.element,"DIV"),e=s.one(A,c,"OL"),f=e.offsetHeight,g;this.updateTimeStamps(),e.insertBefore(a,e.firstChild),g=e.offsetHeight-f;if(c.scrollTop>40||this.mouseIsOver()){c.scrollTop=c.scrollTop+g,this.showNewTweetNotifier();return}r.remove(this.element,I),e.style.cssText="margin-top: -"+g+"px",window.setTimeout(function(){c.scrollTop=0,r.add(b.element,I),i.cssTransitions()?e.style.cssText="":d.animate(function(a){a<g?e.style.cssText="margin-top: -"+(g-a)+"px":e.style.cssText=""},g,500,d.easeOut)},500),this.gcTweets(50)},appendTweets:function(a){var b=s.one(z,this.element,"DIV"),c=s.one(A,b,"OL");this.updateTimeStamps(),c.appendChild(a)},gcTweets:function(a){var b=s.one(A,this.element,"OL"),c=b.children.length,d;a=a||50;for(;c>a&&(d=b.children[c-1]);c--)b.removeChild(d)},showNewTweetNotifier:function(){var a=this,b=s.one(w,this.element,"DIV"),c=b.children[0];b.style.cssText="",r.add(this.element,J),b.removeChild(c),b.appendChild(c),r.replace(this.element,J,K),this.newNoticeDisplayTime=+(new Date),window.setTimeout(function(){a.hideNewTweetNotifier()},5e3)},hideNewTweetNotifier:function(a){var b=this;if(!a&&this.mouseOverNotifier)return;r.replace(this.element,K,J),window.setTimeout(function(){r.remove(b.element,J)},500)},augmentWidgets:function(a){var b=s.all(G,a,"A"),c=0,d;for(;d=b[c];c++)d.setAttribute("data-related",this.related),d.setAttribute("data-partner",this.partner),d.setAttribute("data-dnt",this.dnt),d.setAttribute("data-search-query",this.searchQuery),d.setAttribute("data-profile-id",this.profileId),this.width<250&&d.setAttribute("data-show-screen-name","false")},discardStaticOverflow:function(a){var b=s.one(A,a,"OL"),c;if(this.staticTimeline){this.height=0;while(c=b.children[this.tweetLimit])b.removeChild(c)}},hideStreamScrollBar:function(){var a=s.one(z,this.element,"DIV"),b=s.one(A,this.element,"OL"),c;a.style.width="",c=this.element.offsetWidth-b.offsetWidth,c>0&&(a.style.width=this.element.offsetWidth+c+"px")},readTranslations:function(){var a=this.element,b="data-dt-";this.datetime=new c(p.compact({phrases:{now:a.getAttribute(b+"now"),s:a.getAttribute(b+"s"),m:a.getAttribute(b+"m"),h:a.getAttribute(b+"h"),second:a.getAttribute(b+"second"),seconds:a.getAttribute(b+"seconds"),minute:a.getAttribute(b+"minute"),minutes:a.getAttribute(b+"minutes"),hour:a.getAttribute(b+"hour"),hours:a.getAttribute(b+"hours")},months:a.getAttribute(b+"months").split("|"),formats:{abbr:a.getAttribute(b+"abbr"),shortdate:a.getAttribute(b+"short"),longdate:a.getAttribute(b+"long")}}))},updateTimeStamps:function(){var a=s.all(F,this.element,"A"),b,c,d=0,e,f;for(;b=a[d];d++){e=b.getAttribute("data-datetime"),f=e&&this.datetime.timeAgo(e,this.i18n),c=b.getElementsByTagName("TIME")[0];if(!f)continue;if(c&&c.innerHTML){c.innerHTML=f;continue}b.innerHTML=f}},mouseIsOver:function(){return this.mouseOver},addUrlParams:function(a){var b=this,c={tw_w:this.widgetId,related:this.related,partner:this.partner,query:this.searchQuery,profile_id:this.profileId,tw_p:"embeddedtimeline"};return this.addUrlParams=g(c,function(a){var c=s.ancestor("."+B,a,b.element);return c&&{tw_i:c.getAttribute("data-tweet-id")}}),this.addUrlParams(a)},showNSFW:function(a){var c=s.one("nsfw",a,"DIV"),d,e,f=0,g,h,j,k;if(!c)return;e=b.scaleDimensions(c.getAttribute("data-width"),c.getAttribute("data-height"),this.contentWidth(),c.getAttribute("data-height")),d=!!(h=c.getAttribute("data-player")),d?j=this.sandbox.doc.createElement("iframe"):(j=this.sandbox.doc.createElement("img"),h=c.getAttribute(i.retina()?"data-image-2x":"data-image"),j.alt=c.getAttribute("data-alt"),k=this.sandbox.doc.createElement("a"),k.href=c.getAttribute("data-href"),k.appendChild(j)),j.title=c.getAttribute("data-title"),j.src=h,j.width=e.width,j.height=e.height,g=s.ancestor("."+D,c,a),f=e.height-c.offsetHeight,c.parentNode.replaceChild(d?j:k,c),g.style.cssText="height:"+(g.offsetHeight+f)+"px"},handleResize:function(){this.handleResize=l(function(){var a=Math.min(this.dimensions.DEFAULT_WIDTH,Math.max(this.dimensions.MIN_WIDTH,this.sandbox.frame.offsetWidth));if(!this.element)return;a<this.dimensions.NARROW_WIDTH?(this.narrow=!0,r.add(this.element,"var-narrow")):(this.narrow=!1,r.remove(this.element,"var-narrow")),this.noscrollbar&&this.hideStreamScrollBar()},50,this),this.handleResize()}}),a(L)})});
provide("tfw/widget/embed",function(a){using("tfw/widget/base","tfw/widget/syndicatedbase","util/datetime","tfw/util/params","dom/classname","dom/get","util/env","util/util","util/throttle","util/twitter","tfw/util/data","tfw/util/tracking",function(b,c,d,e,f,g,h,i,j,k,l,m){function q(a,b,c){var d=g.one("subject",a,"BLOCKQUOTE"),e=g.one("reply",a,"BLOCKQUOTE"),f=d&&d.getAttribute("data-tweet-id"),h=e&&e.getAttribute("data-tweet-id"),i={},j={};if(!f)return;i[f]={item_type:0},m.enqueue({page:"tweet",section:"subject",component:"tweet",action:"results"},{client_version:n,widget_origin:document.location.href,message:b,item_ids:[f],item_details:i},!0,c);if(!h)return;j[h]={item_type:0},m.enqueue({page:"tweet",section:"conversation",component:"tweet",action:"results"},{client_version:n,widget_origin:document.location.href,message:b,item_ids:[h],item_details:j,associations:{4:{association_id:f,association_type:4}}},!0,c)}function r(a,b,c){var d={};if(!a)return;d[a]={item_type:0},m.enqueue({page:"tweet",section:"subject",component:"rawembedcode",action:"no_results"},{client_version:n,widget_origin:document.location.href,message:b,item_ids:[a],item_details:d},!0,c)}function s(a,b,c,d,e){p[a]=p[a]||[],p[a].push({s:c,f:d,r:e,lang:b})}function t(a){if(!a)return;var b,d,e;this.a11yTitle=this._("Embedded Tweet"),c.apply(this,[a]),b=this.params(),d=this.srcEl&&this.srcEl.getElementsByTagName("A"),e=d&&d[d.length-1],this.hideThread=(b.conversation||this.dataAttr("conversation"))=="none"||~i.indexOf(this.classAttr,"tw-hide-thread"),this.hideCard=(b.cards||this.dataAttr("cards"))=="hidden"||~i.indexOf(this.classAttr,"tw-hide-media");if((b.align||this.attr("align"))=="left"||~i.indexOf(this.classAttr,"tw-align-left"))this.align="left";else if((b.align||this.attr("align"))=="right"||~i.indexOf(this.classAttr,"tw-align-right"))this.align="right";else if((b.align||this.attr("align"))=="center"||~i.indexOf(this.classAttr,"tw-align-center"))this.align="center",this.containerWidth>this.dimensions.MIN_WIDTH*(1/.7)&&this.width>this.containerWidth*.7&&(this.width=this.containerWidth*.7);this.narrow=b.narrow||this.width<=this.dimensions.NARROW_WIDTH,this.narrow&&this.classAttr.push("var-narrow"),this.tweetId=b.tweetId||e&&k.status(e.href)}var n="2.0",o="tweetembed",p={};t.prototype=new c,i.aug(t.prototype,{renderedClassNames:"twitter-tweet twitter-tweet-rendered",dimensions:{DEFAULT_HEIGHT:"0",DEFAULT_WIDTH:"500",NARROW_WIDTH:"350",MIN_WIDTH:"220",MIN_HEIGHT:"0",WIDE_MEDIA_PADDING:32,NARROW_MEDIA_PADDING:32},create:function(a){var b=this.sandbox.doc.createElement("div"),d,e=this.sandbox.frame,f=e.style;b.innerHTML=a,d=b.children[0]||!1;if(!d)return;return this.theme=="dark"&&this.classAttr.push("thm-dark"),this.linkColor&&this.addSiteStyles(),this.augmentWidgets(d),c.retinize(d),c.constrainMedia(d,this.contentWidth()),d.id=this.id,d.className+=" "+this.classAttr.join(" "),d.lang=this.lang,twttr.widgets.load(d),this.sandbox.body.appendChild(d),f.cssText="",e.width=this.width,e.height=0,f.display="block",f.border="none",f.maxWidth="99%",f.minWidth=this.dimensions.MIN_WIDTH+"px",f.padding="0",q(d,this.partner,this.dnt),d},render:function(a,b){var c=this,d="",e=this.tweetId,f,g,h;if(!e)return;this.hideCard&&(d+="c"),this.hideThread&&(d+="t"),d&&(e+="-"+d),h=this.callsWhenSandboxReady(function(a){function d(){var a=c.sandbox.frame,b=a.style;c.srcEl&&c.srcEl.parentNode&&c.srcEl.parentNode.removeChild(c.srcEl),b.borderRadius="5px",b.margin="10px 0",b.border="#ddd 1px solid",b.borderTopColor="#eee",b.borderBottomColor="#bbb",b.boxShadow="0 1px 3px rgba(0,0,0,0.15)",c.align=="center"?(b.margin="7px auto",b.float="none"):c.align&&(c.width==c.dimensions.DEFAULT_WIDTH&&(a.width=c.dimensions.NARROW_WIDTH),b.float=c.align),c.handleResize()}var b;if((!window.getComputedStyle||c.sandbox.win.getComputedStyle(c.sandbox.body,null).display!=="none")&&c.element.offsetHeight)return d();b=window.setInterval(function(){(!window.getComputedStyle||c.sandbox.win.getComputedStyle(c.sandbox.body,null).display!=="none")&&c.element.offsetHeight&&(window.clearInterval(b),d())},100)}),f=this.callsWhenSandboxReady(function(a,d){c.element=c.create(d),c.readTimestampTranslations(),c.updateTimeStamps(),c.bindIntentHandlers(),b&&b(c.sandbox.frame)}),g=this.callsWhenSandboxReady(function(a){r(c.tweetId,c.partner,c.dnt)}),s(e,this.lang,f,g,h)},augmentWidgets:function(a){var b=g.all("twitter-follow-button",a,"A"),c,d=0;for(;c=b[d];d++)c.setAttribute("data-related",this.related),c.setAttribute("data-partner",this.partner),c.setAttribute("data-dnt",this.dnt),c.setAttribute("data-show-screen-name","false")},addUrlParams:function(a){var b=this,c={related:this.related,partner:this.partner,tw_p:o};return this.addUrlParams=e(c,function(a){var c=g.ancestor(".tweet",a,b.element);return{tw_i:c.getAttribute("data-tweet-id")}}),this.addUrlParams(a)},handleResize:function(){this.handleResize=j(function(){var a=this,b=Math.min(this.dimensions.DEFAULT_WIDTH,Math.max(this.dimensions.MIN_WIDTH,this.sandbox.frame.offsetWidth));if(!this.element)return;b<this.dimensions.NARROW_WIDTH?(this.narrow=!0,f.add(this.element,"var-narrow")):(this.narrow=!1,f.remove(this.element,"var-narrow")),window.setTimeout(function(){a.sandbox.frame.height=a.height=a.element.offsetHeight},0)},50,this),this.handleResize()},readTimestampTranslations:function(){var a=this.element,b="data-dt-",c=a.getAttribute(b+"months")||"";this.datetime=new d(i.compact({phrases:{AM:a.getAttribute(b+"am"),PM:a.getAttribute(b+"pm")},months:c.split("|"),formats:{full:a.getAttribute(b+"full")}}))},updateTimeStamps:function(){var a=g.one("long-permalink",this.element,"A"),b=a.getAttribute("data-datetime"),c=b&&this.datetime.localTimeStamp(b),d=a.getElementsByTagName("TIME")[0];if(!c)return;if(d&&d.innerHTML){d.innerHTML=c;return}a.innerHTML=c}}),t.fetchAndRender=function(){var a=p,b=[],c,d;p={};if(a.keys)b=a.keys();else for(c in a)a.hasOwnProperty(c)&&b.push(c);if(!b.length)return;m.initPostLogging(),d=a[b[0]][0].lang,l.tweets({ids:b.sort(),lang:d,complete:function(b){var c,d,e,f,g,h,i=[];for(c in b)if(b.hasOwnProperty(c)){g=a[c]&&a[c];for(e=0;g.length&&(f=g[e]);e++)f.s&&(f.s.call(this,b[c]),f.r&&i.push(f.r));delete a[c]}for(e=0;h=i[e];e++)h.call(this);for(d in a)if(a.hasOwnProperty(d)){g=a[d];for(e=0;g.length&&(f=g[e]);e++)f.f&&f.f.call(this,b[c])}m.flush()}})},b.afterLoad(t.fetchAndRender),a(t)})});
provide("dom/textsize",function(a){function c(a,b,c){var d=[],e=0,f;for(;f=c[e];e++)d.push(f[0]),d.push(f[1]);return a+b+d.join(":")}function d(a){var b=a||"";return b.replace(/([A-Z])/g,function(a){return"-"+a.toLowerCase()})}var b={};a(function(a,e,f){var g=document.createElement("span"),h={},i="",j,k=0,l=0,m=[];f=f||[],e=e||"",i=c(a,e,f);if(b[i])return b[i];g.className=e+" twitter-measurement";try{for(;j=f[k];k++)g.style[j[0]]=j[1]}catch(n){for(;j=f[l];l++)m.push(d(j[0])+":"+j[1]);g.setAttribute("style",m.join(";")+";")}return g.innerHTML=a,document.body.appendChild(g),h.width=g.clientWidth||g.offsetWidth,h.height=g.clientHeight||g.offsetHeight,document.body.removeChild(g),delete g,b[i]=h})});
provide("tfw/widget/tweetbase",function(a){using("util/util","tfw/widget/base","util/querystring","util/twitter","util/uri",function(b,c,d,e,f){function i(a){if(!a)return;var b;c.apply(this,[a]),b=this.params(),this.text=b.text||this.dataAttr("text"),this.text&&/\+/.test(this.text)&&!/ /.test(this.text)&&(this.text=this.text.replace(/\+/g," ")),this.align=b.align||this.dataAttr("align")||"",this.via=b.via||this.dataAttr("via"),this.placeid=b.placeid||this.dataAttr("placeid"),this.hashtags=b.hashtags||this.dataAttr("hashtags"),this.screen_name=e.screenName(b.screen_name||b.screenName||this.dataAttr("button-screen-name")),this.url=b.url||this.dataAttr("url")}var g=document.title,h=encodeURI(location.href);i.prototype=new c,b.aug(i.prototype,{parameters:function(){var a={text:this.text,url:this.url,related:this.related,lang:this.lang,placeid:this.placeid,original_referer:location.href,id:this.id,screen_name:this.screen_name,hashtags:this.hashtags,dnt:this.dnt,_:+(new Date)};return b.compact(a),d.encode(a)}}),a(i)})});
provide("tfw/widget/tweetbutton",function(a){using("tfw/widget/tweetbase","util/util","util/querystring","util/uri","util/twitter","dom/textsize",function(b,c,d,e,f,g){var h=document.title,i=encodeURI(location.href),j=["vertical","horizontal","none"],k=function(a){b.apply(this,[a]);var d=this.params(),g=d.count||this.dataAttr("count"),k=d.size||this.dataAttr("size"),l=e.getScreenNameFromPage();if(d.type=="hashtag"||~c.indexOf(this.classAttr,"twitter-hashtag-button"))this.type="hashtag";else if(d.type=="mention"||~c.indexOf(this.classAttr,"twitter-mention-button"))this.type="mention";this.counturl=d.counturl||this.dataAttr("counturl"),this.searchlink=d.searchlink||this.dataAttr("searchlink"),this.button_hashtag=f.hashTag(d.button_hashtag||d.hashtag||this.dataAttr("button-hashtag"),!1),this.size=k=="large"?"l":"m",this.type?(this.count="none",l&&(this.related=this.related?l+","+this.related:l)):(this.text=this.text||h,this.url=this.url||e.getCanonicalURL()||i,this.count=~c.indexOf(j,g)?g:"horizontal",this.count=this.count=="vertical"&&this.size=="l"?"none":this.count,this.via=this.via||l)};k.prototype=new b,c.aug(k.prototype,{parameters:function(){var a={text:this.text,url:this.url,via:this.via,related:this.related,count:this.count,lang:this.lang,counturl:this.counturl,searchlink:this.searchlink,placeid:this.placeid,original_referer:location.href,id:this.id,size:this.size,type:this.type,screen_name:this.screen_name,button_hashtag:this.button_hashtag,hashtags:this.hashtags,align:this.align,dnt:this.dnt,_:+(new Date)};return c.compact(a),d.encode(a)},height:function(){return this.count=="vertical"?62:this.size=="m"?20:28},width:function(){var a={ver:8,cnt:14,btn:24,xlcnt:18,xlbtn:38},b=this.count=="vertical",d=this.type=="hashtag"&&this.button_hashtag?"Tweet %{hashtag}":this.type=="mention"&&this.screen_name?"Tweet to %{name}":"Tweet",e=this._(d,{name:"@"+this.screen_name,hashtag:"#"+this.button_hashtag}),f=this._("K"),h=this._("100K+"),i=(b?"8888":"88888")+f,j=0,k=0,l=0,m=0,n=this.styles.base,o=n;return~c.indexOf(["ja","ko"],this.lang)?i+=this._("10k unit"):i=i.length>h.length?i:h,b?(o=n.concat(this.styles.vbubble),m=a.ver,l=a.btn):this.size=="l"?(n=o=n.concat(this.styles.large),l=a.xlbtn,m=a.xlcnt):(l=a.btn,m=a.cnt),this.count!="none"&&(k=g(i,"",o).width+m),j=g(e,"",n.concat(this.styles.button)).width+l,b?j>k?j:k:this.calculatedWidth=j+k},render:function(a,b){var c=twttr.widgets.config.assetUrl()+"/widgets/tweet_button.1367516458.html#"+this.parameters();this.count&&this.classAttr.push("twitter-count-"+this.count),this.element=this.create(c,this.dimensions(),{title:this._("Twitter Tweet Button")}),b&&b(this.element)}}),a(k)})});
provide("tfw/widget/follow",function(a){using("util/util","tfw/widget/base","util/querystring","util/uri","util/twitter","dom/textsize",function(b,c,d,e,f,g){function h(a){if(!a)return;var b,d,e,g,h;c.apply(this,[a]),b=this.params(),d=b.size||this.dataAttr("size"),e=b.showScreenName||this.dataAttr("show-screen-name"),h=b.count||this.dataAttr("count"),this.classAttr.push("twitter-follow-button"),this.showScreenName=e!="false",this.showCount=b.showCount!==!1&&this.dataAttr("show-count")!="false",h=="none"&&(this.showCount=!1),this.explicitWidth=b.width||this.dataAttr("width")||"",this.screenName=b.screen_name||b.screenName||f.screenName(this.attr("href")),this.preview=b.preview||this.dataAttr("preview")||"",this.align=b.align||this.dataAttr("align")||"",this.size=d=="large"?"l":"m"}h.prototype=new c,b.aug(h.prototype,{parameters:function(){var a={screen_name:this.screenName,lang:this.lang,show_count:this.showCount,show_screen_name:this.showScreenName,align:this.align,id:this.id,preview:this.preview,size:this.size,dnt:this.dnt,_:+(new Date)};return b.compact(a),d.encode(a)},render:function(a,b){if(!this.screenName)return;var c=twttr.widgets.config.assetUrl()+"/widgets/follow_button.1367516458.html#"+this.parameters();this.element=this.create(c,this.dimensions(),{title:this._("Twitter Follow Button")}),b&&b(this.element)},width:function(){if(this.calculatedWidth)return this.calculatedWidth;if(this.explicitWidth)return this.explicitWidth;var a={cnt:13,btn:24,xlcnt:22,xlbtn:38},c=this.showScreenName?"Follow %{screen_name}":"Follow",d=this._(c,{screen_name:"@"+this.screenName}),e=~b.indexOf(["ja","ko"],this.lang)?this._("10k unit"):this._("M"),f=this._("%{followers_count} followers",{followers_count:"88888"+e}),h=0,i=0,j,k,l=this.styles.base;return this.size=="l"?(l=l.concat(this.styles.large),j=a.xlbtn,k=a.xlcnt):(j=a.btn,k=a.cnt),this.showCount&&(i=g(f,"",l).width+k),h=g(d,"",l.concat(this.styles.button)).width+j,this.calculatedWidth=h+i}}),a(h)})});
!function(){function a(a){return(a||!/^http\:$/.test(window.location.protocol))&&!twttr.ignoreSSL?"https":"http"}window.twttr=window.twttr||{},twttr.host=twttr.host||"platform.twitter.com";if(twttr.widgets&&twttr.widgets.loaded)return twttr.widgets.load(),!1;if(twttr.init)return!1;twttr.init=!0,twttr._e=twttr._e||[],twttr.ready=twttr.ready||function(a){twttr.widgets&&twttr.widgets.loaded?a(twttr):twttr._e.push(a)},using.path.length||(using.path=a()+"://"+twttr.host+"/js"),twttr.ignoreSSL=twttr.ignoreSSL||!1;var b=[];twttr.events={bind:function(a,c){return b.push([a,c])}},using("util/domready",function(c){c(function(){using("tfw/widget/base","tfw/widget/follow","tfw/widget/tweetbutton","tfw/widget/embed","tfw/widget/timeline","tfw/widget/intent","tfw/util/globals","util/events","util/util",function(c,d,e,f,g,h,i,j,k){function q(b){var c=twttr.host;return a(b)=="https"&&twttr.secureHost&&(c=twttr.secureHost),a(b)+"://"+c}function r(){using("tfw/hub/client",function(a){twttr.events.hub=a.init(n),a.init(n,!0)})}var l,m,n={widgets:{"a.twitter-share-button":e,"a.twitter-mention-button":e,"a.twitter-hashtag-button":e,"a.twitter-follow-button":d,"blockquote.twitter-tweet":f,"a.twitter-timeline":g,body:h}},o=twttr.events&&twttr.events.hub?twttr.events:{},p;i.init(),n.assetUrl=q,twttr.widgets=twttr.widgets||{},k.aug(twttr.widgets,{config:{assetUrl:q},load:function(a){c.init(n),c.embed(a),twttr.widgets.loaded=!0},createShareButton:function(a,b,c,d){if(!a||!b)return c&&c(!1);d=k.aug({},d||{},{url:a,targetEl:b}),(new e(d)).render(n,c)},createHashtagButton:function(a,b,c,d){if(!a||!b)return d&&d(!1);c=k.aug({},c||{},{hashtag:a,targetEl:b,type:"hashtag"}),(new e(c)).render(n,d)},createMentionButton:function(a,b,c,d){if(!a||!b)return c&&c(!1);d=k.aug({},d||{},{screenName:a,targetEl:b,type:"mention"}),(new e(d)).render(n,c)},createFollowButton:function(a,b,c,e){if(!a||!b)return c&&c(!1);e=k.aug({},e||{},{screenName:a,targetEl:b}),(new d(e)).render(n,c)},createTweet:function(a,b,c,d){if(!a||!b)return c&&c(!1);d=k.aug({},d||{},{tweetId:a,targetEl:b}),(new f(d)).render(n,c),f.fetchAndRender()},createTimeline:function(a,b,c,d){if(!a||!b)return c&&c(!1);d=k.aug({},d||{},{widgetId:a,targetEl:b}),(new g(d)).render(n,c)}}),k.aug(twttr.events,o,j.Emitter),p=twttr.events.bind,twttr.events.bind=function(a,b){r(),this.bind=p,this.bind(a,b)};for(l=0;m=b[l];l++)twttr.events.bind(m[0],m[1]);for(l=0;m=twttr._e[l];l++)m(twttr);twttr.ready=function(a){a(twttr)},/twitter\.com(\:\d+)?$/.test(document.location.host)&&(twttr.widgets.createTimelinePreview=function(a,b,c){if(!n||!b)return c&&c(!1);(new g({previewParams:a,targetEl:b,linkColor:a.link_color,theme:a.theme,height:a.height})).render(n,c)}),twttr.widgets.createTweetEmbed=twttr.widgets.createTweet,twttr.widgets.load()})})})}()});


// FROM: assets/js/jquery.js
/*! jQuery v1.9.1 | (c) 2005, 2012 jQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=jquery.min.map
*/(function(e,t){var n,r,i=typeof t,o=e.document,a=e.location,s=e.jQuery,u=e.$,l={},c=[],p="1.9.1",f=c.concat,d=c.push,h=c.slice,g=c.indexOf,m=l.toString,y=l.hasOwnProperty,v=p.trim,b=function(e,t){return new b.fn.init(e,t,r)},x=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,w=/\S+/g,T=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,N=/^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,k=/^[\],:{}\s]*$/,E=/(?:^|:|,)(?:\s*\[)+/g,S=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,A=/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,j=/^-ms-/,D=/-([\da-z])/gi,L=function(e,t){return t.toUpperCase()},H=function(e){(o.addEventListener||"load"===e.type||"complete"===o.readyState)&&(q(),b.ready())},q=function(){o.addEventListener?(o.removeEventListener("DOMContentLoaded",H,!1),e.removeEventListener("load",H,!1)):(o.detachEvent("onreadystatechange",H),e.detachEvent("onload",H))};b.fn=b.prototype={jquery:p,constructor:b,init:function(e,n,r){var i,a;if(!e)return this;if("string"==typeof e){if(i="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:N.exec(e),!i||!i[1]&&n)return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e);if(i[1]){if(n=n instanceof b?n[0]:n,b.merge(this,b.parseHTML(i[1],n&&n.nodeType?n.ownerDocument||n:o,!0)),C.test(i[1])&&b.isPlainObject(n))for(i in n)b.isFunction(this[i])?this[i](n[i]):this.attr(i,n[i]);return this}if(a=o.getElementById(i[2]),a&&a.parentNode){if(a.id!==i[2])return r.find(e);this.length=1,this[0]=a}return this.context=o,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):b.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),b.makeArray(e,this))},selector:"",length:0,size:function(){return this.length},toArray:function(){return h.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=b.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return b.each(this,e,t)},ready:function(e){return b.ready.promise().done(e),this},slice:function(){return this.pushStack(h.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},map:function(e){return this.pushStack(b.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:d,sort:[].sort,splice:[].splice},b.fn.init.prototype=b.fn,b.extend=b.fn.extend=function(){var e,n,r,i,o,a,s=arguments[0]||{},u=1,l=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[1]||{},u=2),"object"==typeof s||b.isFunction(s)||(s={}),l===u&&(s=this,--u);l>u;u++)if(null!=(o=arguments[u]))for(i in o)e=s[i],r=o[i],s!==r&&(c&&r&&(b.isPlainObject(r)||(n=b.isArray(r)))?(n?(n=!1,a=e&&b.isArray(e)?e:[]):a=e&&b.isPlainObject(e)?e:{},s[i]=b.extend(c,a,r)):r!==t&&(s[i]=r));return s},b.extend({noConflict:function(t){return e.$===b&&(e.$=u),t&&e.jQuery===b&&(e.jQuery=s),b},isReady:!1,readyWait:1,holdReady:function(e){e?b.readyWait++:b.ready(!0)},ready:function(e){if(e===!0?!--b.readyWait:!b.isReady){if(!o.body)return setTimeout(b.ready);b.isReady=!0,e!==!0&&--b.readyWait>0||(n.resolveWith(o,[b]),b.fn.trigger&&b(o).trigger("ready").off("ready"))}},isFunction:function(e){return"function"===b.type(e)},isArray:Array.isArray||function(e){return"array"===b.type(e)},isWindow:function(e){return null!=e&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[m.call(e)]||"object":typeof e},isPlainObject:function(e){if(!e||"object"!==b.type(e)||e.nodeType||b.isWindow(e))return!1;try{if(e.constructor&&!y.call(e,"constructor")&&!y.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(n){return!1}var r;for(r in e);return r===t||y.call(e,r)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||o;var r=C.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=b.buildFragment([e],t,i),i&&b(i).remove(),b.merge([],r.childNodes))},parseJSON:function(n){return e.JSON&&e.JSON.parse?e.JSON.parse(n):null===n?n:"string"==typeof n&&(n=b.trim(n),n&&k.test(n.replace(S,"@").replace(A,"]").replace(E,"")))?Function("return "+n)():(b.error("Invalid JSON: "+n),t)},parseXML:function(n){var r,i;if(!n||"string"!=typeof n)return null;try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))}catch(o){r=t}return r&&r.documentElement&&!r.getElementsByTagName("parsererror").length||b.error("Invalid XML: "+n),r},noop:function(){},globalEval:function(t){t&&b.trim(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(j,"ms-").replace(D,L)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,o=e.length,a=M(e);if(n){if(a){for(;o>i;i++)if(r=t.apply(e[i],n),r===!1)break}else for(i in e)if(r=t.apply(e[i],n),r===!1)break}else if(a){for(;o>i;i++)if(r=t.call(e[i],i,e[i]),r===!1)break}else for(i in e)if(r=t.call(e[i],i,e[i]),r===!1)break;return e},trim:v&&!v.call("\ufeff\u00a0")?function(e){return null==e?"":v.call(e)}:function(e){return null==e?"":(e+"").replace(T,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(M(Object(e))?b.merge(n,"string"==typeof e?[e]:e):d.call(n,e)),n},inArray:function(e,t,n){var r;if(t){if(g)return g.call(t,e,n);for(r=t.length,n=n?0>n?Math.max(0,r+n):n:0;r>n;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=n.length,i=e.length,o=0;if("number"==typeof r)for(;r>o;o++)e[i++]=n[o];else while(n[o]!==t)e[i++]=n[o++];return e.length=i,e},grep:function(e,t,n){var r,i=[],o=0,a=e.length;for(n=!!n;a>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},map:function(e,t,n){var r,i=0,o=e.length,a=M(e),s=[];if(a)for(;o>i;i++)r=t(e[i],i,n),null!=r&&(s[s.length]=r);else for(i in e)r=t(e[i],i,n),null!=r&&(s[s.length]=r);return f.apply([],s)},guid:1,proxy:function(e,n){var r,i,o;return"string"==typeof n&&(o=e[n],n=e,e=o),b.isFunction(e)?(r=h.call(arguments,2),i=function(){return e.apply(n||this,r.concat(h.call(arguments)))},i.guid=e.guid=e.guid||b.guid++,i):t},access:function(e,n,r,i,o,a,s){var u=0,l=e.length,c=null==r;if("object"===b.type(r)){o=!0;for(u in r)b.access(e,n,u,r[u],!0,a,s)}else if(i!==t&&(o=!0,b.isFunction(i)||(s=!0),c&&(s?(n.call(e,i),n=null):(c=n,n=function(e,t,n){return c.call(b(e),n)})),n))for(;l>u;u++)n(e[u],r,s?i:i.call(e[u],u,n(e[u],r)));return o?e:c?n.call(e):l?n(e[0],r):a},now:function(){return(new Date).getTime()}}),b.ready.promise=function(t){if(!n)if(n=b.Deferred(),"complete"===o.readyState)setTimeout(b.ready);else if(o.addEventListener)o.addEventListener("DOMContentLoaded",H,!1),e.addEventListener("load",H,!1);else{o.attachEvent("onreadystatechange",H),e.attachEvent("onload",H);var r=!1;try{r=null==e.frameElement&&o.documentElement}catch(i){}r&&r.doScroll&&function a(){if(!b.isReady){try{r.doScroll("left")}catch(e){return setTimeout(a,50)}q(),b.ready()}}()}return n.promise(t)},b.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});function M(e){var t=e.length,n=b.type(e);return b.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)}r=b(o);var _={};function F(e){var t=_[e]={};return b.each(e.match(w)||[],function(e,n){t[n]=!0}),t}b.Callbacks=function(e){e="string"==typeof e?_[e]||F(e):b.extend({},e);var n,r,i,o,a,s,u=[],l=!e.once&&[],c=function(t){for(r=e.memory&&t,i=!0,a=s||0,s=0,o=u.length,n=!0;u&&o>a;a++)if(u[a].apply(t[0],t[1])===!1&&e.stopOnFalse){r=!1;break}n=!1,u&&(l?l.length&&c(l.shift()):r?u=[]:p.disable())},p={add:function(){if(u){var t=u.length;(function i(t){b.each(t,function(t,n){var r=b.type(n);"function"===r?e.unique&&p.has(n)||u.push(n):n&&n.length&&"string"!==r&&i(n)})})(arguments),n?o=u.length:r&&(s=t,c(r))}return this},remove:function(){return u&&b.each(arguments,function(e,t){var r;while((r=b.inArray(t,u,r))>-1)u.splice(r,1),n&&(o>=r&&o--,a>=r&&a--)}),this},has:function(e){return e?b.inArray(e,u)>-1:!(!u||!u.length)},empty:function(){return u=[],this},disable:function(){return u=l=r=t,this},disabled:function(){return!u},lock:function(){return l=t,r||p.disable(),this},locked:function(){return!l},fireWith:function(e,t){return t=t||[],t=[e,t.slice?t.slice():t],!u||i&&!l||(n?l.push(t):c(t)),this},fire:function(){return p.fireWith(this,arguments),this},fired:function(){return!!i}};return p},b.extend({Deferred:function(e){var t=[["resolve","done",b.Callbacks("once memory"),"resolved"],["reject","fail",b.Callbacks("once memory"),"rejected"],["notify","progress",b.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return b.Deferred(function(n){b.each(t,function(t,o){var a=o[0],s=b.isFunction(e[t])&&e[t];i[o[1]](function(){var e=s&&s.apply(this,arguments);e&&b.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[a+"With"](this===r?n.promise():this,s?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?b.extend(e,r):r}},i={};return r.pipe=r.then,b.each(t,function(e,o){var a=o[2],s=o[3];r[o[1]]=a.add,s&&a.add(function(){n=s},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=a.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=h.call(arguments),r=n.length,i=1!==r||e&&b.isFunction(e.promise)?r:0,o=1===i?e:b.Deferred(),a=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?h.call(arguments):r,n===s?o.notifyWith(t,n):--i||o.resolveWith(t,n)}},s,u,l;if(r>1)for(s=Array(r),u=Array(r),l=Array(r);r>t;t++)n[t]&&b.isFunction(n[t].promise)?n[t].promise().done(a(t,l,n)).fail(o.reject).progress(a(t,u,s)):--i;return i||o.resolveWith(l,n),o.promise()}}),b.support=function(){var t,n,r,a,s,u,l,c,p,f,d=o.createElement("div");if(d.setAttribute("className","t"),d.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=d.getElementsByTagName("*"),r=d.getElementsByTagName("a")[0],!n||!r||!n.length)return{};s=o.createElement("select"),l=s.appendChild(o.createElement("option")),a=d.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t={getSetAttribute:"t"!==d.className,leadingWhitespace:3===d.firstChild.nodeType,tbody:!d.getElementsByTagName("tbody").length,htmlSerialize:!!d.getElementsByTagName("link").length,style:/top/.test(r.getAttribute("style")),hrefNormalized:"/a"===r.getAttribute("href"),opacity:/^0.5/.test(r.style.opacity),cssFloat:!!r.style.cssFloat,checkOn:!!a.value,optSelected:l.selected,enctype:!!o.createElement("form").enctype,html5Clone:"<:nav></:nav>"!==o.createElement("nav").cloneNode(!0).outerHTML,boxModel:"CSS1Compat"===o.compatMode,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,boxSizingReliable:!0,pixelPosition:!1},a.checked=!0,t.noCloneChecked=a.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!l.disabled;try{delete d.test}catch(h){t.deleteExpando=!1}a=o.createElement("input"),a.setAttribute("value",""),t.input=""===a.getAttribute("value"),a.value="t",a.setAttribute("type","radio"),t.radioValue="t"===a.value,a.setAttribute("checked","t"),a.setAttribute("name","t"),u=o.createDocumentFragment(),u.appendChild(a),t.appendChecked=a.checked,t.checkClone=u.cloneNode(!0).cloneNode(!0).lastChild.checked,d.attachEvent&&(d.attachEvent("onclick",function(){t.noCloneEvent=!1}),d.cloneNode(!0).click());for(f in{submit:!0,change:!0,focusin:!0})d.setAttribute(c="on"+f,"t"),t[f+"Bubbles"]=c in e||d.attributes[c].expando===!1;return d.style.backgroundClip="content-box",d.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===d.style.backgroundClip,b(function(){var n,r,a,s="padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",u=o.getElementsByTagName("body")[0];u&&(n=o.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",u.appendChild(n).appendChild(d),d.innerHTML="<table><tr><td></td><td>t</td></tr></table>",a=d.getElementsByTagName("td"),a[0].style.cssText="padding:0;margin:0;border:0;display:none",p=0===a[0].offsetHeight,a[0].style.display="",a[1].style.display="none",t.reliableHiddenOffsets=p&&0===a[0].offsetHeight,d.innerHTML="",d.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",t.boxSizing=4===d.offsetWidth,t.doesNotIncludeMarginInBodyOffset=1!==u.offsetTop,e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(d,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(d,null)||{width:"4px"}).width,r=d.appendChild(o.createElement("div")),r.style.cssText=d.style.cssText=s,r.style.marginRight=r.style.width="0",d.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),typeof d.style.zoom!==i&&(d.innerHTML="",d.style.cssText=s+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=3===d.offsetWidth,d.style.display="block",d.innerHTML="<div></div>",d.firstChild.style.width="5px",t.shrinkWrapBlocks=3!==d.offsetWidth,t.inlineBlockNeedsLayout&&(u.style.zoom=1)),u.removeChild(n),n=d=a=r=null)}),n=s=u=l=r=a=null,t}();var O=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,B=/([A-Z])/g;function P(e,n,r,i){if(b.acceptData(e)){var o,a,s=b.expando,u="string"==typeof n,l=e.nodeType,p=l?b.cache:e,f=l?e[s]:e[s]&&s;if(f&&p[f]&&(i||p[f].data)||!u||r!==t)return f||(l?e[s]=f=c.pop()||b.guid++:f=s),p[f]||(p[f]={},l||(p[f].toJSON=b.noop)),("object"==typeof n||"function"==typeof n)&&(i?p[f]=b.extend(p[f],n):p[f].data=b.extend(p[f].data,n)),o=p[f],i||(o.data||(o.data={}),o=o.data),r!==t&&(o[b.camelCase(n)]=r),u?(a=o[n],null==a&&(a=o[b.camelCase(n)])):a=o,a}}function R(e,t,n){if(b.acceptData(e)){var r,i,o,a=e.nodeType,s=a?b.cache:e,u=a?e[b.expando]:b.expando;if(s[u]){if(t&&(o=n?s[u]:s[u].data)){b.isArray(t)?t=t.concat(b.map(t,b.camelCase)):t in o?t=[t]:(t=b.camelCase(t),t=t in o?[t]:t.split(" "));for(r=0,i=t.length;i>r;r++)delete o[t[r]];if(!(n?$:b.isEmptyObject)(o))return}(n||(delete s[u].data,$(s[u])))&&(a?b.cleanData([e],!0):b.support.deleteExpando||s!=s.window?delete s[u]:s[u]=null)}}}b.extend({cache:{},expando:"jQuery"+(p+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(e){return e=e.nodeType?b.cache[e[b.expando]]:e[b.expando],!!e&&!$(e)},data:function(e,t,n){return P(e,t,n)},removeData:function(e,t){return R(e,t)},_data:function(e,t,n){return P(e,t,n,!0)},_removeData:function(e,t){return R(e,t,!0)},acceptData:function(e){if(e.nodeType&&1!==e.nodeType&&9!==e.nodeType)return!1;var t=e.nodeName&&b.noData[e.nodeName.toLowerCase()];return!t||t!==!0&&e.getAttribute("classid")===t}}),b.fn.extend({data:function(e,n){var r,i,o=this[0],a=0,s=null;if(e===t){if(this.length&&(s=b.data(o),1===o.nodeType&&!b._data(o,"parsedAttrs"))){for(r=o.attributes;r.length>a;a++)i=r[a].name,i.indexOf("data-")||(i=b.camelCase(i.slice(5)),W(o,i,s[i]));b._data(o,"parsedAttrs",!0)}return s}return"object"==typeof e?this.each(function(){b.data(this,e)}):b.access(this,function(n){return n===t?o?W(o,e,b.data(o,e)):null:(this.each(function(){b.data(this,e,n)}),t)},null,n,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){b.removeData(this,e)})}});function W(e,n,r){if(r===t&&1===e.nodeType){var i="data-"+n.replace(B,"-$1").toLowerCase();if(r=e.getAttribute(i),"string"==typeof r){try{r="true"===r?!0:"false"===r?!1:"null"===r?null:+r+""===r?+r:O.test(r)?b.parseJSON(r):r}catch(o){}b.data(e,n,r)}else r=t}return r}function $(e){var t;for(t in e)if(("data"!==t||!b.isEmptyObject(e[t]))&&"toJSON"!==t)return!1;return!0}b.extend({queue:function(e,n,r){var i;return e?(n=(n||"fx")+"queue",i=b._data(e,n),r&&(!i||b.isArray(r)?i=b._data(e,n,b.makeArray(r)):i.push(r)),i||[]):t},dequeue:function(e,t){t=t||"fx";var n=b.queue(e,t),r=n.length,i=n.shift(),o=b._queueHooks(e,t),a=function(){b.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),o.cur=i,i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return b._data(e,n)||b._data(e,n,{empty:b.Callbacks("once memory").add(function(){b._removeData(e,t+"queue"),b._removeData(e,n)})})}}),b.fn.extend({queue:function(e,n){var r=2;return"string"!=typeof e&&(n=e,e="fx",r--),r>arguments.length?b.queue(this[0],e):n===t?this:this.each(function(){var t=b.queue(this,e,n);b._queueHooks(this,e),"fx"===e&&"inprogress"!==t[0]&&b.dequeue(this,e)})},dequeue:function(e){return this.each(function(){b.dequeue(this,e)})},delay:function(e,t){return e=b.fx?b.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,o=b.Deferred(),a=this,s=this.length,u=function(){--i||o.resolveWith(a,[a])};"string"!=typeof e&&(n=e,e=t),e=e||"fx";while(s--)r=b._data(a[s],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(u));return u(),o.promise(n)}});var I,z,X=/[\t\r\n]/g,U=/\r/g,V=/^(?:input|select|textarea|button|object)$/i,Y=/^(?:a|area)$/i,J=/^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,G=/^(?:checked|selected)$/i,Q=b.support.getSetAttribute,K=b.support.input;b.fn.extend({attr:function(e,t){return b.access(this,b.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){b.removeAttr(this,e)})},prop:function(e,t){return b.access(this,b.prop,e,t,arguments.length>1)},removeProp:function(e){return e=b.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,o,a=0,s=this.length,u="string"==typeof e&&e;if(b.isFunction(e))return this.each(function(t){b(this).addClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(X," "):" ")){o=0;while(i=t[o++])0>r.indexOf(" "+i+" ")&&(r+=i+" ");n.className=b.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,a=0,s=this.length,u=0===arguments.length||"string"==typeof e&&e;if(b.isFunction(e))return this.each(function(t){b(this).removeClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(X," "):"")){o=0;while(i=t[o++])while(r.indexOf(" "+i+" ")>=0)r=r.replace(" "+i+" "," ");n.className=e?b.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e,r="boolean"==typeof t;return b.isFunction(e)?this.each(function(n){b(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n){var o,a=0,s=b(this),u=t,l=e.match(w)||[];while(o=l[a++])u=r?u:!s.hasClass(o),s[u?"addClass":"removeClass"](o)}else(n===i||"boolean"===n)&&(this.className&&b._data(this,"__className__",this.className),this.className=this.className||e===!1?"":b._data(this,"__className__")||"")})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(X," ").indexOf(t)>=0)return!0;return!1},val:function(e){var n,r,i,o=this[0];{if(arguments.length)return i=b.isFunction(e),this.each(function(n){var o,a=b(this);1===this.nodeType&&(o=i?e.call(this,n,a.val()):e,null==o?o="":"number"==typeof o?o+="":b.isArray(o)&&(o=b.map(o,function(e){return null==e?"":e+""})),r=b.valHooks[this.type]||b.valHooks[this.nodeName.toLowerCase()],r&&"set"in r&&r.set(this,o,"value")!==t||(this.value=o))});if(o)return r=b.valHooks[o.type]||b.valHooks[o.nodeName.toLowerCase()],r&&"get"in r&&(n=r.get(o,"value"))!==t?n:(n=o.value,"string"==typeof n?n.replace(U,""):null==n?"":n)}}}),b.extend({valHooks:{option:{get:function(e){var t=e.attributes.value;return!t||t.specified?e.value:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,a=o?null:[],s=o?i+1:r.length,u=0>i?s:o?i:0;for(;s>u;u++)if(n=r[u],!(!n.selected&&u!==i||(b.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&b.nodeName(n.parentNode,"optgroup"))){if(t=b(n).val(),o)return t;a.push(t)}return a},set:function(e,t){var n=b.makeArray(t);return b(e).find("option").each(function(){this.selected=b.inArray(b(this).val(),n)>=0}),n.length||(e.selectedIndex=-1),n}}},attr:function(e,n,r){var o,a,s,u=e.nodeType;if(e&&3!==u&&8!==u&&2!==u)return typeof e.getAttribute===i?b.prop(e,n,r):(a=1!==u||!b.isXMLDoc(e),a&&(n=n.toLowerCase(),o=b.attrHooks[n]||(J.test(n)?z:I)),r===t?o&&a&&"get"in o&&null!==(s=o.get(e,n))?s:(typeof e.getAttribute!==i&&(s=e.getAttribute(n)),null==s?t:s):null!==r?o&&a&&"set"in o&&(s=o.set(e,r,n))!==t?s:(e.setAttribute(n,r+""),r):(b.removeAttr(e,n),t))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(w);if(o&&1===e.nodeType)while(n=o[i++])r=b.propFix[n]||n,J.test(n)?!Q&&G.test(n)?e[b.camelCase("default-"+n)]=e[r]=!1:e[r]=!1:b.attr(e,n,""),e.removeAttribute(Q?n:r)},attrHooks:{type:{set:function(e,t){if(!b.support.radioValue&&"radio"===t&&b.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(e,n,r){var i,o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return a=1!==s||!b.isXMLDoc(e),a&&(n=b.propFix[n]||n,o=b.propHooks[n]),r!==t?o&&"set"in o&&(i=o.set(e,r,n))!==t?i:e[n]=r:o&&"get"in o&&null!==(i=o.get(e,n))?i:e[n]},propHooks:{tabIndex:{get:function(e){var n=e.getAttributeNode("tabindex");return n&&n.specified?parseInt(n.value,10):V.test(e.nodeName)||Y.test(e.nodeName)&&e.href?0:t}}}}),z={get:function(e,n){var r=b.prop(e,n),i="boolean"==typeof r&&e.getAttribute(n),o="boolean"==typeof r?K&&Q?null!=i:G.test(n)?e[b.camelCase("default-"+n)]:!!i:e.getAttributeNode(n);return o&&o.value!==!1?n.toLowerCase():t},set:function(e,t,n){return t===!1?b.removeAttr(e,n):K&&Q||!G.test(n)?e.setAttribute(!Q&&b.propFix[n]||n,n):e[b.camelCase("default-"+n)]=e[n]=!0,n}},K&&Q||(b.attrHooks.value={get:function(e,n){var r=e.getAttributeNode(n);return b.nodeName(e,"input")?e.defaultValue:r&&r.specified?r.value:t},set:function(e,n,r){return b.nodeName(e,"input")?(e.defaultValue=n,t):I&&I.set(e,n,r)}}),Q||(I=b.valHooks.button={get:function(e,n){var r=e.getAttributeNode(n);return r&&("id"===n||"name"===n||"coords"===n?""!==r.value:r.specified)?r.value:t},set:function(e,n,r){var i=e.getAttributeNode(r);return i||e.setAttributeNode(i=e.ownerDocument.createAttribute(r)),i.value=n+="","value"===r||n===e.getAttribute(r)?n:t}},b.attrHooks.contenteditable={get:I.get,set:function(e,t,n){I.set(e,""===t?!1:t,n)}},b.each(["width","height"],function(e,n){b.attrHooks[n]=b.extend(b.attrHooks[n],{set:function(e,r){return""===r?(e.setAttribute(n,"auto"),r):t}})})),b.support.hrefNormalized||(b.each(["href","src","width","height"],function(e,n){b.attrHooks[n]=b.extend(b.attrHooks[n],{get:function(e){var r=e.getAttribute(n,2);return null==r?t:r}})}),b.each(["href","src"],function(e,t){b.propHooks[t]={get:function(e){return e.getAttribute(t,4)}}})),b.support.style||(b.attrHooks.style={get:function(e){return e.style.cssText||t},set:function(e,t){return e.style.cssText=t+""}}),b.support.optSelected||(b.propHooks.selected=b.extend(b.propHooks.selected,{get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}})),b.support.enctype||(b.propFix.enctype="encoding"),b.support.checkOn||b.each(["radio","checkbox"],function(){b.valHooks[this]={get:function(e){return null===e.getAttribute("value")?"on":e.value}}}),b.each(["radio","checkbox"],function(){b.valHooks[this]=b.extend(b.valHooks[this],{set:function(e,n){return b.isArray(n)?e.checked=b.inArray(b(e).val(),n)>=0:t}})});var Z=/^(?:input|select|textarea)$/i,et=/^key/,tt=/^(?:mouse|contextmenu)|click/,nt=/^(?:focusinfocus|focusoutblur)$/,rt=/^([^.]*)(?:\.(.+)|)$/;function it(){return!0}function ot(){return!1}b.event={global:{},add:function(e,n,r,o,a){var s,u,l,c,p,f,d,h,g,m,y,v=b._data(e);if(v){r.handler&&(c=r,r=c.handler,a=c.selector),r.guid||(r.guid=b.guid++),(u=v.events)||(u=v.events={}),(f=v.handle)||(f=v.handle=function(e){return typeof b===i||e&&b.event.triggered===e.type?t:b.event.dispatch.apply(f.elem,arguments)},f.elem=e),n=(n||"").match(w)||[""],l=n.length;while(l--)s=rt.exec(n[l])||[],g=y=s[1],m=(s[2]||"").split(".").sort(),p=b.event.special[g]||{},g=(a?p.delegateType:p.bindType)||g,p=b.event.special[g]||{},d=b.extend({type:g,origType:y,data:o,handler:r,guid:r.guid,selector:a,needsContext:a&&b.expr.match.needsContext.test(a),namespace:m.join(".")},c),(h=u[g])||(h=u[g]=[],h.delegateCount=0,p.setup&&p.setup.call(e,o,m,f)!==!1||(e.addEventListener?e.addEventListener(g,f,!1):e.attachEvent&&e.attachEvent("on"+g,f))),p.add&&(p.add.call(e,d),d.handler.guid||(d.handler.guid=r.guid)),a?h.splice(h.delegateCount++,0,d):h.push(d),b.event.global[g]=!0;e=null}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,p,f,d,h,g,m=b.hasData(e)&&b._data(e);if(m&&(c=m.events)){t=(t||"").match(w)||[""],l=t.length;while(l--)if(s=rt.exec(t[l])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){p=b.event.special[d]||{},d=(r?p.delegateType:p.bindType)||d,f=c[d]||[],s=s[2]&&RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),u=o=f.length;while(o--)a=f[o],!i&&g!==a.origType||n&&n.guid!==a.guid||s&&!s.test(a.namespace)||r&&r!==a.selector&&("**"!==r||!a.selector)||(f.splice(o,1),a.selector&&f.delegateCount--,p.remove&&p.remove.call(e,a));u&&!f.length&&(p.teardown&&p.teardown.call(e,h,m.handle)!==!1||b.removeEvent(e,d,m.handle),delete c[d])}else for(d in c)b.event.remove(e,d+t[l],n,r,!0);b.isEmptyObject(c)&&(delete m.handle,b._removeData(e,"events"))}},trigger:function(n,r,i,a){var s,u,l,c,p,f,d,h=[i||o],g=y.call(n,"type")?n.type:n,m=y.call(n,"namespace")?n.namespace.split("."):[];if(l=f=i=i||o,3!==i.nodeType&&8!==i.nodeType&&!nt.test(g+b.event.triggered)&&(g.indexOf(".")>=0&&(m=g.split("."),g=m.shift(),m.sort()),u=0>g.indexOf(":")&&"on"+g,n=n[b.expando]?n:new b.Event(g,"object"==typeof n&&n),n.isTrigger=!0,n.namespace=m.join("."),n.namespace_re=n.namespace?RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,n.result=t,n.target||(n.target=i),r=null==r?[n]:b.makeArray(r,[n]),p=b.event.special[g]||{},a||!p.trigger||p.trigger.apply(i,r)!==!1)){if(!a&&!p.noBubble&&!b.isWindow(i)){for(c=p.delegateType||g,nt.test(c+g)||(l=l.parentNode);l;l=l.parentNode)h.push(l),f=l;f===(i.ownerDocument||o)&&h.push(f.defaultView||f.parentWindow||e)}d=0;while((l=h[d++])&&!n.isPropagationStopped())n.type=d>1?c:p.bindType||g,s=(b._data(l,"events")||{})[n.type]&&b._data(l,"handle"),s&&s.apply(l,r),s=u&&l[u],s&&b.acceptData(l)&&s.apply&&s.apply(l,r)===!1&&n.preventDefault();if(n.type=g,!(a||n.isDefaultPrevented()||p._default&&p._default.apply(i.ownerDocument,r)!==!1||"click"===g&&b.nodeName(i,"a")||!b.acceptData(i)||!u||!i[g]||b.isWindow(i))){f=i[u],f&&(i[u]=null),b.event.triggered=g;try{i[g]()}catch(v){}b.event.triggered=t,f&&(i[u]=f)}return n.result}},dispatch:function(e){e=b.event.fix(e);var n,r,i,o,a,s=[],u=h.call(arguments),l=(b._data(this,"events")||{})[e.type]||[],c=b.event.special[e.type]||{};if(u[0]=e,e.delegateTarget=this,!c.preDispatch||c.preDispatch.call(this,e)!==!1){s=b.event.handlers.call(this,e,l),n=0;while((o=s[n++])&&!e.isPropagationStopped()){e.currentTarget=o.elem,a=0;while((i=o.handlers[a++])&&!e.isImmediatePropagationStopped())(!e.namespace_re||e.namespace_re.test(i.namespace))&&(e.handleObj=i,e.data=i.data,r=((b.event.special[i.origType]||{}).handle||i.handler).apply(o.elem,u),r!==t&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,e),e.result}},handlers:function(e,n){var r,i,o,a,s=[],u=n.delegateCount,l=e.target;if(u&&l.nodeType&&(!e.button||"click"!==e.type))for(;l!=this;l=l.parentNode||this)if(1===l.nodeType&&(l.disabled!==!0||"click"!==e.type)){for(o=[],a=0;u>a;a++)i=n[a],r=i.selector+" ",o[r]===t&&(o[r]=i.needsContext?b(r,this).index(l)>=0:b.find(r,this,null,[l]).length),o[r]&&o.push(i);o.length&&s.push({elem:l,handlers:o})}return n.length>u&&s.push({elem:this,handlers:n.slice(u)}),s},fix:function(e){if(e[b.expando])return e;var t,n,r,i=e.type,a=e,s=this.fixHooks[i];s||(this.fixHooks[i]=s=tt.test(i)?this.mouseHooks:et.test(i)?this.keyHooks:{}),r=s.props?this.props.concat(s.props):this.props,e=new b.Event(a),t=r.length;while(t--)n=r[t],e[n]=a[n];return e.target||(e.target=a.srcElement||o),3===e.target.nodeType&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,a):e},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,i,a,s=n.button,u=n.fromElement;return null==e.pageX&&null!=n.clientX&&(i=e.target.ownerDocument||o,a=i.documentElement,r=i.body,e.pageX=n.clientX+(a&&a.scrollLeft||r&&r.scrollLeft||0)-(a&&a.clientLeft||r&&r.clientLeft||0),e.pageY=n.clientY+(a&&a.scrollTop||r&&r.scrollTop||0)-(a&&a.clientTop||r&&r.clientTop||0)),!e.relatedTarget&&u&&(e.relatedTarget=u===e.target?n.toElement:u),e.which||s===t||(e.which=1&s?1:2&s?3:4&s?2:0),e}},special:{load:{noBubble:!0},click:{trigger:function(){return b.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):t}},focus:{trigger:function(){if(this!==o.activeElement&&this.focus)try{return this.focus(),!1}catch(e){}},delegateType:"focusin"},blur:{trigger:function(){return this===o.activeElement&&this.blur?(this.blur(),!1):t},delegateType:"focusout"},beforeunload:{postDispatch:function(e){e.result!==t&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=b.extend(new b.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?b.event.trigger(i,null,t):b.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},b.removeEvent=o.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r="on"+t;e.detachEvent&&(typeof e[r]===i&&(e[r]=null),e.detachEvent(r,n))},b.Event=function(e,n){return this instanceof b.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?it:ot):this.type=e,n&&b.extend(this,n),this.timeStamp=e&&e.timeStamp||b.now(),this[b.expando]=!0,t):new b.Event(e,n)},b.Event.prototype={isDefaultPrevented:ot,isPropagationStopped:ot,isImmediatePropagationStopped:ot,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=it,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=it,e&&(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=it,this.stopPropagation()}},b.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){b.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;
return(!i||i!==r&&!b.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),b.support.submitBubbles||(b.event.special.submit={setup:function(){return b.nodeName(this,"form")?!1:(b.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=b.nodeName(n,"input")||b.nodeName(n,"button")?n.form:t;r&&!b._data(r,"submitBubbles")&&(b.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),b._data(r,"submitBubbles",!0))}),t)},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&b.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){return b.nodeName(this,"form")?!1:(b.event.remove(this,"._submit"),t)}}),b.support.changeBubbles||(b.event.special.change={setup:function(){return Z.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(b.event.add(this,"propertychange._change",function(e){"checked"===e.originalEvent.propertyName&&(this._just_changed=!0)}),b.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),b.event.simulate("change",this,e,!0)})),!1):(b.event.add(this,"beforeactivate._change",function(e){var t=e.target;Z.test(t.nodeName)&&!b._data(t,"changeBubbles")&&(b.event.add(t,"change._change",function(e){!this.parentNode||e.isSimulated||e.isTrigger||b.event.simulate("change",this.parentNode,e,!0)}),b._data(t,"changeBubbles",!0))}),t)},handle:function(e){var n=e.target;return this!==n||e.isSimulated||e.isTrigger||"radio"!==n.type&&"checkbox"!==n.type?e.handleObj.handler.apply(this,arguments):t},teardown:function(){return b.event.remove(this,"._change"),!Z.test(this.nodeName)}}),b.support.focusinBubbles||b.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){b.event.simulate(t,e.target,b.event.fix(e),!0)};b.event.special[t]={setup:function(){0===n++&&o.addEventListener(e,r,!0)},teardown:function(){0===--n&&o.removeEventListener(e,r,!0)}}}),b.fn.extend({on:function(e,n,r,i,o){var a,s;if("object"==typeof e){"string"!=typeof n&&(r=r||n,n=t);for(a in e)this.on(a,n,r,e[a],o);return this}if(null==r&&null==i?(i=n,r=n=t):null==i&&("string"==typeof n?(i=r,r=t):(i=r,r=n,n=t)),i===!1)i=ot;else if(!i)return this;return 1===o&&(s=i,i=function(e){return b().off(e),s.apply(this,arguments)},i.guid=s.guid||(s.guid=b.guid++)),this.each(function(){b.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,o;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,b(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==typeof e){for(o in e)this.off(o,n,e[o]);return this}return(n===!1||"function"==typeof n)&&(r=n,n=t),r===!1&&(r=ot),this.each(function(){b.event.remove(this,e,r,n)})},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},trigger:function(e,t){return this.each(function(){b.event.trigger(e,t,this)})},triggerHandler:function(e,n){var r=this[0];return r?b.event.trigger(e,n,r,!0):t}}),function(e,t){var n,r,i,o,a,s,u,l,c,p,f,d,h,g,m,y,v,x="sizzle"+-new Date,w=e.document,T={},N=0,C=0,k=it(),E=it(),S=it(),A=typeof t,j=1<<31,D=[],L=D.pop,H=D.push,q=D.slice,M=D.indexOf||function(e){var t=0,n=this.length;for(;n>t;t++)if(this[t]===e)return t;return-1},_="[\\x20\\t\\r\\n\\f]",F="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",O=F.replace("w","w#"),B="([*^$|!~]?=)",P="\\["+_+"*("+F+")"+_+"*(?:"+B+_+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+O+")|)|)"+_+"*\\]",R=":("+F+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+P.replace(3,8)+")*)|.*)\\)|)",W=RegExp("^"+_+"+|((?:^|[^\\\\])(?:\\\\.)*)"+_+"+$","g"),$=RegExp("^"+_+"*,"+_+"*"),I=RegExp("^"+_+"*([\\x20\\t\\r\\n\\f>+~])"+_+"*"),z=RegExp(R),X=RegExp("^"+O+"$"),U={ID:RegExp("^#("+F+")"),CLASS:RegExp("^\\.("+F+")"),NAME:RegExp("^\\[name=['\"]?("+F+")['\"]?\\]"),TAG:RegExp("^("+F.replace("w","w*")+")"),ATTR:RegExp("^"+P),PSEUDO:RegExp("^"+R),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+_+"*(even|odd|(([+-]|)(\\d*)n|)"+_+"*(?:([+-]|)"+_+"*(\\d+)|))"+_+"*\\)|)","i"),needsContext:RegExp("^"+_+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+_+"*((?:-\\d)?\\d*)"+_+"*\\)|)(?=[^-]|$)","i")},V=/[\x20\t\r\n\f]*[+~]/,Y=/^[^{]+\{\s*\[native code/,J=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,G=/^(?:input|select|textarea|button)$/i,Q=/^h\d$/i,K=/'|\\/g,Z=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,et=/\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,tt=function(e,t){var n="0x"+t-65536;return n!==n?t:0>n?String.fromCharCode(n+65536):String.fromCharCode(55296|n>>10,56320|1023&n)};try{q.call(w.documentElement.childNodes,0)[0].nodeType}catch(nt){q=function(e){var t,n=[];while(t=this[e++])n.push(t);return n}}function rt(e){return Y.test(e+"")}function it(){var e,t=[];return e=function(n,r){return t.push(n+=" ")>i.cacheLength&&delete e[t.shift()],e[n]=r}}function ot(e){return e[x]=!0,e}function at(e){var t=p.createElement("div");try{return e(t)}catch(n){return!1}finally{t=null}}function st(e,t,n,r){var i,o,a,s,u,l,f,g,m,v;if((t?t.ownerDocument||t:w)!==p&&c(t),t=t||p,n=n||[],!e||"string"!=typeof e)return n;if(1!==(s=t.nodeType)&&9!==s)return[];if(!d&&!r){if(i=J.exec(e))if(a=i[1]){if(9===s){if(o=t.getElementById(a),!o||!o.parentNode)return n;if(o.id===a)return n.push(o),n}else if(t.ownerDocument&&(o=t.ownerDocument.getElementById(a))&&y(t,o)&&o.id===a)return n.push(o),n}else{if(i[2])return H.apply(n,q.call(t.getElementsByTagName(e),0)),n;if((a=i[3])&&T.getByClassName&&t.getElementsByClassName)return H.apply(n,q.call(t.getElementsByClassName(a),0)),n}if(T.qsa&&!h.test(e)){if(f=!0,g=x,m=t,v=9===s&&e,1===s&&"object"!==t.nodeName.toLowerCase()){l=ft(e),(f=t.getAttribute("id"))?g=f.replace(K,"\\$&"):t.setAttribute("id",g),g="[id='"+g+"'] ",u=l.length;while(u--)l[u]=g+dt(l[u]);m=V.test(e)&&t.parentNode||t,v=l.join(",")}if(v)try{return H.apply(n,q.call(m.querySelectorAll(v),0)),n}catch(b){}finally{f||t.removeAttribute("id")}}}return wt(e.replace(W,"$1"),t,n,r)}a=st.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},c=st.setDocument=function(e){var n=e?e.ownerDocument||e:w;return n!==p&&9===n.nodeType&&n.documentElement?(p=n,f=n.documentElement,d=a(n),T.tagNameNoComments=at(function(e){return e.appendChild(n.createComment("")),!e.getElementsByTagName("*").length}),T.attributes=at(function(e){e.innerHTML="<select></select>";var t=typeof e.lastChild.getAttribute("multiple");return"boolean"!==t&&"string"!==t}),T.getByClassName=at(function(e){return e.innerHTML="<div class='hidden e'></div><div class='hidden'></div>",e.getElementsByClassName&&e.getElementsByClassName("e").length?(e.lastChild.className="e",2===e.getElementsByClassName("e").length):!1}),T.getByName=at(function(e){e.id=x+0,e.innerHTML="<a name='"+x+"'></a><div name='"+x+"'></div>",f.insertBefore(e,f.firstChild);var t=n.getElementsByName&&n.getElementsByName(x).length===2+n.getElementsByName(x+0).length;return T.getIdNotName=!n.getElementById(x),f.removeChild(e),t}),i.attrHandle=at(function(e){return e.innerHTML="<a href='#'></a>",e.firstChild&&typeof e.firstChild.getAttribute!==A&&"#"===e.firstChild.getAttribute("href")})?{}:{href:function(e){return e.getAttribute("href",2)},type:function(e){return e.getAttribute("type")}},T.getIdNotName?(i.find.ID=function(e,t){if(typeof t.getElementById!==A&&!d){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},i.filter.ID=function(e){var t=e.replace(et,tt);return function(e){return e.getAttribute("id")===t}}):(i.find.ID=function(e,n){if(typeof n.getElementById!==A&&!d){var r=n.getElementById(e);return r?r.id===e||typeof r.getAttributeNode!==A&&r.getAttributeNode("id").value===e?[r]:t:[]}},i.filter.ID=function(e){var t=e.replace(et,tt);return function(e){var n=typeof e.getAttributeNode!==A&&e.getAttributeNode("id");return n&&n.value===t}}),i.find.TAG=T.tagNameNoComments?function(e,n){return typeof n.getElementsByTagName!==A?n.getElementsByTagName(e):t}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},i.find.NAME=T.getByName&&function(e,n){return typeof n.getElementsByName!==A?n.getElementsByName(name):t},i.find.CLASS=T.getByClassName&&function(e,n){return typeof n.getElementsByClassName===A||d?t:n.getElementsByClassName(e)},g=[],h=[":focus"],(T.qsa=rt(n.querySelectorAll))&&(at(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||h.push("\\["+_+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),e.querySelectorAll(":checked").length||h.push(":checked")}),at(function(e){e.innerHTML="<input type='hidden' i=''/>",e.querySelectorAll("[i^='']").length&&h.push("[*^$]="+_+"*(?:\"\"|'')"),e.querySelectorAll(":enabled").length||h.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),h.push(",.*:")})),(T.matchesSelector=rt(m=f.matchesSelector||f.mozMatchesSelector||f.webkitMatchesSelector||f.oMatchesSelector||f.msMatchesSelector))&&at(function(e){T.disconnectedMatch=m.call(e,"div"),m.call(e,"[s!='']:x"),g.push("!=",R)}),h=RegExp(h.join("|")),g=RegExp(g.join("|")),y=rt(f.contains)||f.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},v=f.compareDocumentPosition?function(e,t){var r;return e===t?(u=!0,0):(r=t.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(t))?1&r||e.parentNode&&11===e.parentNode.nodeType?e===n||y(w,e)?-1:t===n||y(w,t)?1:0:4&r?-1:1:e.compareDocumentPosition?-1:1}:function(e,t){var r,i=0,o=e.parentNode,a=t.parentNode,s=[e],l=[t];if(e===t)return u=!0,0;if(!o||!a)return e===n?-1:t===n?1:o?-1:a?1:0;if(o===a)return ut(e,t);r=e;while(r=r.parentNode)s.unshift(r);r=t;while(r=r.parentNode)l.unshift(r);while(s[i]===l[i])i++;return i?ut(s[i],l[i]):s[i]===w?-1:l[i]===w?1:0},u=!1,[0,0].sort(v),T.detectDuplicates=u,p):p},st.matches=function(e,t){return st(e,null,null,t)},st.matchesSelector=function(e,t){if((e.ownerDocument||e)!==p&&c(e),t=t.replace(Z,"='$1']"),!(!T.matchesSelector||d||g&&g.test(t)||h.test(t)))try{var n=m.call(e,t);if(n||T.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(r){}return st(t,p,null,[e]).length>0},st.contains=function(e,t){return(e.ownerDocument||e)!==p&&c(e),y(e,t)},st.attr=function(e,t){var n;return(e.ownerDocument||e)!==p&&c(e),d||(t=t.toLowerCase()),(n=i.attrHandle[t])?n(e):d||T.attributes?e.getAttribute(t):((n=e.getAttributeNode(t))||e.getAttribute(t))&&e[t]===!0?t:n&&n.specified?n.value:null},st.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},st.uniqueSort=function(e){var t,n=[],r=1,i=0;if(u=!T.detectDuplicates,e.sort(v),u){for(;t=e[r];r++)t===e[r-1]&&(i=n.push(r));while(i--)e.splice(n[i],1)}return e};function ut(e,t){var n=t&&e,r=n&&(~t.sourceIndex||j)-(~e.sourceIndex||j);if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function lt(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function ct(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function pt(e){return ot(function(t){return t=+t,ot(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}o=st.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r];r++)n+=o(t);return n},i=st.selectors={cacheLength:50,createPseudo:ot,match:U,find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(et,tt),e[3]=(e[4]||e[5]||"").replace(et,tt),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||st.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&st.error(e[0]),e},PSEUDO:function(e){var t,n=!e[5]&&e[2];return U.CHILD.test(e[0])?null:(e[4]?e[2]=e[4]:n&&z.test(n)&&(t=ft(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){return"*"===e?function(){return!0}:(e=e.replace(et,tt).toLowerCase(),function(t){return t.nodeName&&t.nodeName.toLowerCase()===e})},CLASS:function(e){var t=k[e+" "];return t||(t=RegExp("(^|"+_+")"+e+"("+_+"|$)"))&&k(e,function(e){return t.test(e.className||typeof e.getAttribute!==A&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=st.attr(r,e);return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.slice(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,p,f,d,h,g=o!==a?"nextSibling":"previousSibling",m=t.parentNode,y=s&&t.nodeName.toLowerCase(),v=!u&&!s;if(m){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===y:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?m.firstChild:m.lastChild],a&&v){c=m[x]||(m[x]={}),l=c[e]||[],d=l[0]===N&&l[1],f=l[0]===N&&l[2],p=d&&m.childNodes[d];while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if(1===p.nodeType&&++f&&p===t){c[e]=[N,d,f];break}}else if(v&&(l=(t[x]||(t[x]={}))[e])&&l[0]===N)f=l[1];else while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===y:1===p.nodeType)&&++f&&(v&&((p[x]||(p[x]={}))[e]=[N,f]),p===t))break;return f-=i,f===r||0===f%r&&f/r>=0}}},PSEUDO:function(e,t){var n,r=i.pseudos[e]||i.setFilters[e.toLowerCase()]||st.error("unsupported pseudo: "+e);return r[x]?r(t):r.length>1?(n=[e,e,"",t],i.setFilters.hasOwnProperty(e.toLowerCase())?ot(function(e,n){var i,o=r(e,t),a=o.length;while(a--)i=M.call(e,o[a]),e[i]=!(n[i]=o[a])}):function(e){return r(e,0,n)}):r}},pseudos:{not:ot(function(e){var t=[],n=[],r=s(e.replace(W,"$1"));return r[x]?ot(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:ot(function(e){return function(t){return st(e,t).length>0}}),contains:ot(function(e){return function(t){return(t.textContent||t.innerText||o(t)).indexOf(e)>-1}}),lang:ot(function(e){return X.test(e||"")||st.error("unsupported lang: "+e),e=e.replace(et,tt).toLowerCase(),function(t){var n;do if(n=d?t.getAttribute("xml:lang")||t.getAttribute("lang"):t.lang)return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===f},focus:function(e){return e===p.activeElement&&(!p.hasFocus||p.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!i.pseudos.empty(e)},header:function(e){return Q.test(e.nodeName)},input:function(e){return G.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},first:pt(function(){return[0]}),last:pt(function(e,t){return[t-1]}),eq:pt(function(e,t,n){return[0>n?n+t:n]}),even:pt(function(e,t){var n=0;for(;t>n;n+=2)e.push(n);return e}),odd:pt(function(e,t){var n=1;for(;t>n;n+=2)e.push(n);return e}),lt:pt(function(e,t,n){var r=0>n?n+t:n;for(;--r>=0;)e.push(r);return e}),gt:pt(function(e,t,n){var r=0>n?n+t:n;for(;t>++r;)e.push(r);return e})}};for(n in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})i.pseudos[n]=lt(n);for(n in{submit:!0,reset:!0})i.pseudos[n]=ct(n);function ft(e,t){var n,r,o,a,s,u,l,c=E[e+" "];if(c)return t?0:c.slice(0);s=e,u=[],l=i.preFilter;while(s){(!n||(r=$.exec(s)))&&(r&&(s=s.slice(r[0].length)||s),u.push(o=[])),n=!1,(r=I.exec(s))&&(n=r.shift(),o.push({value:n,type:r[0].replace(W," ")}),s=s.slice(n.length));for(a in i.filter)!(r=U[a].exec(s))||l[a]&&!(r=l[a](r))||(n=r.shift(),o.push({value:n,type:a,matches:r}),s=s.slice(n.length));if(!n)break}return t?s.length:s?st.error(e):E(e,u).slice(0)}function dt(e){var t=0,n=e.length,r="";for(;n>t;t++)r+=e[t].value;return r}function ht(e,t,n){var i=t.dir,o=n&&"parentNode"===i,a=C++;return t.first?function(t,n,r){while(t=t[i])if(1===t.nodeType||o)return e(t,n,r)}:function(t,n,s){var u,l,c,p=N+" "+a;if(s){while(t=t[i])if((1===t.nodeType||o)&&e(t,n,s))return!0}else while(t=t[i])if(1===t.nodeType||o)if(c=t[x]||(t[x]={}),(l=c[i])&&l[0]===p){if((u=l[1])===!0||u===r)return u===!0}else if(l=c[i]=[p],l[1]=e(t,n,s)||r,l[1]===!0)return!0}}function gt(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function mt(e,t,n,r,i){var o,a=[],s=0,u=e.length,l=null!=t;for(;u>s;s++)(o=e[s])&&(!n||n(o,r,i))&&(a.push(o),l&&t.push(s));return a}function yt(e,t,n,r,i,o){return r&&!r[x]&&(r=yt(r)),i&&!i[x]&&(i=yt(i,o)),ot(function(o,a,s,u){var l,c,p,f=[],d=[],h=a.length,g=o||xt(t||"*",s.nodeType?[s]:s,[]),m=!e||!o&&t?g:mt(g,f,e,s,u),y=n?i||(o?e:h||r)?[]:a:m;if(n&&n(m,y,s,u),r){l=mt(y,d),r(l,[],s,u),c=l.length;while(c--)(p=l[c])&&(y[d[c]]=!(m[d[c]]=p))}if(o){if(i||e){if(i){l=[],c=y.length;while(c--)(p=y[c])&&l.push(m[c]=p);i(null,y=[],l,u)}c=y.length;while(c--)(p=y[c])&&(l=i?M.call(o,p):f[c])>-1&&(o[l]=!(a[l]=p))}}else y=mt(y===a?y.splice(h,y.length):y),i?i(null,a,y,u):H.apply(a,y)})}function vt(e){var t,n,r,o=e.length,a=i.relative[e[0].type],s=a||i.relative[" "],u=a?1:0,c=ht(function(e){return e===t},s,!0),p=ht(function(e){return M.call(t,e)>-1},s,!0),f=[function(e,n,r){return!a&&(r||n!==l)||((t=n).nodeType?c(e,n,r):p(e,n,r))}];for(;o>u;u++)if(n=i.relative[e[u].type])f=[ht(gt(f),n)];else{if(n=i.filter[e[u].type].apply(null,e[u].matches),n[x]){for(r=++u;o>r;r++)if(i.relative[e[r].type])break;return yt(u>1&&gt(f),u>1&&dt(e.slice(0,u-1)).replace(W,"$1"),n,r>u&&vt(e.slice(u,r)),o>r&&vt(e=e.slice(r)),o>r&&dt(e))}f.push(n)}return gt(f)}function bt(e,t){var n=0,o=t.length>0,a=e.length>0,s=function(s,u,c,f,d){var h,g,m,y=[],v=0,b="0",x=s&&[],w=null!=d,T=l,C=s||a&&i.find.TAG("*",d&&u.parentNode||u),k=N+=null==T?1:Math.random()||.1;for(w&&(l=u!==p&&u,r=n);null!=(h=C[b]);b++){if(a&&h){g=0;while(m=e[g++])if(m(h,u,c)){f.push(h);break}w&&(N=k,r=++n)}o&&((h=!m&&h)&&v--,s&&x.push(h))}if(v+=b,o&&b!==v){g=0;while(m=t[g++])m(x,y,u,c);if(s){if(v>0)while(b--)x[b]||y[b]||(y[b]=L.call(f));y=mt(y)}H.apply(f,y),w&&!s&&y.length>0&&v+t.length>1&&st.uniqueSort(f)}return w&&(N=k,l=T),x};return o?ot(s):s}s=st.compile=function(e,t){var n,r=[],i=[],o=S[e+" "];if(!o){t||(t=ft(e)),n=t.length;while(n--)o=vt(t[n]),o[x]?r.push(o):i.push(o);o=S(e,bt(i,r))}return o};function xt(e,t,n){var r=0,i=t.length;for(;i>r;r++)st(e,t[r],n);return n}function wt(e,t,n,r){var o,a,u,l,c,p=ft(e);if(!r&&1===p.length){if(a=p[0]=p[0].slice(0),a.length>2&&"ID"===(u=a[0]).type&&9===t.nodeType&&!d&&i.relative[a[1].type]){if(t=i.find.ID(u.matches[0].replace(et,tt),t)[0],!t)return n;e=e.slice(a.shift().value.length)}o=U.needsContext.test(e)?0:a.length;while(o--){if(u=a[o],i.relative[l=u.type])break;if((c=i.find[l])&&(r=c(u.matches[0].replace(et,tt),V.test(a[0].type)&&t.parentNode||t))){if(a.splice(o,1),e=r.length&&dt(a),!e)return H.apply(n,q.call(r,0)),n;break}}}return s(e,p)(r,t,d,n,V.test(e)),n}i.pseudos.nth=i.pseudos.eq;function Tt(){}i.filters=Tt.prototype=i.pseudos,i.setFilters=new Tt,c(),st.attr=b.attr,b.find=st,b.expr=st.selectors,b.expr[":"]=b.expr.pseudos,b.unique=st.uniqueSort,b.text=st.getText,b.isXMLDoc=st.isXML,b.contains=st.contains}(e);var at=/Until$/,st=/^(?:parents|prev(?:Until|All))/,ut=/^.[^:#\[\.,]*$/,lt=b.expr.match.needsContext,ct={children:!0,contents:!0,next:!0,prev:!0};b.fn.extend({find:function(e){var t,n,r,i=this.length;if("string"!=typeof e)return r=this,this.pushStack(b(e).filter(function(){for(t=0;i>t;t++)if(b.contains(r[t],this))return!0}));for(n=[],t=0;i>t;t++)b.find(e,this[t],n);return n=this.pushStack(i>1?b.unique(n):n),n.selector=(this.selector?this.selector+" ":"")+e,n},has:function(e){var t,n=b(e,this),r=n.length;return this.filter(function(){for(t=0;r>t;t++)if(b.contains(this,n[t]))return!0})},not:function(e){return this.pushStack(ft(this,e,!1))},filter:function(e){return this.pushStack(ft(this,e,!0))},is:function(e){return!!e&&("string"==typeof e?lt.test(e)?b(e,this.context).index(this[0])>=0:b.filter(e,this).length>0:this.filter(e).length>0)},closest:function(e,t){var n,r=0,i=this.length,o=[],a=lt.test(e)||"string"!=typeof e?b(e,t||this.context):0;for(;i>r;r++){n=this[r];while(n&&n.ownerDocument&&n!==t&&11!==n.nodeType){if(a?a.index(n)>-1:b.find.matchesSelector(n,e)){o.push(n);break}n=n.parentNode}}return this.pushStack(o.length>1?b.unique(o):o)},index:function(e){return e?"string"==typeof e?b.inArray(this[0],b(e)):b.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n="string"==typeof e?b(e,t):b.makeArray(e&&e.nodeType?[e]:e),r=b.merge(this.get(),n);return this.pushStack(b.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),b.fn.andSelf=b.fn.addBack;function pt(e,t){do e=e[t];while(e&&1!==e.nodeType);return e}b.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return b.dir(e,"parentNode")},parentsUntil:function(e,t,n){return b.dir(e,"parentNode",n)},next:function(e){return pt(e,"nextSibling")},prev:function(e){return pt(e,"previousSibling")},nextAll:function(e){return b.dir(e,"nextSibling")},prevAll:function(e){return b.dir(e,"previousSibling")},nextUntil:function(e,t,n){return b.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return b.dir(e,"previousSibling",n)},siblings:function(e){return b.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return b.sibling(e.firstChild)},contents:function(e){return b.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:b.merge([],e.childNodes)}},function(e,t){b.fn[e]=function(n,r){var i=b.map(this,t,n);return at.test(e)||(r=n),r&&"string"==typeof r&&(i=b.filter(r,i)),i=this.length>1&&!ct[e]?b.unique(i):i,this.length>1&&st.test(e)&&(i=i.reverse()),this.pushStack(i)}}),b.extend({filter:function(e,t,n){return n&&(e=":not("+e+")"),1===t.length?b.find.matchesSelector(t[0],e)?[t[0]]:[]:b.find.matches(e,t)},dir:function(e,n,r){var i=[],o=e[n];while(o&&9!==o.nodeType&&(r===t||1!==o.nodeType||!b(o).is(r)))1===o.nodeType&&i.push(o),o=o[n];return i},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});function ft(e,t,n){if(t=t||0,b.isFunction(t))return b.grep(e,function(e,r){var i=!!t.call(e,r,e);return i===n});if(t.nodeType)return b.grep(e,function(e){return e===t===n});if("string"==typeof t){var r=b.grep(e,function(e){return 1===e.nodeType});if(ut.test(t))return b.filter(t,r,!n);t=b.filter(t,r)}return b.grep(e,function(e){return b.inArray(e,t)>=0===n})}function dt(e){var t=ht.split("|"),n=e.createDocumentFragment();if(n.createElement)while(t.length)n.createElement(t.pop());return n}var ht="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",gt=/ jQuery\d+="(?:null|\d+)"/g,mt=RegExp("<(?:"+ht+")[\\s/>]","i"),yt=/^\s+/,vt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bt=/<([\w:]+)/,xt=/<tbody/i,wt=/<|&#?\w+;/,Tt=/<(?:script|style|link)/i,Nt=/^(?:checkbox|radio)$/i,Ct=/checked\s*(?:[^=]|=\s*.checked.)/i,kt=/^$|\/(?:java|ecma)script/i,Et=/^true\/(.*)/,St=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,At={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:b.support.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},jt=dt(o),Dt=jt.appendChild(o.createElement("div"));At.optgroup=At.option,At.tbody=At.tfoot=At.colgroup=At.caption=At.thead,At.th=At.td,b.fn.extend({text:function(e){return b.access(this,function(e){return e===t?b.text(this):this.empty().append((this[0]&&this[0].ownerDocument||o).createTextNode(e))},null,e,arguments.length)},wrapAll:function(e){if(b.isFunction(e))return this.each(function(t){b(this).wrapAll(e.call(this,t))});if(this[0]){var t=b(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstChild&&1===e.firstChild.nodeType)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return b.isFunction(e)?this.each(function(t){b(this).wrapInner(e.call(this,t))}):this.each(function(){var t=b(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=b.isFunction(e);return this.each(function(n){b(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){b.nodeName(this,"body")||b(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(e){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&this.appendChild(e)})},prepend:function(){return this.domManip(arguments,!0,function(e){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&this.insertBefore(e,this.firstChild)})},before:function(){return this.domManip(arguments,!1,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,!1,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){var n,r=0;for(;null!=(n=this[r]);r++)(!e||b.filter(e,[n]).length>0)&&(t||1!==n.nodeType||b.cleanData(Ot(n)),n.parentNode&&(t&&b.contains(n.ownerDocument,n)&&Mt(Ot(n,"script")),n.parentNode.removeChild(n)));return this},empty:function(){var e,t=0;for(;null!=(e=this[t]);t++){1===e.nodeType&&b.cleanData(Ot(e,!1));while(e.firstChild)e.removeChild(e.firstChild);e.options&&b.nodeName(e,"select")&&(e.options.length=0)}return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return b.clone(this,e,t)})},html:function(e){return b.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t)return 1===n.nodeType?n.innerHTML.replace(gt,""):t;if(!("string"!=typeof e||Tt.test(e)||!b.support.htmlSerialize&&mt.test(e)||!b.support.leadingWhitespace&&yt.test(e)||At[(bt.exec(e)||["",""])[1].toLowerCase()])){e=e.replace(vt,"<$1></$2>");try{for(;i>r;r++)n=this[r]||{},1===n.nodeType&&(b.cleanData(Ot(n,!1)),n.innerHTML=e);n=0}catch(o){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(e){var t=b.isFunction(e);return t||"string"==typeof e||(e=b(e).not(this).detach()),this.domManip([e],!0,function(e){var t=this.nextSibling,n=this.parentNode;n&&(b(this).remove(),n.insertBefore(e,t))})},detach:function(e){return this.remove(e,!0)},domManip:function(e,n,r){e=f.apply([],e);var i,o,a,s,u,l,c=0,p=this.length,d=this,h=p-1,g=e[0],m=b.isFunction(g);if(m||!(1>=p||"string"!=typeof g||b.support.checkClone)&&Ct.test(g))return this.each(function(i){var o=d.eq(i);m&&(e[0]=g.call(this,i,n?o.html():t)),o.domManip(e,n,r)});if(p&&(l=b.buildFragment(e,this[0].ownerDocument,!1,this),i=l.firstChild,1===l.childNodes.length&&(l=i),i)){for(n=n&&b.nodeName(i,"tr"),s=b.map(Ot(l,"script"),Ht),a=s.length;p>c;c++)o=l,c!==h&&(o=b.clone(o,!0,!0),a&&b.merge(s,Ot(o,"script"))),r.call(n&&b.nodeName(this[c],"table")?Lt(this[c],"tbody"):this[c],o,c);if(a)for(u=s[s.length-1].ownerDocument,b.map(s,qt),c=0;a>c;c++)o=s[c],kt.test(o.type||"")&&!b._data(o,"globalEval")&&b.contains(u,o)&&(o.src?b.ajax({url:o.src,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0}):b.globalEval((o.text||o.textContent||o.innerHTML||"").replace(St,"")));l=i=null}return this}});function Lt(e,t){return e.getElementsByTagName(t)[0]||e.appendChild(e.ownerDocument.createElement(t))}function Ht(e){var t=e.getAttributeNode("type");return e.type=(t&&t.specified)+"/"+e.type,e}function qt(e){var t=Et.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function Mt(e,t){var n,r=0;for(;null!=(n=e[r]);r++)b._data(n,"globalEval",!t||b._data(t[r],"globalEval"))}function _t(e,t){if(1===t.nodeType&&b.hasData(e)){var n,r,i,o=b._data(e),a=b._data(t,o),s=o.events;if(s){delete a.handle,a.events={};for(n in s)for(r=0,i=s[n].length;i>r;r++)b.event.add(t,n,s[n][r])}a.data&&(a.data=b.extend({},a.data))}}function Ft(e,t){var n,r,i;if(1===t.nodeType){if(n=t.nodeName.toLowerCase(),!b.support.noCloneEvent&&t[b.expando]){i=b._data(t);for(r in i.events)b.removeEvent(t,r,i.handle);t.removeAttribute(b.expando)}"script"===n&&t.text!==e.text?(Ht(t).text=e.text,qt(t)):"object"===n?(t.parentNode&&(t.outerHTML=e.outerHTML),b.support.html5Clone&&e.innerHTML&&!b.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):"input"===n&&Nt.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):"option"===n?t.defaultSelected=t.selected=e.defaultSelected:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}}b.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){b.fn[e]=function(e){var n,r=0,i=[],o=b(e),a=o.length-1;for(;a>=r;r++)n=r===a?this:this.clone(!0),b(o[r])[t](n),d.apply(i,n.get());return this.pushStack(i)}});function Ot(e,n){var r,o,a=0,s=typeof e.getElementsByTagName!==i?e.getElementsByTagName(n||"*"):typeof e.querySelectorAll!==i?e.querySelectorAll(n||"*"):t;if(!s)for(s=[],r=e.childNodes||e;null!=(o=r[a]);a++)!n||b.nodeName(o,n)?s.push(o):b.merge(s,Ot(o,n));return n===t||n&&b.nodeName(e,n)?b.merge([e],s):s}function Bt(e){Nt.test(e.type)&&(e.defaultChecked=e.checked)}b.extend({clone:function(e,t,n){var r,i,o,a,s,u=b.contains(e.ownerDocument,e);if(b.support.html5Clone||b.isXMLDoc(e)||!mt.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(Dt.innerHTML=e.outerHTML,Dt.removeChild(o=Dt.firstChild)),!(b.support.noCloneEvent&&b.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||b.isXMLDoc(e)))for(r=Ot(o),s=Ot(e),a=0;null!=(i=s[a]);++a)r[a]&&Ft(i,r[a]);if(t)if(n)for(s=s||Ot(e),r=r||Ot(o),a=0;null!=(i=s[a]);a++)_t(i,r[a]);else _t(e,o);return r=Ot(o,"script"),r.length>0&&Mt(r,!u&&Ot(e,"script")),r=s=i=null,o},buildFragment:function(e,t,n,r){var i,o,a,s,u,l,c,p=e.length,f=dt(t),d=[],h=0;for(;p>h;h++)if(o=e[h],o||0===o)if("object"===b.type(o))b.merge(d,o.nodeType?[o]:o);else if(wt.test(o)){s=s||f.appendChild(t.createElement("div")),u=(bt.exec(o)||["",""])[1].toLowerCase(),c=At[u]||At._default,s.innerHTML=c[1]+o.replace(vt,"<$1></$2>")+c[2],i=c[0];while(i--)s=s.lastChild;if(!b.support.leadingWhitespace&&yt.test(o)&&d.push(t.createTextNode(yt.exec(o)[0])),!b.support.tbody){o="table"!==u||xt.test(o)?"<table>"!==c[1]||xt.test(o)?0:s:s.firstChild,i=o&&o.childNodes.length;while(i--)b.nodeName(l=o.childNodes[i],"tbody")&&!l.childNodes.length&&o.removeChild(l)
}b.merge(d,s.childNodes),s.textContent="";while(s.firstChild)s.removeChild(s.firstChild);s=f.lastChild}else d.push(t.createTextNode(o));s&&f.removeChild(s),b.support.appendChecked||b.grep(Ot(d,"input"),Bt),h=0;while(o=d[h++])if((!r||-1===b.inArray(o,r))&&(a=b.contains(o.ownerDocument,o),s=Ot(f.appendChild(o),"script"),a&&Mt(s),n)){i=0;while(o=s[i++])kt.test(o.type||"")&&n.push(o)}return s=null,f},cleanData:function(e,t){var n,r,o,a,s=0,u=b.expando,l=b.cache,p=b.support.deleteExpando,f=b.event.special;for(;null!=(n=e[s]);s++)if((t||b.acceptData(n))&&(o=n[u],a=o&&l[o])){if(a.events)for(r in a.events)f[r]?b.event.remove(n,r):b.removeEvent(n,r,a.handle);l[o]&&(delete l[o],p?delete n[u]:typeof n.removeAttribute!==i?n.removeAttribute(u):n[u]=null,c.push(o))}}});var Pt,Rt,Wt,$t=/alpha\([^)]*\)/i,It=/opacity\s*=\s*([^)]*)/,zt=/^(top|right|bottom|left)$/,Xt=/^(none|table(?!-c[ea]).+)/,Ut=/^margin/,Vt=RegExp("^("+x+")(.*)$","i"),Yt=RegExp("^("+x+")(?!px)[a-z%]+$","i"),Jt=RegExp("^([+-])=("+x+")","i"),Gt={BODY:"block"},Qt={position:"absolute",visibility:"hidden",display:"block"},Kt={letterSpacing:0,fontWeight:400},Zt=["Top","Right","Bottom","Left"],en=["Webkit","O","Moz","ms"];function tn(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=en.length;while(i--)if(t=en[i]+n,t in e)return t;return r}function nn(e,t){return e=t||e,"none"===b.css(e,"display")||!b.contains(e.ownerDocument,e)}function rn(e,t){var n,r,i,o=[],a=0,s=e.length;for(;s>a;a++)r=e[a],r.style&&(o[a]=b._data(r,"olddisplay"),n=r.style.display,t?(o[a]||"none"!==n||(r.style.display=""),""===r.style.display&&nn(r)&&(o[a]=b._data(r,"olddisplay",un(r.nodeName)))):o[a]||(i=nn(r),(n&&"none"!==n||!i)&&b._data(r,"olddisplay",i?n:b.css(r,"display"))));for(a=0;s>a;a++)r=e[a],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[a]||"":"none"));return e}b.fn.extend({css:function(e,n){return b.access(this,function(e,n,r){var i,o,a={},s=0;if(b.isArray(n)){for(o=Rt(e),i=n.length;i>s;s++)a[n[s]]=b.css(e,n[s],!1,o);return a}return r!==t?b.style(e,n,r):b.css(e,n)},e,n,arguments.length>1)},show:function(){return rn(this,!0)},hide:function(){return rn(this)},toggle:function(e){var t="boolean"==typeof e;return this.each(function(){(t?e:nn(this))?b(this).show():b(this).hide()})}}),b.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Wt(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":b.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var o,a,s,u=b.camelCase(n),l=e.style;if(n=b.cssProps[u]||(b.cssProps[u]=tn(l,u)),s=b.cssHooks[n]||b.cssHooks[u],r===t)return s&&"get"in s&&(o=s.get(e,!1,i))!==t?o:l[n];if(a=typeof r,"string"===a&&(o=Jt.exec(r))&&(r=(o[1]+1)*o[2]+parseFloat(b.css(e,n)),a="number"),!(null==r||"number"===a&&isNaN(r)||("number"!==a||b.cssNumber[u]||(r+="px"),b.support.clearCloneStyle||""!==r||0!==n.indexOf("background")||(l[n]="inherit"),s&&"set"in s&&(r=s.set(e,r,i))===t)))try{l[n]=r}catch(c){}}},css:function(e,n,r,i){var o,a,s,u=b.camelCase(n);return n=b.cssProps[u]||(b.cssProps[u]=tn(e.style,u)),s=b.cssHooks[n]||b.cssHooks[u],s&&"get"in s&&(a=s.get(e,!0,r)),a===t&&(a=Wt(e,n,i)),"normal"===a&&n in Kt&&(a=Kt[n]),""===r||r?(o=parseFloat(a),r===!0||b.isNumeric(o)?o||0:a):a},swap:function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i}}),e.getComputedStyle?(Rt=function(t){return e.getComputedStyle(t,null)},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),u=s?s.getPropertyValue(n)||s[n]:t,l=e.style;return s&&(""!==u||b.contains(e.ownerDocument,e)||(u=b.style(e,n)),Yt.test(u)&&Ut.test(n)&&(i=l.width,o=l.minWidth,a=l.maxWidth,l.minWidth=l.maxWidth=l.width=u,u=s.width,l.width=i,l.minWidth=o,l.maxWidth=a)),u}):o.documentElement.currentStyle&&(Rt=function(e){return e.currentStyle},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),u=s?s[n]:t,l=e.style;return null==u&&l&&l[n]&&(u=l[n]),Yt.test(u)&&!zt.test(n)&&(i=l.left,o=e.runtimeStyle,a=o&&o.left,a&&(o.left=e.currentStyle.left),l.left="fontSize"===n?"1em":u,u=l.pixelLeft+"px",l.left=i,a&&(o.left=a)),""===u?"auto":u});function on(e,t,n){var r=Vt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function an(e,t,n,r,i){var o=n===(r?"border":"content")?4:"width"===t?1:0,a=0;for(;4>o;o+=2)"margin"===n&&(a+=b.css(e,n+Zt[o],!0,i)),r?("content"===n&&(a-=b.css(e,"padding"+Zt[o],!0,i)),"margin"!==n&&(a-=b.css(e,"border"+Zt[o]+"Width",!0,i))):(a+=b.css(e,"padding"+Zt[o],!0,i),"padding"!==n&&(a+=b.css(e,"border"+Zt[o]+"Width",!0,i)));return a}function sn(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=Rt(e),a=b.support.boxSizing&&"border-box"===b.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=Wt(e,t,o),(0>i||null==i)&&(i=e.style[t]),Yt.test(i))return i;r=a&&(b.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+an(e,t,n||(a?"border":"content"),r,o)+"px"}function un(e){var t=o,n=Gt[e];return n||(n=ln(e,t),"none"!==n&&n||(Pt=(Pt||b("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(Pt[0].contentWindow||Pt[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=ln(e,t),Pt.detach()),Gt[e]=n),n}function ln(e,t){var n=b(t.createElement(e)).appendTo(t.body),r=b.css(n[0],"display");return n.remove(),r}b.each(["height","width"],function(e,n){b.cssHooks[n]={get:function(e,r,i){return r?0===e.offsetWidth&&Xt.test(b.css(e,"display"))?b.swap(e,Qt,function(){return sn(e,n,i)}):sn(e,n,i):t},set:function(e,t,r){var i=r&&Rt(e);return on(e,t,r?an(e,n,r,b.support.boxSizing&&"border-box"===b.css(e,"boxSizing",!1,i),i):0)}}}),b.support.opacity||(b.cssHooks.opacity={get:function(e,t){return It.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=b.isNumeric(t)?"alpha(opacity="+100*t+")":"",o=r&&r.filter||n.filter||"";n.zoom=1,(t>=1||""===t)&&""===b.trim(o.replace($t,""))&&n.removeAttribute&&(n.removeAttribute("filter"),""===t||r&&!r.filter)||(n.filter=$t.test(o)?o.replace($t,i):o+" "+i)}}),b(function(){b.support.reliableMarginRight||(b.cssHooks.marginRight={get:function(e,n){return n?b.swap(e,{display:"inline-block"},Wt,[e,"marginRight"]):t}}),!b.support.pixelPosition&&b.fn.position&&b.each(["top","left"],function(e,n){b.cssHooks[n]={get:function(e,r){return r?(r=Wt(e,n),Yt.test(r)?b(e).position()[n]+"px":r):t}}})}),b.expr&&b.expr.filters&&(b.expr.filters.hidden=function(e){return 0>=e.offsetWidth&&0>=e.offsetHeight||!b.support.reliableHiddenOffsets&&"none"===(e.style&&e.style.display||b.css(e,"display"))},b.expr.filters.visible=function(e){return!b.expr.filters.hidden(e)}),b.each({margin:"",padding:"",border:"Width"},function(e,t){b.cssHooks[e+t]={expand:function(n){var r=0,i={},o="string"==typeof n?n.split(" "):[n];for(;4>r;r++)i[e+Zt[r]+t]=o[r]||o[r-2]||o[0];return i}},Ut.test(e)||(b.cssHooks[e+t].set=on)});var cn=/%20/g,pn=/\[\]$/,fn=/\r?\n/g,dn=/^(?:submit|button|image|reset|file)$/i,hn=/^(?:input|select|textarea|keygen)/i;b.fn.extend({serialize:function(){return b.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=b.prop(this,"elements");return e?b.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!b(this).is(":disabled")&&hn.test(this.nodeName)&&!dn.test(e)&&(this.checked||!Nt.test(e))}).map(function(e,t){var n=b(this).val();return null==n?null:b.isArray(n)?b.map(n,function(e){return{name:t.name,value:e.replace(fn,"\r\n")}}):{name:t.name,value:n.replace(fn,"\r\n")}}).get()}}),b.param=function(e,n){var r,i=[],o=function(e,t){t=b.isFunction(t)?t():null==t?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(n===t&&(n=b.ajaxSettings&&b.ajaxSettings.traditional),b.isArray(e)||e.jquery&&!b.isPlainObject(e))b.each(e,function(){o(this.name,this.value)});else for(r in e)gn(r,e[r],n,o);return i.join("&").replace(cn,"+")};function gn(e,t,n,r){var i;if(b.isArray(t))b.each(t,function(t,i){n||pn.test(e)?r(e,i):gn(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==b.type(t))r(e,t);else for(i in t)gn(e+"["+i+"]",t[i],n,r)}b.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){b.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),b.fn.hover=function(e,t){return this.mouseenter(e).mouseleave(t||e)};var mn,yn,vn=b.now(),bn=/\?/,xn=/#.*$/,wn=/([?&])_=[^&]*/,Tn=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Nn=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Cn=/^(?:GET|HEAD)$/,kn=/^\/\//,En=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,Sn=b.fn.load,An={},jn={},Dn="*/".concat("*");try{yn=a.href}catch(Ln){yn=o.createElement("a"),yn.href="",yn=yn.href}mn=En.exec(yn.toLowerCase())||[];function Hn(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(w)||[];if(b.isFunction(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function qn(e,n,r,i){var o={},a=e===jn;function s(u){var l;return o[u]=!0,b.each(e[u]||[],function(e,u){var c=u(n,r,i);return"string"!=typeof c||a||o[c]?a?!(l=c):t:(n.dataTypes.unshift(c),s(c),!1)}),l}return s(n.dataTypes[0])||!o["*"]&&s("*")}function Mn(e,n){var r,i,o=b.ajaxSettings.flatOptions||{};for(i in n)n[i]!==t&&((o[i]?e:r||(r={}))[i]=n[i]);return r&&b.extend(!0,e,r),e}b.fn.load=function(e,n,r){if("string"!=typeof e&&Sn)return Sn.apply(this,arguments);var i,o,a,s=this,u=e.indexOf(" ");return u>=0&&(i=e.slice(u,e.length),e=e.slice(0,u)),b.isFunction(n)?(r=n,n=t):n&&"object"==typeof n&&(a="POST"),s.length>0&&b.ajax({url:e,type:a,dataType:"html",data:n}).done(function(e){o=arguments,s.html(i?b("<div>").append(b.parseHTML(e)).find(i):e)}).complete(r&&function(e,t){s.each(r,o||[e.responseText,t,e])}),this},b.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){b.fn[t]=function(e){return this.on(t,e)}}),b.each(["get","post"],function(e,n){b[n]=function(e,r,i,o){return b.isFunction(r)&&(o=o||i,i=r,r=t),b.ajax({url:e,type:n,dataType:o,data:r,success:i})}}),b.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:yn,type:"GET",isLocal:Nn.test(mn[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Dn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":e.String,"text html":!0,"text json":b.parseJSON,"text xml":b.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Mn(Mn(e,b.ajaxSettings),t):Mn(b.ajaxSettings,e)},ajaxPrefilter:Hn(An),ajaxTransport:Hn(jn),ajax:function(e,n){"object"==typeof e&&(n=e,e=t),n=n||{};var r,i,o,a,s,u,l,c,p=b.ajaxSetup({},n),f=p.context||p,d=p.context&&(f.nodeType||f.jquery)?b(f):b.event,h=b.Deferred(),g=b.Callbacks("once memory"),m=p.statusCode||{},y={},v={},x=0,T="canceled",N={readyState:0,getResponseHeader:function(e){var t;if(2===x){if(!c){c={};while(t=Tn.exec(a))c[t[1].toLowerCase()]=t[2]}t=c[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===x?a:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return x||(e=v[n]=v[n]||e,y[e]=t),this},overrideMimeType:function(e){return x||(p.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>x)for(t in e)m[t]=[m[t],e[t]];else N.always(e[N.status]);return this},abort:function(e){var t=e||T;return l&&l.abort(t),k(0,t),this}};if(h.promise(N).complete=g.add,N.success=N.done,N.error=N.fail,p.url=((e||p.url||yn)+"").replace(xn,"").replace(kn,mn[1]+"//"),p.type=n.method||n.type||p.method||p.type,p.dataTypes=b.trim(p.dataType||"*").toLowerCase().match(w)||[""],null==p.crossDomain&&(r=En.exec(p.url.toLowerCase()),p.crossDomain=!(!r||r[1]===mn[1]&&r[2]===mn[2]&&(r[3]||("http:"===r[1]?80:443))==(mn[3]||("http:"===mn[1]?80:443)))),p.data&&p.processData&&"string"!=typeof p.data&&(p.data=b.param(p.data,p.traditional)),qn(An,p,n,N),2===x)return N;u=p.global,u&&0===b.active++&&b.event.trigger("ajaxStart"),p.type=p.type.toUpperCase(),p.hasContent=!Cn.test(p.type),o=p.url,p.hasContent||(p.data&&(o=p.url+=(bn.test(o)?"&":"?")+p.data,delete p.data),p.cache===!1&&(p.url=wn.test(o)?o.replace(wn,"$1_="+vn++):o+(bn.test(o)?"&":"?")+"_="+vn++)),p.ifModified&&(b.lastModified[o]&&N.setRequestHeader("If-Modified-Since",b.lastModified[o]),b.etag[o]&&N.setRequestHeader("If-None-Match",b.etag[o])),(p.data&&p.hasContent&&p.contentType!==!1||n.contentType)&&N.setRequestHeader("Content-Type",p.contentType),N.setRequestHeader("Accept",p.dataTypes[0]&&p.accepts[p.dataTypes[0]]?p.accepts[p.dataTypes[0]]+("*"!==p.dataTypes[0]?", "+Dn+"; q=0.01":""):p.accepts["*"]);for(i in p.headers)N.setRequestHeader(i,p.headers[i]);if(p.beforeSend&&(p.beforeSend.call(f,N,p)===!1||2===x))return N.abort();T="abort";for(i in{success:1,error:1,complete:1})N[i](p[i]);if(l=qn(jn,p,n,N)){N.readyState=1,u&&d.trigger("ajaxSend",[N,p]),p.async&&p.timeout>0&&(s=setTimeout(function(){N.abort("timeout")},p.timeout));try{x=1,l.send(y,k)}catch(C){if(!(2>x))throw C;k(-1,C)}}else k(-1,"No Transport");function k(e,n,r,i){var c,y,v,w,T,C=n;2!==x&&(x=2,s&&clearTimeout(s),l=t,a=i||"",N.readyState=e>0?4:0,r&&(w=_n(p,N,r)),e>=200&&300>e||304===e?(p.ifModified&&(T=N.getResponseHeader("Last-Modified"),T&&(b.lastModified[o]=T),T=N.getResponseHeader("etag"),T&&(b.etag[o]=T)),204===e?(c=!0,C="nocontent"):304===e?(c=!0,C="notmodified"):(c=Fn(p,w),C=c.state,y=c.data,v=c.error,c=!v)):(v=C,(e||!C)&&(C="error",0>e&&(e=0))),N.status=e,N.statusText=(n||C)+"",c?h.resolveWith(f,[y,C,N]):h.rejectWith(f,[N,C,v]),N.statusCode(m),m=t,u&&d.trigger(c?"ajaxSuccess":"ajaxError",[N,p,c?y:v]),g.fireWith(f,[N,C]),u&&(d.trigger("ajaxComplete",[N,p]),--b.active||b.event.trigger("ajaxStop")))}return N},getScript:function(e,n){return b.get(e,t,n,"script")},getJSON:function(e,t,n){return b.get(e,t,n,"json")}});function _n(e,n,r){var i,o,a,s,u=e.contents,l=e.dataTypes,c=e.responseFields;for(s in c)s in r&&(n[c[s]]=r[s]);while("*"===l[0])l.shift(),o===t&&(o=e.mimeType||n.getResponseHeader("Content-Type"));if(o)for(s in u)if(u[s]&&u[s].test(o)){l.unshift(s);break}if(l[0]in r)a=l[0];else{for(s in r){if(!l[0]||e.converters[s+" "+l[0]]){a=s;break}i||(i=s)}a=a||i}return a?(a!==l[0]&&l.unshift(a),r[a]):t}function Fn(e,t){var n,r,i,o,a={},s=0,u=e.dataTypes.slice(),l=u[0];if(e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u[1])for(i in e.converters)a[i.toLowerCase()]=e.converters[i];for(;r=u[++s];)if("*"!==r){if("*"!==l&&l!==r){if(i=a[l+" "+r]||a["* "+r],!i)for(n in a)if(o=n.split(" "),o[1]===r&&(i=a[l+" "+o[0]]||a["* "+o[0]])){i===!0?i=a[n]:a[n]!==!0&&(r=o[0],u.splice(s--,0,r));break}if(i!==!0)if(i&&e["throws"])t=i(t);else try{t=i(t)}catch(c){return{state:"parsererror",error:i?c:"No conversion from "+l+" to "+r}}}l=r}return{state:"success",data:t}}b.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return b.globalEval(e),e}}}),b.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),b.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=o.head||b("head")[0]||o.documentElement;return{send:function(t,i){n=o.createElement("script"),n.async=!0,e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,t){(t||!n.readyState||/loaded|complete/.test(n.readyState))&&(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),n=null,t||i(200,"success"))},r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(t,!0)}}}});var On=[],Bn=/(=)\?(?=&|$)|\?\?/;b.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=On.pop()||b.expando+"_"+vn++;return this[e]=!0,e}}),b.ajaxPrefilter("json jsonp",function(n,r,i){var o,a,s,u=n.jsonp!==!1&&(Bn.test(n.url)?"url":"string"==typeof n.data&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Bn.test(n.data)&&"data");return u||"jsonp"===n.dataTypes[0]?(o=n.jsonpCallback=b.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,u?n[u]=n[u].replace(Bn,"$1"+o):n.jsonp!==!1&&(n.url+=(bn.test(n.url)?"&":"?")+n.jsonp+"="+o),n.converters["script json"]=function(){return s||b.error(o+" was not called"),s[0]},n.dataTypes[0]="json",a=e[o],e[o]=function(){s=arguments},i.always(function(){e[o]=a,n[o]&&(n.jsonpCallback=r.jsonpCallback,On.push(o)),s&&b.isFunction(a)&&a(s[0]),s=a=t}),"script"):t});var Pn,Rn,Wn=0,$n=e.ActiveXObject&&function(){var e;for(e in Pn)Pn[e](t,!0)};function In(){try{return new e.XMLHttpRequest}catch(t){}}function zn(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}b.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&In()||zn()}:In,Rn=b.ajaxSettings.xhr(),b.support.cors=!!Rn&&"withCredentials"in Rn,Rn=b.support.ajax=!!Rn,Rn&&b.ajaxTransport(function(n){if(!n.crossDomain||b.support.cors){var r;return{send:function(i,o){var a,s,u=n.xhr();if(n.username?u.open(n.type,n.url,n.async,n.username,n.password):u.open(n.type,n.url,n.async),n.xhrFields)for(s in n.xhrFields)u[s]=n.xhrFields[s];n.mimeType&&u.overrideMimeType&&u.overrideMimeType(n.mimeType),n.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");try{for(s in i)u.setRequestHeader(s,i[s])}catch(l){}u.send(n.hasContent&&n.data||null),r=function(e,i){var s,l,c,p;try{if(r&&(i||4===u.readyState))if(r=t,a&&(u.onreadystatechange=b.noop,$n&&delete Pn[a]),i)4!==u.readyState&&u.abort();else{p={},s=u.status,l=u.getAllResponseHeaders(),"string"==typeof u.responseText&&(p.text=u.responseText);try{c=u.statusText}catch(f){c=""}s||!n.isLocal||n.crossDomain?1223===s&&(s=204):s=p.text?200:404}}catch(d){i||o(-1,d)}p&&o(s,c,p,l)},n.async?4===u.readyState?setTimeout(r):(a=++Wn,$n&&(Pn||(Pn={},b(e).unload($n)),Pn[a]=r),u.onreadystatechange=r):r()},abort:function(){r&&r(t,!0)}}}});var Xn,Un,Vn=/^(?:toggle|show|hide)$/,Yn=RegExp("^(?:([+-])=|)("+x+")([a-z%]*)$","i"),Jn=/queueHooks$/,Gn=[nr],Qn={"*":[function(e,t){var n,r,i=this.createTween(e,t),o=Yn.exec(t),a=i.cur(),s=+a||0,u=1,l=20;if(o){if(n=+o[2],r=o[3]||(b.cssNumber[e]?"":"px"),"px"!==r&&s){s=b.css(i.elem,e,!0)||n||1;do u=u||".5",s/=u,b.style(i.elem,e,s+r);while(u!==(u=i.cur()/a)&&1!==u&&--l)}i.unit=r,i.start=s,i.end=o[1]?s+(o[1]+1)*n:n}return i}]};function Kn(){return setTimeout(function(){Xn=t}),Xn=b.now()}function Zn(e,t){b.each(t,function(t,n){var r=(Qn[t]||[]).concat(Qn["*"]),i=0,o=r.length;for(;o>i;i++)if(r[i].call(e,t,n))return})}function er(e,t,n){var r,i,o=0,a=Gn.length,s=b.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;var t=Xn||Kn(),n=Math.max(0,l.startTime+l.duration-t),r=n/l.duration||0,o=1-r,a=0,u=l.tweens.length;for(;u>a;a++)l.tweens[a].run(o);return s.notifyWith(e,[l,o,n]),1>o&&u?n:(s.resolveWith(e,[l]),!1)},l=s.promise({elem:e,props:b.extend({},t),opts:b.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:Xn||Kn(),duration:n.duration,tweens:[],createTween:function(t,n){var r=b.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)l.tweens[n].run(1);return t?s.resolveWith(e,[l,t]):s.rejectWith(e,[l,t]),this}}),c=l.props;for(tr(c,l.opts.specialEasing);a>o;o++)if(r=Gn[o].call(l,e,c,l.opts))return r;return Zn(l,c),b.isFunction(l.opts.start)&&l.opts.start.call(e,l),b.fx.timer(b.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always)}function tr(e,t){var n,r,i,o,a;for(i in e)if(r=b.camelCase(i),o=t[r],n=e[i],b.isArray(n)&&(o=n[1],n=e[i]=n[0]),i!==r&&(e[r]=n,delete e[i]),a=b.cssHooks[r],a&&"expand"in a){n=a.expand(n),delete e[r];for(i in n)i in e||(e[i]=n[i],t[i]=o)}else t[r]=o}b.Animation=b.extend(er,{tweener:function(e,t){b.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;i>r;r++)n=e[r],Qn[n]=Qn[n]||[],Qn[n].unshift(t)},prefilter:function(e,t){t?Gn.unshift(e):Gn.push(e)}});function nr(e,t,n){var r,i,o,a,s,u,l,c,p,f=this,d=e.style,h={},g=[],m=e.nodeType&&nn(e);n.queue||(c=b._queueHooks(e,"fx"),null==c.unqueued&&(c.unqueued=0,p=c.empty.fire,c.empty.fire=function(){c.unqueued||p()}),c.unqueued++,f.always(function(){f.always(function(){c.unqueued--,b.queue(e,"fx").length||c.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[d.overflow,d.overflowX,d.overflowY],"inline"===b.css(e,"display")&&"none"===b.css(e,"float")&&(b.support.inlineBlockNeedsLayout&&"inline"!==un(e.nodeName)?d.zoom=1:d.display="inline-block")),n.overflow&&(d.overflow="hidden",b.support.shrinkWrapBlocks||f.always(function(){d.overflow=n.overflow[0],d.overflowX=n.overflow[1],d.overflowY=n.overflow[2]}));for(i in t)if(a=t[i],Vn.exec(a)){if(delete t[i],u=u||"toggle"===a,a===(m?"hide":"show"))continue;g.push(i)}if(o=g.length){s=b._data(e,"fxshow")||b._data(e,"fxshow",{}),"hidden"in s&&(m=s.hidden),u&&(s.hidden=!m),m?b(e).show():f.done(function(){b(e).hide()}),f.done(function(){var t;b._removeData(e,"fxshow");for(t in h)b.style(e,t,h[t])});for(i=0;o>i;i++)r=g[i],l=f.createTween(r,m?s[r]:0),h[r]=s[r]||b.style(e,r),r in s||(s[r]=l.start,m&&(l.end=l.start,l.start="width"===r||"height"===r?1:0))}}function rr(e,t,n,r,i){return new rr.prototype.init(e,t,n,r,i)}b.Tween=rr,rr.prototype={constructor:rr,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(b.cssNumber[n]?"":"px")},cur:function(){var e=rr.propHooks[this.prop];return e&&e.get?e.get(this):rr.propHooks._default.get(this)},run:function(e){var t,n=rr.propHooks[this.prop];return this.pos=t=this.options.duration?b.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):rr.propHooks._default.set(this),this}},rr.prototype.init.prototype=rr.prototype,rr.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=b.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){b.fx.step[e.prop]?b.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[b.cssProps[e.prop]]||b.cssHooks[e.prop])?b.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},rr.propHooks.scrollTop=rr.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},b.each(["toggle","show","hide"],function(e,t){var n=b.fn[t];b.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ir(t,!0),e,r,i)}}),b.fn.extend({fadeTo:function(e,t,n,r){return this.filter(nn).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=b.isEmptyObject(e),o=b.speed(t,n,r),a=function(){var t=er(this,b.extend({},e),o);a.finish=function(){t.stop(!0)},(i||b._data(this,"finish"))&&t.stop(!0)};return a.finish=a,i||o.queue===!1?this.each(a):this.queue(o.queue,a)},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return"string"!=typeof e&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=null!=e&&e+"queueHooks",o=b.timers,a=b._data(this);if(n)a[n]&&a[n].stop&&i(a[n]);else for(n in a)a[n]&&a[n].stop&&Jn.test(n)&&i(a[n]);for(n=o.length;n--;)o[n].elem!==this||null!=e&&o[n].queue!==e||(o[n].anim.stop(r),t=!1,o.splice(n,1));(t||!r)&&b.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=b._data(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=b.timers,a=r?r.length:0;for(n.finish=!0,b.queue(this,e,[]),i&&i.cur&&i.cur.finish&&i.cur.finish.call(this),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;a>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}});function ir(e,t){var n,r={height:e},i=0;for(t=t?1:0;4>i;i+=2-t)n=Zt[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}b.each({slideDown:ir("show"),slideUp:ir("hide"),slideToggle:ir("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){b.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),b.speed=function(e,t,n){var r=e&&"object"==typeof e?b.extend({},e):{complete:n||!n&&t||b.isFunction(e)&&e,duration:e,easing:n&&t||t&&!b.isFunction(t)&&t};return r.duration=b.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in b.fx.speeds?b.fx.speeds[r.duration]:b.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){b.isFunction(r.old)&&r.old.call(this),r.queue&&b.dequeue(this,r.queue)},r},b.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},b.timers=[],b.fx=rr.prototype.init,b.fx.tick=function(){var e,n=b.timers,r=0;for(Xn=b.now();n.length>r;r++)e=n[r],e()||n[r]!==e||n.splice(r--,1);n.length||b.fx.stop(),Xn=t},b.fx.timer=function(e){e()&&b.timers.push(e)&&b.fx.start()},b.fx.interval=13,b.fx.start=function(){Un||(Un=setInterval(b.fx.tick,b.fx.interval))},b.fx.stop=function(){clearInterval(Un),Un=null},b.fx.speeds={slow:600,fast:200,_default:400},b.fx.step={},b.expr&&b.expr.filters&&(b.expr.filters.animated=function(e){return b.grep(b.timers,function(t){return e===t.elem}).length}),b.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){b.offset.setOffset(this,e,t)});var n,r,o={top:0,left:0},a=this[0],s=a&&a.ownerDocument;if(s)return n=s.documentElement,b.contains(n,a)?(typeof a.getBoundingClientRect!==i&&(o=a.getBoundingClientRect()),r=or(s),{top:o.top+(r.pageYOffset||n.scrollTop)-(n.clientTop||0),left:o.left+(r.pageXOffset||n.scrollLeft)-(n.clientLeft||0)}):o},b.offset={setOffset:function(e,t,n){var r=b.css(e,"position");"static"===r&&(e.style.position="relative");var i=b(e),o=i.offset(),a=b.css(e,"top"),s=b.css(e,"left"),u=("absolute"===r||"fixed"===r)&&b.inArray("auto",[a,s])>-1,l={},c={},p,f;u?(c=i.position(),p=c.top,f=c.left):(p=parseFloat(a)||0,f=parseFloat(s)||0),b.isFunction(t)&&(t=t.call(e,n,o)),null!=t.top&&(l.top=t.top-o.top+p),null!=t.left&&(l.left=t.left-o.left+f),"using"in t?t.using.call(e,l):i.css(l)}},b.fn.extend({position:function(){if(this[0]){var e,t,n={top:0,left:0},r=this[0];return"fixed"===b.css(r,"position")?t=r.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),b.nodeName(e[0],"html")||(n=e.offset()),n.top+=b.css(e[0],"borderTopWidth",!0),n.left+=b.css(e[0],"borderLeftWidth",!0)),{top:t.top-n.top-b.css(r,"marginTop",!0),left:t.left-n.left-b.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||o.documentElement;while(e&&!b.nodeName(e,"html")&&"static"===b.css(e,"position"))e=e.offsetParent;return e||o.documentElement})}}),b.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);b.fn[e]=function(i){return b.access(this,function(e,i,o){var a=or(e);return o===t?a?n in a?a[n]:a.document.documentElement[i]:e[i]:(a?a.scrollTo(r?b(a).scrollLeft():o,r?o:b(a).scrollTop()):e[i]=o,t)},e,i,arguments.length,null)}});function or(e){return b.isWindow(e)?e:9===e.nodeType?e.defaultView||e.parentWindow:!1}b.each({Height:"height",Width:"width"},function(e,n){b.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){b.fn[i]=function(i,o){var a=arguments.length&&(r||"boolean"!=typeof i),s=r||(i===!0||o===!0?"margin":"border");return b.access(this,function(n,r,i){var o;return b.isWindow(n)?n.document.documentElement["client"+e]:9===n.nodeType?(o=n.documentElement,Math.max(n.body["scroll"+e],o["scroll"+e],n.body["offset"+e],o["offset"+e],o["client"+e])):i===t?b.css(n,r,s):b.style(n,r,i,s)},n,a?i:t,a,null)}})}),e.jQuery=e.$=b,"function"==typeof define&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return b})})(window);


// FROM: assets/js/bootstrap-transition.js
/* ===================================================
 * bootstrap-transition.js v2.3.1
 * http://twitter.github.com/bootstrap/javascript.html#transitions
 * ===================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */


!function ($) {

  "use strict"; // jshint ;_;


  /* CSS TRANSITION SUPPORT (http://www.modernizr.com/)
   * ======================================================= */

  $(function () {

    $.support.transition = (function () {

      var transitionEnd = (function () {

        var el = document.createElement('bootstrap')
          , transEndEventNames = {
               'WebkitTransition' : 'webkitTransitionEnd'
            ,  'MozTransition'    : 'transitionend'
            ,  'OTransition'      : 'oTransitionEnd otransitionend'
            ,  'transition'       : 'transitionend'
            }
          , name

        for (name in transEndEventNames){
          if (el.style[name] !== undefined) {
            return transEndEventNames[name]
          }
        }

      }())

      return transitionEnd && {
        end: transitionEnd
      }

    })()

  })

}(window.jQuery);


// FROM: assets/js/bootstrap-alert.js
/* ==========================================================
 * bootstrap-alert.js v2.3.1
 * http://twitter.github.com/bootstrap/javascript.html#alerts
 * ==========================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */


!function ($) {

  "use strict"; // jshint ;_;


 /* ALERT CLASS DEFINITION
  * ====================== */

  var dismiss = '[data-dismiss="alert"]'
    , Alert = function (el) {
        $(el).on('click', dismiss, this.close)
      }

  Alert.prototype.close = function (e) {
    var $this = $(this)
      , selector = $this.attr('data-target')
      , $parent

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') //strip for ie7
    }

    $parent = $(selector)

    e && e.preventDefault()

    $parent.length || ($parent = $this.hasClass('alert') ? $this : $this.parent())

    $parent.trigger(e = $.Event('close'))

    if (e.isDefaultPrevented()) return

    $parent.removeClass('in')

    function removeElement() {
      $parent
        .trigger('closed')
        .remove()
    }

    $.support.transition && $parent.hasClass('fade') ?
      $parent.on($.support.transition.end, removeElement) :
      removeElement()
  }


 /* ALERT PLUGIN DEFINITION
  * ======================= */

  var old = $.fn.alert

  $.fn.alert = function (option) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('alert')
      if (!data) $this.data('alert', (data = new Alert(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  $.fn.alert.Constructor = Alert


 /* ALERT NO CONFLICT
  * ================= */

  $.fn.alert.noConflict = function () {
    $.fn.alert = old
    return this
  }


 /* ALERT DATA-API
  * ============== */

  $(document).on('click.alert.data-api', dismiss, Alert.prototype.close)

}(window.jQuery);


// FROM: assets/js/bootstrap-modal.js
/* =========================================================
 * bootstrap-modal.js v2.3.1
 * http://twitter.github.com/bootstrap/javascript.html#modals
 * =========================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================= */


!function ($) {

  "use strict"; // jshint ;_;


 /* MODAL CLASS DEFINITION
  * ====================== */

  var Modal = function (element, options) {
    this.options = options
    this.$element = $(element)
      .delegate('[data-dismiss="modal"]', 'click.dismiss.modal', $.proxy(this.hide, this))
    this.options.remote && this.$element.find('.modal-body').load(this.options.remote)
  }

  Modal.prototype = {

      constructor: Modal

    , toggle: function () {
        return this[!this.isShown ? 'show' : 'hide']()
      }

    , show: function () {
        var that = this
          , e = $.Event('show')

        this.$element.trigger(e)

        if (this.isShown || e.isDefaultPrevented()) return

        this.isShown = true

        this.escape()

        this.backdrop(function () {
          var transition = $.support.transition && that.$element.hasClass('fade')

          if (!that.$element.parent().length) {
            that.$element.appendTo(document.body) //don't move modals dom position
          }

          that.$element.show()

          if (transition) {
            that.$element[0].offsetWidth // force reflow
          }

          that.$element
            .addClass('in')
            .attr('aria-hidden', false)

          that.enforceFocus()

          transition ?
            that.$element.one($.support.transition.end, function () { that.$element.focus().trigger('shown') }) :
            that.$element.focus().trigger('shown')

        })
      }

    , hide: function (e) {
        e && e.preventDefault()

        var that = this

        e = $.Event('hide')

        this.$element.trigger(e)

        if (!this.isShown || e.isDefaultPrevented()) return

        this.isShown = false

        this.escape()

        $(document).off('focusin.modal')

        this.$element
          .removeClass('in')
          .attr('aria-hidden', true)

        $.support.transition && this.$element.hasClass('fade') ?
          this.hideWithTransition() :
          this.hideModal()
      }

    , enforceFocus: function () {
        var that = this
        $(document).on('focusin.modal', function (e) {
          if (that.$element[0] !== e.target && !that.$element.has(e.target).length) {
            that.$element.focus()
          }
        })
      }

    , escape: function () {
        var that = this
        if (this.isShown && this.options.keyboard) {
          this.$element.on('keyup.dismiss.modal', function ( e ) {
            e.which == 27 && that.hide()
          })
        } else if (!this.isShown) {
          this.$element.off('keyup.dismiss.modal')
        }
      }

    , hideWithTransition: function () {
        var that = this
          , timeout = setTimeout(function () {
              that.$element.off($.support.transition.end)
              that.hideModal()
            }, 500)

        this.$element.one($.support.transition.end, function () {
          clearTimeout(timeout)
          that.hideModal()
        })
      }

    , hideModal: function () {
        var that = this
        this.$element.hide()
        this.backdrop(function () {
          that.removeBackdrop()
          that.$element.trigger('hidden')
        })
      }

    , removeBackdrop: function () {
        this.$backdrop && this.$backdrop.remove()
        this.$backdrop = null
      }

    , backdrop: function (callback) {
        var that = this
          , animate = this.$element.hasClass('fade') ? 'fade' : ''

        if (this.isShown && this.options.backdrop) {
          var doAnimate = $.support.transition && animate

          this.$backdrop = $('<div class="modal-backdrop ' + animate + '" />')
            .appendTo(document.body)

          this.$backdrop.click(
            this.options.backdrop == 'static' ?
              $.proxy(this.$element[0].focus, this.$element[0])
            : $.proxy(this.hide, this)
          )

          if (doAnimate) this.$backdrop[0].offsetWidth // force reflow

          this.$backdrop.addClass('in')

          if (!callback) return

          doAnimate ?
            this.$backdrop.one($.support.transition.end, callback) :
            callback()

        } else if (!this.isShown && this.$backdrop) {
          this.$backdrop.removeClass('in')

          $.support.transition && this.$element.hasClass('fade')?
            this.$backdrop.one($.support.transition.end, callback) :
            callback()

        } else if (callback) {
          callback()
        }
      }
  }


 /* MODAL PLUGIN DEFINITION
  * ======================= */

  var old = $.fn.modal

  $.fn.modal = function (option) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('modal')
        , options = $.extend({}, $.fn.modal.defaults, $this.data(), typeof option == 'object' && option)
      if (!data) $this.data('modal', (data = new Modal(this, options)))
      if (typeof option == 'string') data[option]()
      else if (options.show) data.show()
    })
  }

  $.fn.modal.defaults = {
      backdrop: true
    , keyboard: true
    , show: true
  }

  $.fn.modal.Constructor = Modal


 /* MODAL NO CONFLICT
  * ================= */

  $.fn.modal.noConflict = function () {
    $.fn.modal = old
    return this
  }


 /* MODAL DATA-API
  * ============== */

  $(document).on('click.modal.data-api', '[data-toggle="modal"]', function (e) {
    var $this = $(this)
      , href = $this.attr('href')
      , $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, ''))) //strip for ie7
      , option = $target.data('modal') ? 'toggle' : $.extend({ remote:!/#/.test(href) && href }, $target.data(), $this.data())

    e.preventDefault()

    $target
      .modal(option)
      .one('hide', function () {
        $this.focus()
      })
  })

}(window.jQuery);



// FROM: assets/js/bootstrap-dropdown.js
/* ============================================================
 * bootstrap-dropdown.js v2.3.1
 * http://twitter.github.com/bootstrap/javascript.html#dropdowns
 * ============================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ============================================================ */


!function ($) {

  "use strict"; // jshint ;_;


 /* DROPDOWN CLASS DEFINITION
  * ========================= */

  var toggle = '[data-toggle=dropdown]'
    , Dropdown = function (element) {
        var $el = $(element).on('click.dropdown.data-api', this.toggle)
        $('html').on('click.dropdown.data-api', function () {
          $el.parent().removeClass('open')
        })
      }

  Dropdown.prototype = {

    constructor: Dropdown

  , toggle: function (e) {
      var $this = $(this)
        , $parent
        , isActive

      if ($this.is('.disabled, :disabled')) return

      $parent = getParent($this)

      isActive = $parent.hasClass('open')

      clearMenus()

      if (!isActive) {
        $parent.toggleClass('open')
      }

      $this.focus()

      return false
    }

  , keydown: function (e) {
      var $this
        , $items
        , $active
        , $parent
        , isActive
        , index

      if (!/(38|40|27)/.test(e.keyCode)) return

      $this = $(this)

      e.preventDefault()
      e.stopPropagation()

      if ($this.is('.disabled, :disabled')) return

      $parent = getParent($this)

      isActive = $parent.hasClass('open')

      if (!isActive || (isActive && e.keyCode == 27)) {
        if (e.which == 27) $parent.find(toggle).focus()
        return $this.click()
      }

      $items = $('[role=menu] li:not(.divider):visible a', $parent)

      if (!$items.length) return

      index = $items.index($items.filter(':focus'))

      if (e.keyCode == 38 && index > 0) index--                                        // up
      if (e.keyCode == 40 && index < $items.length - 1) index++                        // down
      if (!~index) index = 0

      $items
        .eq(index)
        .focus()
    }

  }

  function clearMenus() {
    $(toggle).each(function () {
      getParent($(this)).removeClass('open')
    })
  }

  function getParent($this) {
    var selector = $this.attr('data-target')
      , $parent

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && /#/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, '') //strip for ie7
    }

    $parent = selector && $(selector)

    if (!$parent || !$parent.length) $parent = $this.parent()

    return $parent
  }


  /* DROPDOWN PLUGIN DEFINITION
   * ========================== */

  var old = $.fn.dropdown

  $.fn.dropdown = function (option) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('dropdown')
      if (!data) $this.data('dropdown', (data = new Dropdown(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  $.fn.dropdown.Constructor = Dropdown


 /* DROPDOWN NO CONFLICT
  * ==================== */

  $.fn.dropdown.noConflict = function () {
    $.fn.dropdown = old
    return this
  }


  /* APPLY TO STANDARD DROPDOWN ELEMENTS
   * =================================== */

  $(document)
    .on('click.dropdown.data-api', clearMenus)
    .on('click.dropdown.data-api', '.dropdown form', function (e) { e.stopPropagation() })
    .on('click.dropdown-menu', function (e) { e.stopPropagation() })
    .on('click.dropdown.data-api'  , toggle, Dropdown.prototype.toggle)
    .on('keydown.dropdown.data-api', toggle + ', [role=menu]' , Dropdown.prototype.keydown)

}(window.jQuery);



// FROM: assets/js/bootstrap-scrollspy.js
/* =============================================================
 * bootstrap-scrollspy.js v2.3.1
 * http://twitter.github.com/bootstrap/javascript.html#scrollspy
 * =============================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ============================================================== */


!function ($) {

  "use strict"; // jshint ;_;


 /* SCROLLSPY CLASS DEFINITION
  * ========================== */

  function ScrollSpy(element, options) {
    var process = $.proxy(this.process, this)
      , $element = $(element).is('body') ? $(window) : $(element)
      , href
    this.options = $.extend({}, $.fn.scrollspy.defaults, options)
    this.$scrollElement = $element.on('scroll.scroll-spy.data-api', process)
    this.selector = (this.options.target
      || ((href = $(element).attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) //strip for ie7
      || '') + ' .nav li > a'
    this.$body = $('body')
    this.refresh()
    this.process()
  }

  ScrollSpy.prototype = {

      constructor: ScrollSpy

    , refresh: function () {
        var self = this
          , $targets

        this.offsets = $([])
        this.targets = $([])

        $targets = this.$body
          .find(this.selector)
          .map(function () {
            var $el = $(this)
              , href = $el.data('target') || $el.attr('href')
              , $href = /^#\w/.test(href) && $(href)
            return ( $href
              && $href.length
              && [[ $href.position().top + (!$.isWindow(self.$scrollElement.get(0)) && self.$scrollElement.scrollTop()), href ]] ) || null
          })
          .sort(function (a, b) { return a[0] - b[0] })
          .each(function () {
            self.offsets.push(this[0])
            self.targets.push(this[1])
          })
      }

    , process: function () {
        var scrollTop = this.$scrollElement.scrollTop() + this.options.offset
          , scrollHeight = this.$scrollElement[0].scrollHeight || this.$body[0].scrollHeight
          , maxScroll = scrollHeight - this.$scrollElement.height()
          , offsets = this.offsets
          , targets = this.targets
          , activeTarget = this.activeTarget
          , i

        if (scrollTop >= maxScroll) {
          return activeTarget != (i = targets.last()[0])
            && this.activate ( i )
        }

        for (i = offsets.length; i--;) {
          activeTarget != targets[i]
            && scrollTop >= offsets[i]
            && (!offsets[i + 1] || scrollTop <= offsets[i + 1])
            && this.activate( targets[i] )
        }
      }

    , activate: function (target) {
        var active
          , selector

        this.activeTarget = target

        $(this.selector)
          .parent('.active')
          .removeClass('active')

        selector = this.selector
          + '[data-target="' + target + '"],'
          + this.selector + '[href="' + target + '"]'

        active = $(selector)
          .parent('li')
          .addClass('active')

        if (active.parent('.dropdown-menu').length)  {
          active = active.closest('li.dropdown').addClass('active')
        }

        active.trigger('activate')
      }

  }


 /* SCROLLSPY PLUGIN DEFINITION
  * =========================== */

  var old = $.fn.scrollspy

  $.fn.scrollspy = function (option) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('scrollspy')
        , options = typeof option == 'object' && option
      if (!data) $this.data('scrollspy', (data = new ScrollSpy(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.scrollspy.Constructor = ScrollSpy

  $.fn.scrollspy.defaults = {
    offset: 10
  }


 /* SCROLLSPY NO CONFLICT
  * ===================== */

  $.fn.scrollspy.noConflict = function () {
    $.fn.scrollspy = old
    return this
  }


 /* SCROLLSPY DATA-API
  * ================== */

  $(window).on('load', function () {
    $('[data-spy="scroll"]').each(function () {
      var $spy = $(this)
      $spy.scrollspy($spy.data())
    })
  })

}(window.jQuery);


// FROM: assets/js/bootstrap-tab.js
/* ========================================================
 * bootstrap-tab.js v2.3.1
 * http://twitter.github.com/bootstrap/javascript.html#tabs
 * ========================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================== */


!function ($) {

  "use strict"; // jshint ;_;


 /* TAB CLASS DEFINITION
  * ==================== */

  var Tab = function (element) {
    this.element = $(element)
  }

  Tab.prototype = {

    constructor: Tab

  , show: function () {
      var $this = this.element
        , $ul = $this.closest('ul:not(.dropdown-menu)')
        , selector = $this.attr('data-target')
        , previous
        , $target
        , e

      if (!selector) {
        selector = $this.attr('href')
        selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') //strip for ie7
      }

      if ( $this.parent('li').hasClass('active') ) return

      previous = $ul.find('.active:last a')[0]

      e = $.Event('show', {
        relatedTarget: previous
      })

      $this.trigger(e)

      if (e.isDefaultPrevented()) return

      $target = $(selector)

      this.activate($this.parent('li'), $ul)
      this.activate($target, $target.parent(), function () {
        $this.trigger({
          type: 'shown'
        , relatedTarget: previous
        })
      })
    }

  , activate: function ( element, container, callback) {
      var $active = container.find('> .active')
        , transition = callback
            && $.support.transition
            && $active.hasClass('fade')

      function next() {
        $active
          .removeClass('active')
          .find('> .dropdown-menu > .active')
          .removeClass('active')

        element.addClass('active')

        if (transition) {
          element[0].offsetWidth // reflow for transition
          element.addClass('in')
        } else {
          element.removeClass('fade')
        }

        if ( element.parent('.dropdown-menu') ) {
          element.closest('li.dropdown').addClass('active')
        }

        callback && callback()
      }

      transition ?
        $active.one($.support.transition.end, next) :
        next()

      $active.removeClass('in')
    }
  }


 /* TAB PLUGIN DEFINITION
  * ===================== */

  var old = $.fn.tab

  $.fn.tab = function ( option ) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('tab')
      if (!data) $this.data('tab', (data = new Tab(this)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.tab.Constructor = Tab


 /* TAB NO CONFLICT
  * =============== */

  $.fn.tab.noConflict = function () {
    $.fn.tab = old
    return this
  }


 /* TAB DATA-API
  * ============ */

  $(document).on('click.tab.data-api', '[data-toggle="tab"], [data-toggle="pill"]', function (e) {
    e.preventDefault()
    $(this).tab('show')
  })

}(window.jQuery);


// FROM: assets/js/bootstrap-tooltip.js
/* ===========================================================
 * bootstrap-tooltip.js v2.3.1
 * http://twitter.github.com/bootstrap/javascript.html#tooltips
 * Inspired by the original jQuery.tipsy by Jason Frame
 * ===========================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */


!function ($) {

  "use strict"; // jshint ;_;


 /* TOOLTIP PUBLIC CLASS DEFINITION
  * =============================== */

  var Tooltip = function (element, options) {
    this.init('tooltip', element, options)
  }

  Tooltip.prototype = {

    constructor: Tooltip

  , init: function (type, element, options) {
      var eventIn
        , eventOut
        , triggers
        , trigger
        , i

      this.type = type
      this.$element = $(element)
      this.options = this.getOptions(options)
      this.enabled = true

      triggers = this.options.trigger.split(' ')

      for (i = triggers.length; i--;) {
        trigger = triggers[i]
        if (trigger == 'click') {
          this.$element.on('click.' + this.type, this.options.selector, $.proxy(this.toggle, this))
        } else if (trigger != 'manual') {
          eventIn = trigger == 'hover' ? 'mouseenter' : 'focus'
          eventOut = trigger == 'hover' ? 'mouseleave' : 'blur'
          this.$element.on(eventIn + '.' + this.type, this.options.selector, $.proxy(this.enter, this))
          this.$element.on(eventOut + '.' + this.type, this.options.selector, $.proxy(this.leave, this))
        }
      }

      this.options.selector ?
        (this._options = $.extend({}, this.options, { trigger: 'manual', selector: '' })) :
        this.fixTitle()
    }

  , getOptions: function (options) {
      options = $.extend({}, $.fn[this.type].defaults, this.$element.data(), options)

      if (options.delay && typeof options.delay == 'number') {
        options.delay = {
          show: options.delay
        , hide: options.delay
        }
      }

      return options
    }

  , enter: function (e) {
      var defaults = $.fn[this.type].defaults
        , options = {}
        , self

      this._options && $.each(this._options, function (key, value) {
        if (defaults[key] != value) options[key] = value
      }, this)

      self = $(e.currentTarget)[this.type](options).data(this.type)

      if (!self.options.delay || !self.options.delay.show) return self.show()

      clearTimeout(this.timeout)
      self.hoverState = 'in'
      this.timeout = setTimeout(function() {
        if (self.hoverState == 'in') self.show()
      }, self.options.delay.show)
    }

  , leave: function (e) {
      var self = $(e.currentTarget)[this.type](this._options).data(this.type)

      if (this.timeout) clearTimeout(this.timeout)
      if (!self.options.delay || !self.options.delay.hide) return self.hide()

      self.hoverState = 'out'
      this.timeout = setTimeout(function() {
        if (self.hoverState == 'out') self.hide()
      }, self.options.delay.hide)
    }

  , show: function () {
      var $tip
        , pos
        , actualWidth
        , actualHeight
        , placement
        , tp
        , e = $.Event('show')

      if (this.hasContent() && this.enabled) {
        this.$element.trigger(e)
        if (e.isDefaultPrevented()) return
        $tip = this.tip()
        this.setContent()

        if (this.options.animation) {
          $tip.addClass('fade')
        }

        placement = typeof this.options.placement == 'function' ?
          this.options.placement.call(this, $tip[0], this.$element[0]) :
          this.options.placement

        $tip
          .detach()
          .css({ top: 0, left: 0, display: 'block' })

        this.options.container ? $tip.appendTo(this.options.container) : $tip.insertAfter(this.$element)

        pos = this.getPosition()

        actualWidth = $tip[0].offsetWidth
        actualHeight = $tip[0].offsetHeight

        switch (placement) {
          case 'bottom':
            tp = {top: pos.top + pos.height, left: pos.left + pos.width / 2 - actualWidth / 2}
            break
          case 'top':
            tp = {top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2}
            break
          case 'left':
            tp = {top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth}
            break
          case 'right':
            tp = {top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width}
            break
        }

        this.applyPlacement(tp, placement)
        this.$element.trigger('shown')
      }
    }

  , applyPlacement: function(offset, placement){
      var $tip = this.tip()
        , width = $tip[0].offsetWidth
        , height = $tip[0].offsetHeight
        , actualWidth
        , actualHeight
        , delta
        , replace

      $tip
        .offset(offset)
        .addClass(placement)
        .addClass('in')

      actualWidth = $tip[0].offsetWidth
      actualHeight = $tip[0].offsetHeight

      if (placement == 'top' && actualHeight != height) {
        offset.top = offset.top + height - actualHeight
        replace = true
      }

      if (placement == 'bottom' || placement == 'top') {
        delta = 0

        if (offset.left < 0){
          delta = offset.left * -2
          offset.left = 0
          $tip.offset(offset)
          actualWidth = $tip[0].offsetWidth
          actualHeight = $tip[0].offsetHeight
        }

        this.replaceArrow(delta - width + actualWidth, actualWidth, 'left')
      } else {
        this.replaceArrow(actualHeight - height, actualHeight, 'top')
      }

      if (replace) $tip.offset(offset)
    }

  , replaceArrow: function(delta, dimension, position){
      this
        .arrow()
        .css(position, delta ? (50 * (1 - delta / dimension) + "%") : '')
    }

  , setContent: function () {
      var $tip = this.tip()
        , title = this.getTitle()

      $tip.find('.tooltip-inner')[this.options.html ? 'html' : 'text'](title)
      $tip.removeClass('fade in top bottom left right')
    }

  , hide: function () {
      var that = this
        , $tip = this.tip()
        , e = $.Event('hide')

      this.$element.trigger(e)
      if (e.isDefaultPrevented()) return

      $tip.removeClass('in')

      function removeWithAnimation() {
        var timeout = setTimeout(function () {
          $tip.off($.support.transition.end).detach()
        }, 500)

        $tip.one($.support.transition.end, function () {
          clearTimeout(timeout)
          $tip.detach()
        })
      }

      $.support.transition && this.$tip.hasClass('fade') ?
        removeWithAnimation() :
        $tip.detach()

      this.$element.trigger('hidden')

      return this
    }

  , fixTitle: function () {
      var $e = this.$element
      if ($e.attr('title') || typeof($e.attr('data-original-title')) != 'string') {
        $e.attr('data-original-title', $e.attr('title') || '').attr('title', '')
      }
    }

  , hasContent: function () {
      return this.getTitle()
    }

  , getPosition: function () {
      var el = this.$element[0]
      return $.extend({}, (typeof el.getBoundingClientRect == 'function') ? el.getBoundingClientRect() : {
        width: el.offsetWidth
      , height: el.offsetHeight
      }, this.$element.offset())
    }

  , getTitle: function () {
      var title
        , $e = this.$element
        , o = this.options

      title = $e.attr('data-original-title')
        || (typeof o.title == 'function' ? o.title.call($e[0]) :  o.title)

      return title
    }

  , tip: function () {
      return this.$tip = this.$tip || $(this.options.template)
    }

  , arrow: function(){
      return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }

  , validate: function () {
      if (!this.$element[0].parentNode) {
        this.hide()
        this.$element = null
        this.options = null
      }
    }

  , enable: function () {
      this.enabled = true
    }

  , disable: function () {
      this.enabled = false
    }

  , toggleEnabled: function () {
      this.enabled = !this.enabled
    }

  , toggle: function (e) {
      var self = e ? $(e.currentTarget)[this.type](this._options).data(this.type) : this
      self.tip().hasClass('in') ? self.hide() : self.show()
    }

  , destroy: function () {
      this.hide().$element.off('.' + this.type).removeData(this.type)
    }

  }


 /* TOOLTIP PLUGIN DEFINITION
  * ========================= */

  var old = $.fn.tooltip

  $.fn.tooltip = function ( option ) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('tooltip')
        , options = typeof option == 'object' && option
      if (!data) $this.data('tooltip', (data = new Tooltip(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.tooltip.Constructor = Tooltip

  $.fn.tooltip.defaults = {
    animation: true
  , placement: 'top'
  , selector: false
  , template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>'
  , trigger: 'hover focus'
  , title: ''
  , delay: 0
  , html: false
  , container: false
  }


 /* TOOLTIP NO CONFLICT
  * =================== */

  $.fn.tooltip.noConflict = function () {
    $.fn.tooltip = old
    return this
  }

}(window.jQuery);



// FROM: assets/js/bootstrap-popover.js
/* ===========================================================
 * bootstrap-popover.js v2.3.1
 * http://twitter.github.com/bootstrap/javascript.html#popovers
 * ===========================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =========================================================== */


!function ($) {

  "use strict"; // jshint ;_;


 /* POPOVER PUBLIC CLASS DEFINITION
  * =============================== */

  var Popover = function (element, options) {
    this.init('popover', element, options)
  }


  /* NOTE: POPOVER EXTENDS BOOTSTRAP-TOOLTIP.js
     ========================================== */

  Popover.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype, {

    constructor: Popover

  , setContent: function () {
      var $tip = this.tip()
        , title = this.getTitle()
        , content = this.getContent()

      $tip.find('.popover-title')[this.options.html ? 'html' : 'text'](title)
      $tip.find('.popover-content')[this.options.html ? 'html' : 'text'](content)

      $tip.removeClass('fade top bottom left right in')
    }

  , hasContent: function () {
      return this.getTitle() || this.getContent()
    }

  , getContent: function () {
      var content
        , $e = this.$element
        , o = this.options

      content = (typeof o.content == 'function' ? o.content.call($e[0]) :  o.content)
        || $e.attr('data-content')

      return content
    }

  , tip: function () {
      if (!this.$tip) {
        this.$tip = $(this.options.template)
      }
      return this.$tip
    }

  , destroy: function () {
      this.hide().$element.off('.' + this.type).removeData(this.type)
    }

  })


 /* POPOVER PLUGIN DEFINITION
  * ======================= */

  var old = $.fn.popover

  $.fn.popover = function (option) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('popover')
        , options = typeof option == 'object' && option
      if (!data) $this.data('popover', (data = new Popover(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.popover.Constructor = Popover

  $.fn.popover.defaults = $.extend({} , $.fn.tooltip.defaults, {
    placement: 'right'
  , trigger: 'click'
  , content: ''
  , template: '<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
  })


 /* POPOVER NO CONFLICT
  * =================== */

  $.fn.popover.noConflict = function () {
    $.fn.popover = old
    return this
  }

}(window.jQuery);



// FROM: assets/js/bootstrap-button.js
/* ============================================================
 * bootstrap-button.js v2.3.1
 * http://twitter.github.com/bootstrap/javascript.html#buttons
 * ============================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ============================================================ */


!function ($) {

  "use strict"; // jshint ;_;


 /* BUTTON PUBLIC CLASS DEFINITION
  * ============================== */

  var Button = function (element, options) {
    this.$element = $(element)
    this.options = $.extend({}, $.fn.button.defaults, options)
  }

  Button.prototype.setState = function (state) {
    var d = 'disabled'
      , $el = this.$element
      , data = $el.data()
      , val = $el.is('input') ? 'val' : 'html'

    state = state + 'Text'
    data.resetText || $el.data('resetText', $el[val]())

    $el[val](data[state] || this.options[state])

    // push to event loop to allow forms to submit
    setTimeout(function () {
      state == 'loadingText' ?
        $el.addClass(d).attr(d, d) :
        $el.removeClass(d).removeAttr(d)
    }, 0)
  }

  Button.prototype.toggle = function () {
    var $parent = this.$element.closest('[data-toggle="buttons-radio"]')

    $parent && $parent
      .find('.active')
      .removeClass('active')

    this.$element.toggleClass('active')
  }


 /* BUTTON PLUGIN DEFINITION
  * ======================== */

  var old = $.fn.button

  $.fn.button = function (option) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('button')
        , options = typeof option == 'object' && option
      if (!data) $this.data('button', (data = new Button(this, options)))
      if (option == 'toggle') data.toggle()
      else if (option) data.setState(option)
    })
  }

  $.fn.button.defaults = {
    loadingText: 'loading...'
  }

  $.fn.button.Constructor = Button


 /* BUTTON NO CONFLICT
  * ================== */

  $.fn.button.noConflict = function () {
    $.fn.button = old
    return this
  }


 /* BUTTON DATA-API
  * =============== */

  $(document).on('click.button.data-api', '[data-toggle^=button]', function (e) {
    var $btn = $(e.target)
    if (!$btn.hasClass('btn')) $btn = $btn.closest('.btn')
    $btn.button('toggle')
  })

}(window.jQuery);


// FROM: assets/js/bootstrap-collapse.js
/* =============================================================
 * bootstrap-collapse.js v2.3.1
 * http://twitter.github.com/bootstrap/javascript.html#collapse
 * =============================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ============================================================ */


!function ($) {

  "use strict"; // jshint ;_;


 /* COLLAPSE PUBLIC CLASS DEFINITION
  * ================================ */

  var Collapse = function (element, options) {
    this.$element = $(element)
    this.options = $.extend({}, $.fn.collapse.defaults, options)

    if (this.options.parent) {
      this.$parent = $(this.options.parent)
    }

    this.options.toggle && this.toggle()
  }

  Collapse.prototype = {

    constructor: Collapse

  , dimension: function () {
      var hasWidth = this.$element.hasClass('width')
      return hasWidth ? 'width' : 'height'
    }

  , show: function () {
      var dimension
        , scroll
        , actives
        , hasData

      if (this.transitioning || this.$element.hasClass('in')) return

      dimension = this.dimension()
      scroll = $.camelCase(['scroll', dimension].join('-'))
      actives = this.$parent && this.$parent.find('> .accordion-group > .in')

      if (actives && actives.length) {
        hasData = actives.data('collapse')
        if (hasData && hasData.transitioning) return
        actives.collapse('hide')
        hasData || actives.data('collapse', null)
      }

      this.$element[dimension](0)
      this.transition('addClass', $.Event('show'), 'shown')
      $.support.transition && this.$element[dimension](this.$element[0][scroll])
    }

  , hide: function () {
      var dimension
      if (this.transitioning || !this.$element.hasClass('in')) return
      dimension = this.dimension()
      this.reset(this.$element[dimension]())
      this.transition('removeClass', $.Event('hide'), 'hidden')
      this.$element[dimension](0)
    }

  , reset: function (size) {
      var dimension = this.dimension()

      this.$element
        .removeClass('collapse')
        [dimension](size || 'auto')
        [0].offsetWidth

      this.$element[size !== null ? 'addClass' : 'removeClass']('collapse')

      return this
    }

  , transition: function (method, startEvent, completeEvent) {
      var that = this
        , complete = function () {
            if (startEvent.type == 'show') that.reset()
            that.transitioning = 0
            that.$element.trigger(completeEvent)
          }

      this.$element.trigger(startEvent)

      if (startEvent.isDefaultPrevented()) return

      this.transitioning = 1

      this.$element[method]('in')

      $.support.transition && this.$element.hasClass('collapse') ?
        this.$element.one($.support.transition.end, complete) :
        complete()
    }

  , toggle: function () {
      this[this.$element.hasClass('in') ? 'hide' : 'show']()
    }

  }


 /* COLLAPSE PLUGIN DEFINITION
  * ========================== */

  var old = $.fn.collapse

  $.fn.collapse = function (option) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('collapse')
        , options = $.extend({}, $.fn.collapse.defaults, $this.data(), typeof option == 'object' && option)
      if (!data) $this.data('collapse', (data = new Collapse(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.collapse.defaults = {
    toggle: true
  }

  $.fn.collapse.Constructor = Collapse


 /* COLLAPSE NO CONFLICT
  * ==================== */

  $.fn.collapse.noConflict = function () {
    $.fn.collapse = old
    return this
  }


 /* COLLAPSE DATA-API
  * ================= */

  $(document).on('click.collapse.data-api', '[data-toggle=collapse]', function (e) {
    var $this = $(this), href
      , target = $this.attr('data-target')
        || e.preventDefault()
        || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '') //strip for ie7
      , option = $(target).data('collapse') ? 'toggle' : $this.data()
    $this[$(target).hasClass('in') ? 'addClass' : 'removeClass']('collapsed')
    $(target).collapse(option)
  })

}(window.jQuery);


// FROM: assets/js/bootstrap-carousel.js
/* ==========================================================
 * bootstrap-carousel.js v2.3.1
 * http://twitter.github.com/bootstrap/javascript.html#carousel
 * ==========================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */


!function ($) {

  "use strict"; // jshint ;_;


 /* CAROUSEL CLASS DEFINITION
  * ========================= */

  var Carousel = function (element, options) {
    this.$element = $(element)
    this.$indicators = this.$element.find('.carousel-indicators')
    this.options = options
    this.options.pause == 'hover' && this.$element
      .on('mouseenter', $.proxy(this.pause, this))
      .on('mouseleave', $.proxy(this.cycle, this))
  }

  Carousel.prototype = {

    cycle: function (e) {
      if (!e) this.paused = false
      if (this.interval) clearInterval(this.interval);
      this.options.interval
        && !this.paused
        && (this.interval = setInterval($.proxy(this.next, this), this.options.interval))
      return this
    }

  , getActiveIndex: function () {
      this.$active = this.$element.find('.item.active')
      this.$items = this.$active.parent().children()
      return this.$items.index(this.$active)
    }

  , to: function (pos) {
      var activeIndex = this.getActiveIndex()
        , that = this

      if (pos > (this.$items.length - 1) || pos < 0) return

      if (this.sliding) {
        return this.$element.one('slid', function () {
          that.to(pos)
        })
      }

      if (activeIndex == pos) {
        return this.pause().cycle()
      }

      return this.slide(pos > activeIndex ? 'next' : 'prev', $(this.$items[pos]))
    }

  , pause: function (e) {
      if (!e) this.paused = true
      if (this.$element.find('.next, .prev').length && $.support.transition.end) {
        this.$element.trigger($.support.transition.end)
        this.cycle(true)
      }
      clearInterval(this.interval)
      this.interval = null
      return this
    }

  , next: function () {
      if (this.sliding) return
      return this.slide('next')
    }

  , prev: function () {
      if (this.sliding) return
      return this.slide('prev')
    }

  , slide: function (type, next) {
      var $active = this.$element.find('.item.active')
        , $next = next || $active[type]()
        , isCycling = this.interval
        , direction = type == 'next' ? 'left' : 'right'
        , fallback  = type == 'next' ? 'first' : 'last'
        , that = this
        , e

      this.sliding = true

      isCycling && this.pause()

      $next = $next.length ? $next : this.$element.find('.item')[fallback]()

      e = $.Event('slide', {
        relatedTarget: $next[0]
      , direction: direction
      })

      if ($next.hasClass('active')) return

      if (this.$indicators.length) {
        this.$indicators.find('.active').removeClass('active')
        this.$element.one('slid', function () {
          var $nextIndicator = $(that.$indicators.children()[that.getActiveIndex()])
          $nextIndicator && $nextIndicator.addClass('active')
        })
      }

      if ($.support.transition && this.$element.hasClass('slide')) {
        this.$element.trigger(e)
        if (e.isDefaultPrevented()) return
        $next.addClass(type)
        $next[0].offsetWidth // force reflow
        $active.addClass(direction)
        $next.addClass(direction)
        this.$element.one($.support.transition.end, function () {
          $next.removeClass([type, direction].join(' ')).addClass('active')
          $active.removeClass(['active', direction].join(' '))
          that.sliding = false
          setTimeout(function () { that.$element.trigger('slid') }, 0)
        })
      } else {
        this.$element.trigger(e)
        if (e.isDefaultPrevented()) return
        $active.removeClass('active')
        $next.addClass('active')
        this.sliding = false
        this.$element.trigger('slid')
      }

      isCycling && this.cycle()

      return this
    }

  }


 /* CAROUSEL PLUGIN DEFINITION
  * ========================== */

  var old = $.fn.carousel

  $.fn.carousel = function (option) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('carousel')
        , options = $.extend({}, $.fn.carousel.defaults, typeof option == 'object' && option)
        , action = typeof option == 'string' ? option : options.slide
      if (!data) $this.data('carousel', (data = new Carousel(this, options)))
      if (typeof option == 'number') data.to(option)
      else if (action) data[action]()
      else if (options.interval) data.pause().cycle()
    })
  }

  $.fn.carousel.defaults = {
    interval: 5000
  , pause: 'hover'
  }

  $.fn.carousel.Constructor = Carousel


 /* CAROUSEL NO CONFLICT
  * ==================== */

  $.fn.carousel.noConflict = function () {
    $.fn.carousel = old
    return this
  }

 /* CAROUSEL DATA-API
  * ================= */

  $(document).on('click.carousel.data-api', '[data-slide], [data-slide-to]', function (e) {
    var $this = $(this), href
      , $target = $($this.attr('data-target') || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) //strip for ie7
      , options = $.extend({}, $target.data(), $this.data())
      , slideIndex

    $target.carousel(options)

    if (slideIndex = $this.attr('data-slide-to')) {
      $target.data('carousel').pause().to(slideIndex).cycle()
    }

    e.preventDefault()
  })

}(window.jQuery);


// FROM: assets/js/bootstrap-typeahead.js
/* =============================================================
 * bootstrap-typeahead.js v2.3.1
 * http://twitter.github.com/bootstrap/javascript.html#typeahead
 * =============================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ============================================================ */


!function($){

  "use strict"; // jshint ;_;


 /* TYPEAHEAD PUBLIC CLASS DEFINITION
  * ================================= */

  var Typeahead = function (element, options) {
    this.$element = $(element)
    this.options = $.extend({}, $.fn.typeahead.defaults, options)
    this.matcher = this.options.matcher || this.matcher
    this.sorter = this.options.sorter || this.sorter
    this.highlighter = this.options.highlighter || this.highlighter
    this.updater = this.options.updater || this.updater
    this.source = this.options.source
    this.$menu = $(this.options.menu)
    this.shown = false
    this.listen()
  }

  Typeahead.prototype = {

    constructor: Typeahead

  , select: function () {
      var val = this.$menu.find('.active').attr('data-value')
      this.$element
        .val(this.updater(val))
        .change()
      return this.hide()
    }

  , updater: function (item) {
      return item
    }

  , show: function () {
      var pos = $.extend({}, this.$element.position(), {
        height: this.$element[0].offsetHeight
      })

      this.$menu
        .insertAfter(this.$element)
        .css({
          top: pos.top + pos.height
        , left: pos.left
        })
        .show()

      this.shown = true
      return this
    }

  , hide: function () {
      this.$menu.hide()
      this.shown = false
      return this
    }

  , lookup: function (event) {
      var items

      this.query = this.$element.val()

      if (!this.query || this.query.length < this.options.minLength) {
        return this.shown ? this.hide() : this
      }

      items = $.isFunction(this.source) ? this.source(this.query, $.proxy(this.process, this)) : this.source

      return items ? this.process(items) : this
    }

  , process: function (items) {
      var that = this

      items = $.grep(items, function (item) {
        return that.matcher(item)
      })

      items = this.sorter(items)

      if (!items.length) {
        return this.shown ? this.hide() : this
      }

      return this.render(items.slice(0, this.options.items)).show()
    }

  , matcher: function (item) {
      return ~item.toLowerCase().indexOf(this.query.toLowerCase())
    }

  , sorter: function (items) {
      var beginswith = []
        , caseSensitive = []
        , caseInsensitive = []
        , item

      while (item = items.shift()) {
        if (!item.toLowerCase().indexOf(this.query.toLowerCase())) beginswith.push(item)
        else if (~item.indexOf(this.query)) caseSensitive.push(item)
        else caseInsensitive.push(item)
      }

      return beginswith.concat(caseSensitive, caseInsensitive)
    }

  , highlighter: function (item) {
      var query = this.query.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, '\\$&')
      return item.replace(new RegExp('(' + query + ')', 'ig'), function ($1, match) {
        return '<strong>' + match + '</strong>'
      })
    }

  , render: function (items) {
      var that = this

      items = $(items).map(function (i, item) {
        i = $(that.options.item).attr('data-value', item)
        i.find('a').html(that.highlighter(item))
        return i[0]
      })

      items.first().addClass('active')
      this.$menu.html(items)
      return this
    }

  , next: function (event) {
      var active = this.$menu.find('.active').removeClass('active')
        , next = active.next()

      if (!next.length) {
        next = $(this.$menu.find('li')[0])
      }

      next.addClass('active')
    }

  , prev: function (event) {
      var active = this.$menu.find('.active').removeClass('active')
        , prev = active.prev()

      if (!prev.length) {
        prev = this.$menu.find('li').last()
      }

      prev.addClass('active')
    }

  , listen: function () {
      this.$element
        .on('focus',    $.proxy(this.focus, this))
        .on('blur',     $.proxy(this.blur, this))
        .on('keypress', $.proxy(this.keypress, this))
        .on('keyup',    $.proxy(this.keyup, this))

      if (this.eventSupported('keydown')) {
        this.$element.on('keydown', $.proxy(this.keydown, this))
      }

      this.$menu
        .on('click', $.proxy(this.click, this))
        .on('mouseenter', 'li', $.proxy(this.mouseenter, this))
        .on('mouseleave', 'li', $.proxy(this.mouseleave, this))
    }

  , eventSupported: function(eventName) {
      var isSupported = eventName in this.$element
      if (!isSupported) {
        this.$element.setAttribute(eventName, 'return;')
        isSupported = typeof this.$element[eventName] === 'function'
      }
      return isSupported
    }

  , move: function (e) {
      if (!this.shown) return

      switch(e.keyCode) {
        case 9: // tab
        case 13: // enter
        case 27: // escape
          e.preventDefault()
          break

        case 38: // up arrow
          e.preventDefault()
          this.prev()
          break

        case 40: // down arrow
          e.preventDefault()
          this.next()
          break
      }

      e.stopPropagation()
    }

  , keydown: function (e) {
      this.suppressKeyPressRepeat = ~$.inArray(e.keyCode, [40,38,9,13,27])
      this.move(e)
    }

  , keypress: function (e) {
      if (this.suppressKeyPressRepeat) return
      this.move(e)
    }

  , keyup: function (e) {
      switch(e.keyCode) {
        case 40: // down arrow
        case 38: // up arrow
        case 16: // shift
        case 17: // ctrl
        case 18: // alt
          break

        case 9: // tab
        case 13: // enter
          if (!this.shown) return
          this.select()
          break

        case 27: // escape
          if (!this.shown) return
          this.hide()
          break

        default:
          this.lookup()
      }

      e.stopPropagation()
      e.preventDefault()
  }

  , focus: function (e) {
      this.focused = true
    }

  , blur: function (e) {
      this.focused = false
      if (!this.mousedover && this.shown) this.hide()
    }

  , click: function (e) {
      e.stopPropagation()
      e.preventDefault()
      this.select()
      this.$element.focus()
    }

  , mouseenter: function (e) {
      this.mousedover = true
      this.$menu.find('.active').removeClass('active')
      $(e.currentTarget).addClass('active')
    }

  , mouseleave: function (e) {
      this.mousedover = false
      if (!this.focused && this.shown) this.hide()
    }

  }


  /* TYPEAHEAD PLUGIN DEFINITION
   * =========================== */

  var old = $.fn.typeahead

  $.fn.typeahead = function (option) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('typeahead')
        , options = typeof option == 'object' && option
      if (!data) $this.data('typeahead', (data = new Typeahead(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.typeahead.defaults = {
    source: []
  , items: 8
  , menu: '<ul class="typeahead dropdown-menu"></ul>'
  , item: '<li><a href="#"></a></li>'
  , minLength: 1
  }

  $.fn.typeahead.Constructor = Typeahead


 /* TYPEAHEAD NO CONFLICT
  * =================== */

  $.fn.typeahead.noConflict = function () {
    $.fn.typeahead = old
    return this
  }


 /* TYPEAHEAD DATA-API
  * ================== */

  $(document).on('focus.typeahead.data-api', '[data-provide="typeahead"]', function (e) {
    var $this = $(this)
    if ($this.data('typeahead')) return
    $this.typeahead($this.data())
  })

}(window.jQuery);



// FROM: assets/js/bootstrap-affix.js
/* ==========================================================
 * bootstrap-affix.js v2.3.1
 * http://twitter.github.com/bootstrap/javascript.html#affix
 * ==========================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */


!function ($) {

  "use strict"; // jshint ;_;


 /* AFFIX CLASS DEFINITION
  * ====================== */

  var Affix = function (element, options) {
    this.options = $.extend({}, $.fn.affix.defaults, options)
    this.$window = $(window)
      .on('scroll.affix.data-api', $.proxy(this.checkPosition, this))
      .on('click.affix.data-api',  $.proxy(function () { setTimeout($.proxy(this.checkPosition, this), 1) }, this))
    this.$element = $(element)
    this.checkPosition()
  }

  Affix.prototype.checkPosition = function () {
    if (!this.$element.is(':visible')) return

    var scrollHeight = $(document).height()
      , scrollTop = this.$window.scrollTop()
      , position = this.$element.offset()
      , offset = this.options.offset
      , offsetBottom = offset.bottom
      , offsetTop = offset.top
      , reset = 'affix affix-top affix-bottom'
      , affix

    if (typeof offset != 'object') offsetBottom = offsetTop = offset
    if (typeof offsetTop == 'function') offsetTop = offset.top()
    if (typeof offsetBottom == 'function') offsetBottom = offset.bottom()

    affix = this.unpin != null && (scrollTop + this.unpin <= position.top) ?
      false    : offsetBottom != null && (position.top + this.$element.height() >= scrollHeight - offsetBottom) ?
      'bottom' : offsetTop != null && scrollTop <= offsetTop ?
      'top'    : false

    if (this.affixed === affix) return

    this.affixed = affix
    this.unpin = affix == 'bottom' ? position.top - scrollTop : null

    this.$element.removeClass(reset).addClass('affix' + (affix ? '-' + affix : ''))
  }


 /* AFFIX PLUGIN DEFINITION
  * ======================= */

  var old = $.fn.affix

  $.fn.affix = function (option) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('affix')
        , options = typeof option == 'object' && option
      if (!data) $this.data('affix', (data = new Affix(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.affix.Constructor = Affix

  $.fn.affix.defaults = {
    offset: 0
  }


 /* AFFIX NO CONFLICT
  * ================= */

  $.fn.affix.noConflict = function () {
    $.fn.affix = old
    return this
  }


 /* AFFIX DATA-API
  * ============== */

  $(window).on('load', function () {
    $('[data-spy="affix"]').each(function () {
      var $spy = $(this)
        , data = $spy.data()

      data.offset = data.offset || {}

      data.offsetBottom && (data.offset.bottom = data.offsetBottom)
      data.offsetTop && (data.offset.top = data.offsetTop)

      $spy.affix(data)
    })
  })


}(window.jQuery);


// FROM: assets/js/holder/holder.js
/*

Holder - 1.9 - client side image placeholders
(c) 2012-2013 Ivan Malopinsky / http://imsky.co

Provided under the Apache 2.0 License: http://www.apache.org/licenses/LICENSE-2.0
Commercial use requires attribution.

*/

var Holder = Holder || {};
(function (app, win) {

var preempted = false,
fallback = false,
canvas = document.createElement('canvas');

//getElementsByClassName polyfill
document.getElementsByClassName||(document.getElementsByClassName=function(e){var t=document,n,r,i,s=[];if(t.querySelectorAll)return t.querySelectorAll("."+e);if(t.evaluate){r=".//*[contains(concat(' ', @class, ' '), ' "+e+" ')]",n=t.evaluate(r,t,null,0,null);while(i=n.iterateNext())s.push(i)}else{n=t.getElementsByTagName("*"),r=new RegExp("(^|\\s)"+e+"(\\s|$)");for(i=0;i<n.length;i++)r.test(n[i].className)&&s.push(n[i])}return s})

//getComputedStyle polyfill
window.getComputedStyle||(window.getComputedStyle=function(e,t){return this.el=e,this.getPropertyValue=function(t){var n=/(\-([a-z]){1})/g;return t=="float"&&(t="styleFloat"),n.test(t)&&(t=t.replace(n,function(){return arguments[2].toUpperCase()})),e.currentStyle[t]?e.currentStyle[t]:null},this})

//http://javascript.nwbox.com/ContentLoaded by Diego Perini with modifications
function contentLoaded(n,t){var l="complete",s="readystatechange",u=!1,h=u,c=!0,i=n.document,a=i.documentElement,e=i.addEventListener?"addEventListener":"attachEvent",v=i.addEventListener?"removeEventListener":"detachEvent",f=i.addEventListener?"":"on",r=function(e){(e.type!=s||i.readyState==l)&&((e.type=="load"?n:i)[v](f+e.type,r,u),!h&&(h=!0)&&t.call(n,null))},o=function(){try{a.doScroll("left")}catch(n){setTimeout(o,50);return}r("poll")};if(i.readyState==l)t.call(n,"lazy");else{if(i.createEventObject&&a.doScroll){try{c=!n.frameElement}catch(y){}c&&o()}i[e](f+"DOMContentLoaded",r,u),i[e](f+s,r,u),n[e](f+"load",r,u)}};

//https://gist.github.com/991057 by Jed Schmidt with modifications
function selector(a){
  a=a.match(/^(\W)?(.*)/);var b=document["getElement"+(a[1]?a[1]=="#"?"ById":"sByClassName":"sByTagName")](a[2]);
	var ret=[];	b!=null&&(b.length?ret=b:b.length==0?ret=b:ret=[b]);	return ret;
}

//shallow object property extend
function extend(a,b){var c={};for(var d in a)c[d]=a[d];for(var e in b)c[e]=b[e];return c}

//hasOwnProperty polyfill
if (!Object.prototype.hasOwnProperty)
	Object.prototype.hasOwnProperty = function(prop) {
		var proto = this.__proto__ || this.constructor.prototype;
		return (prop in this) && (!(prop in proto) || proto[prop] !== this[prop]);
	}

function text_size(width, height, template) {
	var dimension_arr = [height, width].sort();
	var maxFactor = Math.round(dimension_arr[1] / 16),
		minFactor = Math.round(dimension_arr[0] / 16);
	var text_height = Math.max(template.size, maxFactor);
	return {
		height: text_height
	}
}

function draw(ctx, dimensions, template, ratio) {
	var ts = text_size(dimensions.width, dimensions.height, template);
	var text_height = ts.height;
	var width = dimensions.width * ratio, height = dimensions.height * ratio;
	var font = template.font ? template.font : "sans-serif";
	canvas.width = width;
	canvas.height = height;
	ctx.textAlign = "center";
	ctx.textBaseline = "middle";
	ctx.fillStyle = template.background;
	ctx.fillRect(0, 0, width, height);
	ctx.fillStyle = template.foreground;
	ctx.font = "bold " + text_height + "px "+font;
	var text = template.text ? template.text : (dimensions.width + "x" + dimensions.height);
	if (ctx.measureText(text).width / width > 1) {
		text_height = template.size / (ctx.measureText(text).width / width);
	}
	//Resetting font size if necessary
	ctx.font = "bold " + (text_height * ratio) + "px "+font;
	ctx.fillText(text, (width / 2), (height / 2), width);
	return canvas.toDataURL("image/png");
}

function render(mode, el, holder, src) {
	var dimensions = holder.dimensions,
		theme = holder.theme,
		text = holder.text ? decodeURIComponent(holder.text) : holder.text;
	var dimensions_caption = dimensions.width + "x" + dimensions.height;
	theme = (text ? extend(theme, {	text: text }) : theme);
	theme = (holder.font ? extend(theme, {font: holder.font}) : theme);

	var ratio = 1;
	if(window.devicePixelRatio && window.devicePixelRatio > 1){
		ratio = window.devicePixelRatio;
	}

	if (mode == "image") {
		el.setAttribute("data-src", src);
		el.setAttribute("alt", text ? text : theme.text ? theme.text + " [" + dimensions_caption + "]" : dimensions_caption);

		if(fallback || !holder.auto){
		    el.style.width = dimensions.width + "px";
		    el.style.height = dimensions.height + "px";
		}

		if (fallback) {
			el.style.backgroundColor = theme.background;

		}
		else{
			el.setAttribute("src", draw(ctx, dimensions, theme, ratio));
		}
	} else {
		if (!fallback) {
			el.style.backgroundImage = "url(" + draw(ctx, dimensions, theme, ratio) + ")";
			el.style.backgroundSize = dimensions.width+"px "+dimensions.height+"px";
		}
	}
};

function fluid(el, holder, src) {
	var dimensions = holder.dimensions,
		theme = holder.theme,
		text = holder.text;
	var dimensions_caption = dimensions.width + "x" + dimensions.height;
	theme = (text ? extend(theme, {
		text: text
	}) : theme);

	var fluid = document.createElement("div");

	fluid.style.backgroundColor = theme.background;
	fluid.style.color = theme.foreground;
	fluid.className = el.className + " holderjs-fluid";
	fluid.style.width = holder.dimensions.width + (holder.dimensions.width.indexOf("%")>0?"":"px");
	fluid.style.height = holder.dimensions.height + (holder.dimensions.height.indexOf("%")>0?"":"px");
	fluid.id = el.id;

	el.style.width=0;
	el.style.height=0;

	if (theme.text) {
		fluid.appendChild(document.createTextNode(theme.text))
	} else {
		fluid.appendChild(document.createTextNode(dimensions_caption))
		fluid_images.push(fluid);
		setTimeout(fluid_update, 0);
	}

	el.parentNode.insertBefore(fluid, el.nextSibling)

	if(window.jQuery){
	    jQuery(function($){
		$(el).on("load", function(){
		   el.style.width = fluid.style.width;
		   el.style.height = fluid.style.height;
		   $(el).show();
		   $(fluid).remove();
		});
	    })
	}
}

function fluid_update() {
	for (i in fluid_images) {
		if(!fluid_images.hasOwnProperty(i)) continue;
		var el = fluid_images[i],
			label = el.firstChild;

		el.style.lineHeight = el.offsetHeight+"px";
		label.data = el.offsetWidth + "x" + el.offsetHeight;
	}
}

function parse_flags(flags, options) {

	var ret = {
		theme: settings.themes.gray
	}, render = false;

	for (sl = flags.length, j = 0; j < sl; j++) {
		var flag = flags[j];
		if (app.flags.dimensions.match(flag)) {
			render = true;
			ret.dimensions = app.flags.dimensions.output(flag);
		} else if (app.flags.fluid.match(flag)) {
			render = true;
			ret.dimensions = app.flags.fluid.output(flag);
			ret.fluid = true;
		} else if (app.flags.colors.match(flag)) {
			ret.theme = app.flags.colors.output(flag);
		} else if (options.themes[flag]) {
			//If a theme is specified, it will override custom colors
			ret.theme = options.themes[flag];
		} else if (app.flags.text.match(flag)) {
			ret.text = app.flags.text.output(flag);
		} else if(app.flags.font.match(flag)){
			ret.font = app.flags.font.output(flag);
		}
		else if(app.flags.auto.match(flag)){
			ret.auto = true;
		}
	}

	return render ? ret : false;

};

if (!canvas.getContext) {
	fallback = true;
} else {
	if (canvas.toDataURL("image/png")
		.indexOf("data:image/png") < 0) {
		//Android doesn't support data URI
		fallback = true;
	} else {
		var ctx = canvas.getContext("2d");
	}
}

var fluid_images = [];

var settings = {
	domain: "holder.js",
	images: "img",
	bgnodes: ".holderjs",
	themes: {
		"gray": {
			background: "#eee",
			foreground: "#aaa",
			size: 12
		},
			"social": {
			background: "#3a5a97",
			foreground: "#fff",
			size: 12
		},
			"industrial": {
			background: "#434A52",
			foreground: "#C2F200",
			size: 12
		}
	},
	stylesheet: ".holderjs-fluid {font-size:16px;font-weight:bold;text-align:center;font-family:sans-serif;margin:0}"
};


app.flags = {
	dimensions: {
		regex: /^(\d+)x(\d+)$/,
		output: function (val) {
			var exec = this.regex.exec(val);
			return {
				width: +exec[1],
				height: +exec[2]
			}
		}
	},
	fluid: {
		regex: /^([0-9%]+)x([0-9%]+)$/,
		output: function (val) {
			var exec = this.regex.exec(val);
			return {
				width: exec[1],
				height: exec[2]
			}
		}
	},
	colors: {
		regex: /#([0-9a-f]{3,})\:#([0-9a-f]{3,})/i,
		output: function (val) {
			var exec = this.regex.exec(val);
			return {
				size: settings.themes.gray.size,
				foreground: "#" + exec[2],
				background: "#" + exec[1]
			}
		}
	},
	text: {
		regex: /text\:(.*)/,
		output: function (val) {
			return this.regex.exec(val)[1];
		}
	},
	font: {
	    regex: /font\:(.*)/,
	    output: function(val){
		return this.regex.exec(val)[1];
	    }
	},
	auto: {
	    regex: /^auto$/
	}
}

for (var flag in app.flags) {
	if(!app.flags.hasOwnProperty(flag)) continue;
	app.flags[flag].match = function (val) {
		return val.match(this.regex)
	}
}

app.add_theme = function (name, theme) {
	name != null && theme != null && (settings.themes[name] = theme);
	return app;
};

app.add_image = function (src, el) {
	var node = selector(el);
	if (node.length) {
		for (var i = 0, l = node.length; i < l; i++) {
			var img = document.createElement("img")
			img.setAttribute("data-src", src);
			node[i].appendChild(img);
		}
	}
	return app;
};

app.run = function (o) {
	var options = extend(settings, o), images = [];

	if(options.images instanceof window.NodeList){
	    imageNodes = options.images;
	}
	else if(options.images instanceof window.Node){
	    imageNodes = [options.images];
	}
	else{
	    imageNodes = selector(options.images);
	}

	if(options.elements instanceof window.NodeList){
	    bgnodes = options.bgnodes;
	}
	else if(options.bgnodes instanceof window.Node){
	    bgnodes = [options.bgnodes];
	}
	else{
	    bgnodes = selector(options.bgnodes);
	}

	preempted = true;

	for (i = 0, l = imageNodes.length; i < l; i++) images.push(imageNodes[i]);

	var holdercss = document.getElementById("holderjs-style");

	if(!holdercss){
	    holdercss = document.createElement("style");
	    holdercss.setAttribute("id", "holderjs-style");
	    holdercss.type = "text/css";
	    document.getElementsByTagName("head")[0].appendChild(holdercss);
	}

	if(holdercss.styleSheet){
	    holdercss.styleSheet += options.stylesheet;
	}
	else{
	    holdercss.textContent+= options.stylesheet;
	}

	var cssregex = new RegExp(options.domain + "\/(.*?)\"?\\)");

	for (var l = bgnodes.length, i = 0; i < l; i++) {
		var src = window.getComputedStyle(bgnodes[i], null)
			.getPropertyValue("background-image");
		var flags = src.match(cssregex);
		if (flags) {
			var holder = parse_flags(flags[1].split("/"), options);
			if (holder) {
				render("background", bgnodes[i], holder, src);
			}
		}
	}

	for (var l = images.length, i = 0; i < l; i++) {
		var src = images[i].getAttribute("src") || images[i].getAttribute("data-src");
		if (src != null && src.indexOf(options.domain) >= 0) {
			var holder = parse_flags(src.substr(src.lastIndexOf(options.domain) + options.domain.length + 1)
				.split("/"), options);
			if (holder) {
				if (holder.fluid) {
					fluid(images[i], holder, src);
				} else {
					render("image", images[i], holder, src);
				}
			}
		}
	}
	return app;
};

contentLoaded(win, function () {
	if (window.addEventListener) {
		window.addEventListener("resize", fluid_update, false);
		window.addEventListener("orientationchange", fluid_update, false);
	} else {
		window.attachEvent("onresize", fluid_update)
	}
	preempted || app.run();
});

if ( typeof define === "function" && define.amd ) {
	define( "Holder", [], function () { return app; } );
}

})(Holder, window);


// FROM: assets/js/google-code-prettify/prettify.js
var q=null;window.PR_SHOULD_USE_CONTINUATION=!0;
(function(){function L(a){function m(a){var f=a.charCodeAt(0);if(f!==92)return f;var b=a.charAt(1);return(f=r[b])?f:"0"<=b&&b<="7"?parseInt(a.substring(1),8):b==="u"||b==="x"?parseInt(a.substring(2),16):a.charCodeAt(1)}function e(a){if(a<32)return(a<16?"\\x0":"\\x")+a.toString(16);a=String.fromCharCode(a);if(a==="\\"||a==="-"||a==="["||a==="]")a="\\"+a;return a}function h(a){for(var f=a.substring(1,a.length-1).match(/\\u[\dA-Fa-f]{4}|\\x[\dA-Fa-f]{2}|\\[0-3][0-7]{0,2}|\\[0-7]{1,2}|\\[\S\s]|[^\\]/g),a=
[],b=[],o=f[0]==="^",c=o?1:0,i=f.length;c<i;++c){var j=f[c];if(/\\[bdsw]/i.test(j))a.push(j);else{var j=m(j),d;c+2<i&&"-"===f[c+1]?(d=m(f[c+2]),c+=2):d=j;b.push([j,d]);d<65||j>122||(d<65||j>90||b.push([Math.max(65,j)|32,Math.min(d,90)|32]),d<97||j>122||b.push([Math.max(97,j)&-33,Math.min(d,122)&-33]))}}b.sort(function(a,f){return a[0]-f[0]||f[1]-a[1]});f=[];j=[NaN,NaN];for(c=0;c<b.length;++c)i=b[c],i[0]<=j[1]+1?j[1]=Math.max(j[1],i[1]):f.push(j=i);b=["["];o&&b.push("^");b.push.apply(b,a);for(c=0;c<
f.length;++c)i=f[c],b.push(e(i[0])),i[1]>i[0]&&(i[1]+1>i[0]&&b.push("-"),b.push(e(i[1])));b.push("]");return b.join("")}function y(a){for(var f=a.source.match(/\[(?:[^\\\]]|\\[\S\s])*]|\\u[\dA-Fa-f]{4}|\\x[\dA-Fa-f]{2}|\\\d+|\\[^\dux]|\(\?[!:=]|[()^]|[^()[\\^]+/g),b=f.length,d=[],c=0,i=0;c<b;++c){var j=f[c];j==="("?++i:"\\"===j.charAt(0)&&(j=+j.substring(1))&&j<=i&&(d[j]=-1)}for(c=1;c<d.length;++c)-1===d[c]&&(d[c]=++t);for(i=c=0;c<b;++c)j=f[c],j==="("?(++i,d[i]===void 0&&(f[c]="(?:")):"\\"===j.charAt(0)&&
(j=+j.substring(1))&&j<=i&&(f[c]="\\"+d[i]);for(i=c=0;c<b;++c)"^"===f[c]&&"^"!==f[c+1]&&(f[c]="");if(a.ignoreCase&&s)for(c=0;c<b;++c)j=f[c],a=j.charAt(0),j.length>=2&&a==="["?f[c]=h(j):a!=="\\"&&(f[c]=j.replace(/[A-Za-z]/g,function(a){a=a.charCodeAt(0);return"["+String.fromCharCode(a&-33,a|32)+"]"}));return f.join("")}for(var t=0,s=!1,l=!1,p=0,d=a.length;p<d;++p){var g=a[p];if(g.ignoreCase)l=!0;else if(/[a-z]/i.test(g.source.replace(/\\u[\da-f]{4}|\\x[\da-f]{2}|\\[^UXux]/gi,""))){s=!0;l=!1;break}}for(var r=
{b:8,t:9,n:10,v:11,f:12,r:13},n=[],p=0,d=a.length;p<d;++p){g=a[p];if(g.global||g.multiline)throw Error(""+g);n.push("(?:"+y(g)+")")}return RegExp(n.join("|"),l?"gi":"g")}function M(a){function m(a){switch(a.nodeType){case 1:if(e.test(a.className))break;for(var g=a.firstChild;g;g=g.nextSibling)m(g);g=a.nodeName;if("BR"===g||"LI"===g)h[s]="\n",t[s<<1]=y++,t[s++<<1|1]=a;break;case 3:case 4:g=a.nodeValue,g.length&&(g=p?g.replace(/\r\n?/g,"\n"):g.replace(/[\t\n\r ]+/g," "),h[s]=g,t[s<<1]=y,y+=g.length,
t[s++<<1|1]=a)}}var e=/(?:^|\s)nocode(?:\s|$)/,h=[],y=0,t=[],s=0,l;a.currentStyle?l=a.currentStyle.whiteSpace:window.getComputedStyle&&(l=document.defaultView.getComputedStyle(a,q).getPropertyValue("white-space"));var p=l&&"pre"===l.substring(0,3);m(a);return{a:h.join("").replace(/\n$/,""),c:t}}function B(a,m,e,h){m&&(a={a:m,d:a},e(a),h.push.apply(h,a.e))}function x(a,m){function e(a){for(var l=a.d,p=[l,"pln"],d=0,g=a.a.match(y)||[],r={},n=0,z=g.length;n<z;++n){var f=g[n],b=r[f],o=void 0,c;if(typeof b===
"string")c=!1;else{var i=h[f.charAt(0)];if(i)o=f.match(i[1]),b=i[0];else{for(c=0;c<t;++c)if(i=m[c],o=f.match(i[1])){b=i[0];break}o||(b="pln")}if((c=b.length>=5&&"lang-"===b.substring(0,5))&&!(o&&typeof o[1]==="string"))c=!1,b="src";c||(r[f]=b)}i=d;d+=f.length;if(c){c=o[1];var j=f.indexOf(c),k=j+c.length;o[2]&&(k=f.length-o[2].length,j=k-c.length);b=b.substring(5);B(l+i,f.substring(0,j),e,p);B(l+i+j,c,C(b,c),p);B(l+i+k,f.substring(k),e,p)}else p.push(l+i,b)}a.e=p}var h={},y;(function(){for(var e=a.concat(m),
l=[],p={},d=0,g=e.length;d<g;++d){var r=e[d],n=r[3];if(n)for(var k=n.length;--k>=0;)h[n.charAt(k)]=r;r=r[1];n=""+r;p.hasOwnProperty(n)||(l.push(r),p[n]=q)}l.push(/[\S\s]/);y=L(l)})();var t=m.length;return e}function u(a){var m=[],e=[];a.tripleQuotedStrings?m.push(["str",/^(?:'''(?:[^'\\]|\\[\S\s]|''?(?=[^']))*(?:'''|$)|"""(?:[^"\\]|\\[\S\s]|""?(?=[^"]))*(?:"""|$)|'(?:[^'\\]|\\[\S\s])*(?:'|$)|"(?:[^"\\]|\\[\S\s])*(?:"|$))/,q,"'\""]):a.multiLineStrings?m.push(["str",/^(?:'(?:[^'\\]|\\[\S\s])*(?:'|$)|"(?:[^"\\]|\\[\S\s])*(?:"|$)|`(?:[^\\`]|\\[\S\s])*(?:`|$))/,
q,"'\"`"]):m.push(["str",/^(?:'(?:[^\n\r'\\]|\\.)*(?:'|$)|"(?:[^\n\r"\\]|\\.)*(?:"|$))/,q,"\"'"]);a.verbatimStrings&&e.push(["str",/^@"(?:[^"]|"")*(?:"|$)/,q]);var h=a.hashComments;h&&(a.cStyleComments?(h>1?m.push(["com",/^#(?:##(?:[^#]|#(?!##))*(?:###|$)|.*)/,q,"#"]):m.push(["com",/^#(?:(?:define|elif|else|endif|error|ifdef|include|ifndef|line|pragma|undef|warning)\b|[^\n\r]*)/,q,"#"]),e.push(["str",/^<(?:(?:(?:\.\.\/)*|\/?)(?:[\w-]+(?:\/[\w-]+)+)?[\w-]+\.h|[a-z]\w*)>/,q])):m.push(["com",/^#[^\n\r]*/,
q,"#"]));a.cStyleComments&&(e.push(["com",/^\/\/[^\n\r]*/,q]),e.push(["com",/^\/\*[\S\s]*?(?:\*\/|$)/,q]));a.regexLiterals&&e.push(["lang-regex",/^(?:^^\.?|[!+-]|!=|!==|#|%|%=|&|&&|&&=|&=|\(|\*|\*=|\+=|,|-=|->|\/|\/=|:|::|;|<|<<|<<=|<=|=|==|===|>|>=|>>|>>=|>>>|>>>=|[?@[^]|\^=|\^\^|\^\^=|{|\||\|=|\|\||\|\|=|~|break|case|continue|delete|do|else|finally|instanceof|return|throw|try|typeof)\s*(\/(?=[^*/])(?:[^/[\\]|\\[\S\s]|\[(?:[^\\\]]|\\[\S\s])*(?:]|$))+\/)/]);(h=a.types)&&e.push(["typ",h]);a=(""+a.keywords).replace(/^ | $/g,
"");a.length&&e.push(["kwd",RegExp("^(?:"+a.replace(/[\s,]+/g,"|")+")\\b"),q]);m.push(["pln",/^\s+/,q," \r\n\t\xa0"]);e.push(["lit",/^@[$_a-z][\w$@]*/i,q],["typ",/^(?:[@_]?[A-Z]+[a-z][\w$@]*|\w+_t\b)/,q],["pln",/^[$_a-z][\w$@]*/i,q],["lit",/^(?:0x[\da-f]+|(?:\d(?:_\d+)*\d*(?:\.\d*)?|\.\d\+)(?:e[+-]?\d+)?)[a-z]*/i,q,"0123456789"],["pln",/^\\[\S\s]?/,q],["pun",/^.[^\s\w"-$'./@\\`]*/,q]);return x(m,e)}function D(a,m){function e(a){switch(a.nodeType){case 1:if(k.test(a.className))break;if("BR"===a.nodeName)h(a),
a.parentNode&&a.parentNode.removeChild(a);else for(a=a.firstChild;a;a=a.nextSibling)e(a);break;case 3:case 4:if(p){var b=a.nodeValue,d=b.match(t);if(d){var c=b.substring(0,d.index);a.nodeValue=c;(b=b.substring(d.index+d[0].length))&&a.parentNode.insertBefore(s.createTextNode(b),a.nextSibling);h(a);c||a.parentNode.removeChild(a)}}}}function h(a){function b(a,d){var e=d?a.cloneNode(!1):a,f=a.parentNode;if(f){var f=b(f,1),g=a.nextSibling;f.appendChild(e);for(var h=g;h;h=g)g=h.nextSibling,f.appendChild(h)}return e}
for(;!a.nextSibling;)if(a=a.parentNode,!a)return;for(var a=b(a.nextSibling,0),e;(e=a.parentNode)&&e.nodeType===1;)a=e;d.push(a)}var k=/(?:^|\s)nocode(?:\s|$)/,t=/\r\n?|\n/,s=a.ownerDocument,l;a.currentStyle?l=a.currentStyle.whiteSpace:window.getComputedStyle&&(l=s.defaultView.getComputedStyle(a,q).getPropertyValue("white-space"));var p=l&&"pre"===l.substring(0,3);for(l=s.createElement("LI");a.firstChild;)l.appendChild(a.firstChild);for(var d=[l],g=0;g<d.length;++g)e(d[g]);m===(m|0)&&d[0].setAttribute("value",
m);var r=s.createElement("OL");r.className="linenums";for(var n=Math.max(0,m-1|0)||0,g=0,z=d.length;g<z;++g)l=d[g],l.className="L"+(g+n)%10,l.firstChild||l.appendChild(s.createTextNode("\xa0")),r.appendChild(l);a.appendChild(r)}function k(a,m){for(var e=m.length;--e>=0;){var h=m[e];A.hasOwnProperty(h)?window.console&&console.warn("cannot override language handler %s",h):A[h]=a}}function C(a,m){if(!a||!A.hasOwnProperty(a))a=/^\s*</.test(m)?"default-markup":"default-code";return A[a]}function E(a){var m=
a.g;try{var e=M(a.h),h=e.a;a.a=h;a.c=e.c;a.d=0;C(m,h)(a);var k=/\bMSIE\b/.test(navigator.userAgent),m=/\n/g,t=a.a,s=t.length,e=0,l=a.c,p=l.length,h=0,d=a.e,g=d.length,a=0;d[g]=s;var r,n;for(n=r=0;n<g;)d[n]!==d[n+2]?(d[r++]=d[n++],d[r++]=d[n++]):n+=2;g=r;for(n=r=0;n<g;){for(var z=d[n],f=d[n+1],b=n+2;b+2<=g&&d[b+1]===f;)b+=2;d[r++]=z;d[r++]=f;n=b}for(d.length=r;h<p;){var o=l[h+2]||s,c=d[a+2]||s,b=Math.min(o,c),i=l[h+1],j;if(i.nodeType!==1&&(j=t.substring(e,b))){k&&(j=j.replace(m,"\r"));i.nodeValue=
j;var u=i.ownerDocument,v=u.createElement("SPAN");v.className=d[a+1];var x=i.parentNode;x.replaceChild(v,i);v.appendChild(i);e<o&&(l[h+1]=i=u.createTextNode(t.substring(b,o)),x.insertBefore(i,v.nextSibling))}e=b;e>=o&&(h+=2);e>=c&&(a+=2)}}catch(w){"console"in window&&console.log(w&&w.stack?w.stack:w)}}var v=["break,continue,do,else,for,if,return,while"],w=[[v,"auto,case,char,const,default,double,enum,extern,float,goto,int,long,register,short,signed,sizeof,static,struct,switch,typedef,union,unsigned,void,volatile"],
"catch,class,delete,false,import,new,operator,private,protected,public,this,throw,true,try,typeof"],F=[w,"alignof,align_union,asm,axiom,bool,concept,concept_map,const_cast,constexpr,decltype,dynamic_cast,explicit,export,friend,inline,late_check,mutable,namespace,nullptr,reinterpret_cast,static_assert,static_cast,template,typeid,typename,using,virtual,where"],G=[w,"abstract,boolean,byte,extends,final,finally,implements,import,instanceof,null,native,package,strictfp,super,synchronized,throws,transient"],
H=[G,"as,base,by,checked,decimal,delegate,descending,dynamic,event,fixed,foreach,from,group,implicit,in,interface,internal,into,is,lock,object,out,override,orderby,params,partial,readonly,ref,sbyte,sealed,stackalloc,string,select,uint,ulong,unchecked,unsafe,ushort,var"],w=[w,"debugger,eval,export,function,get,null,set,undefined,var,with,Infinity,NaN"],I=[v,"and,as,assert,class,def,del,elif,except,exec,finally,from,global,import,in,is,lambda,nonlocal,not,or,pass,print,raise,try,with,yield,False,True,None"],
J=[v,"alias,and,begin,case,class,def,defined,elsif,end,ensure,false,in,module,next,nil,not,or,redo,rescue,retry,self,super,then,true,undef,unless,until,when,yield,BEGIN,END"],v=[v,"case,done,elif,esac,eval,fi,function,in,local,set,then,until"],K=/^(DIR|FILE|vector|(de|priority_)?queue|list|stack|(const_)?iterator|(multi)?(set|map)|bitset|u?(int|float)\d*)/,N=/\S/,O=u({keywords:[F,H,w,"caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END"+
I,J,v],hashComments:!0,cStyleComments:!0,multiLineStrings:!0,regexLiterals:!0}),A={};k(O,["default-code"]);k(x([],[["pln",/^[^<?]+/],["dec",/^<!\w[^>]*(?:>|$)/],["com",/^<\!--[\S\s]*?(?:--\>|$)/],["lang-",/^<\?([\S\s]+?)(?:\?>|$)/],["lang-",/^<%([\S\s]+?)(?:%>|$)/],["pun",/^(?:<[%?]|[%?]>)/],["lang-",/^<xmp\b[^>]*>([\S\s]+?)<\/xmp\b[^>]*>/i],["lang-js",/^<script\b[^>]*>([\S\s]*?)(<\/script\b[^>]*>)/i],["lang-css",/^<style\b[^>]*>([\S\s]*?)(<\/style\b[^>]*>)/i],["lang-in.tag",/^(<\/?[a-z][^<>]*>)/i]]),
["default-markup","htm","html","mxml","xhtml","xml","xsl"]);k(x([["pln",/^\s+/,q," \t\r\n"],["atv",/^(?:"[^"]*"?|'[^']*'?)/,q,"\"'"]],[["tag",/^^<\/?[a-z](?:[\w-.:]*\w)?|\/?>$/i],["atn",/^(?!style[\s=]|on)[a-z](?:[\w:-]*\w)?/i],["lang-uq.val",/^=\s*([^\s"'>]*(?:[^\s"'/>]|\/(?=\s)))/],["pun",/^[/<->]+/],["lang-js",/^on\w+\s*=\s*"([^"]+)"/i],["lang-js",/^on\w+\s*=\s*'([^']+)'/i],["lang-js",/^on\w+\s*=\s*([^\s"'>]+)/i],["lang-css",/^style\s*=\s*"([^"]+)"/i],["lang-css",/^style\s*=\s*'([^']+)'/i],["lang-css",
/^style\s*=\s*([^\s"'>]+)/i]]),["in.tag"]);k(x([],[["atv",/^[\S\s]+/]]),["uq.val"]);k(u({keywords:F,hashComments:!0,cStyleComments:!0,types:K}),["c","cc","cpp","cxx","cyc","m"]);k(u({keywords:"null,true,false"}),["json"]);k(u({keywords:H,hashComments:!0,cStyleComments:!0,verbatimStrings:!0,types:K}),["cs"]);k(u({keywords:G,cStyleComments:!0}),["java"]);k(u({keywords:v,hashComments:!0,multiLineStrings:!0}),["bsh","csh","sh"]);k(u({keywords:I,hashComments:!0,multiLineStrings:!0,tripleQuotedStrings:!0}),
["cv","py"]);k(u({keywords:"caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END",hashComments:!0,multiLineStrings:!0,regexLiterals:!0}),["perl","pl","pm"]);k(u({keywords:J,hashComments:!0,multiLineStrings:!0,regexLiterals:!0}),["rb"]);k(u({keywords:w,cStyleComments:!0,regexLiterals:!0}),["js"]);k(u({keywords:"all,and,by,catch,class,else,extends,false,finally,for,if,in,is,isnt,loop,new,no,not,null,of,off,on,or,return,super,then,true,try,unless,until,when,while,yes",
hashComments:3,cStyleComments:!0,multilineStrings:!0,tripleQuotedStrings:!0,regexLiterals:!0}),["coffee"]);k(x([],[["str",/^[\S\s]+/]]),["regex"]);window.prettyPrintOne=function(a,m,e){var h=document.createElement("PRE");h.innerHTML=a;e&&D(h,e);E({g:m,i:e,h:h});return h.innerHTML};window.prettyPrint=function(a){function m(){for(var e=window.PR_SHOULD_USE_CONTINUATION?l.now()+250:Infinity;p<h.length&&l.now()<e;p++){var n=h[p],k=n.className;if(k.indexOf("prettyprint")>=0){var k=k.match(g),f,b;if(b=
!k){b=n;for(var o=void 0,c=b.firstChild;c;c=c.nextSibling)var i=c.nodeType,o=i===1?o?b:c:i===3?N.test(c.nodeValue)?b:o:o;b=(f=o===b?void 0:o)&&"CODE"===f.tagName}b&&(k=f.className.match(g));k&&(k=k[1]);b=!1;for(o=n.parentNode;o;o=o.parentNode)if((o.tagName==="pre"||o.tagName==="code"||o.tagName==="xmp")&&o.className&&o.className.indexOf("prettyprint")>=0){b=!0;break}b||((b=(b=n.className.match(/\blinenums\b(?::(\d+))?/))?b[1]&&b[1].length?+b[1]:!0:!1)&&D(n,b),d={g:k,h:n,i:b},E(d))}}p<h.length?setTimeout(m,
250):a&&a()}for(var e=[document.getElementsByTagName("pre"),document.getElementsByTagName("code"),document.getElementsByTagName("xmp")],h=[],k=0;k<e.length;++k)for(var t=0,s=e[k].length;t<s;++t)h.push(e[k][t]);var e=q,l=Date;l.now||(l={now:function(){return+new Date}});var p=0,d,g=/\blang(?:uage)?-([\w.]+)(?!\S)/;m()};window.PR={createSimpleLexer:x,registerLangHandler:k,sourceDecorator:u,PR_ATTRIB_NAME:"atn",PR_ATTRIB_VALUE:"atv",PR_COMMENT:"com",PR_DECLARATION:"dec",PR_KEYWORD:"kwd",PR_LITERAL:"lit",
PR_NOCODE:"nocode",PR_PLAIN:"pln",PR_PUNCTUATION:"pun",PR_SOURCE:"src",PR_STRING:"str",PR_TAG:"tag",PR_TYPE:"typ"}})();



// FROM: assets/js/application.js
// NOTICE!! DO NOT USE ANY OF THIS JAVASCRIPT
// IT'S ALL JUST JUNK FOR OUR DOCS!
// ++++++++++++++++++++++++++++++++++++++++++

!function ($) {

  $(function(){

    var $window = $(window)

    // Disable certain links in docs
    $('section [href^=#]').click(function (e) {
      e.preventDefault()
    })

    // side bar
    setTimeout(function () {
      $('.bs-docs-sidenav').affix({
        offset: {
          top: function () { return $window.width() <= 980 ? 290 : 210 }
        , bottom: 270
        }
      })
    }, 100)

    // make code pretty
    window.prettyPrint && prettyPrint()

    // add-ons
    $('.add-on :checkbox').on('click', function () {
      var $this = $(this)
        , method = $this.attr('checked') ? 'addClass' : 'removeClass'
      $(this).parents('.add-on')[method]('active')
    })

    // add tipsies to grid for scaffolding
    if ($('#gridSystem').length) {
      $('#gridSystem').tooltip({
          selector: '.show-grid > [class*="span"]'
        , title: function () { return $(this).width() + 'px' }
      })
    }

    // tooltip demo
    $('.tooltip-demo').tooltip({
      selector: "a[data-toggle=tooltip]"
    })

    $('.tooltip-test').tooltip()
    $('.popover-test').popover()

    // popover demo
    $("a[data-toggle=popover]")
      .popover()
      .click(function(e) {
        e.preventDefault()
      })

    // button state demo
    $('#fat-btn')
      .click(function () {
        var btn = $(this)
        btn.button('loading')
        setTimeout(function () {
          btn.button('reset')
        }, 3000)
      })

    // carousel demo
    $('#myCarousel').carousel()

    // javascript build logic
    var inputsComponent = $("#components.download input")
      , inputsPlugin = $("#plugins.download input")
      , inputsVariables = $("#variables.download input")

    // toggle all plugin checkboxes
    $('#components.download .toggle-all').on('click', function (e) {
      e.preventDefault()
      inputsComponent.attr('checked', !inputsComponent.is(':checked'))
    })

    $('#plugins.download .toggle-all').on('click', function (e) {
      e.preventDefault()
      inputsPlugin.attr('checked', !inputsPlugin.is(':checked'))
    })

    $('#variables.download .toggle-all').on('click', function (e) {
      e.preventDefault()
      inputsVariables.val('')
    })

    // request built javascript
    $('.download-btn .btn').on('click', function () {

      var css = $("#components.download input:checked")
            .map(function () { return this.value })
            .toArray()
        , js = $("#plugins.download input:checked")
            .map(function () { return this.value })
            .toArray()
        , vars = {}
        , img = ['glyphicons-halflings.png', 'glyphicons-halflings-white.png']

    $("#variables.download input")
      .each(function () {
        $(this).val() && (vars[ $(this).prev().text() ] = $(this).val())
      })

      $.ajax({
        type: 'POST'
      , url: /\?dev/.test(window.location) ? 'http://localhost:3000' : 'http://bootstrap.herokuapp.com'
      , dataType: 'jsonpi'
      , params: {
          js: js
        , css: css
        , vars: vars
        , img: img
      }
      })
    })
  })

// Modified from the original jsonpi https://github.com/benvinegar/jquery-jsonpi
$.ajaxTransport('jsonpi', function(opts, originalOptions, jqXHR) {
  var url = opts.url;

  return {
    send: function(_, completeCallback) {
      var name = 'jQuery_iframe_' + jQuery.now()
        , iframe, form

      iframe = $('<iframe>')
        .attr('name', name)
        .appendTo('head')

      form = $('<form>')
        .attr('method', opts.type) // GET or POST
        .attr('action', url)
        .attr('target', name)

      $.each(opts.params, function(k, v) {

        $('<input>')
          .attr('type', 'hidden')
          .attr('name', k)
          .attr('value', typeof v == 'string' ? v : JSON.stringify(v))
          .appendTo(form)
      })

      form.appendTo('body').submit()
    }
  }
})

}(window.jQuery)


