import { BorderRadius, Shadows, Spacing, Typography } from "@/constants/Colors";
import { MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Platform, Pressable, StyleSheet, Text, View } from "react-native";

interface TelegramButtonProps {
  onPress?: () => void;
  title?: string;
  subtitle?: string;
}

const TelegramButton: React.FC<TelegramButtonProps> = ({
  onPress,
  title = "Join Our Telegram",
  subtitle = "Get instant updates & connect with learners",
}) => {
  const handlePress = () => {
    if (onPress) {
      onPress();
    } else {
      console.log("Opening Telegram...");
    }
  };

  return (
    <View style={styles.container}>
      <Pressable
        onPress={handlePress}
        style={({ pressed }) => [
          styles.button,
          {
            transform: [{ scale: pressed ? 0.98 : 1 }],
          },
        ]}
        android_ripple={{
          color: "rgba(255, 255, 255, 0.2)",
          borderless: false,
        }}
      >
        <LinearGradient
          colors={["#0088cc", "#229ED9", "#40B7E7"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={[styles.gradient, Shadows.lg]}
        >
          <View style={styles.content}>
            <View style={styles.iconContainer}>
              <MaterialIcons name="telegram" size={28} color="white" />
            </View>

            <View style={styles.textContainer}>
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.subtitle}>{subtitle}</Text>
            </View>

            <View style={styles.arrowContainer}>
              <MaterialIcons
                name="arrow-forward-ios"
                size={16}
                color="rgba(255, 255, 255, 0.8)"
              />
            </View>
          </View>
        </LinearGradient>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: Spacing.lg,
    marginBottom: Spacing.xl,
  },
  button: {
    borderRadius: BorderRadius.lg,
    overflow: "hidden",
  },
  gradient: {
    borderRadius: BorderRadius.lg,
    ...(Platform.OS === "ios" && {
      shadowColor: "#0088cc",
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.3,
      shadowRadius: 8,
    }),
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: Spacing.base + 2,
    paddingHorizontal: Spacing.base,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: BorderRadius.base,
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    justifyContent: "center",
    alignItems: "center",
    marginRight: Spacing.sm,
  },
  textContainer: {
    flex: 1,
    marginRight: Spacing.sm,
  },
  title: {
    fontSize: Typography.sizes.base,
    fontWeight: Typography.weights.semibold,
    color: "white",
    marginBottom: 2,
  },
  subtitle: {
    fontSize: Typography.sizes.sm,
    fontWeight: Typography.weights.normal,
    color: "rgba(255, 255, 255, 0.85)",
    lineHeight: Typography.sizes.sm * 1.3,
  },
  arrowContainer: {
    padding: Spacing.xs,
  },
});

export default TelegramButton;
