import { useCallback, useState } from 'react';

export const useTimerStart = () => {
  const [timerStart, setTimerStart] = useState(false)

  const handleTimerStart = useCallback(() => {
    setTimerStart(prevValue => !prevValue)
  }, [setTimerStart])

  return {handleTimerStart, timerStart};
}