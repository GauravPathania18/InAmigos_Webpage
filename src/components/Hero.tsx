import React from 'react';
import { HeartHandshake, ArrowRight, ShieldCheck, Globe, Users } from 'lucide-react';
import { ModalType } from '../types';

interface HeroProps {
  onOpenModal: (type: ModalType) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenModal }) => {
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-[100vh] min-h-[600px] flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1920&q=85"
          alt="InAmigos NGO team and community beneficiaries working together"
          className="w-full h-full object-cover object-center scale-105 animate-pulse-slow"
        />
        {/* Multi-layer gradient overlay for optimal readability & atmosphere */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/75 dark:from-[#0d1f11]/90 dark:via-[#112a17]/80 dark:to-black/85" />
        <div className="absolute inset-0 bg-[#2E7D32]/20 mix-blend-multiply" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center text-white flex flex-col items-center justify-center">
        
        {/* Trust Badge */}
        <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 dark:bg-[#4CAF50]/20 backdrop-blur-md border border-white/20 text-white dark:text-[#C8E6C9] text-xs sm:text-sm font-medium mb-6 shadow-lg animate-fade-in">
          <span>80G & 12A Certified | NGO DARPAN | ISO 9001:2015 Registered Non-Profit</span>
        </div>

        {/* Main Headline (H1) */}
        <h1 className="font-heading font-bold text-4xl sm:text-6xl md:text-7xl tracking-tight leading-tight mb-6 max-w-4xl drop-shadow-lg">
          Empowering Communities <br className="hidden sm:inline" />
          <span className="text-[#4CAF50] underline decoration-[#4CAF50]/40 decoration-wavy underline-offset-8">
            Together
          </span>
        </h1>

        {/* Subtext */}
        <p className="font-sans text-lg sm:text-xl md:text-2xl text-gray-100 dark:text-gray-200 font-normal max-w-3xl leading-relaxed mb-10 drop-shadow">
          Join us in creating sustainable social impact across India through Project Seva, Bachpanshala, Jeev, Udaan, Prakriti, and Vikas.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <button
            onClick={() => onOpenModal('volunteer')}
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#4CAF50] hover:bg-[#45a049] text-white font-heading font-bold text-base sm:text-lg shadow-xl hover:shadow-2xl hover:scale-[1.015] active:scale-95 transition-all duration-700 ease-in-out"
          >
            <HeartHandshake className="w-5 h-5 transition-transform duration-700 ease-in-out group-hover:rotate-12" />
            <span>Join Our Mission</span>
            <ArrowRight className="w-5 h-5 transition-transform duration-700 ease-in-out group-hover:translate-x-1" />
          </button>

          <button
            onClick={scrollToAbout}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/15 hover:bg-white/25 dark:bg-black/30 dark:hover:bg-black/50 backdrop-blur-md border border-white/30 text-white font-heading font-semibold text-base sm:text-lg shadow-lg hover:scale-[1.015] active:scale-95 transition-all duration-700 ease-in-out"
          >
            <span>Learn More</span>
          </button>
        </div>

        {/* Quick Impact Highlight Bento Boxes */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-4xl">
          <div className="p-5 rounded-2xl bg-white/10 dark:bg-black/40 backdrop-blur-md border border-white/20 dark:border-green-800/40 flex flex-col items-center justify-center shadow-lg transition-all duration-700 ease-in-out hover:bg-white/15">
            <div className="flex items-center gap-1.5 text-2xl sm:text-3xl font-heading font-bold text-[#4CAF50]">
              <Users className="w-6 h-6 sm:w-7 sm:h-7" />
              <span>50,000+</span>
            </div>
            <span className="text-xs sm:text-sm text-gray-200 font-medium mt-1">Meals & Clothes Distributed</span>
          </div>

          <div className="p-5 rounded-2xl bg-white/10 dark:bg-black/40 backdrop-blur-md border border-white/20 dark:border-green-800/40 flex flex-col items-center justify-center shadow-lg transition-all duration-700 ease-in-out hover:bg-white/15">
            <div className="flex items-center gap-1.5 text-2xl sm:text-3xl font-heading font-bold text-[#4CAF50]">
              <ShieldCheck className="w-6 h-6 sm:w-7 sm:h-7" />
              <span>30,000+</span>
            </div>
            <span className="text-xs sm:text-sm text-gray-200 font-medium mt-1">Interns & Youth Trained</span>
          </div>

          <div className="p-5 rounded-2xl bg-white/10 dark:bg-black/40 backdrop-blur-md border border-white/20 dark:border-green-800/40 flex flex-col items-center justify-center shadow-lg transition-all duration-700 ease-in-out hover:bg-white/15">
            <div className="flex items-center gap-1.5 text-2xl sm:text-3xl font-heading font-bold text-[#4CAF50]">
              <Globe className="w-6 h-6 sm:w-7 sm:h-7" />
              <span>20,000+</span>
            </div>
            <span className="text-xs sm:text-sm text-gray-200 font-medium mt-1">Trees & Saplings Planted</span>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Curve / Wave transition */}
      <div className="absolute bottom-0 left-0 right-0 z-20 pointer-events-none">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-8 sm:h-16 text-white dark:text-[#111e13] preserve-3d"
          preserveAspectRatio="none"
        >
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </section>
  );
};
