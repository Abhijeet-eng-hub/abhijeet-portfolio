import React, { useState } from 'react';
import { Terminal, Layers, Palette, Cpu, Sparkles, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Skills() {
  const { skills } = portfolioData;
  const categories = Object.keys(skills);
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  const categoryIcons = {
    "Full Stack Development": Layers,
    "UI/UX Design": Palette,
    "Data Structures & Algorithms": Terminal,
    "AI & Industrial Automation": Cpu
  };

  return (
    <section id="skills" className="py-24 relative bg-[#07070a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#171722] border border-[#d4af37]/30 text-xs font-semibold text-[#fef08a] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>Technical Proficiencies</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
            Skill Taxonomy & <span className="text-gold-gradient">Mastery</span>
          </h2>
          <p className="mt-4 text-base text-[#94a3b8]">
            A balanced synthesis of core algorithmic complexity, production full-stack engineering, and high-fidelity interface design.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
          {categories.map((cat) => {
            const Icon = categoryIcons[cat] || Sparkles;
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? 'bg-gradient-to-r from-[#d4af37] via-[#f59e0b] to-[#b89228] text-black shadow-[0_0_20px_rgba(212,175,55,0.3)] scale-[1.03]'
                    : 'bg-[#111117] text-[#94a3b8] border border-[#222232] hover:text-white hover:border-[#d4af37]/40'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{cat}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills[activeCategory].map((skill, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#0e0e14] border border-[#1f1f2e] hover:border-[#d4af37]/40 transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-bold text-base text-white group-hover:text-[#fef08a] transition-colors">
                  {skill.name}
                </span>
                <span className="px-2.5 py-0.5 rounded-md text-[10px] font-semibold bg-[#171724] text-[#d4af37] border border-[#2b2b3d]">
                  {skill.tag}
                </span>
              </div>

              {/* Progress bar */}
              <div className="w-full bg-[#171724] h-2 rounded-full overflow-hidden border border-[#232332]">
                <div
                  className="h-full bg-gradient-to-r from-[#d4af37] via-[#fef08a] to-[#b89228] rounded-full transition-all duration-700"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>

              <div className="flex justify-between items-center mt-2 text-[11px] text-[#64748b]">
                <span>Proficiency</span>
                <span className="font-semibold text-gray-300">{skill.level}%</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner Highlight */}
        <div className="mt-16 p-6 rounded-2xl bg-[#0f0f16] border border-[#d4af37]/20 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#171724] border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37]">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Daily Discipline in DSA & AI</h4>
              <p className="text-xs text-[#94a3b8]">Actively solving LeetCode/Codeforces patterns and training computer vision heuristics.</p>
            </div>
          </div>

          <a
            href="#contact"
            className="text-xs font-semibold text-[#fef08a] hover:underline flex items-center gap-1"
          >
            Inquire about technical competencies →
          </a>
        </div>

      </div>
    </section>
  );
}
