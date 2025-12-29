'use client'

import { useState, useEffect } from 'react'

export default function CookieConsent() {
  const [show, setShow] = useState(false)
  const [showSettings, setShowSettings] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent')
    if (!consent) {
      setTimeout(() => setShow(true), 1000)
    }
  }, [])

  function acceptAll() {
    localStorage.setItem('cookieConsent', 'all')
    setShow(false)
  }

  function acceptEssential() {
    localStorage.setItem('cookieConsent', 'essential')
    setShow(false)
    setShowSettings(false)
  }

  if (!show) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[9999] animate-slide-up">
      <div className="bg-white border-t border-gray-200 shadow-2xl">
        {!showSettings ? (
          <div className="max-w-4xl mx-auto p-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-viton-purple/10 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-xl">🍪</span>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-lg mb-2">Мы заботимся о Ваших cookie</h3>
                <p className="text-gray-600 text-sm mb-4">
                  viton13.com использует файлы cookie для улучшения Вашего 
                  пользовательского опыта, сбора статистики и предоставления персонализированных 
                  рекомендаций. Нажав «Принять все» Вы даете согласие на обработку файлов cookie.
                </p>
                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={acceptAll}
                    className="bg-viton-purple text-white px-6 py-2.5 rounded-xl font-semibold hover:bg-viton-purple-dark transition-colors"
                  >
                    Принять все
                  </button>
                  <button
                    onClick={() => setShowSettings(true)}
                    className="bg-gray-100 text-gray-700 px-6 py-2.5 rounded-xl font-semibold hover:bg-gray-200 transition-colors"
                  >
                    Настройки Cookie
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="max-w-4xl mx-auto p-6">
            <h3 className="font-bold text-lg mb-4">Настройки Cookie</h3>
            <p className="text-gray-600 text-sm mb-6">
              Файлы cookie, необходимые для корректной работы сайта, всегда включены.
            </p>
            
            <div className="space-y-3 mb-6">
              <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
                <div>
                  <h4 className="font-semibold">Основные файлы cookie</h4>
                  <p className="text-sm text-gray-500">Всегда включены</p>
                </div>
                <div className="bg-viton-purple text-white text-xs px-3 py-1.5 rounded-full font-medium">
                  Включено
                </div>
              </div>
              
              <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
                <div>
                  <h4 className="font-semibold">Аналитические файлы cookie</h4>
                  <p className="text-sm text-gray-500">Сбор статистики использования</p>
                </div>
                <div className="bg-gray-300 text-gray-600 text-xs px-3 py-1.5 rounded-full font-medium">
                  Отключено
                </div>
              </div>
              
              <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
                <div>
                  <h4 className="font-semibold">Рекламные файлы cookie</h4>
                  <p className="text-sm text-gray-500">Персонализированная реклама</p>
                </div>
                <div className="bg-gray-300 text-gray-600 text-xs px-3 py-1.5 rounded-full font-medium">
                  Отключено
                </div>
              </div>
            </div>
            
            <div className="flex gap-3">
              <button
                onClick={acceptEssential}
                className="bg-viton-purple text-white px-6 py-2.5 rounded-xl font-semibold hover:bg-viton-purple-dark transition-colors"
              >
                Подтвердить
              </button>
              <button
                onClick={() => setShowSettings(false)}
                className="bg-gray-100 text-gray-700 px-6 py-2.5 rounded-xl font-semibold hover:bg-gray-200 transition-colors"
              >
                Назад
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
