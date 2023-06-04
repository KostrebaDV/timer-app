import styles from './styles/index.module.scss'
import { Button } from '../../../../baseComponents/Button/Button';
import { ButtonSize } from '../../../../baseComponents/Button/types';
import { Forward, Pause, Play, ThreeDots } from '../../../../baseComponents/Icons';
import { MarginBox } from '../../../../baseComponents/MarginBox/MarginBox';
import { useCallback, useContext } from 'react';
import { TimerNavigationContext } from '../../../TimerNavigationProvider';
import { ThemeContext } from '../../../ThemeProvider';
import { nextStepThemeState } from '../../../ThemeProvider/const';
import { nextStepMapper } from '../../../TimerNavigationProvider/const';
import {
  TimerConfigurationModalContext
} from '../../../TimerConfigurationModalProvider/TimerConfigurationModalProvider';
import { TimerNotificationContext } from '../../../TimerNotificationProvider';

export const TimerNavigation = () => {
  const { handleTimerStart, timerStart, handleTimerNextClick, timerStepState } = useContext(TimerNavigationContext);
  const { handleThemeState } = useContext(ThemeContext);
  const { handelModalOpen } = useContext(TimerConfigurationModalContext);
  const { onStateChange } = useContext(TimerNotificationContext);

  const handleNextButtonClick = useCallback(() => {
    handleThemeState(nextStepThemeState[nextStepMapper[timerStepState]]);
    handleTimerNextClick();
    onStateChange();
  }, [timerStepState, handleThemeState, handleTimerNextClick, onStateChange]);

  return (
    <div className={styles.timerNavigation}>
      <Button onClick={handelModalOpen} size={ButtonSize.small}>
          <ThreeDots />
      </Button>
      <MarginBox small>
        <Button onClick={handleTimerStart} size={ButtonSize.big}>
          {
            !timerStart && <Play />
          }
          {
            timerStart && <Pause />
          }
        </Button>
      </MarginBox>
      <Button onClick={handleNextButtonClick} size={ButtonSize.small}>
        <Forward />
      </Button>
    </div>
  )
}