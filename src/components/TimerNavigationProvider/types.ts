export enum TimerState {
  focusPause,
  pause,
  focusBreak,
  break
}

export type TimerNavigationContextValue = {
  handleTimerStart:  () => void;
  handleTimerNextClick: () => void;
  timerStart: boolean;
  timerStepState: TimerState;
}