'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export function VerifyScreen() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      localStorage.setItem('privacy-verified', 'true');
      router.push('/');
    }, 6000);

    return () => clearTimeout(timer);
  }, [router]);

  return null;
}
