import React from 'react';
import { motion } from 'framer-motion';
import { Download, Sparkles, FolderGit2, ArrowRight } from 'lucide-react';
import MagneticButton from '../Common/MagneticButton';

export default function ResumeCTA({ onOpenResume }) {
  const scrollToProjects = (e) => {
    e.preventDefault();
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 relative z-10 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-3xl p-8 sm:p-12 glass-card border border-cyan-500/30 overflow-hidden shadow-[0_20px_50px_rgba(0,240,255,0.15)] text-center space-y-8"
        >
          {/* Animated Glow Halo */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-600/10 to-pink-500/10 pointer-events-none"></div>

          {/* Icon Badge */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-purple-600/20 border border-cyan-400/40 text-cyan-300 shadow-lg mb-2">
            <Sparkles className="w-8 h-8 animate-pulse" />
          </div>

          {/* Heading */}
          <div className="space-y-4 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight leading-tight">
              Let's Build Something <span className="text-gradient-cyan">Great Together.</span>
            </h2>
            <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed">
              I'm always interested in learning, building and working on exciting web development opportunities.
            </p>
          </div>

          {/* Magnetic Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <MagneticButton
              onClick={onOpenResume}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-slate-950 font-heading font-bold text-base hover:brightness-110 shadow-[0_0_25px_rgba(0,240,255,0.4)] transition-all duration-300"
            >
              <Download className="w-5 h-5" />
              <span>Download Resume</span>
            </MagneticButton>

            <MagneticButton
              href="#projects"
              onClick={scrollToProjects}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl glass-card border border-white/15 text-slate-200 hover:text-white font-heading font-semibold text-base hover:bg-white/10 hover:border-cyan-400/50 transition-all duration-300"
            >
              <FolderGit2 className="w-5 h-5 text-cyan-400" />
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4" />
            </MagneticButton>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
