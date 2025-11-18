'use client';

export default function CreatorShowcase() {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white pt-24 pb-12 md:pb-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Creator Image */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-orange-200 via-orange-100 to-yellow-50 rounded-2xl overflow-hidden relative shadow-xl">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Jt88vYzwfd6W-MQFneeALD6PTbrDLh5NR0IeiBNLwzz.jpg"
                alt="Creator julianabonde"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

              {/* Badge */}
              <div className="absolute top-6 right-6 bg-orange-500 text-white px-4 py-2 rounded-full font-bold text-lg shadow-lg transform -rotate-12">
                50% OFF
              </div>

              {/* Stats */}
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur px-4 py-3 rounded-lg shadow-lg">
                <div className="flex gap-6 text-sm font-bold">
                  <div className="text-center">
                    <div className="text-gray-600">401</div>
                    <div className="text-gray-500 text-xs">posts</div>
                  </div>
                  <div className="text-center">
                    <div className="text-gray-600">438</div>
                    <div className="text-gray-500 text-xs">likes</div>
                  </div>
                  <div className="text-center">
                    <div className="text-gray-600">229K</div>
                    <div className="text-gray-500 text-xs">followers</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Creator Info & Copy */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-black mb-2">julianabonde</h1>
              <p className="text-orange-500 font-semibold text-lg">@julianabonde</p>
            </div>

            <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
              <p>
                ✨ Bem-vindo ao meu universo exclusivo. Aqui dentro você tem acesso a <strong>tudo</strong> que não vejo em lugar nenhum.
              </p>
              <p>
                🔥 <strong>800+ fotos e vídeos</strong> proibidos em qualquer outra rede social. Conversas privadas, bastidores, momentos especiais e muito mais.
              </p>
              <p>
                💬 Atendo mensagens pessoais, converso, troco fotos exclusivas e fantasias. Cada assinante recebe atenção personalizada.
              </p>
              <p className="text-orange-600 font-bold">
                🎁 Acesso imediato | Pagamento seguro e discreto | Cancelar quando quiser
              </p>
            </div>

            <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-6 rounded-lg text-lg shadow-lg transform transition hover:scale-105">
              🔓 VER TUDO POR R$ 14,90
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
