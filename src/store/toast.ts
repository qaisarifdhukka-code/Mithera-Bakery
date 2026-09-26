import { atom } from 'nanostores';

export interface Toast {
  id: string;
  message: string;
}

export const toastStore = atom<Toast[]>([]);

export function addToast(message: string) {
  const id = Math.random().toString(36).substring(2, 9);
  
  // Add toast
  toastStore.set([...toastStore.get(), { id, message }]);
  
  // Remove toast after 3 seconds
  setTimeout(() => {
    toastStore.set(toastStore.get().filter(t => t.id !== id));
  }, 3000);
}
