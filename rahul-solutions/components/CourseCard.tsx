import { Feather } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React, { memo, useCallback, useState } from "react";
import {
  ActivityIndicator,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  useColorScheme,
  View
} from "react-native";
import {
  BorderRadius,
  Colors,
  Shadows,
  Spacing,
  Typography,
} from "../constants/Colors";

export interface Course {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  status: "coming-soon" | "available" | "premium";
  duration?: string;
  lessons?: number;
  difficulty?: "Beginner" | "Intermediate" | "Advanced";
  rating?: number;
  enrolled?: number;
}

interface CourseCardProps {
  course: Course;
  onPress?: (course: Course) => void;
}

const CourseCard: React.FC<CourseCardProps> = memo(({ course, onPress }) => {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";
  const colors = Colors[isDark ? "dark" : "light"];
  const [imageLoading, setImageLoading] = useState(true);
  const [imageError, setImageError] = useState(false);

  const handlePress = useCallback(() => {
    onPress?.(course) ?? console.log(`Course ${course.title} pressed`);
  }, [course, onPress]);

  const badgeConfig = (() => {
    switch (course.status) {
      case "coming-soon":
        return {
          text: "Coming Soon",
          colors: ["#f59e0b", "#f97316"],
          textColor: "#FFFFFF",
          icon: "clock" as const,
        };
      case "premium":
        return {
          text: "Premium",
          colors: ["#8b5cf6", "#a855f7"],
          textColor: "#FFFFFF",
          icon: "star" as const,
        };
      default:
        return {
          text: "Available",
          colors: ["#10b981", "#059669"],
          textColor: "#FFFFFF",
          icon: "check-circle" as const,
        };
    }
  })();

  const difficultyConfig = (() => {
    switch (course.difficulty) {
      case "Beginner":
        return { color: "#10b981", bgColor: "#d1fae5" };
      case "Intermediate":
        return { color: "#f59e0b", bgColor: "#fef3c7" };
      case "Advanced":
        return { color: "#ef4444", bgColor: "#fee2e2" };
      default:
        return { color: colors.textSecondary, bgColor: colors.card };
    }
  })();

  const handleImageLoad = useCallback(() => {
    setImageLoading(false);
  }, []);

  const handleImageError = useCallback(() => {
    setImageLoading(false);
    setImageError(true);
  }, []);

  return (
    <Pressable
      onPress={handlePress}
      style={({ pressed }) => [
        styles.container,
        {
          transform: [{ scale: pressed ? 0.98 : 1 }],
          opacity: pressed ? 0.95 : 1,
        },
      ]}
      android_ripple={{
        color: colors.tint,
        borderless: false,
      }}
    >
      <View
        style={[
          styles.card,
          { 
            backgroundColor: colors.cardElevated, 
            borderColor: colors.border 
          },
          Shadows.lg,
        ]}
      >
        {/* Enhanced Image Container */}
        <View style={styles.imageContainer}>
          <ImageBackground
            source={{ uri: course.imageUrl }}
            style={styles.image}
            imageStyle={styles.imageStyle}
            onLoad={handleImageLoad}
            onError={handleImageError}
          >
            {/* Loading State */}
            {imageLoading && (
              <View style={styles.imageLoadingContainer}>
                <ActivityIndicator size="small" color={colors.tint} />
              </View>
            )}

            {/* Error State */}
            {imageError && (
              <View style={[styles.imageErrorContainer, { backgroundColor: colors.card }]}>
                <Feather name="image" size={24} color={colors.textMuted} />
              </View>
            )}

            {/* Gradient Overlay */}
            <LinearGradient
              colors={["transparent", "rgba(0,0,0,0.4)"]}
              style={styles.imageOverlay}
            />

            {/* Enhanced Badge */}
            <View style={styles.badgeContainer}>
              <LinearGradient
                colors={badgeConfig.colors as any}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.badge}
              >
                <Feather 
                  name={badgeConfig.icon} 
                  size={12} 
                  color={badgeConfig.textColor}
                  style={styles.badgeIcon}
                />
                <Text
                  style={[
                    styles.badgeText,
                    { color: badgeConfig.textColor },
                  ]}
                >
                  {badgeConfig.text}
                </Text>
              </LinearGradient>
            </View>
          </ImageBackground>
        </View>

        {/* Enhanced Content */}
        <View style={styles.content}>
          <View style={styles.header}>
            <Text
              style={[styles.title, { color: colors.text }]}
              numberOfLines={2}
            >
              {course.title}
            </Text>

            {course.difficulty && (
              <View
                style={[
                  styles.difficultyTag,
                  { 
                    backgroundColor: isDark ? colors.card : difficultyConfig.bgColor,
                    borderWidth: isDark ? 1 : 0,
                    borderColor: isDark ? difficultyConfig.color : 'transparent',
                  },
                ]}
              >
                <Text
                  style={[
                    styles.difficultyText,
                    { color: isDark ? difficultyConfig.color : difficultyConfig.color },
                  ]}
                >
                  {course.difficulty}
                </Text>
              </View>
            )}
          </View>

          <Text
            style={[styles.description, { color: colors.textSecondary }]}
            numberOfLines={3}
          >
            {course.description}
          </Text>

          {/* Enhanced Meta Container */}
          <View style={styles.metaContainer}>
            <View style={styles.metaRow}>
              {course.duration && (
                <View style={styles.metaItem}>
                  <Feather name="clock" size={14} color={colors.textMuted} />
                  <Text style={[styles.metaText, { color: colors.textMuted }]}>
                    {course.duration}
                  </Text>
                </View>
              )}

              {course.lessons && (
                <View style={styles.metaItem}>
                  <Feather name="play-circle" size={14} color={colors.textMuted} />
                  <Text style={[styles.metaText, { color: colors.textMuted }]}>
                    {course.lessons} lessons
                  </Text>
                </View>
              )}
            </View>

            {/* Additional Meta Row */}
            <View style={styles.metaRow}>
              {course.rating && (
                <View style={styles.metaItem}>
                  <Feather name="star" size={14} color="#f59e0b" />
                  <Text style={[styles.metaText, { color: colors.textMuted }]}>
                    {course.rating.toFixed(1)}
                  </Text>
                </View>
              )}

              {course.enrolled && (
                <View style={styles.metaItem}>
                  <Feather name="users" size={14} color={colors.textMuted} />
                  <Text style={[styles.metaText, { color: colors.textMuted }]}>
                    {course.enrolled > 1000 
                      ? `${(course.enrolled / 1000).toFixed(1)}k` 
                      : course.enrolled} enrolled
                  </Text>
                </View>
              )}
            </View>
          </View>
        </View>
      </View>
    </Pressable>
  );
});

