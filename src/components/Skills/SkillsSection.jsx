import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Layout, Server, Wrench, Sparkles } from 'lucide-react';
import SectionHeading from '../Common/SectionHeading';
import SpotlightCard from '../Common/SpotlightCard';

const skillCategories = [
  { id: 'all', label: 'All Skills', icon: Sparkles },
  { id: 'frontend', label: 'Frontend', icon: Layout },
  { id: 'backend', label: 'Backend', icon: Server },
  { id: 'tools', label: 'Tools', icon: Wrench },
  { id: 'creative', label: 'Animation & Creative', icon: Cpu },
];

const skillsData = [
  // Frontend
  { name: 'HTML5', category: 'frontend', level: 95, icon: '🌐', color: 'from-orange-500 to-red-500' },
  { name: 'CSS3', category: 'frontend', level: 90, icon: '🎨', color: 'from-blue-500 to-cyan-500' },
  { name: 'JavaScript', category: 'frontend', level: 88, icon: '⚡', color: 'from-yellow-400 to-amber-500' },
  { name: 'React.js', category: 'frontend', level: 85, icon: '⚛️', color: 'from-cyan-400 to-blue-600' },
  { name: 'Bootstrap', category: 'frontend', level: 88, icon: '🅱️', color: 'from-purple-500 to-indigo-600' },
  { name: 'Tailwind CSS', category: 'frontend', level: 92, icon: '🌊', color: 'from-teal-400 to-cyan-500' },

  // Backend
  { name: 'Node.js', category: 'backend', level: 80, icon: '🟢', color: 'from-emerald-500 to-green-600' },
  { name: 'Express.js', category: 'backend', level: 78, icon: '🚀', color: 'from-slate-400 to-slate-200' },

  // Tools
  { name: 'Git', category: 'tools', level: 88, icon: '🌱', color: 'from-orange-600 to-amber-600' },
  { name: 'GitHub', category: 'tools', level: 90, icon: '🐙', color: 'from-slate-300 to-slate-500' },
  { name: 'VS Code', category: 'tools', level: 95, icon: '📝', color: 'from-blue-400 to-sky-600' },
  { name: 'Vite', category: 'tools', level: 90, icon: '⚡', color: 'from-yellow-300 to-purple-500' },
  { name: 'Figma', category: 'tools', level: 82, icon: '🎨', color: 'from-pink-500 to-purple-600' },
  { name: 'npm', category: 'tools', level: 85, icon: '📦', color: 'from-red-500 to-rose-600' },

  // Creative / Motion
  { name: 'Framer Motion', category: 'creative', level: 85, icon: '✨', color: 'from-purple-500 to-pink-500' },
  { name: 'Three.js', category: 'creative', level: 72, icon: '📐', color: 'from-cyan-400 to-purple-600' },
  { name: 'Particle.js', category: 'creative', level: 80, icon: '💫', color: 'from-emerald-400 to-teal-500' },
];

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredSkills = activeCategory === 'all'
    ? skillsData
    : skillsData.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className="py-24 relative z-10 overflow-hidden bg-[#07090e]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <SectionHeading
          label="Tech Stack & Competencies"
          icon={Cpu}
          title="Skills &"
          gradientTitle="Technologies."
          subtitle="A curated list of languages, frameworks, and modern tools I leverage to build interactive web solutions."
        />

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-12">
          {skillCategories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-xs sm:text-sm transition-all duration-300 ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-500/20 to-purple-600/20 border border-cyan-400/50 text-cyan-300 shadow-[0_0_20px_rgba(0,240,255,0.2)]'
                    : 'glass-card border border-white/10 text-slate-400 hover:text-white hover:border-white/20'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-cyan-400' : ''}`} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, idx) => (
              <SpotlightCard
                key={skill.name}
                spotlightColor="rgba(0, 240, 255, 0.15)"
                className="p-5 hover:border-cyan-400/40 hover:shadow-[0_10px_30px_rgba(0,240,255,0.15)] group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <motion.span
                      initial={{ scale: 0.7, rotate: -10 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.4, delay: 0.05 * idx }}
                      className="text-2xl group-hover:scale-125 group-hover:rotate-12 transition-transform duration-300 inline-block"
                    >
                      {skill.icon}
                    </motion.span>
                    <h3 className="font-heading font-bold text-base text-white group-hover:text-cyan-300 transition-colors">
                      {skill.name}
                    </h3>
                  </div>
                  <span className="font-mono text-xs font-semibold text-slate-400 group-hover:text-cyan-400 transition-colors">
                    {skill.level}%
                  </span>
                </div>

                {/* Animated Level Bar */}
                <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden p-0.5 border border-white/5">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 1, ease: 'easeOut', delay: 0.1 }}
                    className={`h-full rounded-full bg-gradient-to-r ${skill.color} shadow-[0_0_10px_rgba(0,240,255,0.5)]`}
                  />
                </div>
              </SpotlightCard>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
