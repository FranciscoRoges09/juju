'use client';

import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Marina S.',
    text: 'Adorei! Melhor assinatura que fiz, super vale a pena! 🔥',
    rating: 5,
  },
  {
    name: 'Carolina P.',
    text: 'Conteúdo INCRÍVEL e atendimento excelente. Muito bom mesmo!',
    rating: 5,
  },
  {
    name: 'Alessandra L.',
    text: 'Totalmente discreto e seguro. Recomendo para todas!',
    rating: 5,
  },
];

export default function SocialProof() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Stats */}
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-500 mb-2">5,243</div>
            <p className="text-gray-700">Assinantes ativos</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-500 mb-2">4.9★</div>
            <p className="text-gray-700">Classificação média</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-500 mb-2">847</div>
            <p className="text-gray-700">Subscreveram esta semana</p>
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
              <p className="font-bold text-gray-900">— {testimonial.name}</p>
            </div>
          ))}
        </div>

        {/* Trust Badge */}
        <div className="text-center mt-12">
          <div className="inline-block">
            <p className="text-gray-600">Confiam em nós:</p>
            <div className="flex gap-4 justify-center mt-4">
              <div className="text-center">
                <div className="text-2xl">✓</div>
                <p className="text-xs text-gray-600">Seguro</p>
              </div>
              <div className="text-center">
                <div className="text-2xl">🔒</div>
                <p className="text-xs text-gray-600">Discreto</p>
              </div>
              <div className="text-center">
                <div className="text-2xl">⚡</div>
                <p className="text-xs text-gray-600">Rápido</p>
              </div>
              <div className="text-center">
                <div className="text-2xl">💯</div>
                <p className="text-xs text-gray-600">Confiável</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
