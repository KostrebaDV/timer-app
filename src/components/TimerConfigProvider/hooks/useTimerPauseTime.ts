import { useCallback, useContext, useState } from 'react';
import { TimerNavigationContext } from '../../TimerNavigationProvider';
import { TimerState } from '../../TimerNavigationProvider/types';

export const useTimerPauseTime = () => {
  const { handleTimerStop, timerStepState } = useContext(TimerNavigationContext);
  const [pauseTime, setPauseTime] = useState(5);

  const handleSetTimer = useCallback((value) => {
    setPauseTime(value);

    if (value !== pauseTime && timerStepState === TimerState.pause) {
      handleTimerStop();
    }
  }, [pauseTime, timerStepState, handleTimerStop])

  return { pauseTime, setPauseTime: handleSetTimer }
}