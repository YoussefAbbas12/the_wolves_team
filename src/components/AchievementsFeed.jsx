import { motion } from 'framer-motion';
import { Heart, Share2, Award, Trophy, Users } from 'lucide-react';
import { achievements } from '../data/mockData';

export default function AchievementsFeed() {
  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">The <span className="text-neonCyan">Feed</span></h2>
          <div className="h-1 w-20 bg-gradient-to-r from-neonPurple to-neonCyan mx-auto rounded-full mb-10" />
          
          {/* Stats Bar */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-12">
            {[
              { icon: Trophy, label: '+50 Achievements', color: 'text-yellow-400' },
              { icon: Award, label: '+20 Awards', color: 'text-neonPurple' },
              { icon: Users, label: '+100 Members', color: 'text-neonCyan' }
            ].map((stat, i) => (
              <div key={i} className="glass-card rounded-full px-6 py-3 flex items-center space-x-3">
                <stat.icon className={`w-5 h-5 ${stat.color}`} />
                <span className="font-semibold text-sm md:text-base">{stat.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="space-y-6">
          {achievements.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.01 }}
              className={`glass-card rounded-2xl p-6 transition-all duration-300 ${post.featured ? 'border-neonPurple/50 shadow-[0_0_30px_rgba(162,0,255,0.15)] relative overflow-hidden' : 'hover:shadow-xl hover:shadow-black/50'}`}
            >
              {post.featured && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-neonPurple to-neonCyan text-xs font-bold px-3 py-1 rounded-bl-lg">
                  FEATURED
                </div>
              )}
              
              <div className="flex items-start space-x-4">
                {/* Avatar Placeholder */}
                <div className={`w-12 h-12 rounded-full flex-shrink-0 bg-gradient-to-br ${post.avatarGradient} p-[2px]`}>
                  <div className="w-full h-full bg-cardDark rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold">{post.name.charAt(0)}</span>
                  </div>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-center mb-1">
                    <div>
                      <h4 className="font-bold text-white truncate">{post.name}</h4>
                      <p className="text-xs text-gray-400">{post.role}</p>
                    </div>
                    <span className="text-xs text-gray-500 whitespace-nowrap ml-2">{post.timeAgo}</span>
                  </div>

                  <p className="text-gray-200 mt-3 text-sm md:text-base leading-relaxed">
                    {post.text}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {post.tags.map(tag => (
                      <span key={tag} className="text-xs text-neonCyan bg-neonCyan/10 px-2 py-1 rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Interactions */}
                  <div className="flex items-center space-x-6 mt-6 pt-4 border-t border-white/5">
                    <button className="flex items-center space-x-2 text-gray-400 hover:text-red-400 transition-colors group">
                      <Heart className="w-4 h-4 group-hover:scale-110 transition-transform" />
                      <span className="text-xs font-medium">Like</span>
                    </button>
                    <button className="flex items-center space-x-2 text-gray-400 hover:text-neonCyan transition-colors group">
                      <Share2 className="w-4 h-4 group-hover:scale-110 transition-transform" />
                      <span className="text-xs font-medium">Share</span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
