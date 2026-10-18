import React from 'react';
import { Phone, MapPin, AlertTriangle, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';
import { PageId } from './Header';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#153323] text-[#FAF8F5] pt-16 pb-12 border-t border-[#1E4430]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-[#1E4430]">
          
          {/* Brand & Verified Profile */}
          <div className="md:col-span-5 space-y-4">
            <span className="font-editorial text-2xl font-bold tracking-tight text-[#FAF8F5] block">
              {BUSINESS_INFO.name}
            </span>
            <p className="text-sm text-[#D1DDD6] max-w-md leading-relaxed">
              Residential electrical installation, fault troubleshooting, wiring, switchboards, and fan fitting services in Gulgasht Colony and central Multan, Pakistan.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-[#9BB1A6]">
              <ShieldCheck className="w-4 h-4 text-[#C8602B] shrink-0" />
              <span>Prioritizing safe circuit practices & neat residential installation</span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-wider text-[#9BB1A6] font-semibold">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => { onNavigate('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="text-[#D1DDD6] hover:text-[#FAF8F5] transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('services'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="text-[#D1DDD6] hover:text-[#FAF8F5] transition-colors cursor-pointer"
                >
                  Electrical Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('safety'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="text-[#D1DDD6] hover:text-[#FAF8F5] transition-colors cursor-pointer"
                >
                  Safety Guide
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('about'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="text-[#D1DDD6] hover:text-[#FAF8F5] transition-colors cursor-pointer"
                >
                  About the Business
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="text-[#D1DDD6] hover:text-[#FAF8F5] transition-colors cursor-pointer"
                >
                  Contact & Inquiries
                </button>
              </li>
            </ul>
          </div>

          {/* Verified Contact Details */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs uppercase tracking-wider text-[#9BB1A6] font-semibold">
              Contact & Location
            </h4>
            <div className="space-y-3 text-sm text-[#D1DDD6]">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#C8602B] mt-1 shrink-0" />
                <span>{BUSINESS_INFO.fullAddress}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#C8602B] shrink-0" />
                <a
                  href={BUSINESS_INFO.phoneDial}
                  className="hover:text-[#FAF8F5] transition-colors font-medium font-mono-numbers text-base underline decoration-[#C8602B]/60 underline-offset-4"
                >
                  {BUSINESS_INFO.phoneFormatted}
                </a>
              </div>
            </div>
            <div className="pt-2">
              <a
                href={BUSINESS_INFO.phoneDial}
                className="inline-block px-4 py-2 bg-[#C8602B] hover:bg-[#B85220] text-white text-xs font-medium rounded-md transition-colors"
              >
                Call for Electrical Service
              </a>
            </div>
          </div>
        </div>

        {/* Electrical Safety Disclaimer */}
        <div className="mt-8 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#8BA496]">
          <div className="flex items-start gap-2 max-w-2xl">
            <AlertTriangle className="w-4 h-4 text-[#C8602B] shrink-0 mt-0.5" />
            <p>
              Electrical safety advisory: Live domestic circuits carry severe electric shock and fire hazards. Always de-energize the main double-pole breaker before inspecting any appliance, fixture, or wiring. Never attempt live repairs.
            </p>
          </div>
          <div className="text-right shrink-0">
            <p>© {new Date().getFullYear()} {BUSINESS_INFO.name}. Multan, Pakistan.</p>
          </div>
        </div>

      </div>
    </footer>
  );
};
