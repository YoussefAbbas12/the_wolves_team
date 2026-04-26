import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function Vision() {
  const { t } = useTranslation();

  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-display text-white">
            {t('vision.title')}
            <span className="text-accent">{t('vision.titleHighlight')}</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        <div className="space-y-12 md:space-y-20">
          {[
            { num: '01', text: t('vision.p1') },
            { num: '02', text: t('vision.p2') },
            { num: '03', text: t('vision.p3') }
          ].map((item, index) => (
            <motion.div 
              key={item.num}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`flex flex-col md:flex-row items-center gap-6 md:gap-12 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className="text-6xl md:text-8xl font-bold text-white/5 font-display select-none">
                {item.num}
              </div>
              <div className="flex-1 glass-card p-8 rounded-2xl border-l-4 border-l-primary hover:border-l-accent transition-colors duration-300">
                <p className="text-xl md:text-3xl font-semibold leading-snug">
                  {item.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
