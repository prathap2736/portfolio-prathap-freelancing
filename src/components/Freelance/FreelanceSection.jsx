import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, CheckCircle2, BriefcaseBusiness, Sparkles, MonitorSmartphone, Code2, LayoutTemplate, NotebookPen } from 'lucide-react';
import SpotlightCard from '../Common/SpotlightCard';
import SectionHeading from '../Common/SectionHeading';

const freelanceProject = {
  title: 'V Trends MensWear',
  label: 'FREELANCE PROJECT',
  description: 'A responsive men\'s fashion website created with a strong focus on modern UI design, product presentation, responsive layouts and an engaging shopping experience.',
  services: [
    'UI Development',
    'Responsive Web Design',
    'Frontend Development',
    'Product Showcase',
    'Interactive Components',
    'Mobile Optimization',
    'Cross-Browser Compatibility',
  ],
  technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'Responsive Design'],
  features: [
    'Modern fashion homepage',
    'Product showcase',
    'Product categories',
    'Product cards',
    'Responsive navigation',
    'Interactive UI',
    'Mobile-friendly layout',
    'Fashion-focused visual design',
    'Smooth hover interactions',
  ],
  image: '/assets/projects/v-trends-menswear.png',
  status: 'CLIENT / FREELANCE PROJECT',
  accent: 'from-amber-400/20 via-orange-500/18 to-slate-950',
  spotlight: 'rgba(245, 158, 11, 0.18)',
};

const services = [
  {
    id: '01',
    title: 'Website Development',
    description: 'Custom website builds tailored to your business goals and user needs.',
    icon: Code2,
    accent: 'from-cyan-500/25 via-sky-500/15 to-slate-900',
    spotlight: 'rgba(34, 211, 238, 0.14)',
  },
  {
    id: '02',
    title: 'Responsive Web Design',
    description: 'Modern layouts that feel polished across desktop, tablet, and mobile.',
    icon: MonitorSmartphone,
    accent: 'from-violet-500/25 via-indigo-500/15 to-slate-900',
    spotlight: 'rgba(168, 85, 247, 0.14)',
  },
  {
    id: '03',
    title: 'Frontend Development',
    description: 'Interactive, accessible, and conversion-focused frontend experiences.',
    icon: LayoutTemplate,
    accent: 'from-emerald-500/20 via-teal-500/15 to-slate-900',
    spotlight: 'rgba(16, 185, 129, 0.14)',
  },
  {
    id: '04',
    title: 'Website UI Enhancement',
    description: 'Refine existing pages with cleaner UX, stronger visuals, and smoother interactions.',
    icon: NotebookPen,
    accent: 'from-rose-500/20 via-pink-500/15 to-slate-900',
    spotlight: 'rgba(251, 113, 133, 0.14)',
  },
];

const workflow = [
  {
    id: '01',
    title: 'DISCOVER',
    text: 'Understand the client\'s requirements, business goals and target audience.',
  },
  {
    id: '02',
    title: 'DESIGN',
    text: 'Plan the layout, visual style and user experience.',
  },
  {
    id: '03',
    title: 'DEVELOP',
    text: 'Build the responsive website using modern frontend technologies.',
  },
  {
    id: '04',
    title: 'DELIVER',
    text: 'Test, optimize and deliver the final project.',
  },
];

