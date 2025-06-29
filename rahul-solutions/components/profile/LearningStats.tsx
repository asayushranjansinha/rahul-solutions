import { ActionIcon } from "@/components/common/ActionIcon";
import { BorderRadius, Spacing, Typography } from "@/constants/Colors";
import { ColorScheme } from "@/types";
import { Feather } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface ProfileStat {
  id: string;
  label: string;
  value: string | number;
  icon: keyof typeof Feather.glyphMap;
  color: string;
  gradient: string[];
}

interface LearningStatsProps {
  stats: ProfileStat[];
  colors: ColorScheme;
}

export const LearningStats: React.FC<LearningStatsProps> = ({
  stats,
  colors,
}) => {
  return (
    <View style={styles.container}>
      {stats.map((stat) => (
        <View
          key={stat.id}
          style={[styles.card, { backgroundColor: colors.card }]}
        >
          <ActionIcon
            icon={stat.icon}
            iconColor="#fff"
            gradientColors={stat.gradient}
          />
          <Text style={[styles.value, { color: colors.text }]}>
            {stat.value}
          </Text>
          <Text style={[styles.label, { color: colors.textSecondary }]}>
            {stat.label}
          </Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: Spacing.base,
    margin: Spacing.lg,
  },
  card: {
    width: "47%",
    borderRadius: BorderRadius.lg,
    alignItems: "center",
    padding: Spacing.base,
    marginBottom: Spacing.base,
  },
  value: {
    fontSize: Typography.sizes.lg,
    fontWeight: Typography.weights.bold,
    marginTop: Spacing.sm,
  },
  label: {
    fontSize: Typography.sizes.sm,
    marginTop: Spacing.xs,
    opacity: 0.7,
    textAlign: "center",
  },
});
