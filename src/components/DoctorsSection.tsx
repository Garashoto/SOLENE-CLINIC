import React from 'react';
import { Calendar, Stethoscope, Award, CheckCircle2, MessageSquare, MapPin, Sparkles } from 'lucide-react';
import { DOCTORS, CLINIC_INFO } from '../data/clinicData';
import { trackClinicEvent } from '../utils/analytics';

interface DoctorsSectionProps {
  onOpenBooking: (prefillConcern?: string, doctorName?: string) => void;
}

export const DoctorsSection: React.FC<DoctorsSectionProps> = ({ onOpenBooking }) => {
  const handleWhatsAppDoctor = (docName: string) => {
    trackClinicEvent('whatsapp_click', { doctor: docName, source: 'doctors_section' });
    const text = encodeURIComponent(`Hi Solène Clinic, I would like to book a consultation with ${docName}.`);
    window.open(`https://wa.me/${CLINIC_INFO.whatsappNumber.replace(/[^0-9]/g, '')}?text=${text}`, '_blank');
  };

  return (
    <section id="doctors" className="py-20 md:py-28 bg-[#FAF5EE] border-t border-[#E8DACB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header - Simpler & Elevated */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#916645] bg-white px-3.5 py-1.5 rounded-full border border-[#E8DACB] mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#C89F56]" />
            <span>Physician Leadership</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#18191B] tracking-tight font-medium [text-wrap:balance]">
            Consulting Aesthetic Physicians
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#52504C] font-normal leading-relaxed">
            Every clinical procedure is doctor-led. Bringing senior metropolitan expertise from <strong className="text-[#18191B]">Bangalore, Delhi, and Chandigarh</strong> directly to Race Course, Dehradun.
          </p>
        </div>

        {/* Doctor Cards Grid - Simple, Attractive, High Contrast */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          
          {DOCTORS.map((doctor) => {
            const isAsha = doctor.id === 'dr-asha-rawat';
            return (
              <div
                key={doctor.id}
                className={`bg-white rounded-3xl border ${
                  isAsha ? 'border-[#C89F56]/60 shadow-lg shadow-[#C89F56]/5 ring-1 ring-[#C89F56]/20' : 'border-[#E8DACB] shadow-sm'
                } p-7 md:p-9 hover:shadow-md transition-all duration-300 flex flex-col justify-between relative overflow-hidden`}
              >
                {/* Highlight badge for Senior Doctor Dr. Asha Rawat */}
                {isAsha && (
                  <div className="absolute top-0 right-0 bg-gradient-to-l from-[#C89F56] to-[#D4AF37] text-[#18191B] text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-bl-2xl shadow-xs">
                    Senior Doctor · 17+ Yrs Exp
                  </div>
                )}

                <div>
                  {/* Top Doctor Profile Header */}
                  <div className="flex items-start justify-between gap-4 pb-6 border-b border-[#E8DACB]/60">
                    <div>
                      {/* Name */}
                      <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#18191B]">
                        {doctor.name}
                      </h3>
                      
                      {/* Title */}
                      <p className="text-sm font-medium text-[#916645] mt-1">
                        {doctor.title}
                      </p>
                      
                      {/* Credentials Tag */}
                      <div className="flex flex-wrap items-center gap-2 mt-2">
                        {isAsha ? (
                          <div className="inline-flex items-center gap-1.5 text-xs text-[#18191B] bg-[#F4EBE1] px-3 py-1 rounded-full border border-[#E8DACB] font-semibold">
                            <MapPin className="w-3 h-3 text-[#C89F56]" />
                            <span>Experience in Bangalore · Delhi · Chandigarh</span>
                          </div>
                        ) : (
                          <div className="inline-flex items-center gap-1.5 text-xs text-[#18191B] bg-[#F4EBE1] px-3 py-1 rounded-full border border-[#E8DACB] font-medium">
                            <Award className="w-3 h-3 text-[#C89F56]" />
                            <span>BAMS · Fellowship in Medical Cosmetology (Delhi)</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Medical Icon */}
                    <div className="w-12 h-12 rounded-2xl bg-[#FAF4EE] border border-[#E8DACB] flex items-center justify-center text-[#916645] shrink-0 mt-2 sm:mt-0">
                      <Stethoscope className="w-6 h-6 text-[#C89F56]" />
                    </div>
                  </div>

                  {/* Doctor Bio */}
                  <p className="text-xs sm:text-sm text-[#4E4C48] mt-6 leading-relaxed">
                    {doctor.bio}
                  </p>

                  {/* Clinical Philosophy Quote */}
                  <div className="mt-5 p-4 rounded-2xl bg-[#FAF5EE] border-l-2 border-[#C89F56] text-xs text-[#52504C] italic leading-relaxed">
                    “{doctor.approach}”
                  </div>

                  {/* Specialisation Areas */}
                  <div className="mt-6">
                    <span className="text-xs uppercase tracking-wider font-semibold text-[#18191B] block mb-3">
                      Clinical Focus:
                    </span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {doctor.specialisations.map((spec, i) => (
                        <li key={i} className="text-xs text-[#575654] flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#C89F56] shrink-0" />
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="pt-8 mt-8 border-t border-[#E8DACB]/60 flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => {
                      trackClinicEvent('book_consultation_click', { doctor: doctor.name, source: 'doctor_card' });
                      onOpenBooking(undefined, doctor.name);
                    }}
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-[#18191B] text-[#FAF4EE] hover:bg-[#2C2D30] py-3.5 px-4 rounded-xl text-xs font-semibold uppercase tracking-wider transition-colors shadow-sm"
                  >
                    <Calendar className="w-4 h-4 text-[#C89F56]" />
                    <span>Book with {doctor.name.split(' ')[1]}</span>
                  </button>

                  <button
                    onClick={() => handleWhatsAppDoctor(doctor.name)}
                    className="inline-flex items-center justify-center gap-1.5 bg-[#FAF4EE] hover:bg-[#F3E9DF] text-[#18191B] border border-[#E8DACB] py-3.5 px-4 rounded-xl text-xs font-semibold transition-colors"
                  >
                    <MessageSquare className="w-4 h-4 text-[#25D366]" />
                    <span>WhatsApp</span>
                  </button>
                </div>

              </div>
            );
          })}

        </div>

        {/* Doctor Trust Footnote */}
        <div className="mt-12 text-center text-xs text-[#6A6763] max-w-xl mx-auto">
          <p>
            * Ethical Practice Guarantee: All appointments are 1-on-1 private diagnostic consultations. We adhere strictly to ethical clinical guidelines and scientific safety protocols.
          </p>
        </div>

      </div>
    </section>
  );
};
