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
    <div className="min-h-screen bg-[#F5F5F5] dark:bg-[#0d1a0f] text-[#333333] dark:text-gray-100 transition-colors duration-300 font-sans flex flex-col selection:bg-[#4CAF50] selection:text-white">
      {/* Navigation Bar */}
      <Navbar
        isDark={isDark}
        themeMode={themeMode}
        onToggleTheme={toggleTheme}
        onSetThemeMode={setThemeMode}
        onOpenModal={handleOpenModal}
      />

      {/* Main Content inside Bento-inspired spacing and container structure */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 space-y-8 sm:space-y-12">
        {/* Hero Bento Section */}
        <div className="rounded-3xl border border-[#C8E6C9] dark:border-green-800/60 shadow-md overflow-hidden bg-white dark:bg-[#152618]">
          <Hero onOpenModal={handleOpenModal} />
        </div>

        {/* About & Mission Bento Grid */}
        <div className="rounded-3xl border border-[#C8E6C9] dark:border-green-800/60 shadow-sm overflow-hidden bg-white dark:bg-[#152618]">
          <About />
        </div>

        {/* Projects Bento Grid */}
        <div className="rounded-3xl border border-[#C8E6C9] dark:border-green-800/60 shadow-sm overflow-hidden bg-[#C8E6C9]/20 dark:bg-[#122214]">
          <Projects
            onOpenModal={handleOpenModal}
            onSelectProjectForDonation={(proj) => setSelectedProject(proj)}
          />
        </div>

        {/* Social Impact & Accountability Bento Grid */}
        <div className="rounded-3xl border border-[#C8E6C9] dark:border-green-800/60 shadow-sm overflow-hidden bg-white dark:bg-[#152618]">
          <SocialImpact onSelectStory={handleSelectStory} onSelectArticle={handleSelectArticle} />
        </div>

        {/* Gallery Bento Grid */}
        <div className="rounded-3xl border border-[#C8E6C9] dark:border-green-800/60 shadow-sm overflow-hidden bg-[#F8FDF8] dark:bg-[#122214]">
          <Gallery />
        </div>

        {/* Call to Action Bento Grid */}
        <div className="rounded-3xl border border-[#C8E6C9] dark:border-green-800/60 shadow-md overflow-hidden bg-gradient-to-br from-[#4CAF50]/10 to-[#2E7D32]/10 dark:from-[#1a331e] dark:to-[#122214]">
          <CallToAction onOpenModal={handleOpenModal} />
        </div>
      </main>

      {/* Footer */}
      <Footer />

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

