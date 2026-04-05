// src/app/game/[id]/page.tsx
import Link from "next/link";
import Image from "next/image";
import {
  IoArrowBack,
  IoCalendarOutline,
  IoPricetagOutline,
} from "react-icons/io5";
import { fetchGameById } from "@/api/games";
import FavoriteButton from "@/components/FavoriteButton";

export default async function GameDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>; // Updated type for Next.js 15
}) {
  const resolvedParams = await params;
  const gameId = resolvedParams.id;
  const gameResponse = await fetchGameById(gameId);
  const game = gameResponse.data;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 transition-colors font-medium"
        >
          <IoArrowBack className="w-5 h-5" />
          <span>Back to Games</span>
        </Link>

        {/* Game Content Card */}
        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
          <div className="relative aspect-video w-full overflow-hidden bg-gray-100">
            <Image
              src={game.image.url}
              alt={game.image.alt || game.name}
              fill
              sizes="(max-width: 896px) 100vw, 896px"
              className="object-cover"
            />
          </div>

          <div className="p-6 sm:p-8">
            <div className="flex items-start justify-between gap-4 mb-6">
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
                {game.name}
              </h1>
              <FavoriteButton game={game} />
            </div>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 mb-8 py-4 border-y border-gray-100">
              <div className="flex items-center gap-2 text-gray-600">
                <IoCalendarOutline className="w-5 h-5" />
                <span className="font-medium">{game.released}</span>
              </div>
              <div className="flex items-center gap-2">
                <IoPricetagOutline className="w-5 h-5 text-gray-600" />
                <div className="flex flex-wrap gap-2">
                  {game.genre.map((genre) => (
                    <span
                      key={genre}
                      className="px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-sm font-medium"
                    >
                      {genre}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                About the Game
              </h2>
              <p className="text-gray-600 leading-relaxed whitespace-pre-line text-lg">
                {game.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
