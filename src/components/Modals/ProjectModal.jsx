import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, CheckCircle, Layers, Sparkles } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return undefined;

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto p-4 sm:p-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-xl"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 24, stiffness: 260 }}
          onClick={(event) => event.stopPropagation()}
          className="relative z-10 my-8 w-full max-w-5xl overflow-hidden rounded-[28px] border border-cyan-500/30 bg-[#0b111d]/95 shadow-[0_25px_80px_rgba(2,6,23,0.8)]"
        >
          <div className="flex items-center justify-between border-b border-white/10 bg-white/5 px-5 py-4 sm:px-7">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20 text-xl ring-1 ring-white/10">
                {project.title.slice(0, 1)}
              </div>
              <div>
                <h3 className="font-heading text-xl font-bold text-white">{project.title}</h3>
                <p className="text-[11px] font-mono uppercase tracking-[0.22em] text-cyan-300">{project.category}</p>
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-200 transition hover:bg-white/10 hover:text-white"
              aria-label="Close project details"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="max-h-[80vh] overflow-y-auto p-5 sm:p-7">
            <div className={`relative overflow-hidden rounded-[24px] border border-white/10 bg-gradient-to-br ${project.accent}`}>
              <img
                src={project.image}
                alt={project.title}
                className="h-60 w-full object-cover opacity-80 sm:h-80"
                onError={(event) => {
                  event.currentTarget.style.display = 'none';
                }}
              />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.2),transparent_45%),linear-gradient(to_top,_rgba(2,6,23,0.8),rgba(2,6,23,0.25))]" />

              <div className="absolute inset-x-0 top-0 flex items-center justify-between p-4 sm:p-6">
                <span className="rounded-full border border-cyan-400/40 bg-black/40 px-3 py-1 text-[10px] font-mono uppercase tracking-[0.22em] text-cyan-200 backdrop-blur-md">
                  Case Study
                </span>
                <Sparkles className="h-5 w-5 text-cyan-200" />
              </div>

              <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6">
                <h2 className="font-heading text-2xl font-extrabold text-white sm:text-4xl">{project.title}</h2>
                <p className="mt-2 max-w-2xl text-sm text-slate-200 sm:text-base">{project.description}</p>
              </div>
            </div>

            <div className="mt-7 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h4 className="mb-4 flex items-center gap-2 font-heading text-base font-bold text-white">
                  <CheckCircle className="h-4 w-4 text-cyan-400" />
                  Overview
                </h4>
                <p className="text-sm leading-7 text-slate-300">{project.overview}</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h4 className="mb-4 flex items-center gap-2 font-heading text-base font-bold text-white">
                  <Layers className="h-4 w-4 text-violet-400" />
                  Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] font-mono uppercase tracking-[0.14em] text-slate-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 grid gap-6 lg:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h4 className="mb-3 font-heading text-base font-bold text-white">Problem</h4>
                <p className="text-sm leading-7 text-slate-300">{project.problem}</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h4 className="mb-3 font-heading text-base font-bold text-white">Solution</h4>
                <p className="text-sm leading-7 text-slate-300">{project.solution}</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h4 className="mb-3 font-heading text-base font-bold text-white">Outcome</h4>
                <p className="text-sm leading-7 text-slate-300">{project.outcome}</p>
              </div>
            </div>

            <div className="mt-6 grid gap-6 lg:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h4 className="mb-4 font-heading text-base font-bold text-white">Key Features</h4>
                <ul className="space-y-2 text-sm text-slate-300">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <span className="mt-1 text-cyan-400">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h4 className="mb-4 font-heading text-base font-bold text-white">Challenges</h4>
                <ul className="space-y-2 text-sm text-slate-300">
                  {project.challenges.map((challenge) => (
                    <li key={challenge} className="flex items-start gap-2">
                      <span className="mt-1 text-violet-400">•</span>
                      <span>{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-7 flex flex-wrap items-center justify-end gap-3 border-t border-white/10 pt-5">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-slate-200 transition hover:bg-white/10 hover:text-white"
              >
                <Github className="h-4 w-4" />
                View Code ↗
              </a>

              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-500 px-5 py-3 text-sm font-semibold text-slate-950 shadow-[0_0_20px_rgba(34,211,238,0.35)] transition hover:brightness-110"
              >
                Live Demo →
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

