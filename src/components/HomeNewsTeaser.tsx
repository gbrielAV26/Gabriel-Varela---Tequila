import React from 'react';
import { NEWS_ITEMS } from '../data/newsData';
import { Language, NavTab } from '../types';
import { NewsletterSection } from './NewsletterSection';
import { ArrowRight, Calendar, Sparkles } from 'lucide-react';

interface HomeNewsTeaserProps {
  language: Language;
  onNavigate: (tab: NavTab) => void;
}

export const HomeNewsTeaser: React.FC<HomeNewsTeaserProps> = ({ language, onNavigate }) => {
  // Top 3 latest news
  const topNews = NEWS_ITEMS.slice(0, 3);

  return (
    <section className="py-20 lg:py-24 px-5 md:px-12 lg:px-16 bg-[#f5f2f0]/60 border-t border-stone-200/80">
      <div className="max-w-[1280px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-12 border-b border-stone-200">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="h-[2px] w-8 bg-[#9e0418]"></div>
              <span className="text-xs uppercase tracking-widest font-bold text-[#9e0418]">
                {language === 'pt' ? 'Actualidade & Reconhecimento' : 'News & Recognition'}
              </span>
            </div>
            <h2 className="font-serif-headline text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1b1c1c]">
              {language === 'pt' ? 'Últimas Notícias' : 'Latest News'}
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={() => {
                onNavigate('news');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#9e0418] hover:text-[#800313] transition-colors cursor-pointer group"
            >
              <span>{language === 'pt' ? 'Ver todas as notícias' : 'View all news'}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <span className="text-stone-300 hidden sm:inline">|</span>

            <button
              onClick={() => {
                onNavigate('newsletters');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-stone-700 hover:text-[#9e0418] transition-colors cursor-pointer group"
            >
              <span>{language === 'pt' ? 'Todas as newsletters' : 'All newsletters'}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* 3 Featured News Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-10 pb-16">
          {topNews.map((item) => (
            <div
              key={item.id}
              onClick={() => {
                onNavigate('news');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="bg-white border border-stone-200/90 overflow-hidden flex flex-col justify-between group hover:border-[#9e0418]/60 hover:shadow-[0_12px_28px_-6px_rgba(0,0,0,0.07)] transition-all duration-300 cursor-pointer rounded-xs"
            >
              <div>
                {/* Thematic photograph representing the news topic (NOT a person) */}
                <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
                  <img
                    src={item.imageUrl}
                    alt={item.imageAlt[language]}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60"></div>
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-wider font-semibold text-white bg-[#9e0418] px-2 py-0.5 rounded-xs shadow-xs">
                      {item.category[language]}
                    </span>
                    <span className="text-[11px] font-mono text-white/90 bg-black/50 px-2 py-0.5 rounded-xs backdrop-blur-xs">
                      {item.date}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-serif-headline text-lg font-bold text-[#1b1c1c] group-hover:text-[#9e0418] transition-colors leading-snug mb-3 line-clamp-2">
                    {item.title[language]}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5e5e5e] line-clamp-3 leading-relaxed font-sans-body">
                    {item.summary[language]}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2 border-t border-stone-100 flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[#9e0418] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1.5">
                  <span>{language === 'pt' ? 'Saiba mais' : 'Read more'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Dedicated Newsletter Subscription Area */}
        <div className="pt-4">
          <NewsletterSection language={language} variant="full" />
        </div>
      </div>
    </section>
  );
};
