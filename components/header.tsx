'use client';

import { Clock } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Header() {
  const [ctaUrl, setCtaUrl] = useState('#');

  useEffect(() => {
    const buildUrlWithUtm = () => {
      const baseUrl = '/checkout';
      const utmParams = localStorage.getItem('utmParams');
      
      if (utmParams) {
        return `${baseUrl}?${utmParams}`;
      }
      return baseUrl;
    };

    setCtaUrl(buildUrlWithUtm());

    if (window.utmify && window.utmify.track) {
      window.utmify.track('page_view', {
        page: 'landing_page',
        event: 'landing_page_viewed'
      });
    }
  }, []);

  const handleCtaClick = () => {
    if (window.utmify && window.utmify.track) {
      window.utmify.track('event', {
        event_type: 'cta_click',
        page: 'header'
      });
    }
  };

  return (
    <>
      {/* Urgency Banner */}
      <div className="fixed top-0 w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white text-center py-3 z-50 shadow-lg">
        <div className="flex items-center justify-center gap-2 font-bold text-sm md:text-base">
          <Clock className="w-4 h-4" />
          <span>🔥 PROMOÇÃO VÁLIDA ATÉ 18/11/2025 - APROVEITE AGORA!</span>
        </div>
      </div>


      {/* Main Navigation */}
      <nav className="bg-white border-b border-gray-200 pt-14">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Image 
              src="/logo-privacy.webp" 
              alt="Privacy Logo" 
              width={100} 
              height={100}
              priority
            />
          </div>
          <div className="hidden md:flex gap-8 text-gray-600">
            <a href="#benefits" className="hover:text-orange-500 transition">
              Benefícios
            </a>
            <a href="#pricing" className="hover:text-orange-500 transition">
              Planos
            </a>
            <a href="#faq" className="hover:text-orange-500 transition">
              FAQ
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
