import { GamesResponse } from "@/types/game";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function fetchGames(): Promise<GamesResponse> {
  const endpoint = `${API_URL}/old-games`;

  const response = await fetch(endpoint);

  if (!response.ok) {
    throw new Error(
      `Failed to fetch games: ${response.status} ${response.statusText}`,
    );
  }

  const json = await response.json();
  return json as GamesResponse;
}
