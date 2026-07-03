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
    <section id="home" className="relative min-h-[75vh] min-h-[500px] flex items-center justify-center overflow-hidden py-10 sm:py-14">
      {/* Subtle Background Image with high transparency so particle canvas shines through */}
      <div className="absolute inset-0 z-0 opacity-15 dark:opacity-20 pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1920&q=85"
          alt="InAmigos NGO team and community beneficiaries working together"
          className="w-full h-full object-cover object-center scale-105 animate-pulse-slow"
        />
        <div className="absolute inset-0 bg-[#2E7D32]/10 mix-blend-multiply" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center text-gray-900 dark:text-white flex flex-col items-center justify-center">
        
        {/* Trust Badge */}
        <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/70 dark:bg-[#4CAF50]/20 backdrop-blur-md border border-[#4CAF50]/30 text-[#2E7D32] dark:text-[#C8E6C9] text-xs sm:text-sm font-medium mb-6 shadow-md animate-fade-in">
          <span>80G & 12A Certified | NGO DARPAN | ISO 9001:2015 Registered Non-Profit</span>
        </div>

        {/* Main Headline (H1) */}
        <h1 className="font-heading font-bold text-4xl sm:text-6xl md:text-7xl tracking-tight leading-tight mb-6 max-w-4xl drop-shadow-sm dark:drop-shadow-lg">
          Empowering Communities <br className="hidden sm:inline" />
          <span className="text-[#4CAF50] underline decoration-[#4CAF50]/40 decoration-wavy underline-offset-8">
            Together
          </span>
        </h1>

        {/* Subtext */}
        <p className="font-sans text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-200 font-normal max-w-3xl leading-relaxed mb-10 drop-shadow-sm">
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
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/70 hover:bg-white/90 dark:bg-black/30 dark:hover:bg-black/50 backdrop-blur-md border border-gray-300 dark:border-white/30 text-gray-900 dark:text-white font-heading font-semibold text-base sm:text-lg shadow-lg hover:scale-[1.015] active:scale-95 transition-all duration-700 ease-in-out"
          >
            <span>Learn More</span>
          </button>
        </div>

        {/* Quick Impact Highlight Bento Boxes */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-4xl">
          <div className="group p-5 rounded-2xl bg-white/80 dark:bg-black/50 backdrop-blur-md border border-[#4CAF50]/30 dark:border-green-800/40 flex flex-col items-center justify-center shadow-lg transition-all duration-500 ease-in-out hover:bg-white/95 dark:hover:bg-[#1B5E20]/60 hover:border-[#4CAF50] dark:hover:border-[#4CAF50] hover:shadow-xl hover:-translate-y-1 cursor-default">
            <div className="flex items-center gap-1.5 text-2xl sm:text-3xl font-heading font-bold text-[#2E7D32] dark:text-[#4CAF50] group-hover:text-[#1B5E20] dark:group-hover:text-[#C8E6C9] transition-all duration-300 group-hover:scale-105">
              <Users className="w-6 h-6 sm:w-7 sm:h-7" />
              <span>50,000+</span>
            </div>
            <span className="text-xs sm:text-sm text-gray-800 dark:text-gray-200 group-hover:text-gray-950 dark:group-hover:text-white font-semibold mt-1 transition-colors">Meals & Clothes Distributed</span>
          </div>

          <div className="group p-5 rounded-2xl bg-white/80 dark:bg-black/50 backdrop-blur-md border border-[#4CAF50]/30 dark:border-green-800/40 flex flex-col items-center justify-center shadow-lg transition-all duration-500 ease-in-out hover:bg-white/95 dark:hover:bg-[#1B5E20]/60 hover:border-[#4CAF50] dark:hover:border-[#4CAF50] hover:shadow-xl hover:-translate-y-1 cursor-default">
            <div className="flex items-center gap-1.5 text-2xl sm:text-3xl font-heading font-bold text-[#2E7D32] dark:text-[#4CAF50] group-hover:text-[#1B5E20] dark:group-hover:text-[#C8E6C9] transition-all duration-300 group-hover:scale-105">
              <ShieldCheck className="w-6 h-6 sm:w-7 sm:h-7" />
              <span>30,000+</span>
            </div>
            <span className="text-xs sm:text-sm text-gray-800 dark:text-gray-200 group-hover:text-gray-950 dark:group-hover:text-white font-semibold mt-1 transition-colors">Interns & Youth Trained</span>
          </div>

          <div className="group p-5 rounded-2xl bg-white/80 dark:bg-black/50 backdrop-blur-md border border-[#4CAF50]/30 dark:border-green-800/40 flex flex-col items-center justify-center shadow-lg transition-all duration-500 ease-in-out hover:bg-white/95 dark:hover:bg-[#1B5E20]/60 hover:border-[#4CAF50] dark:hover:border-[#4CAF50] hover:shadow-xl hover:-translate-y-1 cursor-default">
            <div className="flex items-center gap-1.5 text-2xl sm:text-3xl font-heading font-bold text-[#2E7D32] dark:text-[#4CAF50] group-hover:text-[#1B5E20] dark:group-hover:text-[#C8E6C9] transition-all duration-300 group-hover:scale-105">
              <Globe className="w-6 h-6 sm:w-7 sm:h-7" />
              <span>20,000+</span>
            </div>
            <span className="text-xs sm:text-sm text-gray-800 dark:text-gray-200 group-hover:text-gray-950 dark:group-hover:text-white font-semibold mt-1 transition-colors">Trees & Saplings Planted</span>
          </div>
        </div>
      </div>
    </section>
  );
};
