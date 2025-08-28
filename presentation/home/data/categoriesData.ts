export interface Category {
  id: number;
  name: string;
  icon: string;
  color: string;
}

export const categories: Category[] = [
  { id: 1, name: "Música", icon: "🎵", color: "#FF6B6B" },
  { id: 2, name: "Deportes", icon: "⚽", color: "#4ECDC4" },
  { id: 3, name: "Ferias", icon: "🎪", color: "#45B7D1" },
  { id: 4, name: "Cultura", icon: "🎭", color: "#96CEB4" },
  { id: 5, name: "Gastronomía", icon: "🍽️", color: "#FFEAA7" },
];
