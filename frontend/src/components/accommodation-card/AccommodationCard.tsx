import React, { FC } from 'react';
import { Location } from '../../data';
import { Image } from '../image';
import { Link } from '../navigation';
import { TertiaryHeading } from '../typography';

type AccommodationCardProps = {
  accommodation: Location;
}

function getMapHref(lat: number, lng: number) {
  // try to use iOS maps
  if (["iPhone", "iPod", "iPad"].some((platformStr) => navigator.platform.includes(platformStr))) {
    return `maps://maps.google.com/maps?daddr=${lat},${lng}&amp;ll=`;
  } else {
    // send to google
    return `https://maps.google.com/maps?daddr=${lat},${lng}&amp;ll=`;
  }
}

export const AccommodationCard: FC<AccommodationCardProps> = ({accommodation: a}) => {
  // card
  // - image
  // - name
  // --- address (linkable to maps service; google, apple(?))
  // --- website (should the whole thing be clickable?)
  return (
    <article className="shadow-md rounded-md overflow-hidden">
      <figure>
        <Image 
          fluidImg={a.image.asset.fluid} 
          gatsbyImgProps={{
            style: {
              minHeight: 250,
              maxHeight: 250
            },
            imgStyle: {
              objectPosition: 'center bottom'
            }
          }}
        />
      </figure>
      <figcaption className="p-4">
        <TertiaryHeading className="truncate">{a.name}</TertiaryHeading>
        <Link href={getMapHref(a.location.lat, a.location.lng)} className="text-gray-400">
          <address className="leading-tight mt-1">
            {a.address1}<br/>
            {a.address2 ? a.address2 && <br /> : ''}
            {`${a.city}, ${a.state} ${a.zipcode}`}<br/>
          </address>
        </Link>
      </figcaption>
    </article>
  );
};