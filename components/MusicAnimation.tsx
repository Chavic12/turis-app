import LottieView from "lottie-react-native";
import React from "react";
import { StyleSheet, View } from "react-native";

const MusicAnimation = () => (
  <View style={styles.container}>
    <LottieView
      source={require("@/assets/animations/CategoryCulture.json")}
      autoPlay
      loop
      style={{ width: 50, height: 50 }}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MusicAnimation;
