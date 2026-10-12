import React, { useState } from 'react';
import { Leaf, ChefHat, Gift, ArrowRight } from 'lucide-react';

export default function HeroSection({ data }: { data?: any }) {
  const [exploreClicked, setExploreClicked] = useState(false);

  const safeData = data || {
    tagline: 'Signature Collection',
    title: 'Handcrafted Sweets\n& Artisanal Bakes',
    subtitle: 'Experience the authentic taste of premium ingredients and generations of sweet-making expertise.',
    primaryBtnText: 'Order Now',
    primaryBtnLink: '/shop',
    secondaryBtnText: 'View Range',
    secondaryBtnLink: '/shop?category=Indian+Sweets',
    feature1: '100% Pure\nVegetarian',
    feature2: 'Freshly\nPrepared',
    feature3: 'Premium\nQuality',
    desktopImage: '/images/hero-image.png',
    mobileImage: '/images/mobile.png',
  };

  return (
    <section id="hero" className="relative bg-cream overflow-hidden">
      
      {/* ── MOBILE LAYOUT (Image Top, Big Bold Text Below) ── */}
      <div className="flex flex-col lg:hidden w-full">
        
        {/* Top: Mobile Hero Image */}
        <div className="w-full relative h-[300px] sm:h-[380px] overflow-hidden shadow-sm">
          <img 
            src={safeData.mobileImage || "/images/mobile.png"} 
            alt="Mithera Signature Sweets Collection" 
            className="w-full h-full object-cover object-center animate-slow-zoom"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-cream via-transparent to-black/20"></div>
          
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-semibold tracking-wider text-[#3A241A] uppercase shadow-sm">
            {safeData.tagline}
          </div>
        </div>

        {/* Bottom: Big Text Content & CTAs */}
        <div className="px-5 pt-6 pb-12 text-left relative z-10">
          <p className="font-body text-[12px] font-semibold tracking-[2px] text-[#8C6A4A] uppercase mb-2">
            {safeData.tagline}
          </p>

          <h1 className="font-heading text-[30px] sm:text-[40px] leading-[1.12] font-bold text-[#3A241A] mb-3 whitespace-pre-line">
            {safeData.title}
          </h1>

          <p className="font-body text-[15px] sm:text-[16px] text-[#6D5E54] leading-[1.55] mb-6">
            {safeData.subtitle}
          </p>

          <div className="flex flex-row gap-3 mb-8">
            <a 
              href={safeData.primaryBtnLink} 
              className="flex-1 inline-flex items-center justify-center bg-[#3A241A] text-[#F6F0E6] h-[50px] rounded-[8px] text-[15px] font-semibold transition-all hover:bg-[#2a1911] shadow-md active:scale-95"
            >
              {safeData.primaryBtnText} <ArrowRight className="w-4 h-4 ml-1.5" strokeWidth={2} />
            </a>
            
            <a 
              href={safeData.secondaryBtnLink} 
              onClick={() => setExploreClicked(true)}
              className={`flex-1 inline-flex items-center justify-center border-2 border-[#3A241A] h-[50px] rounded-[8px] text-[15px] font-semibold transition-all shadow-sm active:scale-95 ${
                exploreClicked 
                  ? 'bg-[#3A241A] text-[#FAF5F0]' 
                  : 'bg-white text-[#3A241A] hover:bg-[#3A241A] hover:text-[#FAF5F0]'
              }`}
            >
              {safeData.secondaryBtnText}
            </a>
          </div>

          {/* Feature Badges on Mobile */}
          <div className="grid grid-cols-3 gap-2 pt-2 border-t border-[#8C6A4A]/20">
            <div className="flex items-center gap-2">
              <Leaf className="w-4 h-4 text-[#8C6A4A] shrink-0" strokeWidth={1.5} />
              <span className="font-body text-[11px] text-[#3A241A] font-semibold leading-tight whitespace-pre-line">
                {safeData.feature1}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <ChefHat className="w-4 h-4 text-[#8C6A4A] shrink-0" strokeWidth={1.5} />
              <span className="font-body text-[11px] text-[#3A241A] font-semibold leading-tight whitespace-pre-line">
                {safeData.feature2}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Gift className="w-4 h-4 text-[#8C6A4A] shrink-0" strokeWidth={1.5} />
              <span className="font-body text-[11px] text-[#3A241A] font-semibold leading-tight whitespace-pre-line">
                {safeData.feature3}
              </span>
            </div>
          </div>
        </div>

      </div>

      {/* ── DESKTOP LAYOUT (Tightened Spacing, Rich Visuals) ── */}
      <div className="hidden lg:block relative h-[530px] xl:h-[550px]">
        
        {/* Background Image Container (Tightened width & gap) */}
        <div className="absolute right-0 top-0 bottom-0 w-[55%] z-0 overflow-hidden">
          <img 
            src={safeData.desktopImage || "/images/hero-image.png"} 
            alt="Mithera signature collection of Indian sweets and bakery items" 
            className="w-full h-full object-cover object-center lg:hero-mask animate-slow-zoom"
            loading="eager"
          />
          {/* Subtle brand strip text on the right edge */}
          <div className="hidden 2xl:flex absolute right-8 top-1/2 -translate-y-1/2 flex-col items-center gap-4 z-10">
            <div className="text-[11px] font-body tracking-[3px] text-[#3A241A] uppercase font-semibold opacity-70" style={{ writingMode: 'vertical-rl' }}>
              Handcrafted · Pure Ghee · Kandivali Mumbai
            </div>
            <div className="w-[1px] h-[50px] bg-[#3A241A] opacity-40"></div>
          </div>
        </div>

        {/* Decorative Floral Patterns */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.06] z-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 100 100\'%3E%3Cpath d=\'M0,50 Q20,20 50,0 Q50,40 10,40 Q10,80 50,80 Q20,80 0,50 Z\' fill=\'none\' stroke=\'%23B8860B\' stroke-width=\'0.5\'/%3E%3Cpath d=\'M0,0 Q50,0 50,50 Q0,50 0,0 Z\' fill=\'none\' stroke=\'%23B8860B\' stroke-width=\'0.25\'/%3E%3C/svg%3E")', backgroundRepeat: 'no-repeat', backgroundSize: '250px', backgroundPosition: 'top left' }}></div>

        {/* Desktop Text Container (Tightened spacing between text and right image) */}
        <div className="container h-full flex items-center relative z-20">
          <div className="w-[50%] max-w-[540px] text-left pr-4">
            
            <p className="font-body text-[13px] font-semibold tracking-[2px] text-[#8C6A4A] uppercase mb-3 reveal">
              {safeData.tagline}
            </p>
            
            <h1 className="font-heading text-[52px] xl:text-[60px] leading-[1.04] font-medium text-[#3A241A] mb-4 reveal reveal-delay-1 whitespace-pre-line">
              {safeData.title}
            </h1>
            
            <p className="font-body text-[16px] text-[#6D5E54] leading-[1.55] mb-[28px] max-w-[440px] reveal reveal-delay-2">
              {safeData.subtitle}
            </p>
            
            <div className="flex gap-[16px] mb-[34px] reveal reveal-delay-3">
              <a 
                href={safeData.primaryBtnLink} 
                className="group inline-flex items-center justify-center bg-[#3A241A] text-[#F6F0E6] w-[145px] h-[48px] rounded-[8px] text-[14px] font-medium transition-all hover:bg-[#2a1911] shadow-md hover:-translate-y-[2px]"
              >
                {safeData.primaryBtnText} <ArrowRight className="w-[16px] h-[16px] ml-1.5 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2} />
              </a>
              
              <a 
                href={safeData.secondaryBtnLink} 
                onClick={() => setExploreClicked(true)}
                className={`group inline-flex items-center justify-center border-2 border-[#3A241A] w-[145px] h-[48px] rounded-[8px] text-[14px] font-medium transition-all hover:-translate-y-[2px] shadow-sm ${
                  exploreClicked 
                    ? 'bg-[#3A241A] text-[#FAF5F0]' 
                    : 'bg-transparent text-[#3A241A] hover:bg-[#3A241A] hover:text-[#FAF5F0]'
                }`}
              >
                {safeData.secondaryBtnText}
              </a>
            </div>
            
            <div className="flex flex-row gap-[24px] reveal reveal-delay-4 pt-1">
              <div className="flex items-center gap-[10px]">
                <Leaf className="w-[20px] h-[20px] text-[#C9A26F] shrink-0" strokeWidth={1.5} />
                <span className="font-body text-[12px] text-[#6D5E54] font-medium leading-[1.3] whitespace-pre-line">
                  {safeData.feature1}
                </span>
              </div>
              <div className="flex items-center gap-[10px]">
                <ChefHat className="w-[20px] h-[20px] text-[#C9A26F] shrink-0" strokeWidth={1.5} />
                <span className="font-body text-[12px] text-[#6D5E54] font-medium leading-[1.3] whitespace-pre-line">
                  {safeData.feature2}
                </span>
              </div>
              <div className="flex items-center gap-[10px]">
                <Gift className="w-[20px] h-[20px] text-[#C9A26F] shrink-0" strokeWidth={1.5} />
                <span className="font-body text-[12px] text-[#6D5E54] font-medium leading-[1.3] whitespace-pre-line">
                  {safeData.feature3}
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>

    </section>
  );
}

