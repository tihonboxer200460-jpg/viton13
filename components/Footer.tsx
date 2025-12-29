import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Main Footer */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="font-black text-xl tracking-[3px] text-viton-purple text-neon">
              VITON13
            </Link>
            <p className="mt-4 text-gray-600 text-sm">
              Корпорация будущего. Мы создаём уникальные продукты, сервисы и решения.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4 text-gray-900">Навигация</h4>
            <div className="space-y-2">
              <Link href="/" className="block text-gray-600 hover:text-viton-purple transition-colors text-sm">
                Главная
              </Link>
              <Link href="/shop" className="block text-gray-600 hover:text-viton-purple transition-colors text-sm">
                Магазин
              </Link>
              <Link href="/services" className="block text-gray-600 hover:text-viton-purple transition-colors text-sm">
                Услуги
              </Link>
              <Link href="/about" className="block text-gray-600 hover:text-viton-purple transition-colors text-sm">
                О нас
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-gray-900">Сервисы</h4>
            <div className="space-y-2">
              <Link href="/oiva" className="block text-gray-600 hover:text-viton-purple transition-colors text-sm">
                OIVA Доставка
              </Link>
              <Link href="/auction" className="block text-gray-600 hover:text-viton-purple transition-colors text-sm">
                Аукцион
              </Link>
              <Link href="/education" className="block text-gray-600 hover:text-viton-purple transition-colors text-sm">
                Образование
              </Link>
              <Link href="/music" className="block text-gray-600 hover:text-viton-purple transition-colors text-sm">
                Музыка
              </Link>
            </div>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4 text-gray-900">Поддержка</h4>
            <div className="space-y-2">
              <Link href="/support" className="block text-gray-600 hover:text-viton-purple transition-colors text-sm">
                Центр помощи
              </Link>
              <Link href="/privacy" className="block text-gray-600 hover:text-viton-purple transition-colors text-sm">
                Конфиденциальность
              </Link>
              <Link href="/legal" className="block text-gray-600 hover:text-viton-purple transition-colors text-sm">
                Юридическая информация
              </Link>
              <Link href="/returns" className="block text-gray-600 hover:text-viton-purple transition-colors text-sm">
                Возврат и продажи
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-500 text-sm">
            © 2026 VITON13. Все права защищены.
          </div>
          <div className="flex gap-6 text-sm">
            <Link href="/privacy" className="text-gray-500 hover:text-viton-purple transition-colors">
              Политика конфиденциальности
            </Link>
            <Link href="/legal" className="text-gray-500 hover:text-viton-purple transition-colors">
              Юридическая информация
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
