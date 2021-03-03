import { name } from './CommonFieldDefinitions'

export default {
  name: 'featuredPerson',
  title: 'Featured Person',
  type: 'document',
  initialValue: {
    affiliation: 'bride'
  },
  fields: [
    name,
    {
      name: 'affiliation',
      title: 'Affilation',
      type: 'string',
      options: {
        list: [
          {title: 'Bride', value: 'bride'},
          {title: 'Groom', value: 'groom'}
        ]
      },
      validation: rule => rule.required().error('Must pick an affiliation!')
    },
    {
      name: 'role',
      title: 'Role',
      type: 'string',
      description: `What's their role in the wedding?`,
      validation: rule => rule.max(120).warning(`A role shouldn't be more than 120 characters.`)
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        storeOriginalFilename: true
      }
    },
    {
      name: 'biography',
      title: 'Bio',
      type: 'string',
      description: `Write a short blurb about this person.`,
    },
    {
      name: 'ordinal',
      title: 'Ordinal',
      type: 'number',
      description: 'A number denoting the preferred order for a list item used for sorting.',
      validation: rule => rule.integer().warning('Please use a whole number.')
    }
  ]
}