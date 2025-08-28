export interface FeaturedEvent {
  id: number;
  title: string;
  location: string;
  date: string;
  time: string;
  attendees: number;
  image: string;
}

export const featuredEvents: FeaturedEvent[] = [
  {
    id: 1,
    title: "Concierto de Música Folclórica",
    location: "Teatro Bolívar",
    date: "Hoy",
    time: "19:00",
    attendees: 120,
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=250&fit=crop",
  },
  {
    id: 2,
    title: "Feria de Artesanías",
    location: "Plaza San Francisco",
    date: "Mañana",
    time: "09:00",
    attendees: 85,
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=250&fit=crop",
  },
];
