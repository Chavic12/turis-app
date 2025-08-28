// Components
export { BannerItem } from "./components/BannerItem";
export { CategoryItem } from "./components/CategoryItem";
export { FeaturedEventCard } from "./components/FeaturedEventCard";
export { PopularEventCard } from "./components/PopularEventCard";

// Data
export { bannerEvents, type BannerEvent } from "./data/bannerData";
export { categories, type Category } from "./data/categoriesData";
export { featuredEvents, type FeaturedEvent } from "./data/featuredEventsData";
export { popularEvents, type PopularEvent } from "./data/popularEventsData";

// Hooks
export { useCategories, type UseCategoriesReturn } from "./hooks/useCategories";
export { useFavorites, type UseFavoritesReturn } from "./hooks/useFavorites";

// Styles
export {
  bannerStyles,
  categoryStyles,
  featuredEventStyles,
  homeStyles,
  popularEventStyles,
} from "./styles/home.styles";
