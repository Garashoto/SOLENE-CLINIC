import React from 'react';
import { Phone, MapPin, Clock, MessageSquare, ExternalLink, ShieldCheck, Heart } from 'lucide-react';
import { CLINIC_INFO, DOCTORS } from '../data/clinicData';
import { SoleneLogo } from './SoleneLogo';
import { trackClinicEvent } from '../utils/analytics';

interface FooterProps {
  onOpenBooking: () => void;
  onOpenPortal: () => void;
  onOpenLedger?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking, onOpenPortal, onOpenLedger }) => {
  const handleWhatsApp = () => {
    trackClinicEvent('whatsapp_click', { source: 'footer' });
    const text = encodeURIComponent("Hi Solène Clinic, I would like to enquire about a consultation.");
    window.open(`https://wa.me/${CLINIC_INFO.whatsappNumber.replace(/[^0-9]/g, '')}?text=${text}`, '_blank');
  };

  return (
    <footer className="bg-[#18191B] text-[#E5E2DC] pt-16 pb-24 md:pb-16 border-t border-[#313235]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#313235]">
          
          {/* Brand & Identity Column (4 cols) */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <SoleneLogo variant="compact" theme="dark" />

            <p className="font-serif italic text-sm text-[#C89F56] mt-3">
              “Naturally Inspired & Scientifically Perfected”
            </p>

            <p className="text-xs text-[#A8A5A0] mt-3 leading-relaxed max-w-sm">
              Premier aesthetic dermatology, laser medicine, and cosmetology training academy situated in Race Course, Dehradun. Serving patients across Uttarakhand with doctor-led integrity.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <button
                onClick={onOpenBooking}
                className="bg-[#C89F56] hover:bg-[#D4AF37] text-[#18191B] px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors shadow-sm"
              >
                Book Consultation
              </button>
              <button
                onClick={onOpenPortal}
                className="bg-[#2B2C2F] hover:bg-[#383A3E] text-white px-3 py-2 rounded-lg text-xs font-medium transition-colors border border-[#44464B]"
              >
                Patient Portal
              </button>
            </div>
          </div>

          {/* Clinical Doctors (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-[#C89F56] mb-4">
              Consulting Physicians
            </h4>
            <div className="space-y-4 text-xs text-[#A8A5A0]">
              <div>
                <span className="font-semibold text-white block">Dr. Megha Sahi</span>
                <span className="text-[#C89F56] block">BAMS, FMC (Delhi)</span>
                <span className="text-[11px] block mt-0.5">Aesthetic Physician & Laser Cosmetologist</span>
              </div>
              <div className="pt-2 border-t border-[#313235]">
                <span className="font-semibold text-white block">Dr. Asha Rawat</span>
                <span className="text-[#C89F56] block">Senior Doctor</span>
                <span className="text-[11px] block mt-0.5">17+ Years Experience · Bangalore · Delhi · Chandigarh</span>
              </div>
            </div>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-[#C89F56] mb-4">
              Explore
            </h4>
            <ul className="space-y-2 text-xs text-[#A8A5A0]">
              <li>
                <a href="#doctors" className="hover:text-white transition-colors">Our Doctors</a>
              </li>
              <li>
                <a href="#concerns" className="hover:text-white transition-colors">Target Concerns</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">All 30+ Treatments</a>
              </li>
              <li>
                <a href="#education" className="hover:text-white transition-colors">Dr. Megha Explains</a>
              </li>
              <li>
                <a href="#academy" className="hover:text-white transition-colors">Solène Academy</a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-white transition-colors">Google Reviews</a>
              </li>
              <li>
                <a href="#location" className="hover:text-white transition-colors">Location & Hours</a>
              </li>
            </ul>
          </div>

          {/* Clinic Contact (3 cols) */}
          <div className="lg:col-span-3 space-y-3 text-xs text-[#A8A5A0]">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-[#C89F56] mb-4">
              Race Course Clinic
            </h4>

            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-[#C89F56] shrink-0 mt-0.5" />
              <span>
                4th Floor, 90-D Guru Nanak Vihar,<br />
                Race Course, Dehradun – 248001
              </span>
            </div>

            <div className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-[#C89F56] shrink-0" />
              <div>
                <a href={`tel:${CLINIC_INFO.primaryPhone}`} className="hover:text-white block">
                  {CLINIC_INFO.primaryPhoneDisplay}
                </a>
                <a href={`tel:${CLINIC_INFO.secondaryPhone}`} className="hover:text-white block">
                  {CLINIC_INFO.secondaryPhoneDisplay}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <MessageSquare className="w-4 h-4 text-[#25D366] shrink-0" />
              <button onClick={handleWhatsApp} className="hover:text-white text-left">
                WhatsApp Desk: +91-9646566641
              </button>
            </div>

            <div className="flex items-start gap-2.5 pt-1">
              <Clock className="w-4 h-4 text-[#C89F56] shrink-0 mt-0.5" />
              <span>{CLINIC_INFO.timings.weekdays}</span>
            </div>
          </div>

        </div>

        {/* Ethical Medical Disclaimer */}
        <div className="py-6 border-b border-[#313235] text-[11px] text-[#8A8782] leading-relaxed">
          <p>
            <strong>Medical & Regulatory Disclaimer:</strong> Content, educational articles, and treatment overviews on this website are provided solely for general educational purposes. No content constitutes individualized medical diagnosis or guarantees any specific clinical result. Aesthetic outcomes vary significantly between patients based on medical history, genetics, age, and adherence to aftercare. An in-person consultation with our physicians is mandatory before any clinical procedure or prescription at Solène.
          </p>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8A8782]">
          <p>
            © {new Date().getFullYear()} Solène Skin, Hair & Laser Clinic & Academy. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#location" className="hover:text-white transition-colors">Privacy & Data Ethics</a>
            <span aria-hidden="true">·</span>
            <a href="#location" className="hover:text-white transition-colors">Patient Charter</a>
            <span aria-hidden="true">·</span>
            <button onClick={onOpenPortal} className="hover:text-[#C89F56] transition-colors">
              Patient Portal
            </button>
            {onOpenLedger && (
              <>
                <span aria-hidden="true">·</span>
                <button
                  onClick={onOpenLedger}
                  className="text-[#C89F56] hover:text-white transition-colors font-medium flex items-center gap-1"
                >
                  <span>Google Sheet Ledger</span>
                </button>
              </>
            )}
          </div>
        </div>

      </div>
    </footer>
  );
};
