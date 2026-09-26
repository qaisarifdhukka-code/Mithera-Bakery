import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent scrolling when mobile nav is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeMenu();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <>
      {/* Hamburger Button */}
      <button 
        className="flex flex-col justify-center gap-[4px] p-1 w-8 h-8 cursor-pointer z-[1001] lg:hidden items-center"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span className={`w-5 h-[1.8px] bg-brand-dark rounded-sm transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-[5.8px]' : ''}`} />
        <span className={`w-5 h-[1.8px] bg-brand-dark rounded-sm transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
        <span className={`w-5 h-[1.8px] bg-brand-dark rounded-sm transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-[5.8px]' : ''}`} />
      </button>

      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-black/50 z-[998] lg:hidden transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={closeMenu}
      />

      {/* Drawer */}
      <div className={`fixed top-0 right-0 w-[300px] h-full bg-cream-off z-[999] lg:hidden p-8 pt-[100px] overflow-y-auto transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <nav className="flex flex-col">
          <a href="/" onClick={closeMenu} className="block py-4 text-[1.1rem] font-medium text-brand-dark border-b border-brand-warm/20 transition-all hover:pl-2">Home</a>
          <a href="/shop" onClick={closeMenu} className="block py-4 text-[1.1rem] font-medium text-text-secondary hover:text-brand-dark border-b border-brand-warm/20 transition-all hover:pl-2">Shop</a>
          <a href="/story" onClick={closeMenu} className="block py-4 text-[1.1rem] font-medium text-text-secondary hover:text-brand-dark border-b border-brand-warm/20 transition-all hover:pl-2">Our Story</a>
          <a href="/gifting" onClick={closeMenu} className="block py-4 text-[1.1rem] font-medium text-text-secondary hover:text-brand-dark border-b border-brand-warm/20 transition-all hover:pl-2">Corporate Gifting</a>
          <a href="/contact" onClick={closeMenu} className="block py-4 text-[1.1rem] font-medium text-text-secondary hover:text-brand-dark border-b border-brand-warm/20 transition-all hover:pl-2">Contact</a>
          
          <a href="/shop" onClick={closeMenu} className="mt-8 flex items-center justify-center gap-2 py-3 px-7 text-[0.9rem] font-medium rounded-full bg-brand-dark text-white border-2 border-brand-dark transition-all hover:bg-brand-hover hover:-translate-y-0.5 hover:shadow-lg w-full">
            Order Now →
          </a>
        </nav>
      </div>
    </>
  );
}
