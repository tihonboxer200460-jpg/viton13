import Link from 'next/link'
import { ArrowLeft, Shirt, Search, Palette, CheckCircle } from 'lucide-react'

const services = [
  {
    title: 'Поиск одежды',
    description: 'Найдём для вас идеальные вещи по вашим критериям и бюджету',
    price: 'от 500 ₽',
    icon: Search,
  },
  {
    title: 'Персональный стилист',
    description: 'Консультация по стилю и подбор гардероба под ваш образ жизни',
    price: 'от 1500 ₽',
    icon: Palette,
  },
  {
    title: 'Составление луков',
    description: 'Готовые образы из вашего гардероба или с подбором новых вещей',
    price: 'от 800 ₽',
    icon: Shirt,
  },
]

export default function WardrobePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="relative py-24 bg-gradient-to-br from-pink-500 to-rose-600 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-32 h-32 border-2 border-white/50 rounded-full" />
          <div className="absolute bottom-10 right-10 w-48 h-48 border-2 border-white/50 rounded-full" />
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4">
          <Link href="/services" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors">
            <ArrowLeft size={18} />
            Все услуги
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Гардеробная моды</h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Мы подбираем вещи, создаём образы и формируем стиль на основе ваших целей и вкусов
          </p>
          <div className="mt-6">
            <span className="text-3xl font-bold">от 500 ₽</span>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Что мы предлагаем</h2>
          
          <div className="space-y-4">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex items-start gap-4"
              >
                <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <service.icon className="text-pink-600" size={24} />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-bold text-lg mb-1">{service.title}</h3>
                      <p className="text-gray-600">{service.description}</p>
                    </div>
                    <span className="font-bold text-pink-600 whitespace-nowrap">{service.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Как это работает</h2>
          
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-pink-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="font-bold mb-1">Свяжитесь с нами</h3>
                <p className="text-gray-600">
                  Напишите в Telegram и расскажите о ваших предпочтениях и задачах
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-pink-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="font-bold mb-1">Консультация</h3>
                <p className="text-gray-600">
                  Наш стилист изучит ваши пожелания и подберёт оптимальное решение
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-pink-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="font-bold mb-1">Подбор</h3>
                <p className="text-gray-600">
                  Получите персональную подборку вещей или готовых образов
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Преимущества</h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex gap-3 p-4 bg-white rounded-xl border border-gray-100">
              <CheckCircle className="text-green-500 flex-shrink-0" size={24} />
              <span>Индивидуальный подход к каждому клиенту</span>
            </div>
            <div className="flex gap-3 p-4 bg-white rounded-xl border border-gray-100">
              <CheckCircle className="text-green-500 flex-shrink-0" size={24} />
              <span>От casual до премиальных коллекций</span>
            </div>
            <div className="flex gap-3 p-4 bg-white rounded-xl border border-gray-100">
              <CheckCircle className="text-green-500 flex-shrink-0" size={24} />
              <span>Учитываем ваш бюджет</span>
            </div>
            <div className="flex gap-3 p-4 bg-white rounded-xl border border-gray-100">
              <CheckCircle className="text-green-500 flex-shrink-0" size={24} />
              <span>Быстрый подбор в течение 24 часов</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-pink-500 to-rose-600 text-white">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Готовы обновить гардероб?</h2>
          <p className="text-white/80 mb-8">
            Свяжитесь с нами, чтобы начать работу над вашим стилем
          </p>
          <a
            href="https://t.me/VITON_13"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-pink-600 px-8 py-4 rounded-xl font-semibold hover:bg-white/90 transition-colors"
          >
            Написать в Telegram
          </a>
        </div>
      </section>
    </div>
  )
}
