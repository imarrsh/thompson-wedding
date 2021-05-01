import React, { FC, HTMLAttributes } from 'react';
import clsx from 'clsx';
import { TypographyBase } from './TypographyBase';

type MainHeadingTypes = {
  className?: string;
  size: 's' | 'm' | 'l';
}

const textSize: Record<MainHeadingTypes["size"], string> = {
  s: 'text-lg',
  m: 'text-3xl',
  l: 'text-6xl',
};

const classes = {
  text: (size: MainHeadingTypes["size"]) => textSize[size]
};

export const MainHeading: FC<MainHeadingTypes> = ({
  className = '',
  size = 'l',
  children
}) => {
  
  const classNames = className.split(' ');

  return (
    <TypographyBase element="h1" fontFamilyStyle="heading" classes={clsx(
      classes.text(size),
      ...classNames
    )}>
      {children}
    </TypographyBase>
  );
};
