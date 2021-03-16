import { name } from "./CommonFieldDefinitions";

export default {
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    name,
    {
      name: "timeTbd",
      title: "Time TBD",
      type: "boolean",
      description: "Indicate if the time is still TBD."
    },
    {
      name: 'dateAndTime',
      title: 'Event Date and Time',
      type: 'datetime',
      options: {
        dateFormat: 'YYYY-MM-DD',
        timeFormat: 'HH:mm',
        timeStep: 5,
        calendarTodayLabel: 'Today'
      }
    },
    {
      name: 'location',
      type: 'reference',
      title: 'Event Location',
      to: [{type: 'location'}],
      weak: true
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description'
    }
  ],

}