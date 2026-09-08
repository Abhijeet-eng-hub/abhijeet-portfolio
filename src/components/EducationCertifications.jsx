import React from 'react';
import { GraduationCap, Award, CheckCircle2, Calendar, MapPin, ShieldCheck, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function EducationCertifications() {
  const { education, certifications } = portfolioData;

  return (
    <section id="education" className="py-24 relative bg-[#09090d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#171722] border border-[#d4af37]/30 text-xs font-semibold text-[#fef08a] mb-3">
            <GraduationCap className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>Academic Credentials & Accreditations</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
            Education & <span className="text-gold-gradient">Certifications</span>
          </h2>
          <p className="mt-4 text-base text-[#94a3b8]">
            Formal engineering foundations grounded in computer science coupled with accredited industrial performance.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left: Education Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[#d4af37] mb-2">
              <GraduationCap className="w-4 h-4" />
              <span>Academic Degrees</span>
            </div>

            {education.map((edu, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-[#0f0f16] border border-[#222232] hover:border-[#d4af37]/40 shadow-card transition-all duration-300 relative overflow-hidden"
              >
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-3 py-1 rounded-full bg-[#161622] border border-[#2b2b3d] text-xs font-semibold text-emerald-300">
                    {edu.period}
                  </span>
                  <span className="text-xs text-gray-400 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    {edu.location}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
                  {edu.degree}
                </h3>
                <p className="text-base font-semibold text-gold-gradient mt-1">
                  {edu.field}
                </p>
                <p className="text-xs text-gray-300 mt-0.5">
                  {edu.institution}
                </p>

                <p className="mt-4 text-sm text-[#94a3b8] leading-relaxed">
                  {edu.description}
                </p>

                <div className="mt-6 pt-4 border-t border-[#1d1d2b] flex items-center gap-2 text-xs text-gray-300">
                  <Sparkles className="w-4 h-4 text-[#fef08a]" />
                  <span>Curriculum: DSA, Operating Systems, DBMS, Computer Networks, AI Systems</span>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Certifications Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[#d4af37] mb-2">
              <Award className="w-4 h-4" />
              <span>Verified Accreditations</span>
            </div>

            <div className="space-y-4">
              {certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-[#0f0f16] border border-[#222232] hover:border-[#d4af37]/40 transition-all duration-300 group"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#171724] border border-[#2e2e42] flex items-center justify-center text-[#d4af37] group-hover:bg-[#d4af37] group-hover:text-black transition-all shrink-0 mt-0.5">
                        <ShieldCheck className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-white group-hover:text-[#fef08a] transition-colors">
                          {cert.title}
                        </h4>
                        <p className="text-xs font-semibold text-[#8a9bb2] mt-0.5">
                          {cert.issuer} • <span className="text-[#d4af37]">{cert.date}</span>
                        </p>
                        <p className="mt-2 text-xs text-[#94a3b8] leading-relaxed">
                          {cert.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
