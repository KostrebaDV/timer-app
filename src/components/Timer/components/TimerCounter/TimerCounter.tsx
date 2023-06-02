import { useContext } from 'react';
import { TimerValueContext } from '../../../TimerValueProvider';
import { TimerNavigationContext } from '../../../TimerNavigationProvider';
import { Typography } from '../../../../baseComponents/Typography/Typography';

export const TimerCounter = () => {
  const { currentTime } = useContext(TimerValueContext);
  const { timerStart } = useContext(TimerNavigationContext);



  return (
    <>
      <div>
        <Typography lineHeight={.8} size={16} bold={timerStart ? 700 : 300}>
          {currentTime.min}
        </Typography>
      </div>
      <div>
        <Typography lineHeight={.8} size={16} bold={timerStart ? 700 : 300}>
          {currentTime.sec}
        </Typography>
      </div>
    </>
  )
}