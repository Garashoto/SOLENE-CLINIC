import React from 'react';
import { UserCheck, Stethoscope, MapPin, Sparkles, BookOpen } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

export const TrustCredibilityStrip: React.FC = () => {
  return (
    <section className="bg-white border-y border-[#E8DACB] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Strip Grid with clean typographic dividers */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-[#E8DACB]">
          
          {/* Trust 1: Doctor-Led */}
          <div className="flex items-start gap-3.5 pt-4 md:pt-0">
            <div className="p-2.5 rounded-xl bg-[#FAF4EE] text-[#916645] shrink-0 border border-[#E8DACB]">
              <Stethoscope className="w-5 h-5 text-[#C89F56]" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-[#18191B]">Senior Medical Leadership</h4>
              <p className="text-xs text-[#575654] mt-0.5 leading-relaxed">
                Senior Doctor Dr. Asha Rawat (17+ yrs in Bangalore, Delhi & CHD) and Dr. Megha Sahi.
              </p>
            </div>
          </div>

          {/* Trust 2: Scientific & Customized Protocols */}
          <div className="flex items-start gap-3.5 pt-4 md:pt-0 md:pl-8">
            <div className="p-2.5 rounded-lg bg-[#FAF4EE] text-[#916645] shrink-0 border border-[#E8DACB]">
              <UserCheck className="w-5 h-5 text-[#916645]" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-[#18191B]">Diagnostic Suitability</h4>
              <p className="text-xs text-[#575654] mt-0.5 leading-relaxed">
                Every treatment is tailored to skin phototype and hormonal root causes.
              </p>
            </div>
          </div>

          {/* Trust 3: Diverse Treatment Categories */}
          <div className="flex items-start gap-3.5 pt-4 md:pt-0 md:pl-8">
            <div className="p-2.5 rounded-lg bg-[#FAF4EE] text-[#916645] shrink-0 border border-[#E8DACB]">
              <Sparkles className="w-5 h-5 text-[#916645]" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-[#18191B]">30+ Clinical Treatments</h4>
              <p className="text-xs text-[#575654] mt-0.5 leading-relaxed">
                Laser hair reduction, PRP, exosomes, chemical peels, hydrafacial & surgical options.
              </p>
            </div>
          </div>

          {/* Trust 4: Location & Academy */}
          <div className="flex items-start gap-3.5 pt-4 md:pt-0 md:pl-8">
            <div className="p-2.5 rounded-lg bg-[#FAF4EE] text-[#916645] shrink-0 border border-[#E8DACB]">
              <MapPin className="w-5 h-5 text-[#916645]" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-[#18191B]">Race Course, Dehradun</h4>
              <p className="text-xs text-[#575654] mt-0.5 leading-relaxed">
                4th Flr, 90-D Guru Nanak Vihar. Accessible for local & visiting patients.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
