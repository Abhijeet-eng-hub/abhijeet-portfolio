import React from 'react';
import { ArrowRight, Sparkles, Terminal, Code2, ShieldCheck, MapPin, Award } from 'lucide-react';
import confetti from 'canvas-confetti';
import { portfolioData } from '../data/portfolioData';

export default function Hero({ onOpenResumeModal }) {
  const { personal, stats } = portfolioData;

  const handleCelebrate = () => {
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#d4af37', '#fef08a', '#e5c07b', '#ffffff']
    });
  };

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden royal-grid-bg">
      {/* Royal Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#d4af37]/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] bg-[#b89228]/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-[#38384d]/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
        
        {/* Status Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#111117]/90 border border-[#d4af37]/30 shadow-[0_0_20px_rgba(212,175,55,0.15)] mb-8">
          <Sparkles className="w-4 h-4 text-[#fef08a]" />
          <span className="text-xs font-semibold text-[#fef08a] tracking-wide">
            Jindal Steel CAC Intern • B.Tech CSE 4th Year • Raigarh
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]"></span>
          <span className="text-xs text-[#94a3b8] font-medium hidden sm:inline">Targeting 50+ LPA Engineering Roles</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold tracking-tight text-white max-w-5xl mx-auto leading-[1.15] sm:leading-[1.12]">
          Engineering Scalable Systems with{' '}
          <span className="text-gold-gradient italic font-serif">
            Majestic Visual Grandeur
          </span>
        </h1>

        {/* Subtitle / Value Proposition */}
        <p className="mt-6 text-base sm:text-xl text-[#94a3b8] max-w-3xl mx-auto font-normal leading-relaxed">
          I am <span className="text-white font-semibold">{personal.name}</span>, a Full-Stack Engineer & UI/UX Designer driven to master AI and advanced algorithms. Proven in mission-critical industrial automation at <span className="text-[#fef08a] font-medium">Jindal Steel’s Cell Automation Center (CAC)</span>.
        </p>

        {/* Call to Actions */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-5">
          <a
            href="#projects"
            className="group px-7 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-[#d4af37] via-[#f59e0b] to-[#b89228] text-black shadow-[0_0_25px_rgba(212,175,55,0.35)] hover:shadow-[0_0_35px_rgba(212,175,55,0.55)] transition-all duration-300 flex items-center gap-2 hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Explore Spindle Project & Work</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>

          <a
            href="#contact"
            className="px-7 py-3.5 rounded-xl font-semibold text-sm bg-[#111117] text-white border border-[#2d2d42] hover:border-[#d4af37]/50 hover:bg-[#171722] transition-all duration-300 flex items-center gap-2 shadow-card hover:scale-[1.02]"
          >
            <span>Let's Connect</span>
          </a>

          <button
            onClick={handleCelebrate}
            className="px-5 py-3.5 rounded-xl text-sm font-medium bg-[#171722]/60 text-[#cbd5e1] border border-[#2d2d42] hover:border-[#fef08a]/30 hover:text-white transition-all duration-300 flex items-center gap-2"
            title="Celebrate Milestone"
          >
            <Sparkles className="w-4 h-4 text-[#d4af37]" />
            <span className="hidden sm:inline">50+ LPA Vision</span>
          </button>
        </div>

        {/* Metric Badges */}
        <div className="mt-16 pt-10 border-t border-[#1f1f2e] max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((item, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-[#0e0e14]/80 border border-[#222232] hover:border-[#d4af37]/40 transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="text-2xl sm:text-3xl font-serif font-bold text-white group-hover:text-gold-gradient transition-colors">
                {item.value}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-[#fef08a] mt-1">
                {item.label}
              </div>
              <div className="text-[11px] text-[#64748b] mt-0.5">
                {item.detail}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
