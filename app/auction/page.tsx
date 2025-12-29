import Link from 'next/link'
import { Gavel, Calendar, Clock, Users, ArrowRight, CheckCircle } from 'lucide-react'

export default function AuctionPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="relative py-24 bg-gradient-to-br from-amber-500 to-orange-600 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 right-10 text-[200px] font-black opacity-10">13</div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full mb-6">
            <Gavel size={20} />
            <span>Эксклюзивные торги</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Аукцион VITON13</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Получи эксклюзивный товар по лучшей цене через открытые торги
          </p>
        </div>
      </section>

      {/* Next Auction */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
            <div className="text-center mb-8">
              <span className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Регистрация открыта
              </span>
              <h2 className="text-3xl font-bold mb-4">Следующий аукцион</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-4 bg-gray-50 rounded-xl">
                <Calendar className="mx-auto mb-2 text-viton-purple" size={28} />
                <div className="text-2xl font-bold">1 февраля</div>
                <div className="text-gray-500">Дата проведения</div>
              </div>
              
              <div className="text-center p-4 bg-gray-50 rounded-xl">
                <Clock className="mx-auto mb-2 text-viton-purple" size={28} />
                <div className="text-2xl font-bold">13:00</div>
                <div className="text-gray-500">Время начала</div>
              </div>
              
              <div className="text-center p-4 bg-gray-50 rounded-xl">
                <Users className="mx-auto mb-2 text-viton-purple" size={28} />
                <div className="text-2xl font-bold">Telegram</div>
                <div className="text-gray-500">Платформа</div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="mb-6">
                <span className="text-gray-500">Стартовый взнос:</span>
                <span className="text-4xl font-bold text-viton-purple ml-2">1 300 ₽</span>
              </div>
              <a
                href="https://t.me/VITON_13"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-viton-purple text-white px-8 py-4 rounded-xl font-semibold hover:bg-viton-purple-dark transition-colors"
              >
                Записаться на аукцион
                <ArrowRight size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Rules */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Правила аукциона</h2>
          
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-viton-purple text-white rounded-full flex items-center justify-center font-bold flex-shrink-0 text-sm">
                1
              </div>
              <div>
                <h3 className="font-bold mb-1">Регистрация</h3>
                <p className="text-gray-600">
                  Для участия в аукционе необходимо зарегистрироваться и внести стартовый взнос 1300₽. 
                  Взнос является обязательным условием участия.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-viton-purple text-white rounded-full flex items-center justify-center font-bold flex-shrink-0 text-sm">
                2
              </div>
              <div>
                <h3 className="font-bold mb-1">Подтверждение участия</h3>
                <p className="text-gray-600">
                  После оплаты взноса вы получите подтверждение и доступ к аукциону в Telegram.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-viton-purple text-white rounded-full flex items-center justify-center font-bold flex-shrink-0 text-sm">
                3
              </div>
              <div>
                <h3 className="font-bold mb-1">Ставки</h3>
                <p className="text-gray-600">
                  Ставки принимаются в реальном времени. Минимальный шаг ставки определяется для каждого лота отдельно.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-viton-purple text-white rounded-full flex items-center justify-center font-bold flex-shrink-0 text-sm">
                4
              </div>
              <div>
                <h3 className="font-bold mb-1">Видеоподтверждение</h3>
                <p className="text-gray-600">
                  Для подтверждения участия может потребоваться видеозапись. Это защищает всех участников от мошенничества.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-viton-purple text-white rounded-full flex items-center justify-center font-bold flex-shrink-0 text-sm">
                5
              </div>
              <div>
                <h3 className="font-bold mb-1">Оплата</h3>
                <p className="text-gray-600">
                  Победитель обязан оплатить товар в течение 3 дней после окончания аукциона. 
                  При отказе от покупки стартовый взнос не возвращается.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-viton-purple text-white rounded-full flex items-center justify-center font-bold flex-shrink-0 text-sm">
                6
              </div>
              <div>
                <h3 className="font-bold mb-1">Доставка</h3>
                <p className="text-gray-600">
                  Доставка победителям осуществляется службой OIVA. Стоимость доставки оплачивается отдельно.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 p-6 bg-amber-50 rounded-xl border border-amber-200">
            <h3 className="font-bold text-amber-800 mb-2">Важно!</h3>
            <p className="text-amber-700">
              Участвуя в аукционе, вы соглашаетесь с правилами проведения торгов. 
              Нарушение правил может привести к блокировке участника без возврата взноса.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Преимущества аукциона</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex gap-4 p-6 bg-white rounded-xl border border-gray-100">
              <CheckCircle className="text-green-500 flex-shrink-0" size={24} />
              <div>
                <h3 className="font-bold mb-1">Эксклюзивные лоты</h3>
                <p className="text-gray-600">Товары, которые нельзя купить в обычном магазине</p>
              </div>
            </div>
            
            <div className="flex gap-4 p-6 bg-white rounded-xl border border-gray-100">
              <CheckCircle className="text-green-500 flex-shrink-0" size={24} />
              <div>
                <h3 className="font-bold mb-1">Выгодные цены</h3>
                <p className="text-gray-600">Возможность приобрести товар ниже рыночной стоимости</p>
              </div>
            </div>
            
            <div className="flex gap-4 p-6 bg-white rounded-xl border border-gray-100">
              <CheckCircle className="text-green-500 flex-shrink-0" size={24} />
              <div>
                <h3 className="font-bold mb-1">Прозрачные торги</h3>
                <p className="text-gray-600">Все ставки видны всем участникам в реальном времени</p>
              </div>
            </div>
            
            <div className="flex gap-4 p-6 bg-white rounded-xl border border-gray-100">
              <CheckCircle className="text-green-500 flex-shrink-0" size={24} />
              <div>
                <h3 className="font-bold mb-1">Азарт и эмоции</h3>
                <p className="text-gray-600">Уникальный опыт участия в живых торгах</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-amber-500 to-orange-600 text-white">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Готовы к торгам?</h2>
          <p className="text-white/80 mb-8">
            Запишитесь на ближайший аукцион и получите шанс приобрести эксклюзивные товары
          </p>
          <a
            href="https://t.me/VITON_13"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-amber-600 px-8 py-4 rounded-xl font-semibold hover:bg-white/90 transition-colors"
          >
            Записаться в Telegram
            <ArrowRight size={20} />
          </a>
        </div>
      </section>
    </div>
  )
}
