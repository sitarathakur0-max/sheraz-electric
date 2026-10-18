import React, { useState } from 'react';
import { Phone, MapPin, Send, CheckCircle2, AlertCircle, Clock, ShieldCheck, Loader2, Search } from 'lucide-react';
import { BUSINESS_INFO, SERVICES } from '../data/businessInfo';

interface ContactPageProps {
  initialServiceId?: string;
}

interface FormState {
  fullName: string;
  phoneNumber: string;
  serviceRequired: string;
  areaLocality: string;
  description: string;
}

interface ServerReceipt {
  ticketId: string;
  message: string;
  inquiry: {
    id: string;
    fullName: string;
    phoneNumber: string;
    serviceRequired: string;
    areaLocality: string;
    description: string;
    createdAt: string;
  };
}

export const ContactPage: React.FC<ContactPageProps> = ({ initialServiceId }) => {
  const initialService = SERVICES.find(s => s.id === initialServiceId)?.title || '';

  const [formData, setFormData] = useState<FormState>({
    fullName: '',
    phoneNumber: '',
    serviceRequired: initialService,
    areaLocality: 'Gulgasht Colony',
    description: ''
  });

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [receipt, setReceipt] = useState<ServerReceipt | null>(null);

  // Ticket lookup state
  const [lookupTicketId, setLookupTicketId] = useState('');
  const [lookupLoading, setLookupLoading] = useState(false);
  const [lookupResult, setLookupResult] = useState<any | null>(null);
  const [lookupError, setLookupError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errorMsg) setErrorMsg(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    // Client-side quick checks
    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      setErrorMsg('Please enter your full name (minimum 2 characters).');
      return;
    }
    if (!formData.phoneNumber.trim()) {
      setErrorMsg('Please enter a valid phone number.');
      return;
    }
    if (!formData.serviceRequired) {
      setErrorMsg('Please select an electrical service category.');
      return;
    }
    if (!formData.areaLocality.trim()) {
      setErrorMsg('Please enter your area or locality in Multan.');
      return;
    }
    if (!formData.description.trim() || formData.description.trim().length < 8) {
      setErrorMsg('Please describe the electrical issue or requirement (minimum 8 characters).');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('/api/inquiries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || 'The server could not process the inquiry. Please call +92 304 7358893 directly.');
      }

      setReceipt(data);
      setFormData({
        fullName: '',
        phoneNumber: '',
        serviceRequired: '',
        areaLocality: 'Gulgasht Colony',
        description: ''
      });
    } catch (err: any) {
      console.error('Inquiry submission error:', err);
      setErrorMsg(err.message || 'Network error occurred while connecting to the server. Please call +92 304 7358893.');
    } finally {
      setLoading(false);
    }
  };

  const handleLookup = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!lookupTicketId.trim()) return;

    setLookupLoading(true);
    setLookupError(null);
    setLookupResult(null);

    try {
      const res = await fetch(`/api/inquiries/${encodeURIComponent(lookupTicketId.trim())}`);
      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Ticket not found.');
      }
      setLookupResult(data.inquiry);
    } catch (err: any) {
      setLookupError(err.message || 'Could not find an inquiry with this ticket number.');
    } finally {
      setLookupLoading(false);
    }
  };

  return (
    <div className="space-y-16 pb-20">
      
      {/* 1. Page Header */}
      <section className="pt-8 sm:pt-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            
            <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-[#58605A]">
              <span>Direct Contact</span>
              <span aria-hidden="true">·</span>
              <span className="text-[#C8602B]">Multan Services</span>
              <span aria-hidden="true">·</span>
              <span>Sheraz Electric</span>
            </div>

            <h1 className="font-editorial text-4xl sm:text-5xl font-bold text-[#153323] tracking-tight">
              Contact & Inquiries
            </h1>

            <p className="text-base sm:text-lg text-[#58605A] leading-relaxed">
              Reach out to arrange an electrical inspection visit, report an electrical fault, or request switchboard and fan fitting in Gulgasht Colony and central Multan.
            </p>

          </div>
        </div>
      </section>

      {/* 2. Main Contact Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Verified Contact Information & Details */}
          <div className="lg:col-span-5 space-y-8">
            
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8E2D5] shadow-sm space-y-6">
              <h2 className="font-editorial text-2xl font-bold text-[#153323]">
                Direct Business Details
              </h2>

              <div className="space-y-5 text-sm">
                
                {/* Phone Call Section */}
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#FAF0EB] text-[#C8602B] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-[#58605A] font-semibold block">
                      Phone (Click to call)
                    </span>
                    <a
                      href={BUSINESS_INFO.phoneDial}
                      className="font-mono-numbers text-lg font-bold text-[#153323] hover:text-[#C8602B] transition-colors mt-0.5 inline-block"
                    >
                      {BUSINESS_INFO.phoneFormatted}
                    </a>
                    <p className="text-xs text-[#58605A] mt-1">
                      Direct telephone line for electrical service inquiries and booking visits.
                    </p>
                  </div>
                </div>

                {/* Physical Address Section */}
                <div className="flex items-start gap-3 pt-3 border-t border-[#F4EFE6]">
                  <div className="w-10 h-10 rounded-lg bg-[#F4EFE6] text-[#153323] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-[#58605A] font-semibold block">
                      Physical Location
                    </span>
                    <p className="text-[#1E2320] font-medium mt-0.5 leading-snug">
                      {BUSINESS_INFO.street}, {BUSINESS_INFO.subArea}
                    </p>
                    <p className="text-xs text-[#58605A] mt-0.5">
                      {BUSINESS_INFO.mainArea}, {BUSINESS_INFO.city}, {BUSINESS_INFO.country}
                    </p>
                  </div>
                </div>

              </div>

              {/* Direct call banner */}
              <div className="pt-2">
                <a
                  href={BUSINESS_INFO.phoneDial}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#C8602B] hover:bg-[#B85220] text-white text-sm font-semibold rounded-lg transition-colors text-center"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call {BUSINESS_INFO.phoneFormatted}</span>
                </a>
              </div>

            </div>

            {/* Check Existing Inquiry Status */}
            <div className="bg-[#FAF8F5] rounded-2xl p-6 border border-[#E8E2D5] space-y-4">
              <h3 className="text-sm font-bold text-[#153323] uppercase tracking-wider flex items-center gap-2">
                <Search className="w-4 h-4 text-[#C8602B]" />
                <span>Verify Existing Inquiry</span>
              </h3>
              <p className="text-xs text-[#58605A]">
                Already submitted an inquiry? Enter your reference ticket number (e.g. SE-20261018-...) to view receipt confirmation.
              </p>
              <form onSubmit={handleLookup} className="flex gap-2">
                <input
                  type="text"
                  placeholder="Ticket ID (e.g. SE-...)"
                  value={lookupTicketId}
                  onChange={(e) => setLookupTicketId(e.target.value)}
                  className="flex-1 px-3 py-2 text-xs bg-white border border-[#E8E2D5] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#C8602B]"
                />
                <button
                  type="submit"
                  disabled={lookupLoading}
                  className="px-3 py-2 bg-[#153323] hover:bg-[#0D2217] text-white text-xs font-medium rounded-lg transition-colors disabled:opacity-50 cursor-pointer"
                >
                  {lookupLoading ? 'Checking...' : 'Check'}
                </button>
              </form>

              {lookupError && (
                <p className="text-xs text-[#A83216] font-medium">{lookupError}</p>
              )}

              {lookupResult && (
                <div className="p-3 bg-white rounded-lg border border-[#E8E2D5] text-xs space-y-1">
                  <div className="flex justify-between font-semibold text-[#153323]">
                    <span>{lookupResult.id}</span>
                    <span className="text-[#C8602B] uppercase">{lookupResult.status}</span>
                  </div>
                  <p className="text-[#58605A]">Name: {lookupResult.fullName}</p>
                  <p className="text-[#58605A]">Service: {lookupResult.serviceRequired}</p>
                  <p className="text-[#58605A]">Area: {lookupResult.areaLocality}</p>
                  <p className="text-[#58605A] text-[11px]">Logged: {new Date(lookupResult.createdAt).toLocaleString()}</p>
                </div>
              )}
            </div>

          </div>

          {/* Right Column: Genuine Backend Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl p-6 sm:p-10 border border-[#E8E2D5] shadow-sm">
              
              {receipt ? (
                /* Genuine Server Confirmation State */
                <div className="space-y-6 animate-in fade-in duration-200">
                  <div className="w-12 h-12 rounded-full bg-[#EBF7F0] text-[#153323] flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-[#153323]" />
                  </div>

                  <div className="space-y-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#C8602B]">
                      Server Confirmed
                    </span>
                    <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#153323]">
                      Inquiry Received Successfully
                    </h2>
                    <p className="text-sm text-[#58605A] leading-relaxed">
                      {receipt.message}
                    </p>
                  </div>

                  {/* Receipt Details Box */}
                  <div className="bg-[#FAF8F5] p-5 rounded-xl border border-[#E8E2D5] space-y-3 text-xs sm:text-sm">
                    <div className="flex items-center justify-between pb-2 border-b border-[#E8E2D5]">
                      <span className="text-[#58605A]">Reference Ticket ID:</span>
                      <span className="font-mono-numbers font-bold text-[#153323]">{receipt.ticketId}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[#58605A]">Customer Name:</span>
                      <span className="font-medium text-[#1E2320]">{receipt.inquiry.fullName}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[#58605A]">Contact Phone:</span>
                      <span className="font-mono-numbers font-medium text-[#1E2320]">{receipt.inquiry.phoneNumber}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[#58605A]">Service Category:</span>
                      <span className="font-medium text-[#1E2320]">{receipt.inquiry.serviceRequired}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[#58605A]">Locality:</span>
                      <span className="font-medium text-[#1E2320]">{receipt.inquiry.areaLocality}</span>
                    </div>
                    <div className="pt-2 border-t border-[#E8E2D5]">
                      <span className="text-[#58605A] block mb-1">Issue Description:</span>
                      <p className="text-xs text-[#1E2320] italic bg-white p-2 rounded border border-[#E8E2D5]">
                        "{receipt.inquiry.description}"
                      </p>
                    </div>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <a
                      href={BUSINESS_INFO.phoneDial}
                      className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#C8602B] hover:bg-[#B85220] text-white text-xs sm:text-sm font-semibold rounded-lg transition-colors"
                    >
                      <Phone className="w-4 h-4" />
                      <span>Follow Up by Phone</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => setReceipt(null)}
                      className="inline-flex items-center justify-center px-5 py-2.5 bg-[#F4EFE6] hover:bg-[#EBE3D7] text-[#153323] text-xs sm:text-sm font-medium rounded-lg border border-[#E8E2D5] transition-colors cursor-pointer"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                /* Inquiry Form */
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  <div className="space-y-2">
                    <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#153323]">
                      Electrical Service Inquiry Form
                    </h2>
                    <p className="text-xs sm:text-sm text-[#58605A]">
                      Submit your details below. This form connects directly to our verified backend service to record your request.
                    </p>
                  </div>

                  {errorMsg && (
                    <div className="p-4 rounded-xl bg-[#FFF5F2] border border-[#F8C8B8] flex items-start gap-3 text-xs sm:text-sm text-[#A83216]">
                      <AlertCircle className="w-5 h-5 shrink-0 text-[#C8602B]" />
                      <div>{errorMsg}</div>
                    </div>
                  )}

                  <div className="space-y-4">
                    
                    {/* Full Name */}
                    <div>
                      <label htmlFor="fullName" className="block text-xs uppercase tracking-wider font-semibold text-[#153323] mb-1.5">
                        Full Name <span className="text-[#C8602B]">*</span>
                      </label>
                      <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="e.g., Muhammad Tariq"
                        className="w-full px-4 py-2.5 rounded-lg border border-[#E8E2D5] bg-[#FAF8F5] text-sm text-[#1E2320] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#C8602B]/40 focus:border-[#C8602B] transition-all"
                      />
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label htmlFor="phoneNumber" className="block text-xs uppercase tracking-wider font-semibold text-[#153323] mb-1.5">
                        Phone Number <span className="text-[#C8602B]">*</span>
                      </label>
                      <input
                        id="phoneNumber"
                        name="phoneNumber"
                        type="tel"
                        required
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        placeholder="e.g., +92 304 7358893 or 0300 1234567"
                        className="w-full px-4 py-2.5 rounded-lg border border-[#E8E2D5] bg-[#FAF8F5] text-sm font-mono-numbers text-[#1E2320] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#C8602B]/40 focus:border-[#C8602B] transition-all"
                      />
                      <span className="text-[11px] text-[#58605A] mt-1 block">
                        We will contact you on this number to arrange the visit.
                      </span>
                    </div>

                    {/* Service Required */}
                    <div>
                      <label htmlFor="serviceRequired" className="block text-xs uppercase tracking-wider font-semibold text-[#153323] mb-1.5">
                        Service Required <span className="text-[#C8602B]">*</span>
                      </label>
                      <select
                        id="serviceRequired"
                        name="serviceRequired"
                        required
                        value={formData.serviceRequired}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-lg border border-[#E8E2D5] bg-[#FAF8F5] text-sm text-[#1E2320] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#C8602B]/40 focus:border-[#C8602B] transition-all"
                      >
                        <option value="">-- Select an Electrical Service --</option>
                        {SERVICES.map((s) => (
                          <option key={s.id} value={s.title}>
                            {s.title} ({s.categoryName})
                          </option>
                        ))}
                        <option value="Other Residential Electrical Request">
                          Other Residential Electrical Request
                        </option>
                      </select>
                    </div>

                    {/* Area / Locality */}
                    <div>
                      <label htmlFor="areaLocality" className="block text-xs uppercase tracking-wider font-semibold text-[#153323] mb-1.5">
                        Area or Locality in Multan <span className="text-[#C8602B]">*</span>
                      </label>
                      <input
                        id="areaLocality"
                        name="areaLocality"
                        type="text"
                        required
                        value={formData.areaLocality}
                        onChange={handleChange}
                        placeholder="e.g., New Sabzazar Colony, Gulgasht Colony"
                        className="w-full px-4 py-2.5 rounded-lg border border-[#E8E2D5] bg-[#FAF8F5] text-sm text-[#1E2320] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#C8602B]/40 focus:border-[#C8602B] transition-all"
                      />
                    </div>

                    {/* Description of the Issue */}
                    <div>
                      <label htmlFor="description" className="block text-xs uppercase tracking-wider font-semibold text-[#153323] mb-1.5">
                        Description of the Issue or Fitting <span className="text-[#C8602B]">*</span>
                      </label>
                      <textarea
                        id="description"
                        name="description"
                        rows={4}
                        required
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Please describe what is happening (e.g., circuit breaker keeps tripping when turning on AC, socket replacement needed in 2 bedrooms, etc.)."
                        className="w-full px-4 py-2.5 rounded-lg border border-[#E8E2D5] bg-[#FAF8F5] text-sm text-[#1E2320] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#C8602B]/40 focus:border-[#C8602B] transition-all"
                      />
                    </div>

                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#C8602B] hover:bg-[#B85220] text-white text-base font-semibold rounded-lg shadow-sm transition-colors disabled:opacity-50 cursor-pointer"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          <span>Submitting to Server...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Submit Electrical Inquiry</span>
                        </>
                      )}
                    </button>
                  </div>

                  <div className="flex items-center justify-center gap-2 text-xs text-[#58605A] pt-2">
                    <ShieldCheck className="w-4 h-4 text-[#153323]" />
                    <span>Your request is directly submitted to the Sheraz Electric server in Multan.</span>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
