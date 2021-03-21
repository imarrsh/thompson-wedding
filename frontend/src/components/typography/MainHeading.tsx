import React, { FC, HTMLAttributes } from 'react';
import clsx from 'clsx';

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
    <h1 className={clsx(
      'font-headings', 
      classes.text(size),
      ...classNames
    )}>
      {children}
    </h1>
  );
};
