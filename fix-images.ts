import { getCliClient } from 'sanity/cli';
import { createReadStream, existsSync } from 'fs';
import { join } from 'path';

const client = getCliClient();

async function uploadImage(localPath: string) {
  const fullPath = join(process.cwd(), 'public', localPath);
  if (!existsSync(fullPath)) {
    console.warn(`WARNING: Image not found at ${fullPath}`);
    return null;
  }
  const imageAsset = await client.assets.upload('image', createReadStream(fullPath), {
    filename: localPath.split('/').pop()
  });
  return {
    _type: 'image',
    asset: {
      _type: 'reference',
      _ref: imageAsset._id
    }
  };
}

async function fix() {
  console.log('Uploading decorative images and finalizing Home Page...');
  
  const heroDesktop = await uploadImage('images/hero-image.png');
  const heroMobile = await uploadImage('images/mobile.png');
  const ctaLeft = await uploadImage('images/products/Kaju katli.png');
  const ctaRight = await uploadImage('images/products/Malai barfi.png');
  const promo1 = await uploadImage('images/promo/promo_gift_hamper.jpg');
  const promo2 = await uploadImage('images/promo/promo_bakery_basket.jpg');
  
  const cat1 = await uploadImage('images/1 (6).png');
  const cat2 = await uploadImage('images/1 (1).png');
  const cat3 = await uploadImage('images/1 (5).png');
  const cat4 = await uploadImage('images/1 (4).png');
  const cat5 = await uploadImage('images/1 (3).png');
  const cat6 = await uploadImage('images/1 (2).png');
  
  await client
    .patch('homePage')
    .setIfMissing({ promosSection: [] })
    .set({
      'hero.desktopImage': heroDesktop,
      'hero.mobileImage': heroMobile,
      'ctaSection.leftImage': ctaLeft,
      'ctaSection.rightImage': ctaRight,
      'categoriesSection.items': [
        { _key: 'c1', name: 'Indian Sweets', link: '/shop?category=Indian+Sweets', image: cat1 },
        { _key: 'c2', name: 'Mithai Boxes', link: '/shop?category=Indian+Sweets', image: cat2 },
        { _key: 'c3', name: 'Bakery Items', link: '/shop?category=Bakery+Items', image: cat3 },
        { _key: 'c4', name: 'Cookies & Biscuits', link: '/shop?category=Cookies+%26+Biscuits', image: cat4 },
        { _key: 'c5', name: 'Puffs & Savouries', link: '/shop?category=Bakery+Items', image: cat5 },
        { _key: 'c6', name: 'Gift Hampers', link: '/shop?category=Gift+Hampers', image: cat6 },
      ],
      promosSection: [
        {
          _key: 'p1',
          tagline: 'Limited Time Offer',
          title: 'Festive Grand Hampers',
          subtitle: 'Make this festive season special with our curated collection of premium mithai and artisanal bakes. Perfect for corporate gifting and family celebrations.',
          btnText: 'Pre-order Now',
          btnLink: '/shop?category=Gift+Hampers',
          image: promo1
        },
        {
          _key: 'p2',
          tagline: 'Freshly Baked',
          title: 'Morning Bakery Delights',
          subtitle: 'Start your day right with our freshly baked croissants, sourdough breads, and classic butter cookies. Baked fresh every morning at 5 AM.',
          btnText: 'View Menu',
          btnLink: '/shop?category=Bakery+Items',
          image: promo2
        }
      ]
    })
    .commit();
    
  console.log('Done uploading all images!');
}

fix().catch(console.error);
