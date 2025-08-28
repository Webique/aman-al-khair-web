import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MessageCircle, Mail, MapPin, Phone, FileText } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

const Contact = () => {
  const { t } = useLanguage();

  const contactInfo = [
    {
      icon: Mail,
      label: t('contact.email'),
      value: 'aman.alkhir1@gmail.com',
      href: 'mailto:aman.alkhir1@gmail.com'
    },
    {
      icon: Phone,
      label: t('contact.whatsapp-label'),
      value: '0533731033',
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

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/966533731033', '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-gradient-hero text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            {t('contact.title')}
          </h2>
          <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
            {t('contact.cta')}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              const content = (
                <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 rtl:space-x-reverse">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <p className="text-sm opacity-80 mb-1">{info.label}</p>
                        <p className="font-semibold text-lg">{info.value}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );

              if (info.href) {
                return (
                  <a
                    key={index}
                    href={info.href}
                    target={info.href.startsWith('http') ? '_blank' : undefined}
                    rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="block hover:scale-105 transition-transform duration-300"
                  >
                    {content}
                  </a>
                );
              }

              return <div key={index}>{content}</div>;
            })}
          </div>

          <div className="text-center">
            <Button
              onClick={handleWhatsAppClick}
              size="lg"
              className="bg-white text-primary hover:bg-white/90 shadow-button text-lg px-8 py-6 h-auto font-semibold transition-all duration-300 hover:scale-105"
            >
              <MessageCircle className="h-6 w-6 mr-3 rtl:mr-0 rtl:ml-3" />
              {t('contact.button')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;