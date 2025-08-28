import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Sparkles, 
  Wrench, 
  Building2, 
  Trash2, 
  Wind, 
  Droplets, 
  Home, 
  Bug 
} from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

const Services = () => {
  const { t } = useLanguage();

  const services = [
    { icon: Sparkles, key: 'services.cleaning' },
    { icon: Wrench, key: 'services.maintenance' },
    { icon: Building2, key: 'services.facility' },
    { icon: Trash2, key: 'services.waste' },
    { icon: Wind, key: 'services.deep' },
    { icon: Droplets, key: 'services.glass' },
    { icon: Home, key: 'services.roof' },
    { icon: Bug, key: 'services.pest' }
  ];

  return (
    <section id="services" className="py-20 bg-soft-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {t('services.title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="group shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-2 bg-gradient-card border-0">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-cta rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {t(service.key)}
                  </h3>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;