import clsx from 'clsx';
import React, { FC } from 'react';

const typographyElementsMap = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  p: "p",
  span: "span"
};

const fontFamilyStyleMap = {
  sans: "font-sans",
  serif: "font-serif",
  mono: "font-mono",
  heading: "font-headings",
  title: "font-title",
  script: "font-script",
};

type TypographyBaseProps = {
  fontFamilyStyle?: keyof typeof fontFamilyStyleMap;
  element?: keyof typeof typographyElementsMap;
  classes?: string;
}

/**
 * Handle the base-level typography elements and their font family
 */
export const TypographyBase: FC<TypographyBaseProps> = ({
  fontFamilyStyle = "sans",
  element = "span",
  classes = "",
  children
}) => {
  
  const Element = element as keyof JSX.IntrinsicElements;

  return <Element className={clsx(
    fontFamilyStyleMap[fontFamilyStyle],
    classes
  )}>
    {children}
  </Element>;
};