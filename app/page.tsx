'use client';

import { Suspense } from 'react';
import VerifyPageContent from '@/components/verify-page-content';

export default function VerifyPage() {
  return (
    <Suspense fallback={null}>
      <VerifyPageContent />
    </Suspense>
  );
}
