import { createContext, FC, PropsWithChildren, useCallback, useEffect, useLayoutEffect, useState } from 'react';
import { ThemeContextValue, THEMES } from './types';
import { THEME_ROOT_ID } from './const';

export const ThemeContext = createContext<ThemeContextValue>({
  switchTheme: () => null,
  currentTheme: THEMES.LIGHT_FOCUS
});

export const ThemeProvider: FC<PropsWithChildren> = (
  {
    children
  }
) => {
  const [currentTheme, setCurrentTheme] = useState<typeof THEMES>(THEMES.LIGHT_BREAK)

  // useLayoutEffect((): void => {
  //   document.body.dataset.theme = theme;
  // }, [theme]);

  console.log(currentTheme);

  useEffect(() => {

  })

  const switchTheme = useCallback<(theme: typeof THEMES) => void>((theme) => {
    setCurrentTheme(theme);

    //add theme to storage
  }, [])



  return (
    <ThemeContext.Provider value={{currentTheme, switchTheme}}>
      <div
        id={THEME_ROOT_ID}
        data-theme={currentTheme}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
};