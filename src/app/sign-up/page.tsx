'use client';

import { useEffect } from 'react';

export default function SignUpPage() {
  useEffect(() => {
    // Redirect to email
    window.location.href = 'mailto:kyle@ktp-training.com?subject=Free Session Request';
  }, []);

  return (
    <div className="pt-20 min-h-screen bg-[#111] flex items-center justify-center">
      <div className="max-w-md mx-auto px-4 text-center">
        <h1 className="text-3xl font-bold text-white mb-4">Contact Us</h1>
        <p className="text-gray-300 mb-8">
          Opening your email client to contact kyle@ktp-training.com...
        </p>
        <p className="text-gray-400 text-sm">
          If your email client doesn&apos;t open,{' '}
          <a
            href="mailto:kyle@ktp-training.com?subject=Free Session Request"
            className="text-[#2071fe] hover:underline"
          >
            click here
          </a>
        </p>
      </div>
    </div>
  );
}
