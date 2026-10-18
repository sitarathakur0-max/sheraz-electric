import React from 'react';
import { Phone, MapPin, Shield, CheckCircle2, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';
import { APP_IMAGES } from '../data/images';
import { PageId } from '../components/Header';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-20 pb-20">
      
      {/* 1. Page Header */}
      <section className="pt-8 sm:pt-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            
            <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-[#58605A]">
              <span>Business Profile</span>
              <span aria-hidden="true">·</span>
              <span className="text-[#C8602B]">Local Trades</span>
              <span aria-hidden="true">·</span>
              <span>Multan, Pakistan</span>
            </div>

            <h1 className="font-editorial text-4xl sm:text-5xl font-bold text-[#153323] tracking-tight">
              About Sheraz Electric
            </h1>

            <p className="text-base sm:text-lg text-[#58605A] leading-relaxed">
              Sheraz Electric is an electrical installation and repair service operating from Gulgasht Colony in Multan, Pakistan, providing straightforward residential electrical workmanship for local homeowners and tenants.
            </p>

          </div>
        </div>
      </section>

      {/* 2. Editorial Narrative & Visual */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#153323]">
              Dedicated to Practical Household Electrical Work
            </h2>
            
            <div className="space-y-4 text-sm sm:text-base text-[#58605A] leading-relaxed">
              <p>
                Based on Al Madina Street within New Sabzazar Colony, Gulgasht Colony, Sheraz Electric focuses on meeting everyday residential electrical needs in Multan. Whether a home requires troubleshooting intermittent circuit breaker trips, fitting new lighting fixtures, replacing aged conduit wiring, or installing ceiling fans securely, our approach centers on safety, methodical fault isolation, and tidy installation.
              </p>
              <p>
                Electrical circuits in domestic properties handle substantial seasonal power draws—from multiple air cooling units and refrigerators during peak summer months to electric geysers and heaters in winter. Ensuring connections are tight, cables are appropriately sized for appliance wattage, and distribution boards remain balanced is essential to prevent circuit failures and home fire risks.
              </p>
            </div>

            <div className="pt-2 border-t border-[#E8E2D5] space-y-3">
              <h3 className="text-xs uppercase tracking-wider font-semibold text-[#153323]">
                Core Working Principles
              </h3>
              <ul className="space-y-2 text-sm text-[#58605A]">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C8602B] shrink-0 mt-0.5" />
                  <span><strong>Safety-Focused Workmanship:</strong> Checking circuit de-energization before physical testing and ensuring all copper connections are mechanically secure.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C8602B] shrink-0 mt-0.5" />
                  <span><strong>Transparent Diagnostics:</strong> Clearly explaining what caused a breaker to trip or a socket to fail before proceeding with replacement.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C8602B] shrink-0 mt-0.5" />
                  <span><strong>Local Punctuality:</strong> Serving the Gulgasht Colony neighborhood and surrounding residential sectors in Multan promptly.</span>
                </li>
              </ul>
            </div>

          </div>

          <div className="lg:col-span-6">
            <div className="rounded-2xl overflow-hidden border border-[#E8E2D5] shadow-md bg-white">
              <img
                src={APP_IMAGES.serviceWiringTools}
                alt="Essential insulated electrical testing equipment and wire tools on wooden workbench"
                className="w-full h-80 sm:h-96 object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="p-6 bg-[#FAF8F5] border-t border-[#E8E2D5] space-y-3">
                <div className="text-xs font-semibold uppercase tracking-wider text-[#C8602B]">
                  Verified Business Information
                </div>
                <div className="space-y-2 text-sm text-[#1E2320]">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-[#C8602B] mt-0.5 shrink-0" />
                    <span><strong>Address:</strong> {BUSINESS_INFO.fullAddress}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-[#C8602B] shrink-0" />
                    <span><strong>Contact Number:</strong> {BUSINESS_INFO.phoneFormatted}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Scope of Service Transparency */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#F4EFE6] rounded-2xl p-8 sm:p-10 border border-[#E8E2D5] space-y-4">
          <h3 className="font-editorial text-2xl font-bold text-[#153323]">
            Verified Service Scope
          </h3>
          <p className="text-sm text-[#58605A] leading-relaxed max-w-3xl">
            In compliance with our commitment to factual, transparent representation, Sheraz Electric publishes service categories directly aligned with local residential trade capabilities. We do not make unverified claims regarding large-scale industrial projects, commercial high-voltage substations, automated smart systems, or solar generation plants.
          </p>
          <div className="pt-2 flex flex-wrap gap-4">
            <button
              onClick={() => onNavigate('services')}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#153323] hover:bg-[#0D2217] text-white text-xs sm:text-sm font-medium rounded-lg transition-colors cursor-pointer"
            >
              <span>Explore Verified Services</span>
              <ArrowRight className="w-4 h-4 text-[#C8602B]" />
            </button>
            <a
              href={BUSINESS_INFO.phoneDial}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-white hover:bg-[#FAF8F5] text-[#153323] text-xs sm:text-sm font-medium rounded-lg border border-[#E8E2D5] transition-colors"
            >
              <Phone className="w-4 h-4 text-[#C8602B]" />
              <span>Direct Phone: {BUSINESS_INFO.phoneFormatted}</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
