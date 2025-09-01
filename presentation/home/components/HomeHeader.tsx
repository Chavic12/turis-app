import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { Appbar, IconButton, Text } from "react-native-paper";

interface HomeHeaderProps {
  locationText: string | null;
  errorMsg: string | null;
  isLoading: boolean;
  onNotificationPress: () => void;
}

export const HomeHeader: React.FC<HomeHeaderProps> = ({
  locationText,
  errorMsg,
  isLoading,
  onNotificationPress,
}) => {
  const getLocationDisplay = () => {
    if (errorMsg) return errorMsg;
    if (isLoading) return "Obteniendo ubicación...";
    if (locationText) return locationText;
    return "Ubicación no disponible";
  };

  return (
    <Appbar.Header style={styles.header}>
      <Image
        source={{ uri: "https://i.pravatar.cc/100" }}
        style={styles.avatar}
      />
      <View style={styles.locationContainer}>
        <Text style={styles.locationText}>{getLocationDisplay()}</Text>
      </View>
      <IconButton icon="bell-outline" size={24} onPress={onNotificationPress} />
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
  header: {
    justifyContent: "space-between",
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginLeft: 10,
  },
  locationContainer: {
    flex: 1,
    alignItems: "center",
  },
  locationText: {
    fontSize: 14,
  },
});
