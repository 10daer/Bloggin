import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useState } from "react";
import { f as formatDate } from "./utils.D7-Tx2UD.js";
import { f as fetchGhostData, u as useGhostContent } from "./ghost.DTJP45JR.js";
import "@tryghost/content-api";
function BlogCard({ post }) {
  if (!post) return null;
  return /* @__PURE__ */ jsxs("article", { className: "bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow", children: [
    post.feature_image && /* @__PURE__ */ jsx("a", { href: `/blog/${post.slug}`, children: /* @__PURE__ */ jsx("div", { className: "h-48 overflow-hidden", children: /* @__PURE__ */ jsx(
      "img",
      {
        src: post.feature_image,
        alt: post.title,
        className: "w-full h-full object-cover hover:scale-105 transition-transform duration-300"
      }
    ) }) }),
    /* @__PURE__ */ jsxs("div", { className: "p-6", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold mb-2 line-clamp-2", children: /* @__PURE__ */ jsx(
        "a",
        {
          href: `/blog/${post.slug}`,
          className: "text-gray-800 hover:text-blue-600 transition-colors",
          children: post.title
        }
      ) }),
      /* @__PURE__ */ jsxs("p", { className: "text-gray-600 text-sm mb-4", children: [
        post.published_at && /* @__PURE__ */ jsx("time", { dateTime: post.published_at, children: formatDate(post.published_at) }),
        post.reading_time && /* @__PURE__ */ jsxs("span", { className: "ml-3", children: [
          post.reading_time,
          " min read"
        ] })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-600 mb-4 line-clamp-3", children: post.excerpt }),
      /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
        /* @__PURE__ */ jsx("div", { className: "flex items-center", children: post.primary_author && /* @__PURE__ */ jsxs(Fragment, { children: [
          post.primary_author.profile_image ? /* @__PURE__ */ jsx(
            "img",
            {
              src: post.primary_author.profile_image,
              alt: post.primary_author.name,
              className: "w-8 h-8 rounded-full mr-2"
            }
          ) : /* @__PURE__ */ jsx("div", { className: "w-8 h-8 bg-gray-200 rounded-full mr-2" }),
          /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-700", children: post.primary_author.name })
        ] }) }),
        /* @__PURE__ */ jsx(
          "a",
          {
            href: `/blog/${post.slug}`,
            className: "text-sm text-blue-600 hover:text-blue-800 transition-colors",
            children: "Read more →"
          }
        )
      ] })
    ] })
  ] });
}
function Blog({ posts: initialPosts }) {
  const [page, setPage] = useState(1);
  const { data: clientPosts, loading } = useGhostContent("posts", {
    page,
    limit: 10,
    include: "authors,tags"
  });
  const posts = initialPosts || clientPosts || [];
  return /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 py-8", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-4xl font-bold text-gray-800 mb-6", children: "Blog" }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8 mb-8", children: loading ? (
      // Skeleton loading state
      Array(6).fill().map((_, i) => /* @__PURE__ */ jsx(
        "div",
        {
          className: "bg-gray-200 animate-pulse h-64 rounded-lg"
        },
        i
      ))
    ) : posts.map((post) => /* @__PURE__ */ jsx(BlogCard, { post }, post.id)) }),
    /* @__PURE__ */ jsxs("div", { className: "flex justify-center gap-4", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => setPage((p) => Math.max(1, p - 1)),
          disabled: page === 1,
          className: "px-4 py-2 bg-gray-200 rounded disabled:opacity-50",
          children: "Previous"
        }
      ),
      /* @__PURE__ */ jsxs("span", { className: "px-4 py-2", children: [
        "Page ",
        page
      ] }),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => setPage((p) => p + 1),
          disabled: !posts || posts.length < 10,
          className: "px-4 py-2 bg-gray-200 rounded disabled:opacity-50",
          children: "Next"
        }
      )
    ] })
  ] });
}
async function fetchData() {
  const { posts } = await fetchGhostData("posts", {
    page: 1,
    limit: 10,
    include: "authors,tags"
  });
  return { posts };
}
const index_page = {
  Page: Blog,
  documentProps: {
    title: "Blog | My SSR App",
    description: "Read our latest blog posts"
  }
};
export {
  index_page as default,
  fetchData
};
