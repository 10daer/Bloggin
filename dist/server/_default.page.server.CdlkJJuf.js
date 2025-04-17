import { jsx, jsxs } from "react/jsx-runtime";
import ReactDOMServer from "react-dom/server";
import { dangerouslySkipEscape, escapeInject } from "vite-plugin-ssr";
import { f as fetchGhostData } from "./ghost.DTJP45JR.js";
import PropTypes from "prop-types";
import React, { useState, createContext, useContext, useEffect } from "react";
import { Transition } from "@headlessui/react";
import "@tryghost/content-api";
function Footer() {
  const year = (/* @__PURE__ */ new Date()).getFullYear();
  return /* @__PURE__ */ jsx("footer", { className: "bg-gray-100 py-8 mt-12", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
    /* @__PURE__ */ jsxs("div", { className: "md:flex md:justify-between", children: [
      /* @__PURE__ */ jsxs("div", { className: "mb-6 md:mb-0", children: [
        /* @__PURE__ */ jsx("a", { href: "/", className: "text-xl font-bold text-blue-600", children: "MySite" }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-gray-600", children: "A modern SSR application built with Vite and React" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-8 md:gap-16", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold mb-4", children: "Navigation" }),
          /* @__PURE__ */ jsxs("ul", { className: "space-y-2", children: [
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
              "a",
              {
                href: "/",
                className: "text-gray-600 hover:text-blue-600 transition-colors",
                children: "Home"
              }
            ) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
              "a",
              {
                href: "/blog",
                className: "text-gray-600 hover:text-blue-600 transition-colors",
                children: "Blog"
              }
            ) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
              "a",
              {
                href: "/about",
                className: "text-gray-600 hover:text-blue-600 transition-colors",
                children: "About"
              }
            ) })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold mb-4", children: "Connect" }),
          /* @__PURE__ */ jsxs("ul", { className: "space-y-2", children: [
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
              "a",
              {
                href: "#",
                className: "text-gray-600 hover:text-blue-600 transition-colors",
                children: "Twitter"
              }
            ) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
              "a",
              {
                href: "#",
                className: "text-gray-600 hover:text-blue-600 transition-colors",
                children: "GitHub"
              }
            ) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
              "a",
              {
                href: "#",
                className: "text-gray-600 hover:text-blue-600 transition-colors",
                children: "LinkedIn"
              }
            ) })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-8 pt-6 border-t border-gray-200 text-center text-gray-500", children: /* @__PURE__ */ jsxs("p", { children: [
      "© ",
      year,
      " MySite. All rights reserved."
    ] }) })
  ] }) });
}
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return /* @__PURE__ */ jsx("header", { className: "bg-white shadow-sm", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 py-4", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
      /* @__PURE__ */ jsx("a", { href: "/", className: "text-2xl font-bold text-blue-600", children: "MySite" }),
      /* @__PURE__ */ jsx(
        "button",
        {
          type: "button",
          className: "md:hidden p-2",
          onClick: () => setIsMenuOpen(!isMenuOpen),
          children: /* @__PURE__ */ jsx("svg", { className: "w-6 h-6", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: isMenuOpen ? /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M6 18L18 6M6 6l12 12" }) : /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M4 6h16M4 12h16M4 18h16" }) })
        }
      ),
      /* @__PURE__ */ jsxs("nav", { className: "hidden md:flex space-x-6", children: [
        /* @__PURE__ */ jsx("a", { href: "/", className: "text-gray-700 hover:text-blue-600 transition-colors", children: "Home" }),
        /* @__PURE__ */ jsx("a", { href: "/blog", className: "text-gray-700 hover:text-blue-600 transition-colors", children: "Blog" }),
        /* @__PURE__ */ jsx("a", { href: "/about", className: "text-gray-700 hover:text-blue-600 transition-colors", children: "About" })
      ] })
    ] }),
    isMenuOpen && /* @__PURE__ */ jsx("div", { className: "md:hidden mt-4 pb-2", children: /* @__PURE__ */ jsxs("nav", { className: "flex flex-col space-y-3", children: [
      /* @__PURE__ */ jsx("a", { href: "/", className: "text-gray-700 hover:text-blue-600 transition-colors", children: "Home" }),
      /* @__PURE__ */ jsx("a", { href: "/blog", className: "text-gray-700 hover:text-blue-600 transition-colors", children: "Blog" }),
      /* @__PURE__ */ jsx("a", { href: "/about", className: "text-gray-700 hover:text-blue-600 transition-colors", children: "About" })
    ] }) })
  ] }) });
}
let childrenPropType = PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired;
const Context = createContext(void 0);
PageContextProvider.propTypes = {
  pageContext: PropTypes.any,
  children: childrenPropType
};
function PageContextProvider({ pageContext, children }) {
  return /* @__PURE__ */ jsx(Context.Provider, { value: pageContext, children });
}
function usePageContext() {
  const pageContext = useContext(Context);
  if (!pageContext)
    throw new Error("usePageContext must be used within PageContextProvider");
  return pageContext;
}
function App({ children }) {
  const { urlPathname } = usePageContext();
  const [isShowing, setIsShowing] = useState(false);
  useEffect(() => {
    setIsShowing(true);
    return () => setIsShowing(false);
  }, [urlPathname]);
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col min-h-screen", children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsx("main", { className: "flex-grow", children: /* @__PURE__ */ jsx(
      Transition,
      {
        show: isShowing,
        enter: "transition-opacity duration-300",
        enterFrom: "opacity-0",
        enterTo: "opacity-100",
        leave: "transition-opacity duration-300",
        leaveFrom: "opacity-100",
        leaveTo: "opacity-0",
        children: /* @__PURE__ */ jsx("div", { children })
      }
    ) }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
