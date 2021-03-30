import React, { FC } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import tw from 'twin.macro';

type NavigationProps = {}

// use styled-components + twin.macro since tailwind lacks support for psuedo elements 
const NavLink = styled(Link)`
  ${tw`pb-2 inline-block text-sageGreen-900`}
  &:after {
    content: "";
    ${tw`block border-b-4 border-sageGreen-200 transition-transform transform scale-x-0`}
  }
  &:hover:after, 
  &[aria-current="page"]:after {
    ${tw`scale-x-100 `}
  }
`;

export const Navigation: FC<NavigationProps> = (props) => {
  const activeClass = "text-sageGreen-500";
  return(
    <nav className="container px-4 mx-auto">
      <ul className="flex items-center justify-between list-none mx-auto">
        <li>
          <NavLink to="/our-story/" activeClassName={activeClass}>Our Story</NavLink>
        </li>
        <li>
          <NavLink to="/wedding/" activeClassName={activeClass}>The Wedding</NavLink>
        </li>
        <li>
          <NavLink to="/wedding-party/" activeClassName={activeClass}>Wedding Party</NavLink>
        </li>
        <li>
          <NavLink to="/registry/" activeClassName={activeClass}>Registry</NavLink>
        </li>
        <li>
          <NavLink to="/accommodations/" activeClassName={activeClass}>Accommodations</NavLink>
        </li>
      </ul>
    </nav>
  );
};
