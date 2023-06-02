import { useCallback, useState } from 'react';

export const useTimerStart = () => {
  const [timerStart, setTimerStart] = useState(false)

  const handleTimerStop = useCallback(() => {
    if (window['timerIntervalId']) {
      clearInterval(window['timerIntervalId']);
    }

    setTimerStart(false)
  }, [setTimerStart])

  const handleTimerStart = useCallback(() => {
    if (window['timerIntervalId']) {
      clearInterval(window['timerIntervalId']);
    }

    setTimerStart(prevValue => !prevValue)
  }, [setTimerStart])

  return {handleTimerStart, handleTimerStop, timerStart};
}