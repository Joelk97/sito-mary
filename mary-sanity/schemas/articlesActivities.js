import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'articlesActivities',
  title: 'Articoli attività e workshops',
  type: 'document',
  fields: [
    defineField({
      title: 'Titolo',
      name: 'title',
      type: 'localeString',
    }),
    defineField({
      title: 'Introduzione',
      name: 'intro',
      type: 'localeText',
    }),
    defineField({
      title: 'Data',
      name: 'date',
      type: 'date',
    }),
    defineField({
      title: 'Contenuto/ Testo',
      name: 'text',
      type: 'localeBlockContent',
    }),
    defineField({
      title: 'Immagine',
      name: 'image',
      type: 'image',
    }),
    defineField({
      title: 'Autore',
      name: 'author',
      type: 'reference',
      to: [
        {
          type: 'authors',
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({title, image}) {
      return {
        title: title.it,
      }
    },
  },
})
