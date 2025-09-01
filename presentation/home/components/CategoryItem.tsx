import CultureIcon from "@/components/Culture";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import { Text, useTheme } from "react-native-paper";
import { Category } from "../data/categoriesData";
import { categoryStyles } from "../styles/home.styles";

interface CategoryItemProps {
  item: Category;
  isSelected: boolean;
  onPress: (categoryId: number) => void;
}

export const CategoryItem: React.FC<CategoryItemProps> = ({
  item,
  isSelected,
  onPress,
}) => {
  const { colors } = useTheme();

  return (
    <TouchableOpacity
      style={[
        categoryStyles.categoryItem,
        {
          backgroundColor: colors.surface,
          borderColor: isSelected ? "#E8F652" : "transparent",
        },
      ]}
      onPress={() => onPress(item.id)}
    >
      <View
        style={[
          categoryStyles.categoryIcon,
          { backgroundColor: item.color + "20" },
        ]}
      >
        <CultureIcon width={40} height={40} fill={item.color} />
      </View>
      <Text
        style={[
          categoryStyles.categoryName,
          {
            color: isSelected ? colors.primary : colors.onSurface,
            fontWeight: isSelected ? "600" : "400",
          },
        ]}
      >
        {item.name}
      </Text>
    </TouchableOpacity>
  );
};
