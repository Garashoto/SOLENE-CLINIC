import React, { useState } from 'react';
import { X, User, FileText, Calendar, ShieldCheck, HeartPulse, Clock, MessageSquare, CheckCircle, ChevronRight, Phone } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';
import { trackClinicEvent } from '../utils/analytics';

interface PatientPortalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PatientPortalModal: React.FC<PatientPortalModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'status' | 'precare' | 'postcare'>('status');
  const [queryRef, setQueryRef] = useState('');
  const [showDemoRecord, setShowDemoRecord] = useState(true);

  if (!isOpen) return null;

  const handleWhatsAppPortal = () => {
    trackClinicEvent('whatsapp_click', { source: 'patient_portal' });
    const text = encodeURIComponent("Hi Solène Clinic Desk, I need help checking my appointment records or pre/post-procedure advice.");
    window.open(`https://wa.me/${CLINIC_INFO.whatsappNumber.replace(/[^0-9]/g, '')}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

      {/* Modal Container */}
      <div className="relative bg-[#FAF4EE] rounded-3xl border border-[#E8DACB] max-w-2xl w-full p-6 sm:p-8 shadow-2xl z-10 max-h-[92vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white text-[#18191B] hover:bg-[#FAF4EE] border border-[#E8DACB]"
          aria-label="Close patient portal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Portal Header */}
        <div className="mb-6">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#916645] mb-1">
            <HeartPulse className="w-4 h-4 text-[#C89F56]" />
            <span>Solène Digital Care Portal</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#18191B]">
            Patient Care & Appointment Desk
          </h2>
          <p className="text-xs sm:text-sm text-[#575654] mt-1 leading-relaxed">
            Access your consultation notes, pre-care steps, and clinical aftercare recommendations directly.
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center gap-1.5 p-1 bg-white rounded-xl border border-[#E8DACB] mb-6">
          <button
            onClick={() => setActiveTab('status')}
            className={`flex-1 py-2 text-xs font-medium rounded-lg transition-colors ${
              activeTab === 'status' ? 'bg-[#18191B] text-[#FAF4EE]' : 'text-[#575654] hover:text-[#18191B]'
            }`}
          >
            My Appointments
          </button>
          <button
            onClick={() => setActiveTab('precare')}
            className={`flex-1 py-2 text-xs font-medium rounded-lg transition-colors ${
              activeTab === 'precare' ? 'bg-[#18191B] text-[#FAF4EE]' : 'text-[#575654] hover:text-[#18191B]'
            }`}
          >
            Pre-Treatment Prep
          </button>
          <button
            onClick={() => setActiveTab('postcare')}
            className={`flex-1 py-2 text-xs font-medium rounded-lg transition-colors ${
              activeTab === 'postcare' ? 'bg-[#18191B] text-[#FAF4EE]' : 'text-[#575654] hover:text-[#18191B]'
            }`}
          >
            Post-Care Guides
          </button>
        </div>

        {/* TAB 1: Appointment Status / Sample Patient Digital Record */}
        {activeTab === 'status' && (
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-2xl border border-[#E8DACB]">
              <label className="text-xs font-semibold text-[#18191B] block mb-1.5">
                Look up by Phone Number or Booking Ref (e.g. SOL-482910):
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={queryRef}
                  onChange={(e) => setQueryRef(e.target.value)}
                  placeholder="Enter registered mobile or ID..."
                  className="flex-1 px-3 py-2 text-xs bg-[#FAF4EE] border border-[#E8DACB] rounded-lg focus:outline-none focus:border-[#C89F56]"
                />
                <button
                  onClick={() => setShowDemoRecord(true)}
                  className="px-4 py-2 bg-[#18191B] text-[#FAF4EE] rounded-lg text-xs font-medium hover:bg-[#2C2D30]"
                >
                  Verify
                </button>
              </div>
            </div>

            {showDemoRecord && (
              <div className="bg-white p-5 rounded-2xl border border-[#E8DACB] space-y-4 shadow-xs">
                <div className="flex items-center justify-between pb-3 border-b border-[#E8DACB]/60">
                  <div>
                    <span className="text-[10px] text-[#8C8985] uppercase tracking-wider block">Patient Record</span>
                    <h3 className="font-serif text-lg font-semibold text-[#18191B]">Sneha Kapoor (Sample Preview)</h3>
                    <span className="text-[11px] text-[#575654]">Ref: SOL-739102 · Registered Patient</span>
                  </div>
                  <span className="text-xs font-semibold text-[#2E7D32] bg-[#E8F5E9] px-2.5 py-1 rounded-full border border-[#C8E6C9]">
                    Active Care Plan
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 rounded-xl bg-[#FAF4EE] border border-[#E8DACB]/80">
                    <span className="text-[#7A5B40] font-medium block">Consulting Doctor</span>
                    <span className="font-semibold text-[#18191B] text-sm mt-0.5 block">Dr. Megha Sahi</span>
                    <span className="text-[11px] text-[#6E6C68]">BAMS, FMC (Delhi)</span>
                  </div>
                  <div className="p-3 rounded-xl bg-[#FAF4EE] border border-[#E8DACB]/80">
                    <span className="text-[#7A5B40] font-medium block">Upcoming Session</span>
                    <span className="font-semibold text-[#18191B] text-sm mt-0.5 block">Laser Toning (Session 2 of 4)</span>
                    <span className="text-[11px] text-[#6E6C68]">Saturday, 11:30 AM · Suite 2</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-[#FDFBF8] border border-[#E8DACB] text-xs space-y-1">
                  <span className="font-semibold text-[#18191B] block">Doctor's Clinical Notes:</span>
                  <p className="text-[#575654] leading-relaxed">
                    “Epidermal pigment is responding well. Patient advised to maintain SPF 50 reapplication every 3 hours and discontinue active glycolic serums 48 hours prior to Session 2.”
                  </p>
                </div>
              </div>
            )}
          </div>
        )}

        {/* TAB 2: Pre-Treatment Preparation Guidelines */}
        {activeTab === 'precare' && (
          <div className="space-y-3 text-xs text-[#4E4C48]">
            <div className="bg-white p-4 rounded-xl border border-[#E8DACB]">
              <h4 className="font-semibold text-[#18191B] text-sm mb-1">
                Before Laser Hair Reduction & Toning
              </h4>
              <ul className="list-disc pl-4 space-y-1 text-[#575654]">
                <li>Avoid active sun exposure, beach trips, or tanning beds for at least 7 days before your appointment.</li>
                <li>Do not wax, pluck, or thread the treatment area for 3 weeks prior (shaving with a clean razor 24 hrs before is permitted).</li>
                <li>Inform the physician if you have started photosensitizing medications (e.g. Doxycycline, Isotretinoin).</li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded-xl border border-[#E8DACB]">
              <h4 className="font-semibold text-[#18191B] text-sm mb-1">
                Before Chemical Peels & Facials
              </h4>
              <ul className="list-disc pl-4 space-y-1 text-[#575654]">
                <li>Stop using retinoids, prescription tretinoin, and AHA/BHA exfoliants 3 days prior.</li>
                <li>Arrive with a clean, makeup-free face whenever possible.</li>
                <li>Avoid active facial bleaching or hair removal on the day of treatment.</li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded-xl border border-[#E8DACB]">
              <h4 className="font-semibold text-[#18191B] text-sm mb-1">
                Before PRP & Hair Therapies
              </h4>
              <ul className="list-disc pl-4 space-y-1 text-[#575654]">
                <li>Drink at least 1.5–2 liters of water on the day of your blood extraction for optimal platelet yield.</li>
                <li>Wash your hair with a gentle shampoo on the morning of the procedure.</li>
              </ul>
            </div>
          </div>
        )}

        {/* TAB 3: Post-Procedure Care Protocols */}
        {activeTab === 'postcare' && (
          <div className="space-y-3 text-xs text-[#4E4C48]">
            <div className="bg-white p-4 rounded-xl border border-[#E8DACB]">
              <h4 className="font-semibold text-[#18191B] text-sm mb-1">
                Post-Peel & Laser Care
              </h4>
              <ul className="list-disc pl-4 space-y-1 text-[#575654]">
                <li>Apply the prescribed calming barrier cream and broad-spectrum sunscreen every 3–4 hours.</li>
                <li>Avoid hot showers, steam, saunas, and intense workouts for 48 hours.</li>
                <li>Do not scratch, pick, or scrub any mild surface peeling or flaking.</li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded-xl border border-[#E8DACB]">
              <h4 className="font-semibold text-[#18191B] text-sm mb-1">
                Post-Injectable Care (Botox / Fillers)
              </h4>
              <ul className="list-disc pl-4 space-y-1 text-[#575654]">
                <li>Remain upright for 4 hours following neuromodulator injections.</li>
                <li>Avoid rubbing or massaging the injection points for 24 hours.</li>
                <li>Avoid strenuous exercise and excessive heat exposure for 24–48 hours.</li>
              </ul>
            </div>
          </div>
        )}

        {/* Portal Help Desk Footer */}
        <div className="pt-6 mt-6 border-t border-[#E8DACB] flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-[#575654]">
            Need immediate clarification from our clinical team?
          </div>
          <button
            onClick={handleWhatsAppPortal}
            className="inline-flex items-center gap-2 bg-[#25D366] text-white hover:bg-[#20BA5A] px-4 py-2.5 rounded-xl text-xs font-semibold transition-colors"
          >
            <MessageSquare className="w-4 h-4 fill-white text-white" />
            <span>Chat with Patient Desk</span>
          </button>
        </div>

      </div>
    </div>
  );
};
