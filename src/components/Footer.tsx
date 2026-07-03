import React, { useState } from 'react';
import { Send, CheckCircle2, ExternalLink, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { InAmigosLogo } from './InAmigosLogo';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() && email.includes('@')) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 6000);
    }
  };

  const usefulLinks = [
    { name: 'Events', href: '#projects' },
    { name: 'Volunteers', href: '#get-involved' },
    { name: 'Gallery', href: '#impact' },
    { name: 'Blogs', href: '#impact' },
    { name: 'Categories', href: '#projects' },
  ];

  const pageLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Contact', href: '#get-involved' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#181a1f] dark:bg-[#0e1013] text-gray-300 transition-colors duration-300 border-t border-green-900/40 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top 4 Columns Grid matching exact screenshot */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-16 border-b border-gray-800/80">
          
          {/* Column 1: Logo Box & Follow Us (3 cols) */}
          <div className="lg:col-span-3 space-y-5">
            {/* White Logo Banner Box as in screenshot */}
            <div className="inline-block bg-white px-5 py-3 rounded-lg shadow-md">
              <a href="#home" onClick={(e) => scrollToSection(e, '#home')} className="flex items-center group">
                <InAmigosLogo layout="horizontal" size="md" theme="light" />
              </a>
            </div>
            
            <div>
              <h4 className="font-heading font-semibold text-base text-[#4CAF50] mb-3">
                Follow us
              </h4>
              <div className="flex items-center space-x-4 text-white">
                <a
                  href="https://www.facebook.com/109800320841732/posts/289306342891128/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="hover:text-[#4CAF50] transition-all duration-700 ease-in-out hover:scale-[1.03] font-bold"
                >
                  <Facebook className="w-5 h-5 fill-current" />
                </a>
                <a
                  href="https://twitter.com/InamigosF?s=08"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                  className="hover:text-[#4CAF50] transition-all duration-700 ease-in-out hover:scale-[1.03] font-bold"
                >
                  <Twitter className="w-5 h-5 fill-current" />
                </a>
                <a
                  href="https://inamigosfoundation.org.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Google"
                  className="hover:text-[#4CAF50] transition-all duration-700 ease-in-out hover:scale-[1.03] font-bold text-sm tracking-tighter"
                >
                  G+
                </a>
                <a
                  href="https://www.linkedin.com/company/inamigos-foundation"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="hover:text-[#4CAF50] transition-all duration-700 ease-in-out hover:scale-[1.03] font-bold"
                >
                  <Linkedin className="w-5 h-5 fill-current" />
                </a>
                <a
                  href="https://instagram.com/inamigos?utm_medium=copy_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="hover:text-[#4CAF50] transition-all duration-700 ease-in-out hover:scale-[1.03] font-bold"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Useful Links (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-heading font-bold text-lg text-[#4CAF50]">
              Useful Links
            </h3>
            <ul className="space-y-3">
              {usefulLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="text-sm text-gray-200 hover:text-[#4CAF50] transition-colors font-medium block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Pages (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="font-heading font-bold text-lg text-[#4CAF50]">
              pages
            </h3>
            <ul className="space-y-3">
              {pageLinks.map((page) => (
                <li key={page.name}>
                  <a
                    href={page.href}
                    onClick={(e) => scrollToSection(e, page.href)}
                    className="text-sm text-gray-200 hover:text-[#4CAF50] transition-colors font-medium block"
                  >
                    {page.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Us & Email Newsletter (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="font-heading font-bold text-lg text-[#4CAF50]">
              Contact Us
            </h3>
            
            <div className="text-sm text-gray-200 font-sans space-y-1.5 leading-relaxed">
              <p>Ward No. 5, Gram Post,</p>
              <p>Sipat Ujwal Nagar,</p>
              <p>Bilaspur. Chhattisgarh</p>
              <p>Pin-Code: 495555</p>
              <p className="pt-2">
                <a href="mailto:inamigosfoundation@gmail.com" className="hover:text-[#4CAF50] transition-colors underline decoration-[#4CAF50]/40">
                  inamigosfoundation@gmail.com
                </a>
              </p>
              <p className="font-medium text-white pt-1">
                <a href="tel:+916267309902" className="hover:text-[#4CAF50] transition-colors">
                  +91 626 730 9902
                </a>
              </p>
            </div>

            {/* Email Address Newsletter Box matching screenshot */}
            <form onSubmit={handleSubscribe} className="pt-2">
              <div className="relative max-w-sm">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-[#2a2d35] border border-transparent text-white placeholder-gray-400 text-sm focus:outline-none focus:border-[#4CAF50] pr-12 shadow-inner transition-colors"
                />
                <button
                  type="submit"
                  aria-label="Subscribe with Email Address"
                  className="absolute right-2 top-1.5 bottom-1.5 px-3 rounded-md text-white hover:text-[#4CAF50] flex items-center justify-center transition-all duration-300 group"
                >
                  <Send className="w-5 h-5 fill-current transition-transform duration-300 group-hover:scale-110" />
                </button>
              </div>
              {subscribed && (
                <div className="text-xs text-[#4CAF50] font-medium flex items-center gap-1 mt-2 animate-in fade-in">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Thank you for staying connected with InAmigos!</span>
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Bottom Copyright & Legal */}
        <div className="pt-8 mt-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400 font-sans">
          <div className="flex items-center gap-1">
            <span>&copy; {new Date().getFullYear()} InAmigos Foundation. Section 8 Registered Non-Profit (80G & 12A Certified).</span>
          </div>

          <div className="flex items-center space-x-6">
            <a
              href="#privacy"
              onClick={(e) => { e.preventDefault(); alert("InAmigos Foundation Privacy Policy: We strictly protect donor privacy. All transactions are SSL encrypted and 80G compliant."); }}
              className="hover:text-gray-300 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#terms"
              onClick={(e) => { e.preventDefault(); alert("Terms of Service: InAmigos Foundation is licensed by the Central Government under the Companies Act 2013."); }}
              className="hover:text-gray-300 transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#transparency"
              onClick={(e) => { e.preventDefault(); alert("ISO 9001:2015 / NITI Aayog / CSR-1 Registered. 100% financial transparency guaranteed."); }}
              className="hover:text-gray-300 transition-colors flex items-center gap-1"
            >
              <span>Accreditations</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
