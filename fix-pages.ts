import { getCliClient } from 'sanity/cli';
import { createReadStream, existsSync } from 'fs';
import { join } from 'path';

const client = getCliClient();

async function uploadImage(localPath: string) {
  const fullPath = join(process.cwd(), 'public', localPath);
  if (!existsSync(fullPath)) return undefined;
  
  const imageAsset = await client.assets.upload('image', createReadStream(fullPath), {
    filename: localPath.split('/').pop()
  });
  
  return {
    _type: 'image',
    asset: { _type: 'reference', _ref: imageAsset._id }
  };
}

async function fix() {
  console.log('Populating Our Story and Gifting pages with default data...');
  
  const storyImage = await uploadImage('images/mobile.png');

  // Populate Our Story Page
  await client.createOrReplace({
    _id: 'storyPage',
    _type: 'storyPage',
    heroHeading: "A Legacy of <br class='hidden lg:block'/><span class='italic text-brand-warm'>Sweetness</span>",
    heroSubtext: "Mithera was born from a simple belief: the sweets we celebrate with should be as pure and joyous as the celebrations themselves. We blend generations of traditional recipes with the finest modern craftsmanship.",
    heroImage: storyImage,
  });

  // Populate Gifting Page
  await client.createOrReplace({
    _id: 'giftingPage',
    _type: 'giftingPage',
    heroHeading: "Corporate Gifting",
    heroSubtext: "Leave a lasting impression with Mithera's artisanal sweets and bespoke packaging, tailored exclusively for your business partners and employees.",
    featuresHeading: "Tailored to Perfection",
    featuresSubtext: "Whether it's Diwali, employee onboarding, client appreciation, or festive celebrations, our corporate gifting catalog offers something extraordinary for every occasion.",
    features: [
      "Custom packaging with your company logo",
      "Curated assortments of traditional & modern sweets",
      "Volume discounts for large-scale orders",
      "Seamless multi-point Pan-India delivery"
    ]
  });
    
  console.log('Done populating pages!');
}

fix().catch(console.error);
