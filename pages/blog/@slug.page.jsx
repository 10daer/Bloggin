import { Calendar, Clock, Tag } from "lucide-react";
import { formatDate } from "../../lib/utils";

function Post({ post }) {
  if (!post) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Post not found</h1>
        <p className="mb-8">
          The post you're looking for doesn't exist or has been removed.
        </p>
        <a
          href="/blog"
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
        >
          Back to Blog
        </a>
      </div>
    );
  }

  return (
    <article className="max-w-4xl mx-auto px-4 py-8 bg-white dark:bg-[inherit]">
      {post.feature_image && (
        <div className="mb-8 rounded-xl overflow-hidden shadow-lg">
          <img
            src={post.feature_image}
            alt={post.title}
            className="w-full h-96 object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}

      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
        {post.primary_author && (
          <div className="flex items-center gap-2">
            {post.primary_author.profile_image ? (
              <img
                src={post.primary_author.profile_image}
                alt={post.primary_author.name}
                className="w-10 h-10 rounded-full border-2 border-indigo-500"
              />
            ) : (
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold">
                {post.primary_author.name.charAt(0)}
              </div>
            )}
            <span className="font-medium">{post.primary_author.name}</span>
          </div>
        )}

        <div className="flex items-center gap-1">
          <Calendar size={16} />
          <time dateTime={post.published_at}>
            {formatDate(post.published_at)}
          </time>
        </div>

        {post.reading_time && (
          <div className="flex items-center gap-1">
            <Clock size={16} />
            <span>{post.reading_time} min read</span>
          </div>
        )}
      </div>

      <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6">
        {post.title}
      </h1>

      <div
        className="prose prose-lg dark:prose-invert max-w-none mb-8 prose-headings:text-indigo-700 dark:prose-headings:text-indigo-300 prose-a:text-purple-600 dark:prose-a:text-purple-400 hover:prose-a:text-purple-800 dark:hover:prose-a:text-purple-300"
        dangerouslySetInnerHTML={{ __html: post.html }}
      />

      {post.tags && post.tags.length > 0 && (
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-2 mb-4">
            <Tag size={20} className="text-indigo-600" />
            <h3 className="text-lg font-medium">Topics</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <a
                key={tag.id}
                href={`/tags/${tag.slug}`}
                className="px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900 dark:to-purple-900 rounded-lg text-sm font-medium text-indigo-700 dark:text-indigo-300 hover:shadow-md transition-all duration-300"
              >
                {tag.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </article>
  );
}

export default {
  Page: Post,
  documentProps: {
    title: "Post",
    description: "This is the post page of the app",
  },
};
