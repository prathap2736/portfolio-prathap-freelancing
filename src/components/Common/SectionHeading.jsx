import React from 'react';
import { motion } from 'framer-motion';

export default function SectionHeading({
  label,
  icon: IconComponent,
  title,
  gradientTitle,
  subtitle,
  className = '',
}) {
  return (
    <div className={`text-center max-w-3xl mx-auto mb-16 space-y-4 ${className}`}>
      {/* Small Badge / Label */}
      {label && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-widest"
        >
          {IconComponent && <IconComponent className="w-3.5 h-3.5" />}
          <span>{label}</span>
        </motion.div>
      )}

      {/* Main Heading with Staggered Clip Reveal */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight leading-tight"
      >
        {title}{' '}
        {gradientTitle && (
          <span className="text-gradient-cyan">{gradientTitle}</span>
        )}
      </motion.h2>

      {/* Subtitle / Description */}
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-slate-400 text-base sm:text-lg max-w-xl mx-auto font-light leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
