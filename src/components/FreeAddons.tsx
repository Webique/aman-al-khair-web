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
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      textColor: 'text-blue-700'
    },
    { 
      icon: ShowerHead, 
      key: 'addons.spraying',
      description: 'addons.spraying.description',
      features: ['addons.spraying.features.1', 'addons.spraying.features.2', 'addons.spraying.features.3', 'addons.spraying.features.4'],
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      textColor: 'text-green-700'
    },
    { 
      icon: Trash, 
      key: 'addons.bins',
      description: 'addons.bins.description',
      features: ['addons.bins.features.1', 'addons.bins.features.2', 'addons.bins.features.3', 'addons.bins.features.4'],
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
      textColor: 'text-purple-700'
    }
  ];

  return (
    <section id="free-addons" className="py-24 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-20 w-64 h-64 bg-amber-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-20 w-80 h-80 bg-orange-300 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-medium border border-amber-200">
            <Gift className="h-4 w-4" />
            <span>{t('addons.subtitle')}</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            {t('addons.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
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
                className={`group relative overflow-hidden border-2 ${addon.borderColor} shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-4 bg-white/90 backdrop-blur-sm hover:bg-white`}
              >
                {/* Gradient accent line */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${addon.color}`}></div>
                
                <CardContent className="p-8 relative z-10">
                  {/* Icon with gradient background */}
                  <div className={`w-24 h-24 mx-auto mb-6 bg-gradient-to-br ${addon.color} rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-xl`}>
                    <IconComponent className="h-12 w-12 text-white" />
                  </div>
                  
                  {/* Service Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center group-hover:text-gray-700 transition-colors duration-300">
                    {t(addon.key)}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 text-center mb-6 leading-relaxed">
                    {t(addon.description)}
                  </p>
                  
                  {/* Features Grid */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {addon.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-xs">{t(feature)}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Highlight Box */}
                  <div className={`${addon.bgColor} ${addon.borderColor} border-2 rounded-xl p-4 text-center`}>
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <Star className="h-5 w-5 text-yellow-500 fill-current" />
                      <span className={`font-bold ${addon.textColor}`}>{t('addons.included-no-cost')}</span>
                    </div>
                    <p className="text-xs text-gray-600">{t('addons.package-part')}</p>
                  </div>
                </CardContent>
                
                {/* Hover effect border */}
                <div className={`absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-amber-300 transition-colors duration-500`}></div>
              </Card>
            );
          })}
        </div>

        {/* Unique Feature Showcase */}
        <div className="bg-gradient-to-r from-amber-500 to-orange-600 rounded-3xl p-12 text-white relative overflow-hidden mb-20">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
          
          <div className="relative z-10 text-center">
            <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-white/20 rounded-full backdrop-blur-sm border border-white/30">
              <Sparkles className="h-6 w-6 text-yellow-300" />
              <span className="font-semibold">{t('addons.premium-value')}</span>
            </div>
            
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              {t('addons.cta.title')}
            </h3>
            
            <p className="text-xl text-amber-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              {t('addons.cta.description')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-white text-amber-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2">
                <span>{t('addons.cta.button')}</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              
              <div className="flex items-center gap-4 text-amber-100">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-300" />
                  <span className="text-sm">{t('addons.no-hidden-fees')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-300" />
                  <span className="text-sm">{t('addons.premium-quality')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-amber-200 shadow-lg">
            <div className="text-4xl font-bold text-amber-600 mb-2">100%</div>
            <div className="text-gray-700 font-medium">Free of Charge</div>
            <div className="text-gray-500 text-sm">No additional costs</div>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-orange-200 shadow-lg">
            <div className="text-4xl font-bold text-orange-600 mb-2">3</div>
            <div className="text-gray-700 font-medium">{t('addons.premium-addons')}</div>
            <div className="text-gray-500 text-sm">{t('addons.included-automatically')}</div>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-red-200 shadow-lg">
            <div className="text-4xl font-bold text-red-600 mb-2">24/7</div>
            <div className="text-gray-700 font-medium">{t('addons.support-available')}</div>
            <div className="text-gray-500 text-sm">{t('addons.always-here-help')}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreeAddons;