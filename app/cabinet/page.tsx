'use client'

import Link from 'next/link'
import { User, ShoppingBag, Heart, Settings, LogOut, ArrowRight, Package, Bell } from 'lucide-react'

const menuItems = [
  { icon: ShoppingBag, label: 'Мои заказы', href: '/cabinet/orders' },
  { icon: Heart, label: 'Избранное', href: '/cabinet/favorites' },
  { icon: Bell, label: 'Уведомления', href: '/cabinet/notifications' },
  { icon: Settings, label: 'Настройки', href: '/cabinet/settings' },
]

const services = [
  {
    title: 'VITON13 Market',
    description: 'Магазин одежды и аксессуаров',
    href: '/shop',
    color: 'from-viton-purple to-viton-pink',
  },
  {
    title: 'OIVA Delivery',
    description: 'Служба доставки',
    href: '/oiva',
    color: 'from-cyan-500 to-blue-600',
  },
]

export default function CabinetPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white border-b border-gray-100 py-8">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-gradient-to-br from-viton-purple to-viton-cyan rounded-full flex items-center justify-center text-white text-xl font-bold">
              <User size={28} />
            </div>
            <div>
              <h1 className="text-2xl font-bold">Личный кабинет</h1>
              <p className="text-gray-500">VITON ID не активирован</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Activation Banner */}
        <div className="bg-gradient-to-r from-viton-purple to-viton-pink rounded-2xl p-6 text-white mb-8">
          <h2 className="text-xl font-bold mb-2">Активируйте VITON ID</h2>
          <p className="text-white/80 mb-4">
            Получите доступ ко всем сервисам экосистемы VITON13
          </p>
          <Link 
            href="/register"
            className="inline-flex items-center gap-2 bg-white text-viton-purple px-6 py-3 rounded-xl font-semibold hover:bg-white/90 transition-colors"
          >
            Активировать
            <ArrowRight size={18} />
          </Link>
        </div>

        {/* Menu */}
        <div className="bg-white rounded-2xl border border-gray-100 mb-8 overflow-hidden">
          {menuItems.map((item, index) => (
            <Link
              key={item.label}
              href={item.href}
              className={`flex items-center gap-4 p-4 hover:bg-gray-50 transition-colors ${
                index !== menuItems.length - 1 ? 'border-b border-gray-100' : ''
              }`}
            >
              <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center">
                <item.icon size={20} className="text-gray-600" />
              </div>
              <span className="flex-1 font-medium">{item.label}</span>
              <ArrowRight size={18} className="text-gray-400" />
            </Link>
          ))}
        </div>

        {/* Services */}
        <h2 className="text-xl font-bold mb-4">Сервисы</h2>
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-all"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4`}>
                <Package className="text-white" size={24} />
              </div>
              <h3 className="font-bold mb-1 group-hover:text-viton-purple transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-500 text-sm">{service.description}</p>
            </Link>
          ))}
        </div>

        {/* Logout */}
        <button className="flex items-center gap-2 text-red-500 hover:text-red-600 transition-colors">
          <LogOut size={18} />
          Выйти из аккаунта
        </button>
      </div>
    </div>
  )
}
