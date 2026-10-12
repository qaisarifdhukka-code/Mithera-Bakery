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
                className="w-full h-[54px] bg-[#25D366] text-white font-body text-[13px] font-bold rounded-[8px] transition-all hover:bg-[#1EBE5D] hover:shadow-lg uppercase tracking-[0.1em] flex items-center justify-center gap-2.5 mb-4"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
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
