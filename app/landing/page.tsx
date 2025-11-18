'use client';

import { Suspense } from 'react';
import LandingPageContent from '@/components/landing-page-content';

export default function Landing() {
  return (
    <Suspense fallback={null}>
      <LandingPageContent />
    </Suspense>
  );
}
