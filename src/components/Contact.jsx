import React, { useState } from 'react';
import { Mail, Send, Copy, Check, Github, Linkedin, MapPin, Sparkles, Terminal, ArrowUpRight } from 'lucide-react';
import confetti from 'canvas-confetti';
import { portfolioData } from '../data/portfolioData';

export default function Contact() {
  const { personal } = portfolioData;
  const [copied, setCopied] = useState(false);
  const [formStatus, setFormStatus] = useState(null); // 'idle', 'submitting', 'success'
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('submitting');

    setTimeout(() => {
      setFormStatus('success');
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#d4af37', '#fef08a', '#10b981', '#ffffff']
      });
      // reset after 4 seconds
      setTimeout(() => {
        setFormData({ name: '', email: '', subject: '', message: '' });
        setFormStatus(null);
      }, 4000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 relative bg-[#09090d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#171722] border border-[#d4af37]/30 text-xs font-semibold text-[#fef08a] mb-3">
            <Mail className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>Initiate Direct Dialogue</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
            Let’s Build Something <span className="text-gold-gradient">Monumental</span>
          </h2>
          <p className="mt-4 text-base text-[#94a3b8]">
            Whether you are discussing tier-1 engineering positions (50+ LPA), industrial automation collaborations, or technical architecture.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left: Contact Info & Direct Links */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Email Card */}
            <div className="p-8 rounded-3xl bg-[#0f0f16] border border-[#222232] shadow-card">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#d4af37]">
                Direct Contact
              </span>
              <h3 className="text-2xl font-serif font-bold text-white mt-1">
                Reach Out Directly
              </h3>
              <p className="mt-2 text-sm text-[#94a3b8]">
                Open for high-impact software engineering roles, DSA/AI discussions, and tech opportunities.
              </p>

              <div className="mt-6 p-4 rounded-2xl bg-[#14141e] border border-[#232333] flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-9 h-9 rounded-xl bg-[#1d1d2b] flex items-center justify-center text-[#d4af37] shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-white truncate">
                    {personal.email}
                  </span>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-xl bg-[#1b1b28] hover:bg-[#252538] border border-[#303046] text-gray-300 hover:text-white transition-all shrink-0"
                  title="Copy email address"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Location Badge */}
              <div className="mt-4 flex items-center gap-3 p-4 rounded-2xl bg-[#14141e] border border-[#232333]">
                <div className="w-9 h-9 rounded-xl bg-[#1d1d2b] flex items-center justify-center text-[#d4af37] shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-gray-400">Current Base</div>
                  <div className="text-xs sm:text-sm font-semibold text-white">
                    {personal.location}
                  </div>
                </div>
              </div>
            </div>

            {/* Social Connect Cards */}
            <div className="p-8 rounded-3xl bg-[#0f0f16] border border-[#222232]">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#d4af37]">
                Profiles & Repositories
              </span>
              <h4 className="text-lg font-serif font-bold text-white mt-1 mb-4">
                Professional Presence
              </h4>

              <div className="grid grid-cols-2 gap-3">
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-[#14141e] border border-[#232333] hover:border-[#d4af37]/40 flex items-center justify-between text-xs font-medium text-gray-200 hover:text-[#fef08a] transition-all group"
                >
                  <div className="flex items-center gap-2">
                    <Github className="w-4 h-4 text-[#d4af37]" />
                    <span>GitHub</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-[#14141e] border border-[#232333] hover:border-[#d4af37]/40 flex items-center justify-between text-xs font-medium text-gray-200 hover:text-[#fef08a] transition-all group"
                >
                  <div className="flex items-center gap-2">
                    <Linkedin className="w-4 h-4 text-[#d4af37]" />
                    <span>LinkedIn</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

                <a
                  href={personal.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-[#14141e] border border-[#232333] hover:border-[#d4af37]/40 flex items-center justify-between text-xs font-medium text-gray-200 hover:text-[#fef08a] transition-all group"
                >
                  <div className="flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-[#d4af37]" />
                    <span>LeetCode</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

                <a
                  href={personal.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-[#14141e] border border-[#232333] hover:border-[#d4af37]/40 flex items-center justify-between text-xs font-medium text-gray-200 hover:text-[#fef08a] transition-all group"
                >
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#d4af37]" />
                    <span>Twitter/X</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </div>

          </div>

          {/* Right: Interactive Message Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#0f0f16] border border-[#222232] shadow-card relative">
              <h3 className="text-2xl font-serif font-bold text-white mb-2">
                Send a Message
              </h3>
              <p className="text-sm text-[#94a3b8] mb-6">
                Fill out the form below to initiate contact. Your message will be formatted and addressed directly.
              </p>

              {formStatus === 'success' ? (
                <div className="p-8 rounded-2xl bg-emerald-950/30 border border-emerald-500/40 text-center animate-fadeIn">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center mb-4">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-serif font-bold text-white">Message Transmitted!</h4>
                  <p className="text-sm text-emerald-200/80 mt-2 max-w-md mx-auto">
                    Thank you for reaching out, Abhijeet will review your communication and respond promptly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-300 mb-1.5 uppercase tracking-wider">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. John Doe / Tech Recruiter"
                        className="w-full px-4 py-3 rounded-xl bg-[#14141e] border border-[#242436] text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#d4af37] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-300 mb-1.5 uppercase tracking-wider">
                        Your Email
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#14141e] border border-[#242436] text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#d4af37] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1.5 uppercase tracking-wider">
                      Subject
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Opportunity / Project Consultation / Technical Inquiry"
                      className="w-full px-4 py-3 rounded-xl bg-[#14141e] border border-[#242436] text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#d4af37] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1.5 uppercase tracking-wider">
                      Message
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share details about the role, technical challenge, or collaboration..."
                      className="w-full px-4 py-3 rounded-xl bg-[#14141e] border border-[#242436] text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#d4af37] transition-colors resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    className="w-full py-4 rounded-xl font-semibold text-sm bg-gradient-to-r from-[#d4af37] via-[#f59e0b] to-[#b89228] text-black shadow-[0_0_25px_rgba(212,175,55,0.35)] hover:shadow-[0_0_35px_rgba(212,175,55,0.55)] transition-all duration-300 flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-60"
                  >
                    {formStatus === 'submitting' ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></span>
                        Transmitting Message...
                      </span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Transmit Message to Abhijeet</span>
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
