import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Zap, Users, Leaf } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { RTLText } from '@/components/ui/rtl-wrapper';

const WhyChooseUs = () => {
  const { t, isRTL } = useLanguage();

  const reasons = [
    {
      icon: Award,
      title: t('why.quality-title'),
      text: t('why.quality-text')
    },
    {
      icon: Zap,
      title: t('why.response-title'),
      text: t('why.response-text')
    },
    {
      icon: Users,
      title: t('why.team-title'),
      text: t('why.team-text')
    },
    {
      icon: Leaf,
      title: t('why.sustainability-title'),
      text: t('why.sustainability-text')
    }
  ];

  return (
    <section id="why-us" className="py-20 bg-primary-blush">
      <div className="container mx-auto px-4">
        <RTLText className="text-center mb-16" align="center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-dark mb-6">
            {t('why.title')}
          </h2>
        </RTLText>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon;
            return (
              <Card key={index} className="text-center shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-2 bg-background border-0">
                <CardContent className="p-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-primary-dark to-primary-dark/80 rounded-full flex items-center justify-center">
                    <IconComponent className="h-8 w-8 text-primary-cream" />
                  </div>
                  <h3 className="text-xl font-bold text-primary-dark mb-3">
                    {reason.title}
                  </h3>
                  <RTLText className="text-primary-dark/80 leading-relaxed" align="center">
                    {reason.text}
                  </RTLText>
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