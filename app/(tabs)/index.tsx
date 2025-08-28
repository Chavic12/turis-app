import React from "react";
import {
  Dimensions,
  FlatList,
  ScrollView,
  TouchableOpacity,
  View,
} from "react-native";
import { Avatar, IconButton, Text, useTheme } from "react-native-paper";
import { useSharedValue } from "react-native-reanimated";
import Carousel from "react-native-reanimated-carousel";
import { SafeAreaView } from "react-native-safe-area-context";
import { window } from "../../constants/sizes";

// Importaciones organizadas
import {
  // Components
  BannerItem,
  CategoryItem,
  FeaturedEventCard,
  PopularEventCard,
  // Data
  bannerEvents,
  bannerStyles,
  categoryStyles,
  featuredEventStyles,
  featuredEvents,
  // Styles
  homeStyles,
  popularEventStyles,
  popularEvents,
  useCategories,
  // Hooks
  useFavorites,
} from "../../presentation/home";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

export default function HomeScreen() {
  const { colors } = useTheme();
  const progress = useSharedValue<number>(0);

  // Custom hooks para manejar estado
  const {
    isFavorite: isFeaturedFavorite,
    toggleFavorite: toggleFeaturedFavorite,
  } = useFavorites([1]);
  const {
    isFavorite: isPopularFavorite,
    toggleFavorite: togglePopularFavorite,
  } = useFavorites([2]);
  const { selectedCategory, setSelectedCategory, categories, isSelected } =
    useCategories(1);

  // Handlers
  const handleJoinEvent = (eventId: number) => {
    console.log(`Unirse al evento ${eventId}`);
  };

  const handleEventPress = (eventId: number) => {
    console.log(`Ver detalles del evento ${eventId}`);
  };

  const handleSearchPress = () => {
    console.log("Búsqueda");
  };

  const handleNotificationsPress = () => {
    console.log("Notificaciones");
  };

  // Render functions
  const renderBannerItem = ({ item }: { item: any }) => (
    <BannerItem item={item} />
  );

  const renderCategoryItem = ({ item }: any) => (
    <CategoryItem
      item={item}
      isSelected={isSelected(item.id)}
      onPress={setSelectedCategory}
    />
  );

  const renderFeaturedEvent = ({ item }: any) => (
    <FeaturedEventCard
      item={item}
      isFavorite={isFeaturedFavorite(item.id)}
      onToggleFavorite={toggleFeaturedFavorite}
      onJoin={handleJoinEvent}
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
    <SafeAreaView
      style={[homeStyles.container, { backgroundColor: colors.background }]}
    >
      <ScrollView style={homeStyles.scrollView}>
        {/* Header */}
        <View style={homeStyles.header}>
          <View style={homeStyles.userSection}>
            <Avatar.Image
              size={50}
              source={{
                uri: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
              }}
            />
            <View style={homeStyles.greetingSection}>
              <Text
                style={[
                  homeStyles.greeting,
                  { color: colors.onSurfaceVariant },
                ]}
              >
                ¡Buenos días! 👋
              </Text>
              <Text
                style={[homeStyles.userName, { color: colors.onBackground }]}
              >
                Xavier
              </Text>
            </View>
          </View>

          <View style={homeStyles.headerActions}>
            <IconButton icon="magnify" size={24} onPress={handleSearchPress} />
            <IconButton
              icon="bell-outline"
              size={24}
              onPress={handleNotificationsPress}
            />
          </View>
        </View>

        {/* Banner Dinámico */}
        <View style={bannerStyles.bannerSection}>
          <Carousel
            autoPlayInterval={2000}
            data={bannerEvents}
            height={258}
            loop={true}
            pagingEnabled={true}
            snapEnabled={true}
            width={window.width}
            style={{
              width: window.width,
            }}
            mode="parallax"
            modeConfig={{
              parallaxScrollingScale: 0.9,
              parallaxScrollingOffset: 50,
            }}
            onProgressChange={progress}
            renderItem={renderBannerItem}
          />
        </View>

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

        {/* Eventos Destacados */}
        <View style={featuredEventStyles.featuredSection}>
          <Text
            style={[homeStyles.sectionTitle, { color: colors.onBackground }]}
          >
            Eventos Destacados
          </Text>
          <FlatList
            data={featuredEvents}
            renderItem={renderFeaturedEvent}
            keyExtractor={(item) => item.id.toString()}
            scrollEnabled={false}
            showsVerticalScrollIndicator={false}
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
    </SafeAreaView>
  );
}
