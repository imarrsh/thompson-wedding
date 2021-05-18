import React,  { FC } from 'react';
import { Link } from '../navigation';
import type { Location } from '../../data';
import { LocationMarkerIcon } from '@heroicons/react/outline';

type MappableAddressProps = {
  location: Location;
  name?: string;
}

export const MapLinkedAddress: FC<MappableAddressProps> = ({ name = "", location }) => {

  return (
    <Link href={getMapHref(location.location.lat, location.location.lng)} className="text-gray-400">
      <div className="flex items-center mt-1">
        <div className="mr-4">
          <LocationMarkerIcon className="h-8 w-8"/>
        </div>
        <address>
          {name.length > 0 && <h4>{name}</h4>}
          {location.address1}<br/>
          {location.address2 ? location.address2 && <br /> : ''}
          {`${location.city}, ${location.state} ${location.zipcode}`}<br/>
        </address>
      </div>
    </Link>
  );
};

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