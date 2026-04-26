import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { departments } from '../data/mockData';

export default function Departments() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  return (
    <section id="divisions" className="py-24 px-4 relative bg-[#080610]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display text-white">
            {t('departments.title')}
            <span className="text-gradient">{t('departments.titleHighlight')}</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {departments.map((dept, index) => {
            const Icon = dept.icon;
            return (
              <motion.div
                key={dept.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative h-80 w-full overflow-hidden rounded-2xl glass-card border border-white/10"
              >
                {/* Default State */}
                <div className="absolute inset-0 p-8 flex flex-col justify-center items-center text-center transition-transform duration-500 group-hover:-translate-y-full">
                  <div className={`w-16 h-16 rounded-2xl mb-6 flex items-center justify-center bg-gradient-to-br ${dept.color} shadow-[0_0_20px_rgba(255,255,255,0.1)]`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 font-display text-white">{isRTL && dept.arTitle ? dept.arTitle : dept.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {isRTL && dept.arDescription ? dept.arDescription : dept.description}
                  </p>
                  <span className="mt-6 text-primary text-sm font-semibold opacity-50">
                    {t('departments.hover')} ↓
                  </span>
                </div>

                {/* Hover Details State (Slide Up Overlay) */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#14111f] to-[#0c0a14] p-8 flex flex-col justify-center translate-y-full transition-transform duration-500 group-hover:translate-y-0">
                  <h3 className="text-xl font-bold mb-4 font-display text-accent">
                    {isRTL && dept.arTitle ? dept.arTitle : dept.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-6 overflow-y-auto custom-scrollbar pr-2">
                    {isRTL && dept.arDeepDetails ? dept.arDeepDetails : dept.deepDetails}
                  </p>
                  <button className="mt-auto self-start px-5 py-2 bg-primary/10 text-primary border border-primary/30 rounded-lg text-sm font-semibold hover:bg-primary hover:text-white transition-colors duration-300">
                    {t('departments.explore')}
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
