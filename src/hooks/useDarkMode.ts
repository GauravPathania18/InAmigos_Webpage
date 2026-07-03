import { useState, useEffect } from 'react';
import { ThemeMode } from '../types';

export function useDarkMode() {
  const [themeMode, setThemeMode] = useState<ThemeMode>(() => {
    const saved = localStorage.getItem('inamigos_theme_mode_v3') as ThemeMode;
    if (saved && ['light', 'dark', 'system'].includes(saved)) {
      return saved;
    }
    return 'dark';
  });

  const [isDark, setIsDark] = useState<boolean>(true);

  useEffect(() => {
    const root = window.document.documentElement;
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const updateTheme = () => {
      let activeDark = true;
      if (themeMode === 'system') {
        activeDark = mediaQuery.matches;
      } else if (themeMode === 'light') {
        activeDark = false;
      } else {
        activeDark = true;
      }

      setIsDark(activeDark);
      if (activeDark) {
        root.classList.add('dark');
      } else {
        root.classList.remove('dark');
      }
    };

    updateTheme();
    localStorage.setItem('inamigos_theme_mode_v3', themeMode);

    const handleSystemChange = () => {
      if (themeMode === 'system') {
        updateTheme();
      }
    };

    mediaQuery.addEventListener('change', handleSystemChange);
    return () => mediaQuery.removeEventListener('change', handleSystemChange);
  }, [themeMode]);

  const toggleTheme = () => {
    if (isDark) {
      setThemeMode('light');
    } else {
      setThemeMode('dark');
    }
  };

  return { themeMode, setThemeMode, isDark, toggleTheme };
}
