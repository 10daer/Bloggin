import { fetchGhostData } from "../../lib/ghost";

export async function onBeforeRender({ routeParams }) {
  const { post } = await fetchData(routeParams);

  return {
    pageContext: {
      pageProps: {
        post, // pass it inside pageContext ✅
      },
    },
  };
}

async function fetchData({ slug }) {
  const { posts } = await fetchGhostData("posts", {
    slug,
    include: "authors,tags",
  });

  return { post: posts?.[0] || null };
}
