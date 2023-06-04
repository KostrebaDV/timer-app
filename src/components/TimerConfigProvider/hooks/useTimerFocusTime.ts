import { useCallback, useContext, useState } from 'react';
import { TimerNavigationContext } from '../../TimerNavigationProvider';
import { TimerState } from '../../TimerNavigationProvider/types';

export const useTimerFocusTime = () => {
  const { handleTimerStop, timerStepState } = useContext(TimerNavigationContext);
  const [focusTime, setFocusTime] = useState(25);

  const handleSetTimer = useCallback((value) => {
    setFocusTime(value);

    if (value !== focusTime && (timerStepState === TimerState.focusPause || timerStepState === TimerState.focusBreak)) {
      handleTimerStop();
    }
  }, [focusTime, handleTimerStop, timerStepState])

  return { focusTime, setFocusTime: handleSetTimer }
}