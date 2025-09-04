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
    
    // Services section
    'services.title': 'Yamaç Paraşütü Paketlerimiz',
    'services.subtitle': '- Maceranızı Seçin',
    'services.description': 'Dünyaca ünlü Ölüdeniz Mavi Lagün üzerinde profesyonel tandem yamaç paraşütü deneyimleri',
    'services.standard.title': 'Standart Uçuş',
    'services.sunset.title': 'Gün Batımı Uçuşu',
    'services.popular': 'En Popüler',
    'services.reserve': 'Rezerve Et',
    'services.features.instructor': 'Profesyonel sertifikalı eğitmen',
    'services.features.equipment': 'Tüm güvenlik ekipmanları dahil',
    'services.features.insurance': 'Sigorta kapsamı',
    'services.features.photos': 'Temel fotoğraf paketi',
    'services.features.transfer': 'Ölüdeniz\'den transfer',
    'services.features.golden.hour': 'Altın saat deneyimi',
    'services.features.extended': 'Uzatılmış uçuş süresi',
    'services.features.pro.media': 'Profesyonel fotoğraf ve video',
    'services.features.champagne': 'Şampanya tostı',
    'services.features.premium.insurance': 'Premium sigorta',
    'services.features.hotel.pickup': 'Otel alımı dahil',
    'services.info.tandem': 'Tandem Uçuşlar',
    'services.info.tandem.desc': 'Deneyim gerekmiyor',
    'services.info.pilots': 'Sertifikalı Pilotlar',
    'services.info.pilots.desc': 'En az 20 yıl deneyim',
    'services.info.photos': 'Fotoğraf Paketi',
    'services.info.photos.desc': 'Profesyonel çekimler dahil',
    'services.info.daily': 'Günlük Uçuşlar',
    'services.info.daily.desc': 'Hava durumu uygunsa',
    
    // Testimonials section
    'testimonials.title': 'Müşteri Yorumları',
    'testimonials.subtitle': '- Misafirlerimiz Ne Diyor',
    'testimonials.description': 'Sadece bizim sözümüze güvenmeyin - Ölüdeniz\'in büyüsünü yukarıdan deneyimlemiş mutlu müşterilerimizden dinleyin',
    'testimonials.stats.customers': 'Mutlu Müşteri',
    'testimonials.stats.rating': 'Ortalama Puan',
    'testimonials.stats.recommend': 'Tavsiye Eder',
    
    // Location section
    'location.title': 'Ölüdeniz Lokasyonu',
    'location.subtitle': 've Buluşma Noktaları',
    'location.description': 'Fethiye Ölüdeniz\'de Babadağ\'dan kalkış yaparak Mavi Lagün üzerinde unutulmaz bir deneyim yaşayın',
    'location.info': 'Konum Bilgileri',
    'location.address': 'Adres',
    'location.contact': 'İletişim',
    'location.hours': 'Çalışma Saatleri',
    'location.how.to.reach': 'Nasıl Ulaşırım?',
    
    // Footer section
    'footer.description': 'Türkiye\'nin en güzel kıyı şeridi üzerinde yamaç paraşütü heyecanını yaşayın. 2008\'den beri sertifikalı eğitmenlerle profesyonel tandem uçuşlar.',
    'footer.quick.links': 'Hızlı Linkler',
    'footer.contact': 'İletişim',
    'footer.copyright': '2024 Ölüdeniz Yamaç Paraşütü. Tüm hakları saklıdır. | Lisanslı ve Sigortalı Operatör'
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
    
    // Services section
    'services.title': 'Our Paragliding Packages',
    'services.subtitle': '- Choose Your Adventure',
    'services.description': 'Professional tandem paragliding experiences over the world-famous Ölüdeniz Blue Lagoon',
    'services.standard.title': 'Standard Flight',
    'services.sunset.title': 'Sunset Flight',
    'services.popular': 'Most Popular',
    'services.reserve': 'Reserve',
    'services.features.instructor': 'Professional certified instructor',
    'services.features.equipment': 'All safety equipment included',
    'services.features.insurance': 'Insurance coverage',
    'services.features.photos': 'Basic photo package',
    'services.features.transfer': 'Transfer from Ölüdeniz',
    'services.features.golden.hour': 'Golden hour experience',
    'services.features.extended': 'Extended flight duration',
    'services.features.pro.media': 'Professional photos and video',
    'services.features.champagne': 'Champagne toast',
    'services.features.premium.insurance': 'Premium insurance',
    'services.features.hotel.pickup': 'Hotel pickup included',
    'services.info.tandem': 'Tandem Flights',
    'services.info.tandem.desc': 'No experience required',
    'services.info.pilots': 'Certified Pilots',
    'services.info.pilots.desc': 'At least 20 years experience',
    'services.info.photos': 'Photo Package',
    'services.info.photos.desc': 'Professional shots included',
    'services.info.daily': 'Daily Flights',
    'services.info.daily.desc': 'Weather permitting',
    
    // Testimonials section
    'testimonials.title': 'Customer Reviews',
    'testimonials.subtitle': '- What Our Guests Say',
    'testimonials.description': 'Don\'t just take our word for it - hear from our happy customers who experienced the magic of Ölüdeniz from above',
    'testimonials.stats.customers': 'Happy Customers',
    'testimonials.stats.rating': 'Average Rating',
    'testimonials.stats.recommend': 'Recommend',
    
    // Location section
    'location.title': 'Ölüdeniz Location',
    'location.subtitle': 'and Meeting Points',
    'location.description': 'Experience an unforgettable adventure by taking off from Babadağ in Fethiye Ölüdeniz over the Blue Lagoon',
    'location.info': 'Location Information',
    'location.address': 'Address',
    'location.contact': 'Contact',
    'location.hours': 'Working Hours',
    'location.how.to.reach': 'How to Reach?',
    
    // Footer section
    'footer.description': 'Experience the excitement of paragliding over Turkey\'s most beautiful coastline. Professional tandem flights with certified instructors since 2008.',
    'footer.quick.links': 'Quick Links',
    'footer.contact': 'Contact',
    'footer.copyright': '2024 Ölüdeniz Paragliding. All rights reserved. | Licensed and Insured Operator'
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
    
    // Services section
    'services.title': '我们的滑翔伞套餐',
    'services.subtitle': '- 选择您的冒险',
    'services.description': '在世界著名的厄吕代尼兹蓝色泻湖上空的专业双人滑翔伞体验',
    'services.standard.title': '标准飞行',
    'services.sunset.title': '日落飞行',
    'services.popular': '最受欢迎',
    'services.reserve': '预订',
    'services.features.instructor': '专业认证教练',
    'services.features.equipment': '包含所有安全设备',
    'services.features.insurance': '保险覆盖',
    'services.features.photos': '基础照片套餐',
    'services.features.transfer': '从厄吕代尼兹接送',
    'services.features.golden.hour': '黄金时段体验',
    'services.features.extended': '延长飞行时间',
    'services.features.pro.media': '专业照片和视频',
    'services.features.champagne': '香槟庆祝',
    'services.features.premium.insurance': '高级保险',
    'services.features.hotel.pickup': '包含酒店接送',
    'services.info.tandem': '双人飞行',
    'services.info.tandem.desc': '无需经验',
    'services.info.pilots': '认证飞行员',
    'services.info.pilots.desc': '至少20年经验',
    'services.info.photos': '照片套餐',
    'services.info.photos.desc': '包含专业拍摄',
    'services.info.daily': '每日飞行',
    'services.info.daily.desc': '天气允许的情况下',
    
    // Testimonials section
    'testimonials.title': '客户评价',
    'testimonials.subtitle': '- 客人们的评价',
    'testimonials.description': '不要只听我们的话 - 听听从空中体验厄吕代尼兹魅力的快乐客户的评价',
    'testimonials.stats.customers': '满意客户',
    'testimonials.stats.rating': '平均评分',
    'testimonials.stats.recommend': '推荐',
    
    // Location section
    'location.title': '厄吕代尼兹位置',
    'location.subtitle': '和集合点',
    'location.description': '在费特希耶厄吕代尼兹的巴巴山起飞，在蓝色泻湖上空体验难忘的冒险',
    'location.info': '位置信息',
    'location.address': '地址',
    'location.contact': '联系方式',
    'location.hours': '工作时间',
    'location.how.to.reach': '如何到达？',
    
    // Footer section
    'footer.description': '在土耳其最美丽的海岸线上体验滑翔伞的刺激。自2008年以来与认证教练进行专业双人飞行。',
    'footer.quick.links': '快速链接',
    'footer.contact': '联系方式',
    'footer.copyright': '2024年厄吕代尼兹滑翔伞。保留所有权利。| 持证和投保运营商'
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