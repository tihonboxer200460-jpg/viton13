import Link from 'next/link'
import { ArrowRight, Shirt, Dumbbell, Flag, Gift, Flower2, Home, Baby, Sparkles } from 'lucide-react'

const categories = [
  {
    title: 'Одежда, обувь и аксессуары',
    href: '/shop/old-money',
    icon: Shirt,
    image: '👔',
  },
  {
    title: 'Бытовая техника',
    href: '/shop',
    icon: Home,
    image: '🔌',
    soon: true,
  },
  {
    title: 'Детские товары и игрушки',
    href: '/shop',
    icon: Baby,
    image: '🧸',
    soon: true,
  },
  {
    title: 'Косметика и средства ухода',
    href: '/shop',
    icon: Sparkles,
    image: '💄',
    soon: true,
  },
  {
    title: 'Товары для дома и интерьера',
    href: '/shop',
    icon: Home,
    image: '🏠',
    soon: true,
  },
  {
    title: 'Цветы',
    href: '/services/flowers',
    icon: Flower2,
    image: '💐',
  },
  {
    title: 'Подарки и сувениры',
    href: '/shop',
    icon: Gift,
    image: '🎁',
    soon: true,
  },
]

const collections = [
  {
    title: 'Old Money',
    description: 'Классика, элегантность и спокойная роскошь. Коллекция для тех, кто выбирает стиль вне времени.',
    href: '/shop/old-money',
    gradient: 'from-amber-600 to-yellow-700',
  },
  {
    title: 'Спортивная одежда',
    description: 'Функциональность, лёгкость и движение. Комфортная и технологичная спортивная коллекция.',
    href: '/shop/sport',
    gradient: 'from-blue-500 to-cyan-600',
  },
  {
    title: 'Racing VITON13™',
    description: 'Одежда для тех, кто всегда на первой позиции. Скорость, форма и контроль.',
    href: '/shop/racing',
    gradient: 'from-red-500 to-orange-600',
  },
]

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-white py-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Магазин <span className="text-viton-purple">VITON13</span>
          </h1>
          <p className="text-xl text-gray-600">
            Натуральные материалы. Премиальное качество.
          </p>
        </div>
      </section>

      {/* Collections */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Коллекции VITON13</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {collections.map((collection) => (
              <Link
                key={collection.title}
                href={collection.href}
                className="group relative overflow-hidden rounded-2xl aspect-[4/3]"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${collection.gradient}`} />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                  <h3 className="text-2xl font-bold mb-2">{collection.title}</h3>
                  <p className="text-white/80 text-sm mb-4">{collection.description}</p>
                  <div className="flex items-center font-medium">
                    Перейти к разделу
                    <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" size={18} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Категории магазинов</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {categories.map((category) => (
              <Link
                key={category.title}
                href={category.href}
                className={`group bg-gray-50 rounded-2xl p-6 hover:bg-viton-purple/5 transition-colors border border-gray-100 hover:border-viton-purple/20 ${
                  category.soon ? 'opacity-60 pointer-events-none' : ''
                }`}
              >
                <div className="text-4xl mb-4">{category.image}</div>
                <h3 className="font-semibold group-hover:text-viton-purple transition-colors">
                  {category.title}
                </h3>
                {category.soon && (
                  <span className="inline-block mt-2 text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded-full">
                    Скоро
                  </span>
                )}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Auction Banner */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-gradient-to-r from-viton-purple to-viton-pink rounded-3xl p-8 md:p-12 text-white">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Аукцион VITON13</h2>
              <p className="text-white/80 mb-6">
                Запишись на аукцион VITON13 — получи премиальный товар по лучшей цене. 
                Участие доступно после регистрации и внесения стартового взноса.
              </p>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-4xl font-bold">1300 ₽</span>
                <span className="text-white/60">стартовый взнос</span>
              </div>
              <Link
                href="/auction"
                className="inline-flex items-center gap-2 bg-white text-viton-purple px-6 py-3 rounded-xl font-semibold hover:bg-white/90 transition-colors"
              >
                Перейти к записи
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-white">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Узнайте об акциях и скидках первыми!</h2>
          <div className="flex gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Ваш email"
              className="input-viton flex-1"
            />
            <button className="btn-purple px-6 py-3 rounded-xl">
              Подписаться
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
