import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center overflow-hidden">
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.h1 
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight font-display text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {t('hero.title')}
          <span className="text-gradient inline-block">
            {t('hero.titleHighlight')}
          </span>
        </motion.h1>
        
        <motion.p 
          className="text-lg md:text-2xl text-gray-400 mb-10 max-w-3xl mx-auto font-medium leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          {t('hero.subtitle')}
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <a
            href="/join"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-300 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] glow-border font-display tracking-wider"
          >
            {t('hero.joinBtn')}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
