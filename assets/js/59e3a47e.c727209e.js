"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[317],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),u=i,m=d["".concat(c,".").concat(u)]||d[u]||f[u]||a;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1576:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(7462),i=(n(7294),n(3905));const a={id:"favicon",title:"Favicon",sidebar_position:10},o=void 0,l={unversionedId:"api/middleware/favicon",id:"api/middleware/favicon",title:"Favicon",description:"Favicon middleware for Fiber that ignores favicon requests or caches a provided icon in memory to improve performance by skipping disk access. User agents request favicon.ico frequently and indiscriminately, so you may wish to exclude these requests from your logs by using this middleware before your logger middleware.",source:"@site/docs/api/middleware/favicon.md",sourceDirName:"api/middleware",slug:"/api/middleware/favicon",permalink:"/api/middleware/favicon",draft:!1,editUrl:"https://github.com/gofiber/docs/edit/docusaurus-migration/docs/api/middleware/favicon.md",tags:[],version:"current",lastUpdatedBy:"Ren\xe9 Werner",lastUpdatedAt:1674161996,formattedLastUpdatedAt:"Jan 19, 2023",sidebarPosition:10,frontMatter:{id:"favicon",title:"Favicon",sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"ExpVar",permalink:"/api/middleware/expvar"},next:{title:"FileSystem",permalink:"/api/middleware/filesystem"}},c={},s=[{value:"Signatures",id:"signatures",level:2},{value:"Examples",id:"examples",level:2},{value:"Config",id:"config",level:2},{value:"Default Config",id:"default-config",level:2}],p={toc:s};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Favicon middleware for ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/gofiber/fiber"},"Fiber")," that ignores favicon requests or caches a provided icon in memory to improve performance by skipping disk access. User agents request favicon.ico frequently and indiscriminately, so you may wish to exclude these requests from your logs by using this middleware before your logger middleware."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"This middleware is exclusively for serving the default, implicit favicon, which is GET /favicon.ico.")),(0,i.kt)("h2",{id:"signatures"},"Signatures"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"func New(config ...Config) fiber.Handler\n")),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("p",null,"Import the middleware package that is part of the Fiber web framework"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'import (\n  "github.com/gofiber/fiber/v2"\n  "github.com/gofiber/fiber/v2/middleware/favicon"\n)\n')),(0,i.kt)("p",null,"After you initiate your Fiber app, you can use the following possibilities:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'// Provide a minimal config\napp.Use(favicon.New())\n\n// Or extend your config for customization\napp.Use(favicon.New(favicon.Config{\n    File: "./favicon.ico",\n}))\n')),(0,i.kt)("h2",{id:"config"},"Config"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'// Config defines the config for middleware.\ntype Config struct {\n    // Next defines a function to skip this middleware when returned true.\n    //\n    // Optional. Default: nil\n    Next func(c *fiber.Ctx) bool\n\n    // File holds the path to an actual favicon that will be cached\n    //\n    // Optional. Default: ""\n    File string\n}\n')),(0,i.kt)("h2",{id:"default-config"},"Default Config"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'var ConfigDefault = Config{\n    Next: nil,\n    File:    ""\n}\n')))}d.isMDXComponent=!0}}]);