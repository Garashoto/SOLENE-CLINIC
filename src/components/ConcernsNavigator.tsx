import React, { useState } from 'react';
import { ArrowRight, Sparkles, Check, ChevronRight } from 'lucide-react';
import { CONCERNS, ALL_SERVICES, ConcernItem, ServiceItem } from '../data/clinicData';
import { trackClinicEvent } from '../utils/analytics';

interface ConcernsNavigatorProps {
  onSelectService: (service: ServiceItem) => void;
  onOpenBooking: (prefillConcern?: string) => void;
}

export const ConcernsNavigator: React.FC<ConcernsNavigatorProps> = ({
  onSelectService,
  onOpenBooking,
}) => {
  const [activeConcernId, setActiveConcernId] = useState<string>(CONCERNS[0].id);

  const activeConcern = CONCERNS.find((c) => c.id === activeConcernId) || CONCERNS[0];
  const relatedServices = ALL_SERVICES.filter((s) => activeConcern.relatedServiceIds.includes(s.id));

  const handleSelectConcern = (concern: ConcernItem) => {
    setActiveConcernId(concern.id);
    trackClinicEvent('filter_services', { concern: concern.title });
  };

  return (
    <section id="concerns" className="py-20 md:py-28 bg-[#FAF4EE] border-t border-[#E8DACB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="flex items-center justify-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-[#916645] mb-3">
            <span>Problem-First Navigation</span>
            <span aria-hidden="true">·</span>
            <span>Identify Your Focus Area</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#18191B] tracking-tight [text-wrap:balance]">
            What Concern Would You Like to Address?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#52504C] font-normal leading-relaxed">
            You don't need to know complex medical terms to get started. Select what you are experiencing, and discover the clinically proven treatment options available at Solène.
          </p>
        </div>

        {/* Desktop & Tablet Layout: Interactive 2-column or Mobile Scroller */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Concern Selector (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-2">
            <span className="text-xs uppercase tracking-wider font-semibold text-[#7A5B40] mb-2 px-1">
              Select Your Concern ({CONCERNS.length}):
            </span>
            
            <div className="flex flex-col gap-1.5 max-h-[580px] overflow-y-auto pr-1">
              {CONCERNS.map((concern) => {
                const isActive = concern.id === activeConcernId;
                return (
                  <button
                    key={concern.id}
                    onClick={() => handleSelectConcern(concern)}
                    className={`text-left p-3.5 rounded-xl transition-all duration-200 flex items-center justify-between group border ${
                      isActive
                        ? 'bg-white border-[#C89F56] shadow-sm text-[#18191B]'
                        : 'bg-white/40 border-[#E8DACB]/70 hover:bg-white/80 hover:border-[#DFC8B2] text-[#4A4844]'
                    }`}
                  >
                    <div>
                      <h4 className={`text-sm font-semibold ${isActive ? 'text-[#18191B]' : 'text-[#2C2D30]'}`}>
                        {concern.title}
                      </h4>
                      <p className="text-xs text-[#6B6864] mt-0.5 line-clamp-1">
                        {concern.tagline}
                      </p>
                    </div>

                    <div className="shrink-0 ml-3">
                      {isActive ? (
                        <div className="w-6 h-6 rounded-full bg-[#FAF4EE] border border-[#C89F56] flex items-center justify-center text-[#916645]">
                          <Check className="w-3.5 h-3.5 text-[#916645]" />
                        </div>
                      ) : (
                        <ChevronRight className="w-4 h-4 text-[#A8A5A0] group-hover:text-[#18191B] group-hover:translate-x-0.5 transition-all" />
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Active Concern Deep-Dive & Clinical Services (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-[#E8DACB] p-6 sm:p-8 shadow-sm">
            
            {/* Header of Active Concern */}
            <div className="pb-6 border-b border-[#E8DACB]/80">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#916645] mb-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#C89F56]" />
                <span>Clinical Overview</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#18191B]">
                {activeConcern.title}
              </h3>
              <p className="text-sm text-[#52504C] mt-2.5 leading-relaxed">
                {activeConcern.description}
              </p>
            </div>

            {/* Related Treatments List */}
            <div className="py-6">
              <span className="text-xs uppercase tracking-wider font-semibold text-[#18191B] block mb-3">
                Recommended In-Clinic Options for this Concern:
              </span>

              <div className="space-y-3">
                {relatedServices.map((service) => (
                  <div
                    key={service.id}
                    className="p-4 rounded-xl bg-[#FAF4EE]/60 border border-[#E8DACB] hover:border-[#C29672] transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-3 group"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-sm font-semibold text-[#18191B] group-hover:text-[#916645] transition-colors">
                          {service.name}
                        </h4>
                        <span className="text-[10px] text-[#7A5B40] uppercase tracking-wider">
                          {service.category}
                        </span>
                      </div>
                      <p className="text-xs text-[#575654] mt-1 leading-normal max-w-md">
                        {service.shortDesc}
                      </p>
                    </div>

                    <button
                      onClick={() => onSelectService(service)}
                      className="shrink-0 text-xs font-medium text-[#18191B] hover:text-[#916645] inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-all self-start sm:self-center"
                    >
                      <span>Treatment Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Box */}
            <div className="pt-6 border-t border-[#E8DACB]/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-[#FAF4EE] -mx-6 -mb-6 p-6 rounded-b-2xl border-t">
              <div>
                <p className="text-xs font-semibold text-[#18191B]">
                  Uncertain which treatment is right for your condition?
                </p>
                <p className="text-[11px] text-[#575654] mt-0.5">
                  Our doctors will determine suitability during your diagnostic assessment.
                </p>
              </div>

              <button
                onClick={() => {
                  trackClinicEvent('book_consultation_click', { concern: activeConcern.title, source: 'concerns_navigator' });
                  onOpenBooking(activeConcern.title);
                }}
                className="shrink-0 inline-flex items-center gap-2 bg-[#18191B] text-[#FAF4EE] hover:bg-[#2C2D30] py-2.5 px-4 rounded-lg text-xs font-medium tracking-wide uppercase transition-colors"
              >
                <span>Discuss {activeConcern.title}</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#C89F56]" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
