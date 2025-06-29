import { useColorScheme as useNativeColorScheme } from 'react-native';
import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

type ColorScheme = 'light' | 'dark';

const THEME_STORAGE_KEY = '@app_theme';

export function useColorScheme() {
  const systemColorScheme = useNativeColorScheme();
  const [colorScheme, setColorScheme] = useState<ColorScheme>(systemColorScheme || 'light');

  // Load saved theme on app start
  useEffect(() => {
    loadSavedTheme();
  }, []);

  const loadSavedTheme = async () => {
    try {
      const savedTheme = await AsyncStorage.getItem(THEME_STORAGE_KEY);
      if (savedTheme) {
        setColorScheme(savedTheme as ColorScheme);
      }
    } catch (error) {
      console.log('Error loading theme:', error);
    }
  };

  const toggleColorScheme = async () => {
    try {
      const newTheme = colorScheme === 'light' ? 'dark' : 'light';
      setColorScheme(newTheme);
      await AsyncStorage.setItem(THEME_STORAGE_KEY, newTheme);
    } catch (error) {
      console.log('Error saving theme:', error);
    }
  };

  return {
    colorScheme,
    toggleColorScheme,
  };
}