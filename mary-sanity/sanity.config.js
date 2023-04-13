import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'mary-sanity',

  projectId: 'i5ipip35',
  dataset: 'production',

  plugins: [
    deskTool({
      structure: (S) =>
        S.list()
          .title('Pagine')
          .items([
            S.listItem()
              .title('Home')
              .child(
                S.document()
                  .title('Home')
                  .schemaType('homePage')
                  .id('23129998-2a0c-428e-87c9-b560326cee6c')
              ),
            S.listItem()
              .title('Articoli Attività')
              .child(
                S.documentList().title('Articoli Attività').filter('_type == "articlesActivities"')
              ),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
