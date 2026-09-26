import React, { useEffect, useState } from 'react';
import { ShoppingBag } from 'lucide-react';
import { useStore } from '@nanostores/react';
import { cartStore } from '../../store/cart';

export default function CartIndicator() {
  const cart = useStore(cartStore);
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch by waiting for mount
  useEffect(() => {
    setMounted(true);
  }, []);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <a 
      href="/cart" 
      className="bg-transparent border-none p-1 cursor-pointer flex items-center justify-center text-brand-dark transition-opacity hover:opacity-70 relative" 
      aria-label="Shopping Cart"
    >
      <ShoppingBag className="w-[18px] h-[18px] lg:w-[21px] lg:h-[21px]" strokeWidth={1.5} />
      {mounted && totalItems > 0 && (
        <span className="absolute -top-0.5 -right-0.5 lg:-top-1 lg:-right-1.5 w-[14px] h-[14px] lg:w-[17px] lg:h-[17px] bg-brand-dark text-cream-off rounded-full text-[8px] lg:text-[9px] font-semibold flex items-center justify-center">
          {totalItems}
        </span>
      )}
    </a>
  );
}
