// src/routes/index.js
export const routes = [
  { path: "/", component: () => import("../pages/home/Home") },
  { path: "/about", component: () => import("../pages/about/About") },
  { path: "/blog", component: () => import("../pages/blog/Blog") },
  { path: "/blog/:slug", component: () => import("../pages/post/Post") },
];
