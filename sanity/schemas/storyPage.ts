export const storyPageSchema = {
  name: 'storyPage',
  title: 'Our Story Page',
  type: 'document',
  fields: [
    // Hero Section
    { name: 'heroTagline', title: 'Hero Tagline (e.g. Our Heritage)', type: 'string', initialValue: 'Our Heritage' },
    { 
      name: 'heroHeading', 
      title: 'Hero Heading (e.g. A Legacy of Sweetness)', 
      type: 'string',
      description: 'You can enter plain text like "A Legacy of Sweetness". The website will automatically style "Sweetness" in italic script.'
    },
    { name: 'heroSubtext', title: 'Hero Subtext', type: 'text', rows: 3 },
    { name: 'heroImage', title: 'Hero Image (Architectural Frame)', type: 'image', options: { hotspot: true } },

    // Philosophies Section
    { name: 'philosophiesTagline', title: 'Philosophies Tagline (e.g. Guiding Principles)', type: 'string', initialValue: 'Guiding Principles' },
    { name: 'philosophiesHeading', title: 'Philosophies Heading (e.g. The Values We Live By)', type: 'string', initialValue: 'The Values We Live By' },
    {
      name: 'philosophies',
      title: 'Philosophies / Guiding Principles (3 Cards)',
      type: 'array',
      description: 'Add your 3 cards: Pure Ingredients, Honoring Tradition, and Modern Elegance',
      of: [{
        type: 'object',
        fields: [
          { name: 'title', title: 'Title', type: 'string' },
          { name: 'description', title: 'Description', type: 'text', rows: 3 },
        ],
        preview: {
          select: {
            title: 'title',
            subtitle: 'description'
          }
        }
      }]
    },

    // Dual Journey: The Art of Mithai
    { name: 'artOfMithaiTagline', title: 'Art of Mithai Tagline (e.g. Heritage Confectionery)', type: 'string', initialValue: 'Heritage Confectionery' },
    { name: 'artOfMithaiHeading', title: 'Art of Mithai Heading', type: 'string', initialValue: 'The Art of Mithai' },
    { name: 'artOfMithaiText', title: 'Art of Mithai Text', type: 'text', rows: 4 },
    { name: 'artOfMithaiImage', title: 'Art of Mithai Image (Circular Frame)', type: 'image', options: { hotspot: true } },
    { name: 'artOfMithaiButtonText', title: 'Art of Mithai Button Text', type: 'string', initialValue: 'Explore Traditional Mithai' },
    { name: 'artOfMithaiButtonLink', title: 'Art of Mithai Button Link', type: 'string', initialValue: '/shop?category=Indian+Sweets' },

    // Dual Journey: The French Connection
    { name: 'frenchConnectionTagline', title: 'French Connection Tagline (e.g. Artisanal Patisserie)', type: 'string', initialValue: 'Artisanal Patisserie' },
    { name: 'frenchConnectionHeading', title: 'French Connection Heading', type: 'string', initialValue: 'The French Connection' },
    { name: 'frenchConnectionText', title: 'French Connection Text', type: 'text', rows: 4 },
    { name: 'frenchConnectionImage', title: 'French Connection Image (Squircle Frame)', type: 'image', options: { hotspot: true } },
    { name: 'frenchConnectionButtonText', title: 'French Connection Button Text', type: 'string', initialValue: 'Discover Fresh Bakes' },
    { name: 'frenchConnectionButtonLink', title: 'French Connection Button Link', type: 'string', initialValue: '/shop?category=Bakery+Items' },

    // Quote / Manifesto Section
    { name: 'quoteText', title: 'Quote / Manifesto Text', type: 'text', rows: 3 },
    { name: 'quoteAttribution', title: 'Quote Attribution / Byline (e.g. The Mithera Family · Mumbai)', type: 'string', initialValue: 'The Mithera Family · Mumbai' },

    // Optional FAQs & Descriptive Content
    {
      name: 'faqs',
      title: 'Our Story FAQs (Optional - Hidden if empty)',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'question', title: 'Question', type: 'string' },
          { name: 'answer', title: 'Answer', type: 'text', rows: 3 },
        ],
      }],
    },
    {
      name: 'descriptiveContent',
      title: 'Additional Descriptive Content (Optional - Hidden if empty)',
      type: 'text',
      rows: 5,
    },

    // SEO Meta
    { name: 'seoTitle', title: 'SEO Meta Title', type: 'string' },
    { name: 'seoDescription', title: 'SEO Meta Description', type: 'text', rows: 2 },
    { name: 'schemaJson', title: 'Schema Markup (JSON-LD)', type: 'text', rows: 4 },
  ]
};