PageShell.propTypes = {
  pageContext: PropTypes.any,
  children: childrenPropType
};
function PageShell({ pageContext, children }) {
  return /* @__PURE__ */ jsx(React.StrictMode, { children: /* @__PURE__ */ jsx(PageContextProvider, { pageContext, children: /* @__PURE__ */ jsx(App, { children }) }) });
}
const passToClient = ["pageProps", "urlPathname"];
async function render(pageContext) {
  var _a, _b, _c, _d;
  const { Page, routeParams } = pageContext;
  let pageProps = {};
  if (pageContext.exports.fetchData) {
    console.time("fetchData time");
    pageProps = await pageContext.exports.fetchData(routeParams);
    console.timeEnd("fetchData time");
  } else {
    if (routeParams.slug) {
      const postData = await fetchGhostData("posts", {
        slug: routeParams.slug,
        include: "authors,tags"
      });
      pageProps = { post: ((_a = postData.posts) == null ? void 0 : _a[0]) || null };
    } else if (pageContext.urlPathname === "/blog") {
      const postsData = await fetchGhostData("posts", {
        limit: 10,
        include: "authors,tags"
      });
      pageProps = { posts: postsData.posts || [] };
    }
  }
  if (!Page)
    throw new Error("My render() hook expects pageContext.Page to be defined");
  const pageHtml = ReactDOMServer.renderToString(
    /* @__PURE__ */ jsx(PageShell, { pageContext, children: /* @__PURE__ */ jsx(Page, { ...pageProps }) })
  );
  const title = ((_b = pageProps.post) == null ? void 0 : _b.title) || pageContext.exports.title || "My SSR App";
  const description = ((_c = pageProps.post) == null ? void 0 : _c.excerpt) || pageContext.exports.description || "A server-side rendered React application";
  const ogImage = ((_d = pageProps.post) == null ? void 0 : _d.feature_image) || "https://example.com/default-image.jpg";
  return escapeInject`<!DOCTYPE html>
 <html lang="en">
   <head>
     <meta charset="UTF-8" />
     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
     <meta name="description" content="${description}" />
     <meta property="og:title" content="${title}" />
     <meta property="og:description" content="${description}" />
     <meta property="og:image" content="${ogImage}" />
     <meta property="twitter:card" content="summary_large_image" />
     <link rel="preconnect" href="https://fonts.googleapis.com">
     <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
     <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
     <title>${title}</title>
   </head>
   <body>
     <div id="react-root">${dangerouslySkipEscape(pageHtml)}</div>
   </body>
 </html>`;
}
export {
  passToClient,
  render
};
