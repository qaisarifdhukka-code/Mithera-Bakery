import React from 'react';
import { Leaf, ChefHat, Gift, ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="hero" className="relative flex flex-col lg:block overflow-hidden min-h-[750px] lg:min-h-0 lg:h-[540px]" style={{ backgroundColor: '#E8DACD' }}>
      
      {/* Background Image Container */}
      <div 
        className="absolute inset-0 lg:left-auto lg:right-0 lg:w-[52%] z-0"
      >
        <div 
          className="w-full h-full relative"
        >
          {/* Mobile Overlays for text readability (hidden on desktop) */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#E8DACD] from-[30%] via-[#E8DACD]/80 via-[45%] to-transparent to-[60%] lg:hidden z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#E8DACD] from-[15%] via-[#E8DACD]/70 via-[35%] to-transparent to-[60%] lg:hidden z-10"></div>
          
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
            className="block lg:hidden w-full h-[calc(100%+2px)] object-cover object-center animate-slow-zoom absolute -bottom-[1px]"
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

      {/* Text Content Container (Mobile: top aligned, Desktop: left aligned container) */}
      <div className="container relative z-20 flex items-center lg:h-[540px] pt-[60px] pb-12 lg:pt-0 lg:pb-0">
        <div className="w-full lg:w-[50%] lg:max-w-[500px] text-left">
          
          <p className="font-body text-[12px] lg:text-[13px] font-semibold tracking-[1.8px] text-[#8C6A4A] uppercase mb-4 reveal">
            Traditional Flavours, Modern Craftsmanship
          </p>
          
          <h1 className="font-heading text-[38px] lg:text-[58px] leading-[1.05] font-medium text-[#3A241A] mb-4 reveal reveal-delay-1">
            Bringing<br className="hidden lg:block" /> Sweetness to<br />
            Every Occasion
          </h1>
          
          <p className="font-body text-[15px] lg:text-[16px] text-[#6D5E54] leading-[1.55] mb-[26px] max-w-[400px] reveal reveal-delay-2">
            From timeless Indian sweets to freshly baked delights, crafted with the finest ingredients and a lot of love.
          </p>
          
          <div className="flex gap-[14px] mb-[32px] reveal reveal-delay-3">
            <a href="/shop" className="group inline-flex items-center justify-center bg-[#3A241A] text-[#F6F0E6] w-[130px] lg:w-[140px] h-[48px] rounded-[8px] text-[14px] font-medium transition-all hover:bg-[#2a1911] shadow-md hover:-translate-y-[2px]">
              Order Now <ArrowRight className="w-[16px] h-[16px] ml-1.5 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2} />
            </a>
            <a href="#categories" className="group inline-flex items-center justify-center bg-transparent border-[1.5px] border-[rgba(58,36,26,0.3)] text-[#3A241A] w-[130px] lg:w-[140px] h-[48px] rounded-[8px] text-[14px] font-medium transition-all hover:border-[#3A241A] hover:bg-brand-dark/5 hover:-translate-y-[2px]">
              Explore Menu
            </a>
          </div>
          
          <div className="hidden md:flex flex-col sm:flex-row gap-5 lg:gap-[24px] reveal reveal-delay-4 pt-2 lg:pt-0">
            <div className="flex items-center gap-[12px]">
              <Leaf className="w-[22px] h-[22px] text-[#C9A26F] shrink-0" strokeWidth={1.5} />
              <span className="font-body text-[13px] lg:text-[12px] text-[#6D5E54] font-medium tracking-[0.2px] leading-[1.3]">
                Pure &<br className="hidden lg:block" /> Premium Ingredients
              </span>
            </div>
            <div className="flex items-center gap-[12px]">
              <ChefHat className="w-[22px] h-[22px] text-[#C9A26F] shrink-0" strokeWidth={1.5} />
              <span className="font-body text-[13px] lg:text-[12px] text-[#6D5E54] font-medium tracking-[0.2px] leading-[1.3]">
                Freshly Made<br className="hidden lg:block" /> Everyday
              </span>
            </div>
            <div className="flex items-center gap-[12px]">
              <Gift className="w-[22px] h-[22px] text-[#C9A26F] shrink-0" strokeWidth={1.5} />
              <span className="font-body text-[13px] lg:text-[12px] text-[#6D5E54] font-medium tracking-[0.2px] leading-[1.3]">
                Perfect for<br className="hidden lg:block" /> Gifting & Celebrations
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
