import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqSectionProps {
  data?: {
    tagline?: string;
    title?: string;
    items?: FaqItem[];
  };
  faqs?: FaqItem[];
  title?: string;
  tagline?: string;
}

export default function FaqSection({ data, faqs, title, tagline }: FaqSectionProps) {
  const items = faqs || data?.items || [];
  const sectionTitle = title || data?.title || 'Frequently Asked Questions';
  const sectionTagline = tagline || data?.tagline || 'Common Inquiries';

  // If no items in CMS, section is completely hidden as per requirements!
  if (!items || items.length === 0) {
    return null;
  }

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faqs" className="py-14 lg:py-20 bg-cream">
      <div className="container max-w-4xl px-4 mx-auto">
        
        {/* Header */}
        <div className="text-center mb-10 reveal">
          <span className="font-body text-xs font-semibold tracking-[0.2em] uppercase text-brand-warm block mb-2">
            {sectionTagline}
          </span>
          <h2 className="font-heading text-[32px] lg:text-[44px] font-medium text-brand-dark leading-tight">
            {sectionTitle}
          </h2>
        </div>

        {/* Accordions */}
        <div className="space-y-3.5">
          {items.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div 
                key={idx}
                className="bg-white/90 rounded-xl border border-brand-warm/15 overflow-hidden transition-all duration-200 shadow-sm"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between p-5 text-left font-heading text-[17px] lg:text-[19px] font-medium text-brand-dark hover:text-brand-warm transition-colors focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="pr-4">{item.question}</span>
                  <div className={`w-8 h-8 rounded-full bg-cream-light flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-brand-dark text-white' : 'text-brand-dark'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 font-body text-[14px] lg:text-[15px] text-text-secondary leading-relaxed border-t border-brand-dark/5">
                    <p className="m-0">{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
