import { createContext, FC, PropsWithChildren } from 'react';
import { TimerValueContextProps } from './types';
import { useTimerDisplay } from './hooks';

export const TimerValueContext = createContext<TimerValueContextProps>({
  currentTime: {
    min: '',
    sec: '',
  }
});

export const TimerValueProvider: FC<PropsWithChildren> = (
  {
    children
  }
) => {
  const {currentTime} = useTimerDisplay()

  return (
    <TimerValueContext.Provider value={{currentTime}}>
        {children}
    </TimerValueContext.Provider>
  );
};