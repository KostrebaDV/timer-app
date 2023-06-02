import { TimerStatus } from './components/TimerStatus';
import { TimerCounter } from './components/TimerCounter';
import { TimerNavigation } from './components/TimerNavigation';
import { TimerValueProvider } from '../TimerValueProvider';
import styles from './styles/index.module.scss';

export const Timer = () => {
  return (
    <div className={styles.timer}>
      <TimerStatus />
      <TimerValueProvider>
        <TimerCounter />
      </TimerValueProvider>
      <TimerNavigation />
    </div>
  )
}