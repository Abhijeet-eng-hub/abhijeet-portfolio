import React from 'react';
import { Quote, Star, Sparkles, ShieldCheck } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Testimonials() {
  const { testimonials } = portfolioData;

  return (
    <section className="py-24 relative bg-[#07070a] overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#d4af37]/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#171722] border border-[#d4af37]/30 text-xs font-semibold text-[#fef08a] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>Peer & Mentor Endorsements</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
            Recommendations & <span className="text-gold-gradient">Testimonials</span>
          </h2>
          <p className="mt-4 text-base text-[#94a3b8]">
            Feedback on execution quality, problem-solving stamina, and industrial automation impact.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-[#0f0f16] border border-[#222232] hover:border-[#d4af37]/40 shadow-card transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                {/* Gold Stars */}
                <div className="flex items-center gap-1 text-[#fef08a] mb-5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#d4af37] text-[#d4af37]" />
                  ))}
                </div>

                {/* Quote Text */}
                <div className="relative">
                  <Quote className="w-8 h-8 text-[#252538] absolute -top-4 -left-2 -z-0 opacity-50" />
                  <p className="relative z-10 text-sm sm:text-base text-[#cbd5e1] leading-relaxed italic">
                    "{t.quote}"
                  </p>
                </div>
              </div>

              {/* Author Info */}
              <div className="mt-8 pt-6 border-t border-[#1d1d2b] flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#d4af37] to-[#886212] p-[1px] shadow-sm shrink-0">
                  <div className="w-full h-full bg-[#0e0e14] rounded-full flex items-center justify-center text-xs font-serif font-bold text-[#fef08a]">
                    {t.avatarInitials}
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white group-hover:text-[#fef08a] transition-colors">
                    {t.name}
                  </h4>
                  <p className="text-xs text-gray-400">
                    {t.role} • <span className="text-[#d4af37]">{t.organization}</span>
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
