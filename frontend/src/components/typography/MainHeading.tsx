import React, { FC } from 'react';
import clsx from 'clsx';
import { Heading } from './Heading';

type MainHeadingTypes = {
  classes?: string;
  
}

export const MainHeading: FC<MainHeadingTypes> = ({
  classes = '', 
  children
}) => {
  return (
    <Heading level={1} size="l" classes={clsx(classes)}>
      {children}
    </Heading>
  );
};
