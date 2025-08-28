import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Zap, Users, Leaf } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

const WhyChooseUs = () => {
  const { t } = useLanguage();

  const reasons = [
    {
      icon: Award,
      titleKey: 'why.quality-title',
      textKey: 'why.quality-text',
      color: 'bg-blue-500'
    },
    {
      icon: Zap,
      titleKey: 'why.response-title',
      textKey: 'why.response-text',
      color: 'bg-yellow-500'
    },
    {
      icon: Users,
      titleKey: 'why.team-title',
      textKey: 'why.team-text',
      color: 'bg-purple-500'
    },
    {
      icon: Leaf,
      titleKey: 'why.sustainability-title',
      textKey: 'why.sustainability-text',
      color: 'bg-green-500'
    }
  ];

  return (
    <section id="why-us" className="py-20 bg-soft-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {t('why.title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon;
            return (
              <Card key={index} className="group shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-2 bg-gradient-card border-0">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4 rtl:space-x-reverse">
                    <div className={`w-16 h-16 ${reason.color} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground mb-3">
                        {t(reason.titleKey)}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {t(reason.textKey)}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;