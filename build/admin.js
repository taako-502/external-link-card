!function(){var t={184:function(t,e){var n;!function(){"use strict";var i={}.hasOwnProperty;function o(){for(var t=[],e=0;e<arguments.length;e++){var n=arguments[e];if(n){var r=typeof n;if("string"===r||"number"===r)t.push(n);else if(Array.isArray(n)){if(n.length){var a=o.apply(null,n);a&&t.push(a)}}else if("object"===r)if(n.toString===Object.prototype.toString)for(var c in n)i.call(n,c)&&n[c]&&t.push(c);else t.push(n.toString())}}return t.join(" ")}t.exports?(o.default=o,t.exports=o):void 0===(n=function(){return o}.apply(e,[]))||(t.exports=n)}()},818:function(t,e,n){var i;t.exports=(i=n(196),(()=>{"use strict";var t={359:t=>{t.exports=i}},e={};function n(i){var o=e[i];if(void 0!==o)return o.exports;var r=e[i]={exports:{}};return t[i](r,r.exports,n),r.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var o={};return(()=>{n.r(o),n.d(o,{ReactNotifications:()=>I,Store:()=>R});var t,e,i,r,a=n(359),c=n.n(a),s="rnc__notification-item";!function(t){t.BOTTOM_LEFT="bottom-left",t.BOTTOM_RIGHT="bottom-right",t.BOTTOM_CENTER="bottom-center",t.TOP_LEFT="top-left",t.TOP_RIGHT="top-right",t.TOP_CENTER="top-center",t.CENTER="center",t.TOP_FULL="top-full",t.BOTTOM_FULL="bottom-full"}(t||(t={})),function(t){t.TOP="top",t.BOTTOM="bottom"}(e||(e={})),function(t){t.SUCCESS="success",t.DANGER="danger",t.INFO="info",t.DEFAULT="default",t.WARNING="warning"}(i||(i={})),function(t){t.TIMEOUT="timeout",t.CLICK="click",t.TOUCH="touch",t.MANUAL="manual"}(r||(r={}));var l=function(t){return null==t};function u(e){return e===t.BOTTOM_FULL||e===t.BOTTOM_LEFT||e===t.BOTTOM_RIGHT||e===t.BOTTOM_CENTER}function f(e){return e===t.TOP_FULL||e===t.TOP_LEFT||e===t.TOP_RIGHT||e===t.TOP_CENTER}function d(t){var e=t.type,n=t.content,o=t.userDefinedTypes,r=[s];if(n)return r;if(l(o))return function(t){switch(t){case i.DEFAULT:return[s,"rnc__notification-item--default"];case i.SUCCESS:return[s,"rnc__notification-item--success"];case i.DANGER:return[s,"rnc__notification-item--danger"];case i.WARNING:return[s,"rnc__notification-item--warning"];case i.INFO:return[s,"rnc__notification-item--info"];default:return[s]}}(e);var a=o.find((function(t){return t.name===e}));return r.concat(a.htmlClasses)}function m(t,e){var n=t.duration,i=t.timingFunction,o=t.delay;return"".concat(n,"ms ").concat(e," ").concat(i," ").concat(o,"ms")}function p(t){return t?(0|16*Math.random()).toString(16):"100000000000100000000000".replace(/1|0/g,p)}function h(t,e){var n=e.duration,i=e.timingFunction,o=e.delay,r=t||{};return l(r.duration)&&(r.duration=n),l(r.timingFunction)&&(r.timingFunction=i),l(r.delay)&&(r.delay=o),r}function v(t,e,n){var o=t,r=o.id,a=o.type,c=o.insert,s=o.content,u=o.container,f=o.animationIn,d=o.animationOut,m=o.slidingEnter,v=o.slidingExit,y=o.touchRevert,_=o.touchSlidingExit,b=o.dismiss,g=o.width,E=o.onRemoval;o.id=r||p(),o.type=s?null:a.toLowerCase(),e&&!s&&(o.userDefinedTypes=function(t,e){var n=t.content,o=t.type;if(!n&&o!==i.SUCCESS&&o!==i.DANGER&&o!==i.INFO&&o!==i.DEFAULT&&o!==i.WARNING&&e)return e}(o,e)),o.width=l(g)?n:g,o.container=u.toLowerCase(),o.insert=(c||"top").toLowerCase(),o.dismiss=function(t){var e=t,n={duration:0,click:!0,touch:!0,onScreen:!1,pauseOnHover:!1,waitForAnimation:!1,showIcon:!1};return e?(Object.keys(n).forEach((function(t){l(e[t])&&(e[t]=n[t])})),e):n}(b),o.animationIn=f||[],o.animationOut=d||[],o.onRemoval=E||function(){};var w=function(t,e,n){return{duration:t,timingFunction:e,delay:n}};o.slidingEnter=h(m,w(600,"linear",0)),o.slidingExit=h(v,w(600,"linear",0)),o.touchRevert=h(y,w(600,"linear",0));var O=_||{},S=O.swipe||{},T=O.fade||{};return o.touchSlidingExit=O,o.touchSlidingExit.swipe=h(S,w(600,"linear",0)),o.touchSlidingExit.fade=h(T,w(300,"linear",0)),o}function y(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var _=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.callback=e,this.remaining=n,this.resume()}var e,n;return e=t,(n=[{key:"pause",value:function(){clearTimeout(this.timerId),this.remaining-=Date.now()-this.start}},{key:"resume",value:function(){this.start=Date.now(),clearTimeout(this.timerId),this.timerId=setTimeout(this.callback,this.remaining)}},{key:"clear",value:function(){clearTimeout(this.timerId)}}])&&y(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function b(t){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},b(t)}function g(t){return function(t){if(Array.isArray(t))return E(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return E(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?E(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function E(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function w(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function O(t,e){return O=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},O(t,e)}function S(t,e){if(e&&("object"===b(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function T(t){return T=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},T(t)}var N=function(n){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&O(t,e)}(s,n);var i,o,a=function(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,i=T(t);if(e){var o=T(this).constructor;n=Reflect.construct(i,arguments,o)}else n=i.apply(this,arguments);return S(this,n)}}(s);function s(t){var e;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,s),(e=a.call(this,t)).onClick=function(){var t=e.props.notification.dismiss;(t.click||t.showIcon)&&e.removeNotification(r.CLICK)},e.onTouchStart=function(t){var n=t.touches[0].pageX;e.setState((function(t){var e=t.parentStyle;return{startX:n,currentX:n,parentStyle:Object.assign(Object.assign({},e),{position:"relative"})}}))},e.onTouchMove=function(t){var n=t.touches[0].pageX,i=e.state.startX,o=e.props,a=o.toggleRemoval,c=o.notification,s=c.id,l=c.onRemoval,u=c.slidingExit,f=c.touchSlidingExit,d=f.swipe,p=f.fade,h=n-i,v=e.rootElementRef.current.offsetWidth,y=window.innerWidth+v,_="".concat(n-i>=0?y:-y,"px");if(function(t,e){return Math.abs(t)>=.4*e}(h,v)){var b=m(d,"left"),g=m(p,"opacity"),E=function(){a(s,(function(){return l(s,r.TOUCH)}))};return e.setState((function(t){var n=t.parentStyle;return{touchEnabled:!1,parentStyle:Object.assign(Object.assign({},n),{left:_,opacity:0,transition:"".concat(b,", ").concat(g)}),onTransitionEnd:function(){e.setState((function(t){var e=t.parentStyle;return{parentStyle:Object.assign(Object.assign({},e),{height:"0px",overflow:"hidden",transition:m(u,"height")}),onTransitionEnd:E}}))}}}))}return e.setState((function(t){var e=t.parentStyle;return{currentX:n,parentStyle:Object.assign(Object.assign({},e),{left:"".concat(0+h,"px")})}}))},e.onTouchEnd=function(){var t=e.props.notification.touchRevert;e.setState((function(e){var n=e.parentStyle;return{parentStyle:Object.assign(Object.assign({},n),{left:0,transition:m(t,"left")})}}))},e.onMouseEnter=function(){e.timer?e.timer.pause():e.setState({animationPlayState:"paused"})},e.onMouseLeave=function(){e.timer?e.timer.resume():e.setState({animationPlayState:"running"})},e.rootElementRef=c().createRef();var n=t.defaultNotificationWidth,i=t.notification,o=t.isMobile,l=i.width;return e.state={parentStyle:{height:"0px",overflow:"hidden",width:"".concat(l||n,"px")},htmlClassList:d(i),animationPlayState:"running",touchEnabled:!0},o&&(e.state.parentStyle.width="100%"),e}return i=s,(o=[{key:"componentWillUnmount",value:function(){this.timer&&this.timer.clear()}},{key:"componentDidMount",value:function(){var n=this,i=this.props,o=i.notification,a=i.notificationsCount,c=o.dismiss,s=c.duration,l=c.onScreen,d=function(n,i){return!(i<=1)&&i>1&&(n.insert===e.TOP&&f(n.container)||n.insert===e.BOTTOM&&u(n.container)||n.container===t.CENTER)}(o,a),p=this.rootElementRef.current.scrollHeight,h=function(){!s||l||n.timer||(n.timer=new _((function(){return n.removeNotification(r.TIMEOUT)}),s))};this.setState((function(t){return{parentStyle:{width:t.parentStyle.width,height:"".concat(p,"px"),transition:d?m(o.slidingEnter,"height"):"10ms height"},onTransitionEnd:h}}),(function(){requestAnimationFrame((function(){n.setState((function(t){return{htmlClassList:[].concat(g(o.animationIn),g(t.htmlClassList))}}))}))}))}},{key:"componentDidUpdate",value:function(t){if(this.props.hasBeenRemoved&&!t.hasBeenRemoved&&this.removeNotification(r.MANUAL),t!==this.props&&!this.props.hasBeenRemoved){var e=this.props.notification.container,n=this.rootElementRef.current.children[0].scrollHeight;this.setState((function(t){var i=t.parentStyle;return{parentStyle:Object.assign(Object.assign({},i),{height:"".concat(n+(e.endsWith("full")?0:15),"px")})}}))}}},{key:"removeNotification",value:function(t){var e=this,n=this.props,i=n.notification,o=n.toggleRemoval,r=i.id,a=i.onRemoval,c=i.dismiss.waitForAnimation,s=[].concat(g(i.animationOut),g(d(i))),l=function(){return o(r,(function(){return a(r,t)}))},u={height:"0px",overflow:"hidden",transition:m(i.slidingExit,"height")};return c?this.setState((function(t){var n=t.parentStyle.width;return{htmlClassList:s,onAnimationEnd:function(){e.setState({parentStyle:Object.assign({width:n},u),onTransitionEnd:l})}}})):this.setState((function(t){var e=t.parentStyle.width;return{parentStyle:Object.assign({width:e},u),onTransitionEnd:l,htmlClassList:s}}))}},{key:"renderTimer",value:function(){var t=this,e=this.props.notification.dismiss,n=e.duration,i=e.onScreen,o=this.state.animationPlayState;if(n&&i){var a={animationName:"timer",animationDuration:"".concat(n,"ms"),animationTimingFunction:"linear",animationFillMode:"forwards",animationDelay:"0",animationPlayState:o};return c().createElement("div",{className:"rnc__notification-timer"},c().createElement("div",{className:"rnc__notification-timer-filler",onAnimationEnd:function(){return t.removeNotification(r.TIMEOUT)},style:a}))}}},{key:"renderCustomContent",value:function(){var t=this.state.htmlClassList,e=this.props.notification,n=e.id,i=e.content,o=e.dismiss,r=o.duration,a=o.pauseOnHover,s=r>0&&a;return c().createElement("div",{className:"".concat(g(t).join(" ")),onMouseEnter:s?this.onMouseEnter:null,onMouseLeave:s?this.onMouseLeave:null},c().isValidElement(i)?i:c().createElement(i,Object.assign({},{id:n,notificationConfig:Object.assign({},this.props.notification)})))}},{key:"renderNotification",value:function(){var t=this.props.notification,e=t.title,n=t.message,i=t.dismiss,o=i.showIcon,r=i.duration,a=i.pauseOnHover,s=this.state.htmlClassList,l=r>0&&a;return c().createElement("div",{className:"".concat(g(s).join(" ")),onMouseEnter:l?this.onMouseEnter:null,onMouseLeave:l?this.onMouseLeave:null},c().createElement("div",{className:"rnc__notification-content"},o&&c().createElement("div",{className:"rnc__notification-close-mark",onClick:this.onClick}),e&&c().createElement("div",{className:"rnc__notification-title"},e),c().createElement("div",{className:"rnc__notification-message"},n),this.renderTimer()))}},{key:"render",value:function(){var t=this.props.notification,e=t.content,n=t.dismiss.click,i=this.state,o=i.parentStyle,r=i.onAnimationEnd,a=i.onTransitionEnd,s=i.touchEnabled;return c().createElement("div",{ref:this.rootElementRef,onClick:n?this.onClick:null,style:o,className:"rnc__notification",onAnimationEnd:r,onTransitionEnd:a,onTouchStart:s?this.onTouchStart:null,onTouchMove:s?this.onTouchMove:null,onTouchEnd:s?this.onTouchEnd:null},e?this.renderCustomContent():this.renderNotification())}}])&&w(i.prototype,o),Object.defineProperty(i,"prototype",{writable:!1}),s}(c().Component);function C(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}const R=new(function(){function t(){var e=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.incrementCounter=function(){return e.counter+=1},this.getCounter=function(){return e.counter},this.counter=0,this.add=null}var e,n;return e=t,(n=[{key:"addNotification",value:function(t){this.incrementCounter();var e=v(t,this.types,this.defaultNotificationWidth);return this.add(e)}},{key:"register",value:function(t){var e=t.addNotification,n=t.removeNotification,i=t.removeAllNotifications,o=t.types,r=t.defaultNotificationWidth;this.add=e,this.removeNotification=n,this.removeAllNotifications=i,this.defaultNotificationWidth=r,this.types=o}}])&&C(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}());function j(t){return j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},j(t)}function k(t){return function(t){if(Array.isArray(t))return M(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return M(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?M(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function M(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function x(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function P(t,e){return P=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},P(t,e)}function L(t,e){if(e&&("object"===j(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function A(t){return A=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},A(t)}var I=function(e){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&P(t,e)}(r,e);var n,i,o=function(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,i=A(t);if(e){var o=A(this).constructor;n=Reflect.construct(i,arguments,o)}else n=i.apply(this,arguments);return L(this,n)}}(r);function r(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,r),(e=o.call(this,t)).handleResize=function(){e.setState({windowWidth:window.innerWidth})},e.add=function(t){return e.setState((function(e){var n=k(e.notifications),i=n.findIndex((function(e){return e.id===t.id}));return i>-1?(n[i]=t,{notifications:n}):{notifications:"top"===t.insert?[t].concat(k(n)):[].concat(k(n),[t])}})),t.id},e.remove=function(t){e.setState((function(e){return{notifications:e.notifications.map((function(e){return e.id===t&&(e.hasBeenRemoved=!0),e}))}}))},e.removeAllNotifications=function(){e.setState({notifications:e.state.notifications.map((function(t){return Object.assign(Object.assign({},t),{hasBeenRemoved:!0})}))})},e.toggleRemoval=function(t,n){e.setState((function(e){return{notifications:e.notifications.filter((function(e){return e.id!==t}))}}),n)},e.state={isMobile:!!l(t.isMobile)||t.isMobile,breakpoint:l(t.breakpoint)?768:t.breakpoint,notifications:[],windowWidth:void 0},e}return n=r,(i=[{key:"componentDidMount",value:function(){var t=this.props,e=t.types,n=t.defaultNotificationWidth;R.register({addNotification:this.add,removeNotification:this.remove,removeAllNotifications:this.removeAllNotifications,defaultNotificationWidth:n||325,types:e}),this.setState({windowWidth:window.innerWidth}),window.addEventListener("resize",this.handleResize)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.handleResize)}},{key:"renderNotifications",value:function(t,e){var n=this;return t.map((function(i){return c().createElement(N,{id:i.id,key:i.id,isMobile:e,defaultNotificationWidth:n.props.defaultNotificationWidth,notification:i,toggleRemoval:n.toggleRemoval,notificationsCount:t.length,hasBeenRemoved:i.hasBeenRemoved})}))}},{key:"renderMobileNotifications",value:function(e){var n=e.className,i=e.id,o=function(e){var n=[],i=[];return e.forEach((function(e){var o=e.container,r=t.CENTER;f(o)||o===r?n.push(e):u(o)&&i.push(e)})),{top:n,bottom:i}}(this.state.notifications),r=this.renderNotifications(o.top,!0),a=this.renderNotifications(o.bottom,!0);return c().createElement("div",{id:i,key:"mobile",className:"rnc__base ".concat(n||"")},c().createElement("div",{className:"rnc__notification-container--mobile-top"},r),c().createElement("div",{className:"rnc__notification-container--mobile-bottom"},a))}},{key:"renderScreenNotifications",value:function(e){var n=e.className,i=e.id,o=function(e){var n=[],i=[],o=[],r=[],a=[],c=[],s=[],l=[],u=[];return e.forEach((function(e){var f=e.container;f===t.TOP_FULL?l.push(e):f===t.BOTTOM_FULL?u.push(e):f===t.TOP_LEFT?n.push(e):f===t.TOP_RIGHT?i.push(e):f===t.TOP_CENTER?o.push(e):f===t.BOTTOM_LEFT?r.push(e):f===t.BOTTOM_RIGHT?a.push(e):f===t.BOTTOM_CENTER?c.push(e):f===t.CENTER&&s.push(e)})),{topFull:l,bottomFull:u,topLeft:n,topRight:i,topCenter:o,bottomLeft:r,bottomRight:a,bottomCenter:c,center:s}}(this.state.notifications),r=this.renderNotifications(o.topFull,!1),a=this.renderNotifications(o.bottomFull,!1),s=this.renderNotifications(o.topLeft,!1),l=this.renderNotifications(o.topRight,!1),u=this.renderNotifications(o.topCenter,!1),f=this.renderNotifications(o.bottomLeft,!1),d=this.renderNotifications(o.bottomRight,!1),m=this.renderNotifications(o.bottomCenter,!1),p=this.renderNotifications(o.center,!1);return c().createElement("div",{id:i,key:"screen",className:"rnc__base ".concat(n||"")},c().createElement("div",{className:"rnc__notification-container--top-full"},r),c().createElement("div",{className:"rnc__notification-container--bottom-full"},a),c().createElement("div",{className:"rnc__notification-container--top-left"},s),c().createElement("div",{className:"rnc__notification-container--top-right"},l),c().createElement("div",{className:"rnc__notification-container--bottom-left"},f),c().createElement("div",{className:"rnc__notification-container--bottom-right"},d),c().createElement("div",{className:"rnc__notification-container--top-center"},u),c().createElement("div",{className:"rnc__notification-container--center"},c().createElement("div",{className:"rnc__util--flex-center"},p)),c().createElement("div",{className:"rnc__notification-container--bottom-center"},m))}},{key:"render",value:function(){var t=this.props.isMobile,e=this.state,n=e.windowWidth,i=e.breakpoint;return t&&n<=i?this.renderMobileNotifications(this.props):this.renderScreenNotifications(this.props)}}])&&x(n.prototype,i),Object.defineProperty(n,"prototype",{writable:!1}),r}(c().Component)})(),o})())},196:function(t){"use strict";t.exports=window.React}},e={};function n(i){var o=e[i];if(void 0!==o)return o.exports;var r=e[i]={exports:{}};return t[i].call(r.exports,r,r.exports,n),r.exports}n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,{a:e}),e},n.d=function(t,e){for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},function(){var t;n.g.importScripts&&(t=n.g.location+"");var e=n.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var i=e.getElementsByTagName("script");i.length&&(t=i[i.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=t}(),function(){"use strict";var t=window.wp.element,e=n.p+"images/thumbnail.5191048f.jpg",i=window.wp.components,o=window.wp.api,r=n.n(o),a=n(184),c=n.n(a),s=n(818);(0,t.render)((0,t.createElement)((()=>{const[n,o]=(0,t.useState)("card"),[a,l]=(0,t.useState)("shadow"),[u,f]=(0,t.useState)(-5),[d,m]=(0,t.useState)(3),[p,h]=(0,t.useState)(3),[v,y]=(0,t.useState)(3),[_,b]=(0,t.useState)(3),[g,E]=(0,t.useState)("#000"),w={top:-1*u,boxShadow:d+"px "+p+"px "+v+"px "+_+"px "+g},[O,S]=(0,t.useState)(!1);(0,t.useEffect)((()=>{r().loadPromise.then((()=>{(new(r().models.Settings)).fetch().then((t=>{o(t.custom_link_card_settings.layout),l(t.custom_link_card_settings.hover),f(t.custom_link_card_settings.hover_top),m(t.custom_link_card_settings.hover_shadow_offset_x),h(t.custom_link_card_settings.hover_shadow_offset_y),y(t.custom_link_card_settings.hover_shadow_blur_radius),b(t.custom_link_card_settings.hover_shadow_spread_radius),E(t.custom_link_card_settings.hover_shadow_color)}))}))}),[]);const T={clc:!0,"clc--card":"card"===n,"clc--list":"list"===n,"clc--hover-shadow":"shadow"===a};return(0,t.createElement)(React.Fragment,null,(0,t.createElement)(s.ReactNotifications,null),(0,t.createElement)("div",{className:"clc-admin"},(0,t.createElement)("h1",null,"外部リンクカードのデザインの設定画面"),(0,t.createElement)("div",{className:"clc-admin__wrap"},(0,t.createElement)("div",{className:"clc-admin__preview"},(0,t.createElement)("h2",null,"プレビュー"),(0,t.createElement)("a",{className:c()(T),style:O?w:{top:0,boxShadow:"none"},onMouseEnter:()=>{S(!0)},onMouseLeave:()=>{S(!1)}},(0,t.createElement)("img",{className:"card"==n?"clc__thumbnail":"clc__thumbnail clc__thumbnail--list",src:e}),(0,t.createElement)("div",{className:"clc__info"},(0,t.createElement)("p",{className:"card"==n?"clc__title":"clc__title clc__title--list"},"サンプルの記事カードです。"),(0,t.createElement)("p",{className:"card"==n?"clc__description":"clc__description clc__description--list"},"サンプルの記事カードの説明です。サンプルの記事カードの説明です。サンプルの記事カードの説明です。サンプルの記事カードの説明です。サンプルの記事カードの説明です。この文字の長さはちょうど100文字です。")))),(0,t.createElement)(i.Button,{isPrimary:!0,onClick:()=>{r().loadPromise.then((()=>{const t=new(r().models.Settings)({custom_link_card_settings:{layout:n,hover:a,hover_top:u,hover_shadow_offset_x:d,hover_shadow_offset_y:p,hover_shadow_blur_radius:v,hover_shadow_spread_radius:_,hover_shadow_color:g}}).save();t.success(((t,e)=>{s.Store.addNotification({title:"Success!",message:"入力内容を保存しました。",type:"success",insert:"top",container:"top-center",animationIn:["animate__animated","animate__fadeIn"],animationOut:["animate__animated","animate__fadeOut"],dismiss:{duration:5e3,onScreen:!0}})})),t.error(((t,e)=>{s.Store.addNotification({title:"Error!",message:"入力内容を保存できませんでした。",type:"danger",insert:"top",container:"top-center",animationIn:["animate__animated","animate__fadeIn"],animationOut:["animate__animated","animate__fadeOut"],dismiss:{duration:5e3,onScreen:!0}})}))}))}},"保存"),(0,t.createElement)("div",{className:"clc-admin__settings"},(0,t.createElement)("h2",null,"デザイン設定"),(0,t.createElement)(i.RadioControl,{label:"レイアウトデザイン",help:"デザインのレイアウトを決めます。",selected:n,options:[{label:"カード型",value:"card"},{label:"リスト型",value:"list"}],onChange:t=>o(t)}),(0,t.createElement)("h3",null,"ホバー"),(0,t.createElement)(i.RadioControl,{label:"ホバー時の動作",help:"リンクカードをホバーした際の動作",selected:a,options:[{label:"なし",value:"none"},{label:"影を表示する",value:"shadow"}],onChange:t=>l(t)}),(0,t.createElement)(i.RangeControl,{label:"ホバー時の高さ",value:u,onChange:t=>f(t),min:0,max:10}),(0,t.createElement)(i.RangeControl,{label:"影の長さ（x方向）",value:d,onChange:t=>m(t),min:-10,max:10}),(0,t.createElement)(i.RangeControl,{label:"影の長さ（y方向）",value:p,onChange:t=>h(t),min:-10,max:10}),(0,t.createElement)(i.RangeControl,{label:"ぼかしの拡張・縮小",value:v,onChange:t=>y(t),min:0,max:10}),(0,t.createElement)(i.RangeControl,{label:"影の拡張・縮小",value:_,onChange:t=>b(t),min:0,max:10}),(0,t.createElement)(i.ColorPicker,{color:g,onChange:E,enableAlpha:!0})))))}),null),document.getElementById("clc-admin"))}()}();