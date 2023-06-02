import { FC } from 'react';
import { ButtonProps, ButtonSize } from './types';
import ClassNames from 'classnames';
import styles from './styles/index.module.scss';

export const Button:FC<ButtonProps> = (
  {
    children,
    size,
    onClick
  }
) => {
  const componentClassName = ClassNames(
    styles.button,
    {
      [styles.button_big]: size === ButtonSize.big,
      [styles.button_small]: size === ButtonSize.small
    }
  )

  return (
    <button className={componentClassName} onClick={onClick}>
      {children}
    </button>
  )
}