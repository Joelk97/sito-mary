import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'authors',
  title: 'Autori',
  type: 'document',
  fields: [
    defineField({
      title: 'Nome',
      name: 'name',
      type: 'string',
    }),
  ],
})
