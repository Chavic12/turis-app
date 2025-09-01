import { FunctionComponent } from "react";

export interface Category {
  id: number;
  name: string;
  icon?: FunctionComponent;
  isLottie?: boolean;
  iconSource?: any;
}

export const categories: Category[] = [
  // { id: 1, name: "Música", icon: "🎵", color: "#FF6B6B" },
  {
    id: 1,
    name: "Cultura",
    isLottie: true,
    iconSource: require("@/assets/animations/CategoryCulture.json"),
  },
  {
    id: 2,
    name: "Música",

    isLottie: true,
    iconSource: require("@/assets/animations/CategoryMusic.json"),
  },
  {
    id: 3,
    name: "Comida",
    isLottie: true,
    iconSource: require("@/assets/animations/CategoryFood.json"),
  },
  {
    id: 4,
    name: "Citas",
    isLottie: true,
    iconSource: require("@/assets/animations/CategoryDate.json"),
  },
];
