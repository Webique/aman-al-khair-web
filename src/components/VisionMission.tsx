import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Eye, Target } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

const VisionMission = () => {
  const { t } = useLanguage();

  return (
    <section id="vision-mission" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {t('vision.title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Vision */}
          <Card className="shadow-card hover:shadow-lg transition-all duration-300 bg-gradient-card border-0">
            <CardContent className="p-8 lg:p-12">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4 rtl:mr-0 rtl:ml-4">
                  <Eye className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-foreground">
                  {t('vision.vision-title')}
                </h3>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t('vision.vision-text')}
              </p>
            </CardContent>
          </Card>

          {/* Mission */}
          <Card className="shadow-card hover:shadow-lg transition-all duration-300 bg-gradient-card border-0">
            <CardContent className="p-8 lg:p-12">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mr-4 rtl:mr-0 rtl:ml-4">
                  <Target className="h-6 w-6 text-accent-foreground" />
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-foreground">
                  {t('vision.mission-title')}
                </h3>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t('vision.mission-text')}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;