import { FC } from 'react';
import ClassNames from 'classnames';
import styles from './styles/index.module.scss';
import { MarginBoxProps } from './types';

export const MarginBox: FC<MarginBoxProps> = (
  {
    children,
    hrSmall,
    small,
    vrSmall
  }
) => {
  const componentClassName = ClassNames(
    styles.marginBox,
    {
      [styles.hrSmall]: hrSmall,
      [styles.vrSmall]: vrSmall,
      [styles.small]: small,
    }
  )

  return (
    <div className={componentClassName}>
      {children}
    </div>
  )
}