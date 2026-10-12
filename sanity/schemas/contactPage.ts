export const contactPageSchema = {
  name: 'contactPage',
  title: 'Contact Page',
  type: 'document',
  fields: [
    // Header
    { name: 'tagline', title: 'Tagline Badge (e.g. Get In Touch)', type: 'string', initialValue: 'Get In Touch' },
    { name: 'heading', title: 'Page Heading', type: 'string', initialValue: "We'd Love To Hear From You" },
    { name: 'subtext', title: 'Subtext Description', type: 'text', rows: 3 },

    // Store Details (Left Column)
    { name: 'storeTitle', title: 'Store Details Heading', type: 'string', initialValue: 'Visit Our Store' },
    { name: 'address', title: 'Store Address', type: 'text', rows: 3 },
    { name: 'phone', title: 'Phone / WhatsApp Number', type: 'string', initialValue: '+91 9930309063' },
    { name: 'email', title: 'Email Address', type: 'string', initialValue: 'mitherasweets@gmail.com' },
    { name: 'hours', title: 'Operating Hours', type: 'string', initialValue: 'Monday to Sunday: 9:00 AM – 12:00 AM (Midnight)' },
    { name: 'hoursBadge', title: 'Hours Badge (e.g. Open 7 Days a Week)', type: 'string', initialValue: 'Open 7 Days a Week' },
    { name: 'mapUrl', title: 'Google Maps Link', type: 'url' },

    // Contact Form (Right Column)
    { name: 'formTitle', title: 'Form Heading', type: 'string', initialValue: 'Send Us A Message' },
    { name: 'formSubtitle', title: 'Form Subtitle', type: 'text', rows: 2, initialValue: 'Fill in your details below and we will get back to you promptly.' },

    // Optional FAQs & Descriptive Content
    {
      name: 'faqs',
      title: 'Contact & Store FAQs (Optional - Hidden if empty)',
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
