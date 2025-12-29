import Link from 'next/link'
import { ArrowLeft, Palette, Layout, PenTool, Package, Monitor, CheckCircle } from 'lucide-react'

const services = [
  {
    title: 'Графический дизайн',
    description: 'Логотипы, фирменный стиль, визитки, баннеры',
    icon: Palette,
  },
  {
    title: 'Веб-дизайн',
    description: 'Дизайн сайтов, лендингов, интернет-магазинов',
    icon: Monitor,
  },
  {
    title: 'UX/UI дизайн',
    description: 'Проектирование интерфейсов приложений',
    icon: Layout,
  },
  {
    title: 'Иллюстрация',
    description: 'Авторские иллюстрации и графика',
    icon: PenTool,
  },
  {
    title: 'Дизайн упаковки',
    description: 'Разработка упаковки для продуктов',
    icon: Package,
  },
]

export default function DesignerPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="relative py-24 bg-gradient-to-br from-violet-500 to-purple-600 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 right-10 w-40 h-40 border-2 border-white/50 rounded-lg rotate-12" />
          <div className="absolute bottom-10 left-10 w-32 h-32 border-2 border-white/50 rounded-lg -rotate-6" />
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4">
          <Link href="/services" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors">
            <ArrowLeft size={18} />
            Все услуги
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Дизайнер</h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Создание продуманных и эстетичных визуальных решений: брендинг, оформление страниц, презентации
          </p>
          <div className="mt-6">
            <span className="text-3xl font-bold">от 500 ₽</span>
          </div>
        </div>
      </section>

      {/* Designer Info */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-32 h-32 bg-gradient-to-br from-violet-500 to-purple-600 rounded-full flex items-center justify-center text-white text-3xl font-bold flex-shrink-0">
              АБ
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-2">Анастасия Белавина</h2>
              <p className="text-viton-purple font-medium mb-4">Дизайнер VITON13</p>
              <p className="text-gray-600">
                Профессиональный дизайнер с опытом работы над проектами различной сложности. 
                Специализируется на создании уникальных визуальных решений, которые помогают 
                брендам выделяться и достигать своих целей.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Направления работы</h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex items-start gap-4"
              >
                <div className="w-12 h-12 bg-violet-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <service.icon className="text-violet-600" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Процесс работы</h2>
          
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-violet-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="font-bold mb-1">Бриф</h3>
                <p className="text-gray-600">
                  Обсуждаем задачу, цели проекта и ваши пожелания
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-violet-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="font-bold mb-1">Концепция</h3>
                <p className="text-gray-600">
                  Разрабатываем концепцию и показываем первые варианты
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-violet-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="font-bold mb-1">Доработка</h3>
                <p className="text-gray-600">
                  Вносим правки и доводим дизайн до идеала
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                ✓
              </div>
              <div>
                <h3 className="font-bold mb-1">Сдача</h3>
                <p className="text-gray-600">
                  Передаём готовые файлы во всех необходимых форматах
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-violet-500 to-purple-600 text-white">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Нужен дизайн?</h2>
          <p className="text-white/80 mb-8">
            Свяжитесь с нами, чтобы обсудить ваш проект
          </p>
          <a
            href="https://t.me/VITON_13"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-violet-600 px-8 py-4 rounded-xl font-semibold hover:bg-white/90 transition-colors"
          >
            Написать в Telegram
          </a>
        </div>
      </section>
    </div>
  )
}
