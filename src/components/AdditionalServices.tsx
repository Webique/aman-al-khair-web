import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Gamepad2, 
  Shield, 
  Tent, 
  Trees, 
  Zap 
} from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

const AdditionalServices = () => {
  const { t } = useLanguage();

  const services = [
    { icon: Gamepad2, key: 'additional.playground' },
    { icon: Shield, key: 'additional.security' },
    { icon: Tent, key: 'additional.canopies' },
    { icon: Trees, key: 'additional.landscape' },
    { icon: Zap, key: 'additional.elevator' }
  ];

  return (
    <section id="additional-services" className="py-20 bg-soft-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {t('additional.title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="group shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-2 bg-gradient-card border-0">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 bg-primary rounded-full flex items-center justify-center group-hover:bg-gradient-cta transition-all duration-300">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground leading-relaxed">
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

export default AdditionalServices;