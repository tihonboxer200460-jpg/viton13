import Link from 'next/link'
import { Music, Play, Calendar, ExternalLink } from 'lucide-react'

const artists = [
  {
    name: 'VIOR7',
    type: 'Артист',
    releaseDate: '7 декабря',
    description: 'Новый голос VITON13 MUSIC. Первый релиз состоялся 7 декабря.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    name: 'VIORA13',
    type: 'Артист',
    releaseDate: '13 декабря',
    description: 'Уникальный стиль и звучание. Премьера 13 декабря.',
    color: 'from-viton-purple to-viton-pink',
  },
]

export default function MusicPage() {
  return (
    <div className="min-h-screen bg-viton-dark text-white">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-viton-purple/30 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-viton-pink/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'linear-gradient(rgba(109, 60, 255, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(109, 60, 255, 0.3) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }} />
        
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full mb-6 border border-white/20">
            <Music size={20} />
            <span>Музыкальный лейбл</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
            VITON13 <span className="text-gradient">MUSIC</span>
          </h1>
          <p className="text-xl text-white/60 max-w-xl mx-auto">
            Место, где живёт звук будущего
          </p>
        </div>
      </section>

      {/* Artists */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Наши артисты</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {artists.map((artist) => (
              <div 
                key={artist.name}
                className="group relative bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all overflow-hidden"
              >
                {/* Gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${artist.color} opacity-0 group-hover:opacity-10 transition-opacity`} />
                
                <div className="relative">
                  {/* Artist image placeholder */}
                  <div className={`w-32 h-32 rounded-full bg-gradient-to-br ${artist.color} flex items-center justify-center mb-6 mx-auto group-hover:scale-105 transition-transform`}>
                    <span className="text-4xl font-black">{artist.name.charAt(0)}</span>
                  </div>
                  
                  <div className="text-center">
                    <span className="text-white/50 text-sm uppercase tracking-wider">{artist.type}</span>
                    <h3 className="text-3xl font-bold mt-1 mb-4">{artist.name}</h3>
                    <p className="text-white/60 mb-6">{artist.description}</p>
                    
                    <div className="flex items-center justify-center gap-2 text-white/50">
                      <Calendar size={16} />
                      <span>Релиз: {artist.releaseDate}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Release */}
      <section className="py-20 bg-black/30">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Последние релизы</h2>
          
          <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Album art placeholder */}
              <div className="w-48 h-48 bg-gradient-to-br from-viton-purple to-viton-pink rounded-2xl flex items-center justify-center flex-shrink-0">
                <Music size={64} className="text-white/50" />
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <span className="text-white/50 text-sm uppercase tracking-wider">Новый трек</span>
                <h3 className="text-2xl font-bold mt-1 mb-2">Скоро</h3>
                <p className="text-white/60 mb-4">
                  Следите за обновлениями — скоро новые релизы от артистов VITON13 MUSIC
                </p>
                
                <button className="inline-flex items-center gap-2 bg-white/10 text-white px-6 py-3 rounded-xl font-medium hover:bg-white/20 transition-colors">
                  <Play size={18} />
                  Слушать
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Слушайте на всех платформах</h2>
          <p className="text-white/60 mb-12">
            Музыка VITON13 доступна на всех популярных стриминговых сервисах
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            {['Spotify', 'Apple Music', 'Яндекс Музыка', 'VK Музыка', 'YouTube Music'].map((platform) => (
              <div 
                key={platform}
                className="bg-white/5 backdrop-blur-md px-6 py-3 rounded-xl border border-white/10 text-white/70"
              >
                {platform}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-white/10">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Хочешь стать частью VITON13 MUSIC?</h2>
          <p className="text-white/60 mb-8">
            Мы всегда в поиске новых талантов. Свяжись с нами, чтобы обсудить сотрудничество.
          </p>
          <a
            href="https://t.me/VITON_13"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-viton-purple text-white px-8 py-4 rounded-xl font-semibold hover:bg-viton-purple-dark transition-colors"
          >
            Связаться
            <ExternalLink size={18} />
          </a>
        </div>
      </section>
    </div>
  )
}
