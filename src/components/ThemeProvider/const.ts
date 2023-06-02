import { ThemeMode, ThemeState } from './types';
import { TimerState } from '../TimerNavigationProvider/types';

export const THEME_ROOT_ID = 'theme-root-id'

export const nextStepThemeState = {
  [TimerState.focusPause]: ThemeState.Focus,
  [TimerState.pause]: ThemeState.Pause,
  [TimerState.focusBreak]: ThemeState.Focus,
  [TimerState.break]: ThemeState.Break,
};

export const nextStepThemeMode = {
  [ThemeMode.dark]: ThemeMode.light,
  [ThemeMode.light]: ThemeMode.dark,
};