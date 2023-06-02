import { TimerState } from './types';

export const nextStepMapper = {
  [TimerState.focusPause]: TimerState.pause,
  [TimerState.pause]: TimerState.focusBreak,
  [TimerState.focusBreak]: TimerState.break,
  [TimerState.break]: TimerState.focusPause,
};