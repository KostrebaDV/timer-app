import { createContext, FC, PropsWithChildren, useCallback, useState } from 'react';
import { TimerNotificationContextProps } from './types';
import { BELL_SOUND, BUTTON_SOUND } from './const';

export const TimerNotificationContext = createContext<TimerNotificationContextProps>({
  onStateChange: () => null,
  onTimerDone: () => null,
  toggleNotification: () => null,
  allowNotification: false,
});

export const TimerNotificationProvider: FC<PropsWithChildren> = (
  {
    children
  }
) => {
  const [allowNotification, setAllowNotification] = useState(false);

  const playSound = (url) => {
    const audio = new Audio(url);
    audio.play();
  }

  const onStateChange = () => {
    if (!allowNotification) return;

    playSound(BUTTON_SOUND);
  }

  const onTimerDone = () => {
    if (!allowNotification) return;

    playSound(BELL_SOUND);
  }

  const toggleNotification = useCallback(() => {
    setAllowNotification(prevValue => !prevValue)
  }, [])

  return (
    <TimerNotificationContext.Provider value={{onTimerDone, onStateChange, toggleNotification, allowNotification }}>
        {children}
    </TimerNotificationContext.Provider>
  );
};