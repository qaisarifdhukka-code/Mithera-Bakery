import React, { useState } from 'react';
import { Send } from 'lucide-react';

export default function SubscribeForm() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      alert(`Thank you for subscribing with ${email}! We'll keep you updated.`);
      setEmail('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        aria-label="Email address"
        required
        className="flex-1 py-2.5 px-3.5 rounded-l border border-brand-dark/20 border-r-0 bg-cream-off text-brand-dark text-[11px] placeholder:text-brand-warm focus:outline-none"
      />
      <button
        type="submit"
        aria-label="Subscribe"
        className="py-2.5 px-4 bg-brand-dark text-cream border-none rounded-r text-[11px] font-medium transition-colors hover:bg-brand-hover flex items-center justify-center cursor-pointer"
      >
        <Send className="w-3.5 h-3.5" />
      </button>
    </form>
  );
}
