import React, { useState } from 'react';
import { Star, Search, Filter } from 'lucide-react';
import { categories, allProducts } from '../../data/products';
import WishlistButton from './WishlistButton';

export default function ShopFilter() {
  const [activeCategory, setActiveCategory] = useState(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      return params.get('category') || 'All';
    }
    return 'All';
  });
  const [searchQuery, setSearchQuery] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Filter logic
  const filteredProducts = allProducts.filter(product => {
    const matchesCategory = activeCategory === 'All' || product.category === activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="py-12 lg:py-20">
      <div className="container">
        
        {/* Header & Controls */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 mb-12">
          
          <div className="text-center lg:text-left w-full lg:w-auto">
            <h1 className="font-heading text-[36px] lg:text-[48px] font-medium text-brand-dark mb-2">Our Menu</h1>
            <p className="font-body text-[14px] text-text-secondary">Discover our artisanal sweets and freshly baked goods.</p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
            {/* Search */}
            <div className="relative w-full sm:w-[250px]">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" strokeWidth={1.5} />
              <input 
                type="text" 
                placeholder="Search products..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border border-brand-dark/10 rounded-full pl-10 pr-4 py-2.5 font-body text-[13px] text-brand-dark focus:outline-none focus:border-brand-warm focus:ring-1 focus:ring-brand-warm transition-all"
              />
            </div>
            {/* Mobile Filter Button (Optional expansion) */}
            <button className="hidden sm:flex items-center gap-2 bg-white border border-brand-dark/10 rounded-full px-5 py-2.5 font-body text-[13px] text-brand-dark font-medium hover:bg-cream transition-colors">
              <Filter className="w-4 h-4" strokeWidth={1.5} /> Filters
            </button>
          </div>
        </div>

        {/* Categories Mobile Custom Dropdown */}
        <div className="mb-8 md:hidden relative w-full mt-4 sm:mt-0 z-50">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="w-full flex items-center justify-between bg-white border border-brand-dark/10 rounded-full px-5 py-3.5 font-body text-[14px] text-brand-dark font-medium shadow-sm focus:outline-none focus:border-brand-warm focus:ring-1 focus:ring-brand-warm"
          >
            <span>{activeCategory}</span>
            <svg className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
          </button>
          
          {isDropdownOpen && (
            <>
              <div className="fixed inset-0 z-40" onClick={() => setIsDropdownOpen(false)} />
              <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-[16px] border border-brand-dark/10 shadow-lg z-50 overflow-hidden py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => {
                      setActiveCategory(category);
                      setIsDropdownOpen(false);
                    }}
                    className={`w-full text-left px-5 py-3 font-body text-[14px] font-medium transition-colors ${
                      activeCategory === category 
                        ? 'bg-brand-warm/10 text-brand-dark' 
                        : 'text-text-secondary hover:bg-cream hover:text-brand-dark'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>

        {/* Categories Pills (Desktop) */}
        <div className="hidden md:flex flex-wrap gap-2 lg:gap-3 mb-10 pb-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`whitespace-nowrap px-5 py-2.5 rounded-full font-body text-[13px] font-medium transition-all ${
                activeCategory === category 
                  ? 'bg-brand-dark text-cream-off shadow-md' 
                  : 'bg-white text-text-secondary border border-brand-dark/10 hover:border-brand-dark/30 hover:text-brand-dark'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 lg:gap-5">
            {filteredProducts.map((product) => (
              <a
                href={`/product/${product.slug}`}
                key={product.id}
                className="group flex flex-col bg-white rounded-[8px] overflow-hidden transition-all duration-300 hover:-translate-y-1 shadow-[0_2px_6px_rgba(58,36,26,0.04)] hover:shadow-[0_8px_16px_rgba(58,36,26,0.08)] border border-brand-warm/10 h-full"
              >
                <div className="w-full h-[110px] lg:h-[160px] relative bg-cream shrink-0 overflow-hidden">
                  <WishlistButton productId={product.id} />
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Category Tag overlay on hover */}
                  <div className="absolute top-2 left-2 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full text-[9px] font-semibold text-brand-dark uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {product.category}
                  </div>
                </div>
                <div className="flex flex-col p-2 lg:p-[12px] grow">
                  <h3 className="font-body text-[11px] lg:text-[13px] font-semibold text-brand-dark mb-1 leading-tight">{product.name}</h3>
                  <p className="font-body text-[11px] lg:text-[13px] font-semibold text-brand-dark mb-1.5 lg:mb-2">{product.price}</p>
                  <div className="flex items-center gap-1 mb-auto pb-2">
                    <Star className="w-[10px] h-[10px] lg:w-[12px] lg:h-[12px] text-brand-gold fill-brand-gold" strokeWidth={1} />
                    <span className="font-body text-[9px] lg:text-[11px] font-medium text-text-secondary">{product.rating}</span>
                    <span className="font-body text-[9px] lg:text-[11px] font-medium text-text-secondary">({product.reviews})</span>
                  </div>
                  <button 
                    onClick={(e) => { 
                      e.preventDefault(); 
                      import('../../store/cart').then(({ addToCart, parsePrice }) => {
                        addToCart({
                          id: product.id,
                          name: product.name,
                          price: parsePrice(product.price),
                          quantity: 1,
                          weight: product.weight || 'Standard',
                          image: product.image
                        });
                        import('../../store/toast').then(({ addToast }) => {
                          addToast(`${product.name} added to cart!`);
                        });
                      });
                    }}
                    className="w-full h-[32px] lg:h-[40px] bg-brand-dark text-cream text-[10px] lg:text-[12px] font-medium rounded-[4px] border-none cursor-pointer transition-colors hover:bg-brand-hover flex items-center justify-center mt-auto"
                  >
                    Add to Cart
                  </button>
                </div>
              </a>
            ))}
        </div>
        
        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <h3 className="font-heading text-[24px] text-brand-dark mb-2">No products found</h3>
            <p className="font-body text-[14px] text-text-secondary">Try adjusting your filters or search query.</p>
            <button 
              onClick={() => { setActiveCategory('All'); setSearchQuery(''); }}
              className="mt-6 font-body text-[13px] font-medium text-brand-warm hover:text-brand-dark underline"
            >
              Clear all filters
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
