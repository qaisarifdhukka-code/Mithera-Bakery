// Home Page schema for Sanity Studio
export const homePageSchema = {
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  // Only ONE home page document allowed
  __experimental_actions: ['update', 'publish'],
  fields: [
    {
      name: 'title',
      title: 'SEO Page Title',
      type: 'string',
    },
    {
      name: 'metaDescription',
      title: 'SEO Meta Description',
      type: 'text',
      rows: 2,
    },
    {
      name: 'schemaJson',
      title: 'Schema Fields (Raw JSON-LD Schema Markup)',
      description: 'Custom Schema.org structured data (e.g. Bakery / LocalBusiness schema in JSON-LD)',
      type: 'text',
      rows: 5,
    },

    // ── HERO ──────────────────────────────────────────
    {
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      fields: [
        { name: 'tagline', title: 'Tagline', type: 'string' },
        { name: 'title', title: 'Main Heading', type: 'string' },
        { name: 'subtitle', title: 'Subtitle', type: 'text', rows: 2 },
        { name: 'primaryBtnText', title: 'Primary Button Text', type: 'string' },
        { name: 'primaryBtnLink', title: 'Primary Button Link', type: 'string' },
        { name: 'secondaryBtnText', title: 'Secondary Button Text', type: 'string' },
        { name: 'secondaryBtnLink', title: 'Secondary Button Link', type: 'string' },
        { name: 'feature1', title: 'Feature Badge 1', type: 'string' },
        { name: 'feature2', title: 'Feature Badge 2', type: 'string' },
        { name: 'feature3', title: 'Feature Badge 3', type: 'string' },
        { name: 'desktopImage', title: 'Desktop Image', type: 'image', options: { hotspot: true } },
        { name: 'mobileImage', title: 'Mobile Image', type: 'image', options: { hotspot: true } },
      ],
    },

    // ── CATEGORIES ────────────────────────────────────
    {
      name: 'categoriesSection',
      title: 'Categories Section',
      type: 'object',
      fields: [
        { name: 'tagline', title: 'Tagline', type: 'string' },
        { name: 'title', title: 'Heading', type: 'string' },
        { name: 'linkText', title: 'Link Text', type: 'string' },
        { name: 'linkUrl', title: 'Link URL', type: 'string' },
        {
          name: 'items',
          title: 'Category Cards',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              { name: 'name', title: 'Name', type: 'string' },
              { name: 'link', title: 'Link URL', type: 'string' },
              { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } },
            ],
          }],
        },
      ],
    },

    // ── BESTSELLERS ───────────────────────────────────
    {
      name: 'bestsellersSection',
      title: 'Bestsellers Section Labels',
      type: 'object',
      fields: [
        { name: 'tagline', title: 'Tagline', type: 'string' },
        { name: 'title', title: 'Heading', type: 'string' },
        { name: 'linkText', title: 'Link Text', type: 'string' },
        { name: 'linkUrl', title: 'Link URL', type: 'string' },
      ],
    },

    // ── PROMOS ────────────────────────────────────────
    {
      name: 'promosSection',
      title: 'Promo Banners',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'tagline', title: 'Tagline', type: 'string' },
          { name: 'title', title: 'Title', type: 'string' },
          { name: 'subtitle', title: 'Subtitle', type: 'text', rows: 2 },
          { name: 'btnText', title: 'Button Text', type: 'string' },
          { name: 'btnLink', title: 'Button Link', type: 'string' },
          { name: 'image', title: 'Background Image', type: 'image', options: { hotspot: true } },
        ],
      }],
    },

    // ── SOCIAL MEDIA VIDEO REELS ──────────────────────
    {
      name: 'videoSection',
      title: 'Social Media Video / Reels Section',
      type: 'object',
      fields: [
        { name: 'tagline', title: 'Tagline', type: 'string', initialValue: 'Follow Us @mitherasweet' },
        { name: 'title', title: 'Heading', type: 'string', initialValue: 'Fresh From Our Kitchen' },
        { name: 'subtitle', title: 'Subtitle', type: 'string', initialValue: 'Catch glimpses of our artisan sweet making, kitchen crafts and celebrations.' },
        { name: 'instagramUrl', title: 'Instagram Profile Link', type: 'string', initialValue: 'https://www.instagram.com/mitherasweet' },
        {
          name: 'videos',
          title: 'Video / Reel Cards',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              { name: 'title', title: 'Title / Caption', type: 'string' },
              { name: 'thumbnail', title: 'Video Thumbnail Image', type: 'image', options: { hotspot: true } },
              { name: 'videoUrl', title: 'Video URL (MP4 / Reel Link)', type: 'string' },
              { name: 'postUrl', title: 'Link to Instagram Post', type: 'string' },
            ]
          }]
        }
      ]
    },

    // ── GOOGLE REVIEW SECTION ─────────────────────────
    {
      name: 'testimonialsSection',
      title: 'Google Review Section',
      type: 'object',
      fields: [
        { name: 'tagline', title: 'Review Section Tagline', type: 'string', initialValue: 'Google Reviews' },
        { name: 'title', title: 'Review Section Title', type: 'string', initialValue: 'Loved by Thousands of Sweet Connoisseurs' },
        { name: 'buttonText', title: 'Review Slide Button Text', type: 'string', initialValue: 'Read Google Reviews' },
        { name: 'buttonUrl', title: 'Review Slide Button URL', type: 'string', initialValue: 'https://maps.google.com' },
        {
          name: 'items',
          title: 'Review Slides',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              { name: 'author', title: 'Review Slide Name', type: 'string' },
              { name: 'avatar', title: 'Review Slide Avatar Letter (e.g. P)', type: 'string' },
              { name: 'avatarImage', title: 'Review Slide Avatar Image (Optional)', type: 'image', options: { hotspot: true } },
              { name: 'text', title: 'Review Slide Content', type: 'text', rows: 3 },
              { name: 'rating', title: 'Rating Number', type: 'string', initialValue: '5.0' },
              { name: 'loc', title: 'Review Location', type: 'string' },
            ],
          }],
        },
      ],
    },

    // ── FAQS SECTION (CONDITIONAL) ────────────────────
    {
      name: 'faqsSection',
      title: 'Homepage FAQs (Conditional - Hidden if empty)',
      type: 'object',
      fields: [
        { name: 'tagline', title: 'Tagline', type: 'string', initialValue: 'Got Questions?' },
        { name: 'title', title: 'FAQ Heading', type: 'string', initialValue: 'Frequently Asked Questions' },
        {
          name: 'items',
          title: 'FAQ Questions & Answers',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              { name: 'question', title: 'Question', type: 'string' },
              { name: 'answer', title: 'Answer', type: 'text', rows: 3 },
            ]
          }]
        }
      ]
    },

    // ── DESCRIPTIVE CONTENT (CONDITIONAL) ─────────────
    {
      name: 'descriptiveContent',
      title: 'Long Descriptive Content Section (Conditional - Hidden if empty)',
      type: 'object',
      fields: [
        { name: 'title', title: 'Section Title', type: 'string' },
        { name: 'content', title: 'Descriptive Content Body', type: 'text', rows: 6 },
      ]
    },

    // ── CTA ───────────────────────────────────────────
    {
      name: 'ctaSection',
      title: 'Call To Action Section',
      type: 'object',
      fields: [
        { name: 'title', title: 'Heading', type: 'string' },
        { name: 'subtitle', title: 'Subheading', type: 'string' },
        { name: 'btnText', title: 'Button Text', type: 'string' },
        { name: 'btnLink', title: 'Button Link', type: 'string' },
        { name: 'leftImage', title: 'Left Image', type: 'image', options: { hotspot: true } },
        { name: 'rightImage', title: 'Right Image', type: 'image', options: { hotspot: true } },
      ],
    },
  ],
};
