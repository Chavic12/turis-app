import React from "react";
import { FlatList, ScrollView, TouchableOpacity, View } from "react-native";
import { Text, useTheme } from "react-native-paper";

// Importaciones organizadas
import {
  CategoryItem,
  HomeHeader,
  PopularEventCard,
  categoryStyles,
  // Styles
  homeStyles,
  popularEventStyles,
  popularEvents,
  useCategories,
  // Hooks
  useFavorites,
  useLocation,
} from "../../presentation/home";

export default function HomeScreen() {
  const { colors } = useTheme();

  // Custom hooks para manejar estado
  const { locationText, errorMsg, isLoading } = useLocation();

  const {
    isFavorite: isPopularFavorite,
    toggleFavorite: togglePopularFavorite,
  } = useFavorites([2]);
  const { selectedCategory, setSelectedCategory, categories, isSelected } =
    useCategories(1);

  // Event handlers
  const handleEventPress = (eventId: number) => {
    console.log(`Ver detalles del evento ${eventId}`);
  };

  const handleNotificationPress = () => {
    console.log("Notificaciones");
  };

  // Render functions
  const renderCategoryItem = ({ item }: any) => (
    <CategoryItem
      item={item}
      isSelected={isSelected(item.id)}
      onPress={setSelectedCategory}
    />
  );

  const renderPopularEvent = ({ item }: any) => (
    <PopularEventCard
      item={item}
      isFavorite={isPopularFavorite(item.id)}
      onToggleFavorite={togglePopularFavorite}
      onPress={handleEventPress}
    />
  );

  return (
    <>
      <HomeHeader
        locationText={locationText}
        errorMsg={errorMsg}
        isLoading={isLoading}
        onNotificationPress={handleNotificationPress}
      />

      <ScrollView>
        {/* Categorías */}
        <View style={categoryStyles.categoriesSection}>
          <Text
            style={[homeStyles.sectionTitle, { color: colors.onBackground }]}
          >
            Categorías
          </Text>
          <FlatList
            data={categories}
            renderItem={renderCategoryItem}
            keyExtractor={(item) => item.id.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={categoryStyles.categoriesContainer}
          />
        </View>

        {/* Top Eventos / Populares */}
        <View style={popularEventStyles.popularSection}>
          <View style={homeStyles.sectionHeader}>
            <Text
              style={[homeStyles.sectionTitle, { color: colors.onBackground }]}
            >
              Top Eventos
            </Text>
            <TouchableOpacity>
              <Text style={[homeStyles.seeAllText, { color: colors.primary }]}>
                Ver todos
              </Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={popularEvents}
            renderItem={renderPopularEvent}
            keyExtractor={(item) => item.id.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={popularEventStyles.popularContainer}
          />
        </View>
      </ScrollView>
    </>
  );
}
