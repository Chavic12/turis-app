import { useState } from "react";
import { BottomNavigation, PaperProvider, useTheme } from "react-native-paper";
import CalendarScreen from "./calendar";
import ExploreScreen from "./explore";
import FavoriteScreen from "./favorites";
import HomeScreen from "./index"; // Cambié IndexScreen por HomeScreen para mayor claridad
import ProfileScreen from "./profile";

const renderScene = BottomNavigation.SceneMap({
  index: HomeScreen,
  explore: ExploreScreen,
  calendar: CalendarScreen,
  favorites: FavoriteScreen,
  profile: ProfileScreen,
});

export default function TabsLayout() {
  const [index, setIndex] = useState(0);
  const theme = useTheme();

  const [routes] = useState([
    {
      key: "index",
      title: "Inicio",
      focusedIcon: "home",
      unfocusedIcon: "home-outline",
    },
    {
      key: "explore",
      title: "Explorar",
      focusedIcon: "magnify-scan",
      unfocusedIcon: "magnify",
    },
    {
      key: "calendar",
      title: "Calendario",
      focusedIcon: "calendar",
      unfocusedIcon: "calendar-outline",
    },
    {
      key: "favorites",
      title: "Favoritos",
      focusedIcon: "heart",
      unfocusedIcon: "heart-outline",
    },
    {
      key: "profile",
      title: "Perfil",
      focusedIcon: "account",
      unfocusedIcon: "account-outline",
    },
  ]);

  return (
    <PaperProvider>
      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
        barStyle={{
          backgroundColor: theme.colors.surface,
        }}
        activeColor={theme.colors.primary}
        inactiveColor={theme.colors.onSurfaceVariant}
        activeIndicatorStyle={{
          backgroundColor: theme.colors.inverseOnSurface,
        }}
      />
    </PaperProvider>
  );
}
