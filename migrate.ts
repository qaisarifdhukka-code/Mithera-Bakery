import { getCliClient } from 'sanity/cli';
import { allProducts } from './src/data/products';
import { createReadStream, existsSync } from 'fs';
import { join } from 'path';

const client = getCliClient();

async function migrate() {
  console.log('Migrating products to Sanity...');
  for (const product of allProducts) {
    console.log(`Migrating ${product.name}...`);
    
    let imageRef = null;
    
    // The image path in the object is something like "/images/products/Kaju katli.png"
    // We map it to the actual file path on disk: "public/images/products/Kaju katli.png"
    const localImagePath = join(process.cwd(), 'public', product.image);
    
    if (existsSync(localImagePath)) {
      console.log(`Uploading image for ${product.name}...`);
      const imageAsset = await client.assets.upload('image', createReadStream(localImagePath), {
        filename: product.image.split('/').pop()
      });
      imageRef = {
        _type: 'image',
        asset: {
          _type: 'reference',
          _ref: imageAsset._id
        }
      };
    } else {
      console.warn(`WARNING: Image not found for ${product.name} at ${localImagePath}`);
    }

    await client.create({
      _type: 'product',
      name: product.name,
      slug: { _type: 'slug', current: product.slug },
      price: product.price,
      rating: product.rating,
      reviews: product.reviews,
      category: product.category,
      description: product.description,
      ingredients: product.ingredients,
      weight: product.weight,
      image: imageRef
    });
  }
  
  // Create a default home page document if it doesn't exist
  console.log('Creating Home Page document...');
  await client.createIfNotExists({
    _id: 'homePage',
    _type: 'homePage',
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
  });
  
  console.log('Done migrating data!');
}

migrate().catch(console.error);
