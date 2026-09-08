import React, { useState } from 'react';
import { ExternalLink, Github, Sparkles, FolderGit2, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const { projects } = portfolioData;
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-24 relative bg-[#09090d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#171722] border border-[#d4af37]/30 text-xs font-semibold text-[#fef08a] mb-3">
            <FolderGit2 className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>Featured Engineering Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
            Selected Works & <span className="text-gold-gradient">Architectures</span>
          </h2>
          <p className="mt-4 text-base text-[#94a3b8]">
            From heavy industrial Computer Vision at Jindal Steel to modern full-stack platforms and algorithmic systems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((proj) => (
            <div
              key={proj.id}
              className={`p-8 rounded-3xl bg-[#0f0f16] border ${
                proj.featured 
                  ? 'border-[#d4af37]/40 shadow-[0_0_30px_rgba(212,175,55,0.08)]' 
                  : 'border-[#222232]'
              } hover:border-[#d4af37] transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1`}
            >
              <div>
                {/* Top Badge & Category */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full bg-[#161622] border border-[#2b2b3d] text-[11px] font-semibold text-[#fef08a] flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-[#d4af37]" />
                    {proj.badge}
                  </span>
                  <span className="text-xs text-[#64748b] font-medium">
                    {proj.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-white group-hover:text-gold-gradient transition-colors">
                  {proj.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm text-[#94a3b8] leading-relaxed line-clamp-3">
                  {proj.description}
                </p>

                {/* Highlights preview */}
                <div className="mt-5 space-y-2">
                  {proj.highlights.slice(0, 2).map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-[#cbd5e1]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#d4af37] shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{h}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Pills */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {proj.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg text-[11px] font-medium bg-[#14141e] text-[#cbd5e1] border border-[#20202e]"
                    >
                      {tech}
                    </span>
                  ))}
                  {proj.technologies.length > 4 && (
                    <span className="px-2 py-1 rounded-lg text-[11px] text-gray-400 bg-[#14141e]">
                      +{proj.technologies.length - 4} more
                    </span>
                  )}
                </div>
              </div>

              {/* Bottom Action bar */}
              <div className="mt-8 pt-6 border-t border-[#1d1d2c] flex items-center justify-between">
                <button
                  onClick={() => setSelectedProject(proj)}
                  className="text-xs font-semibold text-[#fef08a] hover:text-white flex items-center gap-1.5 group/btn"
                >
                  <span>Read Case Study</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 text-[#d4af37]" />
                </button>

                <div className="flex items-center gap-3">
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-[#171724] border border-[#27273a] text-gray-300 hover:text-[#fef08a] hover:border-[#d4af37]/40 transition-colors"
                    title="View GitHub Repository"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Detail Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
