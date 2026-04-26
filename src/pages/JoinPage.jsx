import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Send, Mail, User, ChevronDown, MessageSquare, Sparkles } from 'lucide-react';

export default function JoinPage() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  const [status, setStatus] = useState('idle');
  const [focusedField, setFocusedField] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('submitting');
    setTimeout(() => setStatus('success'), 1500);
  };

  const inputClasses = (field) => `
    w-full bg-white/[0.03] border rounded-xl px-5 py-4 text-white placeholder-gray-600 
    focus:outline-none transition-all duration-300
    ${focusedField === field 
      ? 'border-primary/50 shadow-[0_0_0_3px_rgba(59,130,246,0.08)] bg-white/[0.05]' 
      : 'border-white/[0.08] hover:border-white/15'
    }
  `;

  return (
    <div className="py-20 md:py-28 px-4 relative min-h-[calc(100vh-5rem)]">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          
          {/* Left Column — Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 lg:sticky lg:top-32"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              <span className="text-primary text-xs font-semibold uppercase tracking-wider">
                {isRTL ? 'التقديم مفتوح' : 'Applications Open'}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold font-display text-white mb-5 leading-tight">
              {t('join.title')}
              <span className="text-gradient">{t('join.titleHighlight')}</span>
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">{t('join.subtitle')}</p>

            {/* Stats / Trust Indicators */}
            <div className="space-y-4">
              {[
                { num: '100+', label: isRTL ? 'عضو نشط' : 'Active Members' },
                { num: '50+', label: isRTL ? 'مشروع مكتمل' : 'Projects Completed' },
                { num: '24h', label: isRTL ? 'وقت الاستجابة' : 'Response Time' },
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <span className="text-2xl font-bold text-white font-display w-16">{item.num}</span>
                  <span className="text-gray-500 text-sm">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column — Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-3"
          >
            {status === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="rounded-3xl p-10 md:p-14 text-center bg-[#14111f] border border-white/[0.08]"
              >
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
                  className="w-20 h-20 mx-auto bg-gradient-to-br from-accent/20 to-primary/10 rounded-full flex items-center justify-center mb-8 border border-accent/20"
                >
                  <svg className="w-10 h-10 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </motion.div>
                <h3 className="text-3xl font-bold text-white mb-3 font-display">{t('join.success')}</h3>
                <p className="text-gray-400 text-lg max-w-sm mx-auto">{t('join.successMsg')}</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="rounded-3xl p-8 md:p-10 bg-[#14111f]/80 border border-white/[0.06] backdrop-blur-sm">
                <div className="space-y-5">
                  {/* Full Name */}
                  <div>
                    <label className="flex items-center gap-2 text-sm font-medium text-gray-400 mb-2.5">
                      <User className="w-3.5 h-3.5" />
                      {t('join.fullname')}
                    </label>
                    <input 
                      type="text" 
                      required
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      className={inputClasses('name')}
                      placeholder={isRTL ? 'محمد أحمد' : 'John Doe'}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="flex items-center gap-2 text-sm font-medium text-gray-400 mb-2.5">
                      <Mail className="w-3.5 h-3.5" />
                      {t('join.email')}
                    </label>
                    <input 
                      type="email" 
                      required
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      className={inputClasses('email')}
                      placeholder="you@example.com"
                    />
                  </div>

                  {/* Field of Interest */}
                  <div>
                    <label className="flex items-center gap-2 text-sm font-medium text-gray-400 mb-2.5">
                      <ChevronDown className="w-3.5 h-3.5" />
                      {t('join.field')}
                    </label>
                    <select 
                      required
                      defaultValue=""
                      onFocus={() => setFocusedField('field')}
                      onBlur={() => setFocusedField(null)}
                      className={`${inputClasses('field')} appearance-none cursor-pointer`}
                    >
                      <option value="" disabled>{t('join.select')}</option>
                      <option value="programming">{t('join.div1')}</option>
                      <option value="security">{t('join.div2')}</option>
                      <option value="design">{t('join.div3')}</option>
                      <option value="marketing">{t('join.div4')}</option>
                      <option value="speaking">{t('join.div5')}</option>
                    </select>
                  </div>

                  {/* Why join */}
                  <div>
                    <label className="flex items-center gap-2 text-sm font-medium text-gray-400 mb-2.5">
                      <MessageSquare className="w-3.5 h-3.5" />
                      {t('join.reason')}
                    </label>
                    <textarea 
                      required
                      rows="4"
                      onFocus={() => setFocusedField('reason')}
                      onBlur={() => setFocusedField(null)}
                      className={`${inputClasses('reason')} resize-none`}
                      placeholder={isRTL ? 'أخبرنا عن طموحك...' : 'Tell us about your ambition...'}
                    ></textarea>
                  </div>

                  {/* Submit */}
                  <button 
                    type="submit" 
                    disabled={status === 'submitting'}
                    className="w-full py-4 mt-2 rounded-xl bg-primary text-white font-bold text-base hover:bg-primary/90 hover:shadow-[0_4px_24px_rgba(59,130,246,0.35)] active:scale-[0.98] transition-all duration-300 disabled:opacity-50 flex justify-center items-center gap-2.5 font-display tracking-wide"
                  >
                    {status === 'submitting' ? (
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        {t('join.submit')}
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
