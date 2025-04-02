'use client'

import toast, { Toaster } from 'react-hot-toast';

interface HotToastProps {
  message: string;
  description: string;
  duration?: number;
}

const HotToast: React.FC<HotToastProps> = ({ message, description, duration }) => {
  return (
    <div>
      <button onClick={() => toast.success(message)}>{description}</button>
      <Toaster toastOptions={{ duration }}/>
    </div>
  );
}

export default HotToast;