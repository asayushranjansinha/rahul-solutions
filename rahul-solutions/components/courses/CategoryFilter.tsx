import React from "react";
import { ScrollView, TouchableOpacity, Text, StyleSheet } from "react-native";
import { Spacing, Typography, BorderRadius } from "@/constants/Colors";

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  onCategorySelect: (category: string) => void;
  colors: any;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  selectedCategory,
  onCategorySelect,
  colors,
}) => (
  <ScrollView
    horizontal
    showsHorizontalScrollIndicator={false}
    style={styles.categoryContainer}
    contentContainerStyle={styles.categoryContent}
  >
    {categories.map((category) => {
      const isSelected = selectedCategory === category;

      return (
        <TouchableOpacity
          key={category}
          onPress={() => onCategorySelect(category)}
          style={[
            styles.categoryButton,
            {
              backgroundColor: isSelected ? colors.tint : colors.card,
              borderColor: colors.border,
            },
          ]}
          activeOpacity={0.7}
        >
          <Text
            style={[
              styles.categoryText,
              {
                color: isSelected ? "#FFFFFF" : colors.text,
                fontWeight: isSelected
                  ? Typography.weights.semibold
                  : Typography.weights.medium,
              },
            ]}
          >
            {category}
          </Text>
        </TouchableOpacity>
      );
    })}
  </ScrollView>
);

const styles = StyleSheet.create({
  categoryContainer: {
    marginBottom: Spacing.base,
  },
  categoryContent: {
    paddingRight: Spacing.lg,
  },
  categoryButton: {
    paddingHorizontal: Spacing.base,
    paddingVertical: Spacing.sm,
    borderRadius: BorderRadius.xl,
    marginRight: Spacing.sm,
    borderWidth: 1,
  },
  categoryText: {
    fontSize: Typography.sizes.sm,
  },
});
