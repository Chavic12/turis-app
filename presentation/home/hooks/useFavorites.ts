import { useState } from "react";

export interface UseFavoritesReturn {
  favorites: Set<number>;
  toggleFavorite: (eventId: number) => void;
  isFavorite: (eventId: number) => boolean;
}

export const useFavorites = (
  initialFavorites: number[] = []
): UseFavoritesReturn => {
  const [favorites, setFavorites] = useState(new Set(initialFavorites));

  const toggleFavorite = (eventId: number) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(eventId)) {
      newFavorites.delete(eventId);
    } else {
      newFavorites.add(eventId);
    }
    setFavorites(newFavorites);
  };

  const isFavorite = (eventId: number) => {
    return favorites.has(eventId);
  };

  return {
    favorites,
    toggleFavorite,
    isFavorite,
  };
};
