import { fetchGhostData } from "../../lib/ghost";

export async function onBeforeRender({ routeParams }) {
  const { slug } = routeParams;

  try {
    // ✅ Fetch tag by filtering with slug
    const { tags } = await fetchGhostData("tags", {
      filter: `slug:${slug}`,
      include: "count.posts",
    });

    if (!tags || tags.length === 0) {
      return {
        pageContext: {
          tag: null,
          posts: [],
        },
      };
    }

    const tag = tags[0];

    // ✅ Fetch posts with this tag
    const { posts } = await fetchGhostData("posts", {
      filter: `tag:${slug}`,
      include: "tags,authors",
      limit: 12,
    });

    // ✅ Related tags logic
    let relatedTags = [];
    if (posts && posts.length > 0) {
      const tagIds = new Set();
      posts.forEach((post) => {
        post.tags?.forEach((t) => {
          if (t.slug !== slug) tagIds.add(t.id);
        });
      });

      if (tagIds.size > 0) {
        const { tags: fetchedRelatedTags } = await fetchGhostData("tags", {
          filter: `id:[${Array.from(tagIds).join(",")}]`,
          limit: 5,
        });
        relatedTags = fetchedRelatedTags;
      }
    }

    tag.related_tags = relatedTags;

    return {
      pageContext: {
        pageProps: {
          tag,
          posts,
        },
      },
    };
  } catch (error) {
    console.error("Error fetching tag data:", error);
    return {
      pageContext: {
        pageProps: {
          tag: null,
          posts: [],
          error: "Failed to load tag data",
        },
      },
    };
  }
}
