import React, { FC } from 'react';
import { AccommodationCard } from '.';
import { TertiaryHeading } from '../typography';
import { Location } from '../../data';

type AccommodationSectionProps = {
  category: string;
  list: Location[]
}

export const AccommodationSection: FC<AccommodationSectionProps> = ({category, list}) => {
  return list.length ? (
    <>
      <TertiaryHeading textSize="text-4xl" className="font-script lowercase mt-2">{category}</TertiaryHeading>
      <ul className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 grid-cols-1 grid-rows-2 gap-8">
        {list.map(a => 
          <li key={a.name}>
            <AccommodationCard accommodation={a}/>
          </li>
        )}
      </ul>
    </>
  ) : null;
};