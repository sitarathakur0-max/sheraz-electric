import React, { useState } from 'react';
import { ShieldAlert, AlertTriangle, CheckCircle2, Phone, HelpCircle, ArrowRight, XCircle, Info, Flame } from 'lucide-react';
import { BUSINESS_INFO, SAFETY_TOPICS } from '../data/businessInfo';
import { APP_IMAGES } from '../data/images';
import { PageId } from '../components/Header';

interface SafetyGuidePageProps {
  onNavigate: (page: PageId) => void;
}

interface SymptomOption {
  id: string;
  label: string;
  severity: 'urgent' | 'warning' | 'advisory';
  instruction: string;
}

const COMMON_SYMPTOMS: SymptomOption[] = [
  {
    id: 'burning-smell',
    label: 'Fishy or burning plastic smell near switches or fuse box',
    severity: 'urgent',
    instruction: 'Critical fire hazard. De-energize the main double-pole breaker immediately. Do not touch charred faceplates.'
  },
  {
    id: 'repeated-trip',
    label: 'Circuit breaker trips instantly upon being switched ON',
    severity: 'urgent',
    instruction: 'Direct short circuit or grounded fault. Do not force or tape the breaker switch UP. Call a professional electrician.'
  },
  {
    id: 'tingling-touch',
    label: 'Mild shock or tingling when touching refrigerator or metal appliance',
    severity: 'urgent',
    instruction: 'Dangerous earthing failure or stray voltage leakage. Unplug the appliance immediately and keep children away.'
  },
  {
    id: 'sparking-socket',
    label: 'Visible sparks and crackling sounds when plugging in an appliance',
    severity: 'warning',
    instruction: 'Loose socket contact leaves or arcing terminal screws. Stop using this socket until faceplate is replaced.'
  },
  {
    id: 'flickering-lights',
    label: 'Lights flicker or dim noticeably when water pump or A/C turns on',
    severity: 'warning',
    instruction: 'Possible loose neutral wire or excessive voltage drop across undersized branch circuits.'
  },
  {
    id: 'warm-faceplate',
    label: 'Switch plate or extension board feels noticeably warm to the touch',
    severity: 'warning',
    instruction: 'Overloaded circuit or undersized wire gauge generating dangerous resistive heat. Unplug heavy loads.'
  },
  {
    id: 'old-wiring',
    label: 'House wiring has not been inspected for over 15–20 years',
    severity: 'advisory',
    instruction: 'Aged PVC insulation hardens and cracks inside conduits. Arrange a comprehensive fault inspection.'
  }
];

