import { name, image , url} from './CommonFieldDefinitions'

export default {
  name: 'registry',
  title: 'Registry',
  type: 'document',
  fields: [
    name,
    url,
    image,
  ]
}