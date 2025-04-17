import { jsxs, jsx } from "react/jsx-runtime";
import { C as Card } from "./Card.BQTmkY2-.js";
function Tag({ tag, posts }) {
  if (!tag) {
    return /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 py-16 text-center", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold text-gray-800 mb-4", children: "Tag not found" }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: "The tag you're looking for doesn't seem to exist." }),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "/tags",
          className: "inline-block mt-6 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition-colors",
          children: "Browse all tags"
        }
      )
    ] });
  }
  return /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 py-8", children: [
    /* @__PURE__ */ jsxs("section", { className: "mb-12 text-center", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-4xl font-bold text-gray-800 mb-4", children: tag.name }),
      tag.description && /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600 max-w-3xl mx-auto", children: tag.description }),
      /* @__PURE__ */ jsx("div", { className: "mt-4 flex justify-center", children: /* @__PURE__ */ jsxs("span", { className: "bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm", children: [
        posts.length,
        " ",
        posts.length === 1 ? "Post" : "Posts"
      ] }) })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "mb-16", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", children: posts.map((post) => /* @__PURE__ */ jsxs(Card, { children: [
      /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        post.feature_image && /* @__PURE__ */ jsx("a", { href: `/posts/${post.slug}`, children: /* @__PURE__ */ jsx(
          "img",
          {
            src: post.feature_image,
            alt: post.title,
            className: "w-full h-48 object-cover rounded-t"
          }
        ) }),
        post.primary_tag && post.primary_tag.slug !== tag.slug && /* @__PURE__ */ jsx(
          "a",
          {
            href: `/tags/${post.primary_tag.slug}`,
            className: "absolute top-4 left-4 bg-blue-600 text-white text-xs px-2 py-1 rounded",
            children: post.primary_tag.name
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "p-6", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold mb-3", children: /* @__PURE__ */ jsx(
          "a",
          {
            href: `/posts/${post.slug}`,
            className: "text-gray-800 hover:text-blue-600 transition-colors",
            children: post.title
          }
        ) }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-600 mb-4 line-clamp-3", children: post.excerpt || post.custom_excerpt || "" }),
        post.authors && post.authors.length > 0 && /* @__PURE__ */ jsxs("div", { className: "flex items-center mt-4", children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: post.authors[0].profile_image || "/images/default-avatar.png",
              alt: post.authors[0].name,
              className: "w-8 h-8 rounded-full mr-2"
            }
          ),
          /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-700", children: post.authors[0].name }),
          /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-500 ml-auto", children: new Date(post.published_at).toLocaleDateString() })
        ] })
      ] })
    ] }, post.id)) }) }),
    tag.related_tags && tag.related_tags.length > 0 && /* @__PURE__ */ jsxs("section", { className: "mb-16", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-semibold text-gray-800 mb-6", children: "Related Tags" }),
      /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: tag.related_tags.map((relatedTag) => /* @__PURE__ */ jsxs(
        "a",
        {
          href: `/tags/${relatedTag.slug}`,
          className: "bg-gray-100 hover:bg-gray-200 text-gray-800 px-3 py-1 rounded-full transition-colors",
          children: [
            "#",
            relatedTag.name
          ]
        },
        relatedTag.slug
      )) })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "mb-16 bg-blue-50 p-6 rounded-lg shadow text-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold text-blue-900 mb-2", children: "Subscribe to our Newsletter" }),
      /* @__PURE__ */ jsxs("p", { className: "text-blue-800 mb-4", children: [
        "Get the latest articles about ",
        tag.name,
        " delivered to your inbox."
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex max-w-md mx-auto", children: [
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "email",
            placeholder: "Your email address",
            className: "flex-1 px-4 py-2 rounded-l border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          }
        ),
        /* @__PURE__ */ jsx("button", { className: "bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r transition-colors", children: "Subscribe" })
      ] })
    ] })
  ] });
}
const _slug_page = {
  Page: Tag,
  documentProps: ({ tag }) => {
    if (!tag) {
      return {
        title: "Tag Not Found",
        description: "The requested tag could not be found."
      };
    }
    return {
      title: `${tag.name} | My SSR App`,
      description: tag.description || `Browse all posts tagged with ${tag.name}`,
      openGraph: {
        title: `${tag.name} | My SSR App`,
        description: tag.description || `Browse all posts tagged with ${tag.name}`,
        type: "website",
        image: tag.feature_image || "/images/default-tag-image.jpg"
      }
    };
  }
};
export {
  _slug_page as default
};
