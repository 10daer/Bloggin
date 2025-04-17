import{j as r}from"../../jsx-runtime.0DLF9kdB.js";import{f as u}from"../../utils._YM1j6na.js";import{r as i}from"../../index.BThqHjDx.js";import"../../_commonjsHelpers.CqkleIqs.js";/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),b=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,a,s)=>s?s.toUpperCase():a.toLowerCase()),d=e=>{const t=b(e);return t.charAt(0).toUpperCase()+t.slice(1)},c=(...e)=>e.filter((t,a,s)=>!!t&&t.trim()!==""&&s.indexOf(t)===a).join(" ").trim();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var y={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=i.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:a=2,absoluteStrokeWidth:s,className:n="",children:o,iconNode:m,...x},h)=>i.createElement("svg",{ref:h,...y,width:t,height:t,stroke:e,strokeWidth:s?Number(a)*24/Number(t):a,className:c("lucide",n),...x},[...m.map(([p,g])=>i.createElement(p,g)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l=(e,t)=>{const a=i.forwardRef(({className:s,...n},o)=>i.createElement(j,{ref:o,iconNode:t,className:c(`lucide-${f(d(e))}`,`lucide-${e}`,s),...n}));return a.displayName=d(e),a};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],v=l("calendar",k);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]],N=l("clock",w);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _=[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]],C=l("tag",_);function A({post:e}){return e?r.jsxs("article",{className:"max-w-4xl mx-auto px-4 py-8 bg-white dark:bg-[inherit]",children:[e.feature_image&&r.jsx("div",{className:"mb-8 rounded-xl overflow-hidden shadow-lg",children:r.jsx("img",{src:e.feature_image,alt:e.title,className:"w-full h-96 object-cover hover:scale-105 transition-transform duration-500"})}),r.jsxs("div",{className:"flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4",children:[e.primary_author&&r.jsxs("div",{className:"flex items-center gap-2",children:[e.primary_author.profile_image?r.jsx("img",{src:e.primary_author.profile_image,alt:e.primary_author.name,className:"w-10 h-10 rounded-full border-2 border-indigo-500"}):r.jsx("div",{className:"w-10 h-10 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold",children:e.primary_author.name.charAt(0)}),r.jsx("span",{className:"font-medium",children:e.primary_author.name})]}),r.jsxs("div",{className:"flex items-center gap-1",children:[r.jsx(v,{size:16}),r.jsx("time",{dateTime:e.published_at,children:u(e.published_at)})]}),e.reading_time&&r.jsxs("div",{className:"flex items-center gap-1",children:[r.jsx(N,{size:16}),r.jsxs("span",{children:[e.reading_time," min read"]})]})]}),r.jsx("h1",{className:"text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6",children:e.title}),r.jsx("div",{className:"prose prose-lg dark:prose-invert max-w-none mb-8 prose-headings:text-indigo-700 dark:prose-headings:text-indigo-300 prose-a:text-purple-600 dark:prose-a:text-purple-400 hover:prose-a:text-purple-800 dark:hover:prose-a:text-purple-300",dangerouslySetInnerHTML:{__html:e.html}}),e.tags&&e.tags.length>0&&r.jsxs("div",{className:"mt-12 pt-8 border-t border-gray-200 dark:border-gray-700",children:[r.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[r.jsx(C,{size:20,className:"text-indigo-600"}),r.jsx("h3",{className:"text-lg font-medium",children:"Topics"})]}),r.jsx("div",{className:"flex flex-wrap gap-2",children:e.tags.map(t=>r.jsx("a",{href:`/tags/${t.slug}`,className:"px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900 dark:to-purple-900 rounded-lg text-sm font-medium text-indigo-700 dark:text-indigo-300 hover:shadow-md transition-all duration-300",children:t.name},t.id))})]})]}):r.jsxs("div",{className:"container mx-auto px-4 py-16 text-center",children:[r.jsx("h1",{className:"text-3xl font-bold mb-4",children:"Post not found"}),r.jsx("p",{className:"mb-8",children:"The post you're looking for doesn't exist or has been removed."}),r.jsx("a",{href:"/blog",className:"inline-block px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors",children:"Back to Blog"})]})}const E={Page:A,documentProps:{title:"Post",description:"This is the post page of the app"}};export{E as default};
