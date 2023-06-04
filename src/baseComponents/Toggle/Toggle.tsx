import { useCallback, useState } from 'react';
import styles from './styles/index.module.scss';
import ClassNames from 'classnames';

export const Toggle = (
  {
    handleClick
  }
) => {
  const [isActive, setIsActive] = useState(false);
  
  const toggleButtonStyles = ClassNames(
    styles.toggle_button,
    {
      [styles.toggle_button__active]: isActive,
    }
  )
  
  const handleToggleClick = useCallback(() => {
    handleClick();
    setIsActive(isActive => !isActive);
  }, [handleClick]);
  
  return (
    <div onClick={handleToggleClick} className={styles.toggle}>
      <div className={toggleButtonStyles}></div>
    </div>
  )
}