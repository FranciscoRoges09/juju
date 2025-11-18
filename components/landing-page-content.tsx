'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/header';
import CreatorShowcase from '@/components/creator-showcase';
import BenefitsSection from '@/components/benefits-section';
import PricingPlans from '@/components/pricing-plans';
import ContentGallery from '@/components/content-gallery';
import SocialProof from '@/components/social-proof';
import FAQ from '@/components/faq';
import Footer from '@/components/footer';

export default function LandingPageContent() {
  const router = useRouter();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const verified = localStorage.getItem('privacy-verified');
    if (!verified) {
      router.push('/');
    } else {
      setIsReady(true);
    }
  }, [router]);

  if (!isReady) {
    return null;
  }

  return (
    <div className="bg-white">
      <Header />
      <main>
        <CreatorShowcase />
        <BenefitsSection />
        <PricingPlans />
        <ContentGallery />
        <SocialProof />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
