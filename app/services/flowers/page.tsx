import Link from 'next/link'
import { ArrowLeft, Flower2, Clock, Truck, Heart, CheckCircle } from 'lucide-react'

export default function FlowersPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="relative py-24 bg-gradient-to-br from-green-500 to-emerald-600 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 text-6xl">🌸</div>
          <div className="absolute bottom-10 right-10 text-6xl">🌷</div>
          <div className="absolute top-1/2 right-1/3 text-4xl">🌹</div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4">
          <Link href="/services" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors">
            <ArrowLeft size={18} />
            Все услуги
          </Link>
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full mb-4">
            <Flower2 size={18} />
            <span>FlowerVit</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Флорист</h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Авторские букеты любой сложности — уникальные цветочные композиции, собранные с душой и вниманием к деталям
          </p>
          <div className="mt-6">
            <span className="text-3xl font-bold">от 1300 ₽</span>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center">
              <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Clock className="text-green-600" size={28} />
              </div>
              <h3 className="font-bold text-lg mb-2">Быстрая доставка</h3>
              <p className="text-gray-600">Доставка в течение 3 часов по Санкт-Петербургу</p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center">
              <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Heart className="text-green-600" size={28} />
              </div>
              <h3 className="font-bold text-lg mb-2">Свежесть</h3>
              <p className="text-gray-600">Гарантия свежести букета до 1.5 недели</p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center">
              <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Truck className="text-green-600" size={28} />
              </div>
              <h3 className="font-bold text-lg mb-2">OIVA доставка</h3>
              <p className="text-gray-600">Бережная доставка нашими курьерами</p>
            </div>
          </div>
        </div>
      </section>

      {/* What we offer */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Что мы предлагаем</h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex gap-3 p-4 bg-gray-50 rounded-xl">
              <CheckCircle className="text-green-500 flex-shrink-0" size={24} />
              <span>Авторские букеты на любой случай</span>
            </div>
            <div className="flex gap-3 p-4 bg-gray-50 rounded-xl">
              <CheckCircle className="text-green-500 flex-shrink-0" size={24} />
              <span>Композиции для мероприятий</span>
            </div>
            <div className="flex gap-3 p-4 bg-gray-50 rounded-xl">
              <CheckCircle className="text-green-500 flex-shrink-0" size={24} />
              <span>Свадебная флористика</span>
            </div>
            <div className="flex gap-3 p-4 bg-gray-50 rounded-xl">
              <CheckCircle className="text-green-500 flex-shrink-0" size={24} />
              <span>Оформление интерьеров</span>
            </div>
            <div className="flex gap-3 p-4 bg-gray-50 rounded-xl">
              <CheckCircle className="text-green-500 flex-shrink-0" size={24} />
              <span>Корпоративные заказы</span>
            </div>
            <div className="flex gap-3 p-4 bg-gray-50 rounded-xl">
              <CheckCircle className="text-green-500 flex-shrink-0" size={24} />
              <span>Подписка на цветы</span>
            </div>
          </div>
        </div>
      </section>

      {/* How to order */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Как заказать</h2>
          
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="font-bold mb-1">Напишите нам</h3>
                <p className="text-gray-600">
                  Свяжитесь через Telegram и расскажите о желаемом букете
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="font-bold mb-1">Обсуждение</h3>
                <p className="text-gray-600">
                  Флорист уточнит детали: повод, предпочтения, бюджет
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="font-bold mb-1">Создание</h3>
                <p className="text-gray-600">
                  Мы соберём уникальную композицию специально для вас
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                4
              </div>
              <div>
                <h3 className="font-bold mb-1">Доставка</h3>
                <p className="text-gray-600">
                  Курьер OIVA доставит букет в указанное время
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-green-50 rounded-2xl p-8 border border-green-100">
            <h2 className="text-2xl font-bold mb-4 text-green-800">Гарантия качества</h2>
            <p className="text-green-700 mb-4">
              Мы гарантируем свежесть всех цветов. Если букет не простоит обещанный срок — 
              мы заменим его или вернём деньги.
            </p>
            <ul className="space-y-2 text-green-700">
              <li>• Только свежие цветы напрямую от поставщиков</li>
              <li>• Бережная сборка и упаковка</li>
              <li>• Фото букета перед отправкой</li>
              <li>• Гарантия свежести до 1.5 недели</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-green-500 to-emerald-600 text-white">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Хотите заказать букет?</h2>
          <p className="text-white/80 mb-8">
            Свяжитесь с нами, чтобы обсудить вашу идею
          </p>
          <a
            href="https://t.me/VITON_13"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-green-600 px-8 py-4 rounded-xl font-semibold hover:bg-white/90 transition-colors"
          >
            Написать в Telegram
          </a>
        </div>
      </section>
    </div>
  )
}
