import Link from 'next/link'
import { ArrowRight, Shirt, Palette, PartyPopper, Flower2, Scale, Share2 } from 'lucide-react'

const services = [
  {
    title: 'Гардеробная моды',
    description: 'Мы подбираем вещи, создаём образы и формируем стиль на основе ваших целей и вкусов. От casual до премиальных коллекций.',
    href: '/services/wardrobe',
    icon: Shirt,
    price: 'от 500 ₽',
    color: 'from-pink-500 to-rose-600',
  },
  {
    title: 'Дизайнер',
    description: 'Создание продуманных и эстетичных визуальных решений: брендинг, оформление страниц, презентации.',
    href: '/services/designer',
    icon: Palette,
    price: 'от 500 ₽',
    color: 'from-violet-500 to-purple-600',
  },
  {
    title: 'WoW праздники и подарки',
    description: 'Полная организация мероприятий и подбор подарков с акцентом на эмоции, эстетику и персонализацию.',
    href: '/services/holidays',
    icon: PartyPopper,
    price: 'от 1300 ₽',
    color: 'from-amber-500 to-orange-600',
  },
  {
    title: 'Флорист',
    description: 'Авторские букеты любой сложности — уникальные цветочные композиции, собранные с душой и вниманием к деталям.',
    href: '/services/flowers',
    icon: Flower2,
    price: 'от 1300 ₽',
    color: 'from-green-500 to-emerald-600',
  },
  {
    title: 'Финансовый юрист',
    description: 'Банкротство и гражданское право. Профессиональная юридическая помощь.',
    href: '/services',
    icon: Scale,
    price: 'от 500 ₽',
    color: 'from-blue-500 to-indigo-600',
  },
  {
    title: 'SMM-специалист',
    description: 'Развитие и продвижение проектов в социальных сетях, увеличение охватов и конверсии в продажи.',
    href: '/services',
    icon: Share2,
    price: 'от 500 ₽',
    color: 'from-cyan-500 to-teal-600',
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-white py-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Услуги <span className="text-viton-purple">VITON13</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Инновационные решения для дома, бизнеса и личной эффективности.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-viton-purple to-viton-cyan rounded-full flex items-center justify-center text-white font-bold text-xl">
                ВТ
              </div>
              <div>
                <div className="font-bold">Тарасов В.А.</div>
                <div className="text-gray-500 text-sm">основатель & CEO</div>
              </div>
            </div>
            <blockquote className="text-xl text-gray-700 leading-relaxed">
              <span className="text-viton-purple font-bold">VITON13</span> — это единая экосистема сервисов, 
              где технологии, экспертиза и эстетика соединяются в одном пространстве. 
              Когда вам нужна помощь — личная, бытовая или профессиональная — 
              вам не нужно искать десятки исполнителей. У вас есть один надёжный источник.
            </blockquote>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Все услуги</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <service.icon className="text-white" size={24} />
                </div>
                
                <h3 className="text-xl font-bold mb-2 group-hover:text-viton-purple transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {service.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="font-bold text-viton-purple">{service.price}</span>
                  <div className="flex items-center text-gray-500 group-hover:text-viton-purple transition-colors">
                    Подробнее
                    <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" size={16} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-viton-dark text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Нужна помощь с выбором?
          </h2>
          <p className="text-white/70 mb-8 text-lg">
            Свяжитесь с нами, и мы поможем подобрать подходящую услугу для ваших задач.
          </p>
          <a 
            href="https://t.me/VITON_13"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-viton-purple text-white px-8 py-4 rounded-xl font-semibold hover:bg-viton-purple-dark transition-colors"
          >
            Написать в Telegram
            <ArrowRight size={20} />
          </a>
        </div>
      </section>
    </div>
  )
}
