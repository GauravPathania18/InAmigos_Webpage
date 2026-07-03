import React, { useState } from 'react';
import { IMPACT_METRICS, BLOG_ARTICLES_DATA, IMPACT_STORIES_DATA } from '../data/ngoData';
import { ImpactStory, BlogArticle } from '../types';
import { IconRenderer } from './IconRenderer';
import { Calendar, User, Users, MapPin, Layers, Gift, Eye } from 'lucide-react';

interface SocialImpactProps {
  onSelectStory: (story: ImpactStory) => void;
  onSelectArticle?: (article: BlogArticle) => void;
}

export const SocialImpact: React.FC<SocialImpactProps> = ({ onSelectStory, onSelectArticle }) => {
  const [activeTab, setActiveTab] = useState<'blog' | 'stories'>('blog');

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

        {/* National Footprint & Core Reach Banner (Screenshot Style in InAmigos Design) */}
        <div className="bg-[#181a1f] dark:bg-[#0a120b] text-white rounded-3xl p-8 sm:p-12 mb-8 shadow-2xl border border-[#4CAF50]/30 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-[#4CAF50] to-transparent opacity-80" />
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 divide-y-0 lg:divide-x divide-gray-800/80">
            
            {/* Stat 1: Volunteers */}
            <div className="flex flex-col items-center text-center px-4 group">
              <div className="w-14 h-14 rounded-2xl bg-white/10 dark:bg-[#4CAF50]/20 text-white dark:text-[#C8E6C9] flex items-center justify-center mb-4 group-hover:scale-[1.02] group-hover:bg-[#4CAF50] group-hover:text-white transition-all duration-1000 ease-in-out shadow">
                <Users className="w-7 h-7" />
              </div>
              <span className="font-heading font-bold text-4xl sm:text-5xl text-white tracking-tight mb-1">
                200+
              </span>
              <span className="text-xs sm:text-sm font-bold tracking-widest text-gray-300 dark:text-gray-200 uppercase mt-1">
                OUR VOLUNTEERS
              </span>
              <span className="text-[11px] text-gray-400 mt-1 max-w-[160px]">
                Active field change-makers across India
              </span>
            </div>

            {/* Stat 2: States */}
            <div className="flex flex-col items-center text-center px-4 group">
              <div className="w-14 h-14 rounded-2xl bg-white/10 dark:bg-[#4CAF50]/20 text-white dark:text-[#C8E6C9] flex items-center justify-center mb-4 group-hover:scale-[1.02] group-hover:bg-[#4CAF50] group-hover:text-white transition-all duration-1000 ease-in-out shadow">
                <MapPin className="w-7 h-7" />
              </div>
              <span className="font-heading font-bold text-4xl sm:text-5xl text-white tracking-tight mb-1">
                28
              </span>
              <span className="text-xs sm:text-sm font-bold tracking-widest text-gray-300 dark:text-gray-200 uppercase mt-1">
                STATES
              </span>
              <span className="text-[11px] text-gray-400 mt-1 max-w-[160px]">
                Pan-India operational presence
              </span>
            </div>

            {/* Stat 3: Causes */}
            <div className="flex flex-col items-center text-center px-4 group">
              <div className="w-14 h-14 rounded-2xl bg-white/10 dark:bg-[#4CAF50]/20 text-white dark:text-[#C8E6C9] flex items-center justify-center mb-4 group-hover:scale-[1.02] group-hover:bg-[#4CAF50] group-hover:text-white transition-all duration-1000 ease-in-out shadow">
                <Layers className="w-7 h-7" />
              </div>
              <span className="font-heading font-bold text-4xl sm:text-5xl text-white tracking-tight mb-1">
                6
              </span>
              <span className="text-xs sm:text-sm font-bold tracking-widest text-gray-300 dark:text-gray-200 uppercase mt-1">
                OUR CAUSES
              </span>
              <span className="text-[11px] text-gray-400 mt-1 max-w-[160px]">
                Seva, Bachpanshala, Jeev, Udaan, Prakriti, Vikas
              </span>
            </div>

            {/* Stat 4: Beneficiaries */}
            <div className="flex flex-col items-center text-center px-4 group">
              <div className="w-14 h-14 rounded-2xl bg-white/10 dark:bg-[#4CAF50]/20 text-white dark:text-[#C8E6C9] flex items-center justify-center mb-4 group-hover:scale-[1.02] group-hover:bg-[#4CAF50] group-hover:text-white transition-all duration-1000 ease-in-out shadow">
                <Gift className="w-7 h-7" />
              </div>
              <span className="font-heading font-bold text-4xl sm:text-5xl text-white tracking-tight mb-1">
                50,000+
              </span>
              <span className="text-xs sm:text-sm font-bold tracking-widest text-gray-300 dark:text-gray-200 uppercase mt-1">
                BENEFICIARIES
              </span>
              <span className="text-[11px] text-gray-400 mt-1 max-w-[160px]">
                Direct lives impacted by our initiatives
              </span>
            </div>

          </div>
        </div>

        {/* Infographic 4-Column Metric Banner (Unified Dark Style Matching Above) */}
        <div className="bg-[#181a1f] dark:bg-[#0a120b] text-white rounded-3xl p-8 sm:p-12 mb-20 shadow-2xl border border-[#4CAF50]/30 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-[#4CAF50] to-transparent opacity-80" />

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 divide-y-0 lg:divide-x divide-gray-800/80">
            {IMPACT_METRICS.map((metric) => (
              <div
                key={metric.id}
                className="flex flex-col items-center text-center px-4 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-white/10 dark:bg-[#4CAF50]/20 text-white dark:text-[#C8E6C9] flex items-center justify-center mb-4 group-hover:scale-[1.02] group-hover:bg-[#4CAF50] group-hover:text-white transition-all duration-1000 ease-in-out shadow">
                  <IconRenderer name={metric.iconName} className="w-7 h-7" />
                </div>

                <span className="font-heading font-bold text-4xl sm:text-5xl text-white tracking-tight mb-1">
                  {metric.value}
                </span>

                <span className="text-xs sm:text-sm font-bold tracking-widest text-gray-300 dark:text-gray-200 uppercase mt-1">
                  {metric.label}
                </span>

                <span className="text-[11px] text-gray-400 mt-1 max-w-[180px] leading-relaxed">
                  {metric.description}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive View Selector: Blog vs Field Stories */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-full bg-[#F5F5F5] dark:bg-[#1a2e1e] border border-gray-200 dark:border-green-800/60 shadow-inner">
            <button
              onClick={() => setActiveTab('blog')}
              className={`px-6 sm:px-8 py-3 rounded-full font-heading font-semibold text-sm sm:text-base transition-all duration-500 ease-in-out ${
                activeTab === 'blog'
                  ? 'bg-[#4CAF50] text-white shadow-md'
                  : 'text-gray-700 dark:text-gray-300 hover:text-[#4CAF50]'
              }`}
            >
              Blogs ({BLOG_ARTICLES_DATA.length})
            </button>
            <button
              onClick={() => setActiveTab('stories')}
              className={`px-6 sm:px-8 py-3 rounded-full font-heading font-semibold text-sm sm:text-base transition-all duration-500 ease-in-out ${
                activeTab === 'stories'
                  ? 'bg-[#4CAF50] text-white shadow-md'
                  : 'text-gray-700 dark:text-gray-300 hover:text-[#4CAF50]'
              }`}
            >
              Field Impact Stories ({IMPACT_STORIES_DATA.length})
            </button>
          </div>
        </div>

        {/* Tab 1: Blog Section */}
        {activeTab === 'blog' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-in fade-in duration-500">
            {BLOG_ARTICLES_DATA.map((article) => {
              const badgeLabel = article.title.toLowerCase().includes('water')
                ? 'Clean Water'
                : article.title.toLowerCase().includes('vikas')
                ? 'Education'
                : 'Environment';

              return (
                <div
                  key={article.id}
                  onClick={() => onSelectArticle?.(article)}
                  className="bg-white dark:bg-[#1a2e1e] rounded-3xl overflow-hidden border border-[#C8E6C9] dark:border-green-800/60 shadow-sm hover:shadow-xl cursor-pointer transition-all duration-1000 ease-in-out flex flex-col group hover:-translate-y-0.5"
                >
                  <div className="relative h-48 overflow-hidden bg-gray-100 dark:bg-gray-800">
                    <img
                      src={article.imageUrl}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-[1200ms] ease-in-out group-hover:scale-[1.02]"
                    />
                    <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#4CAF50] text-white font-heading font-semibold text-xs shadow">
                      {badgeLabel}
                    </span>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400 mb-2">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-[#4CAF50]" />
                          {article.date}
                        </span>
                        <span>{article.readTime}</span>
                      </div>

                      <h3 className="font-heading font-bold text-lg text-gray-900 dark:text-white group-hover:text-[#4CAF50] transition-colors line-clamp-2">
                        {article.title}
                      </h3>

                      <p className="text-gray-600 dark:text-gray-300 font-sans text-sm leading-relaxed mt-2 line-clamp-3">
                        {article.summary}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-gray-100 dark:border-green-900/40 flex items-center justify-between gap-2 text-xs text-gray-500 dark:text-gray-400">
                      <span className="flex items-center gap-1.5 min-w-0 font-medium text-gray-600 dark:text-gray-400">
                        <User className="w-3.5 h-3.5 text-[#4CAF50] shrink-0" />
                        <span className="truncate">InAmigos Editorial</span>
                      </span>
                      <span className="flex items-center gap-1 text-[#4CAF50] font-semibold group-hover:underline shrink-0 whitespace-nowrap">
                        Read article &rarr;
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Tab 2: Impact Stories Grid */}
        {activeTab === 'stories' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-in fade-in duration-500">
            {IMPACT_STORIES_DATA.map((story) => (
              <div
                key={story.id}
                onClick={() => onSelectStory(story)}
                className="bg-white dark:bg-[#1a2e1e] rounded-3xl overflow-hidden border border-[#C8E6C9] dark:border-green-800/60 shadow-sm hover:shadow-xl cursor-pointer transition-all duration-1000 ease-in-out flex flex-col group hover:-translate-y-0.5"
              >
                <div className="relative h-48 overflow-hidden bg-gray-100">
                  <img
                    src={story.imageUrl}
                    alt={story.title}
                    className="w-full h-full object-cover transition-transform duration-[1200ms] ease-in-out group-hover:scale-[1.02]"
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

                  <div className="pt-4 border-t border-gray-100 dark:border-green-900/40 flex items-center justify-between gap-2 text-xs text-gray-500 dark:text-gray-400">
                    <span className="flex items-center gap-1.5 min-w-0 font-medium text-gray-600 dark:text-gray-400">
                      <User className="w-3.5 h-3.5 text-[#4CAF50] shrink-0" />
                      <span className="truncate">{story.author}</span>
                    </span>
                    <span className="flex items-center gap-1 text-[#4CAF50] font-semibold group-hover:underline shrink-0 whitespace-nowrap">
                      Read story &rarr;
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
