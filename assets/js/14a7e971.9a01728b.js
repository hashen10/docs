"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[2369],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),l=u(n),m=a,f=l["".concat(s,".").concat(m)]||l[m]||d[m]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[l]="string"==typeof e?e:a,i[1]=p;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8195:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>l,frontMatter:()=>o,metadata:()=>p,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const o={id:"routing",title:"\ud83d\udd0c Routing",description:"Routing refers to how an application's endpoints (URIs) respond to client requests.",sidebar_position:1},i=void 0,p={unversionedId:"guide/routing",id:"version-v1.x/guide/routing",title:"\ud83d\udd0c Routing",description:"Routing refers to how an application's endpoints (URIs) respond to client requests.",source:"@site/versioned_docs/version-v1.x/guide/routing.md",sourceDirName:"guide",slug:"/guide/routing",permalink:"/v1.x/guide/routing",draft:!1,editUrl:"https://github.com/gofiber/docs/edit/master/versioned_docs/version-v1.x/guide/routing.md",tags:[],version:"v1.x",lastUpdatedBy:"RW",lastUpdatedAt:1674210408,formattedLastUpdatedAt:"Jan 20, 2023",sidebarPosition:1,frontMatter:{id:"routing",title:"\ud83d\udd0c Routing",description:"Routing refers to how an application's endpoints (URIs) respond to client requests.",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Guide",permalink:"/v1.x/category/guide"},next:{title:"\ud83c\udfad Grouping",permalink:"/v1.x/guide/grouping"}},s={},u=[{value:"Paths",id:"paths",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Middleware",id:"middleware",level:2},{value:"Grouping",id:"grouping",level:2}],c={toc:u};function l(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"paths"},"Paths"),(0,a.kt)("p",null,"Route paths, combined with a request method, define the endpoints at which requests can be made. Route paths can be ",(0,a.kt)("strong",{parentName:"p"},"strings")," or ",(0,a.kt)("strong",{parentName:"p"},"string patterns"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Examples of route paths based on strings")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'// This route path will match requests to the root route, "/":\napp.Get("/", func(c *fiber.Ctx) {\n  c.Send("root")\n})\n\n// This route path will match requests to "/about":\napp.Get("/about", func(c *fiber.Ctx) {\n  c.Send("about")\n})\n\n// This route path will match requests to "/random.txt":\napp.Get("/random.txt", func(c *fiber.Ctx) {\n  c.Send("random.txt")\n})\n')),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("p",null,"Route parameters are ",(0,a.kt)("strong",{parentName:"p"},"named URL segments")," that are used to capture the values specified at their position in the URL. The obtained values can be retrieved using the ",(0,a.kt)("a",{parentName:"p",href:"https://fiber.wiki/context#params"},"Params")," function, with the name of the route parameter specified in the path as their respective keys."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"The name of the route parameter must be made up of ",(0,a.kt)("strong",{parentName:"p"},"characters")," ","(",(0,a.kt)("inlineCode",{parentName:"p"},"[A-Za-z0-9_]"),")",".")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example of define routes with route parameters")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'// Parameters\napp.Get("/user/:name/books/:title", func(c *fiber.Ctx) {\n  c.Write(c.Params("name"))\n  c.Write(c.Params("title"))\n})\n// Wildcard\napp.Get("/user/*", func(c *fiber.Ctx) {\n  c.Send(c.Params("*"))\n})\n// Optional parameter\napp.Get("/user/:name?", func(c *fiber.Ctx) {\n  c.Send(c.Params("name"))\n})\n')),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Since the hyphen ","(",(0,a.kt)("inlineCode",{parentName:"p"},"-"),")"," and the dot ","(",(0,a.kt)("inlineCode",{parentName:"p"},"."),")"," are interpreted literally, they can be used along with route parameters for useful purposes.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'// http://localhost:3000/plantae/prunus.persica\napp.Get("/plantae/:genus.:species", func(c *fiber.Ctx) {\n  c.Params("genus")   // prunus\n  c.Params("species") // persica\n})\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'// http://localhost:3000/flights/LAX-SFO\napp.Get("/flights/:from-:to", func(c *fiber.Ctx) {\n  c.Params("from")   // LAX\n  c.Params("to")     // SFO\n})\n')),(0,a.kt)("h2",{id:"middleware"},"Middleware"),(0,a.kt)("p",null,"Functions that are designed to make changes to the request or response are called ",(0,a.kt)("strong",{parentName:"p"},"middleware functions"),". The ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/gofiber/docs/tree/34729974f7d6c1d8363076e7e88cd71edc34a2ac/context/README.md#next"},"Next")," is a ",(0,a.kt)("strong",{parentName:"p"},"Fiber")," router function, when called, executes the ",(0,a.kt)("strong",{parentName:"p"},"next")," function that ",(0,a.kt)("strong",{parentName:"p"},"matches")," the current route."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example of a middleware function")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'app.Use(func(c *fiber.Ctx) {\n  // Set some security headers:\n  c.Set("X-XSS-Protection", "1; mode=block")\n  c.Set("X-Content-Type-Options", "nosniff")\n  c.Set("X-Download-Options", "noopen")\n  c.Set("Strict-Transport-Security", "max-age=5184000")\n  c.Set("X-Frame-Options", "SAMEORIGIN")\n  c.Set("X-DNS-Prefetch-Control", "off")\n\n  // Go to next middleware:\n  c.Next()\n\n  // End of the chain\n  fmt.Println("Bye \ud83d\udc4b!")\n})\n\napp.Get("/", func(c *fiber.Ctx) {\n  c.Send("Hello, World!")\n})\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Use")," method path is a ",(0,a.kt)("strong",{parentName:"p"},"mount"),", or ",(0,a.kt)("strong",{parentName:"p"},"prefix")," path, and limits middleware to only apply to any paths requested that begin with it."),(0,a.kt)("h2",{id:"grouping"},"Grouping"),(0,a.kt)("p",null,"If you have many endpoints, you can organize your routes using ",(0,a.kt)("inlineCode",{parentName:"p"},"Group"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'func main() {\n  app := fiber.New()\n\n  api := app.Group("/api", cors())  // /api\n\n  v1 := api.Group("/v1", mysql())   // /api/v1\n  v1.Get("/list", handler)          // /api/v1/list\n  v1.Get("/user", handler)          // /api/v1/user\n\n  v2 := api.Group("/v2", mongodb()) // /api/v2\n  v2.Get("/list", handler)          // /api/v2/list\n  v2.Get("/user", handler)          // /api/v2/user\n\n  app.Listen(3000)\n}\n')))}l.isMDXComponent=!0}}]);