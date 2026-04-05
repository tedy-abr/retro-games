import { GamesResponse, SingleGameResponse } from "@/types/game";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

// Fetch all games
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

// Fetch a single game by ID
export async function fetchGameById(id: string): Promise<SingleGameResponse> {
  const endpoint = `${API_URL}/old-games/${id}`;
  const response = await fetch(endpoint);

  if (!response.ok) {
    throw new Error(`Failed to fetch game details: ${response.status}`);
  }

  const json = await response.json();
  return json as SingleGameResponse;
}
