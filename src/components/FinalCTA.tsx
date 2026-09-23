import React from 'react';
import { Calendar, MessageSquare, Phone, ArrowRight, ShieldCheck } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';
import { trackClinicEvent } from '../utils/analytics';

interface FinalCTAProps {
  onOpenBooking: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenBooking }) => {
  const handleWhatsApp = () => {
    trackClinicEvent('whatsapp_click', { source: 'final_cta' });
    const text = encodeURIComponent("Hi Solène Clinic, I would like to schedule a consultation with your doctors.");
    window.open(`https://wa.me/${CLINIC_INFO.whatsappNumber.replace(/[^0-9]/g, '')}?text=${text}`, '_blank');
  };

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-[#FAF4EE] to-[#F3E7DC] border-t border-[#E8DACB] relative overflow-hidden">
      {/* Decorative ambient background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#E8D0BC]/40 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#916645] mb-4">
          <ShieldCheck className="w-4 h-4 text-[#C89F56]" />
          <span>Doctor-Guided Consultation</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#18191B] tracking-tight leading-[1.15] [text-wrap:balance]">
          Let’s Understand What’s Right for You.
        </h2>

        <p className="mt-5 text-base sm:text-lg text-[#52504C] leading-relaxed max-w-2xl mx-auto">
          No automated pressure or pre-packaged promises. Book a one-on-one diagnostic assessment with Dr. Megha Sahi or Dr. Asha Rawat at our Race Course clinic in Dehradun.
        </p>

        {/* CTA Button Group */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => {
              trackClinicEvent('book_consultation_click', { source: 'final_cta' });
              onOpenBooking();
            }}
            className="inline-flex items-center justify-center gap-2.5 bg-[#18191B] text-[#FAF4EE] hover:bg-[#2C2D30] px-8 py-4 rounded-xl text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
          >
            <Calendar className="w-4 h-4 text-[#C89F56]" />
            <span>Book a Consultation</span>
            <ArrowRight className="w-4 h-4 ml-1 opacity-70" />
          </button>

          <button
            onClick={handleWhatsApp}
            className="inline-flex items-center justify-center gap-2 bg-white hover:bg-[#FAF4EE] text-[#18191B] border border-[#DFCBB9] px-7 py-4 rounded-xl text-xs sm:text-sm font-medium transition-colors shadow-sm"
          >
            <MessageSquare className="w-4 h-4 text-[#25D366]" />
            <span>WhatsApp Us</span>
          </button>

          <a
            href={`tel:${CLINIC_INFO.primaryPhone}`}
            onClick={() => trackClinicEvent('call_click', { number: CLINIC_INFO.primaryPhone, source: 'final_cta' })}
            className="inline-flex items-center justify-center gap-2 text-xs font-semibold text-[#18191B] hover:text-[#916645] px-5 py-4 rounded-xl border border-transparent hover:border-[#E8DACB] transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#C89F56]" />
            <span>Call {CLINIC_INFO.primaryPhoneDisplay}</span>
          </a>
        </div>

        {/* Reassurance text */}
        <div className="mt-10 pt-8 border-t border-[#E8DACB]/80 flex flex-wrap items-center justify-center gap-6 text-xs text-[#6B6864]">
          <span>✓ Direct physician assessment</span>
          <span>✓ Confidential medical records</span>
          <span>✓ Local & visiting patients welcome</span>
        </div>

      </div>
    </section>
  );
};
