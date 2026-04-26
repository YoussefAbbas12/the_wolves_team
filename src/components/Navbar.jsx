import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function Navbar() {
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const links = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.achievements'), path: '/achievements' },
    { name: t('nav.pack'), path: '/members' },
    { name: t('nav.join'), path: '/join' },
  ];

  const toggleLang = () => {
    const newLang = i18n.language === 'en' ? 'ar' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0c0a14]/80 backdrop-blur-lg border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Temporary Logo */}
          <Link to="/" className="flex items-center gap-3 group shrink-0">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-display font-bold text-xl shadow-[0_0_15px_rgba(59,130,246,0.5)] group-hover:shadow-[0_0_25px_rgba(6,182,212,0.6)] transition-all duration-300">
              W
            </div>
            <span className="font-display font-bold text-xl tracking-wide text-white hidden sm:block">
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

          {/* Actions & Mobile menu */}
          <div className="flex items-center gap-4 shrink-0">
            <button 
              onClick={toggleLang}
              className="px-3 py-1 rounded-md bg-white/5 hover:bg-white/10 text-white font-medium text-sm transition-colors border border-white/10"
            >
              {i18n.language === 'en' ? 'AR' : 'EN'}
            </button>
            
            <div className="md:hidden flex items-center">
              <button className="text-gray-300 hover:text-white">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
