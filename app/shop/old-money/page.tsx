'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Search, Heart, ShoppingBag, X, ChevronLeft, ChevronRight, Phone } from 'lucide-react'

const products = [
  {
    id: '1',
    name: 'Овчинная куртка ОМ',
    nameEn: 'Shearling Jacket OM',
    price: 26000,
    oldPrice: 35000,
    category: 'Верхняя одежда',
    description: 'Элегантная куртка из натуральной овчины. Идеальный выбор для холодной погоды. Натуральные ткани премиального качества · Производство Италия · Рекомендуется профессиональная сухая чистка.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Чёрный', 'Коричневый', 'Бежевый'],
  },
  {
    id: '2',
    name: 'Шерстяная куртка ОМ',
    nameEn: 'Wool Jacket OM',
    price: 13000,
    oldPrice: 18000,
    category: 'Верхняя одежда',
    description: 'Классическая шерстяная куртка с подкладкой. Натуральные ткани премиального качества.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Серый', 'Тёмно-синий', 'Чёрный'],
  },
  {
    id: '3',
    name: 'Шерстяной свитер ОМ',
    nameEn: 'Wool Sweater OM',
    price: 6900,
    oldPrice: 9000,
    category: 'Трикотаж',
    description: 'Мягкий свитер из 100% мериносовой шерсти.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Серый', 'Чёрный', 'Бежевый'],
  },
  {
    id: '4',
    name: 'Шерстяная кофта ОМ',
    nameEn: 'Wool Cardigan OM',
    price: 7900,
    oldPrice: 11000,
    category: 'Трикотаж',
    description: 'Кофта на молнии из натуральной шерсти.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Чёрный', 'Серый'],
  },
  {
    id: '5',
    name: 'Шерстяное пальто OMW',
    nameEn: 'Wool Coat OMW',
    price: 17990,
    oldPrice: 24990,
    category: 'Верхняя одежда',
    description: 'Шерстяное пальто в стиле OLD MONEY WOMEN выполнено из 100% натуральной шерсти.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Бежевый', 'Верблюжий', 'Серый-хаки', 'Черный'],
  },
  {
    id: '6',
    name: 'Водолазка OMW',
    nameEn: 'Turtleneck OMW',
    price: 6590,
    oldPrice: 7990,
    category: 'Трикотаж',
    description: 'Водолазка в стиле OLD MONEY WOMEN из высококачественной шерсти.',
    sizes: ['XXS', 'XS', 'S', 'M', 'L', 'XL'],
    colors: ['Черный', 'Белый', 'Зеленый'],
  },
  {
    id: '7',
    name: 'Тёплые брюки OMW',
    nameEn: 'Warm Pants OMW',
    price: 8990,
    oldPrice: 10990,
    category: 'Брюки',
    description: 'Теплые брюки из тонкого кашемира и овечьей шерсти.',
    sizes: ['XXS', 'XS', 'S', 'M', 'L', 'XL'],
    colors: ['Черный', 'Бледно-коричневый', 'Бежевый'],
  },
]

type Product = typeof products[0]

