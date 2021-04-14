import { name, description } from "./CommonFieldDefinitions";

export default {
  name: 'album',
  title: 'Album',
  type: 'document',
  fields: [
    name,
    description, 
    {
      name: 'images',
      type: 'array', // supports drag'n'drop of multiple files
      options: {
        layout: 'grid'
      },
      of: [{
        type: 'image'
      }]
    }
  ]
}
