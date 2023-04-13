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
    defineField({
      title: 'Titolo Attività e Workshop',
      name: 'titleActivitiesandWorkshops',
      type: 'localeString',
    }),
    defineField({
      title: 'Articoli priam pagina',
      name: 'articlesHomePage',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {
              type: 'articlesActivities',
            },
          ],
        },
      ],
      validation: (Rule) => Rule.max(3),
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
