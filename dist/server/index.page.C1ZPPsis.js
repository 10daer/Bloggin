import { jsxs, jsx } from "react/jsx-runtime";
import { C as Card } from "./Card.BQTmkY2-.js";
import { f as fetchGhostData, u as useGhostContent } from "./ghost.DTJP45JR.js";
import "@tryghost/content-api";
import "react";
function FeaturedPost({ post }) {
  if (!post) return null;
  return /* @__PURE__ */ jsxs("article", { className: "bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow h-full flex flex-col", children: [
    post.feature_image && /* @__PURE__ */ jsx("a", { href: `/blog/${post.slug}`, children: /* @__PURE__ */ jsx("div", { className: "h-40 overflow-hidden", children: /* @__PURE__ */ jsx(
      "img",
      {
        src: post.feature_image,
        alt: post.title,
        className: "w-full h-full object-cover hover:scale-105 transition-transform duration-300"
      }
    ) }) }),
    /* @__PURE__ */ jsxs("div", { className: "p-4 flex-grow flex flex-col", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold mb-2", children: /* @__PURE__ */ jsx(
        "a",
        {
          href: `/blog/${post.slug}`,
          className: "text-gray-800 hover:text-blue-600 transition-colors",
          children: post.title
        }
      ) }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-600 text-sm mb-3 line-clamp-2", children: post.excerpt }),
      /* @__PURE__ */ jsx("div", { className: "mt-auto", children: /* @__PURE__ */ jsx(
        "a",
        {
          href: `/blog/${post.slug}`,
          className: "inline-block px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition-colors",
          children: "Read Article"
        }
      ) })
    ] })
  ] });
}
function Home({ featuredPosts, latestPosts }) {
  const { data: posts, loading } = useGhostContent("posts", {
    limit: 3,
    include: "authors,tags",
    filter: "featured:true"
  });
  const displayPosts = featuredPosts || posts || [];
  return /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 py-8", children: [
    /* @__PURE__ */ jsxs("section", { className: "mb-16", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-4xl font-bold text-gray-800 mb-6", children: "Welcome to Our Site" }),
      /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600 max-w-3xl", children: "Discover the latest content from our blog, curated just for you. We bring insights, news and updates on topics that matter to you." })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "mb-16", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-semibold text-gray-800 mb-6", children: "Featured Posts" }),
      loading ? /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [1, 2, 3].map((i) => /* @__PURE__ */ jsx(
        "div",
        {
          className: "bg-gray-200 animate-pulse h-64 rounded-lg"
        },
        i
      )) }) : /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: displayPosts.map((post) => /* @__PURE__ */ jsx(FeaturedPost, { post }, post.id)) })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "mb-16", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-semibold text-gray-800 mb-6", children: "Latest Posts" }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: latestPosts.map((post) => /* @__PURE__ */ jsx(FeaturedPost, { post }, post.id)) })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "mb-16 text-center", children: /* @__PURE__ */ jsx("blockquote", { className: "text-xl italic text-gray-700", children: "“Creativity is intelligence having fun.” – Albert Einstein" }) }),
    /* @__PURE__ */ jsxs("section", { className: "mb-16 bg-yellow-100 p-6 rounded-lg shadow", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold text-yellow-900 mb-2", children: "📢 Upcoming Event" }),
      /* @__PURE__ */ jsxs("p", { className: "text-yellow-800", children: [
        'Join our live webinar on "Modern SSR with Vite + Ghost CMS" – April 15, 2025.',
        " ",
        /* @__PURE__ */ jsx("a", { href: "/events", className: "text-blue-600 underline", children: "Register now" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "mb-16", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-semibold text-gray-800 mb-4", children: "Spotlight: Tech Trends" }),
      /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsxs("div", { className: "p-6", children: [
        /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: "Stay ahead with our deep dives into emerging tech trends – AI, Web3, and more. Discover how they’re reshaping the world." }),
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "/tags/tech",
            className: "inline-block mt-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition-colors",
            children: "Explore Tech Topics"
          }
        )
      ] }) })
    ] }),
    /* @__PURE__ */ jsxs("section", { children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-semibold text-gray-800 mb-6", children: "About Us" }),
      /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsxs("div", { className: "p-6", children: [
        /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: "We're dedicated to bringing you the best content on topics that matter. Our team of writers and editors work hard to ensure quality and relevance." }),
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "/about",
            className: "inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors",
            children: "Learn More"
          }
        )
      ] }) })
    ] })
  ] });
}
async function onBeforeRender() {
  const { posts: featuredPosts } = await fetchGhostData("posts", {
    limit: 3,
    include: "authors,tags",
    filter: "featured:true"
  });
  const { posts: latestPosts } = await fetchGhostData("posts", {
    limit: 3,
    include: "authors,tags"
  });
  return {
    pageContext: {
      pageProps: {
        featuredPosts,
        latestPosts
      }
    }
  };
}
const index_page = {
  Page: Home,
  documentProps: {
    title: "Home | My SSR App",
    description: "Welcome to our server-side rendered application with Ghost CMS"
  }
};
export {
  index_page as default,
  onBeforeRender
};
