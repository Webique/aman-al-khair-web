import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Clock, Sun, Moon, Calendar, Receipt } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

const WorkSchedule = () => {
  const { t } = useLanguage();

  const scheduleItems = [
    { icon: Sun, key: 'schedule.morning', color: 'bg-yellow-500' },
    { icon: Moon, key: 'schedule.evening', color: 'bg-blue-600' },
    { icon: Calendar, key: 'schedule.flexible', color: 'bg-primary' },
    { icon: Receipt, key: 'schedule.vat', color: 'bg-accent' }
  ];

  return (
    <section id="work-schedule" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {t('schedule.title')}
          </h2>
          <Clock className="h-12 w-12 mx-auto text-primary mb-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {scheduleItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <Card key={index} className="group shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-2 bg-gradient-card border-0">
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 ${item.color} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <p className="text-lg font-medium text-foreground leading-relaxed">
                    {t(item.key)}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WorkSchedule;