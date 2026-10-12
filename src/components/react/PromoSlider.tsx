import React, { useRef, useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const defaultPromos = [
  {
    tagline: "Festive Exclusive",
    title: "Handcrafted Traditional Mithai",
    subtitle: "Pure desi ghee sweets in signature luxury boxes, crafted fresh daily for celebrations.",
    btnText: "Order Mithai",
    btnLink: "/shop?category=Indian+Sweets",
    image: "/images/hero-image.png"
  },
  {
    tagline: "Artisanal Bakery",
    title: "Fresh French Patisserie",
    subtitle: "Flaky golden croissants, handcrafted sourdough breads, and artisanal tea cookies.",
    btnText: "Explore Bakery",
    btnLink: "/shop?category=Bakery+Items",
    image: "/images/1 (5).png"
  }
];

export default function PromoSlider({ data }: { data?: any[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const promos = (data && data.length > 0) ? data : defaultPromos;

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -scrollRef.current.clientWidth : scrollRef.current.clientWidth;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      setActiveIndex(direction === 'left' ? 0 : 1);
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const index = Math.round(scrollRef.current.scrollLeft / scrollRef.current.clientWidth);
      setActiveIndex(index);
    }
  };

  return (
    <section id="promo" className="py-[30px] lg:py-[35px] bg-cream relative">
      <div className="container px-4 lg:px-[40px] relative">
        
        {/* Slider Navigation Arrows (Desktop) */}
        <div className="hidden lg:flex absolute top-1/2 -translate-y-1/2 left-0 right-0 justify-between px-0 z-20 pointer-events-none">
          <button onClick={() => scroll('left')} className="pointer-events-auto p-2 flex items-center justify-center text-brand-dark hover:opacity-70 transition-opacity disabled:opacity-30" disabled={activeIndex === 0}>
            <ChevronLeft className="w-8 h-8 lg:w-10 lg:h-10" strokeWidth={1.5} />
          </button>
          <button onClick={() => scroll('right')} className="pointer-events-auto p-2 flex items-center justify-center text-brand-dark hover:opacity-70 transition-opacity disabled:opacity-30" disabled={activeIndex === 1}>
            <ChevronRight className="w-8 h-8 lg:w-10 lg:h-10" strokeWidth={1.5} />
          </button>
        </div>

        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {promos.map((promo, index) => (
            <div key={index} className="w-full shrink-0 snap-start px-1 lg:px-2">
              <div 
                className="group relative flex flex-col lg:flex-row items-stretch rounded-[16px] lg:rounded-[12px] overflow-hidden shadow-[0_4px_16px_rgba(58,36,26,0.05)] transition-all duration-300 hover:shadow-[0_8px_24px_rgba(58,36,26,0.08)] lg:h-[280px]" 
                style={{ backgroundColor: index % 2 === 0 ? '#F9EBE6' : '#F3ECE2' }}
              >
                {/* Top Image on Mobile / Right Masked Image on Desktop */}
                <div className="w-full h-[180px] sm:h-[220px] lg:h-full lg:w-[55%] lg:absolute lg:top-0 lg:right-0 relative overflow-hidden z-0 promo-mask shrink-0">
                  <img 
                    src={promo.image || "/images/hero-image.png"} 
                    alt={promo.title} 
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105" 
                    loading="lazy"
                  />
                </div>

                {/* Content Area: Below Image on Mobile / Left Column on Desktop */}
                <div className="relative z-10 p-5 sm:p-6 lg:p-0 lg:pl-[40px] w-full lg:w-[45%] flex flex-col justify-center items-start lg:h-full">
                  <p className="font-body text-[10px] sm:text-[11px] font-semibold tracking-[1.5px] text-brand-warm uppercase mb-1.5">{promo.tagline}</p>
                  <h3 className="font-heading text-[22px] sm:text-[26px] lg:text-[32px] font-medium text-brand-dark leading-[1.15] mb-2.5 whitespace-pre-line">{promo.title}</h3>
                  <p className="font-body text-[13px] sm:text-[14px] font-normal text-text-secondary leading-[1.5] max-w-[420px] mb-4 sm:mb-5 whitespace-pre-line">{promo.subtitle}</p>
                  <a 
                    href={promo.btnLink} 
                    className={`inline-flex items-center justify-center px-6 h-[40px] text-[12px] sm:text-[13px] font-semibold rounded-[8px] transition-all shadow-sm ${
                      index % 2 === 0 
                        ? 'bg-brand-dark text-white hover:bg-brand-hover' 
                        : 'bg-transparent text-brand-dark border-[1.5px] border-brand-dark hover:bg-brand-dark hover:text-white'
                    }`}
                  >
                    {promo.btnText} <ArrowRight className="ml-1.5 w-3.5 h-3.5" strokeWidth={2} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile dots indicator */}
        <div className="flex lg:hidden justify-center gap-2 mt-4">
          <div className={`w-2 h-2 rounded-full transition-all ${activeIndex === 0 ? 'bg-brand-dark w-4' : 'bg-brand-dark/20'}`} />
          <div className={`w-2 h-2 rounded-full transition-all ${activeIndex === 1 ? 'bg-brand-dark w-4' : 'bg-brand-dark/20'}`} />
        </div>
      </div>
    </section>
  );
}
