// Legal pages schema (Terms & Conditions, Privacy Policy)
export const legalPageSchema = {
  name: 'legalPage',
  title: 'Legal Pages',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Page Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'metaDescription',
      title: 'SEO Meta Description',
      type: 'text',
      rows: 2,
    },
    {
      name: 'lastUpdated',
      title: 'Last Updated',
      type: 'date',
    },
    {
      name: 'body',
      title: 'Page Content',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'faqs',
      title: 'Page FAQs (Optional)',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'question', title: 'Question', type: 'string' },
          { name: 'answer', title: 'Answer', type: 'text', rows: 3 },
        ]
      }]
    },
    {
      name: 'schemaJson',
      title: 'Schema Markup (JSON-LD)',
      type: 'text',
      rows: 4,
    },
  ],
  preview: {
    select: { title: 'title', subtitle: 'slug.current' },
  },
};
