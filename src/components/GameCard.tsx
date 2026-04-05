"use client";

import Link from "next/link";
import Image from "next/image";
import { IoHeartOutline, IoHeart } from "react-icons/io5";
import { Game } from "@/types/game";

interface GameCardProps {
  game: Game;
  isFavorite?: boolean;
  onToggleFavorite?: () => void;
}

export default function GameCard({
  game,
  isFavorite = false,
  onToggleFavorite,
}: GameCardProps) {
  return (
    <div className="group bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
      <Link href={`/game/${game.id}`} className="block">
        <div className="relative aspect-4/3 overflow-hidden bg-gray-100">
          <Image
            src={game.image.url}
            alt={game.image.alt || game.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            loading="eager"
          />
        </div>
      </Link>

      <div className="p-4">
        <div className="flex justify-between items-start gap-2 mb-2">
          <Link href={`/game/${game.id}`} className="flex-1">
            <h3 className="font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors line-clamp-1">
              {game.name}
            </h3>
          </Link>

          <button
            onClick={(e) => {
              e.preventDefault();
              if (onToggleFavorite) onToggleFavorite();
            }}
            className="p-1.5 rounded-full hover:bg-gray-100 transition-colors shrink-0"
            aria-label={
              isFavorite ? "Remove from favorites" : "Add to favorites"
            }
          >
            {isFavorite ? (
              <IoHeart className="w-5 h-5 fill-red-500 text-red-500 transition-colors" />
            ) : (
              <IoHeartOutline className="w-5 h-5 text-gray-400 hover:text-red-500 transition-colors" />
            )}
          </button>
        </div>

        <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
          <span className="font-medium">{game.released}</span>
          <span className="text-gray-300">•</span>
          <span className="line-clamp-1">{game.genre.join(", ")}</span>
        </div>
      </div>
    </div>
  );
}
