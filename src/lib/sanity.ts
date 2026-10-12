import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const sanityClient = createClient({
  projectId: 'g6rnivvz',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
});

const builder = imageUrlBuilder(sanityClient);

// Helper to build image URLs from Sanity image references
export function urlFor(source: any) {
  if (!source) return '';
  // If it's already a plain URL string, return it
  if (typeof source === 'string') return source;
  // Otherwise build a URL from the Sanity image reference
  return builder.image(source).auto('format').url();
}
