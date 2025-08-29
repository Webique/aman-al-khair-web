import React from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { RTLText } from '@/components/ui/rtl-wrapper';

const Footer = () => {
  const { t, isRTL } = useLanguage();

  const quickLinks = [
    { key: 'nav.home', href: '#home' },
    { key: 'nav.about', href: '#about' },
    { key: 'nav.services', href: '#services' },
    { key: 'nav.contact', href: '#contact' }
  ];

  const contactInfo = [
    { label: t('contact.email'), value: 'info@amanalkhair.com' },
    { label: t('contact.whatsapp-label'), value: '+966 53 373 1033' },
    { label: t('contact.address'), value: t('contact.address-text') }
  ];

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-primary-dark to-primary-dark/95 text-primary-cream py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              {isRTL ? 'أمان الخير' : 'Aman Al Khair'}
            </h3>
            <RTLText className="text-primary-cream/80 leading-relaxed">
              {t('footer.description')}
            </RTLText>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">
              {t('footer.links')}
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-primary-cream/70 hover:text-primary-cream transition-colors text-left"
                  >
                    {t(link.key)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">
              {t('footer.contact-info')}
            </h4>
            <ul className="space-y-2">
              {contactInfo.map((info, index) => (
                <li key={index} className="text-primary-cream/70">
                  <span className="font-medium">{info.label}:</span> {info.value}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary-cream/20 mt-8 pt-8">
          <RTLText className="text-center text-primary-cream/70" align="center">
            {t('footer.copyright')}
          </RTLText>
        </div>
      </div>
    </footer>
  );
};

export default Footer;