import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle, Menu, X } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

const Navbar = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { key: 'nav.home', href: '#home' },
    { key: 'nav.about', href: '#about' },
    { key: 'nav.vision', href: '#vision-mission' },
    { key: 'nav.services', href: '#services' },
    { key: 'nav.free-addons', href: '#free-addons' },
    { key: 'nav.additional', href: '#additional-services' },
    { key: 'nav.schedule', href: '#work-schedule' },
    { key: 'nav.why', href: '#why-us' },
    { key: 'nav.contact', href: '#contact' }
  ];

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/966533731033', '_blank');
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
    setIsMobileMenuOpen(false);
  };

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/95 backdrop-blur-md shadow-navbar' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="text-xl font-bold text-primary">
              {language === 'ar' ? 'أمان الخير' : 'Aman Al Khair'}
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8 rtl:space-x-reverse">
            {navLinks.map((link) => (
              <button
                key={link.key}
                onClick={() => handleNavClick(link.href)}
                className="text-foreground hover:text-primary transition-colors duration-200 text-sm font-medium"
              >
                {t(link.key)}
              </button>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4 rtl:space-x-reverse">
            <Button
              variant="outline"
              size="sm"
              onClick={toggleLanguage}
              className="min-w-[80px]"
            >
              {t('nav.language')}
            </Button>
            <Button
              onClick={handleWhatsAppClick}
              className="bg-accent hover:bg-accent/90 shadow-button"
              size="sm"
            >
              <MessageCircle className="h-4 w-4 mr-2 rtl:mr-0 rtl:ml-2" />
              {t('nav.whatsapp')}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-md hover:bg-muted transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-background border-t border-border">
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.key}
                  onClick={() => handleNavClick(link.href)}
                  className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors text-sm font-medium"
                >
                  {t(link.key)}
                </button>
              ))}
              <div className="pt-4 border-t border-border space-y-3">
                <Button
                  variant="outline"
                  onClick={toggleLanguage}
                  className="w-full"
                >
                  {t('nav.language')}
                </Button>
                <Button
                  onClick={handleWhatsAppClick}
                  className="w-full bg-accent hover:bg-accent/90"
                >
                  <MessageCircle className="h-4 w-4 mr-2 rtl:mr-0 rtl:ml-2" />
                  {t('nav.whatsapp')}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;