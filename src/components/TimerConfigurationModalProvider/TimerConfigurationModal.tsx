import { ModalComponent } from '../../baseComponents/Modal';
import { TimerConfigurationModalRow } from './TimerConfigurationModalRow';
import { Typography } from '../../baseComponents/Typography/Typography';
import lexicon from '../../lexicon/lexicon';
import { Close } from '../../baseComponents/Icons';
import styles from './styles/index.module.scss';
import { Toggle } from '../../baseComponents/Toggle';
import { useCallback, useContext, useEffect } from 'react';
import { ThemeContext } from '../ThemeProvider';
import { NumberInput } from '../../baseComponents/NumberInput';
import { TimerConfigContext } from '../TimerConfigProvider';
import { useFormContext } from 'react-hook-form';

export const TimerConfigurationModal = ({isOpen, handelModalClose}) => {
  const {handleThemeMode} = useContext(ThemeContext);
  const {focusTime, pauseTime, breakTime, setBreakTime, setFocusTime, setPauseTime} = useContext(TimerConfigContext);

  const {
    getValues,
    setValue
  } = useFormContext();

  useEffect(() => {
    setValue('focusTime', focusTime);
    setValue('shortBreak', pauseTime);
    setValue('longBreak', breakTime);
  }, [breakTime, focusTime, pauseTime, setValue]);

  const handleClose = useCallback(() => {
    handelModalClose();
    const {focusTime, shortBreak, longBreak} = getValues();

    setFocusTime(focusTime);
    setPauseTime(shortBreak);
    setBreakTime(longBreak);
  }, [getValues, handelModalClose, setBreakTime, setFocusTime, setPauseTime])

  return (
    <ModalComponent isOpen={isOpen} handelModalClose={handleClose}>
      <div className={styles.configurationModal__header}>
        <Typography bold={700} size={1.5}>{lexicon.settings}</Typography>
        <button onClick={handleClose} className={styles.configurationModal__CloseButton}>
          <Close/>
        </button>
      </div>
      <form>
        <TimerConfigurationModalRow>
          <Typography>{lexicon.darkMode}</Typography>
          <Toggle handleClick={handleThemeMode}/>
        </TimerConfigurationModalRow>
        <TimerConfigurationModalRow>
          <Typography>{lexicon.focusLength}</Typography>
          <NumberInput fieldName='focusTime'/>
        </TimerConfigurationModalRow>
        <TimerConfigurationModalRow>
          <Typography>{lexicon.shortBreak}</Typography>
          <NumberInput fieldName='shortBreak'/>
        </TimerConfigurationModalRow>
        <TimerConfigurationModalRow>
          <Typography>{lexicon.longBreak}</Typography>
          <NumberInput fieldName='longBreak'/>
        </TimerConfigurationModalRow>
        <TimerConfigurationModalRow>
          <Typography>{lexicon.notifications}</Typography>
          <Toggle handleClick={() => null}/>
        </TimerConfigurationModalRow>
      </form>
    </ModalComponent>
  )
}