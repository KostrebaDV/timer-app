export enum THEMES {
  LIGHT_FOCUS = 'lightFocus',
  LIGHT_PAUSE = 'lightPause',
  LIGHT_BREAK = 'lightBreak',
  DARK_FOCUS = 'darkFocus',
  DARK_PAUSE = 'darkPause',
  DARK_BREAK = 'darkBreak',
}

export type ThemeContextValue = {
  switchTheme: (theme: typeof THEMES) => void;
  currentTheme: THEMES;
};

