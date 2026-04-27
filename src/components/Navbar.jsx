import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function Navbar() {
  const location = useLocation();
  const { t, i18n } = useTranslation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.achievements'), path: '/achievements' },
    { name: t('nav.pack'), path: '/members' },
    { name: t('nav.join'), path: '/join' },
  ];

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const toggleLang = () => {
    const newLang = i18n.language === 'en' ? 'ar' : 'en';
    i18n.changeLanguage(newLang);
  };

  // Animation variants for mobile menu
  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1], when: 'afterChildren' }
    },
    open: {
      opacity: 1,
      height: 'auto',
      transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1], when: 'beforeChildren', staggerChildren: 0.07 }
    }
  };

  const linkVariants = {
    closed: { opacity: 0, x: -16 },
    open: { opacity: 1, x: 0, transition: { duration: 0.25 } }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0c0a14]/80 backdrop-blur-lg border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group shrink-0">
            <div className="w-9 h-9 md:w-10 md:h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-display font-bold text-lg md:text-xl shadow-[0_0_15px_rgba(59,130,246,0.5)] group-hover:shadow-[0_0_25px_rgba(6,182,212,0.6)] transition-all duration-300">
              W
            </div>
            <span className="font-display font-bold text-lg md:text-xl tracking-wide text-white hidden sm:block">
              WOLVES<span className="text-primary">TEAM</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center mx-4" dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}>
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-white ${
                  location.pathname === link.path ? 'text-white' : 'text-gray-400'
                } ${i18n.language === 'ar' ? 'ml-8 mr-0' : ''}`}
              >
                <span className="relative">
                  {link.name}
                  {location.pathname === link.path && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute -bottom-[26px] left-0 right-0 h-[2px] bg-primary"
                      initial={false}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </span>
              </Link>
            ))}
          </div>

          {/* Actions & Mobile toggle */}
          <div className="flex items-center gap-3 md:gap-4 shrink-0">
            <button 
              onClick={toggleLang}
              className="px-3 py-1 rounded-md bg-white/5 hover:bg-white/10 text-white font-medium text-sm transition-colors border border-white/10"
            >
              {i18n.language === 'en' ? 'AR' : 'EN'}
            </button>
            
            {/* Hamburger / X toggle */}
            <button 
              className="md:hidden relative w-8 h-8 flex items-center justify-center text-gray-300 hover:text-white transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              <span className="sr-only">{mobileOpen ? 'Close menu' : 'Open menu'}</span>
              <div className="w-5 h-4 relative flex flex-col justify-between">
                <span className={`block h-[2px] w-full bg-current rounded-full transition-all duration-300 origin-center ${mobileOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
                <span className={`block h-[2px] w-full bg-current rounded-full transition-all duration-300 ${mobileOpen ? 'opacity-0 scale-x-0' : ''}`} />
                <span className={`block h-[2px] w-full bg-current rounded-full transition-all duration-300 origin-center ${mobileOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop overlay */}
            <motion.div
              className="fixed inset-0 top-16 bg-black/60 backdrop-blur-sm md:hidden z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileOpen(false)}
            />

            {/* Menu content */}
            <motion.div
              className="md:hidden relative z-50 bg-[#0c0a14]/95 backdrop-blur-xl border-b border-white/5 overflow-hidden"
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <div className="px-4 py-4 space-y-1" dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}>
                {links.map((link) => (
                  <motion.div key={link.path} variants={linkVariants}>
                    <Link
                      to={link.path}
                      onClick={() => setMobileOpen(false)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
                        location.pathname === link.path
                          ? 'bg-primary/10 text-white border border-primary/20'
                          : 'text-gray-400 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {location.pathname === link.path && (
                        <span className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_rgba(167,139,250,0.6)]" />
                      )}
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
