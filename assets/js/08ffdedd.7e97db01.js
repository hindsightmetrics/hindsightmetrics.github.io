"use strict";(self.webpackChunkism_docs=self.webpackChunkism_docs||[]).push([[96],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=i,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||r;return n?a.createElement(f,o(o({ref:t},u),{},{components:n})):a.createElement(f,o({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4535:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return m}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),o=["components"],l={sidebar_position:1},s="USCIS Documents",c={unversionedId:"AutoFill/uscisDocs",id:"AutoFill/uscisDocs",isDocsHomePage:!1,title:"USCIS Documents",description:"Description",source:"@site/docs/AutoFill/uscisDocs.md",sourceDirName:"AutoFill",slug:"/AutoFill/uscisDocs",permalink:"/docs/AutoFill/uscisDocs",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Help",permalink:"/docs/Web Application/help"},next:{title:"Custom Documents",permalink:"/docs/AutoFill/customDocs"}},u=[{value:"Description",id:"description",children:[]},{value:"Features",id:"features",children:[{value:"Web Application",id:"web-application",children:[]},{value:"Auto Fill",id:"auto-fill",children:[]},{value:"Case Tracker",id:"case-tracker",children:[]},{value:"Notify",id:"notify",children:[]},{value:"Automated Call",id:"automated-call",children:[]}]}],p={toc:u};function m(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"uscis-documents"},"USCIS Documents"),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"Immigration Services Monitor, or ISM, is a tool geared toward immigration agencies. The goal is to have store the information of an applicant, easily print USCIS forms needed for the immigration process, follow up with a case tracker, notify via SMS, Email or phone calls based on different rules."),(0,r.kt)("h2",{id:"features"},"Features"),(0,r.kt)("p",null,"Currently there are four main components within ISM, accessible through the Web Application. Each feature works on it's own, allowing for an agency to only use what they need."),(0,r.kt)("h3",{id:"web-application"},"Web Application"),(0,r.kt)("p",null,"The web application is the point of interaction between the agency and ISM. It is separated into different views depending on the selected features:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Applicant List"),(0,r.kt)("li",{parentName:"ul"},"Applicant Information"),(0,r.kt)("li",{parentName:"ul"},"Case Tracker"),(0,r.kt)("li",{parentName:"ul"},"Court Date"),(0,r.kt)("li",{parentName:"ul"},"Agency Information"),(0,r.kt)("li",{parentName:"ul"},"Need Help?",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"More Resources"),(0,r.kt)("li",{parentName:"ul"},"Documentation (This website)"),(0,r.kt)("li",{parentName:"ul"},"Release Notes"),(0,r.kt)("li",{parentName:"ul"},"Contact Us"),(0,r.kt)("li",{parentName:"ul"},"Submit Request or Bug")))),(0,r.kt)("h3",{id:"auto-fill"},"Auto Fill"),(0,r.kt)("p",null,"AutoFill is focused on documentation, once an applicant is registered and stored in ISM, the agency will be able to print any USCIS with many fields already completed. Since all this information is in PDF form, any field can be updated after the file is generated, however, any manual change will not persist if the file is generated again."),(0,r.kt)("p",null,"These fields include, but are not limited to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Applicant Name"),(0,r.kt)("li",{parentName:"ul"},"Applicant Address and Address History"),(0,r.kt)("li",{parentName:"ul"},"Family Members, and petitioner information if necessary"),(0,r.kt)("li",{parentName:"ul"},"Interpreter and Preparer information based on Agency information"),(0,r.kt)("li",{parentName:"ul"},"In forms where common answers are Yes or No are completed by default (for example Part 8 of I-485)")),(0,r.kt)("p",null,"An agency has the option of uploading their own documents to enable Auto Fill. Documents can be Word or PDF files."),(0,r.kt)("p",null,"Below is a list of implemented USCIS documents:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"I-130\tPDF - Petition for Relative"),(0,r.kt)("li",{parentName:"ul"},"I-130A\tPDF - Supplemental Information for Spouse Beneficiary"),(0,r.kt)("li",{parentName:"ul"},"I-131\tPDF - Application for Travel Document"),(0,r.kt)("li",{parentName:"ul"},"I-140\tPDF - Immigration Petition for Alien Workers"),(0,r.kt)("li",{parentName:"ul"},"I-485\tPDF - Application to Register Permanent Residence or Adjust Status"),(0,r.kt)("li",{parentName:"ul"},"I-601A\tPDF - Application for Provisional Unlawful Presence Waiver"),(0,r.kt)("li",{parentName:"ul"},"I-765\tPDF - Application for Employment Authorization"),(0,r.kt)("li",{parentName:"ul"},"I-821D\tPDF - Consideration of Deferred Action for Childhood Arrivals"),(0,r.kt)("li",{parentName:"ul"},"I-824\tPDF - Application for Action on an Approved Application or Petition"),(0,r.kt)("li",{parentName:"ul"},"I-864\tPDF - Affidavit of Support Under Section 213A of the INA"),(0,r.kt)("li",{parentName:"ul"},"N-400\tPDF - Application for Naturalization")),(0,r.kt)("h3",{id:"case-tracker"},"Case Tracker"),(0,r.kt)("p",null,"The Case Tracker component is a system that tracks any applicant case automatically, using the official ",(0,r.kt)("a",{parentName:"p",href:"https://egov.uscis.gov/casestatus/landing.do"},"USCIS page"),". Since each applicant has many cases, tracking all of the manually can be a hassle, this is why Case Tracker presents all the cases and their statuses in a single dashboard. Sorted and color coded by latest update time, it makes is easy for an agency to know what needs to be followed up at a glance."),(0,r.kt)("h3",{id:"notify"},"Notify"),(0,r.kt)("p",null,"Some agencies have a process of keeping their applicants up to date via SMS or Email notifications. Notify is a component that allows the agency to automate this communication, freeing up the agent's time to work on other things."),(0,r.kt)("h3",{id:"automated-call"},"Automated Call"),(0,r.kt)("p",null,"Similar to Notify, Automated Call can be programmed to make a call based on rules set by the agency. For example, one agency requested that the system automatically calls the phone number for the Los Angeles immigration court and submit an A-Number to know if there is a court date for their applicant. Another scenario was an agency that wanted to make a phone call to their applicants whenever a case update happened."))}m.isMDXComponent=!0}}]);