import React from 'react';
import { Mail, Phone, MapPin, FileText } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

const Footer = () => {
  const { language, t } = useLanguage();

  const navLinks = [
    { key: 'nav.home', href: '#home' },
    { key: 'nav.about', href: '#about' },
    { key: 'nav.vision', href: '#vision-mission' },
    { key: 'nav.services', href: '#services' },
    { key: 'nav.contact', href: '#contact' }
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: t('contact.email'),
      value: 'aman.alkhir1@gmail.com'
    },
    {
      icon: Phone,
      label: t('contact.whatsapp-label'),
      value: '0533731033'
    },
    {
      icon: MapPin,
      label: t('contact.address'),
      value: t('contact.address-text')
    },
    {
      icon: FileText,
      label: t('contact.cr-label'),
      value: '7041589726'
    }
  ];

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-foreground text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              {language === 'ar' ? 'أمان الخير' : 'Aman Al Khair'}
            </h3>
            <p className="text-gray-300 leading-relaxed">
              {t('footer.description')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">
              {t('footer.links')}
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.key}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-left w-full"
                  >
                    {t(link.key)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">
              {t('footer.contact-info')}
            </h4>
            <ul className="space-y-4">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <li key={index} className="flex items-center space-x-3 rtl:space-x-reverse">
                    <IconComponent className="h-5 w-5 text-primary flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-400">{info.label}</p>
                      <p className="text-gray-300">{info.value}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center text-gray-400">
            {t('footer.copyright')}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;