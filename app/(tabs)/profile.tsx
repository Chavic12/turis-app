import { View } from "react-native";
import { Text, useTheme } from "react-native-paper";

const ProfileScreen = () => {
  const { colors } = useTheme();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.background,
      }}
    >
      <Text>Tab [Home|Settings]</Text>
    </View>
  );
};

export default ProfileScreen;
