import { jsxs, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { C as Card } from "./Card.BQTmkY2-.js";
import { f as fetchGhostData } from "./ghost.DTJP45JR.js";
import "@tryghost/content-api";
function SkeletonCard({ tag }) {
  var _a;
  const [loaded, setLoaded] = useState(false);
  return /* @__PURE__ */ jsxs(
    Card,
    {
      className: "hover:shadow-lg transition-shadow relative w-full h-full flex flex-col overflow-hidden",
      children: [
        !loaded && /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 z-10 flex flex-col gap-4 animate-pulse bg-white rounded", children: [
          /* @__PURE__ */ jsx("div", { className: "h-40 w-full bg-gray-200 rounded" }),
          /* @__PURE__ */ jsxs("div", { className: "px-5 flex-grow gap-2 flex flex-col", children: [
            /* @__PURE__ */ jsx("div", { className: "h-6 w-3/4 bg-gray-200 rounded" }),
            /* @__PURE__ */ jsx("div", { className: "h-10 w-full bg-gray-200 rounded" }),
            /* @__PURE__ */ jsx("div", { className: "h-4 w-1/2  px-2 py-1 bg-gray-200 rounded" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "mx-6 h-6 mb-4 w-3/4 bg-gray-200 rounded mt-auto" })
        ] }),
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: `/tags/${tag.slug}`,
            className: `block h-full flex flex-col transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`,
            children: [
              /* @__PURE__ */ jsx("div", { className: "relative w-full h-40 flex-none", children: /* @__PURE__ */ jsx(
                "img",
                {
                  src: tag.feature_image || "https://placehold.co/400x160",
                  alt: tag.name,
                  className: "w-full h-full object-cover rounded-t",
                  onLoad: () => setLoaded(true),
                  loading: "lazy"
                }
              ) }),
              /* @__PURE__ */ jsxs("div", { className: "px-6 py-3 flex-grow gap-2 flex flex-col", children: [
                /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-gray-800 ", children: tag.name }),
                tag.description ? /* @__PURE__ */ jsx("p", { className: "text-gray-600 line-clamp-3 leading-[1.2]", children: tag.description }) : /* @__PURE__ */ jsx("div", { className: "h-10" }),
                /* @__PURE__ */ jsx("div", { className: "mt-auto", children: /* @__PURE__ */ jsxs("span", { className: "bg-blue-100 text-blue-800 rounded px-2 py-1 text-sm", children: [
                  ((_a = tag.count) == null ? void 0 : _a.posts) || 0,
                  " posts"
                ] }) })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between px-6 mt-auto mb-4 border-t border-gray-100", children: [
                /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-500 dark:text-gray-400", children: "Explore collection" }),
                /* @__PURE__ */ jsx(
                  "svg",
                  {
                    xmlns: "http://www.w3.org/2000/svg",
                    className: "h-5 w-5 text-indigo-600 dark:text-indigo-400 transform group-hover:translate-x-1 transition-transform",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor",
                    children: /* @__PURE__ */ jsx(
                      "path",
                      {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M14 5l7 7m0 0l-7 7m7-7H3"
                      }
                    )
                  }
                )
              ] })
            ]
          }
        )
      ]
    },
    tag.id
  );
}
function Tags({ tags, featuredTags, popularTags }) {
  if (!tags || tags.length === 0) {
    return /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 py-16 text-center", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold text-gray-800 mb-4", children: "No Tags Found" }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: "We don't have any tags available at the moment." }),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "/",
          className: "inline-block mt-6 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition-colors",
          children: "Back to Homepage"
        }
      )
    ] });
  }
  return /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 py-8", children: [
    /* @__PURE__ */ jsxs("section", { className: "mb-12 text-center", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-4xl font-bold text-gray-800 mb-4", children: "Explore Topics" }),
      /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600 max-w-3xl mx-auto", children: "Browse all our content categories and find exactly what you're looking for." })
    ] }),
    featuredTags && featuredTags.length > 0 && /* @__PURE__ */ jsxs("section", { className: "mb-16", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-semibold text-gray-800 mb-6", children: "Featured Topics" }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: featuredTags.map((tag) => /* @__PURE__ */ jsx(SkeletonCard, { tag }, tag.id)) })
    ] }),
    popularTags && popularTags.length > 0 && /* @__PURE__ */ jsxs("section", { className: "mb-16", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-semibold text-gray-800 mb-6", children: "Popular Topics" }),
      /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-3", children: popularTags.map((tag) => {
        var _a;
        return /* @__PURE__ */ jsxs(
          "a",
          {
            href: `/tags/${tag.slug}`,
            className: "bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-full transition-colors flex items-center",
            children: [
              /* @__PURE__ */ jsxs("span", { className: "mr-2", children: [
                "#",
                tag.name
              ] }),
              /* @__PURE__ */ jsx("span", { className: "bg-gray-200 text-gray-700 px-2 py-0.5 rounded-full text-xs", children: ((_a = tag.count) == null ? void 0 : _a.posts) || 0 })
            ]
          },
          tag.id
        );
      }) })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "mb-16", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-semibold text-gray-800 mb-6", children: "All Topics" }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6", children: tags.map((tag) => /* @__PURE__ */ jsxs(
        "a",
        {
          href: `/tags/${tag.slug}`,
          className: "bg-white hover:bg-gray-50 border border-gray-200 rounded-lg p-4 transition-colors flex items-center justify-between",
          children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsxs("h3", { className: "font-medium text-gray-800", children: [
                "#",
                tag.name
              ] }),
              tag.count && /* @__PURE__ */ jsxs("span", { className: "text-sm text-gray-500", children: [
                tag.count.posts,
                " ",
                tag.count.posts === 1 ? "post" : "posts"
              ] })
            ] }),
            /* @__PURE__ */ jsx(
              "svg",
              {
                xmlns: "http://www.w3.org/2000/svg",
                className: "h-5 w-5 text-gray-400",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor",
                children: /* @__PURE__ */ jsx(
                  "path",
                  {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M9 5l7 7-7 7"
                  }
                )
              }
            )
          ]
        },
        tag.id
      )) })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "mb-16", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-semibold text-gray-800 mb-6", children: "Tag Cloud" }),
      /* @__PURE__ */ jsx("div", { className: "bg-gray-50 border border-gray-200 rounded-lg p-8", children: /* @__PURE__ */ jsx("div", { className: "flex flex-wrap justify-center gap-3", children: tags.map((tag) => {
        var _a;
        const count = ((_a = tag.count) == null ? void 0 : _a.posts) || 0;
        const maxCount = Math.max(
          ...tags.map((t) => {
            var _a2;
            return ((_a2 = t.count) == null ? void 0 : _a2.posts) || 0;
          })
        );
        const minSize = 1;
        const maxSize = 1.75;
        const fontSize = count > 0 ? minSize + count / maxCount * (maxSize - minSize) : minSize;
        return /* @__PURE__ */ jsxs(
          "a",
          {
            href: `/tags/${tag.slug}`,
            className: "text-blue-600 hover:text-blue-800 transition-colors",
            style: { fontSize: `${fontSize}rem` },
            children: [
              "#",
              tag.name
            ]
          },
          tag.id
        );
      }) }) })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "mb-16 bg-indigo-50 p-8 rounded-lg shadow-sm text-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-semibold text-indigo-900 mb-3", children: "Looking for Something Specific?" }),
      /* @__PURE__ */ jsx("p", { className: "text-indigo-800 mb-6 max-w-2xl mx-auto", children: "If you can't find what you're looking for in our topics, try using our search feature or contact us for assistance." }),
      /* @__PURE__ */ jsxs("div", { className: "flex justify-center gap-4", children: [
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "/search",
            className: "px-5 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition-colors",
            children: "Search Content"
          }
        ),
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "/contact",
            className: "px-5 py-2 bg-white text-indigo-600 border border-indigo-600 rounded hover:bg-indigo-50 transition-colors",
            children: "Contact Us"
          }
        )
      ] })
    ] })
  ] });
}
async function onBeforeRender() {
  try {
    const { tags } = await fetchGhostData("tags", {
      include: "count.posts",
      limit: "all"
    });
    if (!tags || tags.length === 0) {
      return {
        pageContext: {
          tags: []
        }
      };
    }
    const sortedTags = [...tags].sort((a, b) => {
      var _a, _b;
      const countA = ((_a = a.count) == null ? void 0 : _a.posts) || 0;
      const countB = ((_b = b.count) == null ? void 0 : _b.posts) || 0;
      return countB - countA;
    });
    const featuredTags = tags.filter((tag) => tag.featured === true);
    const popularTags = sortedTags.slice(0, 10);
    return {
      pageContext: {
        pageProps: {
          tags,
          featuredTags: featuredTags.length > 0 ? featuredTags : sortedTags.slice(0, 3),
          popularTags
        }
      }
    };
  } catch (error) {
    console.error("Error fetching tags:", error);
    return {
      pageContext: {
        pageProps: {
          tags: [],
          error: "Failed to load tags"
        }
      }
    };
  }
}
const index_page = {
  Page: Tags,
  documentProps: {
    title: "Browse All Topics | My SSR App",
    description: "Explore all content topics and categories in our blog",
    openGraph: {
      title: "Browse All Topics | My SSR App",
      description: "Explore all content topics and categories in our blog",
      type: "website",
      image: "/images/tags-meta-image.jpg"
    }
  }
};
export {
  index_page as default,
  onBeforeRender
};
