import React from 'react';
import { Phone, ArrowRight, ShieldCheck, Wrench, Zap, CheckCircle2, MapPin, AlertCircle, Clock } from 'lucide-react';
import { BUSINESS_INFO, SERVICES, SERVICE_AREAS } from '../data/businessInfo';
import { APP_IMAGES } from '../data/images';
import { PageId } from '../components/Header';

interface HomePageProps {
  onNavigate: (page: PageId, serviceId?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-24 pb-20">
      
      {/* 1. HERO SECTION: Editorial split layout */}
      <section className="pt-8 sm:pt-14 pb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Unboxed Metadata / Kicker (Zero-Pill Rule) */}
              <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-[#58605A]">
                <span className="text-[#C8602B] font-semibold">Residential Electrical Services</span>
                <span aria-hidden="true">·</span>
                <span>Gulgasht Colony</span>
                <span aria-hidden="true">·</span>
                <span>Multan, Pakistan</span>
              </div>

              {/* Display Headline */}
              <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-bold text-[#153323] tracking-tight leading-[1.12] text-balance">
                Safe Electrical Installation & Fault Repair for Multan Homes
              </h1>

              {/* Value Proposition */}
              <p className="text-base sm:text-lg text-[#58605A] leading-relaxed max-w-2xl">
                Sheraz Electric provides dependable residential electrical troubleshooting, conduit wiring, switchboard fittings, and lighting repairs based in Gulgasht Colony, Multan. We focus on proper cable capacities, secure terminations, and safe household diagnostics.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href={BUSINESS_INFO.phoneDial}
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#C8602B] hover:bg-[#B85220] text-white text-base font-semibold rounded-lg shadow-sm transition-colors whitespace-nowrap shrink-0"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call for Electrical Service</span>
                </a>
                
                <button
                  onClick={() => onNavigate('services')}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#F4EFE6] hover:bg-[#EBE3D7] text-[#153323] text-base font-medium rounded-lg border border-[#E8E2D5] transition-colors cursor-pointer whitespace-nowrap shrink-0"
                >
                  <span>Explore Services</span>
                  <ArrowRight className="w-4 h-4 text-[#C8602B]" />
                </button>
              </div>

              {/* Direct Location Trust Signal */}
              <div className="pt-4 border-t border-[#E8E2D5] flex items-center gap-3 text-xs sm:text-sm text-[#58605A]">
                <MapPin className="w-4 h-4 text-[#C8602B] shrink-0" />
                <span>Operating from {BUSINESS_INFO.street}, {BUSINESS_INFO.subArea}, {BUSINESS_INFO.mainArea}, Multan</span>
              </div>

            </div>

            {/* Right Media Column */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-[#E8E2D5] bg-[#F4EFE6]">
                <img
                  src={APP_IMAGES.heroElectrician}
                  alt="Electrician safely testing residential distribution panel and circuit breaker integrity with insulated instruments"
                  className="w-full h-[400px] sm:h-[480px] object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="p-4 bg-[#FAF8F5] border-t border-[#E8E2D5]">
                  <p className="text-xs text-[#58605A] leading-relaxed">
                    <strong className="text-[#153323] font-semibold">Diagnostic Inspection:</strong> Isolating circuit breaker tripping and verifying phase-neutral balance in domestic distribution boards.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. SERVICES OVERVIEW: Clean editorial showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-semibold text-[#C8602B] uppercase tracking-wider mb-2">
              Capabilities
            </div>
            <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-[#153323]">
              Core Electrical Services
            </h2>
            <p className="text-sm text-[#58605A] mt-2 max-w-xl">
              Professional residential installation and repair categories. Contact us to schedule an on-site visit in Multan.
            </p>
          </div>
          <button
            onClick={() => onNavigate('services')}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#C8602B] hover:text-[#B85220] transition-colors cursor-pointer shrink-0"
          >
            <span>View Full Service Scope</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((srv, idx) => (
            <div
              key={srv.id}
              className="bg-white rounded-xl p-6 border border-[#E8E2D5] hover:border-[#C8602B]/50 transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs text-[#58605A]">
                  <span className="font-mono-numbers text-[#C8602B] font-semibold">
                    0{idx + 1}
                  </span>
                  <span>{srv.categoryName}</span>
                </div>
                <h3 className="font-editorial text-xl font-bold text-[#153323] leading-snug">
                  {srv.title}
                </h3>
                <p className="text-sm text-[#58605A] leading-relaxed">
                  {srv.shortDescription}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#F4EFE6] flex items-center justify-between">
                <span className="text-xs text-[#58605A]">Residential service</span>
                <button
                  onClick={() => onNavigate('services', srv.id)}
                  className="text-xs font-semibold text-[#C8602B] hover:text-[#B85220] transition-colors cursor-pointer inline-flex items-center gap-1"
                >
                  <span>Learn more</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. IMPORTANCE OF SAFE ELECTRICAL WORK: Deep forest-green section */}
      <section className="bg-[#153323] text-[#FAF8F5] py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#C8602B] uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                <span>Safety Principles</span>
              </div>
              <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-[#FAF8F5] leading-tight text-balance">
                Why Professional Electrical Work Is Vital for Your Household
              </h2>
              <p className="text-base text-[#D1DDD6] leading-relaxed">
                In residential electrical systems, undersized cables, loose neutral connections, and substandard terminal joints cause unseen resistance that leads to extreme heat, insulation breakdown, and fire hazards.
              </p>
              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#1E4430] flex items-center justify-center shrink-0 mt-0.5 text-[#C8602B]">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#FAF8F5]">Matched Cable Capacities</h4>
                    <p className="text-xs text-[#D1DDD6] mt-0.5">Heavy appliances such as air conditioners and electric geysers require dedicated copper conductors rated for continuous load.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#1E4430] flex items-center justify-center shrink-0 mt-0.5 text-[#C8602B]">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#FAF8F5]">Tightly Torqued Terminations</h4>
                    <p className="text-xs text-[#D1DDD6] mt-0.5">Loose screws in switchboards and distribution boxes produce micro-arcing that melts faceplates and trips breakers.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#1E4430] flex items-center justify-center shrink-0 mt-0.5 text-[#C8602B]">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#FAF8F5]">Earthing & Grounding Protection</h4>
                    <p className="text-xs text-[#D1DDD6] mt-0.5">Functional grounding channels stray fault currents safely away from humans to prevent lethal shocks.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => onNavigate('safety')}
                  className="inline-flex items-center gap-2 px-5 py-3 bg-[#FAF8F5] hover:bg-[#F4EFE6] text-[#153323] text-sm font-semibold rounded-lg transition-colors cursor-pointer"
                >
                  <span>Read the Full Electrical Safety Guide</span>
                  <ArrowRight className="w-4 h-4 text-[#C8602B]" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-xl overflow-hidden border border-[#1E4430] shadow-xl">
                <img
                  src={APP_IMAGES.safetyDistributionPanel}
                  alt="Modern consumer unit distribution board with neatly installed circuit breakers and earth bar"
                  className="w-full h-[380px] sm:h-[440px] object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. THREE-STEP PROCESS: Clean numbered steps */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs font-semibold text-[#C8602B] uppercase tracking-wider mb-2">
            Service Workflow
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-[#153323]">
            How We Complete Your Electrical Request
          </h2>
          <p className="text-sm text-[#58605A] mt-2">
            A straightforward process designed to address your electrical repair or installation promptly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="bg-[#F4EFE6] p-8 rounded-xl border border-[#E8E2D5] space-y-4">
            <span className="font-mono-numbers text-3xl font-bold text-[#C8602B]">
              01
            </span>
            <h3 className="font-editorial text-xl font-bold text-[#153323]">
              Describe the Issue
            </h3>
            <p className="text-sm text-[#58605A] leading-relaxed">
              Call us directly at <a href={BUSINESS_INFO.phoneDial} className="text-[#C8602B] font-medium underline underline-offset-2">{BUSINESS_INFO.phoneFormatted}</a> or submit an inquiry with your location in Multan and description of the electrical fault or fixture requirement.
            </p>
          </div>

          <div className="bg-[#F4EFE6] p-8 rounded-xl border border-[#E8E2D5] space-y-4">
            <span className="font-mono-numbers text-3xl font-bold text-[#C8602B]">
              02
            </span>
            <h3 className="font-editorial text-xl font-bold text-[#153323]">
              Arrange a Visit
            </h3>
            <p className="text-sm text-[#58605A] leading-relaxed">
              We coordinate an on-site visit to your residence in Gulgasht Colony, New Sabzazar, or surrounding Multan areas at a mutually agreed time for direct visual inspection.
            </p>
          </div>

          <div className="bg-[#F4EFE6] p-8 rounded-xl border border-[#E8E2D5] space-y-4">
            <span className="font-mono-numbers text-3xl font-bold text-[#C8602B]">
              03
            </span>
            <h3 className="font-editorial text-xl font-bold text-[#153323]">
              Complete the Work
            </h3>
            <p className="text-sm text-[#58605A] leading-relaxed">
              We execute the diagnostic testing, conduit wiring, fixture mounting, or switchboard replacement with clean craftsmanship and test the circuit before restoring full power.
            </p>
          </div>

        </div>
      </section>

      {/* 5. MULTAN SERVICE AREA: Factual, focused */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl p-8 sm:p-12 border border-[#E8E2D5] shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5 space-y-4">
              <div className="text-xs font-semibold text-[#C8602B] uppercase tracking-wider">
                Local Multan Coverage
              </div>
              <h2 className="font-editorial text-3xl font-bold text-[#153323]">
                Service Area in Multan
              </h2>
              <p className="text-sm text-[#58605A] leading-relaxed">
                Sheraz Electric is situated on Al Madina Street in New Sabzazar Colony, Gulgasht Colony, Multan. We focus our residential call-outs within Multan city neighborhoods to provide punctual attendance.
              </p>
              <div className="pt-2">
                <a
                  href={BUSINESS_INFO.phoneDial}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#C8602B] hover:text-[#B85220]"
                >
                  <span>Confirm availability for your street</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {SERVICE_AREAS.map((area) => (
                <div key={area.name} className="p-4 rounded-lg bg-[#FAF8F5] border border-[#E8E2D5]">
                  <div className="flex items-center gap-2 text-sm font-semibold text-[#153323]">
                    <MapPin className="w-4 h-4 text-[#C8602B] shrink-0" />
                    <span>{area.name}</span>
                  </div>
                  <p className="text-xs text-[#58605A] mt-1 pl-6">
                    {area.detail}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 6. PROMINENT CONTACT CALLOUT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#153323] text-[#FAF8F5] rounded-2xl p-8 sm:p-12 border border-[#1E4430] flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center md:text-left">
            <h2 className="font-editorial text-2xl sm:text-3xl font-bold">
              Require Residential Electrical Assistance?
            </h2>
            <p className="text-sm text-[#D1DDD6] max-w-xl">
              Contact Sheraz Electric directly on our verified phone number or submit an inquiry form for review.
            </p>
            <p className="text-xs text-[#9BB1A6] pt-1">
              {BUSINESS_INFO.fullAddress}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full sm:w-auto">
            <a
              href={BUSINESS_INFO.phoneDial}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#C8602B] hover:bg-[#B85220] text-white text-base font-semibold rounded-lg transition-colors shadow-sm"
            >
              <Phone className="w-5 h-5" />
              <span>Call {BUSINESS_INFO.phoneFormatted}</span>
            </a>
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center justify-center px-6 py-3.5 bg-white/10 hover:bg-white/15 text-white text-base font-medium rounded-lg transition-colors cursor-pointer border border-white/20"
            >
              Send Inquiry Form
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
