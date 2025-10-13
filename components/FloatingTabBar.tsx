import React from "react";
import {
  Animated,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { Text, useTheme } from "react-native-paper";

const { width } = Dimensions.get("window");

interface TabRoute {
  key: string;
  title: string;
  focusedIcon: string;
  unfocusedIcon: string;
}

interface FloatingTabBarProps {
  state: any;
  descriptors: any;
  navigation: any;
  routes: TabRoute[];
}

const FloatingTabBar: React.FC<FloatingTabBarProps> = ({
  state,
  descriptors,
  navigation,
  routes,
}) => {
  const theme = useTheme();
  const animatedValues = React.useRef(
    routes.map(() => new Animated.Value(0))
  ).current;

  React.useEffect(() => {
    animatedValues.forEach((animatedValue, index) => {
      Animated.timing(animatedValue, {
        toValue: state.index === index ? 1 : 0,
        duration: 200,
        useNativeDriver: false,
      }).start();
    });
  }, [state.index]);

  const onPress = (route: any, index: number) => {
    const event = navigation.emit({
      type: "tabPress",
      target: route.key,
      canPreventDefault: true,
    });

    if (!event.defaultPrevented) {
      navigation.navigate(route.name);
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: "transparent" }]}>
      <View
        style={[
          styles.tabBar,
          {
            backgroundColor: theme.colors.surface,
            shadowColor: theme.colors.shadow,
          },
        ]}
      >
        {routes.map((route, index) => {
          const isFocused = state.index === index;

          const animatedBackgroundColor = animatedValues[index].interpolate({
            inputRange: [0, 1],
            outputRange: ["transparent", theme.colors.primaryContainer],
          });

          const animatedScale = animatedValues[index].interpolate({
            inputRange: [0, 1],
            outputRange: [1, 1.1],
          });

          const animatedIconColor = animatedValues[index].interpolate({
            inputRange: [0, 1],
            outputRange: [theme.colors.onSurfaceVariant, theme.colors.primary],
          });

          return (
            <TouchableOpacity
              key={route.key}
              onPress={() => onPress(state.routes[index], index)}
              style={styles.tabButton}
              activeOpacity={0.7}
            >
              <Animated.View
                style={[
                  styles.tabItem,
                  {
                    backgroundColor: animatedBackgroundColor,
                    transform: [{ scale: animatedScale }],
                  },
                ]}
              >
                <Animated.View style={styles.iconContainer}></Animated.View>
                {isFocused && (
                  <Animated.View
                    style={[
                      styles.labelContainer,
                      {
                        opacity: animatedValues[index],
                      },
                    ]}
                  >
                    <Text
                      variant="labelSmall"
                      style={[styles.label, { color: theme.colors.primary }]}
                    >
                      {route.title}
                    </Text>
                  </Animated.View>
                )}
              </Animated.View>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
    alignItems: "center",
    zIndex: 1000,
  },
  tabBar: {
    flexDirection: "row",
    height: 70,
    borderRadius: 35,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "space-around",
    elevation: 8,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    width: width - 40,
  },
  tabButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  tabItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    minHeight: 40,
  },
  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  labelContainer: {
    marginLeft: 8,
  },
  label: {
    fontSize: 12,
    fontWeight: "600",
  },
});

export default FloatingTabBar;
