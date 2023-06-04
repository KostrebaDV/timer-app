import { createContext, FC, PropsWithChildren, useCallback, useState } from 'react';
import { ThemeContextValue, ThemeState, ThemeMode } from './types';
import { nextStepThemeMode, THEME_ROOT_ID } from './const';

export const ThemeContext = createContext<ThemeContextValue>({
  handleThemeState: () => null,
  handleThemeMode: () => null,
  currentThemeState: ThemeState.Focus,
  currentThemeMode: ThemeMode.light,
});

export const ThemeProvider: FC<PropsWithChildren> = (
  {
    children
  }
) => {
  const [currentTheme, setCurrentTheme] = useState(`${ThemeMode.light}${ThemeState.Focus}`)
  const [currentThemeState, setCurrentThemeState] = useState<typeof ThemeState>(ThemeState.Focus)
  const [currentThemeMode, setCurrentThemeMode] = useState<typeof ThemeMode>(ThemeMode.light)

  const handleThemeState = useCallback((themeState) => {
    setCurrentThemeState(themeState);

    setCurrentTheme(`${currentThemeMode}${themeState}`);
  }, [currentThemeMode])

  const handleThemeMode = useCallback(() => {
    setCurrentThemeMode(nextStepThemeMode[currentThemeMode]);

    setCurrentTheme(`${nextStepThemeMode[currentThemeMode]}${currentThemeState}`);
  }, [currentThemeMode, currentThemeState])
  
  return (
    <ThemeContext.Provider value={{handleThemeState, handleThemeMode, currentThemeState, currentThemeMode}}>
      <div
        id={THEME_ROOT_ID}
        data-theme={currentTheme}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
};