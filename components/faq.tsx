'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'É seguro e discreto?',
    answer:
      'Sim! Usamos a tecnologia mais avançada de criptografia. Seu nome não aparece em lugar nenhum. Tudo é 100% seguro e privado. Sua assinatura não aparecerá no extrato do cartão de forma identificável.',
  },
  {
    question: 'Recebo o acesso na hora?',
    answer: 'Sim! O acesso é imediato. Após a confirmação do pagamento (segundos), você já tem acesso a todos os 800+ conteúdos exclusivos.',
  },
  {
    question: 'Posso cancelar quando quiser?',
    answer: 'Claro! Você pode cancelar sua assinatura a qualquer momento. Sem cobranças ocultas, sem surpresas. Só não vai mais receber novo conteúdo após o cancelamento.',
  },
  {
    question: 'Funciona no celular?',
    answer: 'Sim! Funciona perfeitamente em todos os dispositivos: celular, tablet e computador. A plataforma é totalmente responsiva.',
  },
  {
    question: 'Como faço para acessar?',
    answer: 'Após a assinatura, você recebe login e senha. Basta entrar na plataforma com seus dados. Pode acessar sempre que quiser, 24/7.',
  },
  {
    question: 'Qual é a diferença dos planos?',
    answer: 'Todos os planos têm acesso ao mesmo conteúdo! A diferença é no preço mensal. Quanto mais tempo você assinar, menor fica o valor do mês.',
  },
];

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(0);

  return (
    <section id="faq" className="py-16 md:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Dúvidas Frequentes</h2>
          <p className="text-gray-600 text-lg">Tudo que você precisa saber</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
              <button
                onClick={() => setOpenId(openId === idx ? null : idx)}
                className="w-full px-6 py-4 flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition"
              >
                <h3 className="font-bold text-gray-900 text-left">{faq.question}</h3>
                <ChevronDown
                  className={`w-5 h-5 text-orange-500 transition-transform flex-shrink-0 ${
                    openId === idx ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openId === idx && (
                <div className="px-6 py-4 bg-white border-t border-gray-200">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
          <p className="text-gray-800 mb-4">Ainda tem dúvidas? Entre em contato conosco!</p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-lg">
            💬 SUPORTE
          </button>
        </div>
      </div>
    </section>
  );
}
