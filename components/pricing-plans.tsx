'use client';

import { Check, Zap } from 'lucide-react';

const plans = [
  {
    name: '30 Dias',
    price: 14.9,
    oldPrice: 29.9,
    discount: '50%',
    popular: true,
    features: ['Acesso completo', 'Fotos e vídeos', 'Chat privado', 'Cancelar quando quiser'],
    badge: 'MAIS POPULAR 🔥',
    link: 'https://www.seguropagamentos.com.br/priv',
  },
  {
    name: '3 Meses',
    price: 29.9,
    oldPrice: 59.7,
    discount: '50%',
    popular: false,
    features: ['Tudo do plano 30 dias', 'Economia de R$ 29,80', 'Acesso contínuo', 'Melhor custo-benefício'],
    badge: 'ECONOMIZE 💰',
    link: 'https://seguropagamentos.com.br/PRIV0003',
  },
  {
    name: '1 Ano',
    price: 49.9,
    oldPrice: 178.8,
    discount: '72%',
    popular: false,
    features: ['Tudo do plano 3 meses', 'Economia de R$ 128,90', 'Acesso ilimitado', 'MELHOR OFERTA'],
    badge: 'MELHOR OFERTA ⭐',
    link: 'https://seguropagamentos.com.br/PRIV100',
  },
];

export default function PricingPlans() {
  return (
    <section id="pricing" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Escolha Seu Plano</h2>
          <p className="text-gray-600 text-lg">Todos os planos com os mesmos benefícios premium</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl overflow-hidden shadow-lg transition transform hover:scale-105 ${
                plan.popular
                  ? 'bg-gradient-to-br from-orange-500 to-orange-600 text-white md:scale-105 md:shadow-2xl'
                  : 'bg-white'
              }`}
            >
              {/* Badge */}
              <div className={`text-center py-3 font-bold text-sm ${plan.popular ? 'bg-orange-600' : 'bg-orange-100 text-orange-600'}`}>
                {plan.badge}
              </div>

              <div className="p-8 space-y-6">
                <div>
                  <h3 className={`text-2xl font-bold mb-4 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>{plan.name}</h3>

                  {/* Pricing */}
                  <div className="space-y-2">
                    <div className="flex items-baseline gap-2">
                      <span className={`text-4xl font-bold ${plan.popular ? 'text-white' : 'text-black'}`}>R$ {plan.price.toFixed(2)}</span>
                      <span className={`text-sm line-through ${plan.popular ? 'text-orange-200' : 'text-gray-400'}`}>R$ {plan.oldPrice.toFixed(2)}</span>
                    </div>
                    <div className={`text-sm font-semibold ${plan.popular ? 'text-orange-100' : 'text-orange-600'}`}>
                      Economize {plan.discount}!
                    </div>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className={`flex items-start gap-3 ${plan.popular ? 'text-orange-50' : 'text-gray-700'}`}>
                      <Check className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a href={plan.link} target="_blank" rel="noopener noreferrer">
                  <button
                    className={`w-full py-3 px-6 rounded-lg font-bold transition transform hover:scale-105 ${
                      plan.popular
                        ? 'bg-white text-orange-600 hover:bg-gray-100'
                        : 'bg-orange-500 hover:bg-orange-600 text-white'
                    }`}
                  >
                    🔓 DESTRAVAR AGORA
                  </button>
                </a>

                <div className="text-xs text-center opacity-75">
                  💳 Pagamento seguro | Cancele quando quiser
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Security Badge */}
        <div className="mt-12 text-center">
          <div className="inline-block bg-green-50 border border-green-200 rounded-lg px-6 py-3">
            <p className="text-sm text-gray-700">
              🛡️ <strong>Pagamento 100% seguro e discreto</strong> - Seus dados estão protegidos
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
