"use client";

import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import GameCard from "./GameCard";
import { Game } from "@/types/game";
import { useFavorites } from "@/hooks/useFavorites";

interface GameBrowserProps {
  initialGames: Game[];
}

export default function GameBrowser({ initialGames }: GameBrowserProps) {
  // State for search query and sort
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("name-asc");

  // Call favorites hook
  const { isFavorite, toggleFavorite } = useFavorites();

  const filteredAndSortedGames = initialGames
    .filter((game) =>
      game.name.toLowerCase().includes(searchQuery.toLowerCase()),
    )
    .sort((a, b) => {
      switch (sortOption) {
        case "name-asc":
          return a.name.localeCompare(b.name);
        case "name-desc":
          return b.name.localeCompare(a.name);
        case "year-newest":
          return parseInt(b.released) - parseInt(a.released);
        case "year-oldest":
          return parseInt(a.released) - parseInt(b.released);
        default:
          return 0;
      }
    });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <div className="flex-1 relative">
          <IoSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search games..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="w-full sm:w-50 px-4 py-2.5 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 appearance-none cursor-pointer"
        >
          <option value="name-asc">Name A-Z</option>
          <option value="name-desc">Name Z-A</option>
          <option value="year-newest">Year (Newest)</option>
          <option value="year-oldest">Year (Oldest)</option>
        </select>
      </div>

      {filteredAndSortedGames.length === 0 ? (
        <div className="text-center py-12 text-gray-500 bg-white rounded-lg border border-gray-200">
          No games found matching &quot;{searchQuery}&quot;.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredAndSortedGames.map((game) => (
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
  );
}
