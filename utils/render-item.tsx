import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

interface RenderItemOptions {
  rounded?: boolean;
}

export const renderItem = (options: RenderItemOptions = {}) => {
  return ({
    item,
    index,
  }: {
    item: any;
    index: number;
  }): React.ReactElement => {
    const { rounded = false } = options;

    return (
      <View
        style={[
          styles.itemContainer,
          {
            backgroundColor:
              typeof item === "string" ? item : item.color || "#ccc",
            borderRadius: rounded ? 16 : 0,
            margin: rounded ? 8 : 0,
          },
        ]}
      >
        <Text style={styles.itemText}>
          {typeof item === "string"
            ? `Banner ${index + 1}`
            : item.title || `Item ${index + 1}`}
        </Text>
      </View>
    );
  };
};

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  itemText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
});
