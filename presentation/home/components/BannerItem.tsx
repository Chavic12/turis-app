import React from "react";
import { View } from "react-native";
import { Card, Text, useTheme } from "react-native-paper";
import { BannerEvent } from "../data/bannerData";
import { bannerStyles } from "../styles/home.styles";

interface BannerItemProps {
  item: BannerEvent;
}

export const BannerItem: React.FC<BannerItemProps> = ({ item }) => {
  const { colors } = useTheme();

  return (
    <View style={bannerStyles.bannerItem}>
      <Card
        style={[
          bannerStyles.bannerCard,
          { backgroundColor: colors.surfaceVariant },
        ]}
      >
        <Card.Cover
          source={{ uri: item.image }}
          style={bannerStyles.bannerImage}
        />
        <Card.Content style={bannerStyles.bannerContent}>
          <Text style={[bannerStyles.bannerTitle, { color: colors.onSurface }]}>
            {item.title}
          </Text>
          <Text
            style={[
              bannerStyles.bannerSubtitle,
              { color: colors.onSurfaceVariant },
            ]}
          >
            📍 {item.subtitle}
          </Text>
        </Card.Content>
      </Card>
    </View>
  );
};
