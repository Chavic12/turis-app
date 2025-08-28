import React from "react";
import { TouchableOpacity, View } from "react-native";
import { Card, IconButton, Text, useTheme } from "react-native-paper";
import { PopularEvent } from "../data/popularEventsData";
import { popularEventStyles } from "../styles/home.styles";

interface PopularEventCardProps {
  item: PopularEvent;
  isFavorite: boolean;
  onToggleFavorite: (eventId: number) => void;
  onPress?: (eventId: number) => void;
}

export const PopularEventCard: React.FC<PopularEventCardProps> = ({
  item,
  isFavorite,
  onToggleFavorite,
  onPress,
}) => {
  const { colors } = useTheme();

  return (
    <TouchableOpacity
      style={popularEventStyles.popularEventItem}
      onPress={() => onPress?.(item.id)}
    >
      <Card
        style={[
          popularEventStyles.popularCard,
          { backgroundColor: colors.surface },
        ]}
      >
        <Card.Cover
          source={{ uri: item.image }}
          style={popularEventStyles.popularImage}
        />
        <Card.Content style={popularEventStyles.popularContent}>
          <View style={popularEventStyles.popularHeader}>
            <Text
              style={[
                popularEventStyles.popularTitle,
                { color: colors.onSurface },
              ]}
            >
              {item.title}
            </Text>
            <TouchableOpacity onPress={() => onToggleFavorite(item.id)}>
              <IconButton
                icon={isFavorite ? "heart" : "heart-outline"}
                iconColor={isFavorite ? "#FF6B6B" : colors.onSurfaceVariant}
                size={20}
              />
            </TouchableOpacity>
          </View>

          <Text
            style={[
              popularEventStyles.popularDate,
              { color: colors.onSurfaceVariant },
            ]}
          >
            {item.date}
          </Text>

          <View style={popularEventStyles.popularStats}>
            <View style={popularEventStyles.ratingContainer}>
              <IconButton icon="star" size={16} iconColor="#FFD700" />
              <Text
                style={[
                  popularEventStyles.ratingText,
                  { color: colors.onSurface },
                ]}
              >
                {item.rating}
              </Text>
            </View>

            <View style={popularEventStyles.attendeesContainer}>
              <IconButton
                icon="account-group"
                size={16}
                iconColor={colors.primary}
              />
              <Text
                style={[
                  popularEventStyles.attendeesText,
                  { color: colors.onSurfaceVariant },
                ]}
              >
                {item.attendees}
              </Text>
            </View>
          </View>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );
};
