import Link from 'next/link'
import { ArrowLeft, PartyPopper, Gift, Calendar, Sparkles, CheckCircle } from 'lucide-react'

const services = [
  {
    title: 'Организация мероприятий',
    description: 'Полный цикл организации: от концепции до реализации',
    price: 'от 5000 ₽',
    icon: PartyPopper,
  },
  {
    title: 'Подбор подарков',
    description: 'Персональный подбор подарков с учётом интересов получателя',
    price: 'от 1300 ₽',
    icon: Gift,
  },
  {
    title: 'Оформление праздника',
    description: 'Декор, фотозоны, тематическое оформление',
    price: 'от 3000 ₽',
    icon: Sparkles,
  },
  {
    title: 'Планирование',
    description: 'Составление плана мероприятия и координация',
    price: 'от 1300 ₽',
    icon: Calendar,
  },
]

export default function HolidaysPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="relative py-24 bg-gradient-to-br from-amber-500 to-orange-600 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 text-6xl">🎉</div>
          <div className="absolute bottom-10 right-10 text-6xl">🎁</div>
          <div className="absolute top-1/2 right-1/4 text-4xl">✨</div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4">
          <Link href="/services" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors">
            <ArrowLeft size={18} />
            Все услуги
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">WoW праздники и подарки</h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Полная организация мероприятий и подбор подарков с акцентом на эмоции, эстетику и персонализацию
          </p>
          <div className="mt-6">
            <span className="text-3xl font-bold">от 1300 ₽</span>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Наши услуги</h2>
          
          <div className="space-y-4">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex items-start gap-4"
              >
                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <service.icon className="text-amber-600" size={24} />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-bold text-lg mb-1">{service.title}</h3>
                      <p className="text-gray-600">{service.description}</p>
                    </div>
                    <span className="font-bold text-amber-600 whitespace-nowrap">{service.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Что мы делаем</h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex gap-3 p-4 bg-gray-50 rounded-xl">
              <CheckCircle className="text-green-500 flex-shrink-0" size={24} />
              <span>Дни рождения и юбилеи</span>
            </div>
            <div className="flex gap-3 p-4 bg-gray-50 rounded-xl">
              <CheckCircle className="text-green-500 flex-shrink-0" size={24} />
              <span>Корпоративные мероприятия</span>
            </div>
            <div className="flex gap-3 p-4 bg-gray-50 rounded-xl">
              <CheckCircle className="text-green-500 flex-shrink-0" size={24} />
              <span>Романтические вечера</span>
            </div>
            <div className="flex gap-3 p-4 bg-gray-50 rounded-xl">
              <CheckCircle className="text-green-500 flex-shrink-0" size={24} />
              <span>Детские праздники</span>
            </div>
            <div className="flex gap-3 p-4 bg-gray-50 rounded-xl">
              <CheckCircle className="text-green-500 flex-shrink-0" size={24} />
              <span>Тематические вечеринки</span>
            </div>
            <div className="flex gap-3 p-4 bg-gray-50 rounded-xl">
              <CheckCircle className="text-green-500 flex-shrink-0" size={24} />
              <span>Сюрпризы и квесты</span>
            </div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Наш подход</h2>
          
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-bold mb-1">Эмоции на первом месте</h3>
                  <p className="text-gray-600">
                    Каждый праздник — это история. Мы создаём моменты, которые запоминаются навсегда.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-bold mb-1">Эстетика в деталях</h3>
                  <p className="text-gray-600">
                    Внимание к каждой детали: от цветовой палитры до упаковки подарков.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-bold mb-1">Персонализация</h3>
                  <p className="text-gray-600">
                    Каждый проект уникален и создаётся с учётом ваших пожеланий и особенностей.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-amber-500 to-orange-600 text-white">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Планируете праздник?</h2>
          <p className="text-white/80 mb-8">
            Свяжитесь с нами, чтобы обсудить вашу идею
          </p>
          <a
            href="https://t.me/VITON_13"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-amber-600 px-8 py-4 rounded-xl font-semibold hover:bg-white/90 transition-colors"
          >
            Написать в Telegram
          </a>
        </div>
      </section>
    </div>
  )
}
