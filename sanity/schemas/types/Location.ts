import { name } from './CommonFieldDefinitions';

export default {
  name: 'location',
  title: 'Location',
  type: 'document',
  fields: [
    name,
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
  ]
}