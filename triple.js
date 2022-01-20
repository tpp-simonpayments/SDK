!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.sdk=n():e.sdk=n()}(this,(function(){return(()=>{"use strict";var e={d:(n,t)=>{for(var o in t)e.o(t,o)&&!e.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:t[o]})},o:(e,n)=>Object.prototype.hasOwnProperty.call(e,n),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},n={};e.r(n),e.d(n,{default:()=>l});var t="https://www.tripleplaypay.com/iframe",o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n="?params=".concat(encodeURIComponent(JSON.stringify(e)));return n},i=function(e,n){return"".concat(t,"/").concat(e).concat(n)};function r(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}const s=function(){function e(n){var t=n.iframe,o=n.messageHandler;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.iframe=t,this.messageHandler=o}var n,t;return n=e,(t=[{key:"send",value:function(e){if(!this.iframe)throw new Error("Iframe is not selected");this.iframe.contentWindow.postMessage(e,"*")}},{key:"subscribe",value:function(){window.onmessage=this.messageHandler}},{key:"unsubscribe",value:function(){window.onmessage=function(){}}}])&&r(n.prototype,t),Object.defineProperty(n,"prototype",{writable:!1}),e}();function a(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var l=function(){function e(n){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.appKey=n}var n,r;return n=e,(r=[{key:"generatePaymentForm",value:function(e){var n=e.containerSelector,t=e.amount,o=e.onError,i=void 0===o?function(){}:o,r=e.onSuccess,s=void 0===r?function(){}:r,a=e.newWindow,l=e.styles,c=void 0===l?{}:l;this.element||(this.containerSelector=n,this.amount=t,this.iframe=null,this.onError=i,this.onSuccess=s,this.element=null,this.styles=c,this.newWindow=a,this.init())}},{key:"clear",value:function(){this.amount=null,this.transactionId=null,this.ticket=null,this.meta=null,this.iframe=null,this.onError=null,this.onSuccess=null,this.newWindow=null,this.element=null,this.containerSelector=null,this.styles=null}},{key:"init",value:function(){this.newWindow||this.useIframe()}},{key:"processPayment",value:function(){var e=this;if(this.newWindow){var n=o({amount:this.amount,location:window.location.href,newWindow:!0,styles:this.styles}),r=i(this.appKey,n),s=window.open(r,"_blank","left=100,top=100,height=400,width=520,fullscreen=no,location=no,status=no,menubar=no,toolbar=no");window.onmessage=function(n){if(n.origin===t){var o=JSON.parse(n.data||"{}");o.status?(e.onSuccess(o),s.close()):e.onError(o)}}}}},{key:"getDomElement",value:function(){var e=document.querySelector(this.containerSelector);if(!e)throw new Error("Such container doesn't exist");return e}},{key:"useIframe",value:function(){var e=this.getDomElement();this.element=e,this.iframe=function(e,n,t){e.innerHTML="";var r=function(e,n){var t=document.createElement("iframe");return t.style="width: 500px; min-height: 300px; border: none; max-width: 100vw;",t.src=i(e,n),t}(n,o(t));return e.appendChild(r),r}(e,this.appKey,{amount:this.amount,styles:this.styles}),this.createMessenger()}},{key:"createMessenger",value:function(){this.messenger=new s({iframe:this.iframe,messageHandler:this.handleIncomingMessage.bind(this)}),this.messenger.subscribe()}},{key:"handleIncomingMessage",value:function(e){var n=JSON.parse(e.data||"{}"),t=n.payload;"error"!==n.action?"success"!==n.action||this.onSuccess({transactionId:t}):this.onError({transactionId:t})}}])&&a(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),e}();return window&&!window.Triple&&(window.Triple=l),n})()}));