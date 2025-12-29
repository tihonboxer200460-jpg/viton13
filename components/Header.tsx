'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Menu, X } from 'lucide-react'

type MenuKey = 'home' | 'about' | 'shop' | 'services' | 'support' | 'account'

const menuItems: { key: MenuKey; label: string; href: string }[] = [
  { key: 'home', label: 'Главная', href: '/' },
  { key: 'about', label: 'О нас', href: '/about' },
  { key: 'shop', label: 'Магазин', href: '/shop' },
  { key: 'services', label: 'Услуги', href: '/services' },
  { key: 'support', label: 'Поддержка', href: '/support' },
]

const menuPanes: Record<MenuKey, { title: string; links: { label: string; href: string }[] }> = {
  home: {
    title: 'Навигация',
    links: [
      { label: 'Главная', href: '/' },
      { label: 'Магазин', href: '/shop' },
      { label: 'Услуги', href: '/services' },
    ],
  },
  about: {
    title: 'О нас',
    links: [
      { label: 'Компания', href: '/about' },
      { label: 'Артисты VITON', href: '/music' },
    ],
  },
  shop: {
    title: 'Категории',
    links: [
      { label: 'Все товары', href: '/shop' },
      { label: 'Old Money', href: '/shop/old-money' },
      { label: 'Sport', href: '/shop/sport' },
      { label: 'Racing', href: '/shop/racing' },
    ],
  },
  services: {
    title: 'Услуги',
    links: [
      { label: 'Все услуги', href: '/services' },
      { label: 'Гардеробная моды', href: '/services/wardrobe' },
      { label: 'Дизайнер', href: '/services/designer' },
      { label: 'Праздники и подарки', href: '/services/holidays' },
      { label: 'Флорист', href: '/services/flowers' },
    ],
  },
  support: {
    title: 'Поддержка',
    links: [
      { label: 'Центр помощи', href: '/support' },
      { label: 'OIVA Доставка', href: '/oiva' },
    ],
  },
  account: {
    title: 'VITON ID',
    links: [],
  },
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeMenu, setActiveMenu] = useState<MenuKey | null>(null)
  const router = useRouter()

  function toggleMenu(key: MenuKey) {
    if (activeMenu === key) {
      setActiveMenu(null)
      setIsOpen(false)
    } else {
      setActiveMenu(key)
      setIsOpen(true)
    }
  }

  function closeMenu() {
    setIsOpen(false)
    setActiveMenu(null)
  }

  function handleLinkClick(href: string) {
    closeMenu()
    router.push(href)
  }

  return (
    <header className="fixed top-0 left-0 w-full z-[999] bg-white/95 backdrop-blur-md border-b border-black/5">
      {/* Top Bar */}
      <div className="h-[52px] px-4 md:px-8 flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <Link 
          href="/" 
          className="font-black tracking-[3px] text-viton-purple text-neon text-lg"
          onClick={closeMenu}
        >
          VITON13
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6">
          {menuItems.map(item => (
            <button
              key={item.key}
              onClick={() => toggleMenu(item.key)}
              className={`bg-transparent border-none font-medium cursor-pointer transition-all duration-200 ${
                activeMenu === item.key 
                  ? 'text-viton-purple' 
                  : 'text-gray-700 hover:text-viton-purple'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* VITON ID Button */}
        <Link
          href="/login"
          className="bg-viton-purple/10 px-4 py-1.5 rounded-full font-semibold text-viton-purple hover:bg-viton-purple/20 transition-colors text-sm"
        >
          VITON ID
        </Link>

        {/* Burger */}
        <button 
          className="md:hidden bg-transparent border-none text-viton-purple ml-3"
          onClick={() => {
            setIsOpen(!isOpen)
            if (!isOpen) setActiveMenu('home')
          }}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 transition-opacity duration-300"
          onClick={closeMenu}
        />
      )}

      {/* Dropdown Panel */}
      <div 
        className={`absolute top-[52px] left-0 w-full bg-white shadow-xl transition-all duration-300 ease-out ${
          isOpen 
            ? 'opacity-100 translate-y-0 pointer-events-auto' 
            : 'opacity-0 -translate-y-2 pointer-events-none'
        }`}
      >
        <div className="max-w-7xl mx-auto p-6 md:p-8">
          <div className="flex flex-col md:flex-row gap-8 md:gap-16">
            {/* Menu Content */}
            {activeMenu && activeMenu !== 'account' && (
              <div className="animate-fade-in">
                <h4 className="font-bold text-viton-purple mb-4 text-lg">
                  {menuPanes[activeMenu].title}
                </h4>
                <div className="space-y-2">
                  {menuPanes[activeMenu].links.map(link => (
                    <button
                      key={link.href}
                      onClick={() => handleLinkClick(link.href)}
                      className="block text-gray-700 hover:text-viton-purple transition-colors text-left py-1"
                    >
                      {link.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Account Panel */}
            {activeMenu === 'account' && (
              <div className="animate-fade-in">
                <h4 className="font-bold text-viton-purple mb-4 text-lg">VITON ID</h4>
                <div className="space-y-2">
                  <button
                    onClick={() => handleLinkClick('/login')}
                    className="block text-gray-700 hover:text-viton-purple transition-colors text-left py-1"
                  >
                    Войти
                  </button>
                  <button
                    onClick={() => handleLinkClick('/register')}
                    className="block text-gray-700 hover:text-viton-purple transition-colors text-left py-1"
                  >
                    Создать аккаунт
                  </button>
                </div>
                <button
                  onClick={closeMenu}
                  className="mt-4 text-gray-500 text-sm hover:text-viton-purple transition-colors"
                >
                  Продолжить просмотр
                </button>
              </div>
            )}

            {/* Mobile: All Categories */}
            <div className="md:hidden">
              {!activeMenu && menuItems.map(item => (
                <div key={item.key} className="mb-6">
                  <h4 className="font-bold text-viton-purple mb-3">
                    {menuPanes[item.key].title}
                  </h4>
                  {menuPanes[item.key].links.map(link => (
                    <button
                      key={link.href}
                      onClick={() => handleLinkClick(link.href)}
                      className="block text-gray-700 hover:text-viton-purple transition-colors text-left py-1"
                    >
                      {link.label}
                    </button>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
