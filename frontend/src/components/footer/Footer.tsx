import React, { FC } from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  margin-top: 2rem;
`;

export const Footer: FC = (props) => {
  return (
    <StyledFooter>
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.com">Gatsby</a>
    </StyledFooter>
  );
};