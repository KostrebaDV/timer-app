import { useState } from 'react';

export const useTimerFocusTime = () => {
  const [focusTime, setFocusTime] = useState(25);

  return { focusTime, setFocusTime }
}