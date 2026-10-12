import React, { useState } from 'react';
import { addToast } from '../../store/toast';

export default function GiftingForm() {
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    occasion: 'Corporate Gifting',
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
      addToast('Please provide your Company / Organization Name and Phone Number.');
      return;
    }

    const text = `*Corporate & Festive Gifting Inquiry*\n\n` +
      `*Company / Name:* ${formData.companyName}\n` +
      `*Contact Person:* ${formData.contactPerson || 'N/A'}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*Email:* ${formData.email || 'N/A'}\n` +
      `*Occasion:* ${formData.occasion}\n` +
      `*Est. Quantity:* ${formData.quantity || 'Flexible'}\n` +
      `*Target Date:* ${formData.date || 'To be decided'}\n\n` +
      `*Requirements / Customization Notes:*\n${formData.message || 'Please share your gifting catalogue and pricing.'}`;

    const WA_NUMBER = "919930309063";
    const waUrl = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(waUrl, '_blank');
  };

  return (
    <form onSubmit={handleSubmit} className="w-full bg-white p-6 sm:p-8 rounded-[16px] shadow-[0_4px_20px_rgba(58,36,26,0.06)] border border-brand-warm/15">
      <div className="mb-6">
        <h3 className="font-heading text-[22px] text-brand-dark mb-1">Request a Custom Quote</h3>
        <p className="font-body text-[13px] text-text-secondary">We customize boxes, branding, and assortment to your exact requirements.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6 mb-6">
        <div>
          <label className="block font-body text-[12px] font-semibold text-brand-dark mb-1">Company / Group Name *</label>
          <input 
            required 
            type="text" 
            name="companyName" 
            value={formData.companyName} 
            onChange={handleChange} 
            className="w-full h-[42px] px-3.5 border border-brand-dark/20 rounded-[8px] font-body text-[14px] text-brand-dark placeholder-brand-dark/40 focus:outline-none focus:border-brand-warm focus:ring-1 focus:ring-brand-warm transition-all bg-cream/30" 
            placeholder="e.g. Acme Technologies" 
          />
        </div>
        <div>
          <label className="block font-body text-[12px] font-semibold text-brand-dark mb-1">Contact Person</label>
          <input 
            type="text" 
            name="contactPerson" 
            value={formData.contactPerson} 
            onChange={handleChange} 
            className="w-full h-[42px] px-3.5 border border-brand-dark/20 rounded-[8px] font-body text-[14px] text-brand-dark placeholder-brand-dark/40 focus:outline-none focus:border-brand-warm focus:ring-1 focus:ring-brand-warm transition-all bg-cream/30" 
            placeholder="e.g. Rahul Sharma" 
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6 mb-6">
        <div>
          <label className="block font-body text-[12px] font-semibold text-brand-dark mb-1">Phone Number *</label>
          <input 
            required 
            type="tel" 
            name="phone" 
            value={formData.phone} 
            onChange={handleChange} 
            className="w-full h-[42px] px-3.5 border border-brand-dark/20 rounded-[8px] font-body text-[14px] text-brand-dark placeholder-brand-dark/40 focus:outline-none focus:border-brand-warm focus:ring-1 focus:ring-brand-warm transition-all bg-cream/30" 
            placeholder="+91 9930309063" 
          />
        </div>
        <div>
          <label className="block font-body text-[12px] font-semibold text-brand-dark mb-1">Email Address</label>
          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            className="w-full h-[42px] px-3.5 border border-brand-dark/20 rounded-[8px] font-body text-[14px] text-brand-dark placeholder-brand-dark/40 focus:outline-none focus:border-brand-warm focus:ring-1 focus:ring-brand-warm transition-all bg-cream/30" 
            placeholder="rahul@example.com" 
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-6 mb-6">
        <div>
          <label className="block font-body text-[12px] font-semibold text-brand-dark mb-1">Occasion</label>
          <select 
            name="occasion" 
            value={formData.occasion} 
            onChange={handleChange} 
            className="w-full h-[42px] px-3 border border-brand-dark/20 rounded-[8px] font-body text-[13px] text-brand-dark focus:outline-none focus:border-brand-warm focus:ring-1 focus:ring-brand-warm transition-all bg-cream/30"
          >
            <option value="Corporate Gifting">Corporate Gifting</option>
            <option value="Diwali & Festivals">Diwali & Festivals</option>
            <option value="Weddings & Receptions">Weddings & Receptions</option>
            <option value="Employee Appreciation">Employee Appreciation</option>
            <option value="Personal Celebration">Personal Celebration</option>
          </select>
        </div>
        <div>
          <label className="block font-body text-[12px] font-semibold text-brand-dark mb-1">Est. Quantity</label>
          <select 
            name="quantity" 
            value={formData.quantity} 
            onChange={handleChange} 
            className="w-full h-[42px] px-3 border border-brand-dark/20 rounded-[8px] font-body text-[13px] text-brand-dark focus:outline-none focus:border-brand-warm focus:ring-1 focus:ring-brand-warm transition-all bg-cream/30"
          >
            <option value="">Select quantity</option>
            <option value="25 - 50 Boxes">25 – 50 Boxes</option>
            <option value="50 - 100 Boxes">50 – 100 Boxes</option>
            <option value="100 - 500 Boxes">100 – 500 Boxes</option>
            <option value="500+ Boxes">500+ Boxes</option>
          </select>
        </div>
        <div>
          <label className="block font-body text-[12px] font-semibold text-brand-dark mb-1">Target Date</label>
          <input 
            type="date" 
            name="date" 
            value={formData.date} 
            onChange={handleChange}
            className="w-full h-[42px] px-3 border border-brand-dark/20 rounded-[8px] font-body text-[13px] text-brand-dark focus:outline-none focus:border-brand-warm focus:ring-1 focus:ring-brand-warm transition-all bg-cream/30" 
          />
        </div>
      </div>
      
      <div className="mb-6">
        <label className="block font-body text-[12px] font-semibold text-brand-dark mb-1">Customization Requirements / Notes</label>
        <textarea 
          name="message" 
          rows={3}
          value={formData.message} 
          onChange={handleChange} 
          className="w-full px-3.5 py-2.5 border border-brand-dark/20 rounded-[8px] font-body text-[14px] text-brand-dark placeholder-brand-dark/40 focus:outline-none focus:border-brand-warm focus:ring-1 focus:ring-brand-warm transition-all resize-none bg-cream/30" 
          placeholder="E.g. Logo packaging, dry fruit preference, budget per box..."
        ></textarea>
      </div>
      
      <button 
        type="submit" 
        className="w-full inline-flex items-center justify-center gap-2.5 bg-[#25D366] text-white px-8 py-3.5 font-body text-[14px] font-bold rounded-[8px] hover:bg-[#1EBE5D] transition-colors shadow-md"
      >
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
        Send Inquiry via WhatsApp
      </button>
    </form>
  );
}