export const SafetyGuidePage: React.FC<SafetyGuidePageProps> = ({ onNavigate }) => {
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);

  const toggleSymptom = (id: string) => {
    setSelectedSymptoms(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const hasUrgent = selectedSymptoms.some(id => {
    const s = COMMON_SYMPTOMS.find(opt => opt.id === id);
    return s?.severity === 'urgent';
  });

  const hasWarning = selectedSymptoms.some(id => {
    const s = COMMON_SYMPTOMS.find(opt => opt.id === id);
    return s?.severity === 'warning';
  });

  return (
    <div className="space-y-20 pb-20">
      
      {/* 1. Page Header */}
      <section className="pt-8 sm:pt-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            
            <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-[#58605A]">
              <span>Household Education</span>
              <span aria-hidden="true">·</span>
              <span className="text-[#C8602B]">Safety First</span>
              <span aria-hidden="true">·</span>
              <span>Sheraz Electric</span>
            </div>

            <h1 className="font-editorial text-4xl sm:text-5xl font-bold text-[#153323] tracking-tight text-balance">
              Residential Electrical Safety Guide
            </h1>

            <p className="text-base sm:text-lg text-[#58605A] leading-relaxed">
              Practical guidance on recognizing domestic electrical hazards, preventing conduit fires, and understanding when to immediately de-energize circuits and contact a qualified tradesperson.
            </p>

            <div className="p-4 rounded-xl bg-[#FAF0EB] border border-[#F0D5C7] flex items-start gap-3 text-xs sm:text-sm text-[#7A3616]">
              <AlertTriangle className="w-5 h-5 text-[#C8602B] shrink-0 mt-0.5" />
              <div>
                <strong className="font-semibold">Important Safety Warning:</strong> Live household electrical power (220V–240V AC) is potentially lethal. Never open live electrical panels, attempt DIY wire splices, or bypass circuit breakers yourself. Always cut power at the main switch before examining any appliance.
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Interactive Household Hazard Self-Assessment */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl p-6 sm:p-10 border border-[#E8E2D5] shadow-sm space-y-6">
          
          <div className="space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#C8602B]">
              Interactive Symptom Checker
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#153323]">
              Check Observed Electrical Symptoms in Your Home
            </h2>
            <p className="text-sm text-[#58605A] max-w-2xl">
              Select any conditions currently occurring in your residence to view immediate safety advice and the recommended escalation protocol.
            </p>
          </div>

          {/* Symptom Checkboxes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
            {COMMON_SYMPTOMS.map((opt) => {
              const isChecked = selectedSymptoms.includes(opt.id);
              return (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => toggleSymptom(opt.id)}
                  className={`text-left p-4 rounded-xl border transition-all cursor-pointer flex items-start gap-3 ${
                    isChecked
                      ? 'bg-[#FAF8F5] border-[#C8602B] ring-1 ring-[#C8602B]'
                      : 'bg-white border-[#E8E2D5] hover:border-[#C8602B]/40'
                  }`}
                >
                  <div className={`w-5 h-5 rounded mt-0.5 flex items-center justify-center shrink-0 border ${
                    isChecked
                      ? 'bg-[#C8602B] border-[#C8602B] text-white'
                      : 'border-[#58605A] bg-white'
                  }`}>
                    {isChecked && <CheckCircle2 className="w-3.5 h-3.5" />}
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs sm:text-sm font-medium text-[#1E2320] block">
                      {opt.label}
                    </span>
                    {isChecked && (
                      <p className="text-xs text-[#C8602B] font-medium pt-1">
                        Action: {opt.instruction}
                      </p>
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Dynamic Assessment Outcome Box */}
          <div className="pt-4 border-t border-[#E8E2D5]">
            {selectedSymptoms.length === 0 ? (
              <div className="p-4 rounded-xl bg-[#FAF8F5] text-xs text-[#58605A] flex items-center gap-2">
                <Info className="w-4 h-4 text-[#C8602B] shrink-0" />
                <span>Click one or more symptoms above to view recommended safety isolation steps.</span>
              </div>
            ) : hasUrgent ? (
              <div className="p-6 rounded-xl bg-[#FFF5F2] border border-[#F8C8B8] space-y-3">
                <div className="flex items-center gap-2 text-sm font-bold text-[#A83216]">
                  <Flame className="w-5 h-5 text-[#C8602B]" />
                  <span>Immediate Safety Action Required (High Hazard Level)</span>
                </div>
                <p className="text-xs sm:text-sm text-[#7A2A16] leading-relaxed">
                  One or more selected symptoms indicate active arcing, severe insulation breakdown, or earthing failure. <strong>Turn OFF your home's main distribution breaker switch immediately</strong> to cut power to the affected section. Do not plug in any further equipment until a professional electrician performs a diagnostic loop test.
                </p>
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <a
                    href={BUSINESS_INFO.phoneDial}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-[#C8602B] hover:bg-[#B85220] text-white text-xs font-semibold rounded-lg transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call Sheraz Electric ({BUSINESS_INFO.phoneFormatted})</span>
                  </a>
                  <button
                    onClick={() => setSelectedSymptoms([])}
                    className="text-xs text-[#58605A] underline hover:text-[#1E2320]"
                  >
                    Reset selection
                  </button>
                </div>
              </div>
            ) : hasWarning ? (
              <div className="p-6 rounded-xl bg-[#FAF8F5] border border-[#E8E2D5] space-y-3">
                <div className="flex items-center gap-2 text-sm font-bold text-[#153323]">
                  <AlertTriangle className="w-5 h-5 text-[#C8602B]" />
                  <span>Prompt Inspection Recommended</span>
                </div>
                <p className="text-xs sm:text-sm text-[#58605A] leading-relaxed">
                  These symptoms typically point to worn switch contacts, loose terminal screws, or branch overloading. Refrain from operating high-load appliances on that circuit until inspected.
                </p>
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => onNavigate('contact')}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-[#153323] hover:bg-[#0D2217] text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer"
                  >
                    <span>Schedule an Inspection Visit</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => setSelectedSymptoms([])}
                    className="text-xs text-[#58605A] underline hover:text-[#1E2320]"
                  >
                    Reset selection
                  </button>
                </div>
              </div>
            ) : (
              <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E8E2D5] text-xs text-[#58605A] space-y-2">
                <p>Routine preventative assessment recommended for aged wiring systems.</p>
                <button
                  onClick={() => setSelectedSymptoms([])}
                  className="text-xs text-[#58605A] underline hover:text-[#1E2320]"
                >
                  Reset selection
                </button>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* 3. Detailed Educational Topics */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="space-y-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#C8602B]">
            Practical Information
          </span>
          <h2 className="font-editorial text-3xl font-bold text-[#153323]">
            Five Essential Household Electrical Principles
          </h2>
        </div>

        <div className="space-y-8">
          {SAFETY_TOPICS.map((topic, idx) => (
            <div
              key={topic.id}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8E2D5] space-y-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-[#F4EFE6]">
                <div className="flex items-center gap-3">
                  <span className="font-mono-numbers text-xl font-bold text-[#C8602B]">
                    0{idx + 1}
                  </span>
                  <h3 className="font-editorial text-xl sm:text-2xl font-bold text-[#153323]">
                    {topic.title}
                  </h3>
                </div>
                <div className="text-xs font-medium text-[#58605A]">
                  Status: <span className="text-[#C8602B] uppercase tracking-wider font-semibold">{topic.urgency}</span>
                </div>
              </div>

              <p className="text-sm sm:text-base text-[#58605A] leading-relaxed">
                {topic.summary}
              </p>

              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#153323] mb-3">
                  Warning Signals to Watch For
                </h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                  {topic.symptoms.map((sym, sIdx) => (
                    <li key={sIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#58605A]">
                      <AlertTriangle className="w-4 h-4 text-[#C8602B] shrink-0 mt-0.5" />
                      <span>{sym}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E8E2D5]">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#153323] mb-1">
                    <CheckCircle2 className="w-4 h-4 text-[#153323]" />
                    <span>Safe Recommended Action</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#58605A]">
                    {topic.safeAction}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#FFF8F5] border border-[#F5DDD4]">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#A83216] mb-1">
                    <XCircle className="w-4 h-4 text-[#C8602B]" />
                    <span>Hazard Danger Notice</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#7A2A16]">
                    {topic.dangerNotice}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* 4. Professional Inspection Callout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#153323] text-[#FAF8F5] rounded-2xl p-8 sm:p-12 border border-[#1E4430] flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2">
            <h3 className="font-editorial text-2xl font-bold">
              Unsure About an Electrical Fault in Your Home?
            </h3>
            <p className="text-sm text-[#D1DDD6] max-w-xl">
              Don’t take chances with domestic wiring or burning outlets. Contact Sheraz Electric in Gulgasht Colony, Multan for a safe visual inspection.
            </p>
          </div>
          <div className="shrink-0 flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <a
              href={BUSINESS_INFO.phoneDial}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#C8602B] hover:bg-[#B85220] text-white text-sm font-semibold rounded-lg transition-colors"
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
