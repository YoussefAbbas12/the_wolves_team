import { motion } from 'framer-motion';
import { Heart, Share2, MessageSquare, MoreHorizontal, BadgeCheck } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { achievements } from '../data/mockData';

export default function AchievementsPage() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  return (
    <div className="py-24 px-4 relative min-h-screen">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 font-display text-white">
            {t('achievements.title')}
            <span className="text-gradient">{t('achievements.titleHighlight')}</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg mb-8">{t('achievements.subtitle')}</p>
        </motion.div>

        {/* Social Feed Column */}
        <div className="space-y-6">
          {achievements.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-2xl p-5 md:p-6 border border-white/5 hover:border-white/10 transition-colors"
            >
              {/* Post Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                  <img 
                    src={post.avatarImg} 
                    alt={post.name} 
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="flex items-center space-x-1 rtl:space-x-reverse">
                      <h4 className="font-bold text-white hover:underline cursor-pointer">
                        {isRTL && post.arName ? post.arName : post.name}
                      </h4>
                      {post.verified && <BadgeCheck className="w-4 h-4 text-primary" />}
                    </div>
                    <div className="flex items-center text-sm text-gray-500 space-x-2 rtl:space-x-reverse">
                      <span>{post.username}</span>
                      <span>·</span>
                      <span>{isRTL && post.arTimeAgo ? post.arTimeAgo : post.timeAgo}</span>
                    </div>
                  </div>
                </div>
                <button className="text-gray-500 hover:text-white transition-colors p-2 rounded-full hover:bg-white/5">
                  <MoreHorizontal className="w-5 h-5" />
                </button>
              </div>

              {/* Post Content */}
              <div className="mb-4">
                <p className="text-gray-200 text-[15px] md:text-base leading-relaxed whitespace-pre-wrap">
                  {isRTL && post.arText ? post.arText : post.text}
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {post.tags.map(tag => (
                    <span key={tag} className="text-primary hover:underline cursor-pointer text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Post Image */}
              {post.postImg && (
                <div className="w-full rounded-2xl overflow-hidden mb-4 border border-white/5 cursor-pointer">
                  <img 
                    src={post.postImg} 
                    alt="Post Media" 
                    className="w-full h-auto object-cover max-h-[500px]" 
                  />
                </div>
              )}

              {/* Interaction Bar */}
              <div className="flex items-center justify-between pt-2 px-2 text-gray-500 border-t border-white/5">
                <button className="flex items-center space-x-2 rtl:space-x-reverse hover:text-accent transition-colors group">
                  <div className="p-2 rounded-full group-hover:bg-accent/10 transition-colors">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-medium">{post.comments}</span>
                </button>
                <button className="flex items-center space-x-2 rtl:space-x-reverse hover:text-emerald-400 transition-colors group">
                  <div className="p-2 rounded-full group-hover:bg-emerald-400/10 transition-colors">
                    <Share2 className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-medium">{post.shares}</span>
                </button>
                <button className="flex items-center space-x-2 rtl:space-x-reverse hover:text-pink-500 transition-colors group">
                  <div className="p-2 rounded-full group-hover:bg-pink-500/10 transition-colors">
                    <Heart className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-medium">{post.likes}</span>
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
