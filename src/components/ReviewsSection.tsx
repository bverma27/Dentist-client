import React from "react";
import { clinicConfig } from "@/config/clinic";
import { Star, ExternalLink, ShieldCheck } from "lucide-react";

export default function ReviewsSection() {
  const { reviewsSection } = clinicConfig;
  const { featuredReviews, googleRating, totalReviewsCount, googleReviewsPageUrl } = reviewsSection;

  return (
    <section id="reviews" className="py-20 lg:py-28 bg-white border-b border-[#D8E0DB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Honest Rating Context */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 pb-8 border-b border-[#E4EBE6]">
          <div>
            <span className="text-xs font-semibold text-[#8E6F3E] tracking-wide uppercase block mb-3">
              Patient Feedback
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[#182B24] tracking-tight">
              Words from our patients in Faridabad.
            </h2>
          </div>

          {/* Verifiable Google Rating Badge */}
          <div className="bg-[#F8F7F4] border border-[#D8E0DB] rounded-lg p-4 flex items-center gap-4">
            <div>
              <div className="flex items-center gap-1 text-[#8E6F3E] mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <div className="text-xs text-[#5F6F69]">
                <strong className="font-semibold text-[#182B24] text-sm">
                  {googleRating} / 5.0
                </strong>{" "}
                across {totalReviewsCount} verified patient reviews
              </div>
            </div>

            <a
              href={googleReviewsPageUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 bg-white hover:bg-[#E4EBE6] border border-[#D8E0DB] text-xs font-semibold text-[#182B24] rounded transition-colors"
            >
              <span>Verify on Google</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#8E6F3E]" />
            </a>
          </div>
        </div>

        {/* 3 Genuine Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {featuredReviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-[#FDFCFB] border border-[#D8E0DB] rounded-lg p-6 flex flex-col justify-between"
            >
              <div>
                {/* 5-star rating */}
                <div className="flex items-center gap-1 text-[#8E6F3E] mb-4">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>

                {/* Review Text */}
                <blockquote className="text-sm text-[#28332E] leading-relaxed italic mb-6">
                  “{rev.quote}”
                </blockquote>
              </div>

              {/* Author and Context */}
              <div className="pt-4 border-t border-[#E4EBE6] flex items-center justify-between">
                <div>
                  <strong className="text-xs font-semibold text-[#182B24] block">
                    {rev.author}
                  </strong>
                  <span className="text-[11px] text-[#5F6F69]">
                    {rev.patientContext}
                  </span>
                </div>

                {rev.verifiedOnGoogle && (
                  <span className="inline-flex items-center gap-1 text-[11px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    <ShieldCheck className="w-3 h-3" />
                    Verified
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Review Submission Notice */}
        <div className="text-center text-xs text-[#5F6F69]">
          Are you a current or past patient?{" "}
          <a
            href={googleReviewsPageUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#182B24] underline hover:text-[#8E6F3E]"
          >
            Leave an honest review on our Google Business Profile
          </a>
          .
        </div>

      </div>
    </section>
  );
}
