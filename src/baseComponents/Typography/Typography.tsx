import { FC } from 'react';
import { TypographyProps } from './types';

export const Typography:FC<TypographyProps> = (
  {
    children,
    lineHeight = 'inherit',
    size= 1,
    bold= 400
  }
) => {
  return (
    <span style={{ transition: 'all .2s', fontWeight: bold, fontSize: `${size}rem`, lineHeight }}>{children}</span>
  )
}