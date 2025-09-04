import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'tr' | 'en' | 'zh';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  tr: {
    // Hero section
    'hero.title': 'Ölüdeniz',
    'hero.subtitle': 'Yamaç Paraşütü',
    'hero.description': 'Dünyanın en iyi pilotlarıyla Fethiye semalarında özgürlüğü keşfet. 3500 TL fırsatını kaçırma!',
    'hero.special.offer': '🎯 ÖZEL KAMPANYA: 3500 TL',
    'hero.whatsapp': '📱 WhatsApp Ara',
    'hero.height': 'Uçuş Yüksekliği',
    'hero.duration': 'Ortalama Uçuş Süresi',
    'hero.safety': 'Güvenlik Kaydı',
  },
  en: {
    // Hero section
    'hero.title': 'Ölüdeniz',
    'hero.subtitle': 'Paragliding',
    'hero.description': 'Discover freedom in Fethiye skies with the world\'s best pilots. Don\'t miss the 3500 TL opportunity!',
    'hero.special.offer': '🎯 SPECIAL CAMPAIGN: 3500 TL',
    'hero.whatsapp': '📱 WhatsApp Call',
    'hero.height': 'Flight Altitude',
    'hero.duration': 'Average Flight Time',
    'hero.safety': 'Safety Record',
  },
  zh: {
    // Hero section
    'hero.title': '厄吕代尼兹',
    'hero.subtitle': '滑翔伞',
    'hero.description': '与世界顶级飞行员一起在费特希耶天空中发现自由。不要错过3500里拉的机会！',
    'hero.special.offer': '🎯 特别活动：3500里拉',
    'hero.whatsapp': '📱 WhatsApp电话',
    'hero.height': '飞行高度',
    'hero.duration': '平均飞行时间',
    'hero.safety': '安全记录',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('tr');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};