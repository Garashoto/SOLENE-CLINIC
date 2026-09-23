import React from 'react';
import { X, Calendar, MessageSquare, Clock, ShieldCheck, CheckCircle2, Phone, AlertCircle } from 'lucide-react';
import { ServiceItem, CLINIC_INFO } from '../data/clinicData';
import { trackClinicEvent } from '../utils/analytics';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onBook: (serviceName: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onBook,
}) => {
  if (!service) return null;

  const handleWhatsApp = () => {
    trackClinicEvent('whatsapp_click', { service: service.name, source: 'modal' });
    const text = encodeURIComponent(`Hi Solène Clinic, I would like to enquire about ${service.name}.`);
    window.open(`https://wa.me/${CLINIC_INFO.whatsappNumber.replace(/[^0-9]/g, '')}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative bg-[#FAF4EE] rounded-2xl border border-[#E8DACB] max-w-2xl w-full p-6 sm:p-8 shadow-2xl z-10 max-h-[90vh] overflow-y-auto">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white text-[#18191B] hover:bg-[#FAF4EE] border border-[#E8DACB] transition-colors"
          aria-label="Close details"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Category & Timing Pill */}
        <div className="flex items-center gap-2 text-xs font-semibold text-[#916645] uppercase tracking-wider mb-2">
          <span>{service.category} Modality</span>
          <span aria-hidden="true">·</span>
          <span>{service.broadCategory}</span>
        </div>

        {/* Title */}
        <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#18191B] pr-8">
          {service.name}
        </h2>

        {/* Session Stats Bar */}
        <div className="my-5 p-4 rounded-xl bg-white border border-[#E8DACB] grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex items-center gap-2.5 text-xs text-[#575654]">
            <Clock className="w-4 h-4 text-[#C89F56] shrink-0" />
            <div>
              <span className="font-medium text-[#18191B] block">Session Duration</span>
              <span>{service.sessionDuration}</span>
            </div>
          </div>
          <div className="flex items-center gap-2.5 text-xs text-[#575654]">
            <ShieldCheck className="w-4 h-4 text-[#C89F56] shrink-0" />
            <div>
              <span className="font-medium text-[#18191B] block">Recommended Protocol</span>
              <span>{service.recommendedSessions}</span>
            </div>
          </div>
        </div>

        {/* Full Clinical Description */}
        <div className="space-y-4 text-sm text-[#4E4C48] leading-relaxed">
          <div>
            <h4 className="text-xs uppercase tracking-wider font-semibold text-[#18191B] mb-1.5">
              Clinical Overview & Mechanism
            </h4>
            <p className="bg-white p-4 rounded-xl border border-[#E8DACB]/70">
              {service.fullDesc}
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-wider font-semibold text-[#18191B] mb-1.5">
              Primary Medical Indication
            </h4>
            <p className="bg-white p-3.5 rounded-xl border border-[#E8DACB]/70 text-xs text-[#52504C]">
              {service.primaryIndication}
            </p>
          </div>

          {service.targetConcerns.length > 0 && (
            <div>
              <h4 className="text-xs uppercase tracking-wider font-semibold text-[#18191B] mb-2">
                Frequently Combined For Concerns:
              </h4>
              <div className="flex flex-wrap gap-2">
                {service.targetConcerns.map((concern, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-medium text-[#7A5B40] bg-white px-3 py-1 rounded-lg border border-[#E8DACB]"
                  >
                    {concern}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Honest Medical Notice */}
          <div className="p-3.5 rounded-xl bg-[#F4E9DF] border border-[#DFCBB9] flex items-start gap-2.5 text-xs text-[#6B4B32]">
            <AlertCircle className="w-4 h-4 shrink-0 text-[#916645] mt-0.5" />
            <p>
              * Suitability is evaluated in-person. Results vary by individual biological response, lifestyle, and skin type. No guaranteed or universal outcomes are promised.
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-6 mt-6 border-t border-[#E8DACB] flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={() => {
              onClose();
              onBook(service.name);
            }}
            className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 bg-[#18191B] text-[#FAF4EE] hover:bg-[#2C2D30] py-3.5 px-6 rounded-lg text-xs font-medium tracking-wider uppercase transition-colors shadow-sm"
          >
            <Calendar className="w-4 h-4 text-[#C89F56]" />
            <span>Book Consultation for {service.name}</span>
          </button>

          <button
            onClick={handleWhatsApp}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#EFE4D8] hover:bg-[#E2CEBC] text-[#18191B] py-3.5 px-5 rounded-lg text-xs font-medium transition-colors"
          >
            <MessageSquare className="w-4 h-4 text-[#25D366]" />
            <span>Ask on WhatsApp</span>
          </button>
        </div>

      </div>
    </div>
  );
};
