import styles from './styles/index.module.scss';
import { Brain } from '../../../../baseComponents/Icons';
import { Typography } from '../../../../baseComponents/Typography/Typography';
import lexicon from '../../../../lexicon/lexicon';
import { useContext } from 'react';
import { TimerNavigationContext } from '../../../TimerNavigationProvider';
import { TimerState } from '../../../TimerNavigationProvider/types';

export const TimerStatus = () => {
  const { timerStepState } = useContext(TimerNavigationContext);
console.log(timerStepState);

  return (
    <div className={styles.timerStatus}>
      {
        (timerStepState === TimerState.focusPause || timerStepState === TimerState.focusBreak) && (
          <>
            <Brain />
            <Typography bold={500} size={1.5}>{lexicon.focus}</Typography>
          </>
        )
      }
      {
        timerStepState === TimerState.pause && (
          <>
            <Brain />
            <Typography bold={500} size={1.5}>{lexicon.shortBreak}</Typography>
          </>
        )
      }
      {
        timerStepState === TimerState.break && (
          <>
            <Brain />
            <Typography bold={500} size={1.5}>{lexicon.longBreak}</Typography>
          </>
        )
      }
    </div>
  )
}