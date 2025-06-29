import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { BorderRadius, Colors, Shadows, Spacing, Typography } from "@/constants/Colors";
import { useTheme } from "@/context/ThemeContext";

export const QuickStats: React.FC = () => {
  const { isDark } = useTheme();
  const colors = isDark ? Colors.dark : Colors.light;

  return (
    <View style={styles.statsContainer}>
      <View style={[styles.statCard, { backgroundColor: colors.cardElevated }, Shadows.base]}>
        <View style={styles.statIconContainer}>
          <Feather name="book-open" size={20} color={colors.tint} />
        </View>
        <Text style={[styles.statNumber, { color: colors.text }]}>12</Text>
        <Text style={[styles.statLabel, { color: colors.textSecondary }]}>
          Courses
        </Text>
      </View>

      <View style={[styles.statCard, { backgroundColor: colors.cardElevated }, Shadows.base]}>
        <View style={styles.statIconContainer}>
          <Feather name="award" size={20} color={colors.success} />
        </View>
        <Text style={[styles.statNumber, { color: colors.text }]}>8</Text>
        <Text style={[styles.statLabel, { color: colors.textSecondary }]}>
          Completed
        </Text>
      </View>

      <View style={[styles.statCard, { backgroundColor: colors.cardElevated }, Shadows.base]}>
        <View style={styles.statIconContainer}>
          <Feather name="clock" size={20} color={colors.warning} />
        </View>
        <Text style={[styles.statNumber, { color: colors.text }]}>24h</Text>
        <Text style={[styles.statLabel, { color: colors.textSecondary }]}>
          This Week
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  statsContainer: {
    flexDirection: "row",
    paddingHorizontal: Spacing.lg,
    marginTop: -Spacing.lg,
    marginBottom: Spacing.xl,
    gap: Spacing.base,
  },
  statCard: {
    flex: 1,
    padding: Spacing.base,
    borderRadius: BorderRadius.lg,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "transparent",
  },
  statIconContainer: {
    marginBottom: Spacing.xs,
  },
  statNumber: {
    fontSize: Typography.sizes.xl,
    fontWeight: Typography.weights.bold,
    marginBottom: 2,
  },
  statLabel: {
    fontSize: Typography.sizes.xs,
    fontWeight: Typography.weights.medium,
    textAlign: "center",
  },
});
