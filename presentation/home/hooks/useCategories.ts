import { useState } from "react";
import { categories, Category } from "../data/categoriesData";

export interface UseCategoriesReturn {
  selectedCategory: number;
  setSelectedCategory: (categoryId: number) => void;
  categories: Category[];
  isSelected: (categoryId: number) => boolean;
}

export const useCategories = (
  initialCategoryId: number = 1
): UseCategoriesReturn => {
  const [selectedCategory, setSelectedCategory] = useState(initialCategoryId);

  const isSelected = (categoryId: number) => {
    return selectedCategory === categoryId;
  };

  return {
    selectedCategory,
    setSelectedCategory,
    categories,
    isSelected,
  };
};
