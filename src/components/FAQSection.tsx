import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';
import { FAQS, CLINIC_INFO } from '../data/clinicData';
import { trackClinicEvent } from '../utils/analytics';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const handleWhatsAppCustomFAQ = () => {
    trackClinicEvent('whatsapp_click', { topic: 'Custom Question', source: 'faq' });
    const text = encodeURIComponent("Hi Solène Clinic, I have a specific question about your treatments and consultations.");
    window.open(`https://wa.me/${CLINIC_INFO.whatsappNumber.replace(/[^0-9]/g, '')}?text=${text}`, '_blank');
  };

  return (
    <section className="py-20 md:py-28 bg-[#FDFBF8] border-t border-[#E8DACB]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-[#916645] mb-3">
            <span>Clear Answers</span>
            <span aria-hidden="true">·</span>
            <span>Frequently Asked Questions</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#18191B] tracking-tight [text-wrap:balance]">
            Everything You Need to Know Before Visiting
          </h2>

          <p className="mt-4 text-base text-[#52504C] font-normal leading-relaxed">
            Transparent information about our consultation policies, doctor availability, appointment bookings, and clinic location in Dehradun.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-[#E8DACB] overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full text-left p-6 flex items-center justify-between gap-4 hover:bg-[#FAF4EE]/50 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-lg font-semibold text-[#18191B]">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-[#FAF4EE] border border-[#E8DACB] flex items-center justify-center text-[#916645] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-[#18191B] text-[#FAF4EE]' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-sm text-[#52504C] leading-relaxed border-t border-[#E8DACB]/60 bg-[#FAF4EE]/30">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* FAQ Still Have Questions Box */}
        <div className="mt-12 bg-white rounded-2xl p-6 border border-[#E8DACB] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-sm font-semibold text-[#18191B]">
              Have a question not listed here?
            </h4>
            <p className="text-xs text-[#575654] mt-0.5">
              Speak directly with our clinic coordinator or ask via WhatsApp.
            </p>
          </div>

          <button
            onClick={handleWhatsAppCustomFAQ}
            className="inline-flex items-center gap-2 bg-[#FAF4EE] hover:bg-[#EFE4D8] text-[#18191B] border border-[#E8DACB] px-5 py-2.5 rounded-lg text-xs font-medium transition-colors"
          >
            <MessageSquare className="w-4 h-4 text-[#25D366]" />
            <span>Chat on WhatsApp</span>
          </button>
        </div>

      </div>
    </section>
  );
};
