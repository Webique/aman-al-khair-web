import React from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { RTLIcon } from '@/components/ui/rtl-wrapper';

const Hero = () => {
  const { t, isRTL } = useLanguage();

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/966533731033', '_blank');
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-dark via-primary-dark to-primary-blush overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className={`absolute top-1/4 w-64 h-64 bg-primary-cream rounded-full blur-3xl ${
          isRTL ? 'right-1/4' : 'left-1/4'
        }`}></div>
        <div className={`absolute bottom-1/4 w-96 h-96 bg-primary-beige rounded-full blur-3xl ${
          isRTL ? 'left-1/4' : 'right-1/4'
        }`}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-primary-cream">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            {isRTL ? 'ارتقِ بمستوى ممتلكاتك. حلول متكاملة للنظافة وإدارة المرافق.' : t('hero.title')}
          </h1>
          <p className="text-lg md:text-xl mb-12 opacity-80 max-w-2xl mx-auto leading-relaxed">
            {isRTL ? 'احصل على خطة خدمة مخصصة وعرض سعر شفاف. تواصل معنا مباشرة للحصول على استجابة سريعة.' : t('hero.description')}
          </p>

          <Button
            onClick={handleWhatsAppClick}
            size="lg"
            className="bg-gradient-to-r from-primary-blush to-primary-beige hover:from-primary-blush/90 hover:to-primary-beige/90 shadow-button text-lg px-8 py-6 h-auto font-semibold transition-all duration-300 hover:scale-105"
          >
            <RTLIcon rtlFlip={false}>
              <MessageCircle className="h-6 w-6" />
            </RTLIcon>
            <span className={`${isRTL ? 'mr-3' : 'ml-3'} ${isRTL ? 'text-primary-dark font-bold' : ''}`}>
              {isRTL ? 'اطلب تقييمك عبر واتساب' : t('hero.cta')}
            </span>
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-cream/50 rounded-full flex justify-center p-2">
          <div className="w-1 h-3 bg-primary-cream/50 rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;