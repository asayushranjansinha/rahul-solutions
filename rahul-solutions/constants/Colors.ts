import { Dimensions, Platform, PixelRatio } from "react-native";

/**
 * Device information and utilities
 */
const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");
const { width: WINDOW_WIDTH, height: WINDOW_HEIGHT } = Dimensions.get("screen");

// Device type detection
const isTablet = () => {
  const pixelDensity = PixelRatio.get();
  const adjustedWidth = SCREEN_WIDTH * pixelDensity;
  const adjustedHeight = SCREEN_HEIGHT * pixelDensity;

  if (pixelDensity < 2 && (adjustedWidth >= 1000 || adjustedHeight >= 1000)) {
    return true;
  }

  return (
    (SCREEN_WIDTH >= 768 && SCREEN_HEIGHT >= 1024) ||
    (SCREEN_WIDTH >= 1024 && SCREEN_HEIGHT >= 768)
  );
};

// Screen size categories
const getScreenSize = () => {
  if (SCREEN_WIDTH < 380) return "small";
  if (SCREEN_WIDTH < 768) return "medium";
  if (SCREEN_WIDTH < 1024) return "large";
  return "xlarge";
};

// Safe area and notch detection
const hasNotch = () => {
  if (Platform.OS === "android") return false;
  return SCREEN_HEIGHT >= 812; // iPhone X and newer
};

export const Device = {
  width: SCREEN_WIDTH,
  height: SCREEN_HEIGHT,
  windowWidth: WINDOW_WIDTH,
  windowHeight: WINDOW_HEIGHT,
  isTablet: isTablet(),
  isPhone: !isTablet(),
  screenSize: getScreenSize(),
  hasNotch: hasNotch(),
  isIOS: Platform.OS === "ios",
  isAndroid: Platform.OS === "android",
  pixelRatio: PixelRatio.get(),
} as const;

/**
 * Responsive scaling functions
 */
export const scale = (size: number): number => {
  const baseWidth = Device.isTablet ? 768 : 375; // iPad or iPhone base
  return (Device.width / baseWidth) * size;
};

export const verticalScale = (size: number): number => {
  const baseHeight = Device.isTablet ? 1024 : 667; // iPad or iPhone base
  return (Device.height / baseHeight) * size;
};

export const moderateScale = (size: number, factor = 0.5): number => {
  return size + (scale(size) - size) * factor;
};

/**
 * Global app colors for light and dark themes.
 * Splash gradient reference for light: ["#0ea5e9", "#38bdf8", "#7dd3fc"]
 * Keep the theme modern, subtle, and not too wild.
 */
const tintColorLight = "#0ea5e9"; // Primary blue
const tintColorDark = "#60A5FA"; // Modern blue accent for dark theme

