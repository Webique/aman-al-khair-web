import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MessageCircle, Mail, MapPin, FileText } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { RTLIcon, RTLText } from '@/components/ui/rtl-wrapper';

const Contact = () => {
  const { t, isRTL } = useLanguage();

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/966533731033', '_blank');
  };

  const contactInfo = [
    {
      icon: Mail,
      label: t('contact.email'),
      value: 'info@amanalkhair.com',
      href: 'mailto:info@amanalkhair.com'
    },
    {
      icon: MessageCircle,
      label: t('contact.whatsapp-label'),
      value: '+966 53 373 1033',
      href: 'https://wa.me/966533731033'
    },
    {
      icon: MapPin,
      label: t('contact.address'),
      value: t('contact.address-text'),
      href: null
    },
    {
      icon: FileText,
      label: t('contact.cr-label'),
      value: '7041589726',
      href: null
    }
  ];

  return (
    <section id="contact" className="py-20 bg-primary-beige">
      <div className="container mx-auto px-4">
        <RTLText className="text-center mb-16" align="center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-dark mb-6">
            {t('contact.title')}
          </h2>
          <p className="text-lg md:text-xl text-primary-dark/80 max-w-3xl mx-auto leading-relaxed">
            {t('contact.cta')}
          </p>
        </RTLText>

        <div className="max-w-4xl mx-auto">
          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <Card key={index} className="shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-2 bg-background border-0">
                  <CardContent className="p-6">
                    <div className="flex items-center">
                      <div className={`w-12 h-12 bg-gradient-to-r from-primary-blush to-primary-beige rounded-full flex items-center justify-center ${
                        isRTL ? 'ml-4' : 'mr-4'
                      }`}>
                        <IconComponent className="h-6 w-6 text-primary-dark" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-primary-dark/70 mb-1">
                          {info.label}
                        </p>
                        {info.href ? (
                          <a
                            href={info.href}
                            target={info.href.startsWith('http') ? '_blank' : undefined}
                            rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="text-lg font-semibold text-primary-dark hover:text-primary transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-lg font-semibold text-primary-dark">
                            {info.value}
                          </p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <Button
              onClick={handleWhatsAppClick}
              size="lg"
              className="bg-gradient-to-r from-primary-dark to-primary-dark/90 text-primary-cream shadow-button text-lg px-8 py-6 h-auto font-semibold transition-all duration-300 hover:scale-105"
            >
              <RTLIcon rtlFlip={false}>
                <MessageCircle className="h-6 w-6" />
              </RTLIcon>
              <span className={isRTL ? 'mr-3' : 'ml-3'}>
                {t('contact.button')}
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;