import React, { useState, useEffect, useRef } from 'react';
import { Search, X } from 'lucide-react';
import { allProducts } from '../../data/products';

export default function SearchOverlay() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setQuery('');
    }
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const results = allProducts.filter(p => 
    p.name.toLowerCase().includes(query.toLowerCase()) || 
    p.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="bg-transparent border-none p-1 cursor-pointer flex items-center justify-center text-brand-dark transition-opacity hover:opacity-70" 
        aria-label="Search"
      >
        <Search className="w-[18px] h-[18px] lg:w-[21px] lg:h-[21px]" strokeWidth={1.5} />
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-[9999] bg-cream-off/95 backdrop-blur-sm flex flex-col items-center pt-24 px-6 overflow-y-auto">
          <button 
            onClick={() => setIsOpen(false)}
            className="absolute top-6 right-6 lg:top-10 lg:right-10 p-2 text-brand-dark hover:opacity-70 transition-opacity"
            aria-label="Close search"
          >
            <X size={32} strokeWidth={1} />
          </button>

          <div className="w-full max-w-2xl relative mb-12">
            <Search className="absolute left-0 top-1/2 -translate-y-1/2 text-brand-dark/50" size={28} strokeWidth={1} />
            <input 
              ref={inputRef}
              type="text" 
              placeholder="Search for sweets, cookies..." 
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full bg-transparent border-b-2 border-brand-dark/20 text-brand-dark text-2xl lg:text-4xl py-4 pl-12 focus:outline-none focus:border-brand-dark placeholder:text-brand-dark/30 transition-colors font-heading"
            />
          </div>

          <div className="w-full max-w-2xl flex flex-col gap-4 pb-20">
            {query.length > 0 && results.length > 0 ? (
              <div className="flex flex-col gap-6">
                <p className="text-brand-dark/60 font-medium uppercase tracking-widest text-sm">Products</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {results.map(product => (
                    <a 
                      key={product.id} 
                      href={`/product/${product.slug}`}
                      className="flex items-center gap-4 p-3 rounded-lg hover:bg-black/5 transition-colors no-underline group"
                    >
                      <img src={product.image} alt={product.name} className="w-16 h-16 object-cover rounded-md" />
                      <div className="flex flex-col">
                        <span className="font-heading text-xl text-brand-dark group-hover:text-brand-hover transition-colors">{product.name}</span>
                        <span className="text-sm text-brand-dark/60 font-medium">{product.price}</span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            ) : query.length > 0 ? (
              <div className="text-center py-12">
                <p className="text-brand-dark/60 text-lg">No products found for "{query}"</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-4 opacity-50">
                {/* Popular searches suggestions could go here */}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
