import { useRouter } from "expo-router";
import LottieView from "lottie-react-native";
import React, { useCallback } from "react";
import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  useWindowDimensions,
  View,
  ViewToken,
} from "react-native";
import { useTheme } from "react-native-paper";
import Animated, {
  Extrapolate,
  interpolate,
  interpolateColor,
  useAnimatedRef,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";

const pages = [
  {
    title: "Descubre Loja",
    text: "Explora la ciudad como nunca antes. Cada día, una nueva aventura te espera en Loja",
    animation: require("@/assets/animations/Location.json"),
  },
  {
    title: "No te pierdas nada",
    text: "Siempre al día con lo que pasa hoy. Loja late, y tú puedes estar en cada momento",
    animation: require("@/assets/animations/Calendar.json"),
  },
  {
    title: "Vive la experiencia",
    text: "Conéctate con tu ciudad. Eventos, música, cultura… ¡todo en un solo lugar!",
    animation: require("@/assets/animations/Traveler.json"),
  },
];

// ListItem Component
const ListItem = ({
  item,
  index,
  x,
}: {
  item: (typeof pages)[0];
  index: number;
  x: Animated.SharedValue<number>;
}) => {
  const { width: SCREEN_WIDTH } = useWindowDimensions();
  const theme = useTheme();

  const rnAnimationStyle = useAnimatedStyle(() => {
    const translateY = interpolate(
      x.value,
      [
        (index - 1) * SCREEN_WIDTH,
        index * SCREEN_WIDTH,
        (index + 1) * SCREEN_WIDTH,
      ],
      [100, 0, 100],
      Extrapolate.CLAMP
    );
    const opacity = interpolate(
      x.value,
      [
        (index - 1) * SCREEN_WIDTH,
        index * SCREEN_WIDTH,
        (index + 1) * SCREEN_WIDTH,
      ],
      [0, 1, 0],
      Extrapolate.CLAMP
    );
    return {
      opacity,
      transform: [{ translateY }],
    };
  }, [index, x]);

  const rnTextStyle = useAnimatedStyle(() => {
    const translateY = interpolate(
      x.value,
      [
        (index - 1) * SCREEN_WIDTH,
        index * SCREEN_WIDTH,
        (index + 1) * SCREEN_WIDTH,
      ],
      [80, 0, 80],
      Extrapolate.CLAMP
    );
    const opacity = interpolate(
      x.value,
      [
        (index - 1) * SCREEN_WIDTH,
        index * SCREEN_WIDTH,
        (index + 1) * SCREEN_WIDTH,
      ],
      [0, 1, 0],
      Extrapolate.CLAMP
    );
    return {
      opacity,
      transform: [{ translateY }],
    };
  }, [index, x]);

  return (
    <View style={[styles.itemContainer, { width: SCREEN_WIDTH }]}>
      <Animated.Text
        style={[styles.titleText, { color: theme.colors.primary }, rnTextStyle]}
      >
        {item.title}
      </Animated.Text>
      <Animated.View style={[styles.animationContainer, rnAnimationStyle]}>
        <LottieView
          autoPlay
          loop
          style={styles.lottie}
          source={item.animation}
        />
      </Animated.View>
      <Animated.Text
        style={[
          styles.textItem,
          { color: theme.colors.onBackground },
          rnTextStyle,
        ]}
      >
        {item.text}
      </Animated.Text>
    </View>
  );
};

// PaginationElement Component
const PaginationElement = ({
  length,
  x,
}: {
  length: number;
  x: Animated.SharedValue<number>;
}) => {
  const { width: SCREEN_WIDTH } = useWindowDimensions();
  const theme = useTheme();

  const PaginationComponent = useCallback(
    ({ index }: { index: number }) => {
      const itemRnStyle = useAnimatedStyle(() => {
        const width = interpolate(
          x.value,
          [
            (index - 1) * SCREEN_WIDTH,
            index * SCREEN_WIDTH,
            (index + 1) * SCREEN_WIDTH,
          ],
          [35, 16, 35],
          Extrapolate.CLAMP
        );

        const bgColor = interpolateColor(
          x.value,
          [
            (index - 1) * SCREEN_WIDTH,
            index * SCREEN_WIDTH,
            (index + 1) * SCREEN_WIDTH,
          ],
          [theme.colors.outline, theme.colors.primary, theme.colors.outline]
        );

        return {
          width,
          backgroundColor: bgColor,
        };
      }, [x]);
      return <Animated.View style={[styles.itemStyle, itemRnStyle]} />;
    },
    [theme, x]
  );

  return (
    <View style={styles.paginationContainer}>
      {Array.from({ length }).map((_, index) => {
        return <PaginationComponent index={index} key={index} />;
      })}
    </View>
  );
};

// Button Component
const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

const Button = ({
  currentIndex,
  length,
  flatListRef,
}: {
  currentIndex: Animated.SharedValue<number>;
  length: number;
  flatListRef: any;
}) => {
  const router = useRouter();
  const theme = useTheme();

  const rnBtnStyle = useAnimatedStyle(() => {
    return {
      width:
        currentIndex.value === length - 1 ? withSpring(140) : withSpring(60),
      height: 60,
    };
  }, [currentIndex, length]);

  const rnTextStyle = useAnimatedStyle(() => {
    return {
      opacity:
        currentIndex.value === length - 1 ? withTiming(1) : withTiming(0),
      transform: [
        {
          translateX:
            currentIndex.value === length - 1 ? withTiming(0) : withTiming(100),
        },
      ],
    };
  }, [currentIndex, length]);

  const arrowAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity:
        currentIndex.value !== length - 1 ? withTiming(1) : withTiming(0),
      transform: [
        {
          translateX:
            currentIndex.value !== length - 1 ? withTiming(0) : withTiming(100),
        },
      ],
    };
  }, [currentIndex, length]);

  const onPress = useCallback(() => {
    if (currentIndex.value === length - 1) {
      router.replace("/(tabs)");
      return;
    } else {
      flatListRef?.current?.scrollToIndex({
        index: currentIndex.value + 1,
      });
    }
  }, [router, currentIndex, length, flatListRef]);

  return (
    <AnimatedPressable
      style={[
        styles.buttonContainer,
        { backgroundColor: theme.colors.primary },
        rnBtnStyle,
      ]}
      onPress={onPress}
    >
      <Animated.Text
        style={[
          styles.buttonText,
          { color: theme.colors.onPrimary },
          rnTextStyle,
        ]}
      >
        ¡Empezar!
      </Animated.Text>
      <Animated.Text
        style={[
          styles.arrowText,
          { color: theme.colors.onPrimary },
          arrowAnimatedStyle,
        ]}
      >
        →
      </Animated.Text>
    </AnimatedPressable>
  );
};

