'use client'

import Link from 'next/link'
import { Heart, ArrowLeft, Flame } from 'lucide-react'

const products = [
  {
    id: '1',
    name: 'DRIVER SET 01',
    subtitle: 'Bomber + Tech Pants',
    price: 18500,
    oldPrice: 24000,
    description: 'Эксклюзивный комплект из бомбера и технологичных брюк в гоночном стиле.',
    isSet: true,
  },
  {
    id: '2',
    name: 'Racing Bomber VITON13',
    price: 12000,
    description: 'Бомбер в гоночном стиле с фирменной вышивкой.',
  },
  {
    id: '3',
    name: 'Tech Pants Racing',
    price: 8500,
    description: 'Технологичные брюки с боковыми полосами.',
  },
  {
    id: '4',
    name: 'Racing Cap VITON13',
    price: 2500,
    description: 'Кепка с вышивкой в гоночном стиле.',
  },
]

export default function RacingPage() {
  const formatPrice = (price: number) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
  }

  return (
    <div className="min-h-screen bg-viton-dark text-white">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[500px] bg-gradient-to-br from-red-600 via-orange-500 to-red-700 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-30" style={{
            backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 50px, rgba(255,255,255,0.1) 50px, rgba(255,255,255,0.1) 100px)',
          }} />
        </div>
        <div className="relative text-center px-4 text-white">
          <div className="inline-flex items-center gap-2 bg-black/30 backdrop-blur-md px-4 py-2 rounded-full mb-6">
            <Flame size={20} />
            <span>Limited Edition</span>
          </div>
          <p className="font-medium mb-2 tracking-wider opacity-80">VITON13™</p>
          <h1 className="text-5xl md:text-7xl font-black mb-4 tracking-tight">RACING</h1>
          <p className="text-xl opacity-80">Одежда для тех, кто всегда на первой позиции</p>
        </div>
      </section>

      {/* Back link */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <Link href="/shop" className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors">
          <ArrowLeft size={18} />
          Назад в магазин
        </Link>
      </div>

      {/* Featured Set */}
      <section className="max-w-7xl mx-auto px-4 pb-12">
        <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-3xl p-8 border border-white/10">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/2 aspect-square bg-gradient-to-br from-red-500/30 to-orange-500/30 rounded-2xl flex items-center justify-center">
              <span className="text-[120px]">🏎️</span>
            </div>
            <div className="flex-1 text-center md:text-left">
              <span className="inline-block bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
                BESTSELLER
              </span>
              <h2 className="text-3xl font-black mb-2">DRIVER SET 01</h2>
              <p className="text-white/60 mb-4">Bomber + Tech Pants</p>
              <p className="text-white/80 mb-6">
                Эксклюзивный комплект из бомбера и технологичных брюк в гоночном стиле. 
                Скорость, форма и контроль в каждой детали.
              </p>
              <div className="flex items-center gap-4 mb-6 justify-center md:justify-start">
                <span className="text-3xl font-bold">{formatPrice(18500)} ₽</span>
                <span className="text-white/40 line-through text-xl">{formatPrice(24000)} ₽</span>
              </div>
              <button className="bg-red-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-red-600 transition-colors">
                Купить комплект
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold mb-8">Все товары</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.filter(p => !p.isSet).map(product => (
            <div 
              key={product.id} 
              className="group bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative aspect-square bg-gradient-to-br from-red-500/20 to-orange-500/20">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl group-hover:scale-110 transition-transform">🏁</span>
                </div>
                <button className="absolute top-3 right-3 w-10 h-10 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                  <Heart size={20} className="text-white/60 hover:text-red-500 hover:fill-red-500 transition-colors" />
                </button>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="font-semibold mb-1 group-hover:text-red-400 transition-colors">
                  {product.name}
                </h3>
                <p className="text-white/50 text-sm mb-3 line-clamp-1">{product.description}</p>
                
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold">{formatPrice(product.price)} ₽</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Info Section */}
      <section className="py-16 bg-black/30">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Racing VITON13™</h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Лимитированная коллекция в гоночном стиле. Каждая вещь создана для тех, 
            кто ценит скорость, стиль и победу. Ограниченный тираж — успей забрать свой комплект.
          </p>
        </div>
      </section>
    </div>
  )
}
