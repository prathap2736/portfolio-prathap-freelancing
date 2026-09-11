import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal, GitCommit, Star, Activity } from 'lucide-react';
import SectionHeading from '../Common/SectionHeading';

export default function GithubSection() {
  const [activeTab, setActiveTab] = useState('terminal');
  const [terminalOutput] = useState([
    { type: 'command', text: '$ npm run build' },
    { type: 'info', text: '> vite v5.4.11 building for production...' },
    { type: 'success', text: '✓ 48 modules transformed.' },
    { type: 'success', text: '✓ Building amazing interactive web experiences...' },
    { type: 'command', text: '$ git push origin main' },
    { type: 'info', text: 'Enumerating objects: 12, done.' },
    { type: 'success', text: '🚀 Successfully deployed to production at 100% speed!' },
  ]);

  const generateContributionDays = () => {
    const days = [];
    for (let i = 0; i < 364; i++) {
      const rand = Math.random();
      let level = 0;
      if (rand > 0.45 && rand <= 0.7) level = 1;
      else if (rand > 0.7 && rand <= 0.88) level = 2;
      else if (rand > 0.88 && rand <= 0.96) level = 3;
      else if (rand > 0.96) level = 4;
      days.push({ id: i, level });
    }
    return days;
  };

  const [contributionGrid] = useState(generateContributionDays());

  const getLevelColor = (level) => {
    switch (level) {
      case 1: return 'bg-cyan-900/60 border-cyan-700/50';
      case 2: return 'bg-cyan-600/80 border-cyan-500/80';
      case 3: return 'bg-cyan-400 shadow-[0_0_8px_rgba(0,240,255,0.6)]';
      case 4: return 'bg-emerald-400 shadow-[0_0_10px_rgba(0,255,157,0.8)]';
      default: return 'bg-white/5 border-white/5';
    }
  };

  return (
    <section className="py-24 relative z-10 overflow-hidden bg-[#07090e]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <SectionHeading
          label="Developer Activity"
          icon={Activity}
          title="Always Learning."
          gradientTitle="Always Building."
          subtitle="Continuous commit history, open-source workflow, and live deployment terminal."
        />

        {/* CLI & Contribution Workspace */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto rounded-3xl glass-card border border-cyan-500/20 shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden"
        >
          {/* Top Window Bar */}
          <div className="px-6 py-4 bg-[#0a0d14] border-b border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              <span className="ml-2 font-mono text-xs text-slate-400">prathap@dev-workstation:~</span>
            </div>

            {/* Mode Switcher */}
            <div className="flex items-center gap-2 bg-white/5 p-1 rounded-xl border border-white/10 text-xs font-mono">
              <button
                onClick={() => setActiveTab('terminal')}
                className={`px-3 py-1.5 rounded-lg flex items-center gap-2 transition-all ${
                  activeTab === 'terminal'
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Terminal className="w-3.5 h-3.5" />
                <span>Live Terminal</span>
              </button>

              <button
                onClick={() => setActiveTab('github')}
                className={`px-3 py-1.5 rounded-lg flex items-center gap-2 transition-all ${
                  activeTab === 'github'
                    ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <GitCommit className="w-3.5 h-3.5" />
                <span>GitHub Contributions</span>
              </button>
            </div>
          </div>

          {/* Window Body */}
          <div className="p-6 sm:p-8 bg-[#05070c]/90">
            {activeTab === 'terminal' ? (
              <div className="space-y-3 font-mono text-xs sm:text-sm">
                {terminalOutput.map((line, index) => (
                  <div key={index} className="flex items-start gap-2">
                    {line.type === 'command' && (
                      <span className="text-cyan-400 font-bold">$</span>
                    )}
                    <span
                      className={
                        line.type === 'command'
                          ? 'text-white font-semibold'
                          : line.type === 'success'
                          ? 'text-emerald-400'
                          : 'text-slate-400'
                      }
                    >
                      {line.text}
                    </span>
                  </div>
                ))}
                <div className="flex items-center gap-2 text-slate-400 pt-2">
                  <span className="text-cyan-400 font-bold">$</span>
                  <span className="inline-block w-2 h-4 bg-cyan-400 cursor-blink"></span>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-400">
                  <span className="flex items-center gap-2 text-white font-semibold">
                    <Star className="w-4 h-4 text-yellow-400" />
                    500+ Contributions in the last year
                  </span>
                  <div className="flex items-center gap-1">
                    <span>Less</span>
                    <div className="w-3 h-3 rounded-sm bg-white/5"></div>
                    <div className="w-3 h-3 rounded-sm bg-cyan-900/60"></div>
                    <div className="w-3 h-3 rounded-sm bg-cyan-600/80"></div>
                    <div className="w-3 h-3 rounded-sm bg-cyan-400"></div>
                    <div className="w-3 h-3 rounded-sm bg-emerald-400"></div>
                    <span>More</span>
                  </div>
                </div>

                <div className="overflow-x-auto pb-2">
                  <div className="grid grid-flow-col grid-rows-7 gap-1.5 min-w-[700px]">
                    {contributionGrid.map((day) => (
                      <div
                        key={day.id}
                        className={`w-3.5 h-3.5 rounded-sm border ${getLevelColor(
                          day.level
                        )} transition-all hover:scale-125 hover:z-10`}
                        title={`Day ${day.id + 1}: ${day.level * 3 + (day.level > 0 ? 1 : 0)} commits`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

        </motion.div>

      </div>
    </section>
  );
}
