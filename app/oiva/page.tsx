import Link from 'next/link'
import { Truck, Clock, MapPin, Shield, ArrowRight } from 'lucide-react'

export default function OivaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="relative py-24 bg-gradient-to-br from-cyan-600 to-blue-700 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-32 h-32 border-2 border-white/30 rounded-full" />
          <div className="absolute bottom-10 right-10 w-48 h-48 border-2 border-white/30 rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-2 border-white/20 rounded-full" />
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full mb-6">
            <Truck size={20} />
            <span>Служба доставки VITON13</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">OIVA</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Профессиональная доставка и аккуратное сопровождение ваших заказов
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="w-14 h-14 bg-cyan-100 rounded-xl flex items-center justify-center mb-6">
                <Clock className="text-cyan-600" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">Быстрая доставка</h3>
              <p className="text-gray-600">
                Доставка в день заказа при оформлении до 14:00. Среднее время доставки — 2-4 часа.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="w-14 h-14 bg-cyan-100 rounded-xl flex items-center justify-center mb-6">
                <Shield className="text-cyan-600" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">Гарантия сохранности</h3>
              <p className="text-gray-600">
                Бережное обращение с каждым заказом. Страхование всех отправлений.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="w-14 h-14 bg-cyan-100 rounded-xl flex items-center justify-center mb-6">
                <MapPin className="text-cyan-600" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">Широкая география</h3>
              <p className="text-gray-600">
                Доставка по Санкт-Петербургу, Ленинградской области и Архангельску.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Стоимость доставки</h2>
          
          <div className="space-y-4">
            <div className="flex justify-between items-center p-6 bg-gray-50 rounded-xl">
              <div>
                <h3 className="font-semibold">Санкт-Петербург</h3>
                <p className="text-gray-500 text-sm">В пределах КАД</p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-viton-purple">от 400 ₽</div>
              </div>
            </div>
            
            <div className="flex justify-between items-center p-6 bg-gray-50 rounded-xl">
              <div>
                <h3 className="font-semibold">Ленинградская область</h3>
                <p className="text-gray-500 text-sm">За пределами КАД</p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-viton-purple">от 600 ₽</div>
              </div>
            </div>
            
            <div className="flex justify-between items-center p-6 bg-gray-50 rounded-xl">
              <div>
                <h3 className="font-semibold">Архангельск</h3>
                <p className="text-gray-500 text-sm">Доставка курьером</p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-viton-purple">от 800 ₽</div>
              </div>
            </div>
          </div>
          
          <p className="text-center text-gray-500 mt-8">
            * Точная стоимость рассчитывается при оформлении заказа
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Как это работает</h2>
          
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="w-12 h-12 bg-viton-purple text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Оформите заказ</h3>
                <p className="text-gray-600">
                  Выберите товары в магазине VITON13 или закажите услугу, укажите адрес доставки.
                </p>
              </div>
            </div>
            
            <div className="flex gap-6">
              <div className="w-12 h-12 bg-viton-purple text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Подтверждение</h3>
                <p className="text-gray-600">
                  Мы свяжемся с вами для подтверждения заказа и уточнения времени доставки.
                </p>
              </div>
            </div>
            
            <div className="flex gap-6">
              <div className="w-12 h-12 bg-viton-purple text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Доставка</h3>
                <p className="text-gray-600">
                  Курьер OIVA доставит ваш заказ в указанное время. Вы получите уведомление о прибытии.
                </p>
              </div>
            </div>
            
            <div className="flex gap-6">
              <div className="w-12 h-12 bg-cyan-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                ✓
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Получение</h3>
                <p className="text-gray-600">
                  Проверьте заказ при курьере. При обнаружении проблем — сразу сообщите.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-700 text-white">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Есть вопросы по доставке?</h2>
          <p className="text-white/80 mb-8">
            Свяжитесь с нами, и мы поможем с любыми вопросами
          </p>
          <Link
            href="/support"
            className="inline-flex items-center gap-2 bg-white text-cyan-600 px-8 py-4 rounded-xl font-semibold hover:bg-white/90 transition-colors"
          >
            Центр поддержки
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  )
}
