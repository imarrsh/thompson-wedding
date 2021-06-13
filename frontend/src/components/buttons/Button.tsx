import React, { FC } from "react";
import clsx from "clsx";

type ButtonProps = {
  variant?: 'fill' | 'outline';
  twClasses?: string;
  onClick?(): void;
};

export const Button: FC<ButtonProps> = ({
  variant = 'fill',
  twClasses = '',
  onClick = () => {},
  children,
}) => {
  const variantClasses = variant === 'fill'
    ? 'bg-green-600 text-gray-50 hover:bg-green-500 transition-colors'
    : 'text-green-600 border-green-600 border hover:bg-green-600 hover:text-gray-50 transition-colors';

  return (
    <button 
      className={
        clsx("py-2 px-6 rounded-full", variantClasses, twClasses)
      } 
      onClick={onClick}
    >
      {children}
    </button>
  );
};
