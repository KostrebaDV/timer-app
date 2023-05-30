import { FC } from 'react';
import { TypographyProps } from './types';

export const Typography:FC<TypographyProps> = (
  {
    children,
    size= 1,
    bold= 400
  }
) => {
  return (
    <span style={{ fontWeight: bold, fontSize: `${size}rem` }}>{children}</span>
  )
}