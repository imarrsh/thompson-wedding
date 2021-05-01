import clsx from 'clsx';
import React, { FC } from 'react';
import { TypographyBase } from './TypographyBase';

type HeadingProps = {
  className?: string;
  textSize?: string
}

export const TertiaryHeading: FC<HeadingProps> = ({
  children,
  textSize = "text-l",
  className = ''
}) => {

  return <TypographyBase element="h3" classes={
    clsx(
      textSize,
      "uppercase",
      className
    )
  }>
    {children}
  </TypographyBase>;
};