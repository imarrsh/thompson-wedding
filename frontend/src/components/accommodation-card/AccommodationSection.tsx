import React, { FC } from 'react';
import { AccommodationCard } from '.';
import { Heading } from '../typography';
import { Location } from '../../data';

type AccommodationSectionProps = {
  category: string;
  list: Location[]
}

export const AccommodationSection: FC<AccommodationSectionProps> = ({category, list}) => {
  return list.length ? (
    <>
      <Heading level={3} size="xl" fontFamilyStyle="script" classes="lowercase mt-6">{category}</Heading>
      <ul className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-8">
        {list.map(a => 
          <li key={a.name}>
            <AccommodationCard accommodation={a}/>
          </li>
        )}
      </ul>
    </>
  ) : null;
};