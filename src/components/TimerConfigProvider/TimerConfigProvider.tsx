import { createContext, FC, PropsWithChildren, useMemo } from 'react';
import { TimerConfigContextValue } from './types';
import { useTimerBreakTime, useTimerFocusTime, useTimerPauseTime } from './hooks';

export const TimerConfigContext = createContext<TimerConfigContextValue>({
  focusTime: 0,
  pauseTime: 0,
  breakTime: 0,
  setFocusTime: () => 0,
  setPauseTime: () => 0,
  setBreakTime: () => 0,
});

export const TimerConfigProvider: FC<PropsWithChildren> = (
  {
    children
  }
) => {
  const { focusTime, setFocusTime } = useTimerFocusTime();
  const { pauseTime, setPauseTime } = useTimerPauseTime();
  const { breakTime, setBreakTime } = useTimerBreakTime();

  const providerValues = useMemo(() => {
    return {
      focusTime,
      pauseTime,
      breakTime,
      setFocusTime,
      setPauseTime,
      setBreakTime,
    }
  }, [breakTime, focusTime, pauseTime, setBreakTime, setFocusTime, setPauseTime])
  
  return (
    <TimerConfigContext.Provider value={providerValues}>
        {children}
    </TimerConfigContext.Provider>
  );
};