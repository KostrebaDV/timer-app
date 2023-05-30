import styles from './styles/index.module.scss';
import { Brain } from '../../../../baseComponents/Icons';
import { Typography } from '../../../../baseComponents/Typography/Typography';
import lexicon from '../../../../lexicon/lexicon';

export const TimerStatus = () => {
  return (
    <div className={styles.timerStatus}>
      <Brain />
      <Typography bold={500} size={1.5}>{lexicon.shortBreak}</Typography>
    </div>
  )
}