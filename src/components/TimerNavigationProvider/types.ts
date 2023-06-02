export enum TimerState {
  focusPause,
  pause,
  focusBreak,
  break
}

export type TimerNavigationContextProps = {
  handleTimerStart:  () => void;
  handleTimerNextClick: () => void;
  timerStart: boolean;
  timerStepState: TimerState;
}