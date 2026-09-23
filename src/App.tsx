import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustCredibilityStrip } from './components/TrustCredibilityStrip';
import { ConcernsNavigator } from './components/ConcernsNavigator';
import { DoctorsSection } from './components/DoctorsSection';
import { FeaturedTreatments } from './components/FeaturedTreatments';
import { FullServicesCatalog } from './components/FullServicesCatalog';
import { AboutPhilosophy } from './components/AboutPhilosophy';
import { ClinicGallery } from './components/ClinicGallery';
import { DrMeghaExplains } from './components/DrMeghaExplains';
import { SoleneAcademy } from './components/SoleneAcademy';
import { WhySolene } from './components/WhySolene';
import { GoogleReviewsSection } from './components/GoogleReviewsSection';
import { FAQSection } from './components/FAQSection';
import { LocationSection } from './components/LocationSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { MobileStickyBar } from './components/MobileStickyBar';
import { ConsultationBookingModal } from './components/ConsultationBookingModal';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { PatientPortalModal } from './components/PatientPortalModal';
import { GoogleSheetLeadLedgerModal } from './components/GoogleSheetLeadLedgerModal';
import { ServiceItem } from './data/clinicData';
import { Table } from 'lucide-react';

export default function App() {
  // Modal states
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [bookingConcern, setBookingConcern] = useState<string>('');
  const [bookingDoctor, setBookingDoctor] = useState<string>('');

  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [patientPortalOpen, setPatientPortalOpen] = useState(false);
  const [leadLedgerOpen, setLeadLedgerOpen] = useState(false);

  // Handlers
  const handleOpenBooking = (concern?: string, doctorName?: string) => {
    setBookingConcern(concern || '');
    setBookingDoctor(doctorName || '');
    setBookingModalOpen(true);
  };

  const handleSelectService = (service: ServiceItem) => {
    setSelectedService(service);
  };

  const handleBookFromServiceModal = (serviceName: string) => {
    setSelectedService(null);
    handleOpenBooking(serviceName);
  };

  return (
    <div className="min-h-screen bg-[#FAF4EE] text-[#18191B] font-sans antialiased selection:bg-[#EBDBC9] selection:text-[#18191B]">
      {/* Top Fixed Header */}
      <Header
        onOpenBooking={() => handleOpenBooking()}
        onOpenPortal={() => setPatientPortalOpen(true)}
        onOpenLedger={() => setLeadLedgerOpen(true)}
      />

      {/* Main Page Flow */}
      <main id="main-content">
        {/* 1. Hero Section */}
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* 2. Trust Credibility Strip */}
        <TrustCredibilityStrip />

        {/* 3. Doctors Section - Prominent Credibility */}
        <DoctorsSection onOpenBooking={(concern, doc) => handleOpenBooking(concern, doc)} />

        {/* 4. Problem-First Concerns Navigator */}
        <ConcernsNavigator
          onSelectService={handleSelectService}
          onOpenBooking={(concern) => handleOpenBooking(concern)}
        />

        {/* 5. Featured Treatments Bento */}
        <FeaturedTreatments
          onSelectService={handleSelectService}
          onOpenBooking={(concern) => handleOpenBooking(concern)}
        />

        {/* 6. Complete Treatment Catalogue (All 30+ services from the card) */}
        <FullServicesCatalog
          onSelectService={handleSelectService}
          onOpenBooking={(concern) => handleOpenBooking(concern)}
        />

        {/* 7. Clinical Philosophy: "Naturally Inspired & Scientifically Perfected" */}
        <AboutPhilosophy onOpenBooking={() => handleOpenBooking()} />

        {/* 8. Doctor Educational Articles: Dr. Megha Explains */}
        <DrMeghaExplains onOpenBooking={(concern) => handleOpenBooking(concern)} />

        {/* 9. Solène Academy of Medical Cosmetology */}
        <SoleneAcademy />

        {/* 10. Clinic Atmosphere & Facility Gallery */}
        <ClinicGallery />

        {/* 11. Why Solène - Clinical Standards */}
        <WhySolene />

        {/* 12. Verified Google Reviews & Rating */}
        <GoogleReviewsSection />

        {/* 13. FAQ Section */}
        <FAQSection />

        {/* 14. Location & Contact in Race Course, Dehradun */}
        <LocationSection />

        {/* 15. Final Conversion Anchor */}
        <FinalCTA onOpenBooking={() => handleOpenBooking()} />
      </main>

      {/* Footer */}
      <Footer
        onOpenBooking={() => handleOpenBooking()}
        onOpenPortal={() => setPatientPortalOpen(true)}
        onOpenLedger={() => setLeadLedgerOpen(true)}
      />

      {/* Mobile Persistent Fixed Bottom CTA Bar (<15% viewport height) */}
      <MobileStickyBar onOpenBooking={() => handleOpenBooking()} />

      {/* Quick Access Floating Chip for Google Sheet Leads Hub (Bottom Left) */}
      <aside aria-label="Staff records shortcut" className="fixed bottom-20 left-4 z-30 hidden sm:block">
        <button
          onClick={() => setLeadLedgerOpen(true)}
          className="group inline-flex items-center gap-2 bg-[#18191B] text-[#FAF4EE] hover:bg-[#2C2D30] px-3.5 py-2 rounded-full border border-[#C89F56]/40 shadow-lg text-xs font-medium transition-transform hover:scale-105"
          title="Open Google Sheets Leads Hub & Dual WhatsApp Dispatcher"
        >
          <Table className="w-3.5 h-3.5 text-[#C89F56]" />
          <span>Google Sheet Leads</span>
          <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
        </button>
      </aside>

      {/* Modals & Interactive Portals */}
      <ConsultationBookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        prefillConcern={bookingConcern}
        prefillDoctor={bookingDoctor}
        onOpenLedger={() => setLeadLedgerOpen(true)}
      />

      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onBook={handleBookFromServiceModal}
      />

      <PatientPortalModal
        isOpen={patientPortalOpen}
        onClose={() => setPatientPortalOpen(false)}
      />

      {/* Google Sheet Lead Ledger & Sync Hub */}
      <GoogleSheetLeadLedgerModal
        isOpen={leadLedgerOpen}
        onClose={() => setLeadLedgerOpen(false)}
      />
    </div>
  );
}
