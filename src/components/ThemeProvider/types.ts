export enum ThemeState {
  Focus = 'Focus',
  Pause = 'Pause',
  Break = 'Break',
}

export enum ThemeMode {
  dark = 'dark',
  light = 'light',
}

export type ThemeContextValue = {
  handleThemeState: (themeMode: typeof ThemeState) => void;
  handleThemeMode: (themeMode: typeof ThemeMode) => void;
  currentThemeState: string;
  currentThemeMode: string;
};

