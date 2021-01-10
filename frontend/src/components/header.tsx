import { Link } from "gatsby";
import React, { FC } from "react";
import styled from 'styled-components';
import { Navigation } from './navigation';

const StyledHeader = styled.header`
  background: tomato;
`;

type HeaderProps = {
  siteTitle?: string
}

const Header: FC<HeaderProps> = ({ siteTitle = `` }) => (
  <StyledHeader>
    <div className="container mx-auto px-4">
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          Kaila and Marshall
        </Link>
      </h1>
    </div>
    <Navigation />
  </StyledHeader>
);

export default Header;
