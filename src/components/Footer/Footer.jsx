import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, Mail, ArrowUp, Code2, Heart } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="relative z-10 border-t border-white/10 bg-[#050609] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo & Tagline */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-600/20 border border-cyan-500/30 flex items-center justify-center">
              <Code2 className="w-5 h-5 text-cyan-400" />
            </div>
            <div>
              <span className="font-heading font-bold text-lg text-white">
                Prathap<span className="text-cyan-400">.</span>
              </span>
              <p className="text-xs text-slate-400 font-light">
                Full-Stack Web Developer Portfolio
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/prathap2736"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl glass-card text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/prathap-kalavani-2aab562a3"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl glass-card text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl glass-card text-slate-400 hover:text-pink-400 hover:border-pink-500/40 transition-all"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="mailto:prathap@example.com"
              className="p-2.5 rounded-xl glass-card text-slate-400 hover:text-emerald-400 hover:border-emerald-500/40 transition-all"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-xl glass-card border border-white/10 text-xs font-mono text-slate-300 hover:text-cyan-400 hover:border-cyan-500/30 transition-all group"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-4 h-4 text-cyan-400 group-hover:-translate-y-1 transition-transform" />
          </button>

        </div>

        {/* Copyright & Credit */}
        <div className="mt-8 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 font-mono gap-4">
          <p>© 2026 Prathap. All Rights Reserved.</p>
          <p className="flex items-center gap-1.5">
            Designed & Built with <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" /> by Prathap
          </p>
        </div>

      </div>
    </footer>
  );
}
