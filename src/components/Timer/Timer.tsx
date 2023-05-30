import { TimerStatus } from './components/TimerStatus';
import { TimerCounter } from './components/TimerCounter';
import styles from './styles/index.module.scss';

export const Timer = () => {
  return (
    <div className={styles.timer}>
      <TimerStatus />
      <TimerCounter />
    </div>
  )
}