import React, { useState, useEffect, useRef } from 'react';
import { IMPACT_METRICS, BLOG_ARTICLES_DATA } from '../data/ngoData';
import { ImpactStory, BlogArticle } from '../types';
import { IconRenderer } from './IconRenderer';
import { Calendar, User, Users, MapPin, Layers, Gift, Eye, Banknote } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface SocialImpactProps {
  onSelectStory?: (story: ImpactStory) => void;
  onSelectArticle?: (article: BlogArticle) => void;
}

const AnimatedCounter: React.FC<{ target?: number; fallback: string; suffix?: string; duration?: number }> = ({
  target,
  fallback,
  suffix = '',
  duration = 2200,
}) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated || typeof target !== 'number') return;

    let startTime: number | null = null;
    let animationFrameId: number;

    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);

      // Smooth ease out cubic deceleration
      const easeOut = 1 - Math.pow(1 - percentage, 3);
      const currentVal = Math.floor(easeOut * target);

      setCount(currentVal);

      if (percentage < 1) {
        animationFrameId = requestAnimationFrame(updateCount);
      } else {
        setCount(target);
      }
    };

    animationFrameId = requestAnimationFrame(updateCount);

    return () => cancelAnimationFrame(animationFrameId);
  }, [hasAnimated, target, duration]);

  if (typeof target !== 'number') {
    return <span>{fallback}</span>;
  }

  const formattedCount = count.toLocaleString('en-IN');

  return (
    <span ref={elementRef} className="inline-block tabular-nums">
      {formattedCount}{suffix}
    </span>
  );
};

const CORE_REACH_METRICS = [
  {
    id: 'reach-1',
    value: '200+',
    numericValue: 200,
    suffix: '+',
    label: 'OUR VOLUNTEERS',
    icon: Users,
    description: 'Dedicated grassroots changemakers',
  },
  {
    id: 'reach-2',
    value: '28',
    numericValue: 28,
    suffix: '',
    label: 'STATES',
    icon: User,
    description: 'Active presence across the nation',
  },
  {
    id: 'reach-3',
    value: '6',
    numericValue: 6,
    suffix: '',
    label: 'OUR CAUSES',
    icon: Banknote,
    description: 'Education, health, climate & more',
  },
  {
    id: 'reach-4',
    value: '50,000+',
    numericValue: 50000,
    suffix: '+',
    label: 'BENEFICIARIES',
    icon: Gift,
    description: 'Directly supported families & youth',
  },
];

