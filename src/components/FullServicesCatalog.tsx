import React, { useState, useMemo } from 'react';
import { Search, Filter, ArrowRight, Calendar, MessageSquare, Clock } from 'lucide-react';
import { ALL_SERVICES, CLINIC_INFO, ServiceItem } from '../data/clinicData';
import { trackClinicEvent } from '../utils/analytics';

interface FullServicesCatalogProps {
  onSelectService: (service: ServiceItem) => void;
  onOpenBooking: (prefillConcern?: string) => void;
}

type CategoryTab = 'All' | 'Skin' | 'Hair' | 'Laser' | 'Anti-Ageing' | 'Body & Clinical';

export const FullServicesCatalog: React.FC<FullServicesCatalogProps> = ({
  onSelectService,
  onOpenBooking,
}) => {
  const [activeTab, setActiveTab] = useState<CategoryTab>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredServices = useMemo(() => {
    return ALL_SERVICES.filter((service) => {
      const matchesTab = activeTab === 'All' || service.category === activeTab;
      const q = searchQuery.toLowerCase().trim();
      const matchesQuery =
        !q ||
        service.name.toLowerCase().includes(q) ||
        service.shortDesc.toLowerCase().includes(q) ||
        service.primaryIndication.toLowerCase().includes(q) ||
        service.broadCategory.toLowerCase().includes(q);

      return matchesTab && matchesQuery;
    });
  }, [activeTab, searchQuery]);

  const handleWhatsAppService = (serviceName: string) => {
    trackClinicEvent('whatsapp_click', { service: serviceName, source: 'service_catalog' });
    const text = encodeURIComponent(`Hi Solène Clinic, I would like to enquire about ${serviceName}.`);
    window.open(`https://wa.me/${CLINIC_INFO.whatsappNumber.replace(/[^0-9]/g, '')}?text=${text}`, '_blank');
  };

  const tabs: CategoryTab[] = ['All', 'Skin', 'Hair', 'Laser', 'Anti-Ageing', 'Body & Clinical'];

  return (
    <section id="services" className="py-20 md:py-28 bg-[#FAF4EE] border-t border-[#E8DACB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="flex items-center justify-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-[#916645] mb-3">
            <span>Clinical Portfolio</span>
            <span aria-hidden="true">·</span>
            <span>All Specialized Services</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#18191B] tracking-tight [text-wrap:balance]">
            Complete Treatment Catalogue
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#52504C] font-normal leading-relaxed">
            All 30+ procedures from our clinical practice, organized by medical domain. Search by treatment name or concern to find what aligns with your health needs.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="mb-10 flex flex-col md:flex-row items-center justify-between gap-4 bg-white p-3 rounded-2xl border border-[#E8DACB] shadow-sm">
          
          {/* Category Tabs (Interactive Segmented Control) */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {tabs.map((tab) => {
              const isActive = activeTab === tab;
              return (
                <button
                  key={tab}
                  onClick={() => {
                    setActiveTab(tab);
                    trackClinicEvent('filter_services', { category: tab });
                  }}
                  className={`px-3.5 py-2 text-xs font-medium rounded-lg transition-all whitespace-nowrap ${
                    isActive
                      ? 'bg-[#18191B] text-[#FAF4EE] shadow-sm'
                      : 'text-[#575654] hover:text-[#18191B] hover:bg-[#FAF4EE]'
                  }`}
                >
                  {tab === 'All' ? 'All Services' : tab}
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-[#8C8985] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search treatments or concerns..."
              className="w-full pl-9 pr-4 py-2 text-xs bg-[#FAF4EE] border border-[#E8DACB] rounded-lg focus:outline-none focus:border-[#C89F56] text-[#18191B] placeholder-[#8C8985]"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#8C8985] hover:text-[#18191B]"
              >
                Clear
              </button>
            )}
          </div>

        </div>

        {/* Core Strategic Domains Indicator */}
        <div className="mb-8 flex flex-wrap items-center gap-2 text-xs text-[#6B6864] px-1">
          <span className="font-semibold text-[#18191B]">Clinical Pillars:</span>
          <span>Skin Lightening & Brightening</span>
          <span aria-hidden="true">·</span>
          <span>Anti Ageing</span>
          <span aria-hidden="true">·</span>
          <span>Body Contouring</span>
          <span aria-hidden="true">·</span>
          <span>Hair Fall Solutions</span>
          <span aria-hidden="true">·</span>
          <span>Cosmetic Surgery</span>
          <span aria-hidden="true">·</span>
          <span>Sexual Wellness</span>
        </div>

        {/* Results Counter */}
        <div className="mb-6 flex items-center justify-between text-xs text-[#575654] px-1">
          <span>
            Showing <strong className="text-[#18191B] font-semibold">{filteredServices.length}</strong> treatments
            {activeTab !== 'All' && ` in ${activeTab}`}
            {searchQuery && ` matching "${searchQuery}"`}
          </span>
          {filteredServices.length === 0 && (
            <button
              onClick={() => {
                setActiveTab('All');
                setSearchQuery('');
              }}
              className="text-[#916645] hover:underline"
            >
              Reset filters
            </button>
          )}
        </div>

        {/* Services Grid */}
        {filteredServices.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-xl border border-[#E8DACB] p-6 flex flex-col justify-between hover:border-[#C29672] hover:shadow-md transition-all duration-200 group"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-[#7A5B40] mb-2.5">
                    <span className="uppercase tracking-wider text-[10px] font-semibold">
                      {service.category}
                    </span>
                    <span className="text-[11px] text-[#8C8985] flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {service.sessionDuration}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-semibold text-[#18191B] group-hover:text-[#916645] transition-colors">
                    {service.name}
                  </h3>

                  <p className="text-xs text-[#52504C] mt-2 leading-relaxed">
                    {service.shortDesc}
                  </p>

                  <div className="mt-3.5 pt-3 border-t border-[#E8DACB]/60 text-[11px] text-[#6E6C68]">
                    <span className="font-medium text-[#18191B]">Recommended for: </span>
                    <span>{service.primaryIndication}</span>
                  </div>
                </div>

                <div className="pt-5 mt-5 border-t border-[#E8DACB]/60 flex items-center justify-between gap-2">
                  <button
                    onClick={() => {
                      trackClinicEvent('service_enquiry', { service: service.name, source: 'catalog_view_details' });
                      onSelectService(service);
                    }}
                    className="text-xs font-semibold text-[#18191B] hover:text-[#916645] underline underline-offset-4 transition-colors"
                  >
                    View Protocol & Details
                  </button>

                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => handleWhatsAppService(service.name)}
                      className="p-2 rounded-lg bg-[#FAF4EE] hover:bg-[#F3E9DF] text-[#25D366] transition-colors"
                      title="Enquire on WhatsApp"
                      aria-label={`Enquire about ${service.name} on WhatsApp`}
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                    </button>

                    <button
                      onClick={() => {
                        trackClinicEvent('book_consultation_click', { service: service.name, source: 'catalog_card_book' });
                        onOpenBooking(service.name);
                      }}
                      className="inline-flex items-center gap-1 bg-[#18191B] hover:bg-[#2C2D30] text-[#FAF4EE] px-3 py-1.5 rounded-lg text-xs font-medium transition-colors"
                    >
                      <Calendar className="w-3 h-3 text-[#C89F56]" />
                      <span>Book</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl border border-[#E8DACB] p-12 text-center max-w-md mx-auto">
            <p className="text-sm font-semibold text-[#18191B]">No matching treatments found</p>
            <p className="text-xs text-[#575654] mt-1">
              Try adjusting your search terms or view our all-services list.
            </p>
            <button
              onClick={() => {
                setActiveTab('All');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 bg-[#18191B] text-[#FAF4EE] rounded-lg text-xs font-medium"
            >
              Show All Treatments
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
