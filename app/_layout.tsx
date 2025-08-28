import { Colors } from "@/constants/Colors";
import { useMaterial3Theme } from "@pchmn/expo-material3-theme";
import { Stack } from "expo-router";
import { useColorScheme } from "react-native";
import { MD3DarkTheme, MD3LightTheme, PaperProvider } from "react-native-paper";

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const { theme } = useMaterial3Theme();

  const customDarkTheme = {
    ...MD3DarkTheme,
    colors: {
      ...theme.dark,
      ...Colors.dark,
    },
  };

  const customLightTheme = {
    ...MD3LightTheme,
    colors: {
      ...theme.light,
      ...Colors.light,
    },
  };

  const paperTheme =
    colorScheme === "dark" ? customDarkTheme : customLightTheme;

  return (
    <PaperProvider theme={paperTheme}>
      <Stack
        screenOptions={{ headerShown: false }}
        initialRouteName="onboarding/index"
      >
        {/* Esta será la primera en mostrarse */}
        <Stack.Screen name="onboarding/index" />

        {/* Luego vienen los tabs */}
        <Stack.Screen name="(tabs)" />
      </Stack>
    </PaperProvider>
  );
}
