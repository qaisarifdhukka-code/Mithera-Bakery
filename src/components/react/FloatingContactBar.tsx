import React, { useState, useEffect } from 'react';
import { Phone, X } from 'lucide-react';

function WhatsAppIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
  );
}

export default function FloatingContactBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const PHONE_NUMBER = "9930309063";
  const WA_LINK = `https://wa.me/91${PHONE_NUMBER}?text=${encodeURIComponent("Hello Mithera Sweets! I would like to inquire about sweets & bakery orders.")}`;
  const CALL_LINK = `tel:${PHONE_NUMBER}`;

  return (
    <div className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-[999] flex flex-col items-end gap-2.5">
      
      {/* Quick Action Floating Buttons */}
      <div className={`flex flex-col gap-2.5 transition-all duration-300 ${isOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none md:opacity-100 md:translate-y-0 md:pointer-events-auto'}`}>
        
        {/* Direct Call Button */}
        <a
          href={CALL_LINK}
          aria-label="Call Mithera Sweets"
          className="flex items-center gap-2.5 bg-white text-[#3A241A] px-3.5 py-2.5 rounded-full shadow-[0_4px_16px_rgba(58,36,26,0.15)] border border-[#8C6A4A]/20 hover:bg-[#FAF5F0] hover:scale-105 transition-all text-xs font-semibold no-underline group/call"
        >
          <div className="w-8 h-8 rounded-full bg-[#3A241A] text-[#FAF5F0] flex items-center justify-center shrink-0">
            <Phone className="w-4 h-4" />
          </div>
          <span className="hidden sm:inline font-body text-[12px] pr-1">Call Us</span>
        </a>

        {/* WhatsApp Direct Chat */}
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="flex items-center gap-2.5 bg-[#25D366] text-white px-3.5 py-2.5 rounded-full shadow-[0_4px_16px_rgba(37,211,102,0.35)] hover:bg-[#20ba59] hover:scale-105 transition-all text-xs font-semibold no-underline group/wa"
        >
          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0">
            <WhatsAppIcon className="w-4 h-4 text-white" />
          </div>
          <span className="hidden sm:inline font-body text-[12px] pr-1">WhatsApp</span>
        </a>
      </div>

      {/* Mobile Toggle / Floating Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle WhatsApp & call contact options"
        className="md:hidden w-12 h-12 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_6px_20px_rgba(37,211,102,0.45)] hover:bg-[#20ba59] active:scale-95 transition-all"
      >
        {isOpen ? (
          <X className="w-5 h-5 text-white" />
        ) : (
          <WhatsAppIcon className="w-6 h-6 text-white" />
        )}
      </button>

    </div>
  );
}
