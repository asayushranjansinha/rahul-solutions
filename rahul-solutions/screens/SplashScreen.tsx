import { ThemedText } from "@/components/ThemedText";
import { LinearGradient } from "expo-linear-gradient";
import LottieView from "lottie-react-native";
import React, { useEffect, useRef } from "react";
import { Animated, SafeAreaView, useColorScheme, View } from "react-native";

interface SplashScreenProps {
  onFinish: () => void;
}

export default function SplashScreen({ onFinish }: SplashScreenProps) {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";

  const animation = useRef<LottieView>(null);

  // Fade-only animations
  const lottieOpacity = useRef(new Animated.Value(0)).current;
  const companyOpacity = useRef(new Animated.Value(0)).current;
  const taglineOpacity = useRef(new Animated.Value(0)).current;
  const creatorOpacity = useRef(new Animated.Value(0)).current;
  const copyrightOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.sequence([
      // 1️⃣ Lottie fade in
      Animated.timing(lottieOpacity, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),

      // 2️⃣ Company name fade in
      Animated.timing(companyOpacity, {
        toValue: 1,
        duration: 600,
        useNativeDriver: true,
      }),

      // 3️⃣ Tagline fade in
      Animated.timing(taglineOpacity, {
        toValue: 1,
        duration: 600,
        useNativeDriver: true,
      }),

      // 4️⃣ Creator & Copyright fade in TOGETHER
      Animated.parallel([
        Animated.timing(creatorOpacity, {
          toValue: 1,
          duration: 600,
          useNativeDriver: true,
        }),
        Animated.timing(copyrightOpacity, {
          toValue: 1,
          duration: 600,
          useNativeDriver: true,
        }),
      ]),
    ]).start();

    const timer = setTimeout(() => {
      onFinish();
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View className="flex-1">
      <LinearGradient
        colors={
          isDark
            ? ["#0c4a6e", "#075985", "#0369a1"]
            : ["#0ea5e9", "#38bdf8", "#7dd3fc"]
        }
        style={{ flex: 1, width: "100%", height: "100%" }}
      >
        <SafeAreaView className="flex-1 items-center justify-center">
          {/* ✅ Lottie */}
          <Animated.View style={{ opacity: lottieOpacity }}>
            <LottieView
              autoPlay
              ref={animation}
              style={{ width: 200, height: 200 }}
              source={require("../assets/animations/welcome.json")}
            />
          </Animated.View>

          {/* ✅ Company Name */}
          <Animated.View
            style={{ opacity: companyOpacity }}
            className="items-center mb-2 mt-4"
          >
            <ThemedText type="title">Rahul Solutions</ThemedText>
          </Animated.View>

          {/* ✅ Tagline */}
          <Animated.View style={{ opacity: taglineOpacity }}>
            <ThemedText
              type="subtitle"
              style={{ textAlign: "center", paddingHorizontal: 32 }}
            >
              Digital Marketing & Web Design
            </ThemedText>
          </Animated.View>

          {/* ✅ Creator Credit */}
          <Animated.View
            style={{ opacity: creatorOpacity }}
            className="absolute bottom-16 items-center"
          >
            <ThemedText type="default" style={{ fontSize: 14 }}>
              Created by
            </ThemedText>
            <ThemedText type="defaultSemiBold" style={{ fontSize: 14 }}>
              Ayush Ranjan Sinha
            </ThemedText>
          </Animated.View>

          {/* ✅ Copyright */}
          <Animated.View
            style={{ opacity: copyrightOpacity }}
            className="absolute bottom-8 items-center"
          >
            <ThemedText type="default" style={{ fontSize: 12 }}>
              © 2025 Rahul Solutions. All rights reserved.
            </ThemedText>
          </Animated.View>
        </SafeAreaView>
      </LinearGradient>
    </View>
  );
}
