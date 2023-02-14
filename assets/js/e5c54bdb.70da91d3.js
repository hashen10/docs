"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[4157],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>b});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,b=m["".concat(s,".").concat(d)]||m[d]||c[d]||i;return n?a.createElement(b,l(l({ref:t},u),{},{components:n})):a.createElement(b,l({ref:t},u))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294),r=n(6010);const i="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,l),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(7462),r=n(7294),i=n(6010),l=n(2389),o=n(7392),s=n(7094),p=n(2466);const u="tabList__CuJ",m="tabItem_LNqP";function c(e){const{lazy:t,block:n,defaultValue:l,values:c,groupId:d,className:b}=e,f=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=c??f.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),h=(0,o.l)(g,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===l?l:l??f.find((e=>e.props.default))?.props.value??f[0].props.value;if(null!==v&&!g.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:y}=(0,s.U)(),[N,w]=(0,r.useState)(v),T=[],{blockElementScrollPositionUntilNextRender:x}=(0,p.o5)();if(null!=d){const e=k[d];null!=e&&e!==N&&g.some((t=>t.value===e))&&w(e)}const E=e=>{const t=e.currentTarget,n=T.indexOf(t),a=g[n].value;a!==N&&(x(t),w(a),null!=d&&y(d,String(a)))},O=e=>{let t=null;switch(e.key){case"Enter":E(e);break;case"ArrowRight":{const n=T.indexOf(e.currentTarget)+1;t=T[n]??T[0];break}case"ArrowLeft":{const n=T.indexOf(e.currentTarget)-1;t=T[n]??T[T.length-1];break}}t?.focus()};return r.createElement("div",{className:(0,i.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},b)},g.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>T.push(e),onKeyDown:O,onClick:E},l,{className:(0,i.Z)("tabs__item",m,l?.className,{"tabs__item--active":N===t})}),n??t)}))),t?(0,r.cloneElement)(f.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function d(e){const t=(0,l.Z)();return r.createElement(c,(0,a.Z)({key:String(t)},e))}},3302:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>m});var a=n(7462),r=(n(7294),n(3905)),i=n(5488),l=n(5162);const o={id:"templates",title:"\ud83d\udcdd Templates",description:"Fiber supports server-side template engines.",sidebar_position:3},s=void 0,p={unversionedId:"guide/templates",id:"guide/templates",title:"\ud83d\udcdd Templates",description:"Fiber supports server-side template engines.",source:"@site/docs/guide/templates.md",sourceDirName:"guide",slug:"/guide/templates",permalink:"/guide/templates",draft:!1,editUrl:"https://github.com/gofiber/docs/edit/master/docs/guide/templates.md",tags:[],version:"current",lastUpdatedBy:"RW",lastUpdatedAt:1676361083,formattedLastUpdatedAt:"Feb 14, 2023",sidebarPosition:3,frontMatter:{id:"templates",title:"\ud83d\udcdd Templates",description:"Fiber supports server-side template engines.",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\ud83c\udfad Grouping",permalink:"/guide/grouping"},next:{title:"\ud83d\udc1b Error Handling",permalink:"/guide/error-handling"}},u={},m=[{value:"Template interfaces",id:"template-interfaces",level:2},{value:"Engines",id:"engines",level:2}],c={toc:m};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"template-interfaces"},"Template interfaces"),(0,r.kt)("p",null,"Fiber provides a Views interface to provide your own template engine:"),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"views",label:"Views",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"type Views interface {\n    Load() error\n    Render(io.Writer, string, interface{}, ...string) error\n}\n")))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Views")," interface contains a ",(0,r.kt)("inlineCode",{parentName:"p"},"Load")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Render")," method, ",(0,r.kt)("inlineCode",{parentName:"p"},"Load")," is executed by Fiber on app initialization to load/parse the templates."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'// Pass engine to Fiber\'s Views Engine\napp := fiber.New(fiber.Config{\n    Views: engine,\n    // Views Layout is the global layout for all template render until override on Render function.\n    ViewsLayout: "layouts/main"\n})\n')),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Render")," method is linked to the ",(0,r.kt)("a",{parentName:"p",href:"/api/ctx#render"},(0,r.kt)("strong",{parentName:"a"},"ctx.Render","(",")"))," function that accepts a template name and binding data. It will use global layout if layout is not being defined in ",(0,r.kt)("inlineCode",{parentName:"p"},"Render")," function.\nIf the Fiber config option ",(0,r.kt)("inlineCode",{parentName:"p"},"PassLocalsToViews")," is enabled, then all locals set using ",(0,r.kt)("inlineCode",{parentName:"p"},"ctx.Locals(key, value)")," will be passed to the template."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'app.Get("/", func(c *fiber.Ctx) error {\n    return c.Render("index", fiber.Map{\n        "hello": "world",\n    });\n})\n')),(0,r.kt)("h2",{id:"engines"},"Engines"),(0,r.kt)("p",null,"Fiber team maintains ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/gofiber/template"},"templates")," package that provides wrappers for multiple template engines:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/gofiber/template/tree/master/html"},"html")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/gofiber/template/tree/master/ace"},"ace")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/gofiber/template/tree/master/amber"},"amber")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/gofiber/template/tree/master/django"},"django")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/gofiber/template/tree/master/handlebars"},"handlebars")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/gofiber/template/tree/master/jet"},"jet")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/gofiber/template/tree/master/mustache"},"mustache")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/gofiber/template/tree/master/pug"},"pug"))),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"example",label:"Example",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "log"\n    "github.com/gofiber/fiber/v2"\n    "github.com/gofiber/template/html"\n)\n\nfunc main() {\n    // Initialize standard Go html template engine\n    engine := html.New("./views", ".html")\n    // If you want other engine, just replace with following\n    // Create a new engine with django\n    // engine := django.New("./views", ".django")\n\n    app := fiber.New(fiber.Config{\n        Views: engine,\n    })\n    app.Get("/", func(c *fiber.Ctx) error {\n        // Render index template\n        return c.Render("index", fiber.Map{\n            "Title": "Hello, World!",\n        })\n    })\n\n    log.Fatal(app.Listen(":3000"))\n}\n'))),(0,r.kt)(l.Z,{value:"index",label:"views/index.html",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-markup"},"<!DOCTYPE html>\n<body>\n    <h1>{{.Title}}</h1>\n</body>\n</html>\n")))))}d.isMDXComponent=!0}}]);