import React, { useState } from 'react';
import { IMPACT_METRICS, TESTIMONIALS_DATA, IMPACT_STORIES_DATA } from '../data/ngoData';
import { ImpactStory } from '../types';
import { IconRenderer } from './IconRenderer';
import { Quote, ChevronLeft, ChevronRight, BookOpen, Download, ThumbsUp, Calendar, User } from 'lucide-react';

interface SocialImpactProps {
  onSelectStory: (story: ImpactStory) => void;
}

export const SocialImpact: React.FC<SocialImpactProps> = ({ onSelectStory }) => {
  const [activeTestimonialIdx, setActiveTestimonialIdx] = useState(0);
  const [activeTab, setActiveTab] = useState<'testimonials' | 'stories'>('testimonials');

  const handleNextTestimonial = () => {
    setActiveTestimonialIdx((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
  };

  const handlePrevTestimonial = () => {
    setActiveTestimonialIdx((prev) => (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);
  };

  const currentTestimonial = TESTIMONIALS_DATA[activeTestimonialIdx];

  return (
    <section id="impact" className="py-20 sm:py-28 bg-white dark:bg-[#111e13] transition-colors duration-300 relative overflow-hidden">
      
      {/* Subtle Background Pattern / Illustration Simulation */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none bg-[radial-gradient(#4CAF50_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#4CAF50] font-heading font-bold text-sm tracking-widest uppercase mb-2 block">
            Verifiable Accountability
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-5xl text-[#2E7D32] dark:text-[#C8E6C9] tracking-tight mb-4">
            Our Impact
          </h2>
          <div className="w-20 h-1.5 bg-[#4CAF50] mx-auto rounded-full mb-6" />
          <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg leading-relaxed font-sans">
            We measure our success not by the funds we raise, but by the tangible independence and well-being of the communities we serve. Here is what we have accomplished together.
          </p>
        </div>

        {/* Infographic 4-Column Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-20">
          {IMPACT_METRICS.map((metric) => (
            <div
              key={metric.id}
              className="p-6 sm:p-8 rounded-3xl bg-[#C8E6C9]/20 dark:bg-[#182c1b]/60 border border-[#C8E6C9] dark:border-green-800/60 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center group hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#4CAF50]/15 dark:bg-[#4CAF50]/20 text-[#4CAF50] flex items-center justify-center mb-4 group-hover:bg-[#4CAF50] group-hover:text-white transition-all duration-300 shadow-sm">
                <IconRenderer name={metric.iconName} className="w-7 h-7" />
              </div>

              <div className="font-heading font-bold text-4xl sm:text-5xl text-[#2E7D32] dark:text-white mb-2 tracking-tight">
                {metric.value}
              </div>

              <h3 className="font-heading font-semibold text-lg text-gray-900 dark:text-gray-100 mb-2">
                {metric.label}
              </h3>

              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-sans leading-relaxed">
                {metric.description}
              </p>
            </div>
          ))}
        </div>

        {/* Interactive View Selector: Testimonials vs Field Stories */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 rounded-full bg-[#F5F5F5] dark:bg-[#1a2e1e] border border-gray-200 dark:border-green-800/60 shadow-inner">
            <button
              onClick={() => setActiveTab('testimonials')}
              className={`px-6 py-2.5 rounded-full font-heading font-semibold text-sm transition-all duration-200 ${
                activeTab === 'testimonials'
                  ? 'bg-[#4CAF50] text-white shadow-md'
                  : 'text-gray-700 dark:text-gray-300 hover:text-[#4CAF50]'
              }`}
            >
              Community Voices ({TESTIMONIALS_DATA.length})
            </button>
            <button
              onClick={() => setActiveTab('stories')}
              className={`px-6 py-2.5 rounded-full font-heading font-semibold text-sm transition-all duration-200 ${
                activeTab === 'stories'
                  ? 'bg-[#4CAF50] text-white shadow-md'
                  : 'text-gray-700 dark:text-gray-300 hover:text-[#4CAF50]'
              }`}
            >
              Field Impact Stories ({IMPACT_STORIES_DATA.length})
            </button>
          </div>
        </div>

        {/* Tab 1: Testimonial Slider */}
        {activeTab === 'testimonials' && (
          <div className="max-w-4xl mx-auto bg-[#C8E6C9]/30 dark:bg-[#1a2e1e]/80 rounded-3xl p-8 sm:p-12 border border-[#4CAF50]/30 shadow-xl relative animate-in fade-in duration-300">
            <Quote className="w-12 h-12 text-[#4CAF50]/40 absolute top-6 right-8 pointer-events-none" />

            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Photo & Role */}
              <div className="shrink-0 flex flex-col items-center text-center md:w-56">
                <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-white dark:border-[#2E7D32] shadow-lg mb-4">
                  <img
                    src={currentTestimonial.imageUrl}
                    alt={currentTestimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="font-heading font-bold text-lg text-[#2E7D32] dark:text-white">
                  {currentTestimonial.name}
                </h4>
                <p className="text-xs text-gray-600 dark:text-gray-300 font-medium mt-0.5">
                  {currentTestimonial.role}
                </p>
                <span className="inline-block mt-2 px-2.5 py-0.5 rounded bg-[#4CAF50]/20 text-[#2E7D32] dark:text-[#C8E6C9] text-[11px] font-semibold">
                  {currentTestimonial.location}
                </span>
              </div>

              {/* Quote Content */}
              <div className="flex-1 space-y-4 text-center md:text-left">
                <p className="font-sans text-base sm:text-xl text-gray-800 dark:text-gray-100 italic leading-relaxed">
                  "{currentTestimonial.quote}"
                </p>
                <div className="pt-3 border-t border-gray-200 dark:border-green-800/60 flex items-center justify-between">
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    Impacted by: <strong className="text-[#4CAF50]">{currentTestimonial.projectImpacted}</strong>
                  </span>

                  {/* Navigation Arrows */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={handlePrevTestimonial}
                      aria-label="Previous testimonial"
                      className="p-2 rounded-full bg-white dark:bg-[#203623] hover:bg-[#4CAF50] hover:text-white text-gray-700 dark:text-gray-200 shadow transition-colors"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <span className="text-xs font-semibold px-2 text-gray-500">
                      {activeTestimonialIdx + 1} / {TESTIMONIALS_DATA.length}
                    </span>
                    <button
                      onClick={handleNextTestimonial}
                      aria-label="Next testimonial"
                      className="p-2 rounded-full bg-white dark:bg-[#203623] hover:bg-[#4CAF50] hover:text-white text-gray-700 dark:text-gray-200 shadow transition-colors"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Impact Stories Grid */}
        {activeTab === 'stories' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-in fade-in duration-300">
            {IMPACT_STORIES_DATA.map((story) => (
              <div
                key={story.id}
                onClick={() => onSelectStory(story)}
                className="bg-white dark:bg-[#1a2e1e] rounded-3xl overflow-hidden border border-[#C8E6C9] dark:border-green-800/60 shadow-sm hover:shadow-xl cursor-pointer transition-all duration-300 flex flex-col group hover:-translate-y-1"
              >
                <div className="relative h-48 overflow-hidden bg-gray-100">
                  <img
                    src={story.imageUrl}
                    alt={story.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#4CAF50] text-white font-heading font-semibold text-xs shadow">
                    {story.category}
                  </span>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400 mb-2">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-[#4CAF50]" />
                        {story.date}
                      </span>
                      <span>{story.readTime}</span>
                    </div>

                    <h3 className="font-heading font-bold text-lg text-gray-900 dark:text-white group-hover:text-[#4CAF50] transition-colors line-clamp-2">
                      {story.title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-300 font-sans text-sm leading-relaxed mt-2 line-clamp-3">
                      {story.summary}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-gray-100 dark:border-green-900/40 flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                    <span className="flex items-center gap-1 truncate font-medium">
                      <User className="w-3.5 h-3.5 text-[#4CAF50]" />
                      {story.author}
                    </span>
                    <span className="flex items-center gap-1 text-[#4CAF50] font-semibold group-hover:underline">
                      Read full story &rarr;
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Download Annual Report Callout */}
        <div className="mt-16 text-center">
          <a
            href="#download-report"
            onClick={(e) => {
              e.preventDefault();
              alert("2025 InAmigos Global Transparency & Impact Report (PDF - 4.2MB) is ready. Thank you for your partnership in accountability!");
            }}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#F5F5F5] dark:bg-[#1a2e1e] hover:bg-[#C8E6C9]/40 dark:hover:bg-green-900/50 border border-gray-300 dark:border-green-800 text-[#2E7D32] dark:text-[#C8E6C9] font-heading font-bold text-sm sm:text-base shadow hover:shadow-md transition-all"
          >
            <Download className="w-5 h-5 text-[#4CAF50]" />
            <span>Download 2025 Global Audited Transparency Report (.PDF)</span>
          </a>
        </div>
      </div>
    </section>
  );
};
