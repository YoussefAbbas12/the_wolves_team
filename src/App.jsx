import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AchievementsPage from './pages/AchievementsPage';
import MembersPage from './pages/MembersPage';
import JoinPage from './pages/JoinPage';
import FloatingBackground from './components/FloatingBackground';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route 
          path="/" 
          element={
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }}>
              <Home />
            </motion.div>
          } 
        />
        <Route 
          path="/achievements" 
          element={
            <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }} transition={{ duration: 0.3 }}>
              <AchievementsPage />
            </motion.div>
          } 
        />
        <Route 
          path="/members" 
          element={
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }}>
              <MembersPage />
            </motion.div>
          } 
        />
        <Route 
          path="/join" 
          element={
            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -50 }} transition={{ duration: 0.3 }}>
              <JoinPage />
            </motion.div>
          } 
        />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  const { i18n, t } = useTranslation();
  const isRTL = i18n.language === 'ar';

  return (
    <Router>
      <div 
        dir={isRTL ? 'rtl' : 'ltr'} 
        className={`bg-[#0c0a14] min-h-screen text-gray-200 font-sans selection:bg-primary/30 flex flex-col ${isRTL ? 'font-arabic' : ''}`}
      >
        <FloatingBackground />
        <Navbar />
        
        <main className="flex-1 pt-20 relative z-10">
          <AnimatedRoutes />
        </main>
        
        <footer className="py-8 text-center text-gray-500 border-t border-white/5 mt-auto relative z-10 bg-[#0c0a14]/80 backdrop-blur-md">
          <p className="text-sm">{t('footer.rights')}</p>
          <p className="text-xs mt-2 text-primary/50 font-display">{t('footer.motto')}</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
