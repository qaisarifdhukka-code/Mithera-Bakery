import { atom } from 'nanostores';

export type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  weight: string;
  image: string;
};

export const cartStore = atom<CartItem[]>([]);

// Initialize from local storage on client
if (typeof window !== 'undefined') {
  const stored = localStorage.getItem('mithera_cart');
  if (stored) {
    try {
      cartStore.set(JSON.parse(stored));
    } catch (e) {
      console.error('Failed to parse cart', e);
    }
  }

  // Sync to local storage
  cartStore.subscribe((val) => {
    localStorage.setItem('mithera_cart', JSON.stringify(val));
  });
}

export function addToCart(item: CartItem) {
  const current = cartStore.get();
  const existing = current.find(i => i.id === item.id && i.weight === item.weight);
  if (existing) {
    cartStore.set(current.map(i => 
      i.id === item.id && i.weight === item.weight ? { ...i, quantity: i.quantity + item.quantity } : i
    ));
  } else {
    cartStore.set([...current, item]);
  }
}

export function updateQuantity(id: number, weight: string, quantity: number) {
  if (quantity <= 0) {
    cartStore.set(cartStore.get().filter(i => !(i.id === id && i.weight === weight)));
  } else {
    cartStore.set(cartStore.get().map(i => 
      i.id === id && i.weight === weight ? { ...i, quantity } : i
    ));
  }
}

export function removeFromCart(id: number, weight: string) {
  cartStore.set(cartStore.get().filter(i => !(i.id === id && i.weight === weight)));
}

export function clearCart() {
  cartStore.set([]);
}

export function parsePrice(priceStr: string): number {
  return parseFloat(priceStr.replace(/[^0-9.]/g, ''));
}

export function getWhatsAppCheckoutUrl(cart: CartItem[]): string {
  const WA_NUMBER = "919152319661";
  let text = "Hello Mithera Sweets! I would like to place an order:\n\n";
  let total = 0;

  cart.forEach((item, index) => {
    const itemTotal = item.price * item.quantity;
    total += itemTotal;
    text += `${index + 1}. *${item.name}* (${item.weight})\n`;
    text += `   Qty: ${item.quantity} x ₹${item.price.toFixed(2)} = ₹${itemTotal.toFixed(2)}\n\n`;
  });

  text += `*Order Total: ₹${total.toFixed(2)}*\n\n`;
  text += `Please let me know the payment details and delivery options.`;

  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
}

export function getWhatsAppBuyNowUrl(item: CartItem): string {
  const WA_NUMBER = "919152319661";
  let text = `Hello Mithera Sweets! I would like to order:\n\n`;
  const itemTotal = item.price * item.quantity;
  text += `*${item.name}* (${item.weight})\n`;
  text += `Qty: ${item.quantity} x ₹${item.price.toFixed(2)} = ₹${itemTotal.toFixed(2)}\n\n`;
  text += `*Order Total: ₹${itemTotal.toFixed(2)}*\n\n`;
  text += `Please let me know the payment details and delivery options.`;

  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
}
