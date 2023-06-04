export type TimerNotificationContextProps = {
  onStateChange: () => void;
  onTimerDone: () => void;
  toggleNotification: () => void;
  allowNotification: boolean;
}