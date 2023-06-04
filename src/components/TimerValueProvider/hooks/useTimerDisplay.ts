import { useContext, useEffect, useRef, useState } from 'react';
import { TimerConfigContext } from '../../TimerConfigProvider';
import { TimerNavigationContext } from '../../TimerNavigationProvider';
import { TimerState } from '../../TimerNavigationProvider/types';
import { usePrevious } from '../../../baseHooks';
import { TimerNotificationContext } from '../../TimerNotificationProvider';

export const useTimerDisplay = () => {
  const {focusTime, pauseTime, breakTime} = useContext(TimerConfigContext);
  const {timerStepState, timerStart, handleTimerStop} = useContext(TimerNavigationContext);
  const { onTimerDone } = useContext(TimerNotificationContext);

  const [time, setTime] = useState<number>(0);
  const [currentTime, setCurrentTime] = useState({
    min: '',
    sec: ''
  });

  const prevTimerStepState = usePrevious(timerStepState);
  const minRef = useRef<null | number>(null);
  const secRef = useRef<null | number>(null);

  useEffect(() => {
    let time = 0;

    switch (timerStepState) {
      case TimerState.focusPause:
        time = focusTime;
        break;
      case TimerState.pause:
        time = pauseTime;
        break;
      case TimerState.focusBreak:
        time = focusTime;
        break;
      case TimerState.break:
        time = breakTime;
    }

    minRef.current = null;
    secRef.current = null;

    setTime(time);
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
        handleTimerStop();

        onTimerDone();
        minRef.current = null;
        secRef.current = null;
      }

      setCurrentTime({
        min: minutes.toString().padStart(2, '0'),
        sec: seconds.toString().padStart(2, '0'),
      })
    }, 1000);

    return () => clearInterval(window['timerIntervalId']);
  }, [onTimerDone, time, timerStart, handleTimerStop])

  return {currentTime}
}