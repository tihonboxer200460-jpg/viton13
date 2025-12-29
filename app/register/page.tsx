'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Eye, EyeOff } from 'lucide-react'

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    contactType: 'telegram',
    contactValue: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Функция регистрации в разработке')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-viton-dark via-[#0d0d1a] to-[#1a0d2e] px-4 py-12">
      {/* Background effects */}
      <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-viton-purple/20 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-viton-cyan/15 rounded-full blur-[80px]" />

      <div className="relative z-10 w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-block">
            <h1 className="text-3xl font-black tracking-[4px] text-white text-neon-lg">
              VITON13
            </h1>
          </Link>
        </div>

        {/* Form Card */}
        <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-2xl">
          <h2 className="text-2xl font-bold text-white text-center mb-8">Регистрация</h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <input
                type="text"
                placeholder="Ваше имя"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="input-dark w-full"
                required
              />
            </div>

            <div>
              <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="input-dark w-full"
                required
              />
            </div>

            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Пароль"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="input-dark w-full pr-12"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            <div>
              <label className="block text-white/60 text-sm mb-2">Способ связи</label>
              <select
                value={formData.contactType}
                onChange={(e) => setFormData({ ...formData, contactType: e.target.value })}
                className="input-dark w-full cursor-pointer"
              >
                <option value="telegram">Telegram</option>
                <option value="whatsapp">WhatsApp</option>
                <option value="phone">Телефон</option>
              </select>
            </div>

            <div>
              <input
                type="text"
                placeholder={
                  formData.contactType === 'telegram' ? '@username' :
                  formData.contactType === 'whatsapp' ? '+7 (999) 999-99-99' :
                  '+7 (999) 999-99-99'
                }
                value={formData.contactValue}
                onChange={(e) => setFormData({ ...formData, contactValue: e.target.value })}
                className="input-dark w-full"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-viton-purple text-white py-4 rounded-xl font-semibold hover:bg-viton-purple-dark transition-colors"
            >
              Зарегистрироваться
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-white/60">
              Уже есть аккаунт?{' '}
              <Link href="/login" className="text-viton-cyan hover:underline font-medium">
                Войти
              </Link>
            </p>
          </div>
        </div>

        {/* Back to home */}
        <div className="mt-6 text-center">
          <Link href="/" className="text-white/40 hover:text-white/60 transition-colors text-sm">
            ← Вернуться на главную
          </Link>
        </div>
      </div>
    </div>
  )
}
