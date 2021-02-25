import React, { FC } from 'react';
import { GatsbyLinkProps, Link } from 'gatsby';

type NavigationProps = {}

export const Navigation: FC<NavigationProps> = (props) => {
  const activeClass = "text-sageGreen underline";
  return(
    <div className="container px-4 mx-auto">
      <ul className="flex items-center justify-between list-none mx-auto">
        <li>
          <Link to="/rsvp/" activeClassName={activeClass}>RSVP</Link>
        </li>
        <li>
          <Link to="/our-story/" activeClassName={activeClass}>Our Story</Link>
        </li>
        <li>
          <Link to="/wedding/" activeClassName={activeClass}>The Wedding</Link>
        </li>
        <li>
          <Link to="/wedding-party/" activeClassName={activeClass}>Wedding Party</Link>
        </li>
        <li>
          <Link to="/registry/" activeClassName={activeClass}>Registry</Link>
        </li>
        <li>
          <Link to="/accommodations/" activeClassName={activeClass}>Accommodations</Link>
        </li>
      </ul>
    </div>
  );
};
