"use client";

import { IoHeart, IoHeartOutline } from "react-icons/io5";
import { useFavorites } from "@/hooks/useFavorites";
import { Game } from "@/types/game";

export default function FavoriteButton({ game }: { game: Game }) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const favorite = isFavorite(game.id);

  return (
    <button
      onClick={() => toggleFavorite(game)}
      className={`p-3 rounded-full border transition-colors shrink-0 ${
        favorite
          ? "bg-red-50 border-red-200 hover:bg-red-100"
          : "bg-white border-gray-200 hover:bg-gray-50"
      }`}
      aria-label={favorite ? "Remove from favorites" : "Add to favorites"}
    >
      {favorite ? (
        <IoHeart className="w-6 h-6 fill-red-500 text-red-500" />
      ) : (
        <IoHeartOutline className="w-6 h-6 text-gray-400" />
      )}
    </button>
  );
}