export const Colors = {
  light: {
    // Base colors
    text: "#11181C", // Near-black text for readability
    textSecondary: "#64748B", // Secondary text color
    textMuted: "#94A3B8", // Muted text for subtitles
    background: "#FFFFFF", // Pure white background
    backgroundSecondary: "#F8FAFC", // Light gray secondary background

    // Theme colors
    tint: tintColorLight, // Primary accent blue
    tintSecondary: "#38bdf8", // Secondary blue (lighter)
    tintTertiary: "#7dd3fc", // Tertiary blue (lightest)

    // Interactive elements
    icon: "#0ea5e9", // Match accent blue for icons
    tabIconDefault: "#94a3b8", // Soft slate gray for unselected
    tabIconSelected: tintColorLight, // Accent blue for active

    // Surface colors
    card: "#F8FAFC", // Light gray background for cards/blocks
    cardElevated: "#FFFFFF", // White for elevated cards
    border: "#E2E8F0", // Light border color
    borderMuted: "#F1F5F9", // Very light border

    // Status colors
    success: "#10B981", // Green
    warning: "#F59E0B", // Amber
    error: "#EF4444", // Red
    info: "#3B82F6", // Blue

    // Gradients
    gradientStart: "#0ea5e9",
    gradientMiddle: "#38bdf8",
    gradientEnd: "#7dd3fc",
  },
  dark: {
    // Base colors - Modern warm dark theme
    text: "#F8FAFC", // High contrast white for primary text
    textSecondary: "#E2E8F0", // Slightly muted but still readable
    textMuted: "#94A3B8", // Muted text for subtitles (same as light for consistency)
    background: "#0C0A09", // Warm near-black (trending warmer blacks)
    backgroundSecondary: "#1C1917", // Warm dark gray secondary

    // Theme colors - Modern blue accent system
    tint: tintColorDark, // Modern blue accent
    tintSecondary: "#93C5FD", // Lighter blue secondary
    tintTertiary: "#DBEAFE", // Very light blue tertiary

    // Interactive elements
    icon: "#A1A1AA", // Neutral zinc for better readability
    tabIconDefault: "#71717A", // Muted zinc for unselected tabs
    tabIconSelected: tintColorDark, // Blue accent for active tabs/icons

    // Surface colors - Trending warm grays
    card: "#1C1917", // Warm dark surface
    cardElevated: "#292524", // Elevated warm surface
    border: "#404040", // Subtle warm border
    borderMuted: "#262626", // Very subtle border

    // Status colors - Modern accessible variants
    success: "#22C55E", // Brighter green for better contrast
    warning: "#F97316", // Orange instead of amber (more modern)
    error: "#F87171", // Softer red, less harsh
    info: "#60A5FA", // Modern blue info color

    // Gradients - Warm dark gradient system
    gradientStart: "#1C1917",
    gradientMiddle: "#292524",
    gradientEnd: "#44403C",
  },
} as const;

/**
 * Responsive typography scale
 */
export const Typography = {
  sizes: {
    xs: moderateScale(10),
    sm: moderateScale(12),
    base: moderateScale(14),
    lg: moderateScale(16),
    xl: moderateScale(18),
    "2xl": moderateScale(20),
    "3xl": moderateScale(24),
    "4xl": moderateScale(28),
    "5xl": moderateScale(32),
    "6xl": moderateScale(36),
  },
  weights: {
    light: "300" as const,
    normal: "400" as const,
    medium: "500" as const,
    semibold: "600" as const,
    bold: "700" as const,
    extrabold: "800" as const,
  },
  lineHeights: {
    tight: 1.2,
    normal: 1.4,
    relaxed: 1.6,
    loose: 1.8,
  },
} as const;

/**
 * Responsive spacing scale
 */
export const Spacing = {
  xs: scale(4),
  sm: scale(8),
  base: scale(16),
  lg: scale(24),
  xl: scale(32),
  "2xl": scale(48),
  "3xl": scale(64),
  "4xl": scale(80),
  "5xl": scale(96),

  // Platform-specific spacing
  statusBarHeight: Device.isIOS ? (Device.hasNotch ? 44 : 20) : 0,
  tabBarHeight: Device.isIOS ? (Device.hasNotch ? 90 : 70) : 60,
  headerHeight: Device.isIOS ? (Device.hasNotch ? 88 : 64) : 56,

  // Safe area padding
  safeAreaTop: Device.isIOS ? (Device.hasNotch ? 44 : 20) : 0,
  safeAreaBottom: Device.isIOS ? (Device.hasNotch ? 34 : 0) : 0,
} as const;

/**
 * Responsive border radius scale
 */
export const BorderRadius = {
  xs: scale(4),
  sm: scale(6),
  base: scale(8),
  lg: scale(12),
  xl: scale(16),
  "2xl": scale(20),
  "3xl": scale(24),
  full: 9999,
} as const;

/**
 * Platform-aware shadow configurations
 */
