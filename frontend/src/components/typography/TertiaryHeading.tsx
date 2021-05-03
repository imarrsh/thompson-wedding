import clsx from 'clsx';
import React, { FC } from 'react';
import { Heading } from './Heading';

type HeadingProps = {
  className?: string;
  textSize?: string
}

export const TertiaryHeading: FC<HeadingProps> = ({
  children,
  textSize = "text-l",
  className = ''
}) => {

  return <Heading level={3} classes={
    clsx(
      textSize,
      "uppercase",
      className
    )
  }>
    {children}
  </Heading>;
};