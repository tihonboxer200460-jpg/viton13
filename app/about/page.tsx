import Link from 'next/link'
import { ArrowRight, Award, Users, Heart, Zap } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative py-24 bg-gradient-to-br from-viton-dark via-[#0d0d1a] to-[#1a0d2e] text-white overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-viton-purple/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-viton-cyan/15 rounded-full blur-[80px]" />
        
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            О компании <span className="text-gradient">VITON13</span>
          </h1>
          <p className="text-xl text-white/70">
            Корпорация будущего. Единая экосистема сервисов.
          </p>
        </div>
      </section>

      {/* Founder */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-48 h-48 bg-gradient-to-br from-viton-purple to-viton-cyan rounded-full flex items-center justify-center text-white text-5xl font-bold flex-shrink-0">
              ВТ
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-2">Тарасов Виталий</h2>
              <p className="text-viton-purple font-medium mb-4">Основатель & CEO</p>
              <blockquote className="text-xl text-gray-700 leading-relaxed">
                "Я за комфорт и возможности в одном месте! VITON13 — это единая экосистема сервисов, 
                где технологии, экспертиза и эстетика соединяются в одном пространстве."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">История</h2>
          
          <div className="relative pl-8 border-l-2 border-viton-purple/30">
            <div className="mb-12">
              <div className="absolute left-0 w-4 h-4 bg-viton-purple rounded-full -translate-x-[9px]" />
              <div className="text-viton-purple font-bold mb-2">13 ноября 2025</div>
              <h3 className="text-xl font-bold mb-2">Основание VITON13</h3>
              <p className="text-gray-600">
                Компания VITON13 была основана с миссией создания единой экосистемы сервисов 
                для комфортной жизни и эффективного бизнеса.
              </p>
            </div>
            
            <div className="mb-12">
              <div className="absolute left-0 w-4 h-4 bg-viton-purple rounded-full -translate-x-[9px]" />
              <div className="text-viton-purple font-bold mb-2">Декабрь 2025</div>
              <h3 className="text-xl font-bold mb-2">Запуск магазина</h3>
              <p className="text-gray-600">
                Открытие магазина с коллекциями Old Money, Sport и Racing VITON13™.
              </p>
            </div>
            
            <div>
              <div className="absolute left-0 w-4 h-4 bg-viton-cyan rounded-full -translate-x-[9px]" />
              <div className="text-viton-cyan font-bold mb-2">2026</div>
              <h3 className="text-xl font-bold mb-2">Развитие экосистемы</h3>
              <p className="text-gray-600">
                Планируется запуск VITON ID, Marketplace, AI Layer и расширение географии услуг.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Наши ценности</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-viton-purple/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Award className="text-viton-purple" size={32} />
              </div>
              <h3 className="font-bold text-lg mb-2">Качество</h3>
              <p className="text-gray-600 text-sm">
                Мы не идём на компромиссы в качестве продуктов и услуг
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-viton-purple/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="text-viton-purple" size={32} />
              </div>
              <h3 className="font-bold text-lg mb-2">Клиент в центре</h3>
              <p className="text-gray-600 text-sm">
                Каждое решение принимается с учётом потребностей клиента
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-viton-purple/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Zap className="text-viton-purple" size={32} />
              </div>
              <h3 className="font-bold text-lg mb-2">Инновации</h3>
              <p className="text-gray-600 text-sm">
                Мы внедряем передовые технологии для улучшения сервиса
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-viton-purple/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Heart className="text-viton-purple" size={32} />
              </div>
              <h3 className="font-bold text-lg mb-2">Забота</h3>
              <p className="text-gray-600 text-sm">
                Мы заботимся о каждом клиенте как о члене семьи
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Standards */}
      <section className="py-20 bg-viton-dark text-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Стандарты VITON13</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
              <h3 className="font-bold text-lg mb-3">Натуральные материалы</h3>
              <p className="text-white/70">
                Мы используем только натуральные ткани премиального качества в нашей одежде.
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
              <h3 className="font-bold text-lg mb-3">Профессионализм</h3>
              <p className="text-white/70">
                Все специалисты проходят строгий отбор и регулярное обучение.
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
              <h3 className="font-bold text-lg mb-3">Прозрачность</h3>
              <p className="text-white/70">
                Честные цены, понятные условия, открытая коммуникация.
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
              <h3 className="font-bold text-lg mb-3">Гарантия качества</h3>
              <p className="text-white/70">
                Мы гарантируем качество всех продуктов и услуг VITON13.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Присоединяйтесь к VITON13</h2>
          <p className="text-gray-600 mb-8">
            Станьте частью экосистемы будущего уже сегодня
          </p>
          <Link
            href="/register"
            className="inline-flex items-center gap-2 bg-viton-purple text-white px-8 py-4 rounded-xl font-semibold hover:bg-viton-purple-dark transition-colors"
          >
            Создать VITON ID
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  )
}
