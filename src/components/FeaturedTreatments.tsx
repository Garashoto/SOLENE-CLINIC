import React from 'react';
import { ArrowRight, Calendar, Sparkles, Clock, ShieldCheck } from 'lucide-react';
import { ALL_SERVICES, ServiceItem } from '../data/clinicData';
import { trackClinicEvent } from '../utils/analytics';

interface FeaturedTreatmentsProps {
  onSelectService: (service: ServiceItem) => void;
  onOpenBooking: (prefillConcern?: string) => void;
}

export const FeaturedTreatments: React.FC<FeaturedTreatmentsProps> = ({
  onSelectService,
  onOpenBooking,
}) => {
  const featuredServices = ALL_SERVICES.filter((s) => s.isFeatured).slice(0, 8);

  return (
    <section className="py-20 md:py-28 bg-[#FDFBF8] border-t border-[#E8DACB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-[#916645] mb-3">
              <span>Signature Modalities</span>
              <span aria-hidden="true">·</span>
              <span>Clinical Focus</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#18191B] tracking-tight">
              Featured Aesthetic Treatments
            </h2>
            <p className="mt-3 text-base text-[#52504C] font-normal leading-relaxed">
              Carefully chosen clinical procedures performed with sterile protocols, physician guidance, and tailored parameters for Indian skin phototypes.
            </p>
          </div>

          <a
            href="#services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#18191B] hover:text-[#916645] transition-colors group self-start md:self-end"
          >
            <span>Explore all 30+ services</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* 8 Featured Cards Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredServices.map((service, index) => {
            return (
              <div
                key={service.id}
                className="bg-white rounded-2xl border border-[#E8DACB] p-6 flex flex-col justify-between hover:border-[#C29672] hover:shadow-md transition-all duration-300 group"
              >
                <div>
                  {/* Category unboxed tag */}
                  <div className="flex items-center justify-between text-xs text-[#7A5B40] mb-3">
                    <span className="font-medium tracking-wide uppercase text-[11px]">
                      {service.category}
                    </span>
                    <span className="text-[11px] text-[#8C8985] flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {service.sessionDuration}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-xl font-semibold text-[#18191B] group-hover:text-[#916645] transition-colors leading-snug">
                    {service.name}
                  </h3>

                  {/* Short Clinical Purpose */}
                  <p className="text-xs text-[#575654] mt-2.5 leading-relaxed line-clamp-3">
                    {service.shortDesc}
                  </p>

                  {/* Primary Indication Snippet */}
                  <div className="mt-4 pt-3 border-t border-[#E8DACB]/60 text-[11px] text-[#6E6C68]">
                    <span className="font-medium text-[#18191B]">Indication: </span>
                    <span>{service.primaryIndication}</span>
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="pt-6 mt-6 border-t border-[#E8DACB]/60 flex items-center justify-between gap-2">
                  <button
                    onClick={() => {
                      trackClinicEvent('service_enquiry', { service: service.name, source: 'featured_card' });
                      onSelectService(service);
                    }}
                    className="text-xs font-semibold text-[#18191B] hover:text-[#916645] transition-colors underline underline-offset-4"
                  >
                    Learn More
                  </button>

                  <button
                    onClick={() => {
                      trackClinicEvent('book_consultation_click', { service: service.name, source: 'featured_card' });
                      onOpenBooking(service.name);
                    }}
                    className="inline-flex items-center gap-1.5 bg-[#FAF4EE] hover:bg-[#18191B] text-[#18191B] hover:text-[#FAF4EE] px-3 py-1.5 rounded-lg text-xs font-medium transition-colors"
                  >
                    <Calendar className="w-3 h-3 text-[#C89F56]" />
                    <span>Book</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
