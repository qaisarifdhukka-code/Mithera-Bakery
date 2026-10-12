import { getCliClient } from 'sanity/cli';

const client = getCliClient();

async function fix() {
  console.log('Fixing Home Page document...');
  
  // Create or patch the home page to put the fields inside the "hero" object
  await client
    .patch('homePage')
    .set({
      hero: {
        _type: 'object',
        tagline: 'Signature Collection',
        title: 'Handcrafted Sweets\n& Artisanal Bakes',
        subtitle: 'Experience the authentic taste of premium ingredients and generations of sweet-making expertise.',
        primaryBtnText: 'Order Now',
        primaryBtnLink: '/shop',
        secondaryBtnText: 'View Range',
        secondaryBtnLink: '/shop?category=Indian+Sweets',
        feature1: '100% Pure\nVegetarian',
        feature2: 'Freshly\nPrepared',
        feature3: 'Premium\nQuality',
      }
    })
    .unset([
      'tagline', 
      'subtitle', 
      'primaryBtnText', 
      'primaryBtnLink', 
      'secondaryBtnText', 
      'secondaryBtnLink', 
      'feature1', 
      'feature2', 
      'feature3'
    ])
    .commit();
    
  console.log('Done fixing Home Page!');
}

fix().catch(console.error);
