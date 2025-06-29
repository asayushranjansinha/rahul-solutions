import ActionIcons from "@/components/ActionIcons";
import FeaturedCarousel, { CarouselItem } from "@/components/FeaturedCarousel";
import { CoursesSection } from "@/components/home/CoursesSection";
import { HomeHeader } from "@/components/home/HomeHeader";
import { QuickStats } from "@/components/home/QuickStats";
import TelegramButton from "@/components/TelegramButton";
import { Colors, Spacing } from "@/constants/Colors";
import { featuredItems, sampleCourses } from "@/constants/mockData";
import { useTheme } from "@/context/ThemeContext";
import { useAuthStore } from "@/store/authStore";
import React from "react";
import { SafeAreaView, StatusBar, View } from "react-native";

const HomeScreen = () => {
  const { user } = useAuthStore();
  const { isDark } = useTheme();

  const colors = isDark ? Colors.dark : Colors.light;

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning";
    if (hour < 17) return "Good afternoon";
    return "Good evening";
  };

  const handleCarouselItemPress = (item: CarouselItem) => {
    console.log(`Carousel item pressed: ${item.title}`);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <StatusBar
        barStyle={isDark ? "light-content" : "dark-content"}
        backgroundColor={colors.background}
      />

      <CoursesSection
        colors={colors}
        courses={sampleCourses}
        onCoursePress={(course) => console.log(course.title)}
        ListHeaderComponent={
          <>
            <HomeHeader
              greeting={getGreeting()}
              userName={user?.name.split(" ")[0] as string}
            />
            <QuickStats />
            <FeaturedCarousel
              items={featuredItems}
              onItemPress={handleCarouselItemPress}
            />
            <ActionIcons />
            <TelegramButton onPress={() => console.log("Open Telegram")} />
          </>
        }
      />

      <View style={{ height: Spacing.xl }} />
    </SafeAreaView>
  );
};

export default HomeScreen;
