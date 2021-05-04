import BlockContent from '@sanity/block-content-to-react';
import React, { FC } from 'react';
import { Location } from '../../data';
import { Image } from '../image';
import { Link } from '../navigation';
import { Heading } from '../typography';
import { StyledBlockContent } from '../block-content';

type AccommodationCardProps = {
  accommodation: Location;
}

function getMapHref(lat: number, lng: number) {
  // try to use iOS maps
  if (isNavigatorIOS()) {
    return `maps://maps.google.com/maps?daddr=${lat},${lng}&amp;ll=`;
  } else {
    // send to google
    return `https://maps.google.com/maps?daddr=${lat},${lng}&amp;ll=`;
  }

  function isNavigatorIOS() {
    return typeof navigator !== 'undefined' && 
      ["iPhone", "iPod", "iPad"].some((platformStr) => navigator.platform.includes(platformStr));
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
        <Heading level={4} size="s" classes="truncate" fontFamilyStyle="sans">{a.name}</Heading>
        <Link href={getMapHref(a.location.lat, a.location.lng)} className="text-gray-400">
          <address className="leading-tight mt-1">
            {a.address1}<br/>
            {a.address2 ? a.address2 && <br /> : ''}
            {`${a.city}, ${a.state} ${a.zipcode}`}<br/>
          </address>
        </Link>
        {/*a.category === 'lodging' && a.url &&
          <Link className="text-sageGreen-500" href={a.url || '#'}>
            Click to book now - rooms are limited
          </Link>
        */}
        {a.description !== null 
          // @ts-expect-error - defaultSerializers isn't expected on BlockContent
          ? <StyledBlockContent blocks={a.description} serializers={BlockContent.defaultSerializers}/>
          : null
        }
      </figcaption>
    </article>
  );
};
