import React from "react";
import { TouchableOpacity, Image, View, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import {
  BorderRadius,
  Colors,
  Shadows,
  Spacing,
  Typography,
} from "@/constants/Colors";

interface Course {
  id: number;
  title: string;
  instructor: string;
  duration: string;
  students: number;
  rating: number;
  price: string;
  level: string;
  image: string;
  category: string;
}

interface CourseCardProps {
  course: Course;
  isDark: boolean;
  colors: typeof Colors.light;
}

const getLevelColor = (level: string, isDark: boolean) => {
  const colors = isDark ? Colors.dark : Colors.light;

  switch (level.toLowerCase()) {
    case "beginner":
      return {
        bg: isDark ? "#064e3b" : "#dcfce7",
        text: isDark ? "#34d399" : "#16a34a",
      };
    case "intermediate":
      return {
        bg: isDark ? "#7c2d12" : "#fed7aa",
        text: isDark ? "#fbbf24" : "#ea580c",
      };
    case "advanced":
      return {
        bg: isDark ? "#7c2d12" : "#fecaca",
        text: isDark ? "#f87171" : "#dc2626",
      };
    default:
      return {
        bg: colors.card,
        text: colors.tint,
      };
  }
};

export const CourseCard: React.FC<CourseCardProps> = ({
  course,
  isDark,
  colors,
}) => {
  const levelColors = getLevelColor(course.level, isDark);

  return (
    <TouchableOpacity
      style={[
        styles.courseCard,
        { backgroundColor: colors.cardElevated },
        Shadows.base,
      ]}
      activeOpacity={0.8}
    >
      <Image source={{ uri: course.image }} style={styles.courseImage} />
      <View style={styles.courseContent}>
        <View style={styles.courseHeader}>
          <View style={styles.courseTitleContainer}>
            <Text
              style={[styles.courseTitle, { color: colors.text }]}
              numberOfLines={2}
            >
              {course.title}
            </Text>
            <Text
              style={[styles.instructorName, { color: colors.textSecondary }]}
            >
              by {course.instructor}
            </Text>
          </View>
          <View
            style={[styles.levelBadge, { backgroundColor: levelColors.bg }]}
          >
            <Text style={[styles.levelText, { color: levelColors.text }]}>
              {course.level}
            </Text>
          </View>
        </View>

        <View style={styles.courseStats}>
          <View style={styles.statItem}>
            <Feather name="clock" size={14} color={colors.textMuted} />
            <Text style={[styles.statText, { color: colors.textMuted }]}>
              {course.duration}
            </Text>
          </View>
          <View style={styles.statItem}>
            <Feather name="users" size={14} color={colors.textMuted} />
            <Text style={[styles.statText, { color: colors.textMuted }]}>
              {course.students.toLocaleString()}
            </Text>
          </View>
          <View style={styles.statItem}>
            <Feather name="star" size={14} color="#fbbf24" />
            <Text style={[styles.statText, { color: colors.textMuted }]}>
              {course.rating}
            </Text>
          </View>
        </View>

        <View style={styles.courseFooter}>
          <Text style={[styles.coursePrice, { color: colors.tint }]}>
            {course.price}
          </Text>
          <LinearGradient
            colors={[
              colors.gradientStart,
              colors.gradientMiddle,
              colors.gradientEnd,
            ]}
            style={styles.enrollButton}
          >
            <TouchableOpacity style={styles.enrollButtonInner} activeOpacity={0.8}>
              <Text style={styles.enrollButtonText}>Enroll Now</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  courseCard: {
    borderRadius: BorderRadius.lg,
    marginBottom: Spacing.base,
    overflow: "hidden",
  },
  courseImage: {
    width: "100%",
    height: 200,
  },
  courseContent: {
    padding: Spacing.base,
  },
  courseHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: Spacing.sm,
  },
  courseTitleContainer: {
    flex: 1,
    marginRight: Spacing.sm,
  },
  courseTitle: {
    fontSize: Typography.sizes.lg,
    fontWeight: Typography.weights.bold,
    marginBottom: Spacing.xs,
    lineHeight: Typography.sizes.lg * 1.3,
  },
  instructorName: {
    fontSize: Typography.sizes.sm,
    fontWeight: Typography.weights.normal,
  },
  levelBadge: {
    paddingHorizontal: Spacing.sm,
    paddingVertical: Spacing.xs,
    borderRadius: BorderRadius.sm,
  },
  levelText: {
    fontSize: Typography.sizes.xs,
    fontWeight: Typography.weights.medium,
  },
  courseStats: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: Spacing.sm,
  },
  statItem: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: Spacing.base,
  },
  statText: {
    fontSize: Typography.sizes.xs,
    marginLeft: Spacing.xs,
    fontWeight: Typography.weights.normal,
  },
  courseFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  coursePrice: {
    fontSize: Typography.sizes.xl,
    fontWeight: Typography.weights.bold,
  },
  enrollButton: {
    borderRadius: BorderRadius.sm,
    overflow: "hidden",
  },
  enrollButtonInner: {
    paddingHorizontal: Spacing.base,
    paddingVertical: Spacing.sm,
  },
  enrollButtonText: {
    color: "#FFFFFF",
    fontSize: Typography.sizes.sm,
    fontWeight: Typography.weights.semibold,
  },
});
