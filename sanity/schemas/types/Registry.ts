import { name, image } from './CommonFieldDefinitions'

export default {
  name: 'registry',
  title: 'Registry',
  type: 'document',
  fields: [
    name,
    {
      type: 'url',
      name: 'url',
      title: "Url"
    },
    image,
  ]
}