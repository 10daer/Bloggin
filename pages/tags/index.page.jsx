import SkeletonCard from "../../components/ui/SkeletonCard";
import { fetchGhostData } from "../../lib/ghost";

function Tags({ tags, featuredTags, popularTags }) {
  if (!tags || tags.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">No Tags Found</h1>
        <p className="text-gray-600">
          We don't have any tags available at the moment.
        </p>
        <a
          href="/"
          className="inline-block mt-6 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition-colors"
        >
          Back to Homepage
        </a>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header Section */}
      <section className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Explore Topics
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Browse all our content categories and find exactly what you're looking
          for.
        </p>
      </section>

      {/* Featured Tags Section - Show only if we have featured tags */}
      {featuredTags && featuredTags.length > 0 && (
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Featured Topics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredTags.map((tag) => (
              <SkeletonCard key={tag.id} tag={tag} />
            ))}
          </div>
        </section>
      )}

      {/* Popular Tags Section */}
      {popularTags && popularTags.length > 0 && (
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Popular Topics
          </h2>
          <div className="flex flex-wrap gap-3">
            {popularTags.map((tag) => (
              <a
                key={tag.id}
                href={`/tags/${tag.slug}`}
                className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-full transition-colors flex items-center"
              >
                <span className="mr-2">#{tag.name}</span>
                <span className="bg-gray-200 text-gray-700 px-2 py-0.5 rounded-full text-xs">
                  {tag.count?.posts || 0}
                </span>
              </a>
            ))}
          </div>
        </section>
      )}

      {/* All Tags Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          All Topics
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {tags.map((tag) => (
            <a
              key={tag.id}
              href={`/tags/${tag.slug}`}
              className="bg-white hover:bg-gray-50 border border-gray-200 rounded-lg p-4 transition-colors flex items-center justify-between"
            >
              <div>
                <h3 className="font-medium text-gray-800">#{tag.name}</h3>
                {tag.count && (
                  <span className="text-sm text-gray-500">
                    {tag.count.posts} {tag.count.posts === 1 ? "post" : "posts"}
                  </span>
                )}
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          ))}
        </div>
      </section>

      {/* Tag Cloud Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Tag Cloud</h2>
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-8">
          <div className="flex flex-wrap justify-center gap-3">
            {tags.map((tag) => {
              // Calculate font size based on post count (min 1rem, max 1.75rem)
              const count = tag.count?.posts || 0;
              const maxCount = Math.max(
                ...tags.map((t) => t.count?.posts || 0)
              );
              const minSize = 1;
              const maxSize = 1.75;
              const fontSize =
                count > 0
                  ? minSize + (count / maxCount) * (maxSize - minSize)
                  : minSize;

              return (
                <a
                  key={tag.id}
                  href={`/tags/${tag.slug}`}
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                  style={{ fontSize: `${fontSize}rem` }}
                >
                  #{tag.name}
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mb-16 bg-indigo-50 p-8 rounded-lg shadow-sm text-center">
        <h2 className="text-2xl font-semibold text-indigo-900 mb-3">
          Looking for Something Specific?
        </h2>
        <p className="text-indigo-800 mb-6 max-w-2xl mx-auto">
          If you can't find what you're looking for in our topics, try using our
          search feature or contact us for assistance.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="/search"
            className="px-5 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition-colors"
          >
            Search Content
          </a>
          <a
            href="/contact"
            className="px-5 py-2 bg-white text-indigo-600 border border-indigo-600 rounded hover:bg-indigo-50 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
}

export async function onBeforeRender() {
  try {
    // Get all tags with post count
    const { tags } = await fetchGhostData("tags", {
      include: "count.posts",
      limit: "all",
    });

    if (!tags || tags.length === 0) {
      return {
        pageContext: {
          tags: [],
        },
      };
    }

    // Sort tags by post count for popular tags
    const sortedTags = [...tags].sort((a, b) => {
      const countA = a.count?.posts || 0;
      const countB = b.count?.posts || 0;
      return countB - countA;
    });

    // Get featured tags (with featured flag or meta property)
    const featuredTags = tags.filter((tag) => tag.featured === true);

    // Get popular tags (top 10 by post count)
    const popularTags = sortedTags.slice(0, 10);

    return {
      pageContext: {
        pageProps: {
          tags,
          featuredTags:
            featuredTags.length > 0 ? featuredTags : sortedTags.slice(0, 3),
          popularTags,
        },
      },
    };
  } catch (error) {
    console.error("Error fetching tags:", error);
    return {
      pageContext: {
        pageProps: {
          tags: [],
          error: "Failed to load tags",
        },
      },
    };
  }
}

export default {
  Page: Tags,
  documentProps: {
    title: "Browse All Topics | My SSR App",
    description: "Explore all content topics and categories in our blog",
    openGraph: {
      title: "Browse All Topics | My SSR App",
      description: "Explore all content topics and categories in our blog",
      type: "website",
      image: "/images/tags-meta-image.jpg",
    },
  },
};
