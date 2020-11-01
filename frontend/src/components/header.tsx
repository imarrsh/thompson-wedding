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
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
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
