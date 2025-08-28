export interface PopularEvent {
  id: number;
  title: string;
  date: string;
  rating: number;
  attendees: number;
  image: string;
}

export const popularEvents: PopularEvent[] = [
  {
    id: 1,
    title: "Torneo de Fútbol",
    date: "Sáb 15",
    rating: 4.8,
    attendees: 200,
    image:
      "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=300&h=200&fit=crop",
  },
  {
    id: 2,
    title: "Noche de Talentos",
    date: "Dom 16",
    rating: 4.6,
    attendees: 150,
    image:
      "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=300&h=200&fit=crop",
  },
  {
    id: 3,
    title: "Exposición de Arte",
    date: "Lun 17",
    rating: 4.9,
    attendees: 90,
    image:
      "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=300&h=200&fit=crop",
  },
  {
    id: 4,
    title: "Festival de Danza",
    date: "Mar 18",
    rating: 4.7,
    attendees: 180,
    image:
      "https://images.unsplash.com/photo-1508807526345-15e9b5f4eaff?w=300&h=200&fit=crop",
  },
];
