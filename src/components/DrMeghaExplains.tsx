import React, { useState } from 'react';
import { BookOpen, Clock, ArrowRight, CheckCircle2, X, MessageSquare, Calendar } from 'lucide-react';
import { ARTICLES, ArticleItem, CLINIC_INFO } from '../data/clinicData';
import { trackClinicEvent } from '../utils/analytics';

interface DrMeghaExplainsProps {
  onOpenBooking: (prefillConcern?: string) => void;
}

export const DrMeghaExplains: React.FC<DrMeghaExplainsProps> = ({ onOpenBooking }) => {
  const [activeArticle, setActiveArticle] = useState<ArticleItem | null>(null);

  const handleOpenArticle = (art: ArticleItem) => {
    setActiveArticle(art);
    trackClinicEvent('read_article', { title: art.title });
  };

  const handleWhatsAppAboutArticle = (artTitle: string) => {
    trackClinicEvent('whatsapp_click', { topic: artTitle, source: 'article_modal' });
    const text = encodeURIComponent(`Hi Dr. Megha, I read your article on "${artTitle}" and would like to consult about this.`);
    window.open(`https://wa.me/${CLINIC_INFO.whatsappNumber.replace(/[^0-9]/g, '')}?text=${text}`, '_blank');
  };

  return (
    <section id="education" className="py-20 md:py-28 bg-[#FDFBF8] border-t border-[#E8DACB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-[#916645] mb-3">
            <span>Doctor Insights</span>
            <span aria-hidden="true">·</span>
            <span>Education First</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#18191B] tracking-tight [text-wrap:balance]">
            Dr. Megha Explains
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#52504C] font-normal leading-relaxed">
            Medical answers to common patient questions. We believe informed patients make healthier decisions for their skin, hair, and aesthetic wellness.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ARTICLES.map((article) => (
            <div
              key={article.id}
              className="bg-white rounded-2xl border border-[#E8DACB] p-7 flex flex-col justify-between hover:border-[#C29672] hover:shadow-md transition-all duration-300"
            >
              <div>
                {/* Meta unboxed */}
                <div className="flex items-center justify-between text-xs text-[#7A5B40] mb-3">
                  <span className="font-medium uppercase tracking-wider text-[11px]">
                    {article.category}
                  </span>
                  <span className="text-[11px] text-[#8C8985] flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {article.readTime}
                  </span>
                </div>

                {/* Article Title */}
                <h3 className="font-serif text-xl font-semibold text-[#18191B] leading-snug">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-xs sm:text-sm text-[#575654] mt-3 leading-relaxed">
                  {article.excerpt}
                </p>

                {/* Key Takeaway Bullet Preview */}
                <div className="mt-5 p-3 rounded-xl bg-[#FAF4EE] border border-[#E8DACB]/80 text-xs text-[#4A4844] flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C89F56] shrink-0 mt-0.5" />
                  <span className="line-clamp-2">{article.keyTakeaways[0]}</span>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-6 mt-6 border-t border-[#E8DACB]/60 flex items-center justify-between">
                <button
                  onClick={() => handleOpenArticle(article)}
                  className="text-xs font-semibold text-[#18191B] hover:text-[#916645] underline underline-offset-4 flex items-center gap-1.5 transition-colors"
                >
                  <span>Read Doctor's Guide</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => onOpenBooking(article.title)}
                  className="text-xs text-[#916645] hover:text-[#18191B] font-medium"
                >
                  Consultation →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Reader Modal */}
        {activeArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setActiveArticle(null)}
            />

            <div className="relative bg-[#FAF4EE] rounded-2xl border border-[#E8DACB] max-w-2xl w-full p-6 sm:p-9 shadow-2xl z-10 max-h-[90vh] overflow-y-auto">
              
              <button
                onClick={() => setActiveArticle(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-white text-[#18191B] hover:bg-[#FAF4EE] border border-[#E8DACB]"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 text-xs font-semibold text-[#916645] uppercase tracking-wider mb-2">
                <span>{activeArticle.category}</span>
                <span aria-hidden="true">·</span>
                <span>{activeArticle.readTime}</span>
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#18191B] pr-8">
                {activeArticle.title}
              </h2>

              <p className="text-sm font-serif italic text-[#7A5B40] mt-2 pb-4 border-b border-[#E8DACB]">
                Medical guidance by Dr. Megha Sahi, Aesthetic Physician & Laser Cosmetologist
              </p>

              {/* Key Takeaways Box */}
              <div className="my-6 p-4 rounded-xl bg-white border border-[#E8DACB]">
                <h4 className="text-xs uppercase tracking-wider font-semibold text-[#18191B] mb-2.5">
                  Key Clinical Takeaways:
                </h4>
                <ul className="space-y-2 text-xs text-[#52504C]">
                  {activeArticle.keyTakeaways.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C89F56] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Full Article Prose */}
              <div className="space-y-4 text-sm text-[#4E4C48] leading-relaxed">
                {activeArticle.content.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              {/* Action Footer */}
              <div className="pt-6 mt-8 border-t border-[#E8DACB] flex flex-col sm:flex-row items-center justify-between gap-3">
                <button
                  onClick={() => {
                    const topic = activeArticle.title;
                    setActiveArticle(null);
                    onOpenBooking(topic);
                  }}
                  className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 bg-[#18191B] text-[#FAF4EE] py-3.5 px-6 rounded-lg text-xs font-medium tracking-wider uppercase"
                >
                  <Calendar className="w-4 h-4 text-[#C89F56]" />
                  <span>Book Consultation for this Concern</span>
                </button>

                <button
                  onClick={() => handleWhatsAppAboutArticle(activeArticle.title)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#EFE4D8] hover:bg-[#E2CEBC] text-[#18191B] py-3.5 px-5 rounded-lg text-xs font-medium"
                >
                  <MessageSquare className="w-4 h-4 text-[#25D366]" />
                  <span>Discuss on WhatsApp</span>
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
