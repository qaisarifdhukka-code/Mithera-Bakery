import React, { useState } from 'react';
import { addToCart, parsePrice } from '../../store/cart';

interface AddToCartButtonProps {
  product: {
    id: number;
    name: string;
    price: string;
    image: string;
    weight?: string;
  };
}

export default function AddToCartButton({ product }: AddToCartButtonProps) {
  const [added, setAdded] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation(); // prevent clicking link wrapper
    
    addToCart({
      id: product.id,
      name: product.name,
      price: parsePrice(product.price),
      quantity: 1,
      weight: product.weight || '500g', // default fallback
      image: product.image
    });
    
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
    
    import('../../store/toast').then(({ addToast }) => {
      addToast(`${product.name} added to cart!`);
    });
  };

  return (
    <button 
      onClick={handleAddToCart}
      className={`w-full h-[32px] lg:h-[40px] text-[10px] lg:text-[12px] font-medium rounded-[4px] border-none cursor-pointer transition-colors flex items-center justify-center mt-auto ${
        added 
          ? 'bg-green-600 text-white' 
          : 'bg-brand-dark text-cream hover:bg-brand-hover'
      }`}
    >
      {added ? 'Added!' : 'Add to Cart'}
    </button>
  );
}
