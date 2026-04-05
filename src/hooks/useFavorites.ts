"use client";

import { useState, useEffect } from "react";
import { Game } from "@/types/game";
import toast from "react-hot-toast";

export function useFavorites() {
  // WStore full game objects
  const [favorites, setFavorites] = useState<Game[]>([]);

  // Run once load and check if there are any saved games
  useEffect(() => {
    const savedFavorites = localStorage.getItem("retro-games-favorites");
    if (savedFavorites) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  // Save favorites array to React state and localStorage
  const saveFavorites = (newFavorites: Game[]) => {
    setFavorites(newFavorites);
    localStorage.setItem("retro-games-favorites", JSON.stringify(newFavorites));
  };

  // Check if a specific game is already favorite by comparing IDs
  const isFavorite = (gameId: number) => {
    return favorites.some((favGame) => favGame.id === gameId);
  };

  const toggleFavorite = (game: Game) => {
    if (isFavorite(game.id)) {
      const newFavorites = favorites.filter(
        (favGame) => favGame.id !== game.id,
      );
      saveFavorites(newFavorites);
      toast.success(`Removed ${game.name} from favorites`);
    } else {
      const newFavorites = [...favorites, game];
      saveFavorites(newFavorites);
      toast.success(`Added ${game.name} to favorites`);
    }
  };

  return {
    favorites,
    isFavorite,
    toggleFavorite,
  };
}
