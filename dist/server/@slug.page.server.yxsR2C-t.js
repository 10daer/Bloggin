import { f as fetchGhostData } from "./ghost.DTJP45JR.js";
import "@tryghost/content-api";
import "react";
async function onBeforeRender({ routeParams }) {
  const { post } = await fetchData(routeParams);
  return {
    pageContext: {
      pageProps: {
        post
        // pass it inside pageContext ✅
      }
    }
  };
}
async function fetchData({ slug }) {
  const { posts } = await fetchGhostData("posts", {
    slug,
    include: "authors,tags"
  });
  return { post: (posts == null ? void 0 : posts[0]) || null };
}
export {
  onBeforeRender
};
