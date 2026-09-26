import { atom } from 'nanostores';

// Store an array of product IDs that are in the wishlist
export const wishlistStore = atom<number[]>([]);

if (typeof window !== 'undefined') {
  const stored = localStorage.getItem('mithera_wishlist');
  if (stored) {
    try {
      wishlistStore.set(JSON.parse(stored));
    } catch (e) {
      console.error('Failed to parse wishlist', e);
    }
  }

  wishlistStore.subscribe((val) => {
    localStorage.setItem('mithera_wishlist', JSON.stringify(val));
  });
}

export function toggleWishlist(productId: number): boolean {
  const current = wishlistStore.get();
  if (current.includes(productId)) {
    wishlistStore.set(current.filter(id => id !== productId));
    return false; // Removed
  } else {
    wishlistStore.set([...current, productId]);
    return true; // Added
  }
}
