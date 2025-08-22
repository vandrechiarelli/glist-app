'use client'

import toast, { Toaster } from 'react-hot-toast';
import { HotToastProps } from '@/types/hot-toast-props';

const HotToast: React.FC<HotToastProps> = ({ message, description, duration }) => {
  return (
    <div>
      <button onClick={() => toast.success(message)}>{description}</button>
      <Toaster toastOptions={{ duration }}/>
    </div>
  );
}

export default HotToast;