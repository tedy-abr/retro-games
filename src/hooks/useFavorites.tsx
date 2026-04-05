"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { Game } from "@/types/game";
import toast from "react-hot-toast";

interface FavoritesContextType {
  favorites: Game[];
  isFavorite: (gameId: number) => boolean;
  toggleFavorite: (game: Game) => void;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(
  undefined,
);

export function FavoritesProvider({ children }: { children: ReactNode }) {
  const [favorites, setFavorites] = useState<Game[]>([]);

  useEffect(() => {
    const savedFavorites = localStorage.getItem("retro-games-favorites");
    if (savedFavorites) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  const saveFavorites = (newFavorites: Game[]) => {
    setFavorites(newFavorites);
    localStorage.setItem("retro-games-favorites", JSON.stringify(newFavorites));
  };

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

  return (
    <FavoritesContext.Provider
      value={{ favorites, isFavorite, toggleFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const context = useContext(FavoritesContext);
  if (context === undefined) {
    throw new Error("useFavorites must be used within a FavoritesProvider");
  }
  return context;
}
