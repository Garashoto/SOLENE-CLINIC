import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, User, Phone, CheckCircle2, MessageSquare, MapPin, Video, AlertCircle, Table, Check, ExternalLink } from 'lucide-react';
import { CLINIC_INFO, DOCTORS, ALL_SERVICES, CONCERNS } from '../data/clinicData';
import { trackClinicEvent } from '../utils/analytics';
import { saveLead, generateWhatsAppRouteUrl, ClinicLead } from '../utils/leadStorage';

interface ConsultationBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefillConcern?: string;
  prefillDoctor?: string;
  onOpenLedger?: () => void;
}

export const ConsultationBookingModal: React.FC<ConsultationBookingModalProps> = ({
  isOpen,
  onClose,
  prefillConcern = '',
  prefillDoctor = '',
  onOpenLedger,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    concern: prefillConcern || '',
    doctor: prefillDoctor || 'Any Available Doctor',
    type: 'In-Clinic (Race Course, Dehradun)',
    preferredDate: '',
    preferredTime: '11:00 AM - 01:00 PM',
    notes: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedLead, setSubmittedLead] = useState<ClinicLead | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (prefillConcern) {
      setFormData((prev) => ({ ...prev, concern: prefillConcern }));
    }
    if (prefillDoctor) {
      setFormData((prev) => ({ ...prev, doctor: prefillDoctor }));
    }
  }, [prefillConcern, prefillDoctor]);

  if (!isOpen) return null;

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your full name.';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required for appointment confirmation.';
    } else if (formData.phone.replace(/[^0-9]/g, '').length < 10) {
      newErrors.phone = 'Please enter a valid 10-digit mobile number.';
    }
    if (!formData.concern) {
      newErrors.concern = 'Please specify your primary concern or service.';
    }
    if (!formData.preferredDate) {
      newErrors.preferredDate = 'Please select a preferred date.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // 1. Save lead to Google Sheets persistent ledger with exact Date & Time
    const newLead = saveLead({
      name: formData.name.trim(),
      phone: formData.phone.trim(),
      concern: formData.concern,
      doctor: formData.doctor,
      type: formData.type,
      preferredDate: formData.preferredDate,
      preferredTime: formData.preferredTime,
      notes: formData.notes.trim(),
    });

    setSubmittedLead(newLead);
    setIsSubmitted(true);

    trackClinicEvent('form_submission', {
      reference: newLead.id,
      doctor: formData.doctor,
      concern: formData.concern,
      type: formData.type,
      timestamp: `${newLead.submissionDate} ${newLead.submissionTime}`
    });

    // 2. Automatically dispatch WhatsApp message prompt to Line 1
    const line1Url = generateWhatsAppRouteUrl(newLead, CLINIC_INFO.primaryPhone);
    window.open(line1Url, '_blank');
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    setSubmittedLead(null);
    setFormData({
      name: '',
      phone: '',
      concern: '',
      doctor: 'Any Available Doctor',
      type: 'In-Clinic (Race Course, Dehradun)',
      preferredDate: '',
      preferredTime: '11:00 AM - 01:00 PM',
      notes: '',
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={handleResetAndClose}
      />

      {/* Modal Dialog */}
      <div className="relative bg-[#FAF4EE] rounded-3xl border border-[#E8DACB] max-w-xl w-full p-6 sm:p-9 shadow-2xl z-10 max-h-[92vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={handleResetAndClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white text-[#18191B] hover:bg-[#FAF4EE] border border-[#E8DACB] transition-colors"
          aria-label="Close booking modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            {/* Header */}
            <div className="mb-6">
              <span className="text-[10px] uppercase tracking-widest text-[#916645] font-semibold block mb-1">
                Solène Consultation Scheduler
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#18191B]">
                Request a Consultation
              </h2>
              <p className="text-xs sm:text-sm text-[#575654] mt-1.5 leading-relaxed">
                Book with <strong className="text-[#18191B]">Dr. Asha Rawat</strong> (Senior Doctor · 17+ yrs exp. in Bangalore, Delhi & CHD) or <strong className="text-[#18191B]">Dr. Megha Sahi</strong> (BAMS, FMC Delhi).
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              
              {/* Patient Full Name */}
              <div>
                <label className="font-semibold text-[#18191B] block mb-1">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-[#8C8985] absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Sneha Kapoor"
                    className={`w-full pl-9 pr-3 py-2.5 bg-white border rounded-xl focus:outline-none focus:border-[#C89F56] text-xs text-[#18191B] ${
                      errors.name ? 'border-red-400' : 'border-[#E8DACB]'
                    }`}
                  />
                </div>
                {errors.name && <span className="text-[11px] text-red-600 mt-1 block">{errors.name}</span>}
              </div>

              {/* Phone Number */}
              <div>
                <label className="font-semibold text-[#18191B] block mb-1">
                  Phone Number (WhatsApp preferred) *
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-[#8C8985] absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className={`w-full pl-9 pr-3 py-2.5 bg-white border rounded-xl focus:outline-none focus:border-[#C89F56] text-xs text-[#18191B] ${
                      errors.phone ? 'border-red-400' : 'border-[#E8DACB]'
                    }`}
                  />
                </div>
                {errors.phone && <span className="text-[11px] text-red-600 mt-1 block">{errors.phone}</span>}
              </div>

              {/* Concern or Service Selector */}
              <div>
                <label className="font-semibold text-[#18191B] block mb-1">
                  Primary Concern or Treatment *
                </label>
                <select
                  value={formData.concern}
                  onChange={(e) => setFormData({ ...formData, concern: e.target.value })}
                  className={`w-full px-3 py-2.5 bg-white border rounded-xl focus:outline-none focus:border-[#C89F56] text-xs text-[#18191B] ${
                    errors.concern ? 'border-red-400' : 'border-[#E8DACB]'
                  }`}
                >
                  <option value="">Select your area of interest...</option>
                  <optgroup label="General Concerns">
                    {CONCERNS.map((c) => (
                      <option key={c.id} value={c.title}>{c.title}</option>
                    ))}
                  </optgroup>
                  <optgroup label="Specific Treatments">
                    {ALL_SERVICES.map((s) => (
                      <option key={s.id} value={s.name}>{s.name} ({s.category})</option>
                    ))}
                  </optgroup>
                </select>
                {errors.concern && <span className="text-[11px] text-red-600 mt-1 block">{errors.concern}</span>}
              </div>

              {/* Preferred Doctor & Consultation Mode */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="font-semibold text-[#18191B] block mb-1">
                    Preferred Doctor
                  </label>
                  <select
                    value={formData.doctor}
                    onChange={(e) => setFormData({ ...formData, doctor: e.target.value })}
                    className="w-full px-3 py-2.5 bg-white border border-[#E8DACB] rounded-xl focus:outline-none focus:border-[#C89F56] text-xs text-[#18191B]"
                  >
                    <option value="Dr. Asha Rawat">Dr. Asha Rawat (Senior Doctor · Bangalore, Delhi, CHD exp.)</option>
                    <option value="Dr. Megha Sahi">Dr. Megha Sahi (Aesthetic Physician · FMC Delhi)</option>
                    <option value="Any Available Doctor">Any Available Doctor</option>
                  </select>
                </div>

                <div>
                  <label className="font-semibold text-[#18191B] block mb-1">
                    Consultation Mode
                  </label>
                  <select
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                    className="w-full px-3 py-2.5 bg-white border border-[#E8DACB] rounded-xl focus:outline-none focus:border-[#C89F56] text-xs text-[#18191B]"
                  >
                    <option value="In-Clinic (Race Course, Dehradun)">In-Clinic (Race Course, Dehradun)</option>
                    <option value="Video Tele-Consultation">Video Tele-Consultation</option>
                  </select>
                </div>
              </div>

              {/* Preferred Date & Time Window */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="font-semibold text-[#18191B] block mb-1">
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    min={new Date().toISOString().split('T')[0]}
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className={`w-full px-3 py-2.5 bg-white border rounded-xl focus:outline-none focus:border-[#C89F56] text-xs text-[#18191B] ${
                      errors.preferredDate ? 'border-red-400' : 'border-[#E8DACB]'
                    }`}
                  />
                  {errors.preferredDate && <span className="text-[11px] text-red-600 mt-1 block">{errors.preferredDate}</span>}
                </div>

                <div>
                  <label className="font-semibold text-[#18191B] block mb-1">
                    Time Window
                  </label>
                  <select
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="w-full px-3 py-2.5 bg-white border border-[#E8DACB] rounded-xl focus:outline-none focus:border-[#C89F56] text-xs text-[#18191B]"
                  >
                    <option value="11:00 AM - 01:00 PM">Morning (11:00 AM – 01:00 PM)</option>
                    <option value="01:00 PM - 03:00 PM">Afternoon (01:00 PM – 03:00 PM)</option>
                    <option value="03:00 PM - 05:00 PM">Late Afternoon (03:00 PM – 05:00 PM)</option>
                    <option value="05:00 PM - 07:30 PM">Evening (05:00 PM – 07:30 PM)</option>
                  </select>
                </div>
              </div>

              {/* Optional Notes */}
              <div>
                <label className="font-semibold text-[#18191B] block mb-1">
                  Additional Notes or Symptoms (Optional)
                </label>
                <textarea
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="e.g. Previous treatments, traveling from Rishikesh/Haridwar, allergies..."
                  className="w-full px-3 py-2 bg-white border border-[#E8DACB] rounded-xl focus:outline-none focus:border-[#C89F56] text-xs text-[#18191B]"
                />
              </div>

              {/* Dual Routing Guarantee Note */}
              <div className="p-3 bg-[#F4EBE1]/80 rounded-xl border border-[#E8DACB] text-[11px] text-[#575654] space-y-1">
                <div className="font-semibold text-[#18191B] flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#2E7D32]" />
                  <span>Automatic Google Sheet & Dual WhatsApp Routing</span>
                </div>
                <p>
                  Upon submission, this form is collected with exact date & time into our clinic Google Sheet ledger and forwarded to both clinic contact lines ({CLINIC_INFO.primaryPhoneDisplay} and {CLINIC_INFO.secondaryPhoneDisplay}).
                </p>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-[#18191B] text-[#FAF4EE] hover:bg-[#2C2D30] py-3.5 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all shadow-sm active:scale-[0.99]"
                >
                  <Calendar className="w-4 h-4 text-[#C89F56]" />
                  <span>Submit & Route to Clinic WhatsApp</span>
                </button>
              </div>

              <div className="text-center text-[11px] text-[#7A7874] pt-1">
                <span>Direct Desk Assistance: {CLINIC_INFO.primaryPhoneDisplay} · {CLINIC_INFO.secondaryPhoneDisplay}</span>
              </div>

            </form>
          </div>
        ) : (
          /* Confirmation State with Timestamp & Dual WhatsApp Route Options */
          <div className="text-center py-4">
            <div className="w-16 h-16 rounded-full bg-[#E8F5E9] border border-[#C8E6C9] text-[#2E7D32] flex items-center justify-center mx-auto mb-3">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <span className="text-[10px] uppercase tracking-widest text-[#2E7D32] font-semibold bg-[#E8F5E9] px-3 py-1 rounded-full border border-[#C8E6C9] inline-block mb-2">
              ✓ Logged in Clinic Google Sheet Ledger
            </span>

            <h3 className="font-serif text-2xl font-semibold text-[#18191B]">
              Consultation Registered
            </h3>

            <p className="text-xs text-[#52504C] mt-1 max-w-sm mx-auto">
              Your details were saved at <strong className="text-[#18191B]">{submittedLead?.submissionDate} at {submittedLead?.submissionTime}</strong> with Reference ID <strong className="text-[#18191B] font-mono">{submittedLead?.id}</strong>.
            </p>

            {/* Summary Ticket */}
            <div className="my-5 p-4 rounded-2xl bg-white border border-[#E8DACB] text-left text-xs space-y-2">
              <div className="flex justify-between border-b border-[#E8DACB]/60 pb-2">
                <span className="text-[#6E6C68]">Submission Time:</span>
                <span className="font-semibold text-[#18191B]">{submittedLead?.submissionDate} · {submittedLead?.submissionTime}</span>
              </div>
              <div className="flex justify-between border-b border-[#E8DACB]/60 pb-2">
                <span className="text-[#6E6C68]">Patient:</span>
                <span className="font-semibold text-[#18191B]">{submittedLead?.name} ({submittedLead?.phone})</span>
              </div>
              <div className="flex justify-between border-b border-[#E8DACB]/60 pb-2">
                <span className="text-[#6E6C68]">Doctor:</span>
                <span className="font-semibold text-[#18191B]">{submittedLead?.doctor}</span>
              </div>
              <div className="flex justify-between border-b border-[#E8DACB]/60 pb-2">
                <span className="text-[#6E6C68]">Concern:</span>
                <span className="font-semibold text-[#18191B]">{submittedLead?.concern}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#6E6C68]">Preferred Slot:</span>
                <span className="font-semibold text-[#18191B]">{submittedLead?.preferredDate} ({submittedLead?.preferredTime})</span>
              </div>
            </div>

            {/* Dual WhatsApp Action Buttons */}
            <div className="space-y-2.5">
              <p className="text-[11px] font-semibold text-[#7A5B40] uppercase tracking-wider">
                Route to Clinic WhatsApp Desks:
              </p>

              {/* Line 1 */}
              <a
                href={submittedLead ? generateWhatsAppRouteUrl(submittedLead, CLINIC_INFO.primaryPhone) : '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BA5A] text-white py-3 px-4 rounded-xl text-xs font-semibold transition-colors shadow-sm"
              >
                <MessageSquare className="w-4 h-4 fill-white text-white" />
                <span>Send to Clinic Line 1 ({CLINIC_INFO.primaryPhoneDisplay})</span>
              </a>

              {/* Line 2 */}
              <a
                href={submittedLead ? generateWhatsAppRouteUrl(submittedLead, CLINIC_INFO.secondaryPhone) : '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-[#18191B] hover:bg-[#2C2D30] text-[#FAF4EE] py-3 px-4 rounded-xl text-xs font-semibold transition-colors border border-[#444] shadow-sm"
              >
                <MessageSquare className="w-4 h-4 text-[#25D366]" />
                <span>Send to Clinic Line 2 ({CLINIC_INFO.secondaryPhoneDisplay})</span>
              </a>

              {/* Ledger View Option */}
              {onOpenLedger && (
                <button
                  type="button"
                  onClick={() => {
                    handleResetAndClose();
                    onOpenLedger();
                  }}
                  className="w-full inline-flex items-center justify-center gap-1.5 text-xs text-[#7A5B40] hover:text-[#18191B] py-2 font-medium"
                >
                  <Table className="w-3.5 h-3.5 text-[#C89F56]" />
                  <span>Open Clinic Google Sheet Lead Ledger</span>
                </button>
              )}

              <button
                type="button"
                onClick={handleResetAndClose}
                className="w-full text-xs text-[#575654] hover:text-[#18191B] py-2"
              >
                Return to Clinic Website
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

