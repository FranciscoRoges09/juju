'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Image from 'next/image';

export default function VerifyPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [progress, setProgress] = useState(0);
  const [isVerified, setIsVerified] = useState(false);

  useEffect(() => {
    const utmParams = new URLSearchParams();
    const utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'fbclid', 'gclid', 'msclkid', 'ttclid'];
    
    utmKeys.forEach(key => {
      const value = searchParams.get(key);
      if (value) {
        utmParams.append(key, value);
      }
    });

    if (utmParams.toString()) {
      localStorage.setItem('utmParams', utmParams.toString());
    }

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setIsVerified(true);
          clearInterval(interval);
          localStorage.setItem('privacy-verified', 'true');
          
          if (window.utmify && window.utmify.track) {
            window.utmify.track('page_view', {
              page: 'verification_page',
              event: 'verification_completed'
            });
          }
          
          setTimeout(() => {
            router.push('/landing');
          }, 1000);
          return 100;
        }
        return prev + (100 / 60);
      });
    }, 100);

    return () => clearInterval(interval);
  }, [router, searchParams]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <Image 
            src="/logo-privacy.webp" 
            alt="Privacy" 
            width={60}
            height={60}
            className="mx-auto"
            priority
          />
        </div>

        <h1 className="text-3xl font-bold text-black mb-2">Verificação de Segurança</h1>
        <p className="text-gray-600 mb-8">Confirmando que você não é um robô...</p>

        <div className="bg-white rounded-2xl shadow-xl p-8 mb-6">
          <div className="mb-6">
            {!isVerified ? (
              <div className="w-16 h-16 mx-auto bg-orange-100 rounded-full flex items-center justify-center animate-pulse">
                <div className="w-8 h-8 border-4 border-orange-200 border-t-orange-500 rounded-full animate-spin" />
              </div>
            ) : (
              <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            )}
          </div>

          <div className="mb-6">
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-green-400 to-green-500 transition-all duration-100 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <p className="text-sm text-gray-600">
            {isVerified ? (
              <span className="text-green-600 font-semibold">✓ Verificação concluída! Redirecionando...</span>
            ) : (
              <span>{Math.round(progress)}% completo</span>
            )}
          </p>
        </div>

        <p className="text-xs text-gray-500">
          Este processo leva aproximadamente 6 segundos para confirmar que você é humano.
        </p>
      </div>
    </div>
  );
}
