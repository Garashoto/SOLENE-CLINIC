import React from 'react';
import { Calendar, Phone, ArrowRight, ShieldCheck, MapPin, Sparkles, MessageCircle } from 'lucide-react';
import { CLINIC_INFO, DOCTORS } from '../data/clinicData';
import { SoleneLogo } from './SoleneLogo';
import { trackClinicEvent } from '../utils/analytics';

interface HeroProps {
  onOpenBooking: (prefillConcern?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const handleWhatsApp = (topic: string = 'General Consultation') => {
    trackClinicEvent('whatsapp_click', { source: 'hero', topic });
    const text = encodeURIComponent(`Hi Solène Clinic, I would like to enquire about a consultation for ${topic}.`);
    window.open(`https://wa.me/${CLINIC_INFO.whatsappNumber.replace(/[^0-9]/g, '')}?text=${text}`, '_blank');
  };

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-[#FAF4EE] via-[#FDFBF8] to-[#FAF4EE]">
      {/* Delicate background ambient architectural glows */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#EFE1D4]/40 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-40 right-[-100px] w-[350px] h-[350px] bg-[#DCE9F0]/50 blur-[90px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Clinical Credibility & Core Funnel (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Unboxed Metadata Tagline (Zero-Pill Compliance) */}
            <div className="flex flex-wrap items-center gap-2 text-xs md:text-sm font-medium tracking-wide text-[#7A5B40] mb-4">
              <span className="font-serif italic text-base">“Naturally Inspired & Scientifically Perfected”</span>
              <span aria-hidden="true" className="text-[#C89F56]">·</span>
              <span className="text-[#575654] uppercase tracking-wider text-[11px]">Race Course, Dehradun</span>
            </div>

            {/* Headline with text-wrap: balance */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#18191B] font-normal tracking-tight leading-[1.12] mb-6 max-w-2xl [text-wrap:balance]">
              Aesthetic Medicine Grounded in Science. Skin & Hair Care in Dehradun.
            </h1>

            {/* Subtitle / Credibility Prose */}
            <p className="font-sans text-base sm:text-lg text-[#52504C] font-normal leading-relaxed mb-8 max-w-xl">
              Led by Senior Doctor <strong className="font-semibold text-[#18191B]">Dr. Asha Rawat</strong> (17+ years clinical experience in <span className="text-[#916645] font-semibold">Bangalore, Delhi & Chandigarh</span>) and aesthetic physician <strong className="font-semibold text-[#18191B]">Dr. Megha Sahi</strong> (FMC Delhi). Every procedure begins with thorough diagnostic assessment and unhurried consultation.
            </p>

            {/* Primary Action Button Cluster */}
            <div className="flex flex-wrap items-center gap-3.5 mb-10 w-full sm:w-auto">
              {/* Primary CTA */}
              <button
                onClick={() => {
                  trackClinicEvent('book_consultation_click', { source: 'hero_primary' });
                  onOpenBooking();
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#18191B] text-[#FAF4EE] hover:bg-[#2C2D30] px-6 py-3.5 rounded-lg text-sm font-medium tracking-wide uppercase shadow-sm hover:shadow-md transition-all duration-200 group"
              >
                <Calendar className="w-4 h-4 text-[#C89F56] transition-transform group-hover:scale-110" />
                <span>Book a Consultation</span>
                <ArrowRight className="w-4 h-4 ml-1 opacity-70 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* WhatsApp Secondary CTA */}
              <button
                onClick={() => handleWhatsApp('Initial Skin/Hair Consultation')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#F3E9DF] hover:bg-[#EBDDCF] text-[#18191B] border border-[#DFCBB9] px-5 py-3.5 rounded-lg text-sm font-medium transition-colors duration-200"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>WhatsApp Us</span>
              </button>

              {/* Calling Link */}
              <div className="w-full sm:w-auto flex items-center justify-start gap-2 pt-1 sm:pt-0">
                <a
                  href={`tel:${CLINIC_INFO.primaryPhone}`}
                  onClick={() => trackClinicEvent('call_click', { number: CLINIC_INFO.primaryPhone, source: 'hero_cta' })}
                  className="inline-flex items-center gap-1.5 text-xs text-[#575654] hover:text-[#18191B] py-2 px-3 rounded border border-transparent hover:border-[#E8DACB] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#C89F56]" />
                  <span>Call {CLINIC_INFO.primaryPhoneDisplay}</span>
                </a>
              </div>
            </div>

            {/* Trust Markers - Factual & Non-Exaggerated */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-[#E8DACB]/80 w-full max-w-xl">
              <div className="flex flex-col">
                <span className="text-xs uppercase tracking-wider text-[#916645] font-semibold">Doctor-Led</span>
                <span className="text-xs text-[#575654] mt-0.5">Consultations first, no rushed sales</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs uppercase tracking-wider text-[#916645] font-semibold">30+ Treatments</span>
                <span className="text-xs text-[#575654] mt-0.5">Skin, Hair, Laser & Rejuvenation</span>
              </div>
              <div className="flex flex-col col-span-2 sm:col-span-1">
                <span className="text-xs uppercase tracking-wider text-[#916645] font-semibold">Race Course</span>
                <span className="text-xs text-[#575654] mt-0.5">Serving Dehradun & Uttarakhand</span>
              </div>
            </div>

          </div>

          {/* Right Column: Premium Visual Focal Anchor & Doctor Card (5 cols) */}
          <div className="lg:col-span-5 relative">
            {/* Visual Frame */}
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer decorative border with warm tan glow */}
              <div className="relative bg-white/80 backdrop-blur-md rounded-2xl border border-[#E8DACB] p-6 shadow-xl shadow-[#916645]/5">
                
                {/* Solene Card Header Emulation */}
                <div className="flex items-center justify-between pb-5 border-b border-[#E8DACB]/60">
                  <SoleneLogo variant="compact" />
                  <span className="text-[11px] font-sans font-medium text-[#7A5B40] bg-[#FAF4EE] px-2.5 py-1 rounded border border-[#E8DACB]">
                    Est. Clinic & Academy
                  </span>
                </div>

                {/* Aesthetic Visual Stage: Medical Architecture Showcase */}
                <div className="my-5 rounded-xl overflow-hidden bg-gradient-to-br from-[#F5EBE1] to-[#EAE0D5] aspect-[4/3] relative flex flex-col justify-end p-5 border border-[#E8DACB]/80 group">
                  {/* Subtle architectural geometric vector representing clinical tranquility */}
                  <svg
                    viewBox="0 0 400 300"
                    className="absolute inset-0 w-full h-full object-cover opacity-85"
                    preserveAspectRatio="xMidYMid slice"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#F9F3EC" />
                        <stop offset="50%" stopColor="#EFE3D5" />
                        <stop offset="100%" stopColor="#E2D0BE" />
                      </linearGradient>
                      <linearGradient id="glowGrad" x1="50%" y1="0%" x2="50%" y2="100%">
                        <stop offset="0%" stopColor="#C89F56" stopOpacity="0.25" />
                        <stop offset="100%" stopColor="#C89F56" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <rect width="400" height="300" fill="url(#bgGrad)" />
                    {/* Architectural Arches & Clinic Ambience */}
                    <path d="M120 300 V140 C120 90 160 50 210 50 C260 50 300 90 300 140 V300" fill="none" stroke="#DCC6B0" strokeWidth="2.5" />
                    <path d="M140 300 V150 C140 110 170 80 210 80 C250 80 280 110 280 150 V300" fill="none" stroke="#EFE2D4" strokeWidth="1.5" />
                    <ellipse cx="210" cy="180" rx="90" ry="90" fill="url(#glowGrad)" />
                    <circle cx="210" cy="120" r="18" fill="#C89F56" opacity="0.3" />
                    <circle cx="210" cy="120" r="8" fill="#C89F56" opacity="0.6" />
                    {/* Clean medical cross / botanical crest */}
                    <line x1="210" y1="105" x2="210" y2="135" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
                    <line x1="195" y1="120" x2="225" y2="120" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
                  </svg>

                  {/* Gradient Scrim for Legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#18191B]/80 via-[#18191B]/30 to-transparent" />

                  {/* Overlaid Info on Visual */}
                  <div className="relative z-10 text-white">
                    <div className="flex items-center gap-2 text-xs font-medium text-[#E5C790] mb-1">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Race Course Private Suites</span>
                    </div>
                    <p className="font-serif text-lg leading-snug text-white font-medium">
                      Sterile Treatment Rooms · Laser Workstations · Clinical Academy
                    </p>
                    <p className="text-[11px] text-white/80 mt-1">
                      Designed for patient privacy, absolute hygiene, and quiet clinical comfort.
                    </p>
                  </div>
                </div>

                {/* Direct Doctor Attribution Bar */}
                <div className="bg-[#FAF4EE] rounded-2xl p-4 border border-[#E8DACB] flex items-center justify-between gap-3">
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2 text-xs font-semibold text-[#18191B]">
                      <ShieldCheck className="w-4 h-4 text-[#916645]" />
                      <span>Senior Medical Leadership</span>
                    </div>
                    <div className="text-[11px] text-[#575654] mt-0.5">
                      Dr. Asha Rawat (Senior Doctor · Bangalore, Delhi, CHD) · Dr. Megha Sahi
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      trackClinicEvent('book_consultation_click', { source: 'hero_doctor_pill' });
                      onOpenBooking();
                    }}
                    className="shrink-0 text-xs font-semibold text-[#916645] hover:text-[#18191B] underline underline-offset-2 transition-colors"
                  >
                    Consult Doctor →
                  </button>
                </div>

                {/* Location Quick Snippet */}
                <div className="mt-3.5 flex items-center justify-between text-[11px] text-[#6E6C68] px-1">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#C89F56]" />
                    4th Floor, 90-D Guru Nanak Vihar
                  </span>
                  <span>Open Mon–Sat 10:30 AM</span>
                </div>

              </div>

              {/* Decorative Accent Ribbon Bottom Right */}
              <div className="absolute -bottom-3 -right-3 -z-10 w-full h-full rounded-2xl bg-[#E8D0BC]/40 border border-[#DFC8B2]" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
