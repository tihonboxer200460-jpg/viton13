import Link from 'next/link'
import { GraduationCap, Target, Users, Lightbulb, Rocket, Crown, ArrowRight, FileSpreadsheet, BookOpen } from 'lucide-react'

const levels = [
  {
    level: 1,
    title: 'Исследователь',
    description: 'Начальный уровень. Знакомство с основами и формирование базовых навыков.',
    color: 'from-gray-400 to-gray-500',
  },
  {
    level: 2,
    title: 'Специалист',
    description: 'Углублённое изучение выбранного направления. Практические задания.',
    color: 'from-blue-400 to-blue-500',
  },
  {
    level: 3,
    title: 'Профессионал',
    description: 'Продвинутые техники и методологии. Работа над реальными проектами.',
    color: 'from-purple-400 to-purple-500',
  },
  {
    level: 4,
    title: 'Создатель',
    description: 'Создание собственных проектов и продуктов. Менторство.',
    color: 'from-amber-400 to-amber-500',
  },
  {
    level: 5,
    title: 'Инноватор',
    description: 'Высший уровень. Инновации, лидерство и влияние на индустрию.',
    color: 'from-viton-purple to-viton-pink',
  },
]

const products = [
  {
    title: 'Excel-планер "Базовый"',
    description: 'Шаблон для планирования и отслеживания задач',
    price: 113,
    icon: FileSpreadsheet,
  },
  {
    title: 'Excel-планер "Продвинутый"',
    description: 'Расширенный планер с аналитикой и отчётами',
    price: 226,
    icon: FileSpreadsheet,
  },
  {
    title: 'Доступ к курсам',
    description: 'Безлимитный доступ к образовательным материалам',
    price: 339,
    priceLabel: 'от',
    icon: BookOpen,
  },
]

export default function EducationPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="relative py-24 bg-gradient-to-br from-emerald-600 to-teal-700 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-40 h-40 border-2 border-white/30 rounded-full" />
          <div className="absolute bottom-20 right-20 w-60 h-60 border-2 border-white/30 rounded-full" />
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full mb-6">
            <GraduationCap size={20} />
            <span>Образовательная платформа</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Центр самообразования</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Инновационная платформа для развития навыков и достижения новых высот
          </p>
        </div>
      </section>

      {/* About */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">5 классов развития</h2>
            <p className="text-gray-600 text-lg">
              Уникальная система прогрессии, которая поможет вам достичь мастерства в любой области
            </p>
          </div>
          
          <div className="space-y-4">
            {levels.map((level) => (
              <div 
                key={level.level}
                className="flex items-center gap-6 p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${level.color} flex items-center justify-center text-white font-bold text-xl flex-shrink-0`}>
                  {level.level}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">{level.title}</h3>
                  <p className="text-gray-600">{level.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quiz CTA */}
      <section className="py-20 bg-viton-dark text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="w-20 h-20 bg-gradient-to-br from-viton-purple to-viton-cyan rounded-full flex items-center justify-center mx-auto mb-6">
            <Target className="text-white" size={32} />
          </div>
          <h2 className="text-3xl font-bold mb-4">Определи свой уровень</h2>
          <p className="text-white/70 mb-8 max-w-xl mx-auto">
            Пройди короткий квиз и узнай, с какого класса тебе лучше начать обучение
          </p>
          <button className="inline-flex items-center gap-2 bg-viton-purple text-white px-8 py-4 rounded-xl font-semibold hover:bg-viton-purple-dark transition-colors">
            Пройти квиз
            <ArrowRight size={20} />
          </button>
        </div>
      </section>

      {/* Products */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Материалы и инструменты</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {products.map((product) => (
              <div 
                key={product.title}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-4">
                  <product.icon className="text-emerald-600" size={24} />
                </div>
                <h3 className="font-bold mb-2">{product.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-viton-purple">
                    {product.priceLabel && <span className="text-sm font-normal text-gray-500 mr-1">{product.priceLabel}</span>}
                    {product.price} ₽
                  </span>
                  <button className="text-viton-purple font-medium hover:underline">
                    Подробнее
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Почему VITON13 Education</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="text-emerald-600" size={28} />
              </div>
              <h3 className="font-bold mb-2">Практика</h3>
              <p className="text-gray-600 text-sm">
                80% обучения — практические задания и реальные проекты
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="text-emerald-600" size={28} />
              </div>
              <h3 className="font-bold mb-2">Менторство</h3>
              <p className="text-gray-600 text-sm">
                Персональная поддержка от экспертов отрасли
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Rocket className="text-emerald-600" size={28} />
              </div>
              <h3 className="font-bold mb-2">Карьера</h3>
              <p className="text-gray-600 text-sm">
                Помощь в трудоустройстве и развитии карьеры
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Crown className="text-emerald-600" size={28} />
              </div>
              <h3 className="font-bold mb-2">Сертификаты</h3>
              <p className="text-gray-600 text-sm">
                Официальные сертификаты по окончании курсов
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Terms Link */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h3 className="text-xl font-bold mb-4">Условия вступления</h3>
          <p className="text-gray-600 mb-6">
            Перед началом обучения ознакомьтесь с правилами и условиями участия в образовательных программах
          </p>
          <Link
            href="/education/terms"
            className="text-viton-purple font-medium hover:underline"
          >
            Читать условия →
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-700 text-white">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Начни своё развитие сегодня</h2>
          <p className="text-white/80 mb-8">
            Присоединяйся к сообществу VITON13 и открой новые возможности
          </p>
          <Link
            href="/register"
            className="inline-flex items-center gap-2 bg-white text-emerald-600 px-8 py-4 rounded-xl font-semibold hover:bg-white/90 transition-colors"
          >
            Создать аккаунт
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  )
}
