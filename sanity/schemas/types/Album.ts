import Default from 'part:@sanity/form-builder/input/image/asset-source-default'
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
    },
    {
      name: 'coverImage',
      type: 'image',
      title: 'Cover Image',
      options: {
        sources: [
          Default
        ]
      }
    },
  ]
}
