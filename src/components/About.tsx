import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Users, Award } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { RTLText } from '@/components/ui/rtl-wrapper';

const About = () => {
  const { t, isRTL } = useLanguage();

  const highlights = [
    {
      icon: Award,
      text: t('about.quality')
    },
    {
      icon: Users,
      text: t('about.team')
    },
    {
      icon: CheckCircle,
      text: t('about.cr')
    }
  ];

  return (
    <section id="about" className="py-20 bg-primary-beige">
      <div className="container mx-auto px-4">
        <RTLText className="text-center mb-16" align="center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-dark mb-6">
            {t('about.title')}
          </h2>
          <p className="text-lg md:text-xl text-primary-dark/80 max-w-4xl mx-auto leading-relaxed">
            {t('about.description')}
          </p>
        </RTLText>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {highlights.map((highlight, index) => {
            const IconComponent = highlight.icon;
            return (
              <Card key={index} className="text-center shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-2 bg-background border-0">
                <CardContent className="p-8">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-primary-blush to-primary-beige rounded-full flex items-center justify-center">
                    <IconComponent className="h-8 w-8 text-primary-dark" />
                  </div>
                  <RTLText className="text-lg font-semibold text-primary-dark" align="center">
                    {highlight.text}
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

export default About;