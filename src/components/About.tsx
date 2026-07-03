import React from 'react';
import { CheckCircle2, Heart } from 'lucide-react';

export const About: React.FC = () => {
  const coreValues = [
    {
      title: '80G & 12A Tax Certified',
      description: 'Approved by the Commissioner of Income Tax, ensuring complete financial transparency, accountability, and tax-exempt benefits for donors.'
    },
    {
      title: 'Licensed under Section 8',
      description: 'Registered Non-Profit Organization under the Companies Act 2013, Licensed by the Central Government with our operational base in Chhattisgarh.'
    },
    {
      title: 'CSR-1 & NITI Aayog Registered',
      description: 'NGO DARPAN registered with NITI Aayog and CSR-1 certified, enabling impactful corporate social responsibility partnerships nationwide.'
    },
    {
      title: 'IAF ISO 9001:2015 Certified',
      description: 'Prestigious international quality accreditation signifying our commitment to maintaining high-quality standards in operations and service delivery.'
    }
  ];

  return (
    <section id="about" className="py-20 sm:py-28 bg-white dark:bg-[#111e13] transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#C8E6C9]/40 dark:bg-[#2E7D32]/30 text-[#2E7D32] dark:text-[#C8E6C9] text-xs font-heading font-semibold uppercase tracking-wider mb-3">
            <span>Our Foundation & Philosophy</span>
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-5xl text-[#2E7D32] dark:text-[#C8E6C9] tracking-tight mb-4">
            About InAmigos Foundation
          </h2>
          <div className="w-20 h-1.5 bg-[#4CAF50] mx-auto rounded-full mb-6" />
          <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg leading-relaxed font-sans">
            InAmigos Foundation, founded on September 23, 2020, by Mr. Govind Shukla (Founder & CEO), is a Section 8 registered non-profit organization committed to creating lasting social impact. With its base in Chhattisgarh, the foundation operates across India, addressing critical societal issues through a network of dedicated professionals and volunteers.
          </p>
        </div>

        {/* Main Content: Mission Statement & Values */}
        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* Mission Box Bento */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#C8E6C9]/30 dark:bg-[#182c1b] border border-[#C8E6C9] dark:border-green-800/60 shadow-sm">
            <h3 className="font-heading font-bold text-xl text-[#2E7D32] dark:text-[#C8E6C9] mb-2 flex items-center gap-2">
              <Heart className="w-5 h-5 text-[#4CAF50] fill-current" />
              <span>Our Mission Statement</span>
            </h3>
            <p className="text-gray-700 dark:text-gray-200 font-sans text-base sm:text-lg leading-relaxed italic">
              "To eradicate root causes of systemic poverty through grassroots collective action, directing contributions to essential causes such as food distribution, education, women empowerment, animal welfare, environmental sustainability, and social inclusion programs across India."
            </p>
          </div>

          {/* Why We Are Different - Core Pillars Bento Grid */}
          <div>
            <h4 className="font-heading font-semibold text-lg sm:text-xl text-[#2E7D32] dark:text-white mb-4">
              Our Credentials & Recognitions
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {coreValues.map((value, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-[#C8E6C9]/20 dark:bg-[#182c1b]/60 border border-[#C8E6C9] dark:border-green-800/60 flex items-start gap-3 group hover:bg-[#C8E6C9]/40 transition-all duration-700 ease-in-out shadow-sm">
                  <div className="mt-0.5 p-1.5 rounded-xl bg-[#4CAF50] text-white shrink-0 shadow">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="font-heading font-semibold text-sm text-gray-900 dark:text-gray-100 group-hover:text-[#4CAF50] transition-colors duration-700">
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
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#2E7D32] hover:bg-[#4CAF50] text-white font-heading font-semibold text-sm shadow-md transition-all duration-700 ease-in-out hover:scale-[1.01]"
            >
              <span>Explore Our Initiatives</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
