import { getCliClient } from 'sanity/cli';

const client = getCliClient();

async function seed() {
  console.log('Seeding / updating Sanity CMS data...');

  // 1. Seed or Update the 4 Legal Pages
  const legalPages = [
    {
      _id: 'legal-privacy-policy',
      _type: 'legalPage',
      title: 'Privacy Policy',
      slug: { _type: 'slug', current: 'privacy-policy' },
      metaDescription: 'Privacy policy for Mithera Sweets & Bakery. Learn how we handle and protect your personal information.',
      lastUpdated: '2026-03-01',
      body: [
        {
          _key: 'b1',
          _type: 'block',
          children: [{ _key: 'c1', _type: 'span', text: 'At Mithera Sweets, accessible from our official website, one of our main priorities is the privacy of our visitors. This Privacy Policy document explains the types of information that is collected and recorded by Mithera and how we use it.' }]
        },
        {
          _key: 'b2',
          _type: 'block',
          style: 'h2',
          children: [{ _key: 'c2', _type: 'span', text: '1. Information We Collect' }]
        },
        {
          _key: 'b3',
          _type: 'block',
          children: [{ _key: 'c3', _type: 'span', text: 'When you place an order or contact us, we collect information including your name, delivery address, phone number (used for WhatsApp order coordination), and email address. We do not store sensitive payment card details on our servers.' }]
        },
        {
          _key: 'b4',
          _type: 'block',
          style: 'h2',
          children: [{ _key: 'c4', _type: 'span', text: '2. How We Use Your Information' }]
        },
        {
          _key: 'b5',
          _type: 'block',
          children: [{ _key: 'c5', _type: 'span', text: 'We use the information we collect to process orders, coordinate deliveries via courier/delivery partners, provide customer support via WhatsApp and phone, and occasionally share seasonal updates or festive specials.' }]
        },
        {
          _key: 'b6',
          _type: 'block',
          style: 'h2',
          children: [{ _key: 'c6', _type: 'span', text: '3. Data Security' }]
        },
        {
          _key: 'b7',
          _type: 'block',
          children: [{ _key: 'c7', _type: 'span', text: 'We adopt appropriate technical measures to prevent unauthorized access or disclosure of your personal data. We never sell or rent your information to third-party marketers.' }]
        }
      ]
    },
    {
      _id: 'legal-terms-and-conditions',
      _type: 'legalPage',
      title: 'Terms & Conditions',
      slug: { _type: 'slug', current: 'terms-and-conditions' },
      metaDescription: 'Terms and conditions for ordering and using the Mithera Sweets website and services.',
      lastUpdated: '2026-03-01',
      body: [
        {
          _key: 'b1',
          _type: 'block',
          children: [{ _key: 'c1', _type: 'span', text: 'Welcome to Mithera Sweets & Bakery. By accessing our website, browsing our menu, or placing orders via our website or direct WhatsApp checkout, you agree to comply with and be bound by the following terms and conditions.' }]
        },
        {
          _key: 'b2',
          _type: 'block',
          style: 'h2',
          children: [{ _key: 'c2', _type: 'span', text: '1. Product Availability & Pricing' }]
        },
        {
          _key: 'b3',
          _type: 'block',
          children: [{ _key: 'c3', _type: 'span', text: 'Because our sweets and bakery treats are freshly prepared daily in small artisanal batches, all products are subject to daily availability. While we strive to maintain accurate pricing on our site, prices are subject to change without prior notice.' }]
        },
        {
          _key: 'b4',
          _type: 'block',
          style: 'h2',
          children: [{ _key: 'c4', _type: 'span', text: '2. Orders & Order Confirmation' }]
        },
        {
          _key: 'b5',
          _type: 'block',
          children: [{ _key: 'c5', _type: 'span', text: 'Orders placed on the website generate a WhatsApp inquiry or direct order dispatch request. An order is considered confirmed once our team verifies stock and receives payment confirmation.' }]
        },
        {
          _key: 'b6',
          _type: 'block',
          style: 'h2',
          children: [{ _key: 'c6', _type: 'span', text: '3. Shelf Life & Quality' }]
        },
        {
          _key: 'b7',
          _type: 'block',
          children: [{ _key: 'c7', _type: 'span', text: 'Our traditional sweets are made without artificial chemical preservatives. Customers are advised to store products as instructed on the packaging and consume them within the suggested timeframe for optimal flavor and freshness.' }]
        }
      ]
    },
    {
      _id: 'legal-cancellation-and-refund-policy',
      _type: 'legalPage',
      title: 'Cancellation and Refund Policy',
      slug: { _type: 'slug', current: 'cancellation-and-refund-policy' },
      metaDescription: 'Cancellation and refund policy for orders placed with Mithera Sweets & Bakery.',
      lastUpdated: '2026-03-01',
      body: [
        {
          _key: 'b1',
          _type: 'block',
          children: [{ _key: 'c1', _type: 'span', text: 'At Mithera Sweets, we take utmost care in preparing and packing our fresh artisanal delicacies. Due to the perishable nature of food items, please review our cancellation and refund guidelines below.' }]
        },
        {
          _key: 'b2',
          _type: 'block',
          style: 'h2',
          children: [{ _key: 'c2', _type: 'span', text: '1. Order Cancellation' }]
        },
        {
          _key: 'b3',
          _type: 'block',
          children: [{ _key: 'c3', _type: 'span', text: 'Orders can only be cancelled within 1 hour of placing the order, provided preparation or dispatch has not commenced. Once sweet boxes or bakery items have been packaged and handed over to our dispatch riders, cancellations cannot be accepted.' }]
        },
        {
          _key: 'b4',
          _type: 'block',
          style: 'h2',
          children: [{ _key: 'c4', _type: 'span', text: '2. Damaged or Incorrect Orders' }]
        },
        {
          _key: 'b5',
          _type: 'block',
          children: [{ _key: 'c5', _type: 'span', text: 'If you receive a package that is visibly damaged or an incorrect item was delivered, please inform our team within 2 hours of delivery with photos/video of the package. We will promptly arrange an immediate replacement or full refund.' }]
        },
        {
          _key: 'b6',
          _type: 'block',
          style: 'h2',
          children: [{ _key: 'c6', _type: 'span', text: '3. Refund Process' }]
        },
        {
          _key: 'b7',
          _type: 'block',
          children: [{ _key: 'c7', _type: 'span', text: 'Approved refunds will be processed back to your original payment method (UPI / Bank transfer) within 3-5 business days.' }]
        }
      ]
    },
    {
      _id: 'legal-shipping-policy',
      _type: 'legalPage',
      title: 'Shipping & Delivery Policy',
      slug: { _type: 'slug', current: 'shipping-policy' },
      metaDescription: 'Shipping and delivery guidelines for Mithera Sweets & Bakery across Mumbai and Pan-India.',
      lastUpdated: '2026-03-01',
      body: [
        {
          _key: 'b1',
          _type: 'block',
          children: [{ _key: 'c1', _type: 'span', text: 'We take great pride in delivering fresh, handcrafted mithai and bakery goods safely to your doorstep. Here are the details of our delivery operations.' }]
        },
        {
          _key: 'b2',
          _type: 'block',
          style: 'h2',
          children: [{ _key: 'c2', _type: 'span', text: '1. Local Mumbai Delivery' }]
        },
        {
          _key: 'b3',
          _type: 'block',
          children: [{ _key: 'c3', _type: 'span', text: 'Same-day or next-day express delivery is available across Mumbai, Kandivali, Borivali, and nearby suburbs. Orders placed before 4:00 PM are typically dispatched the same day.' }]
        },
        {
          _key: 'b4',
          _type: 'block',
          style: 'h2',
          children: [{ _key: 'c4', _type: 'span', text: '2. Free Delivery Threshold' }]
        },
        {
          _key: 'b5',
          _type: 'block',
          children: [{ _key: 'c5', _type: 'span', text: 'Enjoy Free Delivery on all retail orders above ₹500 across Mumbai. For orders below ₹500, nominal standard courier or hyperlocal delivery charges apply.' }]
        },
        {
          _key: 'b6',
          _type: 'block',
          style: 'h2',
          children: [{ _key: 'c6', _type: 'span', text: '3. Pan-India Delivery & Gifting' }]
        },
        {
          _key: 'b7',
          _type: 'block',
          children: [{ _key: 'c7', _type: 'span', text: 'For dry sweets, cookies, dragees, and gift hampers, nationwide express courier shipping (air cargo) takes 2-4 business days. Temperature-sensitive milk sweets are restricted to local delivery.' }]
        }
      ]
    }
  ];

  for (const page of legalPages) {
    console.log(`Upserting legal page: ${page.title}`);
    await client.createOrReplace(page);
  }

  // 2. Patch Home Page with Google Reviews, SEO, Social Video, FAQs
  console.log('Updating Home Page with Google Review Section, Video Reels, FAQs and SEO...');
  await client
    .patch('homePage')
    .set({
      title: 'Mithera Sweets & Bakery | Handcrafted Sweets & Artisanal Bakes Mumbai',
      metaDescription: 'Experience authentic handcrafted Indian sweets, freshly baked artisan breads, cookies, and corporate gift hampers from Mithera Sweets in Kandivali, Mumbai.',
      schemaJson: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Bakery",
        "name": "Mithera Sweets & Bakery",
        "image": "https://mithera-sweets.sanity.studio/images/LOGO.png",
        "telephone": "+91 99303 09063",
        "email": "mitherasweets@gmail.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Shop No. 13 & 14, B Wing, Pooja Enclave, Old Link Road, Opp. Ganesh Nagar, Near Atharva College, Nilkanth Nagar",
          "addressLocality": "Kandivali West, Mumbai",
          "addressRegion": "Maharashtra",
          "postalCode": "400067",
          "addressCountry": "IN"
        },
        "priceRange": "₹₹",
        "servesCuisine": ["Indian Sweets", "Bakery", "Patisserie", "Mithai"],
        "openingHours": "Mo-Su 09:00-24:00"
      }, null, 2),
      testimonialsSection: {
        _type: 'object',
        tagline: 'Google Reviews',
        title: 'Loved by Thousands of Sweet Connoisseurs',
        buttonText: 'Read All Google Reviews',
        buttonUrl: 'https://maps.google.com/?q=Mithera+Sweets+Kandivali+West+Mumbai',
        items: [
          {
            _key: 'rev-1',
            author: 'Priya Sharma',
            avatar: 'P',
            rating: '5.0',
            loc: 'Kandivali, Mumbai',
            text: 'The Kaju Katli is simply out of this world! Perfect sweetness, melt-in-the-mouth texture and pure silver leaf. Our entire family orders exclusively from Mithera for all our festivals.'
          },
          {
            _key: 'rev-2',
            author: 'Rahul Verma',
            avatar: 'R',
            rating: '5.0',
            loc: 'Borivali, Mumbai',
            text: 'Best bakery and mithai fusion in town. The sourdough bread is remarkably authentic and the dry fruit halwa has the rich, genuine aroma of pure desi ghee. 10/10 recommend!'
          },
          {
            _key: 'rev-3',
            author: 'Anita Desai',
            avatar: 'A',
            rating: '5.0',
            loc: 'Malad, Mumbai',
            text: 'Ordered custom gift hampers for our corporate Diwali gifts. The bespoke gold packaging and fresh assortments won over every client. Seamless service and prompt delivery.'
          },
          {
            _key: 'rev-4',
            author: 'Karan Mehta',
            avatar: 'K',
            rating: '5.0',
            loc: 'Mumbai',
            text: 'Freshly prepared everyday! You can genuinely taste the premium quality nuts, real saffron, and purity. Their customer service on WhatsApp is also extremely responsive.'
          }
        ]
      },
      videoSection: {
        _type: 'object',
        tagline: 'Follow Us @mitherasweet',
        title: 'Fresh From Our Kitchen',
        subtitle: 'Watch our master halwais and pastry chefs craft happiness every morning.',
        instagramUrl: 'https://www.instagram.com/mitherasweet',
        videos: [
          {
            _key: 'v1',
            title: 'Handcrafting our Signature Kaju Katli with Pure Cashews',
            postUrl: 'https://www.instagram.com/mitherasweet'
          },
          {
            _key: 'v2',
            title: 'Golden Crispy Sourdough & Laminated Butter Croissants',
            postUrl: 'https://www.instagram.com/mitherasweet'
          },
          {
            _key: 'v3',
            title: 'Festive Luxury Gifting Boxes Assembled Fresh',
            postUrl: 'https://www.instagram.com/mitherasweet'
          },
          {
            _key: 'v4',
            title: 'Artisanal Cookies & Pure Desi Ghee Handcrafted Mithai',
            postUrl: 'https://www.instagram.com/mitherasweet'
          }
        ]
      },
      faqsSection: {
        _type: 'object',
        tagline: 'Got Questions?',
        title: 'Frequently Asked Questions',
        items: [
          {
            _key: 'faq1',
            question: 'Are all your sweets 100% pure vegetarian?',
            answer: 'Yes! All Mithera sweets, mithai boxes, and dry fruit confections are 100% pure vegetarian, prepared with authentic ingredients and pure desi ghee.'
          },
          {
            _key: 'faq2',
            question: 'How do I place an order?',
            answer: 'You can browse our menu online, add products to cart, and checkout directly via WhatsApp where our team will confirm your order, address, and payment instantly.'
          },
          {
            _key: 'faq3',
            question: 'Do you offer same-day delivery in Mumbai?',
            answer: 'Yes, same-day express delivery is available across Mumbai for orders placed before 4:00 PM. We also offer free delivery on orders above ₹500.'
          },
          {
            _key: 'faq4',
            question: 'Can I customize sweet boxes for weddings or corporate gifting?',
            answer: 'Absolutely. We offer customized packaging, corporate branding with company logos, and curated sweet assortments tailored to your festive or event requirements.'
          }
        ]
      },
      descriptiveContent: {
        _type: 'object',
        title: 'The Art of Indian Mithai Meets French Patisserie',
        content: 'At Mithera, we believe sweetness is the universal language of celebration. By pairing centuries of Indian confectionery recipes with artisanal French baking techniques, we bring you uncompromised freshness, pure ingredients, and timeless taste.'
      }
    })
    .commit();

  // 3. Update existing products with storage instructions & allergen info
  console.log('Updating products with storage instructions and allergen notices...');
  const products = await client.fetch(`*[_type == "product"]{ _id, name, category }`);
  for (const p of products) {
    await client
      .patch(p._id)
      .setIfMissing({
        storageInstructions: 'Store in a cool, dry place away from direct sunlight. Once opened, keep in an airtight container and consume within 3-4 days for optimal freshness.',
        allergens: 'Contains dairy and tree nuts. Prepared in an artisan kitchen that also handles seeds and gluten.',
        isBestseller: true
      })
      .commit();
  }

  console.log('CMS data seeding completed successfully!');
}

seed().catch(console.error);
