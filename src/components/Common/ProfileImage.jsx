import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, Sparkles } from 'lucide-react';

const defaultFloatingBadges = [
  { name: 'React', icon: '⚛️', color: 'border-cyan-400/40 text-cyan-300', pos: '-top-4 -right-4', delay: 0 },
  { name: 'JavaScript', icon: '⚡', color: 'border-amber-400/40 text-amber-300', pos: 'bottom-8 -left-6', delay: 1 },
  { name: 'HTML', icon: '🌐', color: 'border-orange-400/40 text-orange-300', pos: 'top-1/4 -left-8', delay: 2 },
  { name: 'CSS', icon: '🎨', color: 'border-blue-400/40 text-blue-300', pos: '-bottom-4 right-8', delay: 1.5 },
  { name: 'Node.js', icon: '🟢', color: 'border-emerald-400/40 text-emerald-300', pos: 'top-1/2 -right-8', delay: 0.5 },
];

export default function ProfileImage({
  src = '/assets/profile.jpg',
  alt = 'Prathap - Full-Stack Web Developer',
  variant = 'hero',
  showBadges = true,
  showRoleBadge = false,
  className = '',
}) {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92, filter: 'blur(10px)' }}
      whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`relative group inline-block ${className}`}
    >
      {/* Background Glow Halo */}
      <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-500 rounded-3xl blur-2xl opacity-40 group-hover:opacity-80 transition-opacity duration-500 animate-pulse-slow"></div>

      {/* Animated Gradient Outer Border Wrapper */}
      <div className="relative rounded-[28px] p-[2px] bg-gradient-to-br from-cyan-400 via-purple-500 to-emerald-400 shadow-[0_15px_35px_rgba(0,0,0,0.6)] group-hover:shadow-[0_20px_45px_rgba(0,240,255,0.3)] group-hover:-translate-y-2 transition-all duration-500">
        
        {/* Glassmorphism Frame Container */}
        <div className="relative rounded-[26px] bg-[#0c101d] p-2 border border-white/10 overflow-hidden">
          
          {/* Main Image View */}
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-[22px] overflow-hidden bg-slate-900 flex items-center justify-center">
            {!imgError ? (
              <img
                src={src}
                alt={alt}
                loading="lazy"
                onError={() => setImgError(true)}
                className="w-full h-full object-cover object-[center_top] group-hover:scale-108 transition-transform duration-500 ease-out"
              />
            ) : (
              /* Fallback Stylized Avatar */
              <div className="w-full h-full bg-gradient-to-br from-[#0c101d] via-[#151c2e] to-[#0a0d14] flex flex-col items-center justify-center p-6 text-center space-y-4">
                <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-cyan-500 to-purple-600 p-1 flex items-center justify-center shadow-lg">
                  <div className="w-full h-full rounded-full bg-[#0a0d14] flex items-center justify-center">
                    <Code2 className="w-10 h-10 text-cyan-400" />
                  </div>
                </div>
                <div>
                  <h3 className="font-heading font-extrabold text-2xl text-white">Prathap</h3>
                  <p className="text-xs font-mono text-cyan-400 mt-1">Full-Stack Web Developer</p>
                </div>
              </div>
            )}

            {/* Subtle Overlay Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#050609]/60 via-transparent to-transparent pointer-events-none"></div>
          </div>

        </div>

      </div>

      {/* Floating Technology Badges */}
      {showBadges &&
        defaultFloatingBadges.map((badge) => (
          <motion.div
            key={badge.name}
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4 + badge.delay, repeat: Infinity, ease: 'easeInOut', delay: badge.delay }}
            className={`absolute ${badge.pos} hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl glass-card border ${badge.color} font-mono text-xs font-semibold shadow-[0_10px_25px_rgba(0,0,0,0.5)] z-20 group-hover:scale-110 transition-transform`}
          >
            <span>{badge.icon}</span>
            <span>{badge.name}</span>
          </motion.div>
        ))}

      {/* Floating Role Badge */}
      {showRoleBadge && (
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -bottom-5 right-4 sm:-right-4 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-black font-heading font-bold text-xs uppercase tracking-wider shadow-[0_10px_30px_rgba(0,240,255,0.4)] z-20 flex items-center gap-2 border border-cyan-300/40"
        >
          <Sparkles className="w-4 h-4 fill-black" />
          <span>FULL-STACK DEVELOPER</span>
        </motion.div>
      )}

    </motion.div>
  );
}
