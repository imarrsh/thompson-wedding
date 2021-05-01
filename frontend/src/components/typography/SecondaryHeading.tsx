import React, { FC } from 'react';
import { TypographyBase } from './TypographyBase';

export const SecondaryHeading: FC = ({children}) =>
  <TypographyBase element="h2" fontFamilyStyle="sans" classes="text-4xl text-sageGreen-500">
    {children}
  </TypographyBase>;