// components/SkeletonCard.tsx
import { useState } from "react";
import Card from "../common/Card";

export default function SkeletonCard({ tag }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <Card
      key={tag.id}
      className="hover:shadow-lg transition-shadow relative w-full h-full flex flex-col overflow-hidden"
    >
      {/* Skeleton Overlay */}
      {!loaded && (
        <div className="absolute inset-0 z-10 flex flex-col gap-4 animate-pulse bg-white rounded">
          <div className="h-40 w-full bg-gray-200 rounded" />
          <div className="px-5 flex-grow gap-2 flex flex-col">
            <div className="h-6 w-3/4 bg-gray-200 rounded" />
            <div className="h-10 w-full bg-gray-200 rounded" />
            <div className="h-4 w-1/2  px-2 py-1 bg-gray-200 rounded" />
          </div>
          <div className="mx-6 h-6 mb-4 w-3/4 bg-gray-200 rounded mt-auto" />
        </div>
      )}

      <a
        href={`/tags/${tag.slug}`}
        className={`block h-full flex flex-col transition-opacity duration-500 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="relative w-full h-40 flex-none">
          <img
            src={tag.feature_image || "https://placehold.co/400x160"}
            alt={tag.name}
            className="w-full h-full object-cover rounded-t"
            onLoad={() => setLoaded(true)}
            loading="lazy"
          />
        </div>

        <div className="px-6 py-3 flex-grow gap-2 flex flex-col">
          <h3 className="text-xl font-semibold text-gray-800 ">{tag.name}</h3>
          {tag.description ? (
            <p className="text-gray-600 line-clamp-3 leading-[1.2]">
              {tag.description}
            </p>
          ) : (
            <div className="h-10"></div> // Empty space placeholder when no description
          )}
          <div className="mt-auto">
            <span className="bg-blue-100 text-blue-800 rounded px-2 py-1 text-sm">
              {tag.count?.posts || 0} posts
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between px-6 mt-auto mb-4 border-t border-gray-100">
          <span className="text-sm text-gray-500 dark:text-gray-400">
            Explore collection
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-indigo-600 dark:text-indigo-400 transform group-hover:translate-x-1 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </div>
      </a>
    </Card>
  );
}
