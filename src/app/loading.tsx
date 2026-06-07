export default function Loading() {
  return (
    <div className="w-full animate-pulse">
      {/* Hero Skeleton */}
      <div className="h-48 md:h-64 bg-gray-200 rounded-2xl mb-8 w-full"></div>

      {/* Grid Skeleton */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="bg-white rounded-lg border border-gray-200 overflow-hidden"
          >
            <div className="aspect-4/3 bg-gray-200 w-full"></div>
            <div className="p-4">
              <div className="flex justify-between items-start mb-4">
                <div className="h-5 bg-gray-200 rounded w-2/3"></div>
                <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
              </div>
              <div className="flex gap-2">
                <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                <div className="h-4 bg-gray-200 rounded w-1/3"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
