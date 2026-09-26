import React, { useRef } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const testimonials = [
  { text: '"Authentic taste and amazing quality. Their sweets always remind me of home."', author: 'Anjali S.', loc: 'Mumbai', avatar: 'A' },
  { text: '"Great variety of both sweets and bakery items. Perfect for gifting. Highly recommended!"', author: 'Rahul M.', loc: 'Mumbai', avatar: 'R' },
  { text: '"Freshly made and beautifully packed. Our go-to place for every celebration!"', author: 'Priya K.', loc: 'Mumbai', avatar: 'P' },
  { text: '"Absolutely delicious! The Kaju Katli melts in your mouth."', author: 'Vikram D.', loc: 'Pune', avatar: 'V' }
];

export default function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="testimonials" className="py-[30px] lg:py-[35px] bg-cream relative overflow-hidden">
      {/* Background SVG overlays (simplified as purely visual elements) */}
      <div className="absolute top-0 left-0 w-[120px] h-full opacity-10 pointer-events-none" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath fill='none' stroke='%238C6A4A' stroke-width='0.5' d='M0,80 Q25,40 40,80 T100,50'/%3E%3Cpath fill='none' stroke='%238C6A4A' stroke-width='0.5' d='M0,30 Q30,10 50,50'/%3E%3C/svg%3E\")", backgroundRepeat: 'no-repeat', backgroundPosition: 'left center' }}></div>
      <div className="absolute top-0 right-0 w-[120px] h-full opacity-10 pointer-events-none" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath fill='none' stroke='%238C6A4A' stroke-width='0.5' d='M100,80 Q75,40 60,80 T0,50'/%3E%3Cpath fill='none' stroke='%238C6A4A' stroke-width='0.5' d='M100,30 Q70,10 50,50'/%3E%3C/svg%3E\")", backgroundRepeat: 'no-repeat', backgroundPosition: 'right center' }}></div>

      <div className="container relative z-10 px-4 lg:px-[40px]">
        <div className="flex justify-between items-end mb-3 lg:mb-[20px] reveal">
          <div>
            <p className="font-body text-[8px] lg:text-[11px] font-semibold tracking-[1px] lg:tracking-[1.8px] text-brand-warm uppercase mb-1 lg:mb-2">TESTIMONIALS</p>
            <h2 className="font-heading text-[18px] sm:text-[22px] lg:text-[34px] font-medium text-brand-dark leading-none mb-0">What Our Customers Say</h2>
          </div>
          <div className="flex gap-2">
            <button onClick={() => scroll('left')} className="w-[24px] h-[24px] lg:w-[30px] lg:h-[30px] rounded-full bg-cream border border-[#8C6A4A]/20 text-text-secondary flex items-center justify-center cursor-pointer transition-colors hover:bg-brand-warm hover:text-white" aria-label="Previous">
              <ArrowLeft className="w-3 h-3 lg:w-4 lg:h-4" />
            </button>
            <button onClick={() => scroll('right')} className="w-[24px] h-[24px] lg:w-[30px] lg:h-[30px] rounded-full bg-cream border border-[#8C6A4A]/20 text-text-secondary flex items-center justify-center cursor-pointer transition-colors hover:bg-brand-warm hover:text-white" aria-label="Next">
              <ArrowRight className="w-3 h-3 lg:w-4 lg:h-4" />
            </button>
          </div>
        </div>

        {/* CSS Scroll Snap Container */}
        <div 
          ref={scrollRef}
          className="flex gap-2 lg:gap-[16px] overflow-x-auto overflow-y-hidden snap-x snap-mandatory no-scrollbar pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {testimonials.map((t, i) => (
            <div 
              key={i} 
              className={`reveal reveal-delay-${(i % 5) + 1} snap-start shrink-0 flex flex-col bg-cream-off border border-[#5C3723]/10 rounded-[6px] p-2 lg:p-[14px] min-h-[80px] lg:min-h-[100px] w-[calc(50%-4px)] lg:w-[calc(33.333%-11px)]`}
            >
              <div className="text-[7px] lg:text-[11px] tracking-[1px] lg:tracking-[2px] text-brand-gold mb-1 lg:mb-2">★★★★★</div>
              <p className="font-body text-[8px] lg:text-[11px] leading-[1.3] lg:leading-[1.4] text-text-secondary mb-2 lg:mb-3 grow" dangerouslySetInnerHTML={{ __html: t.text }}></p>
              <div className="flex items-center gap-1.5 lg:gap-2">
                <div className="w-[18px] h-[18px] lg:w-[26px] lg:h-[26px] rounded-full bg-cream flex items-center justify-center font-semibold text-[8px] lg:text-[11px] text-brand-dark shrink-0">
                  {t.avatar}
                </div>
                <div className="flex flex-col justify-center">
                  <p className="font-semibold text-[8px] lg:text-[11px] text-brand-dark m-0 leading-tight">{t.author}</p>
                  <p className="text-[7px] lg:text-[10px] text-text-secondary m-0 leading-tight">{t.loc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
