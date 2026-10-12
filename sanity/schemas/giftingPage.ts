export const giftingPageSchema = {
  name: 'giftingPage',
  title: 'Gifting Page',
  type: 'document',
  fields: [
    // Hero Section
    { name: 'heroTagline', title: 'Hero Tagline (e.g. Bespoke Gifting Solutions)', type: 'string', initialValue: 'Bespoke Gifting Solutions' },
    { name: 'heroHeading', title: 'Hero Heading', type: 'string', initialValue: 'Corporate & Festive Gifting' },
    { name: 'heroSubtext', title: 'Hero Subtext', type: 'text', rows: 3 },

    // Featured Gifting Showcase Boxes (3 Cards)
    {
      name: 'boxes',
      title: 'Featured Gifting Boxes (3 Showcase Cards)',
      type: 'array',
      description: 'Add your showcase boxes (e.g., Signature Mithai Box, Festive Grand Hamper, Bespoke Corporate Executive)',
      of: [{
        type: 'object',
        fields: [
          { name: 'title', title: 'Box Title', type: 'string' },
          { name: 'tag', title: 'Badge Tag (e.g. Most Popular, Festive Exclusive)', type: 'string' },
          { name: 'desc', title: 'Description', type: 'text', rows: 2 },
          { name: 'image', title: 'Box Image', type: 'image', options: { hotspot: true } },
        ],
        preview: {
          select: {
            title: 'title',
            subtitle: 'tag',
            media: 'image'
          }
        }
      }]
    },

    // Features Section
    { name: 'featuresHeading', title: 'Features Heading', type: 'string', initialValue: 'Crafted for Every Occasion' },
    { name: 'featuresSubtext', title: 'Features Subtext', type: 'text', rows: 3 },
    {
      name: 'features',
      title: 'Features List (Bullet points)',
      type: 'array',
      of: [{ type: 'string' }]
    },

    // Direct Gifting Desk (Contact Info)
    { name: 'deskTitle', title: 'Desk Title (e.g. Direct Gifting Desk)', type: 'string', initialValue: 'Direct Gifting Desk' },
    { name: 'deskSubtext', title: 'Desk Subtext', type: 'text', rows: 2 },
    { name: 'deskPhone', title: 'Desk Phone / WhatsApp', type: 'string', initialValue: '+91 9930309063' },
    { name: 'deskEmail', title: 'Desk Email', type: 'string', initialValue: 'mitherasweets@gmail.com' },
    { name: 'deskAddress', title: 'Desk Address', type: 'string', initialValue: 'Shop No. 13 & 14, Pooja Enclave, Kandivali West, Mumbai 400067' },

    // Optional FAQs & Descriptive Content
    {
      name: 'faqs',
      title: 'Gifting FAQs (Optional - Hidden if empty)',
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
