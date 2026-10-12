import { getCliClient } from 'sanity/cli';

const client = getCliClient();

async function fix() {
  console.log('Patching the rest of the Our Story page fields...');
  
  await client
    .patch('storyPage')
    .set({
      artOfMithaiHeading: "The Art of Mithai",
      artOfMithaiText: "Creating the perfect Kaju Katli or a delicate Peda is an art form that requires patience, precision, and an intuitive understanding of flavors. Our master halwais bring decades of experience to the kitchen, treating every batch as a masterpiece.",
      frenchConnectionHeading: "The French Connection",
      frenchConnectionText: "Alongside our traditional offerings, we embrace the meticulous world of patisserie. From perfectly laminated, buttery croissants to artisanal breads, our bakery items are crafted fresh every morning using classic French techniques.",
      quoteText: "\"We don't just bake; we craft memories. Every box that leaves Mithera carries a piece of our heart and the warmth of a thousand celebrations.\""
    })
    .commit();
    
  console.log('Done patching the rest of Our Story page!');
}

fix().catch(console.error);
