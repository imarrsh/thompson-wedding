import React, { FC } from 'react';
import { Link as PageLink } from 'gatsby';
import { Location } from '../../data';
import { Image } from '../image';
import { Heading } from '../typography';

type AccommodationCardProps = {
  accommodation: Location;
}

export const AccommodationCard: FC<AccommodationCardProps> = ({accommodation: a}) => {
  return (
    <article className="shadow-md rounded-md overflow-hidden">
      <PageLink to={`/accommodations/${a.slug.current}`}>
        <figure>
          <Image 
            image={a.image.asset.full} 
            gatsbyImgProps={{
              style: {
                minHeight: 250,
                maxHeight: 250,
              },
              imgStyle: {
                objectPosition: 'center bottom',
              }
            }}
          />
        </figure>
        <figcaption className="p-4">
          <Heading level={4} size="s" classes="truncate" fontFamilyStyle="sans">{a.name}</Heading>
        </figcaption>
      </PageLink>
    </article>
  );
};
