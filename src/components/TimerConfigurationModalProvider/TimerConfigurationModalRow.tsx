import styles from './styles/index.module.scss';

export const TimerConfigurationModalRow = (
  {
    children
  }
) => {
  return (
    <div className={styles.configurationModal__row}>{children}</div>
  )
}