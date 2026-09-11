import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Send, CheckCircle2, AlertCircle, MapPin, Github, Linkedin, MessageSquare, User, Tag } from 'lucide-react';
import confetti from 'canvas-confetti';
import SectionHeading from '../Common/SectionHeading';
import MagneticButton from '../Common/MagneticButton';

export default function ContactSection({ prefillSubject = '', onSubjectClear }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: prefillSubject,
    projectType: 'Website Development',
    budgetRange: 'Under $500',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  React.useEffect(() => {
    if (prefillSubject) {
      setFormData((prev) => ({ ...prev, subject: prefillSubject }));
    }
  }, [prefillSubject]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#00f0ff', '#8a2be2', '#00ff9d'],
        });
      } catch (err) {}

      setFormData({ name: '', email: '', subject: '', projectType: 'Website Development', budgetRange: 'Under $500', message: '' });
      setErrors({});
      if (onSubjectClear) {
        onSubjectClear();
      }

      setTimeout(() => {
        setIsSubmitted(false);
      }, 6000);
    }, 1200);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <section id="contact" className="py-24 relative z-10 overflow-hidden bg-[#07090e]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <SectionHeading
          label="Get In Touch"
          icon={Mail}
          title="Let's Start a"
          gradientTitle="Conversation."
          subtitle="Have a project in mind, an opportunity to discuss, or just want to say hello? Drop me a message below!"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Quick Contact Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="rounded-3xl glass-card border border-white/10 p-8 space-y-8">
              <div>
                <h3 className="font-heading font-bold text-2xl text-white">Contact Information</h3>
                <p className="text-sm text-slate-400 font-light mt-1">
                  Feel free to reach out through any of these platforms.
                </p>
              </div>

              <div className="space-y-6">
                <a
                  href="mailto:prathapkalaivani8@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/40 hover:bg-white/10 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-400 uppercase">Email Address</div>
                    <div className="text-base font-semibold text-white group-hover:text-cyan-300 transition-colors">
                      prathapkalaivani8@gmail.com
                    </div>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-400 uppercase">Location</div>
                    <div className="text-base font-semibold text-white">
                      Tamil Nadu, India
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-2">
                  <a
                    href="https://github.com/prathap2736"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400/40 hover:text-cyan-300 transition-all text-slate-300 text-sm font-semibold"
                  >
                    <Github className="w-5 h-5 text-cyan-400" />
                    <span>GitHub</span>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/prathap-kalavani-2aab562a3"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400/40 hover:text-cyan-300 transition-all text-slate-300 text-sm font-semibold"
                  >
                    <Linkedin className="w-5 h-5 text-cyan-400" />
                    <span>LinkedIn</span>
                  </a>
                </div>

              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="rounded-3xl glass-card border border-cyan-500/20 p-8 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
              
              <AnimatePresence>
                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mb-6 p-4 rounded-2xl bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 text-sm flex items-center gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                    <span>Thank you! Your message has been sent successfully. I will get back to you soon!</span>
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider flex items-center gap-2">
                      <User className="w-3.5 h-3.5 text-cyan-400" /> Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className={`w-full px-4 py-3.5 rounded-xl bg-[#0a0d14] border ${
                        errors.name ? 'border-red-500' : 'border-white/15 focus:border-cyan-400'
                      } text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all font-sans text-sm`}
                    />
                    {errors.name && (
                      <span className="text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.name}
                      </span>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider flex items-center gap-2">
                      <Mail className="w-3.5 h-3.5 text-cyan-400" /> Your Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className={`w-full px-4 py-3.5 rounded-xl bg-[#0a0d14] border ${
                        errors.email ? 'border-red-500' : 'border-white/15 focus:border-cyan-400'
                      } text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all font-sans text-sm`}
                    />
                    {errors.email && (
                      <span className="text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.email}
                      </span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider flex items-center gap-2">
                      <Tag className="w-3.5 h-3.5 text-cyan-400" /> Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project Inquiry / Job Opportunity"
                      className={`w-full px-4 py-3.5 rounded-xl bg-[#0a0d14] border ${
                        errors.subject ? 'border-red-500' : 'border-white/15 focus:border-cyan-400'
                      } text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all font-sans text-sm`}
                    />
                    {errors.subject && (
                      <span className="text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.subject}
                      </span>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider flex items-center gap-2">
                      <Tag className="w-3.5 h-3.5 text-cyan-400" /> Project Type
                    </label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#0a0d14] border border-white/15 text-white focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all font-sans text-sm"
                    >
                      <option>Website Development</option>
                      <option>Frontend Development</option>
                      <option>Responsive Website</option>
                      <option>UI Enhancement</option>
                      <option>E-Commerce Website</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider flex items-center gap-2">
                    <Tag className="w-3.5 h-3.5 text-cyan-400" /> Budget Range
                  </label>
                  <select
                    name="budgetRange"
                    value={formData.budgetRange}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 rounded-xl bg-[#0a0d14] border border-white/15 text-white focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all font-sans text-sm"
                  >
                    <option>Under $500</option>
                    <option>$500 - $1,000</option>
                    <option>$1,000 - $2,500</option>
                    <option>$2,500 - $5,000</option>
                    <option>$5,000+</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider flex items-center gap-2">
                    <MessageSquare className="w-3.5 h-3.5 text-cyan-400" /> Your Message
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hi Prathap, I'd like to discuss a project..."
                    className={`w-full px-4 py-3.5 rounded-xl bg-[#0a0d14] border ${
                      errors.message ? 'border-red-500' : 'border-white/15 focus:border-cyan-400'
                    } text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all font-sans text-sm resize-none`}
                  />
                  {errors.message && (
                    <span className="text-xs text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.message}
                    </span>
                  )}
                </div>

                <MagneticButton
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-slate-950 font-heading font-bold text-base hover:brightness-110 transition-all duration-300 shadow-[0_0_25px_rgba(0,240,255,0.4)] disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Sending Message...</span>
                  ) : (
                    <>
                      <span>Send Project Inquiry →</span>
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </MagneticButton>

              </form>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
