import React, { useState } from 'react';
import { Sparkles, Maximize2, ShieldCheck, Heart } from 'lucide-react';

interface GalleryItem {
  id: string;
  category: 'Interior' | 'Laser & Tech' | 'Consultation' | 'Academy';
  title: string;
  subtitle: string;
  accent: string;
  iconName: string;
}

export const ClinicGallery: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('All');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: "gal-1",
      category: "Interior",
      title: "Executive Reception & Waiting Lounge",
      subtitle: "Calm, welcoming sanctuary designed for patient privacy and tranquility in Race Course.",
      accent: "from-[#FBF5EE] to-[#EFE2D4]",
      iconName: "Reception"
    },
    {
      id: "gal-2",
      category: "Laser & Tech",
      title: "Advanced Laser Workstation",
      subtitle: "Precision triple-wavelength cooling platform for comfortable hair reduction and toning.",
      accent: "from-[#F2F6F9] to-[#DFEAF1]",
      iconName: "Laser"
    },
    {
      id: "gal-3",
      category: "Consultation",
      title: "Private Doctor Consultation Suite",
      subtitle: "Dedicated diagnostic evaluation room equipped with dermoscopy and trichoscopy tools.",
      accent: "from-[#FDFBF8] to-[#F1E8DF]",
      iconName: "Consult"
    },
    {
      id: "gal-4",
      category: "Interior",
      title: "Sterile Procedure Suite",
      subtitle: "Strict autoclave sanitation and ergonomic treatment beds for peels, PRP, and injectables.",
      accent: "from-[#F7F2EC] to-[#EBE0D2]",
      iconName: "Suite"
    },
    {
      id: "gal-5",
      category: "Laser & Tech",
      title: "Hydra Vortex & Facial Studio",
      subtitle: "Deep pore vacuum extraction and nutrient infusion technology.",
      accent: "from-[#EEF5F8] to-[#DCE8F0]",
      iconName: "Hydra"
    },
    {
      id: "gal-6",
      category: "Academy",
      title: "Solène Cosmetology Academy Wing",
      subtitle: "Clinical training and educational space for aesthetic practitioners.",
      accent: "from-[#F8F3EC] to-[#E7DCCE]",
      iconName: "Academy"
    }
  ];

  const filteredItems = activeTab === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeTab);

  return (
    <section className="py-20 md:py-28 bg-[#FAF4EE] border-t border-[#E8DACB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-[#916645] mb-3">
              <span>Environment & Atmosphere</span>
              <span aria-hidden="true">·</span>
              <span>Race Course Facility</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#18191B] tracking-tight">
              Inside Solène Clinic
            </h2>
            <p className="mt-3 text-base text-[#52504C] font-normal leading-relaxed">
              Take a look inside our 4th-floor facility in Guru Nanak Vihar. Designed with clinical precision, warm natural materials, and strict hygiene protocols.
            </p>
          </div>

          {/* Gallery Category Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-white rounded-xl border border-[#E8DACB] self-start md:self-end">
            {['All', 'Interior', 'Laser & Tech', 'Consultation', 'Academy'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                  activeTab === tab
                    ? 'bg-[#18191B] text-[#FAF4EE]'
                    : 'text-[#575654] hover:text-[#18191B]'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Visual Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group cursor-pointer rounded-2xl overflow-hidden border border-[#E8DACB] bg-white hover:border-[#C29672] transition-all duration-300 shadow-sm hover:shadow-md flex flex-col"
            >
              {/* Visual Card Canvas */}
              <div className={`aspect-[16/10] bg-gradient-to-br ${item.accent} relative p-6 flex flex-col justify-between overflow-hidden border-b border-[#E8DACB]/60`}>
                
                {/* Subtle architectural schematic SVG inside card */}
                <svg
                  viewBox="0 0 200 120"
                  className="absolute inset-0 w-full h-full object-cover opacity-20 transition-transform duration-500 group-hover:scale-105"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="100" cy="60" r="50" stroke="#916645" strokeWidth="1" fill="none" />
                  <path d="M40 120 V50 C40 30 70 10 100 10 C130 10 160 30 160 50 V120" stroke="#916645" strokeWidth="1" fill="none" />
                </svg>

                {/* Top Badge */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-wider font-semibold text-[#7A5B40] bg-white/80 backdrop-blur-xs px-2.5 py-1 rounded border border-[#E8DACB]">
                    {item.category}
                  </span>
                  <div className="w-7 h-7 rounded-full bg-white/80 flex items-center justify-center text-[#18191B] opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Center Motif */}
                <div className="relative z-10 my-auto text-center">
                  <div className="inline-block p-3 rounded-xl bg-white/80 backdrop-blur-xs border border-[#E8DACB] shadow-xs">
                    <Sparkles className="w-5 h-5 text-[#C89F56]" />
                  </div>
                </div>

                {/* Bottom Tag */}
                <div className="relative z-10 flex items-center gap-1.5 text-[11px] text-[#7A5B40] font-medium">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#916645]" />
                  <span>Clinical Hygiene Standard</span>
                </div>
              </div>

              {/* Card Text Content */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-lg font-semibold text-[#18191B] group-hover:text-[#916645] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#575654] mt-1.5 leading-relaxed">
                    {item.subtitle}
                  </p>
                </div>
                <div className="pt-3 mt-3 border-t border-[#E8DACB]/60 text-[11px] text-[#916645] font-medium flex items-center gap-1">
                  <span>View Details</span>
                  <span>→</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal when user clicks an image slot */}
        {selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <div className="bg-[#FAF4EE] rounded-2xl border border-[#E8DACB] max-w-lg w-full p-6 shadow-2xl relative">
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 text-xs font-semibold text-[#18191B] bg-white p-2 rounded-full border border-[#E8DACB]"
              >
                ✕ Close
              </button>

              <div className={`aspect-[16/9] rounded-xl bg-gradient-to-br ${selectedItem.accent} flex items-center justify-center p-6 border border-[#E8DACB] mb-5`}>
                <div className="text-center">
                  <Sparkles className="w-8 h-8 text-[#C89F56] mx-auto mb-2" />
                  <span className="font-serif text-xl font-semibold text-[#18191B]">
                    {selectedItem.title}
                  </span>
                  <p className="text-xs text-[#575654] mt-1">Race Course, Dehradun</p>
                </div>
              </div>

              <h3 className="font-serif text-2xl font-semibold text-[#18191B]">
                {selectedItem.title}
              </h3>
              <p className="text-xs text-[#916645] font-medium mt-1">
                Category: {selectedItem.category}
              </p>
              <p className="text-sm text-[#52504C] mt-3 leading-relaxed">
                {selectedItem.subtitle}
              </p>

              <div className="mt-6 pt-4 border-t border-[#E8DACB] flex justify-end">
                <button
                  onClick={() => setSelectedItem(null)}
                  className="px-5 py-2.5 bg-[#18191B] text-[#FAF4EE] rounded-lg text-xs font-medium uppercase tracking-wider"
                >
                  Return to Gallery
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
