import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Sparkles, 
  Droplets, 
  Wrench, 
  Building2, 
  Trash2, 
  Brush, 
  Glasses, 
  Home, 
  Bug, 
  CheckCircle2, 
  ArrowRight 
} from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

const Services = () => {
  const { t } = useLanguage();

  const handleWhatsAppClick = () => {
    window.open('https://api.whatsapp.com/send/?phone=966533731033&text&type=phone_number&app_absent=0', '_blank');
  };

  const services = [
    { 
      icon: Sparkles, 
      key: 'services.cleaning',
      category: 'services.categories.core',
      description: 'services.descriptions.cleaning',
      features: ['services.features.eco', 'services.features.staff', 'services.features.quality']
    },
    { 
      icon: Wrench, 
      key: 'services.maintenance',
      category: 'services.categories.maintenance',
      description: 'services.descriptions.maintenance',
      features: ['services.features.preventive', 'services.features.support', 'services.features.technicians']
    },
    { 
      icon: Building2, 
      key: 'services.facility',
      category: 'services.categories.management',
      description: 'services.descriptions.facility',
      features: ['services.features.planning', 'services.features.optimization', 'services.features.monitoring']
    },
    { 
      icon: Trash2, 
      key: 'services.waste',
      category: 'services.categories.waste',
      description: 'services.descriptions.waste',
      features: ['services.features.recycling', 'services.features.hygienic', 'services.features.schedules']
    },
    { 
      icon: Brush, 
      key: 'services.deep',
      category: 'services.categories.specialized',
      description: 'services.descriptions.deep',
      features: ['services.features.equipment', 'services.features.thorough', 'services.features.odor']
    },
    { 
      icon: Glasses, 
      key: 'services.glass',
      category: 'services.categories.glass',
      description: 'services.descriptions.glass',
      features: ['services.features.streak', 'services.features.safety', 'services.features.results']
    },
    { 
      icon: Home, 
      key: 'services.roof',
      category: 'services.categories.exterior',
      description: 'services.descriptions.roof',
      features: ['services.features.safety-equipment', 'services.features.inspection', 'services.features.care']
    },
    { 
      icon: Bug, 
      key: 'services.pest',
      category: 'services.categories.pest',
      description: 'services.descriptions.pest',
      features: ['services.features.chemicals', 'services.features.monitoring-pest', 'services.features.prevention']
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-br from-primary-cream via-primary-beige to-primary-blush relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-blush rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-beige rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <Badge variant="secondary" className="mb-4 px-4 py-2 text-sm font-medium bg-primary-blush text-primary-dark border-primary-blush/30">
            {t('services.subtitle')}
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-dark mb-6 leading-tight">
            {t('services.title')}
          </h2>
          <p className="text-xl text-primary-dark/80 max-w-3xl mx-auto leading-relaxed">
            {t('services.description')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                className="group relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-background/80 backdrop-blur-sm hover:bg-background"
              >
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-blush/5 to-primary-beige/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <CardContent className="p-8 relative z-10">
                  {/* Service Icon */}
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-primary-blush to-primary-beige rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-lg">
                    <IconComponent className="h-10 w-10 text-primary-dark" />
                  </div>
                  
                  {/* Category Badge */}
                  <Badge variant="outline" className="mb-3 text-xs font-medium border-primary-blush/30 text-primary-dark bg-primary-blush/20">
                    {t(service.category)}
                  </Badge>
                  
                  {/* Service Title */}
                  <h3 className="text-xl font-bold text-primary-dark mb-3 group-hover:text-primary-dark/80 transition-colors duration-300">
                    {t(service.key)}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-primary-dark/70 text-sm leading-relaxed mb-4">
                    {t(service.description)}
                  </p>
                  
                  {/* Features List */}
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-primary-dark/70">
                        <CheckCircle2 className="h-4 w-4 text-primary-dark mr-2 flex-shrink-0" />
                        <span>{t(feature)}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Learn More Button */}
                  <button 
                    onClick={handleWhatsAppClick}
                    className="w-full group/btn bg-gradient-to-r from-primary-blush to-primary-beige hover:from-primary-blush/90 hover:to-primary-beige/90 text-primary-dark font-medium py-3 px-4 rounded-xl transition-all duration-300 transform group-hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center"
                  >
                    <span>{t('services.learn-more')}</span>
                    <ArrowRight className="h-4 w-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </button>
                </CardContent>
                
                {/* Hover effect border */}
                <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-primary-blush/30 transition-colors duration-500"></div>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-primary-dark to-primary-dark/90 rounded-3xl p-12 text-primary-cream relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                {t('services.cta.title')}
              </h3>
              <p className="text-xl text-primary-cream/90 mb-8 max-w-2xl mx-auto">
                {t('services.cta.description')}
              </p>
              <button 
                onClick={handleWhatsAppClick}
                className="bg-gradient-to-r from-primary-blush to-primary-beige hover:from-primary-blush/90 hover:to-primary-beige/90 text-primary-dark font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                {t('services.cta.button')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;