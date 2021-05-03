import React, { FC } from 'react';
import { Heading } from './Heading';

export const SecondaryHeading: FC = ({children}) =>
  <Heading level={2} size="l" classes="text-sageGreen-500">
    {children}
  </Heading>;