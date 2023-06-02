import { useState } from 'react';

export const useTimerBreakTime = () => {
  const [breakTime, setBreakTime] = useState(15);

  return { breakTime, setBreakTime }
}