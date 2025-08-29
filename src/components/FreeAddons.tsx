import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Car, 
  ShowerHead, 
  Trash,
  CheckCircle2,
  Gift,
  Star,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

const FreeAddons = () => {
  const { t } = useLanguage();

  const addons = [
    { 
      icon: Car, 
      key: 'addons.parking',
      description: 'addons.parking.description',
      features: ['addons.parking.features.1', 'addons.parking.features.2', 'addons.parking.features.3', 'addons.parking.features.4'],
      color: 'from-primary-blush to-primary-beige',
      bgColor: 'bg-primary-blush/20',
      borderColor: 'border-primary-blush/30',
      textColor: 'text-primary-dark'
    },
    { 
      icon: ShowerHead, 
      key: 'addons.spraying',
      description: 'addons.spraying.description',
      features: ['addons.spraying.features.1', 'addons.spraying.features.2', 'addons.spraying.features.3', 'addons.spraying.features.4'],
      color: 'from-primary-beige to-primary-blush',
      bgColor: 'bg-primary-beige/20',
      borderColor: 'border-primary-beige/30',
      textColor: 'text-primary-dark'
    },
    { 
      icon: Trash, 
      key: 'addons.bins',
      description: 'addons.bins.description',
      features: ['addons.bins.features.1', 'addons.bins.features.2', 'addons.bins.features.3', 'addons.bins.features.4'],
      color: 'from-primary-cream to-primary-beige',
      bgColor: 'bg-primary-cream/20',
      borderColor: 'border-primary-cream/30',
      textColor: 'text-primary-dark'
    }
  ];

  return (
    <section id="free-addons" className="py-24 bg-gradient-to-br from-primary-cream via-primary-beige to-primary-blush relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-20 w-64 h-64 bg-primary-blush rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-20 w-80 h-80 bg-primary-beige rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-primary-blush/20 text-primary-dark rounded-full text-sm font-medium border border-primary-blush/30">
            <Gift className="h-4 w-4" />
            <span>{t('addons.subtitle')}</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-dark mb-6 leading-tight">
            {t('addons.title')}
          </h2>
          <p className="text-xl text-primary-dark/80 max-w-3xl mx-auto leading-relaxed">
            {t('addons.description')}
          </p>
        </div>

        {/* Main Add-ons Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {addons.map((addon, index) => {
            const IconComponent = addon.icon;
            
            return (
              <Card 
                key={index} 
                className={`group relative overflow-hidden border-2 ${addon.borderColor} shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-4 bg-background/90 backdrop-blur-sm hover:bg-background`}
              >
                {/* Gradient accent line */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${addon.color}`}></div>
                
                <CardContent className="p-8 relative z-10">
                  {/* Icon with gradient background */}
                  <div className={`w-24 h-24 mx-auto mb-6 bg-gradient-to-br ${addon.color} rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-xl`}>
                    <IconComponent className="h-12 w-12 text-primary-dark" />
                  </div>
                  
                  {/* Service Title */}
                  <h3 className="text-2xl font-bold text-primary-dark mb-4 text-center group-hover:text-primary-dark/80 transition-colors duration-300">
                    {t(addon.key)}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-primary-dark/70 text-center mb-6 leading-relaxed">
                    {t(addon.description)}
                  </p>
                  
                  {/* Features Grid */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {addon.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-primary-dark/70">
                        <CheckCircle2 className="h-4 w-4 text-primary-dark mr-2 flex-shrink-0" />
                        <span className="text-xs">{t(feature)}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Highlight Box */}
                  <div className={`${addon.bgColor} ${addon.borderColor} border-2 rounded-xl p-4 text-center`}>
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <Star className="h-5 w-5 text-primary-dark fill-current" />
                      <span className={`font-bold ${addon.textColor}`}>{t('addons.included-no-cost')}</span>
                    </div>
                    <p className="text-xs text-primary-dark/70">{t('addons.package-part')}</p>
                  </div>
                </CardContent>
                
                {/* Hover effect border */}
                <div className={`absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-primary-blush/30 transition-colors duration-500`}></div>
              </Card>
            );
          })}
        </div>

        {/* Unique Feature Showcase */}
        <div className="bg-gradient-to-r from-primary-dark to-primary-dark/90 rounded-3xl p-12 text-primary-cream relative overflow-hidden mb-20">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary-cream/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-primary-cream/10 rounded-full blur-2xl"></div>
          
          <div className="relative z-10 text-center">
            <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-primary-cream/20 rounded-full backdrop-blur-sm border border-primary-cream/30">
              <Sparkles className="h-6 w-6 text-primary-blush" />
              <span className="font-semibold">{t('addons.premium-value')}</span>
            </div>
            
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              {t('addons.cta.title')}
            </h3>
            
            <p className="text-xl text-primary-cream/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              {t('addons.cta.description')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                onClick={() => window.open('https://api.whatsapp.com/send/?phone=966533731033&text&type=phone_number&app_absent=0', '_blank')}
                className="bg-gradient-to-r from-primary-blush to-primary-beige hover:from-primary-blush/90 hover:to-primary-beige/90 text-primary-dark font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2"
              >
                <span>{t('addons.cta.button')}</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              
              <div className="flex items-center gap-4 text-primary-cream/90">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary-blush" />
                  <span className="text-sm">{t('addons.no-hidden-fees')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary-blush" />
                  <span className="text-sm">{t('addons.premium-quality')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-background/80 backdrop-blur-sm rounded-2xl p-8 border border-primary-blush/30 shadow-lg">
            <div className="text-4xl font-bold text-primary-dark mb-2">100%</div>
            <div className="text-primary-dark font-medium">{t('addons.free-charge')}</div>
            <div className="text-primary-dark/70 text-sm">{t('addons.no-additional-costs')}</div>
          </div>
          
          <div className="bg-background/80 backdrop-blur-sm rounded-2xl p-8 border border-primary-beige/30 shadow-lg">
            <div className="text-4xl font-bold text-primary-dark mb-2">3</div>
            <div className="text-primary-dark font-medium">{t('addons.premium-addons')}</div>
            <div className="text-primary-dark/70 text-sm">{t('addons.included-automatically')}</div>
          </div>
          
          <div className="bg-background/80 backdrop-blur-sm rounded-2xl p-8 border border-primary-cream/30 shadow-lg">
            <div className="text-4xl font-bold text-primary-dark mb-2">24/7</div>
            <div className="text-primary-dark font-medium">{t('addons.support-available')}</div>
            <div className="text-primary-dark/70 text-sm">{t('addons.always-here-help')}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreeAddons;