import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'homePage',
  title: 'Home',
  type: 'document',
  fields: [
    defineField({
      title: 'Titolo prima parte',
      name: 'title1',
      type: 'localeString',
    }),
    defineField({
      title: 'Titolo seconda parte',
      name: 'title2',
      type: 'localeString',
    }),
    defineField({
      title: 'Attività offerte',
      name: 'offredActivities',
      type: 'array',
      of: [
        {
          type: 'descrizioniOfferte',
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title1',
    },
    prepare({title, image}) {
      return {
        title: title.it,
      }
    },
  },
})
