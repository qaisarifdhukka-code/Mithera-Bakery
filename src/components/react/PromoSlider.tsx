import React, { useRef, useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

export default function PromoSlider() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

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
          {/* Slide 1: Gift Hampers */}
          <div className="w-full shrink-0 snap-start px-1 lg:px-2">
            <div className="group relative flex flex-col lg:flex-row items-center rounded-[8px] h-[220px] lg:h-[280px] overflow-hidden bg-[#F9EBE6] shadow-[0_2px_8px_rgba(58,36,26,0.03)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_16px_rgba(58,36,26,0.06)]">
              <div className="absolute inset-0 lg:left-auto lg:right-0 lg:w-[55%] z-0 promo-mask">
                <div className="absolute inset-0 bg-gradient-to-r from-[#F9EBE6] from-[25%] via-[#F9EBE6]/80 via-[40%] to-transparent to-[55%] lg:hidden z-10"></div>
                <img 
                  src="/images/hero-image.png" 
                  alt="Curated Gift Hampers" 
                  className="w-full h-full object-cover object-center transition-transform duration-700" 
                  loading="lazy"
                />
              </div>
              <div className="relative z-20 p-5 lg:p-0 lg:pl-[40px] w-full lg:w-[45%] flex flex-col justify-center h-full items-start mt-auto lg:mt-0 pb-5 lg:pb-0">
                <p className="font-body text-[9px] lg:text-[11px] font-semibold tracking-[1.5px] text-brand-warm uppercase mb-1.5 max-w-[55%] lg:max-w-none">FOR YOUR SPECIAL MOMENTS</p>
                <h3 className="font-heading text-[22px] lg:text-[34px] font-medium text-brand-dark leading-[1.05] mb-2.5 max-w-[55%] lg:max-w-none">Beautifully<br/>Curated<br/>Gift Hampers</h3>
                <p className="font-body text-[12px] lg:text-[13px] font-normal text-text-secondary leading-[1.4] max-w-[55%] lg:max-w-[280px] mb-4">A perfect blend of traditional sweets and baked delights for every occasion.</p>
                <a href="/shop" className="inline-flex items-center justify-center w-[100px] lg:w-[120px] h-[34px] lg:h-[38px] bg-brand-dark text-white text-[11px] lg:text-[12px] font-medium rounded-[4px] transition-colors hover:bg-brand-hover shadow-sm">
                  Explore <ArrowRight className="ml-1.5 w-3 h-3" strokeWidth={2} />
                </a>
              </div>
            </div>
          </div>

          {/* Slide 2: Bakery Banner */}
          <div className="w-full shrink-0 snap-start px-1 lg:px-2">
            <div className="group relative flex flex-col lg:flex-row items-center rounded-[8px] h-[220px] lg:h-[280px] overflow-hidden bg-[#F3ECE2] shadow-[0_2px_8px_rgba(58,36,26,0.03)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_16px_rgba(58,36,26,0.06)]">
              <div className="absolute inset-0 lg:left-auto lg:right-0 lg:w-[55%] z-0 promo-mask">
                <div className="absolute inset-0 bg-gradient-to-r from-[#F3ECE2] from-[25%] via-[#F3ECE2]/80 via-[40%] to-transparent to-[55%] lg:hidden z-10"></div>
                <img 
                  src="/images/hero-image.png" 
                  alt="Fresh from our oven" 
                  className="w-full h-full object-cover object-center transition-transform duration-700" 
                  loading="lazy"
                />
              </div>
              <div className="relative z-20 p-5 lg:p-0 lg:pl-[40px] w-full lg:w-[45%] flex flex-col justify-center h-full items-start mt-auto lg:mt-0 pb-5 lg:pb-0">
                <p className="font-body text-[9px] lg:text-[11px] font-semibold tracking-[1.5px] text-brand-warm uppercase mb-1.5 max-w-[55%] lg:max-w-none">FRESHLY BAKED EVERYDAY</p>
                <h3 className="font-heading text-[22px] lg:text-[34px] font-medium text-brand-dark leading-[1.05] mb-2.5 max-w-[55%] lg:max-w-none">From Our<br/>Oven to You</h3>
                <p className="font-body text-[12px] lg:text-[13px] font-normal text-text-secondary leading-[1.4] max-w-[55%] lg:max-w-[280px] mb-4">Croissants, breads, puffs and more — baked fresh with premium ingredients.</p>
                <a href="/shop" className="inline-flex items-center justify-center w-[100px] lg:w-[120px] h-[34px] lg:h-[38px] bg-transparent text-brand-dark border-[1.5px] border-brand-dark text-[11px] lg:text-[12px] font-medium rounded-[4px] transition-all hover:bg-brand-dark hover:text-white">
                  Browse <ArrowRight className="ml-1.5 w-3 h-3" strokeWidth={2} />
                </a>
              </div>
            </div>
          </div>
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
