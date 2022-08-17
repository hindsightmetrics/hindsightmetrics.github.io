"use strict";(self.webpackChunkism_docs=self.webpackChunkism_docs||[]).push([[968],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=l(n),m=o,d=f["".concat(s,".").concat(m)]||f[m]||p[m]||i;return n?r.createElement(d,a(a({ref:t},u),{},{components:n})):r.createElement(d,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},1009:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return f}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],c={sidebar_position:1},s="Integration",l={unversionedId:"Integration/integration",id:"Integration/integration",isDocsHomePage:!1,title:"Integration",description:"ISM can be integrated with any website that can publish information using webhooks. This can be very useful if the agency have a form on your personal or business web application where applicants can fill in their information, and make payments directly. Once the applicant has filed in the information, and saved, the agency can now easily print any USCIS document, modify the data or correct any mistakes.",source:"@site/docs/Integration/integration.md",sourceDirName:"Integration",slug:"/Integration/integration",permalink:"/docs/Integration/integration",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Case Tracker Dashboard",permalink:"/docs/CaseTracker/caseTracker"},next:{title:"Release Notes",permalink:"/docs/releaseNotes"}},u=[{value:"How it works",id:"how-it-works",children:[]}],p={toc:u};function f(e){var t=e.components,c=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,c,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"integration"},"Integration"),(0,i.kt)("p",null,"ISM can be integrated with any website that can publish information using webhooks. This can be very useful if the agency have a form on your personal or business web application where applicants can fill in their information, and make payments directly. Once the applicant has filed in the information, and saved, the agency can now easily print any USCIS document, modify the data or correct any mistakes."),(0,i.kt)("p",null,"However, integrations are not only limited to forms. An integration can be used to run any process or even obtain data from ISM, this can be configured for each agency."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Integration Icon",src:n(7949).Z})),(0,i.kt)("h2",{id:"how-it-works"},"How it works"),(0,i.kt)("p",null,'The integration works with webhooks. This is a way to connect one system to another using a the popular format called JSON (JavasScript Object Notation). System "A" sends information to System "B"\'s webhook. Once the information is in System "B", processing can start.'))}f.isMDXComponent=!0},7949:function(e,t,n){t.Z=n.p+"assets/images/integation-icon-861bc0f65e9f58a83e5f34577c7dbe6b.jfif"}}]);