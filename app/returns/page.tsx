import { CheckCircle, XCircle, Clock, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function ReturnsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-white py-16 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Возврат и продажи</h1>
          <p className="text-xl text-gray-600">
            Условия возврата товаров и политика продаж VITON13
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          {/* Return Policy */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 mb-8">
            <h2 className="text-2xl font-bold mb-6">Условия возврата</h2>
            
            <div className="space-y-6">
              <div className="flex gap-4 p-4 bg-green-50 rounded-xl">
                <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-bold text-green-800 mb-2">Товар надлежащего качества</h3>
                  <p className="text-green-700">
                    Возврат в течение <strong>7 дней</strong> с момента получения. 
                    Товар должен сохранить товарный вид, потребительские свойства, 
                    пломбы и фабричные ярлыки.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4 p-4 bg-amber-50 rounded-xl">
                <Clock className="text-amber-500 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-bold text-amber-800 mb-2">Товар ненадлежащего качества</h3>
                  <p className="text-amber-700">
                    Возврат или обмен в течение <strong>60 дней</strong> с момента получения. 
                    Необходимо предоставить фото или видео дефекта.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* What can be returned */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 mb-8">
            <h2 className="text-2xl font-bold mb-6">Что можно вернуть</h2>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
                <span>Одежда и аксессуары с бирками</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
                <span>Товары в оригинальной упаковке</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
                <span>Неиспользованные товары</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
                <span>Товары с производственным браком</span>
              </div>
            </div>
          </div>

          {/* What cannot be returned */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 mb-8">
            <h2 className="text-2xl font-bold mb-6">Что нельзя вернуть</h2>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <XCircle className="text-red-500 flex-shrink-0" size={20} />
                <span>Товары, бывшие в употреблении</span>
              </div>
              <div className="flex items-start gap-3">
                <XCircle className="text-red-500 flex-shrink-0" size={20} />
                <span>Товары без бирок и упаковки</span>
              </div>
              <div className="flex items-start gap-3">
                <XCircle className="text-red-500 flex-shrink-0" size={20} />
                <span>Товары с повреждениями от покупателя</span>
              </div>
              <div className="flex items-start gap-3">
                <XCircle className="text-red-500 flex-shrink-0" size={20} />
                <span>Цифровые товары и услуги</span>
              </div>
            </div>
          </div>

          {/* Return Process */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 mb-8">
            <h2 className="text-2xl font-bold mb-6">Как оформить возврат</h2>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-viton-purple text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-bold mb-1">Свяжитесь с нами</h3>
                  <p className="text-gray-600">
                    Напишите в поддержку через Telegram @VITON_13 или на email support@viton13.com
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-viton-purple text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-bold mb-1">Опишите причину</h3>
                  <p className="text-gray-600">
                    Укажите номер заказа, причину возврата и приложите фото товара (при необходимости)
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-viton-purple text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-bold mb-1">Отправьте товар</h3>
                  <p className="text-gray-600">
                    После одобрения заявки отправьте товар по указанному адресу или дождитесь курьера
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  ✓
                </div>
                <div>
                  <h3 className="font-bold mb-1">Получите возврат</h3>
                  <p className="text-gray-600">
                    Деньги будут возвращены в течение 10 рабочих дней после получения товара
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Payment Info */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold mb-6">Способы оплаты</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold mb-3">Принимаем к оплате:</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Банковские карты (Visa, MasterCard, МИР)</li>
                  <li>• СБП (Система быстрых платежей)</li>
                  <li>• Перевод на карту</li>
                  <li>• Оплата при получении</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-bold mb-3">Важно:</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Возврат производится тем же способом, что и оплата</li>
                  <li>• При оплате при получении возврат на карту</li>
                  <li>• Комиссии платёжных систем не возвращаются</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Остались вопросы?</h2>
          <p className="text-gray-600 mb-6">
            Свяжитесь с нашей службой поддержки
          </p>
          <Link
            href="/support"
            className="inline-flex items-center gap-2 bg-viton-purple text-white px-8 py-4 rounded-xl font-semibold hover:bg-viton-purple-dark transition-colors"
          >
            Центр поддержки
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  )
}
