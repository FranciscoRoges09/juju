'use client';

import { Lock, MessageSquare, Heart, Camera, Music, Shield, Zap, Eye } from 'lucide-react';

const benefits = [
  { icon: Camera, title: '800+ Fotos', desc: 'Conteúdo exclusivo e proibido' },
  { icon: Music, title: 'Vídeos Privados', desc: 'Momentos únicos em vídeo' },
  { icon: MessageSquare, title: 'Chat Privado', desc: 'Conversas diretas comigo' },
  { icon: Heart, title: 'Posts Diários', desc: 'Novo conteúdo todos os dias' },
  { icon: Eye, title: 'Bastidores', desc: 'Veja como é meu dia a dia' },
  { icon: Zap, title: 'Acesso Imediato', desc: 'Comece agora mesmo' },
  { icon: Shield, title: 'Pagamento Seguro', desc: 'Proteção garantida' },
  { icon: Lock, title: 'Totalmente Discreto', desc: 'Privacidade 100% garantida' },
];

export default function BenefitsSection() {
  return (
    <section id="benefits" className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">O Que Você Recebe</h2>
          <p className="text-gray-600 text-lg">Tudo que você sempre desejou em um único lugar</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit) => {
            const IconComponent = benefit.icon;
            return (
              <div
                key={benefit.title}
                className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border border-gray-200 hover:border-orange-300 hover:shadow-lg transition text-center"
              >
                <div className="bg-orange-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="text-orange-500 w-7 h-7" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-600">{benefit.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
