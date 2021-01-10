import React, { FC } from 'react';

type NavigationProps = {}

export const Navigation: FC<NavigationProps> = (props) => {
  return(
    <div className="container">
      <ul className="flex items-center justify-between list-none p-0 m-0">
        <li>RSVP</li>
        <li>Our Story</li>
        <li>Wedding Party</li>
        <li>Registry</li>
        <li>Lodging</li>
      </ul>
    </div>
  );
};