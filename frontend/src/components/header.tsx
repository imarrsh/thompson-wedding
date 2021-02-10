import { Link } from "gatsby";
import React, { FC } from "react";
import styled from 'styled-components';
import { Navigation } from './navigation';
import { MainHeading } from './typography';

type HeaderProps = {
  siteTitle?: string
}

const Header: FC<HeaderProps> = ({ siteTitle = `` }) => (
  <header>
    <div className="container mx-auto px-4 py-8 text-center">
      <MainHeading>
        <Link to="/">
          Kaila & Marshall
        </Link>
      </MainHeading>
    </div>
    <Navigation />
  </header>
);

export default Header;
