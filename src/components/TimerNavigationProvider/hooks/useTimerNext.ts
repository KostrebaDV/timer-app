import { useCallback, useState } from 'react';
import { TimerState } from '../types';
import { nextStepMapper } from '../const';

export const useTimerNext = (handleTimerStop) => {
  const [timerStepState, setStepTimerState] = useState<TimerState>(TimerState.focusPause)

  const handleTimerNextClick = useCallback(() => {
    setStepTimerState(nextStepMapper[timerStepState])

    handleTimerStop();
    clearInterval(window['timerIntervalId']);
  }, [handleTimerStop, timerStepState])

  return { timerStepState, handleTimerNextClick }
}