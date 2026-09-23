import React from 'react';
import { ShieldCheck, HeartHandshake, Microscope, Award, FileText, CheckCircle } from 'lucide-react';

export const WhySolene: React.FC = () => {
  const pillars = [
    {
      icon: ShieldCheck,
      title: "Doctor-Led Diagnostic Assessment",
      description: "You consult directly with qualified physicians before any procedure is scheduled. We take time to examine root causes rather than selling standardized packages."
    },
    {
      icon: Microscope,
      title: "Individually Calibrated Parameters",
      description: "Skin tones and hair follicle depths differ across every patient. Laser energies, peel concentrations, and injection vectors are customized to your specific phototype."
    },
    {
      icon: HeartHandshake,
      title: "Honest Suitability & Zero Pressure",
      description: "If an invasive procedure or requested treatment is clinically unnecessary or counter-productive, we openly advise against it and recommend gentler options."
    },
    {
      icon: Award,
      title: "Senior Medical Leadership",
      description: "Guided by Dr. Asha Rawat with 17+ years in the clinical field and Dr. Megha Sahi (BAMS, FMC Delhi), bringing mature clinical oversight to every protocol."
    },
    {
      icon: FileText,
      title: "Transparent Pre & Post-Care",
      description: "Clear verbal and written aftercare guidelines ensure that your healing trajectory is safe, supported, and clearly understood at every phase."
    },
    {
      icon: CheckCircle,
      title: "Hygiene & Autoclave Standards",
      description: "Strict sterile handling, disposable consumables, and medical sanitization protocols in every treatment suite for complete patient peace of mind."
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-[#FAF4EE] border-t border-[#E8DACB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-[#916645] mb-3">
            <span>Our Standards</span>
            <span aria-hidden="true">·</span>
            <span>Why Choose Solène</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#18191B] tracking-tight [text-wrap:balance]">
            A Medical Practice Founded on Ethics, Safety & Precision
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#52504C] font-normal leading-relaxed">
            In an industry often crowded with commercial hype, we commit to scientific transparency, patient-first counseling, and proven clinical excellence.
          </p>
        </div>

        {/* 6 Grid Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-[#E8DACB] p-8 shadow-sm flex flex-col justify-between hover:border-[#C29672] transition-colors"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#FAF4EE] border border-[#E8DACB] flex items-center justify-center text-[#916645] mb-5">
                    <Icon className="w-6 h-6 text-[#916645]" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-[#18191B] mb-2.5">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#575654] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