export const Shadows = {
  xs: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: Device.isIOS ? 0.05 : 0.1,
    shadowRadius: Device.isIOS ? 1.5 : 2,
    elevation: Device.isAndroid ? 1 : 0,
  },
  sm: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: Device.isIOS ? 0.05 : 0.12,
    shadowRadius: Device.isIOS ? 2 : 3,
    elevation: Device.isAndroid ? 2 : 0,
  },
  base: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: Device.isIOS ? 0.1 : 0.15,
    shadowRadius: Device.isIOS ? 4 : 5,
    elevation: Device.isAndroid ? 3 : 0,
  },
  lg: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: Device.isIOS ? 0.15 : 0.2,
    shadowRadius: Device.isIOS ? 8 : 10,
    elevation: Device.isAndroid ? 5 : 0,
  },
  xl: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: Device.isIOS ? 0.2 : 0.25,
    shadowRadius: Device.isIOS ? 12 : 15,
    elevation: Device.isAndroid ? 8 : 0,
  },
} as const;

/**
 * Responsive layout breakpoints
 */
export const Breakpoints = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400,
} as const;

/**
 * Animation durations and easing
 */
export const Animations = {
  duration: {
    fast: 150,
    normal: 250,
    slow: 350,
    slower: 500,
  },
  easing: {
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
  },
} as const;

/**
 * Utility functions
 */
export const Utils = {
  /**
   * Get responsive value based on screen size
   */
  getResponsiveValue: <T>(values: {
    small?: T;
    medium?: T;
    large?: T;
    xlarge?: T;
    default: T;
  }): T => {
    const screenSize = Device.screenSize;
    return values[screenSize] || values.default;
  },

  /**
   * Get platform-specific value
   */
  getPlatformValue: <T>(values: { ios?: T; android?: T; default: T }): T => {
    if (Device.isIOS && values.ios) return values.ios;
    if (Device.isAndroid && values.android) return values.android;
    return values.default;
  },

  /**
   * Check if device is in landscape mode
   */
  isLandscape: (): boolean => Device.width > Device.height,

  /**
   * Get safe area padding for specific sides
   */
  getSafeAreaPadding: (
    side: "top" | "bottom" | "horizontal" | "vertical" | "all"
  ) => {
    const padding = {
      top: Spacing.safeAreaTop,
      bottom: Spacing.safeAreaBottom,
      left: 0,
      right: 0,
    };

    switch (side) {
      case "top":
        return { paddingTop: padding.top };
      case "bottom":
        return { paddingBottom: padding.bottom };
      case "horizontal":
        return { paddingLeft: padding.left, paddingRight: padding.right };
      case "vertical":
        return { paddingTop: padding.top, paddingBottom: padding.bottom };
      case "all":
        return padding;
      default:
        return {};
    }
  },

  /**
   * Get responsive font size with platform scaling
   */
  getResponsiveFontSize: (baseSize: number): number => {
    const scaledSize = moderateScale(baseSize);

    // Additional scaling for Android if needed
    if (Device.isAndroid && Device.pixelRatio < 2) {
      return scaledSize * 1.1;
    }

    return scaledSize;
  },

  /**
   * Get hit slop for touchable elements
   */
  getHitSlop: (size: "small" | "medium" | "large" = "medium") => {
    const slopSizes = {
      small: scale(8),
      medium: scale(12),
      large: scale(16),
    };

    const slop = slopSizes[size];
    return { top: slop, bottom: slop, left: slop, right: slop };
  },
} as const;

/**
 * Theme utilities
 */
export const ThemeUtils = {
  /**
   * Get color with opacity
   */
  getColorWithOpacity: (color: string, opacity: number): string => {
    // Convert hex to rgba
    const hex = color.replace("#", "");
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  },

  /**
   * Get shadow style for current theme
   */
  getShadowStyle: (shadowKey: keyof typeof Shadows, isDark: boolean) => {
    const shadow = Shadows[shadowKey];

    return {
      ...shadow,
      shadowColor: isDark ? "#000" : shadow.shadowColor,
      shadowOpacity: isDark ? shadow.shadowOpacity * 0.5 : shadow.shadowOpacity,
    };
  },
} as const;
