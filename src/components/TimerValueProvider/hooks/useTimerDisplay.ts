import { useContext, useEffect, useMemo } from 'react';
import { TimerConfigContext } from '../../TimerConfigProvider';
import { TimerNavigationContext } from '../../TimerNavigationProvider';
import { TimerState } from '../../TimerNavigationProvider/types';

export const useTimerDisplay = () => {
  const { focusTime, pauseTime, breakTime } = useContext(TimerConfigContext);
  const { timerStepState, timerStart } = useContext(TimerNavigationContext);

  const time = useMemo(() => {
    switch (timerStepState) {
      case TimerState.focusPause:
        return focusTime;
      case TimerState.pause:
        return pauseTime;
      case TimerState.focusBreak:
        return focusTime;
      case TimerState.break:
        return breakTime;
    }
  }, [breakTime, focusTime, pauseTime, timerStepState])

  useEffect(() => {
    let minutesInt: number = Math.floor(time);
    let seconds: number = Math.floor((time % 1) * 60);

    const intervalId = setInterval(() => {
      if (!timerStart) return;

      seconds--;
      if (seconds < 0) {
        minutesInt--;
        seconds = 59;
      }

      if (minutesInt === 0 && seconds === 0) {
        clearInterval(intervalId);
      }

      console.log(`${minutesInt.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [time, timerStart])
}