import React from 'react';
import { X, Download, FileText, CheckCircle2, Sparkles, ExternalLink } from 'lucide-react';
import confetti from 'canvas-confetti';
import { portfolioData } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;
  const { personal, experience, education, stats } = portfolioData;

  const handleDownload = () => {
    confetti({
      particleCount: 90,
      spread: 70,
      origin: { y: 0.5 },
      colors: ['#d4af37', '#fef08a', '#ffffff']
    });
    // Trigger printable window or direct download
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-2xl rounded-3xl bg-[#0f0f16] border border-[#d4af37]/40 shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-[#171724] border border-[#2a2a3e] text-gray-400 hover:text-white hover:border-[#d4af37]/50 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-[#171724] border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37] shrink-0">
            <FileText className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
                {personal.name}
              </h3>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#171724] text-[#fef08a] border border-[#d4af37]/30">
                Official CV
              </span>
            </div>
            <p className="text-xs text-[#94a3b8] mt-0.5">
              {personal.role} • {personal.location}
            </p>
          </div>
        </div>

        {/* Resume Highlights Box */}
        <div className="p-5 rounded-2xl bg-[#14141e] border border-[#222232] space-y-4 text-xs sm:text-sm text-[#cbd5e1]">
          <div className="flex items-center justify-between pb-3 border-b border-[#1d1d2b]">
            <span className="font-semibold text-white">Target Position:</span>
            <span className="text-[#fef08a] font-bold">50+ LPA Software Engineering / AI Roles</span>
          </div>

          <div className="space-y-2">
            <h4 className="text-[11px] font-semibold uppercase tracking-wider text-[#d4af37]">
              Industrial Experience:
            </h4>
            <div className="flex items-start gap-2 text-xs">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>
                <strong>Jindal Steel & Power Ltd. (CAC)</strong> — IT & Industrial Automation Intern. Engineered the Plate Mill Spindle Motion Detection computer vision system.
              </span>
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="text-[11px] font-semibold uppercase tracking-wider text-[#d4af37]">
              Technical Prowess:
            </h4>
            <div className="flex items-start gap-2 text-xs">
              <CheckCircle2 className="w-4 h-4 text-[#fef08a] shrink-0 mt-0.5" />
              <span>
                <strong>DSA & Problem Solving:</strong> 500+ LeetCode problems solved with optimized time/space complexity in C++.
              </span>
            </div>
            <div className="flex items-start gap-2 text-xs">
              <CheckCircle2 className="w-4 h-4 text-[#fef08a] shrink-0 mt-0.5" />
              <span>
                <strong>Full Stack & UI/UX:</strong> React.js, Node.js, Express, MongoDB, Tailwind CSS, Figma, Design Systems, REST APIs.
              </span>
            </div>
            <div className="flex items-start gap-2 text-xs">
              <CheckCircle2 className="w-4 h-4 text-[#fef08a] shrink-0 mt-0.5" />
              <span>
                <strong>AI & Computer Vision:</strong> Python, OpenCV, real-time image processing, sensor telemetry, and modern LLM orchestration.
              </span>
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="text-[11px] font-semibold uppercase tracking-wider text-[#d4af37]">
              Academic Foundation:
            </h4>
            <div className="flex items-start gap-2 text-xs">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>
                <strong>B.Tech in Computer Science & Engineering</strong> — 4th Year Final Year Student, Raigarh.
              </span>
            </div>
          </div>
        </div>

        {/* Modal Buttons */}
        <div className="mt-6 pt-4 border-t border-[#1d1d2b] flex flex-wrap items-center justify-between gap-3">
          <p className="text-[11px] text-gray-400">
            Click Print/Save to export high-definition PDF.
          </p>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-semibold bg-[#171724] text-white border border-[#2b2b3d] hover:border-[#d4af37]/40 transition-colors"
            >
              Dismiss
            </button>
            <button
              onClick={handleDownload}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-[#d4af37] via-[#f59e0b] to-[#b89228] text-black shadow-lg shadow-gold-500/20 hover:scale-[1.02] transition-transform"
            >
              <Download className="w-4 h-4" />
              <span>Print / Save PDF</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
