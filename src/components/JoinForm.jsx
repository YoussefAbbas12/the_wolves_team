import { useState } from 'react';
import { motion } from 'framer-motion';

export default function JoinForm() {
  const [status, setStatus] = useState('idle'); // idle, submitting, success

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  return (
    <section id="join" className="py-24 px-4 relative min-h-screen flex items-center justify-center">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neonPurple/10 rounded-full blur-[150px] mix-blend-screen" />
      </div>

      <div className="relative z-10 w-full max-w-lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Join the <span className="text-gradient">Pack</span></h2>
          <p className="text-gray-400">Prove your worth. Step into the future.</p>
        </motion.div>

        {status === 'success' ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass-card rounded-2xl p-10 text-center border-neonCyan/30 shadow-[0_0_30px_rgba(0,243,255,0.15)]"
          >
            <div className="w-20 h-20 mx-auto bg-neonCyan/10 rounded-full flex items-center justify-center mb-6 border border-neonCyan/30">
              <svg className="w-10 h-10 text-neonCyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2 font-display">Application Received</h3>
            <p className="text-gray-400">The pack will review your request. Stand by.</p>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8 space-y-6 relative overflow-hidden glow-border">
              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-300 ml-1">Full Name</label>
                <input 
                  type="text" 
                  required
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-neonPurple focus:ring-1 focus:ring-neonPurple transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-1">
                  <label className="text-sm font-medium text-gray-300 ml-1">Email</label>
                  <input 
                    type="email" 
                    required
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-neonPurple focus:ring-1 focus:ring-neonPurple transition-all"
                    placeholder="john@example.com"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-medium text-gray-300 ml-1">Field of Interest</label>
                  <select 
                    required
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neonPurple focus:ring-1 focus:ring-neonPurple transition-all appearance-none"
                  >
                    <option value="" disabled selected>Select a division</option>
                    <option value="programming">Programming</option>
                    <option value="security">Cyber Security</option>
                    <option value="design">Graphic Design</option>
                    <option value="marketing">Marketing</option>
                    <option value="speaking">Public Speaking</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-300 ml-1">Why do you want to join?</label>
                <textarea 
                  required
                  rows="4"
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-neonPurple focus:ring-1 focus:ring-neonPurple transition-all resize-none"
                  placeholder="Tell us about your ambition..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={status === 'submitting'}
                className="w-full py-4 rounded-xl bg-white text-black font-bold text-lg hover:bg-gray-200 transition-colors disabled:opacity-50 flex justify-center items-center"
              >
                {status === 'submitting' ? (
                  <div className="w-6 h-6 border-2 border-black border-t-transparent rounded-full animate-spin" />
                ) : (
                  'Submit Application'
                )}
              </button>
            </form>
          </motion.div>
        )}
      </div>
    </section>
  );
}