export default function FreelanceSection({ onStartProject }) {
  return (
    <section id="freelance" className="relative z-10 overflow-hidden py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Freelance & Client Work"
          icon={BriefcaseBusiness}
          title="Freelance & Client"
          gradientTitle="Projects."
          subtitle="Real-world websites and digital experiences built for clients, businesses and individual requirements."
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 flex flex-wrap items-center justify-center gap-3"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-[10px] font-mono uppercase tracking-[0.2em] text-emerald-300">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_16px_rgba(52,211,153,0.8)]" />
            AVAILABLE FOR FREELANCE PROJECTS
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.08 }}
          className="mb-12 text-center"
        >
          <p className="text-2xl font-heading font-semibold text-white">Have a project in mind?</p>
          <p className="mx-auto mt-3 max-w-2xl text-base text-slate-300">
            Let&apos;s turn your idea into a modern, responsive and professional web experience.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={onStartProject}
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-500 px-5 py-3 text-sm font-semibold text-slate-950 shadow-[0_0_20px_rgba(34,211,238,0.3)] transition hover:brightness-110"
            >
              Start a Project →
            </button>
            <button
              type="button"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-slate-200 transition hover:border-cyan-400/40 hover:text-white"
            >
              Contact Me
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="mb-16"
        >
          <SpotlightCard
            spotlightColor={freelanceProject.spotlight}
            className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-[#0c121c]/80 p-0 shadow-[0_25px_70px_rgba(2,6,23,0.45)]"
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),transparent_45%)]" />
            <div className="pointer-events-none absolute inset-x-0 top-10 flex justify-center text-[8rem] font-black tracking-[0.28em] text-slate-500/10">FREELANCE</div>

            <div className="relative grid gap-6 p-4 sm:p-6 lg:grid-cols-[1.15fr_0.85fr] lg:p-8">
              <div className="relative overflow-hidden rounded-[26px] border border-white/10 bg-slate-950/50">
                <div className={`relative overflow-hidden rounded-[26px] bg-gradient-to-br ${freelanceProject.accent}`}>
                  <img
                    src={freelanceProject.image}
                    alt={freelanceProject.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.06] group-hover:translate-y-[-3px]"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.15),rgba(2,6,23,0.68))] opacity-90 transition duration-500 group-hover:opacity-100" />
                  <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-slate-950/60 px-3 py-1 text-[9px] font-mono uppercase tracking-[0.18em] text-slate-200 backdrop-blur-md">
                    CLIENT PROJECT
                  </span>
                  <div className="absolute bottom-4 left-4 rounded-full border border-white/10 bg-slate-950/60 px-3 py-1 text-[9px] font-mono uppercase tracking-[0.18em] text-cyan-200 backdrop-blur-md">
                    {freelanceProject.label}
                  </div>
                  <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white backdrop-blur-md transition duration-300 group-hover:scale-110 group-hover:bg-cyan-400 group-hover:text-slate-950 group-hover:rotate-45">
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                  <div className="absolute bottom-1/2 left-1/2 -translate-x-1/2 translate-y-5 rounded-full border border-white/10 bg-slate-950/70 px-4 py-2 text-[10px] font-mono uppercase tracking-[0.18em] text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 backdrop-blur-md">
                    VIEW PROJECT ↗
                  </div>
                </div>
              </div>

              <div className="relative flex flex-col justify-between rounded-[26px] border border-white/10 bg-white/5 p-5 sm:p-6">
                <div>
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <span className="text-[10px] font-mono uppercase tracking-[0.18em] text-cyan-300">{freelanceProject.label}</span>
                    <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-[8px] font-mono uppercase tracking-[0.16em] text-emerald-200">
                      {freelanceProject.status}
                    </span>
                  </div>

                  <div className="overflow-hidden">
                    <h3 className="font-heading text-3xl font-extrabold text-white transition duration-300 group-hover:-translate-y-1">
                      {freelanceProject.title}
                    </h3>
                  </div>

                  <p className="mt-4 text-sm leading-7 text-slate-300">{freelanceProject.description}</p>

                  <div className="mt-6">
                    <h4 className="mb-3 text-[10px] font-mono uppercase tracking-[0.2em] text-slate-400">Services Provided</h4>
                    <div className="flex flex-wrap gap-2">
                      {freelanceProject.services.map((service) => (
                        <span key={service} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[9px] font-medium text-slate-200 transition duration-300 group-hover:translate-y-[-2px]">
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  <div>
                    <h4 className="mb-3 text-[10px] font-mono uppercase tracking-[0.2em] text-slate-400">Technology Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {freelanceProject.technologies.map((tech) => (
                        <span key={tech} className="rounded-lg border border-white/10 bg-slate-950/60 px-2.5 py-1.5 text-[9px] font-mono uppercase tracking-[0.1em] text-slate-300">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="grid gap-2 text-sm text-slate-300">
                    {freelanceProject.features.slice(0, 4).map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <CheckCircle2 className="h-3.5 w-3.5 text-cyan-400" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 flex flex-wrap gap-3">
                    <button
                      type="button"
                      onClick={() => window.open('https://example.com/v-trends-menswear', '_blank', 'noopener,noreferrer')}
                      className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-[10px] font-mono uppercase tracking-[0.18em] text-slate-100 transition duration-300 hover:bg-white/10"
                    >
                      Live Demo <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                    <button
                      type="button"
                      onClick={onStartProject}
                      className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-500 px-4 py-2.5 text-[10px] font-mono uppercase tracking-[0.18em] text-slate-950 transition duration-300 hover:brightness-110"
                    >
                      Case Study
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SpotlightCard>
        </motion.div>

        <div className="mb-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
              >
                <SpotlightCard
                  spotlightColor={service.spotlight}
                  className="group relative h-full overflow-hidden rounded-[24px] border border-white/10 bg-[#0a1018]/80 p-5"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.accent} opacity-70`} />
                  <div className="relative z-10">
                    <div className="mb-5 flex items-center justify-between">
                      <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-slate-400">{service.id}</span>
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-cyan-300">
                        <Icon className="h-5 w-5" />
                      </div>
                    </div>
                    <h3 className="font-heading text-xl font-bold text-white transition duration-300 group-hover:-translate-y-1">{service.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-300">{service.description}</p>
                  </div>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </div>

        <div className="mb-16">
          <div className="mb-8 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[10px] font-mono uppercase tracking-[0.2em] text-slate-300">
              HOW I WORK
            </span>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {workflow.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="rounded-[24px] border border-white/10 bg-white/5 p-5"
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-cyan-300">{step.id}</span>
                  <Sparkles className="h-4 w-4 text-slate-400" />
                </div>
                <h3 className="font-heading text-xl font-bold text-white">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{step.text}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-[30px] border border-cyan-500/20 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.12),transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.14),transparent_30%),rgba(8,12,20,0.82)] p-6 sm:p-8"
        >
          <div className="absolute inset-0 bg-grid-pattern opacity-20" />
          <div className="relative z-10 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-[10px] font-mono uppercase tracking-[0.2em] text-emerald-200">
              AVAILABLE FOR FREELANCE WORK
            </span>
            <h3 className="mt-6 font-heading text-3xl font-bold text-white sm:text-4xl">Have a Website Idea?</h3>
            <p className="mx-auto mt-4 max-w-2xl text-base text-slate-300">
              Whether you need a new website, a responsive redesign, or a modern frontend experience, let&apos;s build it together.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <button
                type="button"
                onClick={onStartProject}
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-500 px-5 py-3 text-sm font-semibold text-slate-950 shadow-[0_0_25px_rgba(34,211,238,0.3)] transition hover:brightness-110"
              >
                Start a Conversation →
              </button>
              <button
                type="button"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-slate-200 transition hover:border-cyan-400/40 hover:text-white"
              >
                View My Work
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