export const SocialImpact: React.FC<SocialImpactProps> = ({ onSelectArticle }) => {
  return (
    <section id="impact" className="py-10 sm:py-14 bg-transparent transition-colors duration-300 relative overflow-hidden">
      
      {/* Subtle Background Pattern / Illustration Simulation */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none bg-[radial-gradient(#4CAF50_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[#4CAF50] font-heading font-bold text-sm tracking-widest uppercase mb-2 block">
              Verifiable Accountability
            </span>
            <h2 className="font-heading font-bold text-3xl sm:text-5xl text-[#1B5E20] dark:text-[#C8E6C9] tracking-tight mb-4">
              Our Impact
            </h2>
            <div className="w-20 h-1.5 bg-[#4CAF50] mx-auto rounded-full mb-6" />
            <p className="text-gray-800 dark:text-gray-300 text-base sm:text-lg leading-relaxed font-sans">
              We measure our success not by the funds we raise, but by the tangible independence and well-being of the communities we serve. Here is what we have accomplished together.
            </p>
          </div>
        </ScrollReveal>

        {/* Core Reach Impact Banner (from screenshot) styled to match theme */}
        <ScrollReveal direction="up" delay={0.12}>
          <div className="bg-[#181a1f]/90 dark:bg-[#0a120b]/90 backdrop-blur-md text-white rounded-3xl p-8 sm:p-12 mb-10 sm:mb-12 shadow-2xl border border-[#4CAF50]/30 relative overflow-hidden transition-all duration-500 hover:border-[#4CAF50]/60">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-[#4CAF50] to-transparent opacity-80" />

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 divide-y-0 lg:divide-x divide-gray-800/80">
              {CORE_REACH_METRICS.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={item.id}
                    className="flex flex-col items-center justify-center text-center px-4 group"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-white/10 dark:bg-[#4CAF50]/20 text-white dark:text-[#C8E6C9] flex items-center justify-center mb-4 group-hover:scale-105 group-hover:bg-[#4CAF50] group-hover:text-white transition-all duration-700 ease-in-out shadow">
                      <IconComponent className="w-7 h-7" />
                    </div>
                    <span className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-1">
                      <AnimatedCounter target={item.numericValue} fallback={item.value} suffix={item.suffix} />
                    </span>
                    <span className="text-xs sm:text-sm font-bold tracking-widest text-gray-300 dark:text-gray-200 uppercase mt-1">
                      {item.label}
                    </span>
                    <span className="text-[11px] text-gray-400 mt-1 max-w-[180px] leading-relaxed">
                      {item.description}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </ScrollReveal>

        {/* Unified 4-Column Impact Metrics Grid */}
        <ScrollReveal direction="zoom" delay={0.15}>
          <div className="bg-[#181a1f]/90 dark:bg-[#0a120b]/90 backdrop-blur-md text-white rounded-3xl p-8 sm:p-12 mb-12 shadow-2xl border border-[#4CAF50]/30 relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-[#4CAF50] to-transparent opacity-80" />

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 divide-y-0 lg:divide-x divide-gray-800/80">
              {IMPACT_METRICS.map((metric) => (
                <div
                  key={metric.id}
                  className="flex flex-col items-center text-center px-4 group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-white/10 dark:bg-[#4CAF50]/20 text-white dark:text-[#C8E6C9] flex items-center justify-center mb-4 group-hover:scale-105 group-hover:bg-[#4CAF50] group-hover:text-white transition-all duration-700 ease-in-out shadow">
                    <IconRenderer name={metric.iconName} className="w-7 h-7" />
                  </div>

                  <span className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-1">
                    <AnimatedCounter target={metric.numericValue} fallback={metric.value} suffix={metric.suffix} />
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
        </ScrollReveal>

        {/* Blogs Section Badge */}
        <ScrollReveal direction="up" delay={0.2}>
          <div className="flex justify-center mb-8">
            <div className="inline-flex px-6 sm:px-8 py-3 rounded-full font-heading font-semibold text-sm sm:text-base bg-[#4CAF50] text-white shadow-md">
              Blogs ({BLOG_ARTICLES_DATA.length})
            </div>
          </div>
        </ScrollReveal>

        {/* Blog Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_ARTICLES_DATA.map((article, idx) => {
            const badgeLabel = article.title.toLowerCase().includes('water')
              ? 'Environment'
              : article.title.toLowerCase().includes('vikas')
              ? 'Education'
              : 'Community';

            return (
              <ScrollReveal key={article.id} direction="up" delay={0.1 * (idx + 1)}>
                <div
                  onClick={() => onSelectArticle?.(article)}
                  className="bg-white/80 dark:bg-[#1a2e1e]/80 backdrop-blur-md rounded-3xl overflow-hidden border border-[#4CAF50]/30 dark:border-green-800/60 shadow-lg hover:shadow-xl cursor-pointer transition-all duration-500 ease-in-out flex flex-col group hover:-translate-y-1.5 h-full"
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
                      <div className="flex items-center gap-4 text-xs text-gray-600 dark:text-gray-400 mb-2">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-[#4CAF50]" />
                          {article.date}
                        </span>
                        <span>{article.readTime}</span>
                      </div>

                      <h3 className="font-heading font-bold text-lg text-gray-900 dark:text-white group-hover:text-[#2E7D32] dark:group-hover:text-[#4CAF50] transition-colors line-clamp-2">
                        {article.title}
                      </h3>

                      <p className="text-gray-800 dark:text-gray-300 font-sans text-sm leading-relaxed mt-2 line-clamp-3">
                        {article.summary}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-gray-200 dark:border-green-900/40 flex items-center justify-between gap-2 text-xs text-gray-600 dark:text-gray-400">
                      <span className="flex items-center gap-1.5 min-w-0 font-medium text-gray-700 dark:text-gray-300">
                        <User className="w-3.5 h-3.5 text-[#4CAF50] shrink-0" />
                        <span className="truncate">InAmigos Editorial</span>
                      </span>
                      <span className="flex items-center gap-1 text-[#2E7D32] dark:text-[#4CAF50] font-semibold group-hover:underline shrink-0 whitespace-nowrap">
                        Read article &rarr;
                      </span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
