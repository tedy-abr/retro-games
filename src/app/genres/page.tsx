import { fetchGames } from "@/api/games";
import GenresBrowser from "@/components/GenresBrowser";

export default async function GenresPage() {
  const response = await fetchGames();
  const games = response.data;
  const genreCounts: Record<string, number> = {};

  games.forEach((game) => {
    game.genre.forEach((genreName) => {
      genreCounts[genreName] = (genreCounts[genreName] || 0) + 1;
    });
  });

  // Convert object into an array and sort it alphabetically
  const genreStats = Object.entries(genreCounts)
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Browse by Genre
          </h1>
          <p className="text-gray-600 max-w-2xl text-lg">
            Explore games by category. Select a genre to see all related titles
            from the golden age of gaming.
          </p>
        </div>
      </div>
      <GenresBrowser games={games} genreStats={genreStats} />
    </div>
  );
}
