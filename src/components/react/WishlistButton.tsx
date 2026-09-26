import React, { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';
import { wishlistStore, toggleWishlist } from '../../store/wishlist';

interface WishlistButtonProps {
  productId: number;
}

export default function WishlistButton({ productId }: WishlistButtonProps) {
  const [isWished, setIsWished] = useState(false);

  useEffect(() => {
    // Subscribe to the global store to keep UI strictly in sync
    const unsub = wishlistStore.subscribe((wishlist) => {
      setIsWished(wishlist.includes(productId));
    });
    return unsub;
  }, [productId]);

  const handleToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation(); // prevent clicking through to the product link
    
    const added = toggleWishlist(productId);
    
    // Trigger toast notification
    import('../../store/toast').then(({ addToast }) => {
      addToast(added ? "Added to Wishlist!" : "Removed from Wishlist");
    });
  };

  return (
    <button 
      aria-label="Toggle wishlist" 
      onClick={handleToggle}
      className="absolute top-2 right-2 w-[22px] h-[22px] lg:w-[26px] lg:h-[26px] bg-white rounded-full flex items-center justify-center text-text-secondary shadow-[0_2px_4px_rgba(0,0,0,0.08)] transition-all duration-200 hover:bg-cream hover:text-brand-dark hover:scale-110 z-10 border-none cursor-pointer"
    >
      <Heart 
        className="w-[10px] h-[10px] lg:w-[12px] lg:h-[12px] transition-colors" 
        strokeWidth={isWished ? 0 : 2} 
        fill={isWished ? "#C05640" : "none"} 
        color={isWished ? "#C05640" : "currentColor"}
      />
    </button>
  );
}
