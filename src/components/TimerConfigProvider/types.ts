export type TimerConfigContextValue = {
  focusTime: number;
  pauseTime: number;
  breakTime: number;
  setFocusTime: (value: (((prevState: number) => number) | number)) => void
  setPauseTime: (value: (((prevState: number) => number) | number)) => void
  setBreakTime: (value: (((prevState: number) => number) | number)) => void
}