export default function OldMoneyPage() {
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState<'all' | 'men' | 'women'>('all')
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [selectedSize, setSelectedSize] = useState('')
  const [selectedColor, setSelectedColor] = useState('')

  const formatPrice = (price: number) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
  }

  const filteredProducts = products.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase()) ||
    p.nameEn?.toLowerCase().includes(search.toLowerCase())
  )

  const openProduct = (product: Product) => {
    setSelectedProduct(product)
    setSelectedSize(product.sizes[0])
    setSelectedColor(product.colors[0])
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] bg-gradient-to-br from-amber-100 via-amber-50 to-white flex items-center justify-center">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="relative text-center px-4">
          <p className="text-viton-purple font-medium mb-2 tracking-wider">VITON13 · Old Money Store</p>
          <h1 className="text-5xl md:text-7xl font-light text-gray-900 mb-4">Old Money</h1>
          <p className="text-xl text-gray-600">Классика, элегантность и спокойная роскошь</p>
        </div>
      </section>

      {/* Filter buttons */}
      <div className="flex justify-center gap-4 py-6 border-b border-gray-100">
        <button
          onClick={() => setFilter('men')}
          className={`px-8 py-3 rounded-full border-2 transition-all font-medium ${
            filter === 'men'
              ? 'bg-black text-white border-black'
              : 'bg-white text-black border-gray-200 hover:border-black'
          }`}
        >
          Для него
        </button>
        <button
          onClick={() => setFilter('women')}
          className={`px-8 py-3 rounded-full border-2 transition-all font-medium ${
            filter === 'women'
              ? 'bg-black text-white border-black'
              : 'bg-white text-black border-gray-200 hover:border-black'
          }`}
        >
          Для неё
        </button>
      </div>

      {/* Search & Sort */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative flex-1 max-w-md w-full">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Поиск"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-viton-purple transition-colors"
            />
          </div>
          
          <select className="px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-viton-purple bg-white">
            <option>Сортировка</option>
            <option>Цена ↑</option>
            <option>Цена ↓</option>
          </select>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <div 
              key={product.id} 
              className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 cursor-pointer"
              onClick={() => openProduct(product)}
            >
              {/* Image */}
              <div className="relative aspect-square bg-gray-50">
                <div className="absolute inset-0 flex items-center justify-center text-gray-300">
                  <span className="text-6xl group-hover:scale-110 transition-transform">👔</span>
                </div>
                <button
                  onClick={(e) => { e.stopPropagation() }}
                  className="absolute top-3 right-3 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform"
                >
                  <Heart size={20} className="text-gray-400 hover:text-red-500 hover:fill-red-500 transition-colors" />
                </button>
                {product.oldPrice && (
                  <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                    -{Math.round((1 - product.price / product.oldPrice) * 100)}%
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-viton-purple transition-colors">
                  {product.name}
                </h3>
                <p className="text-gray-500 text-sm mb-3">{product.nameEn}</p>
                
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

      {/* Product Modal */}
      {selectedProduct && (
        <>
          <div 
            className="fixed inset-0 bg-black/50 z-[1000]"
            onClick={() => setSelectedProduct(null)}
          />
          <div className="fixed inset-4 md:inset-10 bg-white z-[1001] rounded-2xl overflow-hidden flex flex-col md:flex-row">
            {/* Close button */}
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-100 transition-colors"
            >
              <X size={24} />
            </button>

            {/* Images */}
            <div className="md:w-1/2 bg-gray-50 relative flex items-center justify-center">
              <span className="text-[150px]">👔</span>
            </div>

            {/* Info */}
            <div className="md:w-1/2 p-6 md:p-10 overflow-y-auto">
              <p className="text-gray-500 mb-2">{selectedProduct.category}</p>
              <h2 className="text-2xl md:text-3xl font-bold mb-2">{selectedProduct.name}</h2>
              <p className="text-gray-500 mb-4">{selectedProduct.nameEn}</p>
              
              {/* Price */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl font-bold">{formatPrice(selectedProduct.price)} ₽</span>
                {selectedProduct.oldPrice && (
                  <span className="text-gray-400 line-through text-lg">
                    {formatPrice(selectedProduct.oldPrice)} ₽
                  </span>
                )}
              </div>

              {/* Size selector */}
              <div className="mb-6">
                <label className="block text-sm font-semibold mb-3">Размер</label>
                <div className="flex flex-wrap gap-2">
                  {selectedProduct.sizes.map(size => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 rounded-lg border-2 font-medium transition-all ${
                        selectedSize === size
                          ? 'border-viton-purple bg-viton-purple text-white'
                          : 'border-gray-200 hover:border-viton-purple'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Color selector */}
              <div className="mb-6">
                <label className="block text-sm font-semibold mb-3">Цвет</label>
                <select
                  value={selectedColor}
                  onChange={(e) => setSelectedColor(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-viton-purple"
                >
                  {selectedProduct.colors.map(color => (
                    <option key={color} value={color}>{color}</option>
                  ))}
                </select>
              </div>

              {/* Actions */}
              <div className="flex gap-4 mb-8">
                <button className="flex-1 bg-viton-purple text-white py-4 rounded-xl font-semibold hover:bg-viton-purple-dark transition-colors">
                  Купить сейчас
                </button>
                <button className="w-14 h-14 border border-gray-200 rounded-xl flex items-center justify-center hover:bg-gray-50 transition-colors">
                  <Heart size={24} className="text-gray-400" />
                </button>
              </div>

              {/* Description */}
              <div className="border-t border-gray-100 pt-6">
                <h3 className="font-semibold mb-2">Описание</h3>
                <p className="text-gray-600 mb-4">{selectedProduct.description}</p>
                
                <h3 className="font-semibold mb-2">Материалы и уход</h3>
                <p className="text-gray-600 mb-4">
                  Натуральные ткани премиального качества · Производство Италия · 
                  Рекомендуется профессиональная сухая чистка
                </p>

                <h3 className="font-semibold mb-2">Доставка и возврат</h3>
                <p className="text-gray-600">Возможность возврата до 14 дней</p>
              </div>

              {/* Contact */}
              <div className="mt-6 pt-6 border-t border-gray-100">
                <a 
                  href="tel:+79811078251" 
                  className="flex items-center gap-2 text-viton-purple hover:underline"
                >
                  <Phone size={18} />
                  Связаться с нами
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
