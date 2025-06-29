import {
  BorderRadius,
  Colors,
  Shadows,
  Spacing,
  Typography,
} from "@/constants/Colors";
import { ActionItem, actions } from "@/constants/mockData";
import { useTheme } from "@/context/ThemeContext";
import { Feather } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
  FlatList,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SectionHeader } from "./common/SectionHeader";

interface ActionIconsProps {
  title?: string;
  subtitle?: string;
  onActionPress?: (action: ActionItem) => void;
}

const ActionIcons: React.FC<ActionIconsProps> = ({
  title = "Quick Actions",
  subtitle = "Explore what you can do today",
  onActionPress,
}) => {
  const { isDark } = useTheme();
  const colors = isDark ? Colors.dark : Colors.light;

  const handleActionPress = (action: ActionItem) => {
    if (onActionPress) {
      onActionPress(action);
    } else {
      console.log(`${action.title} pressed`);
    }
  };

  return (
    <View style={styles.container}>
      <SectionHeader title={title} subtitle={subtitle} />

      {/* FlatList for 4 items in a row */}
      <FlatList
        data={actions}
        keyExtractor={(item) => item.id.toString()}
        numColumns={4}
        scrollEnabled={false}
        columnWrapperStyle={styles.row}
        renderItem={({ item: action }) => (
          <View style={styles.actionItemContainer}>
            <Pressable
              onPress={() => handleActionPress(action)}
              style={({ pressed }) => [
                styles.actionItem,
                { transform: [{ scale: pressed ? 0.95 : 1 }] },
              ]}
              android_ripple={{
                color: colors.tint,
                borderless: true,
                radius: 40,
              }}
            >
              <View style={styles.iconTextWrapper}>
                <LinearGradient
                  colors={action.gradientColors as any}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                  style={[styles.gradientContainer, Shadows.base]}
                >
                  <Feather
                    name={action.icon}
                    size={24}
                    color={action.iconColor}
                  />
                </LinearGradient>

                <Text
                  style={[styles.actionTitle, { color: colors.text }]}
                  numberOfLines={2}
                  ellipsizeMode="tail"
                >
                  {action.title}
                </Text>
              </View>
            </Pressable>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: Spacing.lg,
    marginBottom: Spacing.xl,
  },
  sectionHeader: {
    marginBottom: Spacing.lg,
  },
  sectionTitle: {
    fontSize: Typography.sizes.lg,
    fontWeight: Typography.weights.semibold,
    marginBottom: Spacing.xs,
  },
  sectionSubtitle: {
    fontSize: Typography.sizes.sm,
    fontWeight: Typography.weights.normal,
    lineHeight: Typography.sizes.sm * 1.4,
  },
  row: {
    justifyContent: "space-between",
  },
  actionItemContainer: {
    flex: 1,
    alignItems: "center",
    marginBottom: Spacing.lg,
    minWidth: "22%",
    maxWidth: "23%",
  },
  actionItem: {
    alignItems: "center",
    justifyContent: "center",
  },
  iconTextWrapper: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  gradientContainer: {
    width: 52,
    height: 52,
    borderRadius: BorderRadius.lg,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: Spacing.sm,
    ...(Platform.OS === "ios" && {
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.08,
      shadowRadius: 3,
    }),
    ...(Platform.OS === "android" && {
      elevation: 2,
    }),
  },
  actionTitle: {
    fontSize: Typography.sizes.xs,
    fontWeight: Typography.weights.medium,
    textAlign: "center",
    lineHeight: Typography.sizes.xs * 1.2,
    letterSpacing: 0.2,
  },
});

export default ActionIcons;
