import Card from "../../components/common/Card";
import FeaturedPost from "../../components/ui/FeaturedPost";
import { fetchGhostData, useGhostContent } from "../../lib/ghost";

function Home({ featuredPosts, latestPosts }) {
  const { data: posts, loading } = useGhostContent("posts", {
    limit: 3,
    include: "authors,tags",
    filter: "featured:true",
  });

  const displayPosts = featuredPosts || posts || [];

  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-16">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          Welcome to Our Site
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl">
          Discover the latest content from our blog, curated just for you. We
          bring insights, news and updates on topics that matter to you.
        </p>
      </section>

      {/* Featured Posts Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Featured Posts
        </h2>
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-gray-200 animate-pulse h-64 rounded-lg"
              ></div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {displayPosts.map((post) => (
              <FeaturedPost key={post.id} post={post} />
            ))}
          </div>
        )}
      </section>

      {/* Latest Posts Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Latest Posts
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {latestPosts.map((post) => (
            <FeaturedPost key={post.id} post={post} />
          ))}
        </div>
      </section>

      {/* Quote of the Day Section */}
      <section className="mb-16 text-center">
        <blockquote className="text-xl italic text-gray-700">
          “Creativity is intelligence having fun.” – Albert Einstein
        </blockquote>
      </section>

      {/* Upcoming Event Section */}
      <section className="mb-16 bg-yellow-100 p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold text-yellow-900 mb-2">
          📢 Upcoming Event
        </h2>
        <p className="text-yellow-800">
          Join our live webinar on "Modern SSR with Vite + Ghost CMS" – April
          15, 2025.{" "}
          <a href="/events" className="text-blue-600 underline">
            Register now
          </a>
        </p>
      </section>

      {/* Featured Category Spotlight Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Spotlight: Tech Trends
        </h2>
        <Card>
          <div className="p-6">
            <p className="text-gray-600">
              Stay ahead with our deep dives into emerging tech trends – AI,
              Web3, and more. Discover how they’re reshaping the world.
            </p>
            <a
              href="/tags/tech"
              className="inline-block mt-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition-colors"
            >
              Explore Tech Topics
            </a>
          </div>
        </Card>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">About Us</h2>
        <Card>
          <div className="p-6">
            <p className="text-gray-600">
              We're dedicated to bringing you the best content on topics that
              matter. Our team of writers and editors work hard to ensure
              quality and relevance.
            </p>
            <a
              href="/about"
              className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
            >
              Learn More
            </a>
          </div>
        </Card>
      </section>
    </div>
  );
}

export async function onBeforeRender() {
  const { posts: featuredPosts } = await fetchGhostData("posts", {
    limit: 3,
    include: "authors,tags",
    filter: "featured:true",
  });

  const { posts: latestPosts } = await fetchGhostData("posts", {
    limit: 3,
    include: "authors,tags",
  });

  return {
    pageContext: {
      pageProps: {
        featuredPosts,
        latestPosts,
      },
    },
  };
}

export default {
  Page: Home,
  documentProps: {
    title: "Home | My SSR App",
    description:
      "Welcome to our server-side rendered application with Ghost CMS",
  },
};
