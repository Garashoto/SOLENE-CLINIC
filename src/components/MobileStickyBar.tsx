import React, { useState } from 'react';
import { MessageSquare, Phone, Calendar, ChevronUp } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';
import { trackClinicEvent } from '../utils/analytics';

interface MobileStickyBarProps {
  onOpenBooking: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ onOpenBooking }) => {
  const [showCallMenu, setShowCallMenu] = useState(false);

  const handleWhatsApp = () => {
    trackClinicEvent('whatsapp_click', { source: 'mobile_sticky_bar' });
    const text = encodeURIComponent("Hi Solène Clinic, I would like to book a consultation.");
    window.open(`https://wa.me/${CLINIC_INFO.whatsappNumber.replace(/[^0-9]/g, '')}?text=${text}`, '_blank');
  };

  const handleCall = (num: string) => {
    trackClinicEvent('call_click', { number: num, source: 'mobile_sticky_bar' });
    setShowCallMenu(false);
  };

  return (
    <>
      {/* Call Selector Popup if user taps Call */}
      {showCallMenu && (
        <div className="fixed inset-0 z-50 md:hidden flex items-end justify-center bg-black/40 backdrop-blur-xs p-4">
          <div className="bg-[#FAF4EE] rounded-2xl border border-[#E8DACB] w-full max-w-sm p-5 shadow-2xl mb-16 animate-in fade-in slide-in-from-bottom duration-200">
            <h4 className="text-xs uppercase tracking-wider font-semibold text-[#916645] mb-2 text-center">
              Select Line to Call Clinic:
            </h4>
            <div className="space-y-2">
              <a
                href={`tel:${CLINIC_INFO.primaryPhone}`}
                onClick={() => handleCall(CLINIC_INFO.primaryPhone)}
                className="w-full flex items-center justify-center gap-2 bg-white border border-[#E8DACB] p-3 rounded-xl text-xs font-semibold text-[#18191B] active:bg-[#FAF4EE]"
              >
                <Phone className="w-3.5 h-3.5 text-[#C89F56]" />
                <span>Primary: {CLINIC_INFO.primaryPhoneDisplay}</span>
              </a>
              <a
                href={`tel:${CLINIC_INFO.secondaryPhone}`}
                onClick={() => handleCall(CLINIC_INFO.secondaryPhone)}
                className="w-full flex items-center justify-center gap-2 bg-white border border-[#E8DACB] p-3 rounded-xl text-xs font-semibold text-[#18191B] active:bg-[#FAF4EE]"
              >
                <Phone className="w-3.5 h-3.5 text-[#C89F56]" />
                <span>Secondary: {CLINIC_INFO.secondaryPhoneDisplay}</span>
              </a>
              <button
                onClick={() => setShowCallMenu(false)}
                className="w-full text-center py-2 text-xs text-[#6B6864] hover:text-[#18191B]"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Persistent Bottom Bar (<15% viewport height) */}
      <aside
        aria-label="Quick contact"
        className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-[#FAF4EE]/95 backdrop-blur-md border-t border-[#E8DACB] px-3 py-2.5 shadow-lg"
      >
        <div className="flex items-center gap-2 max-w-md mx-auto h-12">
          
          {/* Button 1: WhatsApp */}
          <button
            onClick={handleWhatsApp}
            className="flex-1 flex items-center justify-center gap-1.5 bg-[#25D366] text-white h-full rounded-xl text-xs font-semibold active:scale-[0.98] transition-transform shadow-xs whitespace-nowrap px-2"
          >
            <MessageSquare className="w-4 h-4 fill-white text-white shrink-0" />
            <span>WhatsApp</span>
          </button>

          {/* Button 2: Call Clinic */}
          <button
            onClick={() => setShowCallMenu(!showCallMenu)}
            className="flex-1 flex items-center justify-center gap-1.5 bg-white text-[#18191B] border border-[#E8DACB] h-full rounded-xl text-xs font-semibold active:scale-[0.98] transition-transform whitespace-nowrap px-2"
          >
            <Phone className="w-3.5 h-3.5 text-[#C89F56] shrink-0" />
            <span>Call Clinic</span>
          </button>

          {/* Button 3: Book Consultation */}
          <button
            onClick={() => {
              trackClinicEvent('book_consultation_click', { source: 'mobile_sticky_bar' });
              onOpenBooking();
            }}
            className="flex-[1.3] flex items-center justify-center gap-1.5 bg-[#18191B] text-[#FAF4EE] h-full rounded-xl text-xs font-semibold active:scale-[0.98] transition-transform whitespace-nowrap px-2 shadow-xs"
          >
            <Calendar className="w-3.5 h-3.5 text-[#C89F56] shrink-0" />
            <span>Book Consult</span>
          </button>

        </div>
      </aside>
    </>
  );
};
