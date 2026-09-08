import React from 'react';
import { Code2, Layers, Sparkles, Cpu, MapPin, CheckCircle2, Target, Award } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const iconMap = {
  Code2: Code2,
  Layers: Layers,
  Sparkles: Sparkles,
  Cpu: Cpu,
};

export default function About() {
  const { personal, aboutPillars } = portfolioData;

  return (
    <section id="about" className="py-24 relative bg-[#09090d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#171722] border border-[#d4af37]/30 text-xs font-semibold text-[#fef08a] mb-3">
            <Target className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>Engineering Identity & Ambition</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
            Bridging Deep Computation with{' '}
            <span className="text-gold-gradient">Elite Aesthetics</span>
          </h2>
          <p className="mt-4 text-base text-[#94a3b8]">
            A snapshot of my background, industrial grounding at Jindal Steel, and what drives my pursuit of 50+ LPA engineering excellence.
          </p>
        </div>

        {/* Main Grid: Narrative & Quick Facts */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Story & Mission Card */}
          <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-[#0f0f16] border border-[#222232] shadow-card flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#d4af37]/5 rounded-full blur-3xl pointer-events-none"></div>

            <div>
              <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wider text-[#d4af37] mb-4">
                <MapPin className="w-4 h-4" />
                <span>Raigarh, Chhattisgarh • B.Tech CSE Final Year</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white leading-snug">
                "Not just writing code, but building robust systems that perform under industrial reality."
              </h3>

              <div className="mt-6 space-y-4 text-[#94a3b8] text-sm sm:text-base leading-relaxed">
                <p>
                  As a final-year Computer Science & Engineering student, I have consciously cultivated a rare combination: <strong className="text-white font-medium">high-performance backend & algorithmic discipline (DSA in C++)</strong> alongside <strong className="text-[#fef08a] font-medium">world-class UI/UX design craft (Figma & modern React)</strong>.
                </p>
                <p>
                  During my internship at <strong className="text-white">Jindal Steel & Power's Cell Automation Center (CAC)</strong>, I did not just work on theoretical concepts—I engineered and deployed the <strong className="text-[#fef08a]">Plate Mill Spindle Motion Detection</strong> system using Computer Vision, processing high-speed manufacturing movements with zero margin for error.
                </p>
                <p>
                  My immediate horizon is dedicated to mastering cutting-edge <strong className="text-white">Artificial Intelligence</strong> architectures and solving 500+ hard DSA patterns to earn a tier-1 software engineering role exceeding <strong className="text-[#d4af37]">50 LPA</strong>.
                </p>
              </div>
            </div>

            {/* Quick Badges */}
            <div className="mt-8 pt-6 border-t border-[#1d1d2b] flex flex-wrap items-center gap-3">
              <span className="px-3.5 py-1.5 rounded-xl bg-[#171724] border border-[#29293d] text-xs text-gray-300 font-medium">
                🎯 50+ LPA Tier Target
              </span>
              <span className="px-3.5 py-1.5 rounded-xl bg-[#171724] border border-[#29293d] text-xs text-gray-300 font-medium">
                🏭 Jindal Steel CAC Certified
              </span>
              <span className="px-3.5 py-1.5 rounded-xl bg-[#171724] border border-[#29293d] text-xs text-gray-300 font-medium">
                🧠 500+ LeetCode DSA Problems
              </span>
              <span className="px-3.5 py-1.5 rounded-xl bg-[#171724] border border-[#29293d] text-xs text-gray-300 font-medium">
                🎨 Figma & Micro-Interactions Master
              </span>
            </div>
          </div>

          {/* Right: 4 Strategic Pillars */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {aboutPillars.map((pillar, idx) => {
              const IconComponent = iconMap[pillar.icon] || Code2;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-[#0e0e14] border border-[#1f1f2e] hover:border-[#d4af37]/40 transition-all duration-300 hover:-translate-y-0.5 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-[#161622] border border-[#2a2a3c] flex items-center justify-center text-[#d4af37] group-hover:bg-[#d4af37] group-hover:text-black transition-all duration-300 shrink-0">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white group-hover:text-[#fef08a] transition-colors">
                        {pillar.title}
                      </h4>
                      <p className="mt-1.5 text-xs text-[#828ea2] leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
