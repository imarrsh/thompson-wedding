import React, { FC } from 'react';
import { Link } from 'gatsby';

type NavigationProps = {}

export const Navigation: FC<NavigationProps> = (props) => {
  return(
    <div className="container px-4 mx-auto">
      <ul className="flex items-center justify-between list-none mx-auto">
        <li>
          <Link to="/rsvp/">RSVP</Link>
        </li>
        <li>
          <Link to="/our-story/">Our Story</Link>
        </li>
        <li>
          <Link to="/wedding/">The Wedding</Link>
        </li>
        <li>
          <Link to="/wedding-party/">Wedding Party</Link>
        </li>
        <li>
          <Link to="/registry/">Registry</Link>
        </li>
        <li>
          <Link to="/accommodations/">Accommodations</Link>
        </li>
      </ul>
    </div>
  );
};