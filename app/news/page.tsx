import { ArrowRight, Zap, Shield, Cpu, Smartphone, Network } from 'lucide-react'

const announcements = [
  {
    title: 'VITON ID',
    status: 'development',
    statusLabel: 'В разработке',
    description: 'Единый цифровой идентификатор экосистемы VITON13. Один аккаунт для всех сервисов.',
    icon: Shield,
    color: 'cyan',
  },
  {
    title: 'Private Club',
    status: 'development',
    statusLabel: 'В разработке',
    description: 'Закрытый клуб привилегий для постоянных клиентов VITON13.',
    icon: Zap,
    color: 'purple',
  },
  {
    title: 'Marketplace',
    status: 'beta',
    statusLabel: 'Бета-версия',
    description: 'Платформа товаров и сервисов внутри экосистемы.',
    icon: Network,
    color: 'pink',
  },
  {
    title: 'VITON App',
    status: 'development',
    statusLabel: 'В разработке',
    description: 'Мобильное приложение для iOS и Android с полным доступом к сервисам.',
    icon: Smartphone,
    color: 'blue',
  },
  {
    title: 'AI Layer',
    status: 'initializing',
    statusLabel: 'Инициализация',
    description: 'Интеллектуальные модули и автоматизация на базе искусственного интеллекта.',
    icon: Cpu,
    color: 'green',
  },
]

const statusColors: Record<string, string> = {
  development: 'bg-cyan-500/20 text-cyan-400',
  beta: 'bg-pink-500/20 text-pink-400',
  initializing: 'bg-green-500/20 text-green-400',
}

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-viton-dark text-white">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-viton-purple/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-viton-cyan/15 rounded-full blur-[100px]" />
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Новости · Обновления · Анонсы
          </h1>
          <p className="text-xl text-white/60">
            Следите за развитием экосистемы VITON13
          </p>
        </div>
      </section>

      {/* Announcements */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Что мы разрабатываем</h2>
          
          <div className="space-y-6">
            {announcements.map((item) => (
              <div
                key={item.title}
                className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <item.icon size={24} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold">{item.title}</h3>
                      <span className={`text-xs font-mono px-2 py-1 rounded-full ${statusColors[item.status]}`}>
                        {item.statusLabel}
                      </span>
                    </div>
                    <p className="text-white/60">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming */}
      <section className="py-20 bg-black/30">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Скоро</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-viton-purple/20 to-viton-pink/20 rounded-2xl p-6 border border-white/10">
              <div className="text-sm text-viton-cyan font-mono mb-2">Март 2026</div>
              <h3 className="text-xl font-bold mb-2">Социальная сеть VITON</h3>
              <p className="text-white/60">
                Собственная социальная платформа для участников экосистемы
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-viton-cyan/20 to-blue-500/20 rounded-2xl p-6 border border-white/10">
              <div className="text-sm text-viton-cyan font-mono mb-2">Q2 2026</div>
              <h3 className="text-xl font-bold mb-2">VITON GPT</h3>
              <p className="text-white/60">
                Персональный AI-ассистент для клиентов VITON13
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Subscribe */}
      <section className="py-20">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Будьте в курсе</h2>
          <p className="text-white/60 mb-8">
            Подпишитесь на наш Telegram-канал, чтобы первыми узнавать о новостях
          </p>
          <a
            href="https://t.me/VITON_13"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-viton-purple text-white px-8 py-4 rounded-xl font-semibold hover:bg-viton-purple-dark transition-colors"
          >
            Подписаться в Telegram
            <ArrowRight size={20} />
          </a>
        </div>
      </section>
    </div>
  )
}
