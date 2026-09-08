import React from 'react';
import { Crown, ArrowUp, Heart, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#060608] border-t border-[#1d1d2b] py-14 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-[#171724]">
          
          {/* Logo & Brand Identity */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#d4af37] via-[#fef08a] to-[#926d17] p-[1.5px] shadow-[0_0_15px_rgba(212,175,55,0.25)]">
              <div className="w-full h-full bg-[#0b0b0f] rounded-[10px] flex items-center justify-center">
                <span className="font-serif font-bold text-base text-gold-gradient">AG</span>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-serif font-bold text-lg text-white">
                  {personal.name}
                </span>
                <Crown className="w-4 h-4 text-[#d4af37]" />
              </div>
              <p className="text-xs text-[#828ea2]">
                Full Stack Engineer & UI/UX Designer • Jindal Steel CAC
              </p>
            </div>
          </div>

          {/* Quick Nav */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-[#94a3b8]">
            <a href="#about" className="hover:text-[#fef08a] transition-colors">About</a>
            <a href="#experience" className="hover:text-[#fef08a] transition-colors">Jindal Steel Exp</a>
            <a href="#projects" className="hover:text-[#fef08a] transition-colors">Projects</a>
            <a href="#skills" className="hover:text-[#fef08a] transition-colors">Skills</a>
            <a href="#education" className="hover:text-[#fef08a] transition-colors">Education</a>
            <a href="#contact" className="hover:text-[#fef08a] transition-colors">Contact</a>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="p-3 rounded-xl bg-[#111117] border border-[#242436] hover:border-[#d4af37]/40 text-gray-300 hover:text-white transition-all group"
            aria-label="Scroll back to top"
          >
            <ArrowUp className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 text-[#d4af37]" />
          </button>
        </div>

        {/* Bottom copyright */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#64748b]">
          <p>© {new Date().getFullYear()} Abhijeet Kumar Gupta. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span>Built with React 18, Vite & Tailwind CSS</span>
            <span className="w-1 h-1 rounded-full bg-[#334155]"></span>
            <span className="text-[#fef08a] font-medium">Majestic Royal Edition</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
