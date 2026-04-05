"use client";

import Link from "next/link";
import GameBrowser from "@/components/GameBrowser";
import { useFavorites } from "@/hooks/useFavorites";

export default function FavouritesPage() {
  const { favorites } = useFavorites();

  return (
    <div>
      <div className="bg-linear-to-r from-pink-500 to-rose-500 text-white rounded-2xl mb-8 shadow-md">
        <div className="py-12 md:py-16 px-8 md:px-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Your Favourites
          </h1>
          <p className="text-lg md:text-xl text-pink-100 max-w-2xl">
            Your personal collection of retro masterpieces. Games you save will
            appear here.
          </p>
        </div>
      </div>

      {favorites.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-2xl border border-gray-200 shadow-sm px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            No favourites yet!
          </h2>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            You haven't saved any games to your collection. Go explore the
            classics and click the heart icon to save them here.
          </p>
          <Link
            href="/"
            className="inline-block px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Discover Games
          </Link>
        </div>
      ) : (
        // Show if there are favorites
        <GameBrowser initialGames={favorites} />
      )}
    </div>
  );
}
