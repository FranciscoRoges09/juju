'use client';

import Image from 'next/image';
import { useEffect } from 'react';

export default function Footer() {
  useEffect(() => {
    if (window.utmify && window.utmify.track) {
      window.utmify.track('page_view', {
        page: 'footer_section',
        event: 'footer_viewed'
      });
    }
  }, []);

  return (
    <footer className="bg-black text-gray-300 py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-center mb-12">
          <Image 
            src="/logo-privacy.webp" 
            alt="Privacy Logo" 
            width={160} 
            height={160}
            className="opacity-90 hover:opacity-100 transition"
            priority
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Plataforma</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-orange-500 transition">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 transition">
                  Contato
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 transition">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-orange-500 transition">
                  Termos
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 transition">
                  Privacidade
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 transition">
                  Cookies
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-4">Suporte</h4>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-orange-500 transition cursor-pointer">📧 support@privacy.com</li>
              <li className="hover:text-orange-500 transition cursor-pointer">💬 Chat 24/7</li>
              <li className="hover:text-orange-500 transition cursor-pointer">🔔 Reportar Problema</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; 2025 Privacy Premium. Todos os direitos reservados.</p>
          <p>🛡️ Segurança SSL 256-bit | Pagamentos certificados</p>
        </div>
      </div>
    </footer>
  );
}
