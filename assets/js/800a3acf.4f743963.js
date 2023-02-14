"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[8614],{3905:(e,t,r)=>{r.d(t,{Zo:()=>f,kt:()=>g});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},f=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,f=l(e,["components","mdxType","originalType","parentName"]),c=p(r),d=o,g=c["".concat(s,".").concat(d)]||c[d]||u[d]||a;return r?n.createElement(g,i(i({ref:t},f),{},{components:r})):n.createElement(g,i({ref:t},f))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3865:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const a={id:"proxy",title:"Proxy"},i=void 0,l={unversionedId:"api/middleware/proxy",id:"api/middleware/proxy",title:"Proxy",description:"Proxy middleware for Fiber that allows you to proxy requests to multiple servers.",source:"@site/docs/api/middleware/proxy.md",sourceDirName:"api/middleware",slug:"/api/middleware/proxy",permalink:"/api/middleware/proxy",draft:!1,editUrl:"https://github.com/gofiber/docs/edit/master/docs/api/middleware/proxy.md",tags:[],version:"current",lastUpdatedBy:"RW",lastUpdatedAt:1676361083,formattedLastUpdatedAt:"Feb 14, 2023",frontMatter:{id:"proxy",title:"Proxy"},sidebar:"tutorialSidebar",previous:{title:"Pprof",permalink:"/api/middleware/pprof"},next:{title:"Recover",permalink:"/api/middleware/recover"}},s={},p=[{value:"Signatures",id:"signatures",level:2},{value:"Examples",id:"examples",level:2},{value:"Config",id:"config",level:2},{value:"Default Config",id:"default-config",level:2}],f={toc:p};function c(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Proxy middleware for ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/gofiber/fiber"},"Fiber")," that allows you to proxy requests to multiple servers."),(0,o.kt)("h2",{id:"signatures"},"Signatures"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"// Balancer create a load balancer among multiple upstrem servers.\nfunc Balancer(config Config) fiber.Handler\n// Forward performs the given http request and fills the given http response.\nfunc Forward(addr string, clients ...*fasthttp.Client) fiber.Handler\n// Do performs the given http request and fills the given http response.\nfunc Do(c *fiber.Ctx, addr string, clients ...*fasthttp.Client) error\n// DomainForward the given http request based on the given domain and fills the given http response\nfunc DomainForward(hostname string, addr string, clients ...*fasthttp.Client) fiber.Handler\n// BalancerForward performs the given http request based round robin balancer and fills the given http response\nfunc BalancerForward(servers []string, clients ...*fasthttp.Client) fiber.Handler\n")),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("p",null,"Import the middleware package that is part of the Fiber web framework"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    "github.com/gofiber/fiber/v2"\n    "github.com/gofiber/fiber/v2/middleware/proxy"\n)\n')),(0,o.kt)("p",null,"After you initiate your Fiber app, you can use the following possibilities:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'// if target https site uses a self-signed certificate, you should\n// call WithTlsConfig before Do and Forward\nproxy.WithTlsConfig(&tls.Config{\n    InsecureSkipVerify: true,\n})\n// if you need to use global self-custom client, you should use proxy.WithClient.\nproxy.WithClient(&fasthttp.Client{\n    NoDefaultUserAgentHeader: true, \n    DisablePathNormalizing:   true,\n})\n\n// Forward to url\napp.Get("/gif", proxy.Forward("https://i.imgur.com/IWaBepg.gif"))\n\n// If you want to forward with a specific domain. You have to use proxy.DomainForward.\napp.Get("/payments", proxy.DomainForward("docs.gofiber.io", "http://localhost:8000"))\n\n// Forward to url with local custom client\napp.Get("/gif", proxy.Forward("https://i.imgur.com/IWaBepg.gif", &fasthttp.Client{\n    NoDefaultUserAgentHeader: true, \n    DisablePathNormalizing:   true,\n}))\n\n// Make request within handler\napp.Get("/:id", func(c *fiber.Ctx) error {\n    url := "https://i.imgur.com/"+c.Params("id")+".gif"\n    if err := proxy.Do(c, url); err != nil {\n        return err\n    }\n    // Remove Server header from response\n    c.Response().Header.Del(fiber.HeaderServer)\n    return nil\n})\n\n// Minimal round robin balancer\napp.Use(proxy.Balancer(proxy.Config{\n    Servers: []string{\n        "http://localhost:3001",\n        "http://localhost:3002",\n        "http://localhost:3003",\n    },\n}))\n\n// Or extend your balancer for customization\napp.Use(proxy.Balancer(proxy.Config{\n    Servers: []string{\n        "http://localhost:3001",\n        "http://localhost:3002",\n        "http://localhost:3003",\n    },\n    ModifyRequest: func(c *fiber.Ctx) error {\n        c.Request().Header.Add("X-Real-IP", c.IP())\n        return nil\n    },\n    ModifyResponse: func(c *fiber.Ctx) error {\n        c.Response().Header.Del(fiber.HeaderServer)\n        return nil\n    },\n}))\n\n// Or this way if the balancer is using https and the destination server is only using http.\napp.Use(proxy.BalancerForward([]string{\n    "http://localhost:3001",\n    "http://localhost:3002",\n    "http://localhost:3003",\n}))\n')),(0,o.kt)("h2",{id:"config"},"Config"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'// Config defines the config for middleware.\ntype Config struct {\n    // Next defines a function to skip this middleware when returned true.\n    //\n    // Optional. Default: nil\n    Next func(c *fiber.Ctx) bool\n\n    // Servers defines a list of <scheme>://<host> HTTP servers,\n    //\n    // which are used in a round-robin manner.\n    // i.e.: "https://foobar.com, http://www.foobar.com"\n    //\n    // Required\n    Servers []string\n\n    // ModifyRequest allows you to alter the request\n    //\n    // Optional. Default: nil\n    ModifyRequest fiber.Handler\n\n    // ModifyResponse allows you to alter the response\n    //\n    // Optional. Default: nil\n    ModifyResponse fiber.Handler\n\n    // tls config for the http client.\n    TlsConfig *tls.Config\n    \n    // Client is custom client when client config is complex. \n    // Note that Servers, Timeout, WriteBufferSize, ReadBufferSize and TlsConfig \n    // will not be used if the client are set.\n    Client *fasthttp.LBClient\n}\n')),(0,o.kt)("h2",{id:"default-config"},"Default Config"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"// ConfigDefault is the default config\nvar ConfigDefault = Config{\n    Next: nil,\n}\n")))}c.isMDXComponent=!0}}]);