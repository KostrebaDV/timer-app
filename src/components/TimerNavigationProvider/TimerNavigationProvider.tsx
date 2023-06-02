import { createContext, FC, PropsWithChildren } from 'react';
import { useTimerNext, useTimerStart } from './hooks';
import { TimerNavigationContextValue, TimerState } from './types';

export const TimerNavigationContext = createContext<TimerNavigationContextValue>({
  handleTimerStart: () => null,
  handleTimerNextClick: () => null,
  timerStart: false,
  timerStepState: TimerState.focusPause,
});

export const TimerNavigationProvider: FC<PropsWithChildren> = (
  {
    children
  }
) => {
  const {handleTimerStart, timerStart} = useTimerStart();
  const {handleTimerNextClick, timerStepState} = useTimerNext();

  return (
    <TimerNavigationContext.Provider value={{handleTimerStart, timerStart, handleTimerNextClick, timerStepState }}>
        {children}
    </TimerNavigationContext.Provider>
  );
};