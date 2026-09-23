import React from 'react';
import { Star, ExternalLink, CheckCircle2, MessageSquare } from 'lucide-react';
import { GOOGLE_REVIEWS, CLINIC_INFO } from '../data/clinicData';
import { trackClinicEvent } from '../utils/analytics';

export const GoogleReviewsSection: React.FC = () => {
  const handleOpenGoogle = () => {
    trackClinicEvent('google_maps_click', { source: 'google_reviews_badge' });
    window.open(CLINIC_INFO.googleProfileUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="reviews" className="py-20 md:py-28 bg-[#FAF5EE] border-t border-[#E8DACB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Clean Google Rating Badge */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#916645] bg-white px-3.5 py-1.5 rounded-full border border-[#E8DACB] mb-4 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#25D366]" />
            <span>Google Verified Patient Reviews</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#18191B] tracking-tight font-medium [text-wrap:balance]">
            Real Experiences. Genuine Care.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#52504C] font-normal leading-relaxed">
            Read direct patient feedback from our Google Business Profile regarding treatments with Senior Doctor <strong className="text-[#18191B]">Dr. Asha Rawat</strong> and <strong className="text-[#18191B]">Dr. Megha Sahi</strong>.
          </p>

          {/* Google 5.0 Star Prominent Card */}
          <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-3 bg-white px-6 py-3.5 rounded-2xl border border-[#E8DACB] shadow-xs">
            <div className="flex items-center gap-2">
              {/* Google G Icon */}
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"
                />
                <path
                  fill="#34A853"
                  d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.34 24 12 24z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
                />
                <path
                  fill="#EA4335"
                  d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.34 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
                />
              </svg>
              <span className="font-semibold text-sm text-[#18191B]">Google Rating</span>
              <div className="flex items-center gap-0.5 text-[#F59E0B]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]" />
                ))}
              </div>
              <span className="font-bold text-sm text-[#18191B]">5.0</span>
            </div>

            <span aria-hidden="true" className="text-[#C89F56] hidden sm:inline">·</span>

            {/* Direct Google Reviews Link */}
            <a
              href={CLINIC_INFO.googleProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackClinicEvent('google_maps_click', { source: 'reviews_header_link' })}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#916645] hover:text-[#18191B] transition-colors"
            >
              <span>View Official Profile</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#C89F56]" />
            </a>
          </div>
        </div>

        {/* Reviews Grid - Simpler, Attractive Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {GOOGLE_REVIEWS.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-3xl border border-[#E8DACB] p-6 sm:p-7 flex flex-col justify-between shadow-xs hover:shadow-md transition-all duration-300"
            >
              <div>
                {/* Review Header: Stars + Date */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1 text-[#F59E0B]">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#F59E0B] text-[#F59E0B]" />
                    ))}
                  </div>
                  <span className="text-[11px] text-[#8C8985] font-medium">{review.date}</span>
                </div>

                {/* Service Tag */}
                <div className="inline-block text-[10px] font-semibold text-[#7A5B40] uppercase tracking-wider bg-[#FAF4EE] px-2.5 py-1 rounded-md border border-[#E8DACB] mb-3">
                  {review.serviceReviewed}
                </div>

                {/* Review Comment */}
                <p className="text-xs sm:text-sm text-[#4E4C48] leading-relaxed italic">
                  “{review.comment}”
                </p>
              </div>

              {/* Review Author Footnote */}
              <div className="pt-4 mt-5 border-t border-[#E8DACB]/60 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-[#FAF4EE] border border-[#E8DACB] flex items-center justify-center font-serif text-xs font-bold text-[#916645]">
                    {review.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-[#18191B]">{review.author}</h4>
                    <span className="text-[11px] text-[#6E6C68]">{review.location}</span>
                  </div>
                </div>

                <span className="inline-flex items-center gap-1 text-[10px] text-[#2E7D32] bg-[#E8F5E9] px-2 py-0.5 rounded-full border border-[#C8E6C9] font-medium">
                  <CheckCircle2 className="w-3 h-3 text-[#2E7D32]" />
                  <span>Google Review</span>
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout to Google Business Page */}
        <div className="mt-12 text-center flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={handleOpenGoogle}
            className="inline-flex items-center gap-2 bg-white hover:bg-[#FAF4EE] text-[#18191B] border border-[#DFCBB9] px-6 py-3.5 rounded-xl text-xs font-semibold uppercase tracking-wider transition-colors shadow-xs"
          >
            <span>Read All Google Reviews</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#C89F56]" />
          </button>

          <a
            href={CLINIC_INFO.googleProfileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#18191B] hover:bg-[#2C2D30] text-[#FAF4EE] px-6 py-3.5 rounded-xl text-xs font-semibold uppercase tracking-wider transition-colors shadow-xs"
          >
            <span>Leave a Review on Google</span>
            <Star className="w-3.5 h-3.5 fill-[#C89F56] text-[#C89F56]" />
          </a>
        </div>

      </div>
    </section>
  );
};
