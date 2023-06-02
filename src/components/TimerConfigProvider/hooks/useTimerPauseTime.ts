import { useState } from 'react';

export const useTimerPauseTime = () => {
  const [pauseTime, setPauseTime] = useState(5);

  return { pauseTime, setPauseTime }
}