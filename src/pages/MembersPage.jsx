import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { members } from '../data/mockData';
import { X, ArrowUpRight } from 'lucide-react';

const TwitterIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.008 4.075H5.059z" />
  </svg>
);

const LinkedinIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const GithubIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
);

const socialIcons = {
  x: TwitterIcon,
  linkedin: LinkedinIcon,
  github: GithubIcon
};

export default function MembersPage() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  const [selectedMember, setSelectedMember] = useState(null);

  const getName = (m) => isRTL && m.arName ? m.arName : m.name;
  const getRole = (m) => isRTL && m.arRole ? m.arRole : m.role;
  const getSpecialty = (m) => isRTL && m.arSpecialty ? m.arSpecialty : m.specialty;
  const getBio = (m) => isRTL && m.arBio ? m.arBio : m.bio;

  return (
    <div className="py-20 md:py-28 px-4 relative min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16 md:mb-20"
        >
          <p className="text-primary font-semibold text-sm uppercase tracking-[0.2em] mb-4">— {isRTL ? 'تعرف على الفريق' : 'Meet the team'} —</p>
          <h1 className="text-4xl md:text-6xl font-bold font-display text-white mb-5">
            {t('members.title')}
            <span className="text-gradient">{t('members.titleHighlight')}</span>
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto text-base md:text-lg leading-relaxed">{t('members.subtitle')}</p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {members.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
              onClick={() => setSelectedMember(member)}
              className="group cursor-pointer relative"
            >
              {/* Card */}
              <div className="relative rounded-2xl overflow-hidden bg-cardDark border border-white/[0.06] hover:border-primary/40 transition-all duration-500 hover:shadow-[0_8px_40px_rgba(59,130,246,0.12)]">
                {/* Image */}
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img 
                    src={member.avatarImg} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-[1.08] group-hover:brightness-75"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-cardDark via-transparent to-transparent opacity-80" />
                  <div className="absolute inset-0 bg-gradient-to-t from-cardDark to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-500" />
                  
                  {/* Arrow icon on hover */}
                  <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <ArrowUpRight className="w-4 h-4 text-white" />
                  </div>
                </div>

                {/* Info */}
                <div className="p-5 -mt-12 relative z-10">
                  <h3 className="font-display font-bold text-lg text-white mb-0.5 group-hover:text-primary transition-colors duration-300">
                    {getName(member)}
                  </h3>
                  <p className="text-gray-400 text-sm font-medium">
                    {getRole(member)}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ─── Member Popup Modal ─── */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedMember(null)}
              className="absolute inset-0 bg-black/70 backdrop-blur-md cursor-pointer"
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 30 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative w-full max-w-lg bg-[#14111f] rounded-3xl overflow-hidden shadow-2xl shadow-primary/10 border border-white/10 z-10"
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedMember(null)}
                className="absolute top-5 right-5 p-2.5 rounded-full bg-white/5 backdrop-blur-sm text-gray-400 hover:text-white hover:bg-white/10 transition-colors z-20 border border-white/10"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Top Image Section */}
              <div className="relative h-56 md:h-64 overflow-hidden">
                <img 
                  src={selectedMember.avatarImg} 
                  alt={selectedMember.name} 
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#14111f] via-[#14111f]/40 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-8 -mt-16 relative z-10">
                <div className="mb-6">
                  <h3 className="text-3xl font-bold text-white font-display mb-1">
                    {getName(selectedMember)}
                  </h3>
                  <p className="text-primary font-semibold text-base">
                    {getRole(selectedMember)}
                  </p>
                </div>

                {/* Specialty Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
                  <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  <span className="text-accent text-sm font-medium">
                    {getSpecialty(selectedMember)}
                  </span>
                </div>

                {/* Bio */}
                <p className="text-gray-300 leading-relaxed text-[15px] mb-8">
                  {getBio(selectedMember)}
                </p>

                {/* Social Links */}
                <div className="flex items-center gap-3 pt-6 border-t border-white/[0.06]">
                  {Object.entries(selectedMember.socials || {}).map(([key, url]) => {
                    if (!url) return null;
                    const Icon = socialIcons[key];
                    if (!Icon) return null;
                    return (
                      <a 
                        key={key} 
                        href={url} 
                        className="w-11 h-11 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-gray-500 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                      >
                        <Icon className="w-[18px] h-[18px]" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