// Main App Component
export default function OnboardingScreen() {
  const theme = useTheme();
  const x = useSharedValue(0);
  const flatListIndex = useSharedValue(0);
  const flatListRef = useAnimatedRef<
    Animated.FlatList<{
      title: string;
      text: string;
      animation: any;
    }>
  >();

  const onViewableItemsChanged = useCallback(
    ({ viewableItems }: { viewableItems: ViewToken[] }) => {
      flatListIndex.value = viewableItems[0].index ?? 0;
    },
    []
  );

  const scrollHandle = useAnimatedScrollHandler({
    onScroll: (event) => {
      x.value = event.contentOffset.x;
    },
  });

  const renderItem = useCallback(
    ({
      item,
      index,
    }: {
      item: { title: string; text: string; animation: any };
      index: number;
    }) => {
      return <ListItem item={item} index={index} x={x} />;
    },
    [x]
  );

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <Animated.FlatList
        ref={flatListRef}
        onScroll={scrollHandle}
        horizontal
        scrollEventThrottle={16}
        pagingEnabled={true}
        data={pages}
        keyExtractor={(_, index) => index.toString()}
        bounces={false}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={onViewableItemsChanged}
      />
      <View style={styles.bottomContainer}>
        <PaginationElement length={pages.length} x={x} />
        <Button
          currentIndex={flatListIndex}
          length={pages.length}
          flatListRef={flatListRef}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: 20,
  },
  titleText: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  animationContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  lottie: {
    width: 280,
    height: 280,
  },
  textItem: {
    fontWeight: "600",
    lineHeight: 28,
    fontSize: 18,
    textAlign: "center",
    paddingHorizontal: 20,
  },
  bottomContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  paginationContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  itemStyle: {
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  buttonContainer: {
    flexDirection: "row",
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  buttonText: {
    fontWeight: "600",
    fontSize: 16,
    position: "absolute",
  },
  arrowText: {
    fontSize: 20,
    fontWeight: "bold",
    position: "absolute",
  },
});
