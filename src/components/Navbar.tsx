import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Sprout, Heart, Settings, Monitor, Check } from 'lucide-react';
import { ThemeMode, ModalType } from '../types';

interface NavbarProps {
  isDark: boolean;
  themeMode: ThemeMode;
  onToggleTheme: () => void;
  onSetThemeMode: (mode: ThemeMode) => void;
  onOpenModal: (type: ModalType) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  isDark,
  themeMode,
  onToggleTheme,
  onSetThemeMode,
  onOpenModal
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showSettingsDropdown, setShowSettingsDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Impact', href: '#impact' },
    { name: 'Get Involved', href: '#get-involved' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 dark:bg-[#152317]/95 backdrop-blur-md shadow-md py-3'
          : 'bg-white dark:bg-[#152317] py-4'
      } border-b border-[#C8E6C9] dark:border-green-800/60`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-11">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2.5 group focus:outline-none"
          >
            <div className="w-10 h-10 rounded-full bg-[#4CAF50]/15 dark:bg-[#4CAF50]/20 flex items-center justify-center text-[#4CAF50] group-hover:bg-[#4CAF50] group-hover:text-white transition-all duration-300 shadow-sm">
              <Sprout className="w-6 h-6 transition-transform group-hover:scale-110 duration-300" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-xl sm:text-2xl tracking-tight text-[#2E7D32] dark:text-[#C8E6C9]">
                In<span className="text-[#4CAF50]">Amigos</span>
              </span>
              <span className="text-[10px] tracking-widest uppercase text-gray-500 dark:text-gray-400 font-medium -mt-1">
                Social Impact NGO
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-[#4CAF50] dark:hover:text-[#4CAF50] rounded-lg hover:bg-[#C8E6C9]/30 dark:hover:bg-green-900/30 transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Controls: Dark Mode Toggle + Donate CTA */}
          <div className="hidden sm:flex items-center space-x-3">
            {/* Dynamic Theme Toggle Switch */}
            <div className="relative flex items-center gap-1 bg-[#F5F5F5] dark:bg-[#203623] p-1 rounded-full border border-gray-200 dark:border-green-800/60 shadow-inner">
              <button
                onClick={onToggleTheme}
                aria-label="Toggle dark mode"
                title={`Current: ${isDark ? 'Dark Mode' : 'Light Mode'} (Click to switch)`}
                className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white dark:bg-[#2E7D32] text-gray-800 dark:text-white shadow-sm transition-all duration-300 hover:scale-105"
              >
                {isDark ? (
                  <>
                    <Moon className="w-4 h-4 text-yellow-300 animate-pulse" />
                    <span className="text-xs font-semibold hidden lg:inline">Dark</span>
                  </>
                ) : (
                  <>
                    <Sun className="w-4 h-4 text-amber-500 animate-spin-slow" />
                    <span className="text-xs font-semibold hidden lg:inline">Light</span>
                  </>
                )}
              </button>

              {/* Settings gear for Theme Preferences */}
              <div className="relative">
                <button
                  onClick={() => setShowSettingsDropdown(!showSettingsDropdown)}
                  aria-label="Theme settings"
                  title="Theme Settings & Storage Preferences"
                  className="p-1.5 text-gray-500 dark:text-gray-300 hover:text-[#4CAF50] dark:hover:text-[#4CAF50] rounded-full hover:bg-gray-200 dark:hover:bg-green-800/50 transition-colors"
                >
                  <Settings className="w-4 h-4" />
                </button>

                {/* Settings Dropdown */}
                {showSettingsDropdown && (
                  <>
                    <div
                      className="fixed inset-0 z-40"
                      onClick={() => setShowSettingsDropdown(false)}
                    />
                    <div className="absolute right-0 mt-2 w-56 rounded-xl bg-white dark:bg-[#1c2f1f] shadow-2xl border border-gray-200 dark:border-green-800 p-3 z-50 animate-in fade-in zoom-in-95 duration-200">
                      <div className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2 px-2">
                        Appearance Settings
                      </div>
                      <div className="space-y-1">
                        <button
                          onClick={() => {
                            onSetThemeMode('light');
                            setShowSettingsDropdown(false);
                          }}
                          className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors ${
                            themeMode === 'light'
                              ? 'bg-[#4CAF50]/15 text-[#2E7D32] dark:text-[#C8E6C9] font-medium'
                              : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-green-900/40'
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <Sun className="w-4 h-4 text-amber-500" />
                            <span>Light Theme</span>
                          </div>
                          {themeMode === 'light' && <Check className="w-4 h-4 text-[#4CAF50]" />}
                        </button>

                        <button
                          onClick={() => {
                            onSetThemeMode('dark');
                            setShowSettingsDropdown(false);
                          }}
                          className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors ${
                            themeMode === 'dark'
                              ? 'bg-[#4CAF50]/15 text-[#2E7D32] dark:text-[#C8E6C9] font-medium'
                              : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-green-900/40'
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <Moon className="w-4 h-4 text-yellow-300" />
                            <span>Dark Theme</span>
                          </div>
                          {themeMode === 'dark' && <Check className="w-4 h-4 text-[#4CAF50]" />}
                        </button>

                        <button
                          onClick={() => {
                            onSetThemeMode('system');
                            setShowSettingsDropdown(false);
                          }}
                          className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors ${
                            themeMode === 'system'
                              ? 'bg-[#4CAF50]/15 text-[#2E7D32] dark:text-[#C8E6C9] font-medium'
                              : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-green-900/40'
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <Monitor className="w-4 h-4 text-blue-400" />
                            <span>System Default</span>
                          </div>
                          {themeMode === 'system' && <Check className="w-4 h-4 text-[#4CAF50]" />}
                        </button>
                      </div>

                      <div className="mt-3 pt-2 border-t border-gray-100 dark:border-green-900/40 text-[11px] text-gray-400 dark:text-gray-400 px-2 leading-relaxed">
                        ⚡ Preference saved to your browser session via localStorage.
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Primary CTA Button */}
            <button
              onClick={() => onOpenModal('donate')}
              className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#4CAF50] hover:bg-[#45a049] text-white font-heading font-semibold text-sm shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-200"
            >
              <Heart className="w-4 h-4 fill-current transition-transform group-hover:scale-110 duration-200" />
              <span>Donate Now</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={onToggleTheme}
              className="p-2 rounded-full bg-[#F5F5F5] dark:bg-[#203623] text-gray-800 dark:text-white"
              aria-label="Toggle Theme"
            >
              {isDark ? <Moon className="w-5 h-5 text-yellow-300" /> : <Sun className="w-5 h-5 text-amber-500" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-green-900/40"
              aria-label="Open navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-[#152317] border-b border-gray-200 dark:border-green-900/60 shadow-xl px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-4 py-2.5 rounded-lg text-base font-medium text-gray-800 dark:text-gray-100 hover:bg-[#C8E6C9]/40 dark:hover:bg-green-900/40 hover:text-[#4CAF50]"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-gray-100 dark:border-green-900/40 flex flex-col gap-3">
            <div className="flex items-center justify-between px-3 py-2 bg-gray-50 dark:bg-green-900/20 rounded-lg">
              <span className="text-sm font-medium text-gray-600 dark:text-gray-300">Theme Preference</span>
              <div className="flex gap-1">
                <button
                  onClick={() => onSetThemeMode('light')}
                  className={`px-2.5 py-1 text-xs rounded-md font-medium transition-colors ${
                    themeMode === 'light' ? 'bg-[#4CAF50] text-white' : 'text-gray-600 dark:text-gray-300'
                  }`}
                >
                  Light
                </button>
                <button
                  onClick={() => onSetThemeMode('dark')}
                  className={`px-2.5 py-1 text-xs rounded-md font-medium transition-colors ${
                    themeMode === 'dark' ? 'bg-[#4CAF50] text-white' : 'text-gray-600 dark:text-gray-300'
                  }`}
                >
                  Dark
                </button>
                <button
                  onClick={() => onSetThemeMode('system')}
                  className={`px-2.5 py-1 text-xs rounded-md font-medium transition-colors ${
                    themeMode === 'system' ? 'bg-[#4CAF50] text-white' : 'text-gray-600 dark:text-gray-300'
                  }`}
                >
                  Auto
                </button>
              </div>
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenModal('donate');
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#4CAF50] hover:bg-[#45a049] text-white font-heading font-semibold text-base shadow-md"
            >
              <Heart className="w-5 h-5 fill-current" />
              <span>Donate Now</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
