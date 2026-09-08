import React from 'react';
import { Briefcase, Award, CheckCircle, Calendar, MapPin, Cpu, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-24 relative bg-[#07070a]">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#171722] border border-[#d4af37]/30 text-xs font-semibold text-[#fef08a] mb-3">
            <Briefcase className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>Industrial Experience</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
            Field-Tested at <span className="text-gold-gradient">Jindal Steel (CAC)</span>
          </h2>
          <p className="mt-4 text-base text-[#94a3b8]">
            Applying computer science and edge intelligence to mission-critical manufacturing operations at one of India's premier industrial conglomerates.
          </p>
        </div>

        {/* Experience Timeline Card */}
        <div className="mt-16 max-w-4xl mx-auto">
          {experience.map((exp, idx) => (
            <div
              key={idx}
              className="p-8 sm:p-10 rounded-3xl bg-[#0f0f16] border border-[#222232] hover:border-[#d4af37]/40 shadow-card transition-all duration-300 relative overflow-hidden"
            >
              {/* Royal Crest Accents */}
              <div className="flex flex-wrap items-start justify-between gap-4 pb-6 border-b border-[#1d1d2c]">
                <div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#d4af37] uppercase tracking-wider">
                    <span className="w-2 h-2 rounded-full bg-[#d4af37]"></span>
                    <span>{exp.division}</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mt-1">
                    {exp.company}
                  </h3>
                  <p className="text-base text-[#fef08a] font-medium mt-1">
                    {exp.role}
                  </p>
                </div>

                <div className="flex flex-col sm:items-end gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#1c1c28] border border-[#303045] text-xs font-medium text-emerald-300">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    {exp.badge}
                  </span>
                  <div className="flex items-center gap-2 text-xs text-[#64748b]">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              {/* Description & Core Impact */}
              <div className="mt-6">
                <p className="text-[#94a3b8] text-sm sm:text-base leading-relaxed">
                  {exp.description}
                </p>

                {/* Key Achievements */}
                <div className="mt-6 space-y-3.5">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                    Key Deliverables & Engineering Accomplishments:
                  </h4>
                  {exp.achievements.map((item, aIdx) => (
                    <div key={aIdx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle className="w-3 h-3 text-[#fef08a]" />
                      </div>
                      <p className="text-sm text-[#cbd5e1] leading-relaxed">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Pills */}
                <div className="mt-8 pt-6 border-t border-[#1d1d2c] flex flex-wrap items-center gap-2">
                  <span className="text-xs font-semibold text-[#8b9bb4] mr-2">Technologies Used:</span>
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg text-xs font-medium bg-[#161622] text-[#e2e8f0] border border-[#262638] hover:border-[#d4af37]/40 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
