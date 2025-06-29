import { Feather } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { BorderRadius, Shadows, Spacing, Typography } from "@/constants/Colors";
import { ProfileHeaderProps } from "@/types";

export const ProfileHeader: React.FC<ProfileHeaderProps> = ({
  user,
  colors,
}) => {
  const getInitials = (): string => {
    if (!user?.name) return "U";
    return user.name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <View style={styles.ProfileHeader}>
      <View
        style={[
          styles.profileHeaderContainer,
          { backgroundColor: colors.card },
        ]}
      >
        {/* avatar */}
        <View style={styles.profileAvatarContainer}>
          <LinearGradient
            colors={[colors.gradientMiddle, colors.gradientEnd]}
            style={styles.profileAvatar}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
          >
            <Text style={styles.profileAvatarText}>{getInitials()}</Text>
          </LinearGradient>
          <View
            style={[styles.profileBadge, { backgroundColor: colors.success }]}
          >
            <Feather name="check" size={12} color="#fff" />
          </View>
        </View>
        {/* Info */}
        <View style={styles.profileInfo}>
          <Text style={[styles.profileName, { color: colors.text }]}>
            {user?.name}
          </Text>
          <View
            style={[
              styles.designationBadge,
              { backgroundColor: colors.tint + "10" },
            ]}
          >
            <Text style={[styles.profileDesignation, { color: colors.tint }]}>
              {user?.designation}
            </Text>
          </View>
          <Text style={[styles.profileEmail, { color: colors.textMuted }]}>
            {user?.email || "john.doe@example.com"}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ProfileHeader: {
    margin: Spacing.lg,
  },
  profileHeaderContainer: {
    padding: Spacing.base,
    borderRadius: BorderRadius.lg,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  profileAvatarContainer: {
    position: "relative",
    height: 75,
    width: 75,
    borderRadius: BorderRadius.full,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: Spacing.base,
    ...Shadows.xs,
  },

  profileAvatar: {
    height: "100%",
    width: "100%",
    borderRadius: BorderRadius.full,
    justifyContent: "center",
    alignItems: "center",
  },
  profileAvatarText: {
    color: "#fff",
    fontSize: Typography.sizes.xl, // slightly smaller
    fontWeight: Typography.weights.bold,
    letterSpacing: 0.5,
  },
  profileBadge: {
    position: "absolute",
    height: 22,
    width: 22,
    bottom: 0,
    right: 0,
    borderRadius: BorderRadius.full,
    borderWidth: 2,
    borderColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    ...Shadows.sm,
  },
  profileInfo: {
    alignItems: "center",
  },
  profileName: {
    fontSize: Typography.sizes.xl,
    fontWeight: Typography.weights.bold,
    marginBottom: Spacing.xs,
    letterSpacing: -0.5,
  },
  designationBadge: {
    alignSelf: "center",
    paddingHorizontal: Spacing.sm,
    paddingVertical: Spacing.xs / 2,
    borderRadius: 9999, // Safe pill for all platforms
    marginBottom: Spacing.xs,
  },
  profileDesignation: {
    fontSize: Typography.sizes.xs,
    fontWeight: Typography.weights.semibold,
  },
  profileEmail: {
    fontSize: Typography.sizes.xs,
    fontWeight: Typography.weights.medium,
  },
});