CourseCard.displayName = "CourseCard";

const styles = StyleSheet.create({
  container: {
    marginHorizontal: Spacing.lg,
    marginBottom: Spacing.lg,
  },
  card: {
    borderRadius: BorderRadius.xl,
    borderWidth: 1,
    overflow: "hidden",
    backgroundColor: "#FFFFFF",
  },
  imageContainer: {
    height: 180,
    position: "relative",
  },
  image: {
    flex: 1,
    justifyContent: "flex-end",
  },
  imageStyle: {
    borderTopLeftRadius: BorderRadius.xl,
    borderTopRightRadius: BorderRadius.xl,
  },
  imageLoadingContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.1)",
  },
  imageErrorContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
  },
  imageOverlay: {
    ...StyleSheet.absoluteFillObject,
  },
  badgeContainer: {
    position: "absolute",
    top: Spacing.base,
    right: Spacing.base,
  },
  badge: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: Spacing.sm,
    paddingVertical: Spacing.xs,
    borderRadius: BorderRadius.base,
    ...Shadows.sm,
  },
  badgeIcon: {
    marginRight: Spacing.xs / 2,
  },
  badgeText: {
    fontSize: Typography.sizes.xs,
    fontWeight: Typography.weights.semibold,
  },
  content: {
    padding: Spacing.lg,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: Spacing.sm,
  },
  title: {
    fontSize: Typography.sizes.lg,
    fontWeight: Typography.weights.bold,
    lineHeight: Typography.sizes.lg * 1.3,
    flex: 1,
    marginRight: Spacing.sm,
  },
  difficultyTag: {
    paddingHorizontal: Spacing.sm,
    paddingVertical: Spacing.xs / 2,
    borderRadius: BorderRadius.base,
  },
  difficultyText: {
    fontSize: Typography.sizes.xs,
    fontWeight: Typography.weights.semibold,
  },
  description: {
    fontSize: Typography.sizes.base,
    lineHeight: Typography.sizes.base * 1.5,
    marginBottom: Spacing.base,
  },
  metaContainer: {
    gap: Spacing.sm,
  },
  metaRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: Spacing.base,
  },
  metaItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: Spacing.xs,
  },
  metaText: {
    fontSize: Typography.sizes.sm,
    fontWeight: Typography.weights.medium,
  },
});

export default CourseCard;