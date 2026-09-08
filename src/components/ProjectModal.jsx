import React from 'react';
import { X, ExternalLink, Github, CheckCircle2, Cpu, Sparkles, Layers } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-3xl rounded-3xl bg-[#0f0f16] border border-[#d4af37]/30 shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-[#171724] border border-[#2a2a3e] text-gray-400 hover:text-white hover:border-[#d4af37]/50 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#161622] border border-[#d4af37]/30 text-xs font-semibold text-[#fef08a] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>{project.category}</span>
            <span className="w-1 h-1 rounded-full bg-[#d4af37]"></span>
            <span className="text-gray-300">{project.organization}</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
            {project.title}
          </h3>
        </div>

        {/* Description & Deep Dive */}
        <div className="mt-6 space-y-4">
          <p className="text-sm sm:text-base text-[#94a3b8] leading-relaxed">
            {project.description}
          </p>

          <div className="p-4 rounded-2xl bg-[#14141e] border border-[#222232] text-sm text-[#cbd5e1] leading-relaxed">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#d4af37] mb-2 flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5" />
              <span>Engineering Architecture & Impact</span>
            </h4>
            <p>{project.longDescription}</p>
          </div>

          {/* Highlights */}
          <div className="mt-4 space-y-2">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400">
              Key Engineering Highlights:
            </h4>
            {project.highlights.map((h, i) => (
              <div key={i} className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#fef08a] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-[#cbd5e1]">{h}</span>
              </div>
            ))}
          </div>

          {/* Tech stack */}
          <div className="mt-6 pt-4 border-t border-[#1d1d2b]">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">
              Technologies & Tools:
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-lg text-xs font-medium bg-[#171724] text-[#e2e8f0] border border-[#29293d]"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Actions */}
        <div className="mt-8 pt-4 border-t border-[#1d1d2b] flex flex-wrap items-center justify-between gap-4">
          <span className="text-xs text-gray-400">
            Source code and documentation available upon request.
          </span>

          <div className="flex items-center gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-[#171724] text-white border border-[#2d2d42] hover:border-[#d4af37]/40 transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>Repository</span>
            </a>
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-[#d4af37] to-[#b89228] text-black hover:opacity-90 transition-opacity"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
