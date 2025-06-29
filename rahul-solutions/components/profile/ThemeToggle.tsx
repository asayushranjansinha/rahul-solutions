import React from "react";
import {
  Animated,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";

import { SectionHeader } from "@/components/common/SectionHeader";
import { Spacing } from "@/constants/Colors";
import { ThemeToggleSectionProps } from "@/types";

export const ThemeToggleSection: React.FC<ThemeToggleSectionProps> = ({
  isDark,
  colors,
  onThemeToggle,
}) => {
  return (
    <View style={styles.section}>
      <View style={styles.container}>
        <SectionHeader
          title="Appearance"
          subtitle={`Switch to ${isDark ? "light" : "dark"} theme`}
        />

        {/* Switch */}
        <TouchableOpacity
          onPress={onThemeToggle}
          style={[
            styles.themeSwitch,
            {
              backgroundColor: isDark ? colors.success : colors.borderMuted,
              borderColor: isDark ? colors.success : colors.border,
            },
          ]}
          activeOpacity={0.8}
        >
          <Animated.View
            style={[
              styles.themeSwitchHandle,
              {
                transform: [{ translateX: isDark ? 24 : 2 }],
                backgroundColor: isDark ? "#fff" : colors.card,
              },
            ]}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.base,
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  themeSwitch: {
    width: 52,
    height: 30,
    borderRadius: 15,
    padding: 2,
    borderWidth: 1,
  },
  themeSwitchHandle: {
    width: 26,
    height: 26,
    borderRadius: 13,
  },
});
