export const ThemeState = {
  Focus: 'Focus',
  Pause: 'Pause',
  Break: 'Break',
}

export const ThemeMode = {
  dark: 'dark',
  light: 'light',
}

export type ThemeContextValue = {
  handleThemeState: (themeMode: string) => void;
  handleThemeMode: (themeMode: typeof ThemeMode) => void;
  currentThemeState: string;
  currentThemeMode: string;
};

