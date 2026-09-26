import React from 'react';
import { useStore } from '@nanostores/react';
import { cartStore, removeFromCart, updateQuantity, getWhatsAppCheckoutUrl } from '../../store/cart';
import { Minus, Plus, ArrowRight } from 'lucide-react';

export default function CartView() {
  const cart = useStore(cartStore);
  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const handleCheckout = () => {
    if (cart.length === 0) return;
    const url = getWhatsAppCheckoutUrl(cart);
    window.open(url, '_blank');
  };

  if (cart.length === 0) {
    return (
      <div className="py-32 text-center px-4 flex flex-col items-center justify-center min-h-[60vh]">
        <h1 className="font-heading text-[36px] lg:text-[48px] text-brand-dark mb-4">Your Cart is Empty</h1>
        <p className="font-body text-[15px] text-text-secondary mb-10">Discover our artisanal sweets and freshly baked goods.</p>
        <a href="/shop" className="inline-flex items-center justify-center bg-brand-dark text-cream-off font-body text-[12px] font-semibold px-10 py-4 rounded-[4px] hover:bg-brand-hover transition-colors uppercase tracking-[0.15em]">
          Continue Shopping
        </a>
      </div>
    );
  }

  return (
    <div className="py-12 lg:py-20 px-4">
      <div className="container max-w-5xl mx-auto">
        
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Cart Items List */}
          <div className="w-full lg:w-7/12 flex flex-col">
            <h1 className="font-heading text-[32px] lg:text-[42px] font-medium text-brand-dark mb-8">Cart ({cart.length})</h1>

            <div className="w-full h-px bg-brand-dark/20 mb-6"></div>

            {cart.map((item) => (
              <div key={`${item.id}-${item.weight}`} className="flex py-6 border-b border-brand-dark/10 relative group">
                
                {/* Product Info */}
                <div className="flex gap-5 sm:gap-6 w-full">
                  <div className="w-[90px] h-[90px] sm:w-[110px] sm:h-[110px] bg-transparent overflow-hidden shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover mix-blend-multiply" />
                  </div>
                  
                  <div className="flex flex-col justify-start w-full">
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="font-heading text-[20px] font-medium text-brand-dark leading-tight pr-4">{item.name}</h3>
                      <p className="font-body text-[14px] sm:text-[15px] font-medium text-brand-dark">
                        ₹{(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                    
                    <p className="font-body text-[12px] sm:text-[13px] text-text-secondary mb-4">{item.weight}</p>
                    
                    <div className="flex items-center justify-between mt-auto">
                      {/* Minimal Quantity */}
                      <div className="flex items-center gap-4">
                        <button onClick={() => updateQuantity(item.id, item.weight, item.quantity - 1)} className="text-text-secondary hover:text-brand-dark p-1 -ml-1">
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="font-body text-[13px] font-medium text-brand-dark w-4 text-center">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, item.weight, item.quantity + 1)} className="text-text-secondary hover:text-brand-dark p-1">
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <button onClick={() => removeFromCart(item.id, item.weight)} className="text-[11px] text-text-muted hover:text-brand-dark transition-colors font-medium uppercase tracking-[0.1em] underline underline-offset-4">
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Minimal Order Summary */}
          <div className="w-full lg:w-5/12 pt-2 lg:pt-[84px]">
            <div className="sticky top-28 bg-transparent">
              <h2 className="font-heading text-[24px] font-medium text-brand-dark mb-6">Summary</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center font-body text-[14px] text-brand-dark">
                  <span>Subtotal</span>
                  <span>₹{total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-start font-body text-[14px] text-brand-dark">
                  <span>Shipping</span>
                  <span className="text-right text-text-secondary">Calculated later</span>
                </div>
              </div>
              
              <div className="w-full h-px bg-brand-dark/20 mb-6"></div>
              
              <div className="flex justify-between items-center font-heading text-[24px] text-brand-dark mb-10">
                <span>Total</span>
                <span>₹{total.toFixed(2)}</span>
              </div>
              
              <button 
                onClick={handleCheckout}
                className="w-full h-[54px] bg-brand-dark text-cream-off font-body text-[13px] font-bold rounded-[4px] transition-colors hover:bg-brand-hover hover:text-white uppercase tracking-[0.15em] flex items-center justify-center gap-3 mb-4"
              >
                Checkout via WhatsApp
                <ArrowRight className="w-4 h-4" />
              </button>
              
              <p className="font-body text-[11px] text-text-muted text-center leading-relaxed">
                You will be redirected to WhatsApp to complete your order.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
