import { Feather } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { BorderRadius, Spacing, Typography } from "@/constants/Colors";
import { MenuItem, MenuSectionProps } from "@/types";

export const MenuSection: React.FC<MenuSectionProps> = ({
  section,
  colors,
}) => {
  /**
   * Render a single menu item.
   */
  const renderMenuItem = (
    item: MenuItem,
    index: number,
    isLast: boolean
  ): React.ReactElement => (
    <TouchableOpacity
      key={item.id}
      onPress={item.action}
      style={styles.menuItem}
      activeOpacity={0.6}
    >
      {/* Icon & Title */}
      <View style={styles.menuItemContent}>
        <View
          style={[
            styles.menuItemIconWrapper,
            { backgroundColor: colors.tint + "15" },
          ]}
        >
          <Feather
            name={item.icon}
            size={18}
            color={item.color || colors.tint}
          />
        </View>

        <Text style={[styles.menuItemTitle, { color: colors.text }]}>
          {item.title}
        </Text>
      </View>

      {/* Badge & Chevron */}
      <View style={styles.menuItemActions}>
        {item.badge && (
          <View
            style={[
              styles.menuItemBadgeContainer,
              {
                backgroundColor: colors.tint, // Ensures contrast for light mode
              },
            ]}
          >
            <Text style={[styles.menuItemBadgeText]}>{item.badge}</Text>
          </View>
        )}
        <Feather name="chevron-right" size={16} color={colors.textMuted} />
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.section}>
      {/* Header */}
      <View style={styles.sectionHeaderContainer}>
        <Text style={[styles.sectionTitle, { color: colors.text }]}>
          {section.title}
        </Text>

        {section.icon && (
          <View
            style={[
              styles.sectionIconContainer,
              { backgroundColor: colors.tint + "10" },
            ]}
          >
            <Feather name={section.icon} size={16} color={colors.tint} />
          </View>
        )}
      </View>

      {/* Items */}
      <View>
        {section.items.map((item, index) =>
          renderMenuItem(item, index, index === section.items.length - 1)
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    paddingHorizontal: Spacing.lg,
    marginBottom: Spacing.xl,
  },
  sectionHeaderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: Spacing.base,
  },
  sectionTitle: {
    fontSize: Typography.sizes.lg,
    fontWeight: Typography.weights.semibold,
  },
  sectionIconContainer: {
    width: 28,
    height: 28,
    borderRadius: BorderRadius.sm,
    justifyContent: "center",
    alignItems: "center",
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    minHeight: 64,
  },
  menuItemContent: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  menuItemIconWrapper: {
    width: 40,
    height: 40,
    borderRadius: BorderRadius.base,
    justifyContent: "center",
    alignItems: "center",
    marginRight: Spacing.base,
  },
  menuItemTitle: {
    fontSize: Typography.sizes.base,
    fontWeight: Typography.weights.medium,
  },
  menuItemActions: {
    flexDirection: "row",
    alignItems: "center",
  },
  menuItemBadgeContainer: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: BorderRadius.base,
    marginRight: Spacing.sm,
  },
  menuItemBadgeText: {
    fontSize: Typography.sizes.xs,
    fontWeight: Typography.weights.semibold,
  },
});
