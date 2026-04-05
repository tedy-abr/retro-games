import { fetchGames } from "@/api/games";
import GameCard from "@/components/GameCard";

export default async function HomePage() {
  const gamesResponse = await fetchGames();
  const games = gamesResponse.data;

  return (
    <div>
      {/* Hero */}
      <div className="bg-linear-to-r from-indigo-600 to-purple-600 text-white rounded-2xl mb-8 shadow-md">
        <div className="py-12 md:py-16 px-8 md:px-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Discover Classic Games
          </h1>
          <p className="text-lg md:text-xl text-indigo-100 max-w-2xl">
            Explore the golden age of gaming. Browse through a curated
            collection of retro games that defined generations.
          </p>
        </div>
      </div>

      {/* Games Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {games.map((game) => (
          <GameCard
            key={game.id}
            game={game}
            // Pass false for now until real favorites functionality is implemented
            isFavorite={false}
          />
        ))}
      </div>
    </div>
  );
}
