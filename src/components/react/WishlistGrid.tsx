import React, { useEffect, useState } from 'react';
import { wishlistStore } from '../../store/wishlist';
import { allProducts } from '../../data/products';
import { Star, Heart } from 'lucide-react';
import AddToCartButton from './AddToCartButton';
import WishlistButton from './WishlistButton';

export default function WishlistGrid() {
  const [wishedIds, setWishedIds] = useState<number[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const unsub = wishlistStore.subscribe((wishlist) => {
      setWishedIds([...wishlist]);
    });
    return unsub;
  }, []);

  if (!mounted) return null; // Avoid hydration mismatch

  const wishedProducts = allProducts.filter(p => wishedIds.includes(p.id));

  if (wishedProducts.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center bg-white rounded-xl shadow-sm border border-brand-warm/10">
        <Heart size={48} className="text-brand-dark/20 mb-6" strokeWidth={1} />
        <h2 className="text-2xl font-heading text-brand-dark mb-4">Your wishlist is empty</h2>
        <p className="text-text-secondary mb-8 max-w-md mx-auto">Looks like you haven't added any of our delicious treats to your wishlist yet.</p>
        <a href="/shop" className="bg-brand-dark text-white px-8 py-3 rounded-full font-medium hover:bg-brand-hover transition-colors">
          Explore Our Menu
        </a>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-5">
      {wishedProducts.map(product => (
        <a 
          key={product.id}
          href={`/product/${product.slug}`}
          className="group flex flex-col bg-white rounded-[8px] overflow-hidden transition-all duration-300 hover:-translate-y-1 shadow-[0_2px_6px_rgba(58,36,26,0.04)] hover:shadow-[0_8px_16px_rgba(58,36,26,0.08)] border border-brand-warm/10 h-full no-underline"
        >
          <div className="w-full h-[110px] lg:h-[160px] relative bg-cream shrink-0 overflow-hidden">
            <WishlistButton productId={product.id} />
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-105"
            />
          </div>
          <div className="flex flex-col p-2 lg:p-[12px] grow">
            <h3 className="font-body text-[11px] lg:text-[13px] font-semibold text-brand-dark mb-1 leading-tight">{product.name}</h3>
            <p className="font-body text-[11px] lg:text-[13px] font-semibold text-brand-dark mb-1.5 lg:mb-2">{product.price}</p>
            <div className="flex items-center gap-1 mb-auto pb-2">
              <Star className="w-[10px] h-[10px] lg:w-[12px] lg:h-[12px] text-brand-gold fill-brand-gold" strokeWidth={1} />
              <span className="font-body text-[9px] lg:text-[11px] font-medium text-text-secondary">{product.rating}</span>
            </div>
            <AddToCartButton product={product} />
          </div>
        </a>
      ))}
    </div>
  );
}
