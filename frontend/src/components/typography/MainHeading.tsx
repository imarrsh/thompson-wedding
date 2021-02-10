import React, { FC } from 'react';

export const MainHeading: FC = ({children}) => {
  return (
    <h1 className="font-headings text-6xl">{children}</h1>
  );
};
