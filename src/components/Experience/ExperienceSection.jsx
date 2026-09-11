import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import SectionHeading from '../Common/SectionHeading';

const experiences = [
  {
    type: 'training',
    role: 'Web Development Training',
    organization: 'Code99 IT Academy',
    period: 'Full-Stack Intensive Program',
    location: 'Tamil Nadu, India',
    icon: GraduationCap,
    color: 'border-cyan-500/40 text-cyan-400',
    description: 'Comprehensive hands-on training in full-stack web development, mastering modern client-side and server-side software engineering.',
    highlights: [
      'Full-stack development architecture & RESTful concepts',
      'Frontend development with React.js & modern JavaScript (ES6+)',
      'Mobile-first responsive design using Tailwind CSS & Bootstrap',
      'Version control workflows with Git & GitHub'
    ],
    skills: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap', 'Git']
  },
  {
    type: 'work',
    role: 'Customer Support Executive',
    organization: 'RedTaxi',
    period: '1 Year Experience',
    location: 'Tamil Nadu, India',
    icon: Briefcase,
    color: 'border-purple-500/40 text-purple-400',
    description: 'Managed client communications and technical assistance, honing high-pressure problem solving and empathetic user communication.',
    highlights: [
      'Customer handling & inbound calls for real-time trip coordination',
      'Rapid problem solving and conflict resolution under strict SLAs',
      'Clear, effective cross-team verbal and written communication',
      'Customer service excellence and client relationship management'
    ],
    skills: ['Problem Solving', 'Customer Handling', 'Inbound Support', 'Communication', 'Client Relations']
  }
];

export default function ExperienceSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 80%', 'end 20%'],
  });

  const pathLength = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <section id="experience" className="py-24 relative z-10 overflow-hidden bg-[#07090e]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <SectionHeading
          label="Career & Education"
          icon={Briefcase}
          title="Professional"
          gradientTitle="Journey."
          subtitle="My background combining hands-on software development training and client support experience."
        />

        {/* Timeline Container */}
        <div ref={containerRef} className="relative max-w-4xl mx-auto">
          {/* Scroll-Drawing SVG Path Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 overflow-hidden pointer-events-none">
            <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 2 100">
              <line x1="1" y1="0" x2="1" y2="100" stroke="rgba(255, 255, 255, 0.1)" strokeWidth="2" />
              <motion.line
                x1="1"
                y1="0"
                x2="1"
                y2="100"
                stroke="#00f0ff"
                strokeWidth="2"
                style={{ pathLength }}
              />
            </svg>
          </div>

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, idx) => {
              const IconComponent = exp.icon;
              const isEven = idx % 2 === 0;

              return (
                <div key={exp.role} className="relative flex flex-col md:flex-row items-center">
                  
                  {/* Timeline Dot Icon */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="absolute left-4 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#0a0d14] border-2 border-cyan-400 shadow-[0_0_20px_rgba(0,240,255,0.6)] flex items-center justify-center z-10"
                  >
                    <IconComponent className="w-5 h-5 text-cyan-400" />
                  </motion.div>

                  {/* Experience Card */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -60 : 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
                    className={`w-full md:w-[calc(50%-2.5rem)] pl-12 md:pl-0 ${
                      isEven ? 'md:mr-auto md:pr-4' : 'md:ml-auto md:pl-4'
                    }`}
                  >
                    <motion.div
                      whileHover={{ y: -6, scale: 1.02 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                      className="group rounded-3xl glass-card border border-white/10 p-6 sm:p-8 hover:border-cyan-400/40 hover:shadow-[0_15px_35px_rgba(0,240,255,0.15)] transition-all duration-300 space-y-4"
                    >
                      {/* Card Header */}
                      <div className="space-y-1">
                        <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-cyan-400">
                          <span className="flex items-center gap-1.5 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
                            <Calendar className="w-3.5 h-3.5" />
                            {exp.period}
                          </span>
                          <span className="flex items-center gap-1 text-slate-400">
                            <MapPin className="w-3.5 h-3.5" />
                            {exp.location}
                          </span>
                        </div>

                        <h3 className="font-heading font-bold text-xl text-white pt-2 group-hover:text-cyan-300 transition-colors">
                          {exp.role}
                        </h3>
                        <p className="text-sm font-semibold text-slate-300">
                          {exp.organization}
                        </p>
                      </div>

                      {/* Description */}
                      <p className="text-sm text-slate-400 font-light leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Bullet Highlights */}
                      <div className="space-y-2 pt-2 border-t border-white/10 text-xs sm:text-sm text-slate-300">
                        {exp.highlights.map((highlight, hIdx) => (
                          <div key={hIdx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>

                      {/* Skill Badges */}
                      <div className="flex flex-wrap gap-2 pt-3">
                        {exp.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-slate-300 text-xs font-mono"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                    </motion.div>
                  </motion.div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
