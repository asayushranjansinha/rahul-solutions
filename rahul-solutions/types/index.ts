import { Feather } from "@expo/vector-icons";

export interface User {
  id: string;
  name: string;
  email: string;
  designation?: string;
  avatar?: string;
}

export interface MenuItem {
  id: string;
  title: string;
  icon: keyof typeof Feather.glyphMap;
  action: () => void;
  badge?: string;
  color?: string;
}

export interface MenuSection {
  id: string;
  title: string;
  icon: keyof typeof Feather.glyphMap;
  items: MenuItem[];
}

export interface ColorScheme {
  text: string;
  textSecondary: string;
  textMuted: string;
  background: string;
  backgroundSecondary: string;
  tint: string;
  tintSecondary: string;
  tintTertiary: string;
  icon: string;
  tabIconDefault: string;
  tabIconSelected: string;
  card: string;
  cardElevated: string;
  border: string;
  borderMuted: string;
  success: string;
  warning: string;
  error: string;
  info: string;
  gradientStart: string;
  gradientMiddle: string;
  gradientEnd: string;
  primary?: string;
}

export interface ProfileHeaderProps {
  user: User | null;
  colors: ColorScheme;
}

export interface ProfileStat {
  id: string;
  label: string;
  value: string | number;
  icon: keyof typeof Feather.glyphMap;
  color: string;
  gradient: string[];
}

export interface ThemeToggleSectionProps {
  isDark: boolean;
  colors: ColorScheme;
  onThemeToggle: () => void;
}

export interface MenuSectionProps {
  section: MenuSection;
  colors: ColorScheme;
}

export interface LogoutSectionProps {
  onLogout: () => void;
}

export interface ProfileFooterProps {
  colors: ColorScheme;
}

