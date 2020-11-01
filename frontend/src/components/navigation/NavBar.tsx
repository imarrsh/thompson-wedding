import React, { FC } from 'react';
import styled from 'styled-components';

const StyledUl = styled.ul`
  display:flex;
  align-items: center;
  justify-content: space-between;
  list-style: none;
`;

const ListItem = styled.li`
  list-style: none;
`;

type NavigationProps = {}

export const Navigation: FC<NavigationProps> = (props) => {
  return(
    <StyledUl>
      <ListItem>
        RSVP
      </ListItem>
      <ListItem>
        Our Story
      </ListItem>
      <ListItem>
        Wedding Party
      </ListItem>
      <ListItem>
        Registry
      </ListItem>
      <ListItem>
        Lodging
      </ListItem>
    </StyledUl>
  );
};