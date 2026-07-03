import React, { useState } from 'react';
import { PROJECTS_DATA } from '../data/ngoData';
import { Project, ModalType } from '../types';
import { IconRenderer } from './IconRenderer';
import { ArrowRight, Heart, Users, MapPin, Filter } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface ProjectsProps {
  onOpenModal: (type: ModalType, project?: Project) => void;
  onSelectProjectForDonation: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({
  onOpenModal,
  onSelectProjectForDonation
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Education', 'Community', 'Environment'];

  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="py-10 sm:py-14 bg-transparent transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[#4CAF50] font-heading font-bold text-sm tracking-widest uppercase mb-2 block">
              Grassroots Action
            </span>
            <h2 className="font-heading font-bold text-3xl sm:text-5xl text-[#1B5E20] dark:text-[#C8E6C9] tracking-tight mb-4">
              Our Initiatives
            </h2>
            <div className="w-20 h-1.5 bg-[#4CAF50] mx-auto rounded-full mb-6" />
            <p className="text-gray-800 dark:text-gray-300 text-base sm:text-lg leading-relaxed font-sans">
              Making a measurable, generational difference one community at a time. Explore our ongoing projects across India and vulnerable global regions.
            </p>
          </div>
        </ScrollReveal>

        {/* Category Filters */}
        <ScrollReveal direction="up" delay={0.15}>
          <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3 mb-12">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-gray-700 dark:text-gray-400 mr-2">
              <Filter className="w-3.5 h-3.5" />
              <span>Filter:</span>
            </div>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-heading font-semibold transition-all duration-500 ease-in-out ${
                  selectedCategory === cat
                    ? 'bg-[#4CAF50] text-white shadow-md scale-[1.02]'
                    : 'bg-white/80 dark:bg-[#1e3422]/80 backdrop-blur-md text-gray-800 dark:text-gray-200 hover:bg-white dark:hover:bg-green-900/60 border border-gray-300 dark:border-green-800/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <ScrollReveal key={project.id} direction="up" delay={0.1 * ((idx % 3) + 1)}>
              <div
                className="bg-white/80 dark:bg-[#1a2e1e]/80 backdrop-blur-md rounded-3xl overflow-hidden shadow-lg hover:shadow-xl border border-[#4CAF50]/30 dark:border-green-800/60 flex flex-col transition-all duration-500 ease-in-out hover:-translate-y-1.5 group h-full"
              >
                {/* Image Banner */}
                <div className="relative h-52 overflow-hidden bg-gray-100 dark:bg-gray-800">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-[1200ms] ease-in-out group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Category Badge */}
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#2E7D32]/90 backdrop-blur-sm text-white font-heading font-semibold text-xs shadow">
                    {project.category}
                  </span>

                  {/* Icon Badge */}
                  <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white dark:bg-[#1a2e1e] text-[#4CAF50] flex items-center justify-center shadow-md">
                    <IconRenderer name={project.iconName} className="w-5 h-5" />
                  </div>

                  {/* Location Overlay */}
                  <div className="absolute bottom-3 left-4 right-4 flex items-center gap-1.5 text-white/90 text-xs">
                    <MapPin className="w-3.5 h-3.5 shrink-0 text-[#4CAF50]" />
                    <span className="truncate">{project.location}</span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    {/* Impact Metric Highlight */}
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#C8E6C9]/50 dark:bg-[#2E7D32]/30 text-[#1B5E20] dark:text-[#C8E6C9] text-xs font-semibold mb-3">
                      <Users className="w-3.5 h-3.5 text-[#4CAF50]" />
                      <span>{project.impactMetric}</span>
                    </div>

                    <h3 className="font-heading font-bold text-xl text-gray-900 dark:text-white group-hover:text-[#2E7D32] dark:group-hover:text-[#4CAF50] transition-colors line-clamp-2">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-800 dark:text-gray-300 font-sans text-sm leading-relaxed mt-2 line-clamp-3">
                      {project.shortDescription}
                    </p>
                  </div>

                  {/* Beneficiaries Detail */}
                  <div className="pt-3 border-t border-gray-200 dark:border-green-900/40 flex items-center justify-between text-xs text-gray-600 dark:text-gray-400 font-medium">
                    <span className="truncate">{project.beneficiaries}</span>
                  </div>

                  {/* Action Footer */}
                  <div className="pt-2 flex items-center justify-between gap-3">
                    <button
                      onClick={() => onOpenModal('project-details', project)}
                      className="flex-1 py-2 px-3 rounded-xl bg-gray-100 dark:bg-green-900/30 hover:bg-gray-200 dark:hover:bg-green-900/60 text-gray-800 dark:text-gray-100 font-heading font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <span>View Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                     <button
                      onClick={() => {
                        onSelectProjectForDonation(project);
                        onOpenModal('donate');
                      }}
                      aria-label={`Support ${project.title}`}
                      className="p-2.5 rounded-xl bg-[#4CAF50] hover:bg-[#45a049] text-white shrink-0 shadow hover:scale-[1.015] active:scale-95 transition-all duration-500 ease-in-out"
                      title="Support this project"
                    >
                      <Heart className="w-4 h-4 fill-current" />
                    </button>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom Banner for custom proposal */}
        <ScrollReveal direction="zoom" delay={0.2}>
          <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-[#2E7D32] to-[#4CAF50] text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left space-y-1 max-w-2xl">
              <h3 className="font-heading font-bold text-2xl sm:text-3xl">Have an idea for a community initiative?</h3>
              <p className="text-green-100 font-sans text-sm sm:text-base">
                We partner with local educators, medical professionals, and village leaders. Submit your project proposal for seed funding and volunteer support.
              </p>
            </div>
            <button
              onClick={() => onOpenModal('partner')}
              className="px-6 py-3.5 rounded-full bg-white text-[#2E7D32] hover:bg-gray-100 font-heading font-bold text-sm sm:text-base shadow-lg shrink-0 hover:scale-[1.015] active:scale-95 transition-all duration-500 ease-in-out"
            >
              Partner With Us
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
