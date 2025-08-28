import React from "react";
import { TouchableOpacity, View } from "react-native";
import { Button, Card, IconButton, Text, useTheme } from "react-native-paper";
import { FeaturedEvent } from "../data/featuredEventsData";
import { featuredEventStyles } from "../styles/home.styles";

interface FeaturedEventCardProps {
  item: FeaturedEvent;
  isFavorite: boolean;
  onToggleFavorite: (eventId: number) => void;
  onJoin?: (eventId: number) => void;
}

export const FeaturedEventCard: React.FC<FeaturedEventCardProps> = ({
  item,
  isFavorite,
  onToggleFavorite,
  onJoin,
}) => {
  const { colors } = useTheme();

  return (
    <Card
      style={[
        featuredEventStyles.eventCard,
        { backgroundColor: colors.surface },
      ]}
    >
      <Card.Cover
        source={{ uri: item.image }}
        style={featuredEventStyles.eventImage}
      />
      <Card.Content style={featuredEventStyles.eventContent}>
        <View style={featuredEventStyles.eventHeader}>
          <Text
            style={[
              featuredEventStyles.eventTitle,
              { color: colors.onSurface },
            ]}
          >
            {item.title}
          </Text>
          <TouchableOpacity onPress={() => onToggleFavorite(item.id)}>
            <IconButton
              icon={isFavorite ? "heart" : "heart-outline"}
              iconColor={isFavorite ? "#FF6B6B" : colors.onSurfaceVariant}
              size={24}
            />
          </TouchableOpacity>
        </View>

        <View style={featuredEventStyles.eventDetails}>
          <View style={featuredEventStyles.eventDetailItem}>
            <IconButton icon="calendar" size={16} iconColor={colors.primary} />
            <Text
              style={[
                featuredEventStyles.eventDetailText,
                { color: colors.onSurfaceVariant },
              ]}
            >
              {item.date} • {item.time}
            </Text>
          </View>

          <View style={featuredEventStyles.eventDetailItem}>
            <IconButton
              icon="map-marker"
              size={16}
              iconColor={colors.primary}
            />
            <Text
              style={[
                featuredEventStyles.eventDetailText,
                { color: colors.onSurfaceVariant },
              ]}
            >
              {item.location}
            </Text>
          </View>

          <View style={featuredEventStyles.eventDetailItem}>
            <IconButton
              icon="account-group"
              size={16}
              iconColor={colors.primary}
            />
            <Text
              style={[
                featuredEventStyles.eventDetailText,
                { color: colors.onSurfaceVariant },
              ]}
            >
              {item.attendees} asistentes
            </Text>
          </View>
        </View>
      </Card.Content>

      <Card.Actions style={featuredEventStyles.eventActions}>
        <Button
          mode="contained"
          onPress={() => onJoin?.(item.id)}
          style={[
            featuredEventStyles.joinButton,
            { backgroundColor: colors.primary },
          ]}
        >
          Unirse
        </Button>
      </Card.Actions>
    </Card>
  );
};
