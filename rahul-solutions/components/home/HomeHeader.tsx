import { BorderRadius, Colors, Spacing, Typography } from "@/constants/Colors";
import { useTheme } from "@/context/ThemeContext";
import { Feather } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";

interface HomeHeaderProps {
  userName: string;
  greeting: string;
}

export const HomeHeader: React.FC<HomeHeaderProps> = ({
  userName,
  greeting,
}) => {
  const { isDark } = useTheme();
  const colors = isDark ? Colors.dark : Colors.light;

  return (
    <LinearGradient
      colors={[colors.gradientStart, colors.gradientMiddle, colors.gradientEnd]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.header}
    >
      <View style={styles.headerContent}>
        <View style={styles.greetingSection}>
          <Text style={[styles.greeting, { color: "white" }]}>
            {greeting}, {userName}! 👋
          </Text>
          <Text style={[styles.subtitle, { color: "rgba(255,255,255,0.9)" }]}>
            Ready to continue your learning journey?
          </Text>
        </View>

        <View style={styles.headerActions}>
          <View style={styles.iconWrapper}>
            <Feather name="bell" size={24} color="white" />
            <View style={[styles.badge, { backgroundColor: colors.error }]} />
          </View>
          <View style={styles.iconWrapper}>
            <Feather name="user" size={24} color="white" />
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingTop: Platform.OS === "ios" ? Spacing.base : Spacing.lg,
    paddingBottom: Spacing.xl,
    paddingHorizontal: Spacing.lg,
    borderBottomLeftRadius: BorderRadius["2xl"],
    borderBottomRightRadius: BorderRadius["2xl"],
  },
  headerContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  greetingSection: {
    flex: 1,
  },
  greeting: {
    fontSize: Typography.sizes.xl, // Changed from 2xl → xl
    fontWeight: Typography.weights.bold,
    marginBottom: Spacing.xs,
  },
  subtitle: {
    fontSize: Typography.sizes.base,
    fontWeight: Typography.weights.normal,
    lineHeight: Typography.sizes.base * 1.4,
  },
  headerActions: {
    flexDirection: "row",
    alignItems: "center",
    gap: Spacing.sm,
  },
  iconWrapper: {
    position: "relative",
    padding: Spacing.sm,
  },
  badge: {
    position: "absolute",
    top: 8,
    right: 8,
    width: 8,
    height: 8,
    borderRadius: 4,
  },
});
