import clsx from 'clsx';
import React, { FC } from 'react';

type HeadingProps = {
  className?: string;
}

export const TertiaryHeading: FC<HeadingProps> = ({
  children,
  className = ''
}) => {

  return <h3 className={
    clsx(
      "text-l",
      "uppercase",
      className
    )
  }>{children}</h3>;
};