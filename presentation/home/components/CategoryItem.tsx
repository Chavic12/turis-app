import LottieView from "lottie-react-native";
import { useEffect, useRef } from "react";
import { TouchableOpacity, View } from "react-native";
import { Text, useTheme } from "react-native-paper";
import { Category } from "../data/categoriesData";
import { categoryStyles } from "../styles/home.styles";

interface CategoryItemProps {
  item: Category;
  isSelected: boolean;
  onPress: (categoryId: number) => void;
}

export const CategoryItem = ({
  item,
  isSelected,
  onPress,
}: CategoryItemProps) => {
  const { colors } = useTheme();
  const animationRef = useRef<LottieView>(null);

  const handlePress = () => {
    onPress(item.id);
  };

  useEffect(() => {
    if (item.isLottie && animationRef.current) {
      if (isSelected) {
        // Cuando está seleccionado: reproduce la animación una vez
        animationRef.current.play(10, 60);
      } else {
        // Cuando no está seleccionado: vuelve al estado inicial
        animationRef.current.reset();
        animationRef.current.pause();
      }
    }
  }, [isSelected, item.isLottie]);

  const IconComponent = item.icon;

  return (
    <TouchableOpacity
      style={[
        categoryStyles.categoryItem,
        {
          backgroundColor: colors.surface,
          borderColor: isSelected ? "#E8F652" : "transparent",
        },
      ]}
      onPress={handlePress}
    >
      <View style={[categoryStyles.categoryIcon]}>
        {/** Si es Lottie, controla la animación según selección */}
        {item.isLottie ? (
          <LottieView
            ref={animationRef}
            source={item.iconSource}
            loop={true}
            autoPlay={false}
            style={{ width: 50, height: 50 }}
          />
        ) : IconComponent ? (
          <IconComponent />
        ) : null}
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
