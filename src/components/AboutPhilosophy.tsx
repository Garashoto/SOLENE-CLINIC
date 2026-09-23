import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { SoleneLogo } from './SoleneLogo';

interface AboutPhilosophyProps {
  onOpenBooking: () => void;
}

export const AboutPhilosophy: React.FC<AboutPhilosophyProps> = ({ onOpenBooking }) => {
  return (
    <section id="philosophy" className="py-20 md:py-28 bg-[#FAF4EE] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-[#916645] mb-3">
            <span>The Solène Ethos</span>
            <span aria-hidden="true">·</span>
            <span>Clinical Philosophy</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#18191B] tracking-tight [text-wrap:balance]">
            “Naturally Inspired & Scientifically Perfected”
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#52504C] font-normal leading-relaxed">
            We believe aesthetic medicine should never be about cookie-cutter packages or exaggerated quick fixes. It begins with respecting human anatomy, understanding root causes, and applying proven clinical science.
          </p>
        </div>

        {/* 3 Core Philosophical Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Pillar 1 */}
          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-8 border border-[#E8DACB] shadow-sm flex flex-col justify-between">
            <div>
              <span className="font-serif text-3xl font-light text-[#C89F56]">01</span>
              <h3 className="text-xl font-serif font-semibold text-[#18191B] mt-4 mb-3">
                Diagnostic Consultation First
              </h3>
              <p className="text-sm text-[#575654] leading-relaxed">
                Before recommending any peel, laser session, or injectable, our physicians evaluate your medical history, scalp or skin barrier condition, and previous treatments. If a procedure is not right for you, we will openly explain why.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-[#E8DACB]/60 text-xs text-[#916645] font-medium flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#C89F56]" />
              <span>Zero pressure, honest medical suitability</span>
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-8 border border-[#E8DACB] shadow-sm flex flex-col justify-between">
            <div>
              <span className="font-serif text-3xl font-light text-[#C89F56]">02</span>
              <h3 className="text-xl font-serif font-semibold text-[#18191B] mt-4 mb-3">
                Evidence-Based Protocols
              </h3>
              <p className="text-sm text-[#575654] leading-relaxed">
                From autologous platelet-rich plasma (PRP) and cellular exosome messengers to diode laser hair reduction, we use internationally recognized clinical methodologies adapted specifically for diverse skin types and weather conditions.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-[#E8DACB]/60 text-xs text-[#916645] font-medium flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#C89F56]" />
              <span>FDA-cleared technologies & sterile rigor</span>
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-8 border border-[#E8DACB] shadow-sm flex flex-col justify-between">
            <div>
              <span className="font-serif text-3xl font-light text-[#C89F56]">03</span>
              <h3 className="text-xl font-serif font-semibold text-[#18191B] mt-4 mb-3">
                Patient Education & Long-Term Care
              </h3>
              <p className="text-sm text-[#575654] leading-relaxed">
                True aesthetic wellness doesn't end when you leave the clinic chair. We educate you on sunscreen habits, post-treatment recovery, and nutrition so your skin and hair retain vitality long after your appointments.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-[#E8DACB]/60 text-xs text-[#916645] font-medium flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#C89F56]" />
              <span>Comprehensive post-procedure care guidance</span>
            </div>
          </div>

        </div>

        {/* Narrative Banner */}
        <div className="mt-14 bg-gradient-to-r from-[#F4E9DF] via-[#FBF7F2] to-[#EAE2DA] rounded-2xl p-8 md:p-12 border border-[#E0CEBF] flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-widest text-[#916645] font-semibold">
              Serving Dehradun & Uttarakhand
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#18191B] mt-2 mb-3">
              Personalized Consultations for Local & Visiting Patients
            </h3>
            <p className="text-sm text-[#52504C] leading-relaxed">
              Located in the central Race Course neighborhood of Dehradun, Solène welcomes individuals from Dehradun, Mussoorie, Rishikesh, Haridwar, Roorkee, and adjoining regions seeking genuine, non-commercial aesthetic guidance.
            </p>
          </div>
          <button
            onClick={onOpenBooking}
            className="shrink-0 inline-flex items-center gap-2 bg-[#18191B] text-[#FAF4EE] hover:bg-[#2C2D30] px-6 py-3.5 rounded-lg text-xs uppercase tracking-wider font-medium shadow-sm transition-all"
          >
            <span>Schedule Initial Assessment</span>
            <ArrowRight className="w-4 h-4 text-[#C89F56]" />
          </button>
        </div>

      </div>
    </section>
  );
};
