import React from 'react';
import { Phone, ArrowRight, CheckCircle2, AlertCircle, Wrench, Shield, Info } from 'lucide-react';
import { BUSINESS_INFO, SERVICES, ServiceItem } from '../data/businessInfo';
import { APP_IMAGES } from '../data/images';
import { PageId } from '../components/Header';

interface ServicesPageProps {
  onNavigate: (page: PageId, serviceId?: string) => void;
  selectedServiceId?: string;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate, selectedServiceId }) => {
  return (
    <div className="space-y-20 pb-20">
      
      {/* 1. Page Header */}
      <section className="pt-8 sm:pt-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            
            {/* Unboxed Metadata (Zero-Pill Rule) */}
            <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-[#58605A]">
              <span>Sheraz Electric</span>
              <span aria-hidden="true">·</span>
              <span className="text-[#C8602B]">Residential Scope</span>
              <span aria-hidden="true">·</span>
              <span>Multan, Pakistan</span>
            </div>

            <h1 className="font-editorial text-4xl sm:text-5xl font-bold text-[#153323] tracking-tight">
              Electrical Installation & Repair Services
            </h1>

            <p className="text-base sm:text-lg text-[#58605A] leading-relaxed">
              We provide domestic electrical troubleshooting, wiring replacements, switchboard fittings, and preventative inspections tailored to homes and residential apartments across Multan.
            </p>

            {/* Verification Notice required by business brief */}
            <div className="mt-4 p-4 rounded-xl bg-[#F4EFE6] border border-[#E8E2D5] flex items-start gap-3 text-xs sm:text-sm text-[#58605A]">
              <Info className="w-5 h-5 text-[#C8602B] shrink-0 mt-0.5" />
              <p>
                <strong>Editorial Notice:</strong> The services listed below represent verified residential electrical service categories presented for review with the business owner prior to publication. Sheraz Electric focuses strictly on domestic electrical trade work; we do not advertise unverified industrial high-voltage work, 24/7 emergency dispatch claims, smart-home automation, or solar panel installations.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Visual Context Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-2xl overflow-hidden border border-[#E8E2D5] bg-[#F4EFE6] relative group">
            <img
              src={APP_IMAGES.serviceWiringTools}
              alt="Calibrated insulated electrician tools, digital multimeter, wire strippers and copper wire for safe home wiring"
              className="w-full h-64 sm:h-80 object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="p-4 bg-white border-t border-[#E8E2D5]">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#C8602B]">Diagnostic Equipment</span>
              <p className="text-xs text-[#58605A] mt-1">
                Insulated tools and multimeter testing for accurate load and continuity measurement.
              </p>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden border border-[#E8E2D5] bg-[#F4EFE6] relative group">
            <img
              src={APP_IMAGES.serviceLightingSwitches}
              alt="Modern clean wall lighting and flush rocker switch installation on an ivory wall"
              className="w-full h-64 sm:h-80 object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="p-4 bg-white border-t border-[#E8E2D5]">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#C8602B]">Finishing & Mounting</span>
              <p className="text-xs text-[#58605A] mt-1">
                Flush rocker switchplates, chandeliers, downlights, and socket installations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Detailed Service Sections */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {SERVICES.map((srv, idx) => {
            const isHighlighted = selectedServiceId === srv.id;
            return (
              <div
                key={srv.id}
                id={`service-${srv.id}`}
                className={`rounded-2xl p-6 sm:p-8 border transition-all ${
                  isHighlighted
                    ? 'bg-white border-[#C8602B] shadow-md ring-2 ring-[#C8602B]/20'
                    : 'bg-white border-[#E8E2D5] hover:border-[#C8602B]/40'
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  {/* Left Column: Number, Title, Description */}
                  <div className="lg:col-span-7 space-y-4">
                    <div className="flex items-center gap-3 text-xs text-[#58605A]">
                      <span className="font-mono-numbers text-lg font-bold text-[#C8602B]">
                        0{idx + 1}
                      </span>
                      <span aria-hidden="true">/</span>
                      <span className="font-medium uppercase tracking-wider text-[#153323]">{srv.categoryName}</span>
                    </div>

                    <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#153323]">
                      {srv.title}
                    </h2>

                    <p className="text-sm sm:text-base text-[#58605A] leading-relaxed">
                      {srv.fullDescription}
                    </p>

                    {/* Scope Points */}
                    <div className="pt-2">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-[#153323] mb-3">
                        Work Typically Included
                      </h4>
                      <ul className="space-y-2">
                        {srv.scopePoints.map((point, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#58605A]">
                            <CheckCircle2 className="w-4 h-4 text-[#C8602B] shrink-0 mt-0.5" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Right Column: Practical Context & Action Box */}
                  <div className="lg:col-span-5 bg-[#FAF8F5] p-6 rounded-xl border border-[#E8E2D5] space-y-5">
                    
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-[#58605A]">
                        Recommended When
                      </span>
                      <p className="text-xs sm:text-sm text-[#1E2320] mt-1 font-medium">
                        {srv.recommendedWhen}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-[#E8E2D5]">
                      <span className="text-xs font-semibold uppercase tracking-wider text-[#58605A]">
                        Practical Notes
                      </span>
                      <p className="text-xs text-[#58605A] mt-1">
                        {srv.turnaroundNote}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-[#E8E2D5] flex flex-col gap-2.5">
                      <button
                        onClick={() => onNavigate('contact', srv.id)}
                        className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#C8602B] hover:bg-[#B85220] text-white text-xs sm:text-sm font-semibold rounded-lg transition-colors cursor-pointer"
                      >
                        <span>Inquire About This Service</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                      <a
                        href={BUSINESS_INFO.phoneDial}
                        className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-white hover:bg-[#F4EFE6] text-[#153323] text-xs sm:text-sm font-medium rounded-lg border border-[#E8E2D5] transition-colors"
                      >
                        <Phone className="w-4 h-4 text-[#C8602B]" />
                        <span>Direct Call: {BUSINESS_INFO.phoneFormatted}</span>
                      </a>
                    </div>

                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. Service Boundaries & Quality Callout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-2xl bg-[#153323] text-[#FAF8F5] border border-[#1E4430] grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-8 space-y-2">
            <h3 className="font-editorial text-2xl font-bold">
              Looking for a Specific Domestic Electrical Fitting?
            </h3>
            <p className="text-sm text-[#D1DDD6] leading-relaxed">
              Whether you need replacement sockets, circuit breaker diagnosis, or a ceiling fan mounted safely, reach out directly with your requirements in Gulgasht Colony or central Multan.
            </p>
          </div>
          <div className="md:col-span-4 flex flex-col gap-3">
            <a
              href={BUSINESS_INFO.phoneDial}
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#C8602B] hover:bg-[#B85220] text-white text-sm font-semibold rounded-lg transition-colors text-center"
            >
              <Phone className="w-4 h-4" />
              <span>Call {BUSINESS_INFO.phoneFormatted}</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
