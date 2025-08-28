import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.vision': 'Vision & Mission',
    'nav.services': 'Services',
    'nav.free-addons': 'Free Add-ons',
    'nav.additional': 'Additional Services',
    'nav.schedule': 'Work Schedule',
    'nav.why': 'Why Choose Us',
    'nav.contact': 'Contact',
    'nav.whatsapp': 'WhatsApp',
    'nav.language': 'العربية',
    
    // Hero
    'hero.title': 'Elevate Your Property',
    'hero.subtitle': 'Integrated Solutions for Cleaning & Facility Management',
    'hero.description': 'Get a tailored service plan and a transparent quote. Contact us directly for a fast response.',
    'hero.cta': 'Request Assessment on WhatsApp',
    
    // About
    'about.title': 'About Us',
    'about.description': 'Aman Al Khair is a Saudi startup specializing in cleaning, maintenance, and facility management for residential and commercial complexes. Our mission is to improve quality of life through innovative solutions and professional execution.',
    'about.quality': '100% Commitment to Quality',
    'about.team': '✓ Dedicated Team',
    'about.cr': 'CR: 7041589726',
    
    // Vision & Mission
    'vision.title': 'Vision & Mission',
    'vision.vision-title': 'Vision',
    'vision.vision-text': 'To be the leading choice in Saudi Arabia by excelling in quality, reliability, and attention to the smallest details.',
    'vision.mission-title': 'Mission',
    'vision.mission-text': 'To enhance our clients\' quality of life by delivering integrated, innovative solutions in facility management and cleaning, adhering to the highest standards.',
    
    // Services
    'services.title': 'Our Services',
    'services.cleaning': 'Cleaning',
    'services.maintenance': 'Maintenance',
    'services.facility': 'Facility Management',
    'services.waste': 'Daily Waste Removal',
    'services.deep': 'Deep Cleaning (Lobbies & Corridors)',
    'services.glass': 'Glass & Window Polishing',
    'services.roof': 'Roof & Tank Cleaning',
    'services.pest': 'Pest-Control Spraying',
    
    // Free Add-ons
    'addons.title': 'Free Add-ons',
    'addons.parking': 'Parking Re-Marking & Numbering',
    'addons.spraying': 'Bi-Annual Insect Spraying',
    'addons.bins': 'Supply of Waste Bins',
    
    // Additional Services
    'additional.title': 'Additional Services',
    'additional.playground': 'Outdoor Children\'s Play Equipment Installation',
    'additional.security': 'Security Systems for Shared Entrances',
    'additional.canopies': 'Parking Canopies (Supply & Install)',
    'additional.landscape': 'Custom Landscape & Garden Design',
    'additional.elevator': 'Elevator Maintenance & Safety Assurance',
    
    // Work Schedule
    'schedule.title': 'Work Schedule',
    'schedule.morning': 'Morning 07:00–11:00',
    'schedule.evening': 'Evening 16:00–20:00',
    'schedule.flexible': 'Flexible timing per client agreement',
    'schedule.vat': 'All prices include VAT',
    
    // Why Choose Us
    'why.title': 'Why Choose Us',
    'why.quality-title': 'Unmatched Quality',
    'why.quality-text': 'Best materials and equipment for results beyond expectations.',
    'why.response-title': 'Quick Response',
    'why.response-text': 'Fast action, efficient emergency handling.',
    'why.team-title': 'Integrated Team',
    'why.team-text': 'Skilled technicians, professional service.',
    'why.sustainability-title': 'Sustainability & Reliability',
    'why.sustainability-text': 'Environmentally friendly, dependable.',
    
    // Contact
    'contact.title': 'Contact Us',
    'contact.cta': 'Ready to elevate your property? Contact us today on WhatsApp for a free facility assessment.',
    'contact.email': 'Email',
    'contact.whatsapp-label': 'WhatsApp',
    'contact.address': 'Address',
    'contact.cr-label': 'CR',
    'contact.button': 'Talk to Us on WhatsApp',
    'contact.address-text': 'Riyadh – Ishbiliyah District',
    
    // Footer
    'footer.description': 'Professional cleaning and facility management solutions',
    'footer.links': 'Quick Links',
    'footer.contact-info': 'Contact Info',
    'footer.copyright': '© 2024 Aman Al Khair. All rights reserved.',
  },
  ar: {
    // Navigation
    'nav.home': 'الرئيسية',
    'nav.about': 'من نحن',
    'nav.vision': 'الرؤية والرسالة',
    'nav.services': 'الخدمات',
    'nav.free-addons': 'الإضافات المجانية',
    'nav.additional': 'خدمات إضافية',
    'nav.schedule': 'أوقات العمل',
    'nav.why': 'لماذا نحن',
    'nav.contact': 'تواصل معنا',
    'nav.whatsapp': 'واتساب',
    'nav.language': 'English',
    
    // Hero
    'hero.title': 'ارتقِ بمستوى ممتلكاتك',
    'hero.subtitle': 'حلول متكاملة للنظافة وإدارة المرافق',
    'hero.description': 'احصل على خطة خدمة مخصصة وعرض سعر شفاف. تواصل معنا مباشرةً للحصول على استجابة سريعة.',
    'hero.cta': 'اطلب تقييمك عبر واتساب',
    
    // About
    'about.title': 'من نحن',
    'about.description': 'أمان الخير شركة سعودية ناشئة متخصصة في خدمات النظافة والصيانة وإدارة المرافق للمجمعات السكنية والتجارية. نهدف لإحداث فرق في جودة الحياة عبر حلول مبتكرة وتنفيذ احترافي.',
    'about.quality': '%100 التزام بالجودة',
    'about.team': '✓ فريق متخصص',
    'about.cr': 'سجل تجاري: 7041589726',
    
    // Vision & Mission
    'vision.title': 'الرؤية والرسالة',
    'vision.vision-title': 'رؤيتنا',
    'vision.vision-text': 'أن نكون الخيار الأول في المملكة العربية السعودية من خلال التفوق في الجودة والموثوقية والاهتمام بأدق التفاصيل.',
    'vision.mission-title': 'رسالتنا',
    'vision.mission-text': 'تحسين جودة الحياة لعملائنا بتقديم حلول متكاملة ومبتكرة في إدارة المرافق والنظافة، مع الالتزام بأعلى معايير الاحترافية.',
    
    // Services
    'services.title': 'خدماتنا',
    'services.cleaning': 'النظافة',
    'services.maintenance': 'الصيانة',
    'services.facility': 'إدارة المرافق',
    'services.waste': 'إزالة النفايات اليومية',
    'services.deep': 'تنظيف عميق للردهات والممرات',
    'services.glass': 'تلميع الواجهات الزجاجية',
    'services.roof': 'تنظيف الأسطح والخزانات',
    'services.pest': 'رش المبيدات الحشرية',
    
    // Free Add-ons
    'addons.title': 'الإضافات المجانية',
    'addons.parking': 'إعادة تخطيط وترقيم المواقف',
    'addons.spraying': 'رش المبيدات الحشرية كل 6 أشهر',
    'addons.bins': 'توفير حاويات النفايات',
    
    // Additional Services
    'additional.title': 'خدمات إضافية',
    'additional.playground': 'تركيب ألعاب أطفال خارجية',
    'additional.security': 'أنظمة أمنية لأبواب المناطق المشتركة',
    'additional.canopies': 'مظلات مواقف (توريد وتركيب)',
    'additional.landscape': 'تصميم وتنسيق الحدائق',
    'additional.elevator': 'صيانة المصاعد وضمان سلامتها',
    
    // Work Schedule
    'schedule.title': 'أوقات العمل',
    'schedule.morning': 'صباحي 07:00–11:00',
    'schedule.evening': 'مسائي 16:00–20:00',
    'schedule.flexible': 'مواعيد مرنة حسب اتفاق العميل',
    'schedule.vat': 'جميع الأسعار شاملة ضريبة القيمة المضافة',
    
    // Why Choose Us
    'why.title': 'لماذا نحن',
    'why.quality-title': 'جودة لا تضاهى',
    'why.quality-text': 'نستخدم أفضل المواد والمعدات لضمان نتائج تفوق التوقعات.',
    'why.response-title': 'استجابة سريعة',
    'why.response-text': 'فريقنا جاهز لتلبية احتياجاتك وحل أي طارئ بكفاءة عالية.',
    'why.team-title': 'فريق متكامل',
    'why.team-text': 'فنيون وعمال مدربون لتقديم خدمة احترافية.',
    'why.sustainability-title': 'استدامة وموثوقية',
    'why.sustainability-text': 'نلتزم بالمعايير البيئية ونوفر خدمات يمكنك الاعتماد عليها دائمًا.',
    
    // Contact
    'contact.title': 'تواصل معنا',
    'contact.cta': 'جاهز للارتقاء بممتلكاتك؟ تواصل معنا عبر واتساب الآن لتحديد موعد لتقييم مجاني لمرافقك.',
    'contact.email': 'البريد الإلكتروني',
    'contact.whatsapp-label': 'رقم الواتس',
    'contact.address': 'العنوان',
    'contact.cr-label': 'السجل التجاري',
    'contact.button': 'تحدث معنا على واتساب',
    'contact.address-text': 'الرياض – حي اشبيليا',
    
    // Footer
    'footer.description': 'حلول احترافية للنظافة وإدارة المرافق',
    'footer.links': 'روابط سريعة',
    'footer.contact-info': 'معلومات التواصل',
    'footer.copyright': '© 2024 أمان الخير. جميع الحقوق محفوظة.',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    // Update document direction and lang attribute
    document.documentElement.setAttribute('dir', language === 'ar' ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', language === 'ar' ? 'ar' : 'en');
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};