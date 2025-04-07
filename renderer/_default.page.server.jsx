export { render };
// See https://vite-plugin-ssr.com/data-fetching
export const passToClient = ["pageProps", "urlPathname"];

import ReactDOMServer from "react-dom/server";
import { dangerouslySkipEscape, escapeInject } from "vite-plugin-ssr";
import { fetchGhostData } from "../lib/ghost";
import { PageShell } from "./PageShell";

async function render(pageContext) {
  // This render() hook only supports SSR, see https://vite-plugin-ssr.com/render-modes for how to modify render() to support SPA

  const { Page, routeParams } = pageContext;

  // Fetch data needed for this page
  let pageProps = {};
  if (pageContext.exports.fetchData) {
    // Use the page's fetchData function if it exists
    console.time("fetchData time");
    pageProps = await pageContext.exports.fetchData(routeParams);
    console.timeEnd("fetchData time");
  } else {
    // Default data fetching based on route
    // For dynamic post pages
    if (routeParams.slug) {
      const postData = await fetchGhostData("posts", {
        slug: routeParams.slug,
        include: "authors,tags",
      });
      pageProps = { post: postData.posts?.[0] || null };
    }
    // For blog listing
    else if (pageContext.urlPathname === "/blog") {
      const postsData = await fetchGhostData("posts", {
        limit: 10,
        include: "authors,tags",
      });
      pageProps = { posts: postsData.posts || [] };
    }
  }
  if (!Page)
    throw new Error("My render() hook expects pageContext.Page to be defined");
  const pageHtml = ReactDOMServer.renderToString(
    <PageShell pageContext={pageContext}>
      <Page {...pageProps} />
    </PageShell>
  );

  // See https://vite-plugin-ssr.com/head
  // Generate metadata for SEO
  const title =
    pageProps.post?.title || pageContext.exports.title || "My SSR App";
  const description =
    pageProps.post?.excerpt ||
    pageContext.exports.description ||
    "A server-side rendered React application";
  const ogImage =
    pageProps.post?.feature_image || "https://example.com/default-image.jpg";

  // Return the full HTML document
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
