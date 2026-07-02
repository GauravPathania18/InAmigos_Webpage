import React from 'react';
import { Heart, HeartHandshake, Handshake, Share2, Sparkles, ArrowRight } from 'lucide-react';
import { ModalType } from '../types';

interface CallToActionProps {
  onOpenModal: (type: ModalType) => void;
}

export const CallToAction: React.FC<CallToActionProps> = ({ onOpenModal }) => {
  const ctaOptions = [
    {
      title: 'Volunteer Your Time',
      description: 'Join our on-ground field camps, weekend teaching bootcamps, or mentor students remotely from anywhere in the world.',
      buttonText: 'Become a Volunteer',
      type: 'volunteer' as ModalType,
      isPrimary: true,
      icon: HeartHandshake,
      badge: 'Most Popular'
    },
    {
      title: 'Make a Financial Gift',
      description: 'Your tax-deductible contribution directly funds water filtration units, school tablets, and mobile medical supplies.',
      buttonText: 'Donate Now',
      type: 'donate' as ModalType,
      isPrimary: true,
      icon: Heart,
      badge: '100% Direct Impact'
    },
    {
      title: 'Corporate & NGO Partnership',
      description: 'Collaborate with us for CSR initiatives, employee volunteering, equipment sponsorship, or academic research.',
      buttonText: 'Partner With Us',
      type: 'partner' as ModalType,
      isPrimary: false,
      icon: Handshake,
      badge: 'CSR & Grants'
    },
    {
      title: 'Spread the Word',
      description: 'Amplify our mission! Share our stories with your network, organize a local fundraiser, or invite our team to speak.',
      buttonText: 'Share & Advocate',
      type: 'spread-word' as ModalType,
      isPrimary: false,
      icon: Share2,
      badge: 'Advocate'
    }
  ];

  return (
    <section
      id="get-involved"
      className="py-20 sm:py-28 bg-gradient-to-b from-[#E8F5E9] via-[#C8E6C9]/40 to-white dark:from-[#112214] dark:via-[#162f1a] dark:to-[#111e13] transition-colors duration-300 relative overflow-hidden"
    >
      {/* Decorative Glows */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-[#4CAF50]/15 dark:bg-[#4CAF50]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#2E7D32]/10 dark:bg-[#2E7D32]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#4CAF50]/20 text-[#2E7D32] dark:text-[#C8E6C9] text-xs font-heading font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#4CAF50]" />
            <span>Take Action Today</span>
          </div>
          <h2 className="font-heading font-bold text-4xl sm:text-6xl text-[#2E7D32] dark:text-[#C8E6C9] tracking-tight mb-4">
            Be the Change
          </h2>
          <div className="w-20 h-1.5 bg-[#4CAF50] mx-auto rounded-full mb-6" />
          <p className="text-gray-700 dark:text-gray-200 text-lg sm:text-xl leading-relaxed font-sans font-medium">
            Every contribution—whether your time, professional voice, or financial resources—creates a ripple of generational empowerment for families in need.
          </p>
        </div>

        {/* 4 Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {ctaOptions.map((option, idx) => {
            const IconComponent = option.icon;

            return (
              <div
                key={idx}
                className={`p-8 rounded-3xl transition-all duration-300 flex flex-col justify-between border relative group ${
                  option.isPrimary
                    ? 'bg-white dark:bg-[#1c3220] border-[#4CAF50] shadow-xl hover:shadow-2xl hover:-translate-y-1.5 ring-2 ring-[#4CAF50]/20'
                    : 'bg-white/80 dark:bg-[#162719] border-[#C8E6C9] dark:border-green-800/60 shadow-md hover:shadow-xl hover:-translate-y-1'
                }`}
              >
                {/* Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 duration-300 ${
                    option.isPrimary
                      ? 'bg-[#4CAF50] text-white shadow-md'
                      : 'bg-[#C8E6C9]/60 dark:bg-[#2E7D32]/40 text-[#2E7D32] dark:text-[#C8E6C9]'
                  }`}>
                    <IconComponent className="w-7 h-7" />
                  </div>

                  <span className={`text-xs font-heading font-semibold px-3 py-1 rounded-full uppercase tracking-wider ${
                    option.isPrimary
                      ? 'bg-[#4CAF50]/15 text-[#2E7D32] dark:text-[#C8E6C9]'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300'
                  }`}>
                    {option.badge}
                  </span>
                </div>

                {/* Content */}
                <div className="space-y-3 mb-8">
                  <h3 className="font-heading font-bold text-2xl text-gray-900 dark:text-white">
                    {option.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 font-sans text-base leading-relaxed">
                    {option.description}
                  </p>
                </div>

                {/* Action Button */}
                <button
                  onClick={() => onOpenModal(option.type)}
                  className={`w-full py-4 px-6 rounded-2xl font-heading font-bold text-base flex items-center justify-center gap-2 shadow-md transition-all duration-200 group-hover:shadow-lg ${
                    option.isPrimary
                      ? 'bg-[#4CAF50] hover:bg-[#45a049] text-white'
                      : 'bg-transparent hover:bg-[#4CAF50]/10 border-2 border-[#4CAF50] text-[#2E7D32] dark:text-[#C8E6C9]'
                  }`}
                >
                  <span>{option.buttonText}</span>
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Support reassurance */}
        <div className="mt-16 text-center text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-sans max-w-xl mx-auto">
          🔒 All financial donations are processed through 256-bit bank-grade encryption. InAmigos is compliant with global non-profit reporting standards.
        </div>
      </div>
    </section>
  );
};
