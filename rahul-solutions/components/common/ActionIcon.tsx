import { BorderRadius, Shadows, Spacing } from "@/constants/Colors";
import { Feather } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet } from "react-native";

interface ActionIconProps {
  icon: keyof typeof Feather.glyphMap;
  iconColor: string;
  gradientColors: string[];
}

export const ActionIcon: React.FC<ActionIconProps> = ({
  icon,
  iconColor,
  gradientColors,
}) => {
  return (
    <LinearGradient
      colors={gradientColors as any}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={[styles.gradientContainer, Shadows.base]}
    >
      <Feather name={icon} size={24} color={iconColor} />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradientContainer: {
    width: 52,
    height: 52,
    borderRadius: BorderRadius.lg,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: Spacing.sm,
    ...Shadows.xs
  },
});
