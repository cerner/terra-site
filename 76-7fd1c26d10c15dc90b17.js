(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{1020:function(n,e,t){"use strict";t.r(e),t.d(e,"default",(function(){return c}));t(0);var i=t(226),r=["components"];function o(){return(o=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n}).apply(this,arguments)}function a(n,e){if(null==n)return{};var t,i,r=function(n,e){if(null==n)return{};var t,i,r={},o=Object.keys(n);for(i=0;i<o.length;i++)t=o[i],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(i=0;i<o.length;i++)t=o[i],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var s={};function c(n){var e=n.components,t=a(n,r);return Object(i.mdx)("wrapper",o({},s,t,{components:e,mdxType:"MDXLayout"}),Object(i.mdx)("h1",{id:"diff"},"diff"),Object(i.mdx)("pre",null,Object(i.mdx)("code",{parentName:"pre",className:"language-diff"},"Index: languages/ini.js\n===================================================================\n--- languages/ini.js    (revision 199)\n+++ languages/ini.js    (revision 200)\n@@ -1,8 +1,7 @@\n hljs.LANGUAGES.ini =\n {\n   case_insensitive: true,\n-  defaultMode:\n-  {\n+  defaultMode: {\n     contains: ['comment', 'title', 'setting'],\n     illegal: '[^\\\\s]'\n   },\n\n*** /path/to/original timestamp\n--- /path/to/new      timestamp\n***************\n*** 1,3 ****\n--- 1,9 ----\n+ This is an important\n+ notice! It should\n+ therefore be located at\n+ the beginning of this\n+ document!\n\n! compress the size of the\n! changes.\n\n  It is important to spell\n")))}c.isMDXComponent=!0}}]);