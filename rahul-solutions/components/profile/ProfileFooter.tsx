import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

import { Colors, Spacing, Typography } from "@/constants/Colors";
import { useTheme } from "@/context/ThemeContext";

export const ProfileFooter: React.FC = () => {
  const { isDark } = useTheme();
  const colors = Colors[isDark ? "dark" : "light"];

  const currentYear = new Date().getFullYear();

  return (
    <View style={styles.footer}>
      <View style={styles.footerContent}>
        {/* Security Badge */}
        <View style={styles.securityBadge}>
          <View
            style={[
              styles.iconContainer,
              { backgroundColor: colors.backgroundSecondary },
            ]}
          >
            <Feather name="shield" size={12} color={colors.success} />
          </View>
          <Text style={[styles.securityText, { color: colors.textMuted }]}>
            Secured & Encrypted
          </Text>
        </View>

        {/* Subtle Divider */}
        <View style={[styles.divider, { backgroundColor: colors.border }]} />

        {/* Version Info Block */}
        <View style={styles.versionBlock}>
          <Text style={[styles.copyrightText, { color: colors.textMuted }]}>
            © {currentYear} Rahul Solutions
          </Text>
          <Text style={[styles.buildText, { color: colors.textMuted }]}>
            Build 2024.12.1
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    alignItems: "center",
    paddingHorizontal: Spacing.lg,
  },
  footerContent: {
    alignItems: "center",
    gap: Spacing.base,
  },
  securityBadge: {
    flexDirection: "row",
    alignItems: "center",
    gap: Spacing.xs,
    paddingHorizontal: Spacing.sm,
    paddingVertical: Spacing.xs / 2,
    borderRadius: 16,
  },
  iconContainer: {
    width: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  securityText: {
    fontSize: Typography.sizes.xs,
    fontWeight: Typography.weights.medium,
    letterSpacing: 0.2,
  },
  divider: {
    width: 40,
    height: StyleSheet.hairlineWidth,
    opacity: 0.6,
  },
  versionBlock: {
    alignItems: "center",
    gap: Spacing.xs / 2,
  },
  copyrightText: {
    fontSize: Typography.sizes.xs,
    fontWeight: Typography.weights.medium,
    textAlign: "center",
    letterSpacing: 0.1,
  },
  buildText: {
    fontSize: Typography.sizes.xs - 1,
    fontWeight: Typography.weights.normal,
    textAlign: "center",
    opacity: 0.6,
    letterSpacing: 0.1,
  },
});
