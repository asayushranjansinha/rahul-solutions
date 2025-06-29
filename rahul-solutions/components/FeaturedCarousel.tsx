import React, { useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Feather } from "@expo/vector-icons";
import Carousel, { ICarouselInstance } from "react-native-reanimated-carousel";
import {
  Colors,
  Typography,
  Spacing,
  BorderRadius,
  Shadows,
} from "@/constants/Colors";
import { useTheme } from "@/context/ThemeContext";

const { width: screenWidth } = Dimensions.get("window");
const CAROUSEL_ITEM_WIDTH = screenWidth * 0.85;

export interface CarouselItem {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  ctaText: string;
  ctaAction: () => void;
  gradientColors?: string[];
}

interface FeaturedCarouselProps {
  items: CarouselItem[];
  autoSlideInterval?: number;
  onItemPress?: (item: CarouselItem) => void;
}

const FeaturedCarousel: React.FC<FeaturedCarouselProps> = ({
  items,
  autoSlideInterval = 4000,
  onItemPress,
}) => {
  const { isDark } = useTheme();
  const colors = isDark ? Colors.dark : Colors.light;

  const carouselRef = useRef<ICarouselInstance>(null);

  const handleItemPress = (item: CarouselItem) => {
    onItemPress?.(item);
    item.ctaAction();
  };

  const renderCarouselItem = ({ item }: { item: CarouselItem }) => {
    const defaultGradient = [
      colors.gradientStart,
      colors.gradientMiddle,
      colors.gradientEnd,
    ];

    return (
      <TouchableOpacity
        style={styles.carouselItem}
        onPress={() => handleItemPress(item)}
        activeOpacity={0.95}
      >
        <View
          style={[
            styles.itemContainer,
            { backgroundColor: colors.cardElevated },
            Shadows.lg,
          ]}
        >
          <LinearGradient
            colors={item.gradientColors || (defaultGradient as any)}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.gradientBackground}
          >
            <View style={styles.contentContainer}>
              <View style={styles.textContent}>
                <Text style={styles.subtitle}>{item.subtitle}</Text>
                <Text style={styles.title} numberOfLines={2}>
                  {item.title}
                </Text>
                <Text style={styles.description} numberOfLines={2}>
                  {item.description}
                </Text>

                <View style={styles.ctaContainer}>
                  <Text style={styles.ctaText}>{item.ctaText}</Text>
                  <Feather name="arrow-right" size={16} color="white" />
                </View>
              </View>

              <View style={styles.imageContainer}>
                <Image
                  source={{ uri: item.imageUrl }}
                  style={styles.itemImage}
                  resizeMode="cover"
                />
              </View>
            </View>
          </LinearGradient>
        </View>
      </TouchableOpacity>
    );
  };

  if (!items || items.length === 0) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Carousel
        ref={carouselRef}
        data={items}
        renderItem={renderCarouselItem}
        width={CAROUSEL_ITEM_WIDTH}
        height={180}
        style={styles.carousel}
        scrollAnimationDuration={800}
        autoPlay={items.length > 1}
        autoPlayInterval={autoSlideInterval}
        mode="parallax"
        modeConfig={{
          parallaxScrollingScale: 0.9,
          parallaxScrollingOffset: 40,
        }}
        pagingEnabled
        snapEnabled
        loop={items.length > 1}
        enabled={items.length > 1}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: Spacing.xl,
  },
  carousel: {
    alignSelf: "center",
  },
  carouselItem: {
    width: CAROUSEL_ITEM_WIDTH,
    borderRadius: BorderRadius.xl,
    overflow: "hidden",
  },
  itemContainer: {
    borderRadius: BorderRadius.xl,
    overflow: "hidden",
    height: 180,
  },
  gradientBackground: {
    flex: 1,
    padding: Spacing.lg,
  },
  contentContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: Spacing.base,
  },
  textContent: {
    flex: 1,
  },
  subtitle: {
    fontSize: Typography.sizes.xs,
    fontWeight: Typography.weights.medium,
    color: "rgba(255,255,255,0.8)",
    marginBottom: Spacing.xs / 2,
    textTransform: "uppercase",
    letterSpacing: 0.8,
  },
  title: {
    fontSize: Typography.sizes.lg,
    fontWeight: Typography.weights.bold,
    color: "white",
    marginBottom: Spacing.xs,
    lineHeight: Typography.sizes.lg * 1.2,
  },
  description: {
    fontSize: Typography.sizes.sm,
    fontWeight: Typography.weights.normal,
    color: "rgba(255,255,255,0.9)",
    marginBottom: Spacing.base,
    lineHeight: Typography.sizes.sm * 1.3,
  },
  ctaContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: Spacing.xs,
  },
  ctaText: {
    fontSize: Typography.sizes.sm,
    fontWeight: Typography.weights.semibold,
    color: "white",
  },
  imageContainer: {
    width: 90,
    height: 90,
    borderRadius: BorderRadius.lg,
    overflow: "hidden",
    backgroundColor: "rgba(255,255,255,0.1)",
  },
  itemImage: {
    width: "100%",
    height: "100%",
  },
});

export default FeaturedCarousel;
