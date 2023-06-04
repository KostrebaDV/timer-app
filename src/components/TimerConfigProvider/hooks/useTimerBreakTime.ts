import { useCallback, useContext, useState } from 'react';
import { TimerNavigationContext } from '../../TimerNavigationProvider';
import { TimerState } from '../../TimerNavigationProvider/types';

export const useTimerBreakTime = () => {
  const { handleTimerStop, timerStepState } = useContext(TimerNavigationContext);
  const [breakTime, setBreakTime] = useState(15);

  const handleSetTimer = useCallback((value) => {
    setBreakTime(value);

    if (value !== breakTime && timerStepState === TimerState.break) {
      handleTimerStop();
    }
  }, [breakTime, handleTimerStop, timerStepState])

  return { breakTime, setBreakTime: handleSetTimer }
}