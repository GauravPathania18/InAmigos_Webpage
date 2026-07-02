import React, { useState } from 'react';
import { CheckCircle2, Award, Users, Heart, Play, X, Sparkles } from 'lucide-react';

export const About: React.FC = () => {
  const [showVideoModal, setShowVideoModal] = useState(false);

  const coreValues = [
    {
      title: 'Grassroots Community Ownership',
      description: 'We don’t just deliver aid; we train local elected committees to manage, maintain, and expand projects autonomously.'
    },
    {
      title: '100% Financial Transparency',
      description: 'Every donation is publicly auditable with geo-tagged receipts and live milestone updates sent directly to donors.'
    },
    {
      title: 'Holistic Sustainable Impact',
      description: 'By interconnecting clean water, solar energy, healthcare, and education, we build self-sufficient rural ecosystems.'
    },
    {
      title: 'Inclusivity & Human Dignity',
      description: 'Our programs empower women, tribal minorities, and first-generation learners without discrimination.'
    }
  ];

  return (
    <section id="about" className="py-20 sm:py-28 bg-white dark:bg-[#111e13] transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C8E6C9]/40 dark:bg-[#2E7D32]/30 text-[#2E7D32] dark:text-[#C8E6C9] text-xs font-heading font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#4CAF50]" />
            <span>Our Foundation & Philosophy</span>
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-5xl text-[#2E7D32] dark:text-[#C8E6C9] tracking-tight mb-4">
            Who We Are
          </h2>
          <div className="w-20 h-1.5 bg-[#4CAF50] mx-auto rounded-full mb-6" />
          <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg leading-relaxed font-sans">
            InAmigos is a registered global non-profit organization dedicated to creating sustainable social impact through education, healthcare, and community development initiatives in underserved regions.
          </p>
        </div>

        {/* Main 2-Column Grid: Image Left, Text Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image Collage / Visuals */}
          <div className="lg:col-span-6 relative">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-green-900 group">
              <img
                src="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&w=800&q=80"
                alt="InAmigos community volunteers teaching and engaging with rural children"
                className="w-full h-[420px] sm:h-[480px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              
              {/* Play Video Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  onClick={() => setShowVideoModal(true)}
                  aria-label="Watch InAmigos impact story video"
                  className="w-20 h-20 rounded-full bg-[#4CAF50] text-white flex items-center justify-center shadow-2xl hover:bg-[#45a049] hover:scale-110 active:scale-95 transition-all duration-300 animate-pulse-slow"
                >
                  <Play className="w-8 h-8 fill-current ml-1" />
                </button>
              </div>

              <div className="absolute bottom-6 left-6 right-6 sm:right-60 text-white pr-2 sm:pr-4">
                <span className="text-xs font-semibold uppercase tracking-wider bg-[#4CAF50] px-2.5 py-1 rounded inline-block">
                  Field Report 2025-2026
                </span>
                <h3 className="font-heading font-bold text-lg sm:text-xl mt-2 leading-snug drop-shadow-md">
                  "Real change begins when local voices lead the way."
                </h3>
              </div>
            </div>

            {/* Decorative Background Accent Card */}
            <div className="absolute -bottom-5 -right-4 w-64 p-5 rounded-3xl bg-[#C8E6C9] dark:bg-[#1a3620] border border-[#4CAF50]/40 shadow-2xl hidden sm:block z-20">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2.5 rounded-full bg-[#4CAF50] text-white">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-heading font-bold text-2xl text-[#2E7D32] dark:text-white">94.8%</div>
                  <div className="text-xs text-gray-700 dark:text-gray-300 font-medium">Program Efficiency</div>
                </div>
              </div>
              <p className="text-[11px] text-gray-600 dark:text-gray-400 leading-tight">
                Over 94 cents of every dollar directly funds field operations and community equipment.
              </p>
            </div>

            {/* Decorative background shape */}
            <div className="absolute -top-8 -left-8 w-40 h-40 bg-[#4CAF50]/10 dark:bg-[#4CAF50]/5 rounded-full blur-2xl -z-10" />
          </div>

          {/* Right Column: Mission Statement & Values */}
          <div className="lg:col-span-6 space-y-8">
            
            {/* Mission Box Bento */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#C8E6C9]/30 dark:bg-[#182c1b] border border-[#C8E6C9] dark:border-green-800/60 shadow-sm">
              <h3 className="font-heading font-bold text-xl text-[#2E7D32] dark:text-[#C8E6C9] mb-2 flex items-center gap-2">
                <Heart className="w-5 h-5 text-[#4CAF50] fill-current" />
                <span>Our Mission Statement</span>
              </h3>
              <p className="text-gray-700 dark:text-gray-200 font-sans text-base sm:text-lg leading-relaxed italic">
                "To eradicate root causes of systemic poverty by building sustainable, locally-run educational, medical, and environmental infrastructure that empowers communities to thrive independently."
              </p>
            </div>

            {/* Why We Are Different - Core Pillars Bento Grid */}
            <div>
              <h4 className="font-heading font-semibold text-lg sm:text-xl text-[#2E7D32] dark:text-white mb-4">
                Our Core Pillars of Impact
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {coreValues.map((value, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-[#C8E6C9]/20 dark:bg-[#182c1b]/60 border border-[#C8E6C9] dark:border-green-800/60 flex items-start gap-3 group hover:bg-[#C8E6C9]/40 transition-all shadow-sm">
                    <div className="mt-0.5 p-1.5 rounded-xl bg-[#4CAF50] text-white shrink-0 shadow">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div>
                      <h5 className="font-heading font-semibold text-sm text-gray-900 dark:text-gray-100 group-hover:text-[#4CAF50] transition-colors">
                        {value.title}
                      </h5>
                      <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed mt-1 font-sans">
                        {value.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Action CTA */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#2E7D32] hover:bg-[#4CAF50] text-white font-heading font-semibold text-sm shadow-md transition-all duration-200"
              >
                <span>Explore Our Initiatives</span>
              </a>

              <button
                onClick={() => setShowVideoModal(true)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-transparent border-2 border-[#4CAF50] text-[#2E7D32] dark:text-[#C8E6C9] hover:bg-[#4CAF50]/10 font-heading font-semibold text-sm transition-all duration-200"
              >
                <Play className="w-4 h-4 text-[#4CAF50] fill-current" />
                <span>Watch 3-Min Documentary</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {showVideoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden shadow-2xl border border-gray-800">
            <div className="flex items-center justify-between px-6 py-4 bg-gray-900 border-b border-gray-800 text-white">
              <div className="flex items-center gap-2">
                <Play className="w-5 h-5 text-[#4CAF50]" />
                <h3 className="font-heading font-semibold text-lg">InAmigos Impact Tour 2026</h3>
              </div>
              <button
                onClick={() => setShowVideoModal(false)}
                aria-label="Close video"
                className="p-1.5 rounded-full hover:bg-gray-800 text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="relative aspect-video bg-gray-950 flex items-center justify-center">
              {/* Responsive simulated video container with high-res iframe or custom interactive player */}
              <iframe
                className="w-full h-full"
                src="https://www.youtube-nocookie.com/embed/ScMzIvxBSi4?autoplay=1"
                title="InAmigos NGO Community Film"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
