import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, Mail, Phone, MapPin, Briefcase, GraduationCap, Award, Code, CheckCircle2 } from 'lucide-react';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handleDownload = () => {
    // Generate text/HTML resume blob for immediate download
    const resumeText = `
PRATHAP
Full-Stack Web Developer
Email: prathap@example.com | Tamil Nadu, India

SUMMARY
Passionate Full-Stack Web Developer focused on creating responsive, modern and interactive web applications. 
Experienced in React.js, JavaScript, Tailwind CSS, Node.js, and client support workflows.

SKILLS
Frontend: HTML5, CSS3, JavaScript (ES6+), React.js, Bootstrap, Tailwind CSS, Framer Motion
Backend: Node.js, Express.js
Tools: Git, GitHub, VS Code, Vite, Figma, npm

WORK EXPERIENCE
Customer Support Executive — RedTaxi (1 Year)
- Handled inbound customer calls and technical support inquiries in fast-paced environments.
- Applied empathetic problem-solving and rapid conflict resolution to maintain customer satisfaction.

EDUCATION & TRAINING
Web Development Training — Code99 IT Academy
- Full-stack web development program covering React, modern JavaScript, responsive CSS, and Node.js.

PROJECTS
- Cardamom Website (HTML, CSS, JS, Bootstrap)
- Bhai Briyani (HTML, CSS Grid, JS)
- Developer Portfolio (React, Tailwind CSS, Framer Motion)
    `;

    const blob = new Blob([resumeText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Prathap_FullStack_Developer_Resume.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-xl"
        />

        {/* Resume Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-3xl bg-[#0c101d] border border-cyan-500/30 rounded-3xl shadow-[0_25px_60px_rgba(0,0,0,0.9)] overflow-hidden z-10 my-8"
        >
          {/* Top Bar */}
          <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between bg-white/5">
            <h3 className="font-heading font-bold text-lg text-white flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-cyan-400" />
              <span>Prathap's Formal Resume</span>
            </h3>
            <div className="flex items-center gap-3">
              <button
                onClick={handleDownload}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 hover:text-white text-xs font-semibold hover:bg-cyan-500/30 transition-all"
              >
                <Download className="w-4 h-4" />
                <span>Download File</span>
              </button>
              <button
                onClick={onClose}
                className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Resume Body */}
          <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto text-slate-200">
            {/* Header */}
            <div className="border-b border-white/10 pb-6 space-y-2">
              <h1 className="text-3xl font-heading font-extrabold text-white">PRATHAP</h1>
              <p className="text-cyan-400 font-mono text-sm font-semibold">Full-Stack Web Developer</p>
              <div className="flex flex-wrap gap-4 text-xs font-mono text-slate-400 pt-2">
                <span className="flex items-center gap-1"><Mail className="w-3.5 h-3.5 text-cyan-400" /> prathap@example.com</span>
                <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-cyan-400" /> Tamil Nadu, India</span>
              </div>
            </div>

            {/* Profile Summary */}
            <div className="space-y-2">
              <h4 className="font-heading font-bold text-sm text-cyan-400 uppercase tracking-widest">Professional Summary</h4>
              <p className="text-sm text-slate-300 font-light leading-relaxed">
                Passionate Full-Stack Web Developer focused on creating responsive, modern and interactive web applications. Specialized in modern frontend technologies like React, JavaScript, and Tailwind CSS alongside backend integration with Node.js.
              </p>
            </div>

            {/* Technical Skills */}
            <div className="space-y-2">
              <h4 className="font-heading font-bold text-sm text-cyan-400 uppercase tracking-widest">Technical Skills</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <span className="font-semibold text-white">Frontend:</span> HTML5, CSS3, JavaScript (ES6+), React.js, Bootstrap, Tailwind CSS, Framer Motion
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <span className="font-semibold text-white">Backend & Tools:</span> Node.js, Express.js, Git, GitHub, Vite, VS Code, Figma
                </div>
              </div>
            </div>

            {/* Work & Training */}
            <div className="space-y-4">
              <h4 className="font-heading font-bold text-sm text-cyan-400 uppercase tracking-widest">Experience & Education</h4>
              
              <div className="space-y-3">
                <div className="p-4 rounded-xl glass-card border border-white/10">
                  <div className="flex justify-between items-start">
                    <h5 className="font-bold text-white text-base">Customer Support Executive</h5>
                    <span className="text-xs font-mono text-cyan-400">1 Year</span>
                  </div>
                  <p className="text-xs text-slate-400 font-mono">RedTaxi</p>
                  <p className="text-xs text-slate-300 mt-2">
                    Customer handling, inbound support calls, technical problem solving, SLA management, and effective communication.
                  </p>
                </div>

                <div className="p-4 rounded-xl glass-card border border-white/10">
                  <div className="flex justify-between items-start">
                    <h5 className="font-bold text-white text-base">Web Development Training</h5>
                    <span className="text-xs font-mono text-cyan-400">Full-Stack Certification</span>
                  </div>
                  <p className="text-xs text-slate-400 font-mono">Code99 IT Academy</p>
                  <p className="text-xs text-slate-300 mt-2">
                    Intensive training in HTML5, CSS3, JavaScript, React.js, Tailwind CSS, Git version control, and responsive architecture.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
