import React from 'react';
import { Leaf, ChefHat, Gift, ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="hero" className="relative flex flex-col lg:block overflow-hidden min-h-[750px] lg:min-h-0 lg:h-[540px]" style={{ backgroundColor: '#F3EDE3' }}>
      
      {/* Background Image Container */}
      <div 
        className="absolute inset-0 lg:left-auto lg:right-0 lg:w-[52%] z-0"
      >
        <div 
          className="w-full h-full relative"
        >
          {/* Mobile Overlay for text readability (hidden on desktop) */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#F3EDE3]/95 via-[#F3EDE3]/70 to-transparent lg:hidden z-10"></div>
          
          {/* Desktop Image */}
          <img 
            src="/images/hero-image.png" 
            alt="Mithera signature collection of Indian sweets and bakery items" 
            className="hidden lg:block w-full h-full object-cover object-center lg:hero-mask animate-slow-zoom"
            loading="eager"
          />
          {/* Mobile Image */}
          <img 
            src="/images/mobile.png" 
            alt="Mithera mobile signature collection" 
            className="block lg:hidden w-full h-full object-cover object-center animate-slow-zoom"
            loading="eager"
          />
        </div>
        
        {/* Brand Detail Text (Right side text like in demo, absolute over the image) */}
        <div className="hidden 2xl:flex absolute right-10 top-1/2 -translate-y-1/2 flex-col items-center gap-4 z-10">
          <div className="text-[11px] font-body tracking-[3px] text-brand-dark uppercase" style={{ writingMode: 'vertical-rl' }}>
            Sweets · Bakery · Happiness · Always
          </div>
          <div className="w-[1px] h-[50px] bg-brand-dark opacity-50"></div>
        </div>
      </div>

      {/* Decorative Floral Background Textures */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none opacity-[0.06] z-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 100 100\'%3E%3Cpath d=\'M0,50 Q20,20 50,0 Q50,40 10,40 Q10,80 50,80 Q20,80 0,50 Z\' fill=\'none\' stroke=\'%23B8860B\' stroke-width=\'0.5\'/%3E%3Cpath d=\'M0,0 Q50,0 50,50 Q0,50 0,0 Z\' fill=\'none\' stroke=\'%23B8860B\' stroke-width=\'0.25\'/%3E%3C/svg%3E")', backgroundRepeat: 'no-repeat', backgroundSize: '250px', backgroundPosition: 'top left' }}></div>
      <div className="hidden lg:block absolute inset-0 pointer-events-none opacity-[0.06] z-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 100 100\'%3E%3Cpath d=\'M0,50 Q20,20 50,0 Q50,40 10,40 Q10,80 50,80 Q20,80 0,50 Z\' fill=\'none\' stroke=\'%23B8860B\' stroke-width=\'0.5\'/%3E%3Cpath d=\'M0,0 Q50,0 50,50 Q0,50 0,0 Z\' fill=\'none\' stroke=\'%23B8860B\' stroke-width=\'0.25\'/%3E%3C/svg%3E")', backgroundRepeat: 'no-repeat', backgroundSize: '250px', backgroundPosition: 'bottom left', transform: 'scaleY(-1) rotate(-90deg)' }}></div>

      {/* Text Content Container (Mobile: top/order-1, Desktop: left aligned container) */}
      <div className="container relative z-10 order-1 lg:order-none flex items-center lg:h-[540px] pt-[40px] pb-[30px] lg:pt-0 lg:pb-0">
        <div className="w-full lg:w-[50%] lg:max-w-[500px] text-left">
          
          <p className="font-body text-[11px] font-semibold tracking-[1.8px] text-[#8C6A4A] uppercase mb-4 reveal">
            Traditional Flavours, Modern Craftsmanship
          </p>
          
          <h1 className="font-heading text-[42px] lg:text-[58px] leading-[1.05] font-medium text-[#3A241A] mb-4 reveal reveal-delay-1">
            Bringing<br />
            Sweetness to<br />
            Every Occasion
          </h1>
          
          <p className="font-body text-[14px] text-[#6D5E54] leading-[1.55] mb-[26px] max-w-[400px] reveal reveal-delay-2">
            From timeless Indian sweets to freshly baked delights, crafted with the finest ingredients and a lot of love.
          </p>
          
          <div className="flex gap-[14px] mb-[32px] reveal reveal-delay-3">
            <a href="/shop" className="group inline-flex items-center justify-center bg-[#3A241A] text-[#F6F0E6] w-[120px] h-[44px] rounded-[6px] text-[13px] font-medium transition-all hover:bg-[#2a1911] hover:shadow-lg hover:-translate-y-[2px]">
              Order Now <ArrowRight className="w-[14px] h-[14px] ml-1.5 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2} />
            </a>
            <a href="#categories" className="group inline-flex items-center justify-center bg-transparent border border-[rgba(58,36,26,0.4)] text-[#3A241A] w-[120px] h-[44px] rounded-[6px] text-[13px] font-medium transition-all hover:border-[#3A241A] hover:bg-brand-dark/5 hover:-translate-y-[2px]">
              Explore Menu
            </a>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 lg:gap-[24px] reveal reveal-delay-4">
            <div className="flex items-center gap-[10px]">
              <Leaf className="w-[20px] h-[20px] text-[#C9A26F] shrink-0" strokeWidth={1.5} />
              <span className="font-body text-[11px] text-[#6D5E54] font-medium tracking-[0.2px] leading-[1.4]">
                Pure &<br />Premium Ingredients
              </span>
            </div>
            <div className="flex items-center gap-[10px]">
              <ChefHat className="w-[20px] h-[20px] text-[#C9A26F] shrink-0" strokeWidth={1.5} />
              <span className="font-body text-[11px] text-[#6D5E54] font-medium tracking-[0.2px] leading-[1.4]">
                Freshly Made<br />Everyday
              </span>
            </div>
            <div className="flex items-center gap-[10px]">
              <Gift className="w-[20px] h-[20px] text-[#C9A26F] shrink-0" strokeWidth={1.5} />
              <span className="font-body text-[11px] text-[#6D5E54] font-medium tracking-[0.2px] leading-[1.4]">
                Perfect for<br />Gifting & Celebrations
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
