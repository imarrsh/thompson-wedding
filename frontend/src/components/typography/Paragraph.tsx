import React, { FC } from 'react';
import clsx from 'clsx';
import { TypographyBase } from './TypographyBase';

type ParagraphProps = {
  weight?: string;
  spacing?: keyof typeof spacingKey;
  leading?: keyof typeof leadingKey;
}

// tailwind/purgecss needs full classNames in prod, so this makes sure theyre there
const spacingKey = {
  4: 'my-4',
  8: 'my-8',
  12: 'my-12'
};

const leadingKey = {
  4: 'leading-4',
  8: 'leading-8',
  12: 'leading-12'
};

export const Paragraph: FC<ParagraphProps> = ({
  weight = 'font-light',
  spacing = 8,
  leading = 8,
  children
}) => {

  return (
    <TypographyBase element="p" classes={clsx(
      'font-sans', 
      spacingKey[spacing], 
      leadingKey[leading],
      weight
    )}>
      {children}
    </TypographyBase>
  );
};