import { getCliClient } from 'sanity/cli';

const client = getCliClient();

async function fix() {
  console.log('Patching Our Story page with philosophies...');
  
  await client
    .patch('storyPage')
    .set({
      philosophies: [
        {
          _key: 'p1',
          title: 'Pure Ingredients',
          description: 'We source only the finest elements—authentic saffron, rich pure ghee, and premium nuts. Our commitment to quality means no artificial preservatives, just the genuine taste of nature.'
        },
        {
          _key: 'p2',
          title: 'Honoring Tradition',
          description: 'Every mithai we craft is a tribute to heritage. We follow age-old recipes meticulously, ensuring that every bite transports you to the nostalgic flavors of authentic Indian festivities.'
        },
        {
          _key: 'p3',
          title: 'Modern Elegance',
          description: 'While our roots are traditional, our presentation is distinctly modern. We believe that beautiful packaging and refined aesthetics elevate the entire experience of gifting and enjoying sweets.'
        }
      ]
    })
    .commit();
    
  console.log('Done patching Our Story page!');
}

fix().catch(console.error);
