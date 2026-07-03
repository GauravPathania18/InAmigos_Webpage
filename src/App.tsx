/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { SocialImpact } from './components/SocialImpact';
import { Gallery } from './components/Gallery';
import { CallToAction } from './components/CallToAction';
import { Footer } from './components/Footer';
import { Modal } from './components/Modal';
import { useDarkMode } from './hooks/useDarkMode';
import { ModalType, Project, ImpactStory, BlogArticle } from './types';
import { InteractiveBackground } from './components/InteractiveBackground';
import { ScrollReveal } from './components/ScrollReveal';

export default function App() {
  const { themeMode, setThemeMode, isDark, toggleTheme } = useDarkMode();
  const [modalType, setModalType] = useState<ModalType>('none');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedStory, setSelectedStory] = useState<ImpactStory | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<BlogArticle | null>(null);

  const handleOpenModal = (type: ModalType, project?: Project) => {
    setModalType(type);
    if (project) {
      setSelectedProject(project);
    }
  };

  const handleSelectStory = (story: ImpactStory) => {
    setSelectedStory(story);
    setModalType('story-details');
  };

  const handleSelectArticle = (article: BlogArticle) => {
    setSelectedArticle(article);
    setModalType('blog-details');
  };

  return (
    <div className="min-h-screen bg-[#eef8f1] dark:bg-[#061008] text-gray-900 dark:text-gray-100 transition-colors duration-500 font-sans flex flex-col selection:bg-[#4CAF50] selection:text-white relative overflow-x-hidden">
      {/* Interactive Green Flashlight & Particle Background */}
      <InteractiveBackground isDark={isDark} />

      {/* Navigation Bar */}
      <div className="relative z-20">
        <Navbar
          isDark={isDark}
          themeMode={themeMode}
          onToggleTheme={toggleTheme}
          onSetThemeMode={setThemeMode}
          onOpenModal={handleOpenModal}
        />
      </div>

      {/* Main Content inside seamless container structure */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 pb-16 space-y-6 sm:space-y-8 relative z-10">
        {/* Hero Section */}
        <ScrollReveal direction="fade" delay={0.1}>
          <div className="rounded-3xl border border-[#4CAF50]/30 dark:border-green-800/40 shadow-sm overflow-hidden bg-transparent transition-all duration-300 hover:border-[#4CAF50]/60">
            <Hero onOpenModal={handleOpenModal} />
          </div>
        </ScrollReveal>

        {/* About & Mission Section */}
        <ScrollReveal direction="up" delay={0.15}>
          <div className="rounded-3xl border border-[#4CAF50]/30 dark:border-green-800/40 shadow-sm overflow-hidden bg-transparent transition-all duration-300 hover:border-[#4CAF50]/60">
            <About />
          </div>
        </ScrollReveal>

        {/* Projects Section */}
        <ScrollReveal direction="up" delay={0.15}>
          <div className="rounded-3xl border border-[#4CAF50]/30 dark:border-green-800/40 shadow-sm overflow-hidden bg-transparent transition-all duration-300 hover:border-[#4CAF50]/60">
            <Projects
              onOpenModal={handleOpenModal}
              onSelectProjectForDonation={(proj) => setSelectedProject(proj)}
            />
          </div>
        </ScrollReveal>

        {/* Social Impact & Accountability Section */}
        <ScrollReveal direction="up" delay={0.15}>
          <div className="rounded-3xl border border-[#4CAF50]/30 dark:border-green-800/40 shadow-sm overflow-hidden bg-transparent transition-all duration-300 hover:border-[#4CAF50]/60">
            <SocialImpact onSelectStory={handleSelectStory} onSelectArticle={handleSelectArticle} />
          </div>
        </ScrollReveal>

        {/* Gallery Section */}
        <ScrollReveal direction="up" delay={0.15}>
          <div className="rounded-3xl border border-[#4CAF50]/30 dark:border-green-800/40 shadow-sm overflow-hidden bg-transparent transition-all duration-300 hover:border-[#4CAF50]/60">
            <Gallery />
          </div>
        </ScrollReveal>

        {/* Call to Action Section */}
        <ScrollReveal direction="zoom" delay={0.2}>
          <div className="rounded-3xl border border-[#4CAF50]/30 dark:border-green-800/40 shadow-sm overflow-hidden bg-transparent transition-all duration-300 hover:border-[#4CAF50]/60">
            <CallToAction onOpenModal={handleOpenModal} />
          </div>
        </ScrollReveal>
      </main>

      {/* Footer */}
      <div className="relative z-10">
        <Footer />
      </div>

      {/* Interactive Modals */}
      <Modal
        type={modalType}
        project={selectedProject}
        story={selectedStory}
        article={selectedArticle}
        onClose={() => {
          setModalType('none');
          setSelectedProject(null);
          setSelectedStory(null);
          setSelectedArticle(null);
        }}
        onOpenDonate={(proj) => {
          setSelectedProject(proj);
          setModalType('donate');
        }}
      />
    </div>
  );
}

