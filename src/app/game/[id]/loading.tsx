export default function GameDetailsLoading() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-pulse">
        {/* Back Button Skeleton */}
        <div className="w-32 h-6 bg-gray-200 rounded mb-6"></div>

        {/* Game Content Card Skeleton */}
        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
          <div className="aspect-video w-full bg-gray-200"></div>

          <div className="p-6 sm:p-8">
            <div className="flex items-start justify-between gap-4 mb-6">
              <div className="h-10 bg-gray-200 rounded w-1/2"></div>
              <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
            </div>

            {/* Meta Info Skeleton */}
            <div className="flex flex-wrap items-center gap-6 mb-8 py-4 border-y border-gray-100">
              <div className="w-24 h-6 bg-gray-200 rounded"></div>
              <div className="flex gap-2">
                <div className="w-16 h-6 bg-gray-200 rounded-full"></div>
                <div className="w-20 h-6 bg-gray-200 rounded-full"></div>
              </div>
            </div>

            {/* About Skeleton */}
            <div>
              <div className="h-6 bg-gray-200 rounded w-40 mb-4"></div>
              <div className="space-y-3">
                <div className="h-4 bg-gray-200 rounded w-full"></div>
                <div className="h-4 bg-gray-200 rounded w-full"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                <div className="h-4 bg-gray-200 rounded w-4/5"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
