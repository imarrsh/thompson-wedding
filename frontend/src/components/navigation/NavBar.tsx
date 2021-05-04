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

const links = [
  {name: 'Our Story', to: '/our-story/'},
  {name: 'The Wedding', to: '/wedding/'},
  {name: 'Wedding Party', to: '/wedding-party/'},
  {name: 'Registry', to: '/registry/'},
  {name: 'Accommodations', to: '/accommodations/'},
];

export const Navigation: FC<NavigationProps> = (props) => {
  const activeClass = "text-sageGreen-500";
  return(
    <nav className="container px-4 mx-auto">
      <ul className="flex items-center justify-between list-none mx-auto">
        {links.map(link => <li key={link.name}>
          <NavLink to={link.to} activeClassName={activeClass}>{link.name}</NavLink>
        </li>)}
      </ul>
    </nav>
  );
};
