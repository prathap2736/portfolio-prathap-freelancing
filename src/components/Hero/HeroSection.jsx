import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, Instagram, Mail, Terminal, Sparkles, Code, Cpu } from 'lucide-react';
import ProfileImage from '../Common/ProfileImage';
import MagneticButton from '../Common/MagneticButton';

export default function HeroSection({ onOpenResume }) {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  // Parallax transforms for Hero items as user scrolls down
  const heroTextY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const heroImageY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.8], [1, 0.95]);

  const [typedCode, setTypedCode] = useState('');
  const fullCodeText = `const developer = {
  name: "Prathap",
  role: "Full-Stack Developer",
  passion: "Building modern & interactive web experiences",
  stack: ["React", "JavaScript", "Tailwind", "Node.js"]
};`;

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullCodeText.length) {
        setTypedCode((prev) => prev + fullCodeText.charAt(index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 40);

    return () => clearInterval(interval);
  }, []);

  const scrollToProjects = (e) => {
    e.preventDefault();
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden"
    >
      <motion.div
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Greeting, Headline & Magnetic CTAs */}
          <motion.div
            style={{ y: heroTextY }}
            className="lg:col-span-7 space-y-8 text-left order-1 lg:order-1"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Availability Badge */}
            <motion.div variants={itemVariants} className="inline-block">
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-card border border-cyan-500/30 text-cyan-300 text-xs sm:text-sm font-medium shadow-[0_0_15px_rgba(0,240,255,0.15)]">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-400"></span>
                </span>
                <span className="tracking-wide uppercase font-semibold">Available for Opportunities</span>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.div variants={itemVariants} className="space-y-2">
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-heading font-extrabold tracking-tight text-white leading-[1.1]">
                Hi, I'm <span className="text-gradient-cyan">Prathap.</span>
              </h1>
              <h2 className="text-3xl sm:text-5xl xl:text-6xl font-heading font-bold tracking-tight text-slate-300 leading-[1.15]">
                I Build <span className="text-gradient">Digital Experiences.</span>
              </h2>
            </motion.div>

            {/* Description */}
            <motion.p variants={itemVariants} className="text-lg sm:text-xl text-slate-400 max-w-2xl font-light leading-relaxed">
              A passionate <span className="text-cyan-300 font-normal">Full-Stack Web Developer</span> focused on creating responsive, modern and interactive web applications.
            </motion.p>

            {/* Magnetic CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 pt-2">
              <MagneticButton
                href="#projects"
                onClick={scrollToProjects}
                className="group relative inline-flex items-center gap-3 px-7 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-slate-950 font-heading font-bold text-base hover:brightness-110 transition-all duration-300 shadow-[0_0_25px_rgba(0,240,255,0.4)] hover:shadow-[0_0_35px_rgba(0,240,255,0.6)]"
              >
                <span>View My Work</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </MagneticButton>

              <MagneticButton
                onClick={onOpenResume}
                className="inline-flex items-center gap-3 px-7 py-4 rounded-xl glass-card border border-white/15 text-slate-200 hover:text-white font-heading font-semibold text-base hover:bg-white/10 hover:border-cyan-400/50 hover:shadow-[0_0_20px_rgba(0,240,255,0.2)] transition-all duration-300"
              >
                <Download className="w-5 h-5 text-cyan-400" />
                <span>Download Resume</span>
              </MagneticButton>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex items-center gap-4 pt-4 border-t border-white/10">
              <span className="text-xs font-mono uppercase tracking-widest text-slate-500 mr-2">Connect:</span>
              
              <a
                href="https://github.com/prathap2736"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl glass-card flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 hover:shadow-[0_0_15px_rgba(0,240,255,0.3)] transition-all"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>

              <a
                href="https://www.linkedin.com/in/prathap-kalavani-2aab562a3"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl glass-card flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 hover:shadow-[0_0_15px_rgba(0,240,255,0.3)] transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl glass-card flex items-center justify-center text-slate-400 hover:text-pink-400 hover:border-pink-500/40 hover:shadow-[0_0_15px_rgba(244,114,182,0.3)] transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>

              <a
                href="mailto:prathapkalaivani8@gmail.com.com"
                className="w-10 h-10 rounded-xl glass-card flex items-center justify-center text-slate-400 hover:text-emerald-400 hover:border-emerald-500/40 hover:shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-all"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column: Parallax Profile Image & Terminal */}
          <motion.div
            style={{ y: heroImageY }}
            className="lg:col-span-5 flex flex-col items-center justify-center space-y-8 order-2 lg:order-2"
          >
            <ProfileImage
              src="/assets/pic.jpeg"
              alt="Prathap - Full-Stack Web Developer"
              variant="hero"
              showBadges={true}
            />

            {/* Interactive Terminal */}
            <div className="w-full max-w-md rounded-2xl glass-card border border-cyan-500/20 shadow-[0_15px_35px_rgba(0,0,0,0.8)] overflow-hidden">
              <div className="px-4 py-2 bg-[#0c101d]/90 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-400">
                  <Terminal className="w-3 h-3 text-cyan-400" />
                  <span>prathap.config.js</span>
                </div>
              </div>

              <div className="p-4 font-mono text-xs leading-relaxed text-slate-200 bg-[#07090e]/90 overflow-x-auto">
                <pre className="whitespace-pre-wrap">
                  <code>
                    {typedCode}
                    <span className="inline-block w-2 h-3.5 ml-1 bg-cyan-400 cursor-blink align-middle"></span>
                  </code>
                </pre>
              </div>
            </div>

          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}
