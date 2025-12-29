'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, ShoppingBag, Truck, Gavel, GraduationCap, Music, Sparkles } from 'lucide-react'
import { FadeUp, FadeLeft, FadeRight, StaggerContainer, StaggerItem, HoverCard, ScaleIn } from '@/components/Animations'

const directions = [
  {
    title: 'Магазин «VITON13»',
    description: 'Здесь вы можете посмотреть наш ассортимент и оформить покупку.',
    href: '/shop',
    icon: ShoppingBag,
    color: 'from-purple-500 to-indigo-600',
  },
  {
    title: 'Услуги',
    description: 'Эксклюзивные сервисы и консалтинг под ключ для вашей жизни и бизнеса.',
    href: '/services',
    icon: Sparkles,
    color: 'from-pink-500 to-rose-600',
  },
  {
    title: 'OIVA',
    description: 'Профессиональная доставка и аккуратное сопровождение ваших заказов.',
    href: '/oiva',
    icon: Truck,
    color: 'from-cyan-500 to-blue-600',
  },
  {
    title: 'Аукцион',
    description: 'Получите эксклюзивный товар через открытые торги. Участие — 1300₽.',
    href: '/auction',
    icon: Gavel,
    color: 'from-amber-500 to-orange-600',
  },
  {
    title: 'Центр самообразования',
    description: 'Инновационная платформа для развития навыков и достижения новых высот.',
    href: '/education',
    icon: GraduationCap,
    color: 'from-emerald-500 to-teal-600',
  },
  {
    title: 'VITON13 MUSIC',
    description: 'Место, где живет звук будущего. Наши артисты: VIOR7 и VIORA13.',
    href: '/music',
    icon: Music,
    color: 'from-violet-500 to-purple-600',
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-viton-dark via-[#0d0d1a] to-[#1a0d2e]" />
        
        {/* Animated gradient orbs */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-viton-purple/30 rounded-full blur-[120px]"
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-viton-cyan/20 rounded-full blur-[100px]"
          animate={{ 
            scale: [1, 1.3, 1],
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div 
          className="absolute top-1/2 right-1/3 w-[300px] h-[300px] bg-viton-pink/15 rounded-full blur-[80px]"
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'linear-gradient(rgba(109, 60, 255, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(109, 60, 255, 0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }} />

        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/20"
          >
            <motion.span 
              className="w-2.5 h-2.5 bg-green-400 rounded-full"
              animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-white/80 text-sm font-medium">Экосистема активна</span>
          </motion.div>
          
          <motion.h1 
            className="text-6xl md:text-8xl lg:text-9xl font-black text-white mb-8 tracking-tight"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block bg-gradient-to-r from-[#5b2eff] via-[#8c6bff] to-[#4fc3ff] text-transparent bg-clip-text">
              VITON13
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-2xl md:text-3xl text-white/50 mb-4 font-light tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            корпорация будущего
          </motion.p>
          
          <motion.p 
            className="text-lg md:text-xl text-white/70 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Мы создаём уникальные продукты, сервисы и решения
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link 
                href="#directions"
                className="btn-gradient px-10 py-5 rounded-2xl font-semibold text-lg inline-flex items-center justify-center gap-3 group shadow-lg shadow-viton-purple/25"
              >
                В холдинг
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={22} />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link 
                href="/shop"
                className="bg-white/10 backdrop-blur-md text-white px-10 py-5 rounded-2xl font-semibold text-lg border border-white/20 hover:bg-white/20 transition-all inline-block"
              >
                Магазин
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-7 h-12 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <motion.div 
              className="w-1.5 h-3 bg-white/50 rounded-full"
              animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Directions Section */}
      <section id="directions" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <FadeUp>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Направления холдинга <span className="text-viton-purple">VITON13</span>
              </h2>
              <p className="text-gray-600 text-xl max-w-2xl mx-auto">
                Выберите направление, чтобы узнать больше
              </p>
            </div>
          </FadeUp>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {directions.map((item, index) => (
              <StaggerItem key={item.title}>
                <HoverCard>
                  <Link
                    href={item.href}
                    className="block bg-white rounded-3xl p-8 shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 group h-full"
                  >
                    <motion.div 
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-6`}
                      whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <item.icon className="text-white" size={28} />
                    </motion.div>
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-viton-purple transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {item.description}
                    </p>
                    <div className="flex items-center text-viton-purple font-semibold">
                      Перейти
                      <ArrowRight className="ml-2 group-hover:translate-x-3 transition-transform duration-300" size={20} />
                    </div>
                  </Link>
                </HoverCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-5xl mx-auto px-4">
          <FadeUp>
            <div className="text-center">
              <motion.div 
                className="text-8xl text-viton-purple/20 mb-8"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", bounce: 0.5 }}
              >
                "
              </motion.div>
              <blockquote className="text-3xl md:text-4xl font-light text-gray-800 mb-10 leading-relaxed">
                Я за комфорт и возможности в одном месте!
              </blockquote>
              <div className="flex items-center justify-center gap-5">
                <motion.div 
                  className="w-20 h-20 bg-gradient-to-br from-viton-purple to-viton-cyan rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  ВТ
                </motion.div>
                <div className="text-left">
                  <div className="font-bold text-xl">Тарасов Виталий</div>
                  <div className="text-gray-500">CEO & Основатель</div>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* News Section */}
      <section className="py-24 bg-viton-dark text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <FadeUp>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Новости · Обновления · Анонсы
              </h2>
            </div>
          </FadeUp>

          <StaggerContainer className="grid md:grid-cols-3 gap-8">
            {[
              { status: 'development', statusColor: 'text-viton-cyan', title: 'VITON ID', desc: 'Единый цифровой идентификатор экосистемы VITON13.' },
              { status: 'beta', statusColor: 'text-viton-pink', title: 'Marketplace', desc: 'Платформа товаров и сервисов внутри экосистемы.' },
              { status: 'initializing', statusColor: 'text-green-400', title: 'AI Layer', desc: 'Интеллектуальные модули и автоматизация.' },
            ].map((item, i) => (
              <StaggerItem key={item.title}>
                <motion.div 
                  className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 h-full"
                  whileHover={{ 
                    scale: 1.02, 
                    borderColor: 'rgba(109, 60, 255, 0.5)',
                    boxShadow: '0 0 30px rgba(109, 60, 255, 0.2)'
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className={`text-xs font-mono mb-3 ${item.statusColor}`}>
                    status: {item.status}
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                  <p className="text-white/60 leading-relaxed">{item.desc}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-viton-purple to-viton-pink text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <ScaleIn>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Присоединяйтесь к VITON13
            </h2>
            <p className="text-white/80 text-xl mb-10">
              Создайте VITON ID и получите доступ ко всем сервисам экосистемы
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/register"
                className="inline-flex items-center gap-3 bg-white text-viton-purple px-10 py-5 rounded-2xl font-semibold text-lg hover:shadow-2xl transition-shadow"
              >
                Создать аккаунт
                <ArrowRight size={22} />
              </Link>
            </motion.div>
          </ScaleIn>
        </div>
      </section>
    </div>
  )
}
