"use client";

import { useState } from "react";
import GameCard from "./GameCard";
import { useFavorites } from "@/hooks/useFavorites";
import { Game } from "@/types/game";

interface GenresBrowserProps {
  games: Game[];
  genreStats: { name: string; count: number }[];
}

export default function GenresBrowser({
  games,
  genreStats,
}: GenresBrowserProps) {
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null);
  const { isFavorite, toggleFavorite } = useFavorites();

  // Filter games based on the selected genre
  const filteredGames = selectedGenre
    ? games.filter((game) => game.genre.includes(selectedGenre))
    : [];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Genres Grid */}
      <div className="mb-12">
        <h2 className="text-xl font-bold text-gray-900 mb-4">All Genres</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {genreStats.map((stat) => (
            <button
              key={stat.name}
              onClick={() => setSelectedGenre(stat.name)}
              className={`p-4 rounded-xl border-2 text-left transition-all hover:shadow-md ${
                selectedGenre === stat.name
                  ? "border-indigo-600 bg-indigo-50 shadow-sm"
                  : "border-gray-200 bg-white hover:border-gray-300"
              }`}
            >
              <div className="font-bold text-gray-900 mb-1 line-clamp-1">
                {stat.name}
              </div>
              <div className="text-sm font-medium text-gray-500">
                {stat.count} {stat.count === 1 ? "game" : "games"}
              </div>
            </button>
          ))}
        </div>
      </div>

      {selectedGenre && (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900">
              {selectedGenre} Games
            </h2>
            <button
              onClick={() => setSelectedGenre(null)}
              className="text-sm px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 hover:text-gray-900 font-medium transition-colors"
            >
              Clear selection
            </button>
          </div>

          {filteredGames.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-xl border border-gray-200">
              <p className="text-gray-500 font-medium">
                No games found in the {selectedGenre} genre.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredGames.map((game) => (
                <GameCard
                  key={game.id}
                  game={game}
                  isFavorite={isFavorite(game.id)}
                  onToggleFavorite={() => toggleFavorite(game)}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
