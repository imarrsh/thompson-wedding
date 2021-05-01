import React, { FC } from 'react';
import { TypographyBase } from './TypographyBase';

export const Body1: FC = ({children}) => 
  <TypographyBase element="p" fontFamilyStyle="sans">
    {children}
  </TypographyBase>;