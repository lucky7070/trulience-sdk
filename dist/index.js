!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["trulience-sdk"]=t():e["trulience-sdk"]=t()}(this,(()=>(()=>{"use strict";var e,t={n:e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},d:(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},n={};function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,c(r.key),r)}}function a(e,t,n){l(e,t),t.set(e,n)}function l(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}function u(e,t,n){return(t=c(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e){var t=function(e){if("object"!=r(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,"string");if("object"!=r(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==r(t)?t:t+""}function s(e,t,n){return e.set(d(e,t),n),n}function f(e,t){return e.get(d(e,t))}function d(e,t,n){if("function"==typeof e?e===t:e.has(t))return arguments.length<3?t:n;throw new TypeError("Private element is not present on this object")}t.r(n),t.d(n,{TrulienceAvatar:()=>H,TrulienceSDK:()=>O});var p=new WeakMap,y=new WeakMap,b=new WeakSet,m=function(){function e(){var t,n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),l(this,t=b),t.add(this),a(this,p,e.InitState.NOT_INITIATED),a(this,y,null),u(this,"isInitialized",(function(){return f(p,n)===e.InitState.COMPLETED}))}return t=e,(n=[{key:"initSDK",value:function(t,n){var r=this;return new Promise((function(i,a){if(f(p,r)===e.InitState.IN_PROGRESS)return console.log("Ignoring initializeTrulienceSDK because already in progress"),void a("Already in Progress");s(p,r,e.InitState.IN_PROGRESS),T._.call(e,t).then((function(t){d(b,r,h).call(r,t);var a=(n.dhType?n.dhType:t.DigitalHumanType.CUSTOM)!==t.DigitalHumanType.WEBGL,l=t.Builder().setAvatarId(n.avatarId?n.avatarId:"").setToken(n.token?n.token:null).setUserName(n.username?n.username:"Guest").enableAvatar(void 0===a||a).setRetry(void 0!==n.retry&&n.retry).registerVideoElements(n.videoElements?n.videoElements:null).build();n.eventCallbacks&&Object.entries(n.eventCallbacks||{}).forEach((function(e){var t=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i,a,l=[],u=!0,c=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=i.call(n)).done)&&(l.push(r.value),l.length!==t);u=!0);}catch(e){c=!0,o=e}finally{try{if(!u&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(c)throw o}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return o(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(e,2),n=t[0],r=t[1];l.on(n,r)})),s(p,r,e.InitState.COMPLETED),i(l)})).catch((function(t){console.error("error in initSDK - ",t),s(p,r,e.InitState.FAILED),a(t)}))}))}}])&&i(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),t;var t,n}();function v(e,t){return new Promise((function(n,r){var o=document.createElement("script");o.type="text/javascript",o.src=(e||"https://trulience.com/sdk/trulience.sdk.js")+"?n=".concat("20241011120544","&v=").concat("1.0.13"),o.id=t,o.onload=function(){n()},o.onerror=function(){r(new Error("Failed to load script: ".concat(e)))},document.head.appendChild(o)}))}function h(t){e.MessageType=t.MessageType,e.CallEndReason=t.CallEndReason,e.AvatarStatus=t.AvatarStatus,e.DigitalHumanType=t.DigitalHumanType,e.TGStatus=t.TGStatus}e=m,u(m,"InitState",{NOT_INITIATED:0,IN_PROGRESS:1,COMPLETED:2,FAILED:3});var S={_:null},g={_:null},w={_:!1};u(m,"TGStatus",null),u(m,"AvatarStatus",null),u(m,"MessageType",null),u(m,"CallEndReason",null),u(m,"DigitalHumanType",null);var T={_:function(t){return w._?(console.log("Ignoring Trulience library load request because already loaded."),Promise.resolve(S._)):(g._||(g._=new Promise((function(n,r){if(S._)return w._=!0,void n(S._);console.log("Loading Trulience library from:",t,"version:","1.0.13","build:","20241011120544"),v.call(e,t,"trulience-sdk-script").then((function(){if(S._=window.Trulience,!S._)return console.error("Trulience class not found on window object"),void r(new Error("Trulience class not found"));console.log("Trulience class loaded successfully"),w._=!0,n(S._)})).catch((function(e){console.error("Error loading Trulience library:",e),r(e)}))}))),g._)}};const O=m,j=require("react");var E=t.n(j);function k(e){return k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},k(e)}function I(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,D(r.key),r)}}function _(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(_=function(){return!!e})()}function P(e){return P=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},P(e)}function A(e,t){return A=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},A(e,t)}function C(e,t,n){return(t=D(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function D(e){var t=function(e){if("object"!=k(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,"string");if("object"!=k(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==k(t)?t:t+""}const H=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),C(n=function(e,t,n){return t=P(t),function(e,t){if(t&&("object"==k(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,_()?Reflect.construct(t,n||[],P(e).constructor):t.apply(e,n))}(this,t,[e]),"state",{trulience:null,mediaStreamObj:null}),C(n,"remoteVideoId","remoteVideo"),C(n,"getTrulienceObject",(function(){return n.state.trulience})),C(n,"startAvatarSession",(function(){n.state.trulience?(n.state.trulience.on("auth-success",n.authSuccessHandler.bind(n)),n.state.trulience.on("auth-fail",n.authFailHandler.bind(n)),n.state.trulience.on("websocket-connect",n.connectHandler.bind(n)),n.state.trulience.on("websocket-close",n.disconnectHandler.bind(n)),n.state.trulience.on("websocket-error",n.errorHandler.bind(n)),n.state.trulience.authenticate()):console.log("Ignoring startAvatarSession because trulience sdk is not setup.")})),C(n,"stopAvatarSession",(function(e){try{n.state.trulience&&(n.state.trulience.disconnectGateway(e),n.state.trulience.off("auth-success",n.authSuccessHandler.bind(n)),n.state.trulience.off("auth-fail",n.authFailHandler.bind(n)),n.state.trulience.off("websocket-connect",n.connectHandler.bind(n)),n.state.trulience.off("websocket-close",n.disconnectHandler.bind(n)),n.state.trulience.off("websocket-error",n.errorHandler.bind(n)),n.setState({trulience:null}),n.setState({mediaStreamObj:null}))}catch(e){console.error("error = ",e)}})),C(n,"authSuccessHandler",(function(e){n.state.trulience.connectGateway()})),C(n,"authFailHandler",(function(e){console.error("Auth failed: ",e)})),C(n,"connectHandler",(function(e){console.log("Trulience connected - ",n.state)})),C(n,"disconnectHandler",(function(e){console.log("Trulience disconnected - ",e)})),C(n,"errorHandler",(function(e){console.error("Trulience error - ",e)})),null==n.props.width&&(n.props.width="100%"),null==n.props.height&&(n.props.height="100%"),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&A(e,t)}(t,e),n=t,(r=[{key:"setMediaStream",value:function(e){var t,n=this;console.log("In setMediaStream - mediaStream = ",e),e?this.setState({mediaStreamObj:e},(function(){if(n.state.trulience&&n.state.mediaStreamObj){if(n.state.trulience.getTGStatus()!==O.TGStatus.CONNECTED)return void console.log("Avatar not yet connected with Trulience. Hence ignoring animateAvatar");if(!n.state.mediaStreamObj.getAudioTracks()[0])return void console.error("No audio track in the media stream");n.state.trulience.setMediaStream(n.state.mediaStreamObj)}})):(null===(t=this.state.trulience)||void 0===t||t.setMediaStream(null),this.setState({mediaStreamObj:null}))}},{key:"sendMessage",value:function(e){var t;null===(t=this.state.trulience)||void 0===t||t.sendMessage(e)}},{key:"componentDidUpdate",value:function(e,t){t.trulience!==this.state.trulience&&null===t.trulience&&this.startAvatarSession()}},{key:"componentDidMount",value:function(){var e=this;console.log("Creating TrulienceSDK Object");var t=new O;this.setState({mediaStreamObj:this.props.mediaStream});var n={remoteVideo:this.remoteVideoId},r=this.props.url,o={avatarId:this.props.avatarId,token:this.props.token,username:this.props.username,enableAvatar:this.props.enableAvatar,retry:this.props.retry,videoElements:n,eventCallbacks:this.props.eventCallbacks||{}};t.initSDK(r,o).then((function(t){e.setState({trulience:t})})).catch((function(e){console.error("Failed to create trulience object with url = "+r+". Error = ",e)}))}},{key:"componentWillUnmount",value:function(){this.stopAvatarSession()}},{key:"render",value:function(){var e;return E().createElement("div",{style:{position:"relative",width:this.props.width,backgroundColor:null!==(e=this.props.backgroundColor)&&void 0!==e?e:"#333",height:this.props.height}},E().createElement("div",{style:{height:"100%",width:"100%",display:"flex",position:"absolute",left:"0",top:"0"},id:this.remoteVideoId,autoPlay:!0}))}}])&&I(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),n;var n,r}(E().Component);return n})()));