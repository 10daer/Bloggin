import { fetchGhostData } from "../../lib/ghost";

export async function onBeforeRender({ routeParams }) {
  console.log(routeParams);
  const { post } = await fetchData(routeParams);
  console.log(post);

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
