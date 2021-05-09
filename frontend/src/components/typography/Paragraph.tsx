import React, { FC } from 'react';
import clsx from 'clsx';
import { TypographyBase } from './TypographyBase';

type ParagraphProps = {
  weight?: string;
  spacing?: number;
  leading?: number;
}

export const Paragraph: FC<ParagraphProps> = ({
  weight = 'font-light',
  spacing = 8,
  leading = 8,
  children
}) => {
  return (
    <TypographyBase element="p" classes={clsx(
      'font-sans', 
      `my-${spacing}`, 
      `leading-${leading}`,
      weight
    )}>
      {children}
    </TypographyBase>
  );
};