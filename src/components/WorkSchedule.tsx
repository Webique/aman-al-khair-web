import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Clock, 
  Sun, 
  Moon, 
  Calendar, 
  Receipt,
  CheckCircle2,
  ArrowRight,
  Zap,
  Star,
  Timer,
  Users,
  Shield
} from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

const WorkSchedule = () => {
  const { t } = useLanguage();
  const [activeTime, setActiveTime] = useState('morning');

  const scheduleItems = [
    { 
      id: 'morning',
      icon: Sun, 
      key: 'schedule.morning',
      description: 'schedule.morning.description',
      features: ['schedule.morning.features.1', 'schedule.morning.features.2', 'schedule.morning.features.3'],
      color: 'from-yellow-400 to-orange-500',
      bgColor: 'bg-yellow-50',
      borderColor: 'border-yellow-200',
      textColor: 'text-yellow-700',
      time: 'schedule.time.morning',
      gradient: 'from-yellow-400 via-orange-400 to-red-400'
    },
    { 
      id: 'evening',
      icon: Moon, 
      key: 'schedule.evening',
      description: 'schedule.evening.description',
      features: ['schedule.evening.features.1', 'schedule.evening.features.2', 'schedule.evening.features.3'],
      color: 'from-blue-500 to-indigo-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      textColor: 'text-blue-700',
      time: 'schedule.time.evening',
      gradient: 'from-blue-500 via-indigo-500 to-purple-500'
    },
    { 
      id: 'flexible',
      icon: Calendar, 
      key: 'schedule.flexible',
      description: 'schedule.flexible.description',
      features: ['schedule.flexible.features.1', 'schedule.flexible.features.2', 'schedule.flexible.features.3'],
      color: 'from-green-500 to-emerald-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      textColor: 'text-green-700',
      time: 'schedule.time.custom',
      gradient: 'from-green-500 via-emerald-500 to-teal-500'
    },
    { 
      id: 'vat',
      icon: Receipt, 
      key: 'schedule.vat',
      description: 'schedule.vat.description',
      features: ['schedule.vat.features.1', 'schedule.vat.features.2', 'schedule.vat.features.3'],
      color: 'from-purple-500 to-pink-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
      textColor: 'text-purple-700',
      time: 'schedule.time.included',
      gradient: 'from-purple-500 via-pink-500 to-rose-500'
    }
  ];

  const activeItem = scheduleItems.find(item => item.id === activeTime);

  // Debug: Log the active item and its time
  console.log('Active Item:', activeItem);
  console.log('Active Item Time:', activeItem?.time);
  console.log('Translated Time:', activeItem?.time ? t(activeItem.time) : 'No time');
  console.log('Test Translation:', t('schedule.title'));

  return (
    <section id="work-schedule" className="py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl animate-spin-slow"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-white border border-white/20">
            <Timer className="h-5 w-5 text-yellow-300" />
            <span className="font-medium">{t('schedule.subtitle')}</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {t('schedule.title')}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {t('schedule.description')}
          </p>
        </div>

        {/* Interactive Schedule Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {scheduleItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTime(item.id)}
              className={`group relative px-6 py-3 rounded-2xl font-semibold transition-all duration-500 transform hover:scale-105 ${
                activeTime === item.id
                  ? `bg-gradient-to-r ${item.gradient} text-white shadow-2xl shadow-${item.color.split('-')[1]}-500/50`
                  : 'bg-white/10 text-gray-300 hover:bg-white/20 backdrop-blur-sm border border-white/20'
              }`}
            >
              <div className="flex items-center gap-3">
                <item.icon className={`h-5 w-5 ${
                  activeTime === item.id ? 'text-white' : 'text-gray-400'
                }`} />
                <span>{item.time}</span>
              </div>
              {activeTime === item.id && (
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rotate-45"></div>
              )}
            </button>
          ))}
        </div>

        {/* Main Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left: Active Schedule Display */}
          <div className="relative">
            <div className={`bg-gradient-to-br ${activeItem?.gradient} rounded-3xl p-12 text-white relative overflow-hidden`}>
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                    {activeItem && <activeItem.icon className="h-10 w-10 text-white" />}
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold mb-2">{activeItem?.key ? t(activeItem.key) : ''}</h3>
                                         <p className="text-xl text-white/90">{activeItem?.time ? t(activeItem.time) : ''}</p>
                  </div>
                </div>
                
                <p className="text-lg text-white/90 mb-8 leading-relaxed">
                  {activeItem?.description ? t(activeItem.description) : ''}
                </p>
                
                <div className="space-y-3">
                  {activeItem?.features?.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-300 flex-shrink-0" />
                      <span className="text-white/90">{t(feature)}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right: Interactive Timeline */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold text-white mb-4">{t('schedule.daily-workflow')}</h3>
              <p className="text-gray-300">{t('schedule.daily-workflow.description')}</p>
            </div>
            
            <div className="space-y-6">
              {scheduleItems.map((item, index) => (
                <div
                  key={item.id}
                  className={`group cursor-pointer transition-all duration-500 ${
                    activeTime === item.id ? 'scale-105' : 'hover:scale-102'
                  }`}
                  onClick={() => setActiveTime(item.id)}
                >
                  <div className={`flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 ${
                    activeTime === item.id
                      ? `bg-gradient-to-r ${item.gradient} text-white shadow-xl`
                      : 'bg-white/5 text-gray-300 hover:bg-white/10 backdrop-blur-sm border border-white/10'
                  }`}>
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      activeTime === item.id ? 'bg-white/20' : 'bg-white/10'
                    }`}>
                      <item.icon className="h-6 w-6" />
                    </div>
                                         <div className="flex-1">
                       <h4 className="font-semibold mb-1">{t(item.key)}</h4>
                       <p className="text-sm opacity-80">{t(item.time)}</p>
                     </div>
                    <div className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      activeTime === item.id ? 'bg-white scale-125' : 'bg-gray-500 group-hover:bg-gray-400'
                    }`}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-12 text-center border border-white/20">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full text-white font-semibold">
              <Zap className="h-5 w-5" />
              <span>{t('schedule.flexible-scheduling')}</span>
            </div>
            
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {t('schedule.cta.title')}
            </h3>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              {t('schedule.cta.description')}
            </p>
            
            <button className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center gap-2 mx-auto">
              <span>{t('schedule.cta.button')}</span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Floating Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center">
              <Clock className="h-8 w-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">24/7</div>
            <div className="text-gray-300 font-medium">{t('schedule.availability')}</div>
            <div className="text-gray-400 text-sm">{t('schedule.availability.description')}</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center">
              <Users className="h-8 w-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">100%</div>
            <div className="text-gray-300 font-medium">{t('schedule.client-satisfaction')}</div>
            <div className="text-gray-400 text-sm">{t('schedule.client-satisfaction.description')}</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">Flexible</div>
            <div className="text-gray-300 font-medium">{t('schedule.scheduling')}</div>
            <div className="text-gray-400 text-sm">{t('schedule.scheduling.description')}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSchedule;