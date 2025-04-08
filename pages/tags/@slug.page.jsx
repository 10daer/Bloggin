import Card from "../../components/common/Card";

function Tag({ tag, posts }) {
  // Handle case where tag might not exist
  if (!tag) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Tag not found</h1>
        <p className="text-gray-600">
          The tag you're looking for doesn't seem to exist.
        </p>
        <a
          href="/tags"
          className="inline-block mt-6 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition-colors"
        >
          Browse all tags
        </a>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Tag Header Section */}
      <section className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">{tag.name}</h1>
        {tag.description && (
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {tag.description}
          </p>
        )}
        <div className="mt-4 flex justify-center">
          <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">
            {posts.length} {posts.length === 1 ? "Post" : "Posts"}
          </span>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Card key={post.id}>
              <div className="relative">
                {post.feature_image && (
                  <a href={`/posts/${post.slug}`}>
                    <img
                      src={post.feature_image}
                      alt={post.title}
                      className="w-full h-48 object-cover rounded-t"
                    />
                  </a>
                )}
                {post.primary_tag && post.primary_tag.slug !== tag.slug && (
                  <a
                    href={`/tags/${post.primary_tag.slug}`}
                    className="absolute top-4 left-4 bg-blue-600 text-white text-xs px-2 py-1 rounded"
                  >
                    {post.primary_tag.name}
                  </a>
                )}
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-3">
                  <a
                    href={`/posts/${post.slug}`}
                    className="text-gray-800 hover:text-blue-600 transition-colors"
                  >
                    {post.title}
                  </a>
                </h2>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt || post.custom_excerpt || ""}
                </p>
                {post.authors && post.authors.length > 0 && (
                  <div className="flex items-center mt-4">
                    <img
                      src={
                        post.authors[0].profile_image ||
                        "/images/default-avatar.png"
                      }
                      alt={post.authors[0].name}
                      className="w-8 h-8 rounded-full mr-2"
                    />
                    <span className="text-sm text-gray-700">
                      {post.authors[0].name}
                    </span>
                    <span className="text-sm text-gray-500 ml-auto">
                      {new Date(post.published_at).toLocaleDateString()}
                    </span>
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Related Tags Section */}
      {tag.related_tags && tag.related_tags.length > 0 && (
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Related Tags
          </h2>
          <div className="flex flex-wrap gap-2">
            {tag.related_tags.map((relatedTag) => (
              <a
                key={relatedTag.slug}
                href={`/tags/${relatedTag.slug}`}
                className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-3 py-1 rounded-full transition-colors"
              >
                #{relatedTag.name}
              </a>
            ))}
          </div>
        </section>
      )}

      {/* Call to Action */}
      <section className="mb-16 bg-blue-50 p-6 rounded-lg shadow text-center">
        <h2 className="text-xl font-semibold text-blue-900 mb-2">
          Subscribe to our Newsletter
        </h2>
        <p className="text-blue-800 mb-4">
          Get the latest articles about {tag.name} delivered to your inbox.
        </p>
        <div className="flex max-w-md mx-auto">
          <input
            type="email"
            placeholder="Your email address"
            className="flex-1 px-4 py-2 rounded-l border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r transition-colors">
            Subscribe
          </button>
        </div>
      </section>
    </div>
  );
}

export default {
  Page: Tag,
  documentProps: ({ tag }) => {
    if (!tag) {
      return {
        title: "Tag Not Found",
        description: "The requested tag could not be found.",
      };
    }

    return {
      title: `${tag.name} | My SSR App`,
      description:
        tag.description || `Browse all posts tagged with ${tag.name}`,
      openGraph: {
        title: `${tag.name} | My SSR App`,
        description:
          tag.description || `Browse all posts tagged with ${tag.name}`,
        type: "website",
        image: tag.feature_image || "/images/default-tag-image.jpg",
      },
    };
  },
};
