export interface BannerEvent {
  id: number;
  title: string;
  subtitle: string;
  image: string;
}

export const bannerEvents: BannerEvent[] = [
  {
    id: 1,
    title: "🎉 Hoy en Loja: Feria Cultural",
    subtitle: "Plaza San Francisco",
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&h=200&fit=crop",
  },
  {
    id: 2,
    title: "🎵 Concierto en vivo esta noche!",
    subtitle: "Teatro Bolívar",
    image:
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=400&h=200&fit=crop",
  },
  {
    id: 3,
    title: "🍽️ Festival Gastronómico",
    subtitle: "Casa de la Cultura",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=200&fit=crop",
  },
];
