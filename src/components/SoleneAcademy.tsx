import React from 'react';
import { GraduationCap, BookOpen, Award, CheckCircle2, ArrowRight, MessageSquare } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';
import { trackClinicEvent } from '../utils/analytics';

export const SoleneAcademy: React.FC = () => {
  const handleAcademyEnquiry = () => {
    trackClinicEvent('whatsapp_click', { topic: 'Academy Fellowship & Training', source: 'academy_section' });
    const text = encodeURIComponent("Hi Solène Academy, I am interested in knowing more about your aesthetic cosmetology training and clinical fellowship modules.");
    window.open(`https://wa.me/${CLINIC_INFO.whatsappNumber.replace(/[^0-9]/g, '')}?text=${text}`, '_blank');
  };

  const modules = [
    {
      title: "Laser Physics & Practical Safety",
      description: "Hands-on parameters, skin phototyping, fluence calibration, and active contact cooling methodologies."
    },
    {
      title: "Chemical Peels & Barrier Science",
      description: "Superficial to medium-depth AHA/BHA peels, pH management, and post-peel barrier re-epithelialization."
    },
    {
      title: "Advanced Trichology & PRP Protocols",
      description: "Centrifugation science, scalp dermoscopy, growth factor delivery, and combination hair therapies."
    },
    {
      title: "Facial Aesthetics & Clinical Hygiene",
      description: "Aesthetic mapping, sterile tray management, client counseling, and emergency protocol guidelines."
    }
  ];

  return (
    <section id="academy" className="py-20 md:py-28 bg-[#FAF4EE] border-t border-[#E8DACB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Academy Card Lockup */}
        <div className="bg-gradient-to-br from-[#18191B] via-[#242528] to-[#18191B] text-[#FAF4EE] rounded-3xl p-8 sm:p-12 lg:p-16 border border-[#3E3F42] shadow-2xl relative overflow-hidden">
          
          {/* Subtle warm gold ambient light */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#C89F56]/10 blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left 6 cols: Info */}
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#E5C790] mb-4">
                <GraduationCap className="w-4 h-4 text-[#C89F56]" />
                <span>Professional Education Division</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white font-normal tracking-tight [text-wrap:balance]">
                Solène Academy of Medical Cosmetology
              </h2>

              <p className="mt-4 text-sm sm:text-base text-[#D4D2CD] leading-relaxed">
                Led by Dr. Megha Sahi and faculty, Solène Academy provides structured clinical immersion and mentorship for doctors and aesthetic practitioners. We combine dermatological foundation with real-world clinical rigor.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                  onClick={handleAcademyEnquiry}
                  className="inline-flex items-center gap-2 bg-[#C89F56] hover:bg-[#D4AF37] text-[#18191B] px-6 py-3.5 rounded-lg text-xs font-semibold tracking-wider uppercase transition-colors shadow-md"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Enquire for Academy Modules</span>
                </button>

                <a
                  href={`tel:${CLINIC_INFO.primaryPhone}`}
                  className="inline-flex items-center gap-2 text-xs text-[#D4D2CD] hover:text-white px-4 py-3 rounded-lg border border-[#4A4B4E] transition-colors"
                >
                  <span>Academic Desk: {CLINIC_INFO.primaryPhoneDisplay}</span>
                </a>
              </div>
            </div>

            {/* Right 6 cols: Curriculum Modules */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {modules.map((mod, i) => (
                <div
                  key={i}
                  className="bg-[#2B2C30]/70 backdrop-blur-sm rounded-xl p-5 border border-[#3F4044] flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10px] text-[#C89F56] uppercase tracking-wider font-semibold block mb-1">
                      Module 0{i + 1}
                    </span>
                    <h3 className="font-serif text-base font-semibold text-white mb-1.5">
                      {mod.title}
                    </h3>
                    <p className="text-xs text-[#AFAEA8] leading-relaxed">
                      {mod.description}
                    </p>
                  </div>
                  <div className="pt-3 mt-3 border-t border-[#3F4044] text-[10px] text-[#E5C790] flex items-center gap-1.5 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Hands-On Exposure</span>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
