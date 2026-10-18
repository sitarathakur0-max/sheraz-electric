import React, { useState, useEffect } from 'react';
import { Header, PageId } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { SafetyGuidePage } from './pages/SafetyGuidePage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [selectedServiceId, setSelectedServiceId] = useState<string | undefined>(undefined);

  // Synchronize with URL hash for navigation and bookmarking
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (hash.startsWith('services')) {
        const parts = hash.split('/');
        setCurrentPage('services');
        if (parts[1]) setSelectedServiceId(parts[1]);
      } else if (hash.startsWith('contact')) {
        const parts = hash.split('/');
        setCurrentPage('contact');
        if (parts[1]) setSelectedServiceId(parts[1]);
      } else if (hash === 'safety') {
        setCurrentPage('safety');
      } else if (hash === 'about') {
        setCurrentPage('about');
      } else {
        setCurrentPage('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Update page title based on active view
  useEffect(() => {
    const titles: Record<PageId, string> = {
      home: 'Sheraz Electric | Electrical Installation & Repair in Multan',
      services: 'Electrical Services | Sheraz Electric Multan',
      safety: 'Electrical Safety Guide | Sheraz Electric Multan',
      about: 'About Us | Sheraz Electric Multan',
      contact: 'Contact & Inquiries | Sheraz Electric Multan'
    };
    document.title = titles[currentPage] || 'Sheraz Electric | Multan';
  }, [currentPage]);

  const handleNavigate = (page: PageId, serviceId?: string) => {
    setSelectedServiceId(serviceId);
    setCurrentPage(page);
    if (serviceId) {
      window.location.hash = `${page}/${serviceId}`;
    } else {
      window.location.hash = page;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#1E2320]">
      {/* 3-zone Header Contract */}
      <Header currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Main Content Viewport */}
      <main className="flex-1">
        {currentPage === 'home' && <HomePage onNavigate={handleNavigate} />}
        {currentPage === 'services' && (
          <ServicesPage onNavigate={handleNavigate} selectedServiceId={selectedServiceId} />
        )}
        {currentPage === 'safety' && <SafetyGuidePage onNavigate={handleNavigate} />}
        {currentPage === 'about' && <AboutPage onNavigate={handleNavigate} />}
        {currentPage === 'contact' && <ContactPage initialServiceId={selectedServiceId} />}
      </main>

      {/* Quiet Editorial Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
