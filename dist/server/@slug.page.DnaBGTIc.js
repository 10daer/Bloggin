import { jsxs, jsx } from "react/jsx-runtime";
import { Calendar, Clock, Tag } from "lucide-react";
import { f as formatDate } from "./utils.D7-Tx2UD.js";
function Post({ post }) {
  if (!post) {
    return /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 py-16 text-center", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold mb-4", children: "Post not found" }),
      /* @__PURE__ */ jsx("p", { className: "mb-8", children: "The post you're looking for doesn't exist or has been removed." }),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "/blog",
          className: "inline-block px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors",
          children: "Back to Blog"
        }
      )
    ] });
  }
  return /* @__PURE__ */ jsxs("article", { className: "max-w-4xl mx-auto px-4 py-8 bg-white dark:bg-[inherit]", children: [
    post.feature_image && /* @__PURE__ */ jsx("div", { className: "mb-8 rounded-xl overflow-hidden shadow-lg", children: /* @__PURE__ */ jsx(
      "img",
      {
        src: post.feature_image,
        alt: post.title,
        className: "w-full h-96 object-cover hover:scale-105 transition-transform duration-500"
      }
    ) }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4", children: [
      post.primary_author && /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
        post.primary_author.profile_image ? /* @__PURE__ */ jsx(
          "img",
          {
            src: post.primary_author.profile_image,
            alt: post.primary_author.name,
            className: "w-10 h-10 rounded-full border-2 border-indigo-500"
          }
        ) : /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold", children: post.primary_author.name.charAt(0) }),
        /* @__PURE__ */ jsx("span", { className: "font-medium", children: post.primary_author.name })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
        /* @__PURE__ */ jsx(Calendar, { size: 16 }),
        /* @__PURE__ */ jsx("time", { dateTime: post.published_at, children: formatDate(post.published_at) })
      ] }),
      post.reading_time && /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
        /* @__PURE__ */ jsx(Clock, { size: 16 }),
        /* @__PURE__ */ jsxs("span", { children: [
          post.reading_time,
          " min read"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("h1", { className: "text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6", children: post.title }),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "prose prose-lg dark:prose-invert max-w-none mb-8 prose-headings:text-indigo-700 dark:prose-headings:text-indigo-300 prose-a:text-purple-600 dark:prose-a:text-purple-400 hover:prose-a:text-purple-800 dark:hover:prose-a:text-purple-300",
        dangerouslySetInnerHTML: { __html: post.html }
      }
    ),
    post.tags && post.tags.length > 0 && /* @__PURE__ */ jsxs("div", { className: "mt-12 pt-8 border-t border-gray-200 dark:border-gray-700", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-4", children: [
        /* @__PURE__ */ jsx(Tag, { size: 20, className: "text-indigo-600" }),
        /* @__PURE__ */ jsx("h3", { className: "text-lg font-medium", children: "Topics" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: post.tags.map((tag) => /* @__PURE__ */ jsx(
        "a",
        {
          href: `/tags/${tag.slug}`,
          className: "px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900 dark:to-purple-900 rounded-lg text-sm font-medium text-indigo-700 dark:text-indigo-300 hover:shadow-md transition-all duration-300",
          children: tag.name
        },
        tag.id
      )) })
    ] })
  ] });
}
const _slug_page = {
  Page: Post,
  documentProps: {
    title: "Post",
    description: "This is the post page of the app"
  }
};
export {
  _slug_page as default
};
