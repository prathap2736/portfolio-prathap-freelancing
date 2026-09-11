import React from 'react';
import { motion } from 'framer-motion';
import { Code, Monitor, Smartphone, LayoutGrid, Wrench, Sparkles, ArrowRight } from 'lucide-react';
import SectionHeading from '../Common/SectionHeading';
import TiltCard from '../Common/TiltCard';
import SpotlightCard from '../Common/SpotlightCard';

const services = [
  {
    icon: Code,
    title: 'Web Development',
    subtitle: 'Full-Stack Solutions',
    description: 'Building fast, scalable, and responsive web applications from concept to deployment using modern JavaScript stacks.',
    color: 'from-cyan-500 to-blue-600',
    iconColor: 'text-cyan-400',
    borderColor: 'group-hover:border-cyan-500/50',
    glowColor: 'group-hover:shadow-[0_15px_35px_rgba(0,240,255,0.2)]',
    spotlight: 'rgba(0, 240, 255, 0.15)',
    tags: ['React', 'Node.js', 'Vite', 'Clean Code']
  },
  {
    icon: Monitor,
    title: 'Frontend Development',
    subtitle: 'Interactive UI Architecture',
    description: 'Crafting fluid user interfaces with modern React ecosystem, Framer Motion animations, and reusable modular component design.',
    color: 'from-purple-500 to-indigo-600',
    iconColor: 'text-purple-400',
    borderColor: 'group-hover:border-purple-500/50',
    glowColor: 'group-hover:shadow-[0_15px_35px_rgba(138,43,226,0.2)]',
    spotlight: 'rgba(138, 43, 226, 0.15)',
    tags: ['React.js', 'Framer Motion', 'State Management', 'JS ES6+']
  },
  {
    icon: Smartphone,
    title: 'Responsive Design',
    subtitle: 'Cross-Device Optimization',
    description: 'Optimizing web experiences for all screens—mobile (360px+), tablet, laptop, and ultra-wide desktop monitors.',
    color: 'from-emerald-500 to-teal-600',
    iconColor: 'text-emerald-400',
    borderColor: 'group-hover:border-emerald-500/50',
    glowColor: 'group-hover:shadow-[0_15px_35px_rgba(16,185,129,0.2)]',
    spotlight: 'rgba(16, 185, 129, 0.15)',
    tags: ['Tailwind CSS', 'Bootstrap', 'CSS Grid/Flexbox', 'Mobile-First']
  },
  {
    icon: LayoutGrid,
    title: 'UI/UX Implementation',
    subtitle: 'Pixel-Perfect Translation',
    description: 'Converting Figma and web design mockups into pixel-perfect, highly functional and accessible web interfaces.',
    color: 'from-pink-500 to-rose-600',
    iconColor: 'text-pink-400',
    borderColor: 'group-hover:border-pink-500/50',
    glowColor: 'group-hover:shadow-[0_15px_35px_rgba(244,114,182,0.2)]',
    spotlight: 'rgba(244, 114, 182, 0.15)',
    tags: ['Figma to Code', 'Micro-Interactions', 'Accessibility', 'UX Polish']
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <SectionHeading
          label="What I Offer"
          icon={Wrench}
          title="Services &"
          gradientTitle="Capabilities."
          subtitle="Delivering high-quality web solutions tailored for businesses, modern startups, and personal digital branding."
        />

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, idx) => {
            const IconComponent = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.1 * idx }}
              >
                <TiltCard maxTilt={4} className="h-full">
                  <SpotlightCard
                    spotlightColor={service.spotlight}
                    className={`group ${service.borderColor} ${service.glowColor} p-8 flex flex-col justify-between h-full`}
                  >
                    {/* Subtle Gradient Glow in Background */}
                    <div className={`absolute -right-20 -top-20 w-64 h-64 bg-gradient-to-br ${service.color} rounded-full blur-[100px] opacity-10 group-hover:opacity-25 transition-opacity duration-500`}></div>

                    <div className="space-y-6 relative z-10">
                      {/* Top Bar Icon & Subtitle */}
                      <div className="flex items-center justify-between">
                        <div className={`w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center ${service.iconColor} group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 shadow-md`}>
                          <IconComponent className="w-7 h-7" />
                        </div>
                        <span className="font-mono text-xs font-semibold text-slate-400 uppercase tracking-wider bg-white/5 px-3 py-1 rounded-full border border-white/5">
                          {service.subtitle}
                        </span>
                      </div>

                      {/* Title & Description */}
                      <div className="space-y-3">
                        <h3 className="font-heading font-extrabold text-2xl text-white group-hover:text-cyan-300 transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-sm text-slate-300 font-light leading-relaxed">
                          {service.description}
                        </p>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 pt-2">
                        {service.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-slate-300 text-xs font-mono group-hover:border-white/20 transition-colors"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Footer Action */}
                    <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between relative z-10">
                      <a
                        href="#contact"
                        className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 group-hover:text-cyan-300 font-semibold"
                      >
                        <span>Discuss Project Requirements</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </a>
                      <Sparkles className="w-4 h-4 text-slate-600 group-hover:text-cyan-400 transition-colors" />
                    </div>
                  </SpotlightCard>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
