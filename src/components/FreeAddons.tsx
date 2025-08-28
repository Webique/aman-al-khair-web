import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Car, ShowerHead, Trash } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

const FreeAddons = () => {
  const { t } = useLanguage();

  const addons = [
    { icon: Car, key: 'addons.parking' },
    { icon: ShowerHead, key: 'addons.spraying' },
    { icon: Trash, key: 'addons.bins' }
  ];

  return (
    <section id="free-addons" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {t('addons.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-cta mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {addons.map((addon, index) => {
            const IconComponent = addon.icon;
            return (
              <Card key={index} className="group shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-2 bg-gradient-card border-0">
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 mx-auto mb-6 bg-accent rounded-full flex items-center justify-center group-hover:bg-gradient-cta transition-all duration-300">
                    <IconComponent className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground leading-relaxed">
                    {t(addon.key)}
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

export default FreeAddons;