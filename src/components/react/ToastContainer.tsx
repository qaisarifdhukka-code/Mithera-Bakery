import React from 'react';
import { useStore } from '@nanostores/react';
import { toastStore } from '../../store/toast';
import { Check } from 'lucide-react';

export default function ToastContainer() {
  const toasts = useStore(toastStore);

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col gap-3 pointer-events-none">
      {toasts.map((toast) => (
        <div key={toast.id} className="bg-brand-dark text-cream-off px-6 py-4 rounded-[4px] shadow-2xl flex items-center gap-3 animate-slide-up pointer-events-auto border border-brand-warm/20">
          <div className="w-5 h-5 rounded-full bg-[#DBA540] flex items-center justify-center shrink-0">
            <Check className="w-3.5 h-3.5 text-brand-dark" strokeWidth={3} />
          </div>
          <p className="font-body text-[13px] font-medium tracking-wide">{toast.message}</p>
        </div>
      ))}
    </div>
  );
}
