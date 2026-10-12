import { getCliClient } from 'sanity/cli';

const client = getCliClient();

async function fix() {
  console.log('Populating remaining Home Page fields...');
  
  await client
    .patch('homePage')
    .set({
      categoriesSection: {
        _type: 'object',
        tagline: 'Explore Our Range',
        title: 'Shop by Category',
        linkText: 'View All Categories',
        linkUrl: '/shop',
        // Omitting items array so it falls back to Astro's built-in static categories array
        // or user can add them manually. But let's add dummy ones just to populate the CMS fully.
        items: [
          { _key: 'c1', name: 'Indian Sweets', link: '/shop?category=Indian+Sweets' },
          { _key: 'c2', name: 'Mithai Boxes', link: '/shop?category=Indian+Sweets' },
          { _key: 'c3', name: 'Bakery Items', link: '/shop?category=Bakery+Items' },
          { _key: 'c4', name: 'Cookies & Biscuits', link: '/shop?category=Cookies+%26+Biscuits' },
        ]
      },
      bestsellersSection: {
        _type: 'object',
        tagline: 'Most Loved',
        title: 'Our Bestsellers',
        linkText: 'View All Products',
        linkUrl: '/shop',
      },
      testimonialsSection: {
        _type: 'object',
        tagline: 'Testimonials',
        title: 'What Our Customers Say',
        items: [
          { _key: 't1', text: 'The Kaju Katli is simply out of this world! Perfect sweetness and melts in the mouth.', author: 'Priya Sharma', loc: 'Mumbai', avatar: 'P' },
          { _key: 't2', text: 'Best bakery items in town. The sourdough bread is authentic and the cookies are my kids favorite.', author: 'Rahul Verma', loc: 'Delhi', avatar: 'R' },
          { _key: 't3', text: 'Ordered a grand hamper for Diwali and everyone loved it. Premium packaging and amazing taste.', author: 'Anita Desai', loc: 'Pune', avatar: 'A' },
        ]
      },
      ctaSection: {
        _type: 'object',
        title: 'Ready to Taste the Magic?',
        subtitle: 'Order now and get fresh sweets delivered directly to your doorstep within 24 hours.',
        btnText: 'Shop the Collection',
        btnLink: '/shop',
      }
    })
    .commit();
    
  console.log('Done populating Home Page!');
}

fix().catch(console.error);
