import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Spacing, Typography, BorderRadius, Shadows } from "@/constants/Colors";
import { CategoryFilter } from "./CategoryFilter";

interface CoursesHeaderProps {
  colors: any;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCategory: string;
  handleCategorySelect: (cat: string) => void;
  categories: string[];
}

export const CoursesHeader: React.FC<CoursesHeaderProps> = ({
  colors,
  searchQuery,
  setSearchQuery,
  selectedCategory,
  handleCategorySelect,
  categories,
}) => (
  <View style={styles.header}>
    <View style={styles.headerTop}>
      <Text style={[styles.headerTitle, { color: colors.text }]}>Courses</Text>
      <TouchableOpacity
        style={[styles.filterButton, { backgroundColor: colors.card }, Shadows.sm]}
      >
        <Feather name="filter" size={20} color={colors.icon} />
      </TouchableOpacity>
    </View>

    <View
      style={[
        styles.searchContainer,
        { backgroundColor: colors.card, borderColor: colors.border },
        Shadows.sm,
      ]}
    >
      <Feather name="search" size={20} color={colors.textMuted} />
      <TextInput
        placeholder="Search courses..."
        placeholderTextColor={colors.textMuted}
        style={[styles.searchInput, { color: colors.text }]}
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
    </View>

    <CategoryFilter
      categories={categories}
      selectedCategory={selectedCategory}
      onCategorySelect={handleCategorySelect}
      colors={colors}
    />
  </View>
);

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.base,
  },
  headerTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: Spacing.base,
  },
  headerTitle: {
    fontSize: Typography.sizes["2xl"],
    fontWeight: Typography.weights.bold,
  },
  filterButton: {
    padding: Spacing.sm,
    borderRadius: BorderRadius.base,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: Spacing.base,
    paddingVertical: Spacing.sm,
    borderRadius: BorderRadius.lg,
    marginBottom: Spacing.base,
    borderWidth: 1,
  },
  searchInput: {
    flex: 1,
    marginLeft: Spacing.sm,
    fontSize: Typography.sizes.base,
  },
});
