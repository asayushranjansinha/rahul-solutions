import React, { JSX } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { LearningStats } from "@/components/profile/LearningStats";
import { LogoutButton } from "@/components/profile/LogoutButton";
import { MenuSection } from "@/components/profile/MenuSection";
import { ProfileFooter } from "@/components/profile/ProfileFooter";
import { ProfileHeader } from "@/components/profile/ProfileHeader";
import { ThemeToggleSection } from "@/components/profile/ThemeToggle";
import { Colors } from "@/constants/Colors";
import { menuSections, profileStats } from "@/constants/mockData";
import { useTheme } from "@/context/ThemeContext";
import { useAuthStore } from "@/store/authStore";

export default function ProfileScreen(): JSX.Element {
  const { user, logout } = useAuthStore();
  const { isDark, setTheme } = useTheme();
  const colors = isDark ? Colors.dark : Colors.light;

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.background }]}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <ProfileHeader user={user} colors={colors} />

        <LearningStats stats={profileStats} colors={colors} />

        <ThemeToggleSection
          isDark={isDark}
          colors={colors}
          onThemeToggle={() => setTheme(isDark ? "light" : "dark")}
        />

        {menuSections.map((section, index) => (
          <MenuSection key={section.id} section={section} colors={colors} />
        ))}

        <LogoutButton onLogout={logout} />

        <ProfileFooter />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

});
