import { useCallback, useState } from 'react';
import { TimerState } from '../types';
import { nextStepMapper } from '../const';

export const useTimerNext = () => {
  const [timerStepState, setStepTimerState] = useState<TimerState>(TimerState.focusPause)

  const handleTimerNextClick = useCallback(() => {
    setStepTimerState(nextStepMapper[timerStepState])
  }, [timerStepState])

  return { timerStepState, handleTimerNextClick }
}