'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Heart, ArrowLeft } from 'lucide-react'

const products = [
  {
    id: '1',
    name: 'Zip-худи VITON Sport',
    price: 6000,
    oldPrice: 7500,
    description: 'Спортивное худи на молнии из высококачественного хлопка.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Чёрный', 'Серый', 'Синий'],
  },
  {
    id: '2',
    name: 'Спортивные брюки VITON',
    price: 4590,
    oldPrice: 5500,
    description: 'Удобные спортивные брюки с карманами на молнии.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Чёрный', 'Серый'],
  },
  {
    id: '3',
    name: 'Футболка VITON Sport',
    price: 2500,
    description: 'Дышащая футболка для тренировок.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Белый', 'Чёрный', 'Серый'],
  },
  {
    id: '4',
    name: 'Шорты VITON Training',
    price: 3200,
    description: 'Тренировочные шорты с эластичным поясом.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Чёрный', 'Синий'],
  },
]

export default function SportPage() {
  const formatPrice = (price: number) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] bg-gradient-to-br from-blue-600 via-cyan-500 to-blue-700 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-32 h-32 border-2 border-white/50 rounded-full" />
          <div className="absolute bottom-10 right-10 w-48 h-48 border-2 border-white/50 rounded-full" />
        </div>
        <div className="relative text-center px-4 text-white">
          <p className="font-medium mb-2 tracking-wider opacity-80">VITON13 · Sport Collection</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-4">Sport</h1>
          <p className="text-xl opacity-80">Функциональность, лёгкость и движение</p>
        </div>
      </section>

      {/* Back link */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <Link href="/shop" className="inline-flex items-center gap-2 text-gray-500 hover:text-viton-purple transition-colors">
          <ArrowLeft size={18} />
          Назад в магазин
        </Link>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map(product => (
            <div 
              key={product.id} 
              className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative aspect-square bg-gradient-to-br from-blue-50 to-cyan-50">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl group-hover:scale-110 transition-transform">🏃</span>
                </div>
                <button className="absolute top-3 right-3 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform">
                  <Heart size={20} className="text-gray-400 hover:text-red-500 hover:fill-red-500 transition-colors" />
                </button>
                {product.oldPrice && (
                  <div className="absolute top-3 left-3 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                    -{Math.round((1 - product.price / product.oldPrice) * 100)}%
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                  {product.name}
                </h3>
                <p className="text-gray-500 text-sm mb-3 line-clamp-1">{product.description}</p>
                
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold">{formatPrice(product.price)} ₽</span>
                  {product.oldPrice && (
                    <span className="text-gray-400 line-through text-sm">
                      {formatPrice(product.oldPrice)} ₽
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Info Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Спортивная коллекция VITON13</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Комфортная и технологичная спортивная одежда для активного образа жизни. 
            Все изделия выполнены из качественных материалов, обеспечивающих свободу движений 
            и комфорт во время тренировок.
          </p>
        </div>
      </section>
    </div>
  )
}
