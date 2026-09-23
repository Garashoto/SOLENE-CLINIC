import React from 'react';
import { MapPin, Phone, MessageSquare, Clock, Navigation, ExternalLink, Car } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';
import { trackClinicEvent } from '../utils/analytics';

export const LocationSection: React.FC = () => {
  const handleDirections = () => {
    trackClinicEvent('google_maps_click', { source: 'location_section_directions' });
    window.open(CLINIC_INFO.googleProfileUrl, '_blank', 'noopener,noreferrer');
  };

  const handleWhatsApp = () => {
    trackClinicEvent('whatsapp_click', { source: 'location_section' });
    const text = encodeURIComponent("Hi Solène Clinic, I would like directions or parking assistance to visit your Race Course clinic.");
    window.open(`https://wa.me/${CLINIC_INFO.whatsappNumber.replace(/[^0-9]/g, '')}?text=${text}`, '_blank');
  };

  return (
    <section id="location" className="py-20 md:py-28 bg-[#FAF4EE] border-t border-[#E8DACB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-[#916645] mb-3">
            <span>Find Us in Dehradun</span>
            <span aria-hidden="true">·</span>
            <span>Clinic & Academy</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#18191B] tracking-tight [text-wrap:balance]">
            Visit Solène in Race Course
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#52504C] font-normal leading-relaxed">
            Conveniently situated on the 4th floor in Guru Nanak Vihar, offering a quiet, private healthcare sanctuary in central Dehradun.
          </p>
        </div>

        {/* Location Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Clinic Coordinates & Contact (5 cols) */}
          <div className="lg:col-span-5 bg-white rounded-3xl border border-[#E8DACB] p-8 shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#916645] font-semibold block mb-2">
                Official Clinic Address
              </span>

              <h3 className="font-serif text-2xl font-semibold text-[#18191B]">
                Solène Skin, Hair & Laser Clinic & Academy
              </h3>

              {/* Physical Address */}
              <div className="mt-5 p-4 rounded-2xl bg-[#FAF4EE] border border-[#E8DACB] flex items-start gap-3.5">
                <MapPin className="w-5 h-5 text-[#916645] shrink-0 mt-0.5" />
                <div className="text-sm text-[#3E3C38] leading-relaxed">
                  <p className="font-medium text-[#18191B]">4th Floor, 90-D Guru Nanak Vihar</p>
                  <p>Race Course, Dehradun – 248001</p>
                  <p className="text-xs text-[#7A5B40] mt-1 font-sans">Uttarakhand, India</p>
                </div>
              </div>

              {/* Operational Hours */}
              <div className="mt-6 space-y-2.5 text-xs text-[#52504C]">
                <div className="flex items-center gap-2 font-semibold text-[#18191B]">
                  <Clock className="w-4 h-4 text-[#C89F56]" />
                  <span>Consultation & Clinic Timings:</span>
                </div>
                <div className="pl-6 space-y-1">
                  <p>{CLINIC_INFO.timings.weekdays}</p>
                  <p className="text-[#7A5B40]">{CLINIC_INFO.timings.sunday}</p>
                </div>
              </div>

              {/* Travel Notes for Regional Patients */}
              <div className="mt-6 p-4 rounded-xl bg-[#FDFBF8] border border-[#E8DACB] text-xs text-[#575654] space-y-1.5">
                <div className="flex items-center gap-1.5 font-semibold text-[#18191B]">
                  <Car className="w-3.5 h-3.5 text-[#916645]" />
                  <span>Visiting from Outside Dehradun?</span>
                </div>
                <p className="leading-relaxed">
                  Patients travelling from <strong>Rishikesh, Haridwar, Roorkee, or Mussoorie</strong> can easily connect via Saharanpur Road or Haridwar Bypass to Race Course. Please notify us on WhatsApp for same-day coordination.
                </p>
              </div>

              {/* Phone Numbers */}
              <div className="mt-6 pt-6 border-t border-[#E8DACB]/80 space-y-2">
                <span className="text-xs font-semibold text-[#18191B] block">Direct Clinic Lines:</span>
                <div className="flex flex-col sm:flex-row gap-2">
                  <a
                    href={`tel:${CLINIC_INFO.primaryPhone}`}
                    className="inline-flex items-center gap-2 text-xs font-semibold text-[#18191B] hover:text-[#916645] bg-[#FAF4EE] px-3.5 py-2 rounded-lg border border-[#E8DACB]"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#C89F56]" />
                    <span>{CLINIC_INFO.primaryPhoneDisplay}</span>
                  </a>
                  <a
                    href={`tel:${CLINIC_INFO.secondaryPhone}`}
                    className="inline-flex items-center gap-2 text-xs font-semibold text-[#18191B] hover:text-[#916645] bg-[#FAF4EE] px-3.5 py-2 rounded-lg border border-[#E8DACB]"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#C89F56]" />
                    <span>{CLINIC_INFO.secondaryPhoneDisplay}</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Action Bar */}
            <div className="mt-8 pt-6 border-t border-[#E8DACB] flex flex-wrap gap-3">
              <button
                onClick={handleDirections}
                className="flex-1 inline-flex items-center justify-center gap-2 bg-[#18191B] text-[#FAF4EE] hover:bg-[#2C2D30] py-3 px-4 rounded-lg text-xs font-medium uppercase tracking-wider transition-colors shadow-sm"
              >
                <Navigation className="w-4 h-4 text-[#C89F56]" />
                <span>Get Directions</span>
              </button>

              <button
                onClick={handleWhatsApp}
                className="inline-flex items-center justify-center gap-2 bg-[#FAF4EE] hover:bg-[#EFE4D8] text-[#18191B] border border-[#E8DACB] py-3 px-4 rounded-lg text-xs font-medium transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-[#25D366]" />
                <span>WhatsApp Desk</span>
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Map Preview (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-[#E8DACB] overflow-hidden shadow-sm flex flex-col min-h-[420px]">
            {/* Map Top Bar */}
            <div className="p-4 bg-[#FAF4EE] border-b border-[#E8DACB] flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#18191B]">
                <MapPin className="w-4 h-4 text-[#C89F56]" />
                <span>Race Course, Dehradun Map Pin</span>
              </div>
              <button
                onClick={handleDirections}
                className="text-xs text-[#916645] hover:text-[#18191B] font-medium flex items-center gap-1"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </button>
            </div>

            {/* Simulated Interactive Map with Custom Pins */}
            <div className="relative flex-1 bg-[#F5EFE7] p-6 flex flex-col justify-between overflow-hidden">
              {/* Map Graphic Vector */}
              <svg
                viewBox="0 0 600 400"
                className="absolute inset-0 w-full h-full object-cover opacity-60 pointer-events-none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Street Lines */}
                <path d="M0 120 Q200 130 600 110" stroke="#DFCFBE" strokeWidth="18" fill="none" />
                <path d="M0 260 Q300 240 600 270" stroke="#DFCFBE" strokeWidth="14" fill="none" />
                <path d="M220 0 L250 400" stroke="#DFCFBE" strokeWidth="16" fill="none" />
                <path d="M420 0 L400 400" stroke="#DFCFBE" strokeWidth="12" fill="none" />
                <path d="M100 0 L140 400" stroke="#DFCFBE" strokeWidth="8" fill="none" />
                <path d="M120 180 L500 200" stroke="#EFE4D6" strokeWidth="6" fill="none" />
                {/* Green Park Region (Gandhi Park / Pavilion Ground vicinity) */}
                <path d="M30 30 Q120 20 120 100 Q40 100 30 30 Z" fill="#DCECD7" opacity="0.7" />
                <path d="M300 280 Q450 270 460 380 Q320 390 300 280 Z" fill="#DCECD7" opacity="0.6" />
              </svg>

              {/* Central Pin Anchor */}
              <div className="relative z-10 m-auto text-center">
                <div className="inline-flex flex-col items-center">
                  <div className="relative">
                    <div className="w-14 h-14 rounded-full bg-[#18191B] text-[#FAF4EE] flex items-center justify-center shadow-xl border-2 border-[#C89F56] animate-pulse">
                      <MapPin className="w-7 h-7 text-[#C89F56]" />
                    </div>
                    <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#25D366] rounded-full border-2 border-white" />
                  </div>

                  <div className="mt-3 bg-white/95 backdrop-blur-sm px-4 py-2.5 rounded-xl border border-[#E8DACB] shadow-lg max-w-xs text-center">
                    <span className="font-serif text-base font-semibold text-[#18191B] block">
                      Solène Clinic
                    </span>
                    <span className="text-[11px] text-[#575654] block mt-0.5">
                      4th Floor, 90-D Guru Nanak Vihar
                    </span>
                    <span className="text-[10px] text-[#916645] font-semibold block mt-1 uppercase">
                      Race Course, Dehradun
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom Quick-Action Bar */}
              <div className="relative z-10 bg-white/90 backdrop-blur-sm p-4 rounded-xl border border-[#E8DACB] flex items-center justify-between text-xs">
                <span className="text-[#575654]">
                  Near Race Course police station & Guru Nanak Vihar market
                </span>
                <button
                  onClick={handleDirections}
                  className="font-semibold text-[#18191B] hover:text-[#916645] underline underline-offset-2 shrink-0 ml-3"
                >
                  Navigate Now →
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
