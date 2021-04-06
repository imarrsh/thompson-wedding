import React, { FC } from 'react';
import { Location } from '../../data';

type AccommodationCardProps = {
  accommodation: Location;
}

export const AccommodationCard: FC<AccommodationCardProps> = ({accommodation}) => {
  
  return (
    <article>
      <h3>{accommodation.name}</h3>
    </article>
  );
};