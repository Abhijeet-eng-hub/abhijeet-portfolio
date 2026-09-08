import React, { useState, useEffect } from 'react';
import { Crown, Menu, X, Download, ExternalLink, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { portfolioData } from '../data/portfolioData';

export default function Navbar({ onOpenResumeModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.15 },
      colors: ['#d4af37', '#fef08a', '#b89228', '#ffffff']
    });
    if (onOpenResumeModal) onOpenResumeModal();
  };

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#0a0a0f]/90 backdrop-blur-md border-b border-[#d4af37]/20 shadow-lg shadow-black/40 py-3.5' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Crest */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#d4af37] via-[#fef08a] to-[#926d17] p-[1.5px] shadow-[0_0_15px_rgba(212,175,55,0.3)] transition-transform duration-300 group-hover:scale-105">
            <div className="w-full h-full bg-[#0b0b0f] rounded-[10px] flex items-center justify-center">
              <span className="font-serif font-bold text-base text-gold-gradient tracking-wider">AG</span>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-serif font-bold text-lg text-white tracking-tight group-hover:text-[#fef08a] transition-colors">
                Abhijeet Gupta
              </span>
              <Crown className="w-4 h-4 text-[#d4af37] fill-[#d4af37]/20" />
            </div>
            <p className="text-[11px] text-[#94a3b8] tracking-wide font-medium hidden sm:block">
              Full Stack & UI/UX • Jindal Steel CAC
            </p>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-[#94a3b8] hover:text-[#fef08a] transition-colors relative py-1 group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-gradient-to-r from-[#d4af37] to-[#fef08a] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Desktop Right CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#171722] border border-[#2d2d42] text-xs text-[#cbd5e1]">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-[11px] font-semibold text-emerald-300">50+ LPA Goal</span>
          </div>

          <button
            onClick={triggerConfetti}
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-[#d4af37] via-[#f59e0b] to-[#b89228] text-black shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Resume</span>
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={triggerConfetti}
            className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#d4af37] text-black"
          >
            CV
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#94a3b8] hover:text-white rounded-lg bg-[#111117] border border-[#222232]"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0a0f]/98 backdrop-blur-xl border-b border-[#d4af37]/20 px-6 py-6 transition-all">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#171722] border border-[#2d2d42] text-xs text-[#cbd5e1] w-fit">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-xs font-medium text-emerald-300">B.Tech 4th Year • Open to 50+ LPA Roles</span>
            </div>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-gray-200 hover:text-[#fef08a] py-1 border-b border-[#171722]"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                triggerConfetti();
              }}
              className="mt-2 flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-semibold bg-gradient-to-r from-[#d4af37] via-[#f59e0b] to-[#b89228] text-black"
            >
              <Download className="w-4 h-4" />
              <span>Download Full CV / Resume</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
