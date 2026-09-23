import React, { useState, useEffect } from 'react';
import { Phone, Calendar, Menu, X, MessageSquare } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';
import { SoleneLogo } from './SoleneLogo';
import { trackClinicEvent } from '../utils/analytics';

interface HeaderProps {
  onOpenBooking: (prefillConcern?: string) => void;
  onOpenPortal: () => void;
  onOpenLedger?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking, onOpenPortal, onOpenLedger }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWhatsAppNav = () => {
    trackClinicEvent('whatsapp_click', { source: 'header_nav' });
    const text = encodeURIComponent("Hello Solène Clinic, I would like to enquire about a consultation.");
    window.open(`https://wa.me/${CLINIC_INFO.whatsappNumber.replace(/[^0-9]/g, '')}?text=${text}`, '_blank');
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF4EE]/95 backdrop-blur-md shadow-sm border-b border-[#E8DACB]'
            : 'bg-[#FAF4EE]/80 backdrop-blur-sm border-b border-[#E8DACB]/60'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Zone 1: Single element brand wordmark */}
            <a
              href="#"
              className="group flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C89F56] rounded-md"
              aria-label="Solène Skin, Hair & Laser Clinic Home"
            >
              <SoleneLogo variant="compact" />
            </a>

            {/* Zone 2: 4-6 text navigation links */}
            <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#4A4844]">
              <a
                href="#doctors"
                onClick={(e) => { e.preventDefault(); handleNavClick('#doctors'); }}
                className="hover:text-[#18191B] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1.5px] after:bg-[#C89F56] after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
              >
                Doctors
              </a>
              <a
                href="#concerns"
                onClick={(e) => { e.preventDefault(); handleNavClick('#concerns'); }}
                className="hover:text-[#18191B] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1.5px] after:bg-[#C89F56] after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
              >
                Your Concern
              </a>
              <a
                href="#services"
                onClick={(e) => { e.preventDefault(); handleNavClick('#services'); }}
                className="hover:text-[#18191B] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1.5px] after:bg-[#C89F56] after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
              >
                Treatments
              </a>
              <a
                href="#philosophy"
                onClick={(e) => { e.preventDefault(); handleNavClick('#philosophy'); }}
                className="hover:text-[#18191B] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1.5px] after:bg-[#C89F56] after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
              >
                Philosophy
              </a>
              <a
                href="#education"
                onClick={(e) => { e.preventDefault(); handleNavClick('#education'); }}
                className="hover:text-[#18191B] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1.5px] after:bg-[#C89F56] after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
              >
                Doctor Insights
              </a>
              <a
                href="#reviews"
                onClick={(e) => { e.preventDefault(); handleNavClick('#reviews'); }}
                className="hover:text-[#18191B] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1.5px] after:bg-[#C89F56] after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
              >
                Reviews
              </a>
              <a
                href="#location"
                onClick={(e) => { e.preventDefault(); handleNavClick('#location'); }}
                className="hover:text-[#18191B] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1.5px] after:bg-[#C89F56] after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
              >
                Contact
              </a>
            </nav>

            {/* Zone 3: 1-2 primary actions */}
            <div className="flex items-center gap-3">
              {/* Call Link */}
              <a
                href={`tel:${CLINIC_INFO.primaryPhone}`}
                onClick={() => trackClinicEvent('call_click', { number: CLINIC_INFO.primaryPhone, source: 'header' })}
                className="hidden md:inline-flex items-center gap-1.5 text-xs font-semibold text-[#18191B] hover:text-[#916645] px-3 py-2 rounded-lg transition-colors whitespace-nowrap"
              >
                <Phone className="w-3.5 h-3.5 text-[#C89F56]" />
                <span>{CLINIC_INFO.primaryPhoneDisplay}</span>
              </a>

              {/* Patient Care Portal Trigger */}
              <button
                onClick={onOpenPortal}
                className="hidden xl:inline-flex items-center text-xs text-[#575654] hover:text-[#18191B] px-2.5 py-1.5 rounded-lg border border-[#E8DACB] hover:border-[#C29672] transition-colors"
                title="Access Pre/Post Care Guides & Appointment Lookup"
              >
                Patient Portal
              </button>

              {/* Clinic Google Sheet Ledger (Admin & Staff) */}
              {onOpenLedger && (
                <button
                  onClick={onOpenLedger}
                  className="hidden 2xl:inline-flex items-center gap-1.5 text-xs text-[#7A5B40] hover:text-[#18191B] px-2.5 py-1.5 rounded-lg border border-[#DFCBB9] hover:bg-white transition-colors"
                  title="View Submitted Leads, Google Sheet Sync & WhatsApp Routing"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2E7D32]" />
                  <span>Sheet Sync</span>
                </button>
              )}

              {/* Primary Action CTA */}
              <button
                onClick={() => {
                  trackClinicEvent('book_consultation_click', { source: 'header_main' });
                  onOpenBooking();
                }}
                className="inline-flex items-center gap-2 bg-[#18191B] text-[#FAF4EE] hover:bg-[#2C2D30] text-xs font-medium tracking-wide uppercase px-4 py-2.5 rounded-lg transition-all duration-200 shadow-sm hover:shadow hover:-translate-y-0.5 whitespace-nowrap focus-visible:ring-2 focus-visible:ring-[#C89F56]"
              >
                <Calendar className="w-3.5 h-3.5 text-[#E5C790]" />
                <span>Book Consultation</span>
              </button>

              {/* Mobile hamburger button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-[#18191B] hover:text-[#916645] rounded-md focus:outline-none"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer content */}
          <div className="fixed top-0 right-0 bottom-0 w-5/6 max-w-sm bg-[#FAF4EE] border-l border-[#E8DACB] p-6 flex flex-col justify-between shadow-2xl overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#E8DACB]">
                <SoleneLogo variant="compact" />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-[#18191B] hover:text-[#916645]"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="py-6 flex flex-col gap-4 text-base font-medium text-[#2C2D30]">
                <a
                  href="#doctors"
                  onClick={(e) => { e.preventDefault(); handleNavClick('#doctors'); }}
                  className="py-2 hover:text-[#C29672] transition-colors border-b border-[#E8DACB]/40"
                >
                  Doctors & Experience
                </a>
                <a
                  href="#concerns"
                  onClick={(e) => { e.preventDefault(); handleNavClick('#concerns'); }}
                  className="py-2 hover:text-[#C29672] transition-colors border-b border-[#E8DACB]/40"
                >
                  Treat Your Concern
                </a>
                <a
                  href="#services"
                  onClick={(e) => { e.preventDefault(); handleNavClick('#services'); }}
                  className="py-2 hover:text-[#C29672] transition-colors border-b border-[#E8DACB]/40"
                >
                  All 30+ Treatments
                </a>
                <a
                  href="#philosophy"
                  onClick={(e) => { e.preventDefault(); handleNavClick('#philosophy'); }}
                  className="py-2 hover:text-[#C29672] transition-colors border-b border-[#E8DACB]/40"
                >
                  The Solène Philosophy
                </a>
                <a
                  href="#education"
                  onClick={(e) => { e.preventDefault(); handleNavClick('#education'); }}
                  className="py-2 hover:text-[#C29672] transition-colors border-b border-[#E8DACB]/40"
                >
                  Dr. Megha Explains
                </a>
                <a
                  href="#academy"
                  onClick={(e) => { e.preventDefault(); handleNavClick('#academy'); }}
                  className="py-2 hover:text-[#C29672] transition-colors border-b border-[#E8DACB]/40"
                >
                  Solène Academy
                </a>
                <a
                  href="#reviews"
                  onClick={(e) => { e.preventDefault(); handleNavClick('#reviews'); }}
                  className="py-2 hover:text-[#C29672] transition-colors border-b border-[#E8DACB]/40"
                >
                  Google Reviews
                </a>
                <a
                  href="#location"
                  onClick={(e) => { e.preventDefault(); handleNavClick('#location'); }}
                  className="py-2 hover:text-[#C29672] transition-colors border-b border-[#E8DACB]/40"
                >
                  Clinic Location & Hours
                </a>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenPortal();
                  }}
                  className="text-left py-2 text-[#916645] hover:text-[#18191B] font-semibold transition-colors"
                >
                  Access Patient Portal →
                </button>
              </div>
            </div>

            <div className="pt-6 border-t border-[#E8DACB] flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full flex items-center justify-center gap-2 bg-[#18191B] text-[#FAF4EE] py-3 rounded-lg text-sm font-medium tracking-wide uppercase shadow"
              >
                <Calendar className="w-4 h-4 text-[#C89F56]" />
                Book Consultation
              </button>

              <button
                onClick={handleWhatsAppNav}
                className="w-full flex items-center justify-center gap-2 bg-[#EFE4D8] text-[#18191B] hover:bg-[#E8D5C4] py-3 rounded-lg text-sm font-medium transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-[#25D366]" />
                WhatsApp +91-9646566641
              </button>

              <a
                href={`tel:${CLINIC_INFO.primaryPhone}`}
                className="text-center text-xs text-[#575654] hover:text-[#18191B] py-1"
              >
                Direct Call: {CLINIC_INFO.primaryPhoneDisplay}
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
