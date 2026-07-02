import React, { useState } from 'react';
import { Sprout, Mail, Phone, MapPin, Send, CheckCircle2, Heart, ExternalLink } from 'lucide-react';

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

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Who We Are', href: '#about' },
    { name: 'Our Initiatives', href: '#projects' },
    { name: 'Verified Impact', href: '#impact' },
    { name: 'Get Involved', href: '#get-involved' },
  ];

  const focusAreas = [
    { name: 'Digital Classrooms (Gyan)', href: '#projects' },
    { name: 'Mobile Clinics (Swasthya)', href: '#projects' },
    { name: 'Clean Water (Jal Dharohar)', href: '#projects' },
    { name: 'Women Artisans (Sakhi)', href: '#projects' },
    { name: 'Agroforestry (Harita Bhumi)', href: '#projects' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#152317] dark:bg-[#0b140c] text-gray-300 transition-colors duration-300 border-t border-green-900/60 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top 4 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-16 border-b border-green-900/60">
          
          {/* Column 1: Brand & About (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#home" onClick={(e) => scrollToSection(e, '#home')} className="flex items-center gap-2.5 group">
              <div className="w-10 h-10 rounded-full bg-[#4CAF50] text-white flex items-center justify-center shadow-md">
                <Sprout className="w-6 h-6" />
              </div>
              <span className="font-heading font-bold text-2xl text-white tracking-tight">
                In<span className="text-[#4CAF50]">Amigos</span>
              </span>
            </a>
            
            <p className="font-sans text-sm text-gray-400 leading-relaxed max-w-sm">
              InAmigos is a registered non-profit organization dedicated to creating sustainable social impact through education, healthcare, clean water, and community livelihood initiatives.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-[#C8E6C9] font-medium">
              <CheckCircle2 className="w-4 h-4 text-[#4CAF50]" />
              <span>Registered 501(c)(3) Global Charity</span>
            </div>

            {/* Social Icons */}
            <div className="pt-3 flex items-center space-x-3">
              {['Twitter / X', 'Facebook', 'Instagram', 'LinkedIn', 'YouTube'].map((platform, i) => (
                <a
                  key={platform}
                  href={`#${platform.toLowerCase()}`}
                  onClick={(e) => {
                    e.preventDefault();
                    alert(`Opening official InAmigos ${platform} community channel...`);
                  }}
                  aria-label={platform}
                  title={platform}
                  className="w-9 h-9 rounded-full bg-green-900/40 hover:bg-[#4CAF50] text-gray-300 hover:text-white flex items-center justify-center transition-all duration-200 hover:scale-110 text-xs font-bold"
                >
                  {platform[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="font-heading font-bold text-base text-white uppercase tracking-wider text-[#4CAF50]">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="text-sm text-gray-400 hover:text-[#4CAF50] transition-colors flex items-center gap-1.5"
                  >
                    <span>&rsaquo;</span>
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Focus Areas (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="font-heading font-bold text-base text-white uppercase tracking-wider text-[#4CAF50]">
              Our Initiatives
            </h3>
            <ul className="space-y-2.5">
              {focusAreas.map((area) => (
                <li key={area.name}>
                  <a
                    href={area.href}
                    onClick={(e) => scrollToSection(e, area.href)}
                    className="text-sm text-gray-400 hover:text-[#4CAF50] transition-colors flex items-center gap-1.5"
                  >
                    <span>&rsaquo;</span>
                    <span>{area.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Newsletter (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-heading font-bold text-base text-white uppercase tracking-wider text-[#4CAF50]">
              Stay Connected
            </h3>
            
            <p className="text-xs text-gray-400 leading-relaxed font-sans">
              Subscribe to our monthly field dispatch for verified project milestones and volunteer stories.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email..."
                  required
                  className="w-full px-4 py-2.5 rounded-xl bg-green-950/60 border border-green-800 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#4CAF50] pr-10"
                />
                <button
                  type="submit"
                  aria-label="Subscribe to newsletter"
                  className="absolute right-1 top-1 bottom-1 px-3 rounded-lg bg-[#4CAF50] hover:bg-[#45a049] text-white flex items-center justify-center transition-colors"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
              {subscribed && (
                <div className="text-xs text-[#4CAF50] font-medium flex items-center gap-1 animate-in fade-in">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Thank you for subscribing to our field updates!</span>
                </div>
              )}
            </form>

            <div className="pt-2 space-y-2 text-xs text-gray-400 font-sans">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#4CAF50] shrink-0 mt-0.5" />
                <span>Global HQ: Community Towers, Bangalore & NY</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#4CAF50] shrink-0" />
                <span>+1 (800) 555-NGO1 / +91 80 4567 8900</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#4CAF50] shrink-0" />
                <span>contact@inamigos-ngo.org</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Legal */}
        <div className="pt-8 mt-8 border-t border-[#C8E6C9]/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400 font-sans">
          <div className="flex items-center gap-1">
            <span>&copy; {new Date().getFullYear()} InAmigos NGO. All rights reserved. Built with love</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-current inline" />
            <span>for sustainable community development.</span>
          </div>

          <div className="flex items-center space-x-6">
            <a
              href="#privacy"
              onClick={(e) => { e.preventDefault(); alert("InAmigos strictly protects donor privacy and never sells contact data."); }}
              className="hover:text-gray-300 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#terms"
              onClick={(e) => { e.preventDefault(); alert("Terms of Service: All donations directly fund field projects as reported in annual audits."); }}
              className="hover:text-gray-300 transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#transparency"
              onClick={(e) => { e.preventDefault(); alert("Financial Transparency: View our IRS Form 990 and FCRA filings online."); }}
              className="hover:text-gray-300 transition-colors flex items-center gap-1"
            >
              <span>Financial Filings</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
