'use client';

import { Heart, MessageCircle, Lock, Play } from 'lucide-react';
import { useState } from 'react';

interface ContentItem {
  id: number;
  type: 'image' | 'video';
  src?: string;
  likes: number;
  comments: number;
}

export default function ContentGallery() {
  const [contentItems] = useState<ContentItem[]>([
    { id: 1, type: 'video', src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/p5XuBWMYbj5C-jnKE7OSsF5eGlUq3ohnradyYvZzsHs.mp4', likes: 248, comments: 126 },
    { id: 2, type: 'video', src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/HC7RbwOQ25NM-E6xpvHNgOljTfNO8lkJqH24U858EI.mp4', likes: 549, comments: 362 },
    { id: 3, type: 'image', src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Jt88vYzwfd6W-MQFneeALD6PTbrDLh5NR0IeiBNLwzz.jpg', likes: 872, comments: 451 },
    { id: 4, type: 'video', src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/vF3DpQKrN3c7-5azewLog4ww5HnbPK2Rz6TySRGjhYZ.mp4', likes: 634, comments: 289 },
  ]);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Conteúdo Exclusivo Bloqueado</h2>
          <p className="text-gray-600 text-lg">93 postagens | 412 mídias esperando por você</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contentItems.map((item) => (
            <div key={item.id} className="group relative overflow-hidden rounded-xl shadow-lg bg-gray-900 aspect-square">
              <div className="w-full h-full bg-gray-900">
                {item.src && (
                  item.type === 'image' ? (
                    <img
                      src={item.src || "/placeholder.svg"}
                      alt={`Content ${item.id}`}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <video
                      src={item.src}
                      autoPlay
                      loop
                      muted
                      className="w-full h-full object-cover"
                    />
                  )
                )}
              </div>

              {/* Lock Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/50 transition">
                <div className="text-center">
                  <Lock className="w-16 h-16 text-white mx-auto mb-4" />
                  {item.type === 'video' && (
                    <div className="absolute top-4 right-4 bg-orange-500 rounded-full p-2">
                      <Play className="w-6 h-6 text-white fill-white" />
                    </div>
                  )}
                  <p className="text-white font-bold text-sm">CONTEÚDO BLOQUEADO</p>
                </div>
              </div>

              {/* User Info */}
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <div className="w-8 h-8 rounded-full overflow-hidden">
                  <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Jt88vYzwfd6W-MQFneeALD6PTbrDLh5NR0IeiBNLwzz.jpg" alt="julianabonde" className="w-full h-full object-cover" />
                </div>
                <div className="text-white text-sm font-semibold">julianabonde</div>
              </div>

              {/* Stats */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/20 backdrop-blur-md rounded-lg px-3 py-2">
                <div className="flex gap-4 text-white text-sm font-semibold">
                  <div className="flex items-center gap-1">
                    <Heart className="w-4 h-4" />
                    {item.likes}
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageCircle className="w-4 h-4" />
                    {item.comments}
                  </div>
                </div>
              </div>

              {/* Hover Unlock Button */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-lg">
                  DESTRAVAR AGORA
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="https://www.seguropagamentos.com.br/priv" target="_blank" rel="noopener noreferrer">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg text-lg shadow-lg transform transition hover:scale-105">
              ➜ VER TUDO POR APENAS R$ 14,90
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
