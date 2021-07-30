import React, { FC } from 'react';
import clsx from 'clsx';
import { TypographyBase, FontFamilyStyle } from './TypographyBase';

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

type HeadingLevelKey = `h${HeadingLevel}`;

export type HeadingProps = {
  level?: HeadingLevel;
  size?: SizeKey;
  classes?: string;
  fontFamilyStyle?: FontFamilyStyle;
}

export const textSize = {
  s: 'text-lg',
  m: 'text-3xl',
  l: 'text-4xl',
  xl: 'md:text-6xl text-4xl',
  xxl: 'md:text-8xl text-6xl',
  xxxl: 'md:text-9xl text-8xl'
};

type SizeKey = keyof typeof textSize;

const sizes = {
  text: (size: SizeKey) => textSize[size]
};

const getHeadingLevelKey = (level: number): HeadingLevelKey => `h${level}` as HeadingLevelKey;

export const Heading: FC<HeadingProps> = ({
  classes = '',
  level = 1,
  size = 'l',
  children,
  fontFamilyStyle = "heading"
}) => {

  const headingLevel: HeadingLevelKey = getHeadingLevelKey(level); 

  return (
    <TypographyBase 
      element={headingLevel}
      fontFamilyStyle={fontFamilyStyle}
      classes={clsx(
        sizes.text(size),
        classes
      )}
    >
      {children}
    </TypographyBase>
  );
};
