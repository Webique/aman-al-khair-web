import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Target, Flag } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { RTLText, RTLSpacer } from '@/components/ui/rtl-wrapper';

const VisionMission = () => {
  const { t, isRTL } = useLanguage();

  return (
    <section id="vision-mission" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <RTLText className="text-center mb-16" align="center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-dark mb-6">
            {t('vision.title')}
          </h2>
        </RTLText>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Vision */}
          <Card className="shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-2 bg-primary-blush border-0">
            <CardContent className="p-8">
              <div className="flex items-start">
                <div className={`w-12 h-12 bg-primary-dark rounded-full flex items-center justify-center ${
                  isRTL ? 'ml-4' : 'mr-4'
                }`}>
                  <Target className="h-6 w-6 text-primary-cream" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-primary-dark mb-4">
                    {t('vision.vision-title')}
                  </h3>
                  <RTLText className="text-primary-dark/80 leading-relaxed">
                    {t('vision.vision-text')}
                  </RTLText>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Mission */}
          <Card className="shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-2 bg-primary-beige border-0">
            <CardContent className="p-8">
              <div className="flex items-start">
                <div className={`w-12 h-12 bg-primary-dark rounded-full flex items-center justify-center ${
                  isRTL ? 'ml-4' : 'mr-4'
                }`}>
                  <Flag className="h-6 w-6 text-primary-cream" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-primary-dark mb-4">
                    {t('vision.mission-title')}
                  </h3>
                  <RTLText className="text-primary-dark/80 leading-relaxed">
                    {t('vision.mission-text')}
                  </RTLText>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;