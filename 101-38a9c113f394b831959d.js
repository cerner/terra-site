(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{1028:function(t,e,n){"use strict";function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o,u=function(t,e){if(!e&&t&&t.__esModule)return t;if(null===t||"object"!==r(t)&&"function"!=typeof t)return{default:t};var n=l(e);if(n&&n.has(t))return n.get(t);var o={},u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in t)if("default"!==a&&Object.prototype.hasOwnProperty.call(t,a)){var i=u?Object.getOwnPropertyDescriptor(t,a):null;i&&(i.get||i.set)?Object.defineProperty(o,a,i):o[a]=t[a]}o.default=t,n&&n.set(t,o);return o}(n(0)),a=(o=n(64))&&o.__esModule?o:{default:o};function l(t){if("function"!=typeof WeakMap)return null;var e=new WeakMap,n=new WeakMap;return(l=function(t){return t?n:e})(t)}function i(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var r,o,u=[],a=!0,l=!1;try{for(n=n.call(t);!(a=(r=n.next()).done)&&(u.push(r.value),!e||u.length!==e);a=!0);}catch(t){l=!0,o=t}finally{try{a||null==n.return||n.return()}finally{if(l)throw o}}return u}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return f(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return f(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var c=function(){var t=i((0,u.useState)(!1),2),e=t[0],n=t[1];return u.default.createElement("div",null,u.default.createElement("p",null,"This component toggles between having and not having pending state."),u.default.createElement("p",null,u.default.createElement("button",{id:"PendingStateButton",type:"button",onClick:function(){n(!e)}},e?"Clear Pending State":"Set Pending State")),e?u.default.createElement(a.default,{description:"ExampleComponent"}):void 0)};e.default=c}}]);