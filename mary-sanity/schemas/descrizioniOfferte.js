import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'descrizioniOfferte',
  title: 'Attività offerte',
  type: 'document',
  fields: [
    defineField({
      title: 'Titolo',
      name: 'title',
      type: 'localeString',
    }),
    defineField({
      title: 'Sottotitolo',
      name: 'subtitle',
      type: 'localeString',
    }),
    defineField({
      title: 'Testo',
      name: 'text',
      type: 'localeText',
    }),
    defineField({
      title: 'Immagine',
      name: 'image',
      type: 'image',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      image: 'image',
    },
    prepare({title, image}) {
      return {
        title: title.it,
        media: image,
      }
    },
  },
})
