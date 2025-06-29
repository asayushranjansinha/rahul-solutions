import React, { useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ListRenderItem,
  ViewToken,
} from "react-native";
import CourseCard, { Course } from "@/components/CourseCard";
import { Spacing, Typography } from "@/constants/Colors";

interface CoursesSectionProps {
  colors: any;
  courses: Course[];
  onCoursePress?: (course: Course) => void;
  onViewableItemsChanged?: (info: { viewableItems: ViewToken[] }) => void;
  ListHeaderComponent?: React.ReactElement; // 👈 add header slot
}

const CoursesSection: React.FC<CoursesSectionProps> = ({
  colors,
  courses,
  onCoursePress,
  onViewableItemsChanged,
  ListHeaderComponent,
}) => {
  const renderCourseItem: ListRenderItem<Course> = useCallback(
    ({ item }) => (
      <View style={styles.cardWrapper}>
        <CourseCard
          course={item}
          onPress={
            onCoursePress ||
            ((course) => console.log(`Opening course: ${course.title}`))
          }
        />
      </View>
    ),
    [onCoursePress]
  );

  const keyExtractor = useCallback((item: Course) => item.id.toString(), []);

  const getItemLayout = useCallback(
    (_: Course[] | null | undefined, index: number) => ({
      length: 280, // Estimated height of CourseCard + margin
      offset: 280 * index,
      index,
    }),
    []
  );

  const renderEmpty = useCallback(
    () => (
      <View style={styles.emptyContainer}>
        <Text style={[styles.emptyText, { color: colors.textSecondary }]}>
          No courses available at the moment
        </Text>
        <Text style={[styles.emptySubtext, { color: colors.textMuted }]}>
          Check back soon for new content!
        </Text>
      </View>
    ),
    [colors]
  );

  const renderFooter = useCallback(
    () => <View style={styles.listFooter} />,
    []
  );

  return (
    <FlatList
      data={courses}
      renderItem={renderCourseItem}
      keyExtractor={keyExtractor}
      ListHeaderComponent={
        <>
          {ListHeaderComponent}
          <View style={styles.sectionHeader}>
            <Text style={[styles.sectionTitle, { color: colors.text }]}>
              Available Courses
            </Text>
            <Text
              style={[styles.sectionSubtitle, { color: colors.textSecondary }]}
            >
              Expand your skills with our expert-led courses
            </Text>
          </View>
        </>
      }
      ListEmptyComponent={renderEmpty}
      ListFooterComponent={renderFooter}
      contentContainerStyle={[
        styles.container,
        courses.length === 0 && styles.emptyListContainer,
      ]}
      showsVerticalScrollIndicator={false}
      removeClippedSubviews={true}
      maxToRenderPerBatch={10}
      updateCellsBatchingPeriod={50}
      initialNumToRender={5}
      windowSize={10}
      getItemLayout={getItemLayout}
      onViewableItemsChanged={onViewableItemsChanged}
      viewabilityConfig={{
        itemVisiblePercentThreshold: 50,
        minimumViewTime: 300,
      }}
      scrollEventThrottle={16}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  emptyListContainer: {
    flex: 1,
    justifyContent: "center",
  },
  sectionHeader: {
    paddingHorizontal: Spacing.lg,
    paddingTop: Spacing.base,
    marginBottom: Spacing.lg,
  },
  sectionTitle: {
    fontSize: Typography.sizes.xl,
    fontWeight: Typography.weights.bold,
    marginBottom: Spacing.xs,
    letterSpacing: -0.5,
  },
  cardWrapper: {
    marginBottom: Spacing.sm,
    paddingHorizontal: Spacing.lg,
  },
  sectionSubtitle: {
    fontSize: Typography.sizes.base,
    fontWeight: Typography.weights.normal,
    lineHeight: Typography.sizes.base * 1.4,
  },
  emptyContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Spacing.xl,
    paddingVertical: Spacing["2xl"],
  },
  emptyText: {
    fontSize: Typography.sizes.lg,
    fontWeight: Typography.weights.medium,
    textAlign: "center",
    marginBottom: Spacing.xs,
  },
  emptySubtext: {
    fontSize: Typography.sizes.sm,
    textAlign: "center",
    lineHeight: Typography.sizes.sm * 1.4,
  },
  listFooter: {
    height: Spacing.xl,
  },
});

export { CoursesSection };
