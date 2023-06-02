import { createContext, FC, PropsWithChildren } from 'react';
import { TimerDisplayContextValue } from './types';
import { useTimerDisplay } from './hooks';

export const TimerValueContext = createContext<TimerDisplayContextValue>({

});

export const TimerValueProvider: FC<PropsWithChildren> = (
  {
    children
  }
) => {
  useTimerDisplay()

  return (
    <TimerValueContext.Provider value={{}}>
        {children}
    </TimerValueContext.Provider>
  );
};