import clsx from 'clsx';
import React, { FC } from 'react';

export type TypographyElementsKey = 
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "p"
  | "span";

const fontFamilyStyleMap = {
  sans: "font-sans",
  serif: "font-serif",
  mono: "font-mono",
  heading: "font-headings",
  title: "font-title",
  script: "font-script",
};

export type FontFamilyStyle = keyof typeof fontFamilyStyleMap;

type TypographyBaseProps = {
  fontFamilyStyle?: FontFamilyStyle;
  element?: TypographyElementsKey;
  classes?: string;
}

/**
 * Handles the base-level typography elements and their font family via TailwindCSS
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