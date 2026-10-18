import React, { useState } from 'react';
import { Phone, Menu, X, ShieldAlert } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';

export type PageId = 'home' | 'services' | 'safety' | 'about' | 'contact';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId, serviceId?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'safety', label: 'Safety Guide' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (id: PageId) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#E8E2D5]">
      {/* Top Bar Contract: 3 zones separated by gap-8: [Wordmark] - [Nav links] - [Primary CTA] */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        
        {/* Zone 1: Single text element wordmark */}
        <button
          onClick={() => handleNavClick('home')}
          className="text-left group cursor-pointer focus:outline-none"
        >
          <span className="font-editorial text-2xl sm:text-3xl font-bold tracking-tight text-[#153323] transition-colors group-hover:text-[#C8602B] whitespace-nowrap shrink-0 block">
            {BUSINESS_INFO.name}
          </span>
        </button>

        {/* Zone 2: 4-5 single-line nav links */}
        <nav className="hidden md:flex items-center gap-7">
          {navItems.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-sm font-medium transition-colors cursor-pointer py-1 whitespace-nowrap shrink-0 border-b-2 ${
                  isActive
                    ? 'text-[#153323] border-[#C8602B] font-semibold'
                    : 'text-[#58605A] border-transparent hover:text-[#153323] hover:border-[#E8E2D5]'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: 1 primary CTA action */}
        <div className="hidden sm:flex items-center gap-4 shrink-0">
          <a
            href={BUSINESS_INFO.phoneDial}
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#C8602B] hover:bg-[#B85220] text-white text-sm font-medium rounded-lg transition-colors shadow-sm whitespace-nowrap shrink-0"
            title={`Call ${BUSINESS_INFO.phoneFormatted}`}
          >
            <Phone className="w-4 h-4" />
            <span>Call {BUSINESS_INFO.phoneFormatted}</span>
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href={BUSINESS_INFO.phoneDial}
            className="p-2.5 bg-[#C8602B] text-white rounded-lg"
            aria-label="Call Sheraz Electric"
          >
            <Phone className="w-4 h-4" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 text-[#1E2320] hover:bg-[#F4EFE6] rounded-lg transition-colors"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF8F5] border-b border-[#E8E2D5] px-4 pt-3 pb-6 shadow-lg animate-in fade-in duration-150">
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left px-3 py-2.5 text-base font-medium rounded-md transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-[#153323] text-white'
                      : 'text-[#1E2320] hover:bg-[#F4EFE6]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
            <div className="pt-3 border-t border-[#E8E2D5]">
              <a
                href={BUSINESS_INFO.phoneDial}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-[#C8602B] hover:bg-[#B85220] text-white text-base font-medium rounded-lg transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>Call {BUSINESS_INFO.phoneFormatted}</span>
              </a>
              <p className="text-xs text-[#58605A] mt-2 text-center">
                Al Madina St, New Sabzazar Colony, Gulgasht, Multan
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
