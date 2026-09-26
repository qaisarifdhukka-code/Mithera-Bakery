import React, { useState } from 'react';
import { addToast } from '../../store/toast';

export default function GiftingForm() {
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    quantity: '',
    date: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.companyName || !formData.phone) {
      addToast('Please provide your Company Name and Phone Number.');
      return;
    }

    const text = `*Corporate Gifting Inquiry*\n\n` +
      `*Company:* ${formData.companyName}\n` +
      `*Contact Person:* ${formData.contactPerson}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*Email:* ${formData.email}\n` +
      `*Est. Quantity:* ${formData.quantity}\n` +
      `*Target Date:* ${formData.date}\n\n` +
      `*Message/Requirements:*\n${formData.message}`;

    const WA_NUMBER = "919152319661";
    const waUrl = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(waUrl, '_blank');
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10 mb-10">
        <div>
          <input 
            required 
            type="text" 
            name="companyName" 
            value={formData.companyName} 
            onChange={handleChange} 
            className="w-full h-[40px] border-b border-brand-dark/20 font-body text-[14px] text-brand-dark placeholder-brand-dark/50 focus:outline-none focus:border-brand-dark transition-colors bg-transparent" 
            placeholder="Company Name *" 
          />
        </div>
        <div>
          <input 
            type="text" 
            name="contactPerson" 
            value={formData.contactPerson} 
            onChange={handleChange} 
            className="w-full h-[40px] border-b border-brand-dark/20 font-body text-[14px] text-brand-dark placeholder-brand-dark/50 focus:outline-none focus:border-brand-dark transition-colors bg-transparent" 
            placeholder="Contact Person" 
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10 mb-10">
        <div>
          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            className="w-full h-[40px] border-b border-brand-dark/20 font-body text-[14px] text-brand-dark placeholder-brand-dark/50 focus:outline-none focus:border-brand-dark transition-colors bg-transparent" 
            placeholder="Email Address" 
          />
        </div>
        <div>
          <input 
            required 
            type="tel" 
            name="phone" 
            value={formData.phone} 
            onChange={handleChange} 
            className="w-full h-[40px] border-b border-brand-dark/20 font-body text-[14px] text-brand-dark placeholder-brand-dark/50 focus:outline-none focus:border-brand-dark transition-colors bg-transparent" 
            placeholder="Phone Number *" 
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10 mb-10">
        <div>
          <select 
            name="quantity" 
            value={formData.quantity} 
            onChange={handleChange} 
            className="w-full h-[40px] border-b border-brand-dark/20 font-body text-[14px] text-brand-dark/80 focus:outline-none focus:border-brand-dark transition-colors bg-transparent appearance-none"
          >
            <option value="" disabled>Estimated Quantity</option>
            <option value="Under 50">Under 50 Boxes</option>
            <option value="50-100">50 - 100 Boxes</option>
            <option value="100-500">100 - 500 Boxes</option>
            <option value="500+">500+ Boxes</option>
          </select>
        </div>
        <div>
          <input 
            type="text" 
            name="date" 
            value={formData.date} 
            onChange={handleChange}
            onFocus={(e) => e.target.type = 'date'}
            onBlur={(e) => { if (!e.target.value) e.target.type = 'text'; }}
            className="w-full h-[40px] border-b border-brand-dark/20 font-body text-[14px] text-brand-dark placeholder-brand-dark/50 focus:outline-none focus:border-brand-dark transition-colors bg-transparent" 
            placeholder="Target Date"
          />
        </div>
      </div>
      
      <div className="mb-12">
        <textarea 
          name="message" 
          value={formData.message} 
          onChange={handleChange} 
          className="w-full h-[100px] border-b border-brand-dark/20 py-2 font-body text-[14px] text-brand-dark placeholder-brand-dark/50 focus:outline-none focus:border-brand-dark transition-colors resize-none bg-transparent" 
          placeholder="Additional Requirements / Message"
        ></textarea>
      </div>
      
      <button 
        type="submit" 
        className="inline-flex items-center justify-center bg-brand-dark text-cream-off px-10 py-4 font-body text-[13px] font-semibold rounded-[4px] hover:bg-brand-hover transition-colors"
      >
        Submit Inquiry
      </button>
    </form>
  );
}
