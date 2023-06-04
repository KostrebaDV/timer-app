import { createContext, FC, PropsWithChildren } from 'react';
import { useTimerNext, useTimerStart } from './hooks';
import { TimerNavigationContextProps, TimerState } from './types';

export const TimerNavigationContext = createContext<TimerNavigationContextProps>({
  handleTimerStart: () => null,
  handleTimerNextClick: () => null,
  handleTimerStop: () => null,
  timerStart: false,
  timerStepState: TimerState.focusPause,
});

export const TimerNavigationProvider: FC<PropsWithChildren> = (
  {
    children
  }
) => {
  const {handleTimerStart, handleTimerStop, timerStart} = useTimerStart();
  const {handleTimerNextClick, timerStepState} = useTimerNext(handleTimerStop);

  return (
    <TimerNavigationContext.Provider value={{handleTimerStart, timerStart, handleTimerNextClick, timerStepState, handleTimerStop }}>
        {children}
    </TimerNavigationContext.Provider>
  );
};