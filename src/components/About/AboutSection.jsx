import React from 'react';
import { motion } from 'framer-motion';
import { User, Award, Code2, Heart, Sparkles, ArrowRight, Target, Layout, Monitor, Smartphone, Cpu, Layers } from 'lucide-react';
import ProfileImage from '../Common/ProfileImage';
import SectionHeading from '../Common/SectionHeading';
import MagneticButton from '../Common/MagneticButton';

const whatIDoItems = [
  { title: 'Frontend Development', icon: Layout, color: 'text-cyan-400' },
  { title: 'Responsive Web Design', icon: Smartphone, color: 'text-purple-400' },
  { title: 'Interactive UI Development', icon: Monitor, color: 'text-emerald-400' },
  { title: 'React Development', icon: Code2, color: 'text-sky-400' },
  { title: 'JavaScript Development', icon: Cpu, color: 'text-amber-400' },
  { title: 'Full-Stack Development', icon: Layers, color: 'text-pink-400' },
];

const stats = [
  { value: '1+', label: 'Years Experience', icon: Award, color: 'from-cyan-400 to-blue-500' },
  { value: '10+', label: 'Projects Completed', icon: Code2, color: 'from-purple-400 to-pink-500' },
  { value: '10+', label: 'Technologies', icon: Sparkles, color: 'from-emerald-400 to-cyan-500' },
  { value: '100%', label: 'Learning & Growth', icon: Heart, color: 'from-pink-500 to-rose-500' },
];

export default function AboutSection() {
  const scrollToContact = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
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
    hidden: { y: 25, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="about" className="py-24 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeading
          label="Get To Know Me"
          icon={User}
          title="About"
          gradientTitle="Me."
          subtitle="Passionate About Building Modern Digital Experiences"
        />

        {/* Content Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Blur Reveal Profile Image */}
          <div className="lg:col-span-5 flex justify-center">
            <ProfileImage
              src="/assets/pic.jpeg"
              alt="Prathap - Full-Stack Web Developer"
              variant="about"
              showBadges={false}
              showRoleBadge={true}
            />
          </div>

          {/* Right Side: Introduction & What I Do */}
          <motion.div
            className="lg:col-span-7 space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Bio Paragraphs */}
            <motion.div variants={itemVariants} className="space-y-4 text-slate-300 text-base sm:text-lg font-light leading-relaxed">
              <p className="bg-gradient-to-r from-slate-100 to-slate-300 bg-clip-text text-transparent font-normal text-lg sm:text-xl leading-relaxed">
                I'm Prathap, a passionate Full-Stack Web Developer focused on building modern, responsive and interactive web experiences. I enjoy learning new technologies, solving problems and transforming ideas into functional websites and applications.
              </p>
              <p className="text-slate-400 text-base">
                My approach combines clean component architecture with eye-catching motion design, ensuring that every interface I build is visually engaging, performant, and fully responsive across all device breakpoints.
              </p>
            </motion.div>

            {/* What I Do Section */}
            <motion.div variants={itemVariants} className="space-y-4 pt-2">
              <h3 className="font-heading font-extrabold text-xl text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-cyan-400" />
                <span>What I Do</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {whatIDoItems.map((item) => {
                  const IconComp = item.icon;
                  return (
                    <motion.div
                      key={item.title}
                      variants={itemVariants}
                      whileHover={{ scale: 1.02, x: 4 }}
                      className="flex items-center gap-3 p-3.5 rounded-2xl glass-card border border-white/10 hover:border-cyan-400/40 hover:shadow-[0_0_20px_rgba(0,240,255,0.15)] transition-all duration-300"
                    >
                      <div className={`p-2 rounded-xl bg-white/5 ${item.color}`}>
                        <IconComp className="w-4 h-4" />
                      </div>
                      <span className="text-sm font-semibold text-slate-200">
                        {item.title}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Magnetic CTA Button */}
            <motion.div variants={itemVariants} className="pt-4">
              <MagneticButton
                href="#contact"
                onClick={scrollToContact}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-slate-950 font-heading font-bold text-base hover:brightness-110 shadow-[0_0_25px_rgba(0,240,255,0.4)] transition-all duration-300"
              >
                <span>Get In Touch</span>
                <ArrowRight className="w-5 h-5" />
              </MagneticButton>
            </motion.div>

          </motion.div>

        </div>

        {/* Statistics Section Below Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-4"
        >
          {stats.map((stat, idx) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: 0.1 * idx }}
                whileHover={{ y: -6, scale: 1.03 }}
                className="p-6 rounded-3xl glass-card border border-white/10 text-center hover:border-cyan-500/30 hover:shadow-[0_0_20px_rgba(0,240,255,0.15)] transition-all duration-300 group"
              >
                <div className="w-10 h-10 mx-auto mb-3 rounded-xl bg-white/5 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                  <IconComponent className="w-5 h-5" />
                </div>
                <div className="text-3xl sm:text-4xl font-heading font-extrabold text-white tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs font-mono text-slate-400 mt-1 uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Dedicated My Goal Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 relative rounded-3xl glass-card border border-cyan-500/30 p-8 sm:p-10 overflow-hidden shadow-[0_15px_40px_rgba(0,240,255,0.1)] text-center space-y-4"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-600/10 to-emerald-500/10 pointer-events-none"></div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-widest">
            <Target className="w-3.5 h-3.5" />
            <span>My Goal</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-heading font-bold text-white max-w-3xl mx-auto leading-relaxed">
            "My goal is to grow as a professional Full-Stack Web Developer, gain real-world experience and contribute to building meaningful digital products."
          </h3>
        </motion.div>

      </div>
    </section>
  );
}
