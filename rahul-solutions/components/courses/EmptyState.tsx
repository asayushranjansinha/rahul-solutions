import React from "react";
import { Feather } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
import { Spacing, Typography } from "@/constants/Colors";

interface Props {
  icon?: string;
  title: string;
  subtitle: string;
  colors: {
    textSecondary: string;
    textMuted: string;
  };
}

export const EmptyState: React.FC<Props> = ({
  icon = "search",
  title,
  subtitle,
  colors,
}) => {
  return (
    <View style={styles.container}>
      <Feather
        name={icon}
        size={48}
        color={colors.textMuted}
        style={styles.icon}
      />
      <Text style={[styles.title, { color: colors.textSecondary }]}>
        {title}
      </Text>
      <Text style={[styles.subtitle, { color: colors.textMuted }]}>
        {subtitle}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: Spacing["3xl"],
  },
  icon: {
    marginBottom: Spacing.base,
  },
  title: {
    fontSize: Typography.sizes.lg,
    fontWeight: Typography.weights.semibold,
    marginBottom: Spacing.xs,
  },
  subtitle: {
    fontSize: Typography.sizes.sm,
    textAlign: "center",
  },
});
