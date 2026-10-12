import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './sanity/schemas';

export default defineConfig({
  name: 'mithera-sweets',
  title: 'Mithera Sweets CMS',

  projectId: 'g6rnivvz',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.listItem()
              .title('Home Page')
              .id('homePage')
              .child(
                S.document()
                  .schemaType('homePage')
                  .documentId('homePage')
              ),
            S.listItem()
              .title('Our Story')
              .id('storyPage')
              .child(
                S.document()
                  .schemaType('storyPage')
                  .documentId('storyPage')
              ),
            S.listItem()
              .title('Gifting')
              .id('giftingPage')
              .child(
                S.document()
                  .schemaType('giftingPage')
                  .documentId('giftingPage')
              ),
            S.listItem()
              .title('Contact Us')
              .id('contactPage')
              .child(
                S.document()
                  .schemaType('contactPage')
                  .documentId('contactPage')
              ),
            S.divider(),
            S.documentTypeListItem('product').title('Products'),
            S.divider(),
            S.documentTypeListItem('legalPage').title('Legal Pages'),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
});
