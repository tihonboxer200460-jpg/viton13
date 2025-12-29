'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronDown, MessageCircle, Package, Truck, Gavel, AlertCircle, HelpCircle } from 'lucide-react'

const supportCategories = [
  {
    id: 'services',
    title: 'Поддержка услуг',
    icon: MessageCircle,
    content: `В VITON13 мы строим свою репутацию на безупречном профессионализме и абсолютной приверженности качеству. Мы понимаем, что даже в самой тщательно организованной работе могут возникать непредвиденные ситуации.

Ваш прямой контакт с экспертом — наша основа. Обращаясь к нам, вы напрямую связываетесь с одним из наших высококвалифицированных специалистов. Наши ребята — не просто исполнители, это мастера своего дела, прошедшие строжайший отбор.

Гарантия безопасности и надёжности. Все наши специалисты проходят тщательную проверку перед тем, как приступить к работе.`,
  },
  {
    id: 'products',
    title: 'Поддержка с продуктом',
    icon: Package,
    content: `Мы гарантируем, что все товары соответствуют высоким стандартам качества.

• Вопросы качества и производственный брак: Если вы обнаружили дефект, мы организуем обмен товара или полный возврат стоимости.

• Проблемы с доставкой: При задержках или повреждении мы инициируем расследование и организуем повторную отправку или возврат средств.

• Несоответствие товара: Если товар не соответствует заказу, мы организуем возврат за наш счёт и отправим правильный товар.

• Возврат товара: В течение 7 дней при сохранении товарного вида.

• Гарантийное обслуживание: На все товары распространяется гарантия.`,
  },
  {
    id: 'oiva',
    title: 'Поддержка OIVA',
    icon: Truck,
    content: `OIVA — это служба доставки VITON13, которая обеспечивает быструю и надёжную доставку ваших заказов.

Если у вас возникли вопросы по доставке:
• Статус заказа можно отследить в личном кабинете
• При задержке доставки свяжитесь с нами
• Претензии по качеству доставки рассматриваются в течение 24 часов

Зоны доставки: Санкт-Петербург, Ленинградская область, Архангельск.`,
  },
  {
    id: 'auction',
    title: 'Поддержка аукциона',
    icon: Gavel,
    content: `Аукцион VITON13 — это возможность получить эксклюзивные товары по выгодным ценам.

Правила участия:
• Регистрационный взнос: 1300₽
• Ставки принимаются в режиме реального времени
• Победитель обязан оплатить товар в течение 3 дней
• При отказе от покупки взнос не возвращается

По всем вопросам аукциона обращайтесь в поддержку.`,
  },
  {
    id: 'errors',
    title: 'Ошибки на сайте',
    icon: AlertCircle,
    content: `Если вы обнаружили ошибку на сайте или столкнулись с техническими проблемами, пожалуйста, сообщите нам.

Опишите:
• Что вы пытались сделать
• Какую ошибку получили
• На каком устройстве и браузере работали

Мы ценим вашу обратную связь и оперативно исправляем все найденные проблемы.`,
  },
  {
    id: 'general',
    title: 'Общая поддержка',
    icon: HelpCircle,
    content: `Не нашли ответ на свой вопрос? Наша команда поддержки готова помочь вам с любыми вопросами.

VIT Ассистент работает 24/7 и готов ответить на ваши вопросы в любое время.

Свяжитесь с нами:
• Telegram: @VITON_13
• Email: support@viton13.com`,
  },
]

export default function SupportPage() {
  const [openCategory, setOpenCategory] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-white py-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Центр поддержки <span className="text-viton-purple">VITON13</span>
          </h1>
          <p className="text-xl text-gray-600">
            Мы здесь, чтобы помочь вам с любыми вопросами
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4">
          <div className="space-y-4">
            {supportCategories.map((category) => (
              <div
                key={category.id}
                className="bg-white rounded-2xl border border-gray-100 overflow-hidden"
              >
                <button
                  onClick={() => setOpenCategory(openCategory === category.id ? null : category.id)}
                  className="w-full px-6 py-5 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-viton-purple/10 rounded-xl flex items-center justify-center">
                      <category.icon className="text-viton-purple" size={24} />
                    </div>
                    <span className="font-semibold text-lg">{category.title}</span>
                  </div>
                  <ChevronDown 
                    className={`text-gray-400 transition-transform ${
                      openCategory === category.id ? 'rotate-180' : ''
                    }`} 
                    size={24} 
                  />
                </button>
                
                {openCategory === category.id && (
                  <div className="px-6 pb-6">
                    <div className="pl-16 text-gray-600 whitespace-pre-line">
                      {category.content}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="w-20 h-20 bg-gradient-to-br from-viton-purple to-viton-cyan rounded-full flex items-center justify-center mx-auto mb-6">
            <MessageCircle className="text-white" size={32} />
          </div>
          <h2 className="text-2xl font-bold mb-4">VIT Ассистент</h2>
          <p className="text-gray-600 mb-6">
            Наш виртуальный ассистент доступен 24/7 и готов помочь вам с любыми вопросами
          </p>
          <a
            href="https://t.me/VITON_13"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-viton-purple text-white px-8 py-4 rounded-xl font-semibold hover:bg-viton-purple-dark transition-colors"
          >
            Написать в Telegram
          </a>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">Полезные ссылки</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link
              href="/privacy"
              className="bg-white p-6 rounded-xl border border-gray-100 hover:border-viton-purple/30 transition-colors text-center"
            >
              <h3 className="font-semibold mb-2">Политика конфиденциальности</h3>
              <p className="text-gray-500 text-sm">Как мы обрабатываем данные</p>
            </Link>
            <Link
              href="/returns"
              className="bg-white p-6 rounded-xl border border-gray-100 hover:border-viton-purple/30 transition-colors text-center"
            >
              <h3 className="font-semibold mb-2">Возврат и обмен</h3>
              <p className="text-gray-500 text-sm">Условия возврата товаров</p>
            </Link>
            <Link
              href="/legal"
              className="bg-white p-6 rounded-xl border border-gray-100 hover:border-viton-purple/30 transition-colors text-center"
            >
              <h3 className="font-semibold mb-2">Юридическая информация</h3>
              <p className="text-gray-500 text-sm">Реквизиты и документы</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
