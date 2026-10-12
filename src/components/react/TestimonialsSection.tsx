import React, { useRef } from 'react';
import { ArrowLeft, ArrowRight, Star, ExternalLink } from 'lucide-react';

const defaultTestimonials = [
  { text: '"The Kaju Katli is simply out of this world! Perfect sweetness, melt-in-the-mouth texture and pure silver leaf. Our entire family orders exclusively from Mithera for all our festivals."', author: 'Priya Sharma', loc: 'Kandivali, Mumbai', avatar: 'P', rating: '5.0' },
  { text: '"Best bakery and mithai fusion in town. The sourdough bread is remarkably authentic and the dry fruit halwa has the rich, genuine aroma of pure desi ghee. 10/10 recommend!"', author: 'Rahul Verma', loc: 'Borivali, Mumbai', avatar: 'R', rating: '5.0' },
  { text: '"Ordered custom gift hampers for our corporate Diwali gifts. The bespoke gold packaging and fresh assortments won over every client. Seamless service and prompt delivery."', author: 'Anita Desai', loc: 'Malad, Mumbai', avatar: 'A', rating: '5.0' },
  { text: '"Freshly prepared everyday! You can genuinely taste the premium quality nuts, real saffron, and purity. Their customer service on WhatsApp is also extremely responsive."', author: 'Karan Mehta', loc: 'Mumbai', avatar: 'K', rating: '5.0' }
];

export default function TestimonialsSection({ data }: { data?: any }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const buttonText = data?.buttonText || 'Read All Google Reviews';
  const buttonUrl = data?.buttonUrl || 'https://maps.google.com/?q=Mithera+Sweets+Kandivali+West+Mumbai';

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current && scrollRef.current.firstElementChild) {
      const cardWidth = (scrollRef.current.firstElementChild as HTMLElement).clientWidth + 16;
      const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="testimonials" className="py-12 lg:py-16 bg-cream relative overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-[150px] h-full opacity-10 pointer-events-none" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath fill='none' stroke='%238C6A4A' stroke-width='0.5' d='M0,80 Q25,40 40,80 T100,50'/%3E%3Cpath fill='none' stroke='%238C6A4A' stroke-width='0.5' d='M0,30 Q30,10 50,50'/%3E%3C/svg%3E\")", backgroundRepeat: 'no-repeat', backgroundPosition: 'left center' }}></div>

      <div className="container relative z-10 px-4 lg:px-[40px]">
        
        {/* Top Header Row with Google Badge & Nav Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4 reveal">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full border border-brand-warm/20 mb-3">
              {/* Google G Icon */}
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
              </svg>
              <span className="font-body text-[11px] font-semibold text-brand-dark tracking-wide uppercase">
                {data?.tagline || 'Google Verified Reviews'}
              </span>
              <div className="flex items-center gap-0.5 text-brand-gold">
                {[1, 2, 3, 4, 5].map((_, idx) => (
                  <Star key={idx} className="w-3 h-3 fill-current text-[#E5A93C]" />
                ))}
              </div>
            </div>

            <h2 className="font-heading text-[24px] sm:text-[32px] lg:text-[42px] font-medium text-brand-dark leading-tight">
              {data?.title || 'Loved by Thousands of Sweet Connoisseurs'}
            </h2>
          </div>

          {/* Navigation Arrows (Desktop Only) */}
          <div className="hidden md:flex items-center gap-3 self-end shrink-0">
            <button 
              onClick={() => scroll('left')} 
              className="w-10 h-10 rounded-full bg-white border border-brand-dark/15 text-brand-dark flex items-center justify-center cursor-pointer transition-all hover:bg-brand-dark hover:text-white shadow-sm"
              aria-label="Previous Testimonial"
            >
              <ArrowLeft className="w-4 h-4" strokeWidth={2} />
            </button>
            <button 
              onClick={() => scroll('right')} 
              className="w-10 h-10 rounded-full bg-white border border-brand-dark/15 text-brand-dark flex items-center justify-center cursor-pointer transition-all hover:bg-brand-dark hover:text-white shadow-sm"
              aria-label="Next Testimonial"
            >
              <ArrowRight className="w-4 h-4" strokeWidth={2} />
            </button>
          </div>
        </div>

        {/* Scroll Snap Slider */}
        <div 
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-6"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {(data?.items || defaultTestimonials).map((t: any, i: number) => {
            const ratingNum = t.rating || '5.0';
            return (
              <div 
                key={i} 
                className="snap-center shrink-0 flex flex-col justify-between bg-white border border-brand-warm/15 rounded-xl p-5 sm:p-6 lg:p-7 shadow-[0_2px_10px_rgba(58,36,26,0.04)] w-[85vw] max-w-[340px] sm:max-w-none sm:w-[360px] lg:w-[380px]"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((_, sIdx) => (
                        <Star key={sIdx} className="w-4 h-4 fill-current text-[#E5A93C]" />
                      ))}
                    </div>
                    <span className="font-body text-xs font-semibold text-brand-dark bg-cream-light px-2 py-0.5 rounded">
                      {ratingNum} ★
                    </span>
                  </div>

                  <p className="font-body text-[14px] lg:text-[15px] leading-relaxed text-[#5C4C42] mb-6">
                    {t.text}
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-brand-dark/10">
                  <div className="w-10 h-10 rounded-full bg-[#3A241A] text-[#FAF5F0] flex items-center justify-center font-heading font-semibold text-[15px] shrink-0 shadow-sm">
                    {t.avatar || (t.author ? t.author.charAt(0) : 'M')}
                  </div>
                  <div className="flex flex-col justify-center">
                    <h3 className="font-heading font-medium text-[15px] text-brand-dark m-0 leading-tight">
                      {t.author}
                    </h3>
                    <p className="font-body text-[12px] text-text-muted m-0 mt-0.5">
                      {t.loc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Button for Google Review reading/writing */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
          <a
            href={buttonUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#3A241A] text-white px-7 py-3 rounded-full font-body text-[13px] font-semibold hover:bg-brand-hover shadow-md hover:-translate-y-0.5 transition-all no-underline"
          >
            <span>{buttonText}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
}

