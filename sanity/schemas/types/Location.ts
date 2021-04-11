import { image, name, url } from './CommonFieldDefinitions';

export default {
  name: 'location',
  title: 'Location',
  type: 'document',
  fields: [
    name,
    {
      name: 'category',
      type: 'string',
      title: 'Location Category',
      description: 'What type of location is this?',
      options: {
        list: [
          {title: 'Venue', value: 'venue'},
          {title: 'Lodging', value: 'lodging'},
          {title: 'Restaurant', value: 'restaurant'},
          {title: 'Bars and Nightlife', value: 'bars_nightlife'},
          {title: 'Retail', value: 'retail'},
          {title: 'Place of Interest', value: 'poi'},
        ]
      }
    },
    {
      name: 'address1',
      title: 'Address Line 1',
      type: 'string',
    },
    {
      name: 'address2',
      title: 'Address Line 2',
      type: 'string',
    },
    {
      name: 'city',
      title: 'City',
      type: 'string',
    },
    {
      name: 'state',
      title: 'State',
      type: 'string',
    },
    {
      name: 'zipcode',
      title: 'Zip',
      type: 'string',
    },
    {
      name: 'location',
      title: 'Location (Geography)',
      type: 'geopoint',
    },
    image,
    url,
    {
      title: 'Description (Rich Text)',
      name: 'rtDescription',
      type: 'array',
      of: [
        {type: 'block'}
      ]
    }
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'category',
      media: 'image',
    }
  },
}