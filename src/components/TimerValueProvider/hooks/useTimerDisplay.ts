import { useContext, useEffect, useMemo, useRef, useState } from 'react';
import { TimerConfigContext } from '../../TimerConfigProvider';
import { TimerNavigationContext } from '../../TimerNavigationProvider';
import { TimerState } from '../../TimerNavigationProvider/types';
import { usePrevious } from '../../../baseHooks';

export const useTimerDisplay = () => {
  const { focusTime, pauseTime, breakTime } = useContext(TimerConfigContext);
  const { timerStepState, timerStart } = useContext(TimerNavigationContext);
  const [currentTime, setCurrentTime] = useState({
    min: '',
    sec: ''
  });

  const prevTimerStepState = usePrevious(timerStepState);
  const minRef = useRef<null | number>(null);
  const secRef = useRef<null | number>(null);

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
    if (prevTimerStepState !== timerStepState) {
      minRef.current = null;
      secRef.current = null;
    }
  }, [prevTimerStepState, timerStepState])
  
  useEffect(() => {
    const minutesInt: number = Math.floor(time);
    const seconds: number = Math.floor((time % 1) * 60);
    
    setCurrentTime({
      min: minutesInt.toString().padStart(2, '0'),
      sec: seconds.toString().padStart(2, '0'),
    })
  }, [time])

  useEffect(() => {
    let minutes: number | null;
    let seconds: number | null;

    if (minRef.current === null) {
        minutes = Math.floor(time);
    } else {
      minutes = minRef.current;
    }

    if (secRef.current === null) {
      seconds = Math.floor((time % 1) * 60);
    } else {
      seconds = secRef.current;
    }

      window['timerIntervalId'] = setInterval(() => {
      if (!timerStart) return;

      seconds--;
      if (seconds < 0) {
        minutes--;
        seconds = 59;
      }

      minRef.current = minutes;
      secRef.current = seconds;

      if (minutes === 0 && seconds === 0) {
        clearInterval(window['timerIntervalId']);

        minRef.current = null;
        secRef.current = null;
      }

      setCurrentTime({
        min: minutes.toString().padStart(2, '0'),
        sec: seconds.toString().padStart(2, '0'),
      })
    }, 1000);

    return () => clearInterval(window['timerIntervalId']);
  }, [time, timerStart])

  return { currentTime }
}