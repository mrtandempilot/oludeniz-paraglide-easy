import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'tr' | 'en' | 'zh';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  tr: {
    // Hero
    'hero.title': 'Ölüdeniz',
    'hero.subtitle': 'Yamaç Paraşütü',
    'hero.description': 'Dünyanın en iyi pilotlarıyla Fethiye semalarında özgürlüğü keşfet. 3500 TL fırsatını kaçırma!',
    'hero.special.offer': '🎯 ÖZEL KAMPANYA: 3500 TL',
    'hero.whatsapp': '📱 WhatsApp Ara',
    'hero.height': 'Uçuş Yüksekliği',
    'hero.duration': 'Ortalama Uçuş Süresi',
    'hero.safety': 'Güvenlik Kaydı',
    // Services
    'services.title': 'Yamaç Paraşütü Paketlerimiz',
    'services.subtitle': '- Maceranızı Seçin',
    'services.description': 'Dünyaca ünlü Ölüdeniz Mavi Lagün üzerinde profesyonel tandem yamaç paraşütü deneyimleri',
    'services.popular': 'En Popüler',
    'services.reserve': 'Rezerve Et',
    // Tour titles
    'services.standard.title': 'Standart Uçuş',
    'services.sunset.title': 'Gün Batımı Uçuşu',
    'services.earlybird.title': 'Sabah Erken Uçuş',
    'services.photovideo.title': 'Fotoğraf & Video Paketi',
    'services.vip.title': 'VIP Özel Uçuş',
    'services.group.title': 'Grup Uçuşu',
    // Badges
    'services.badge.earlybird': '🌅 Erken Rezervasyon',
    'services.badge.vip': '👑 VIP',
    'services.badge.group': '👥 Grup İndirimi',
    // Features
    'services.features.instructor': 'Profesyonel sertifikalı eğitmen',
    'services.features.equipment': 'Tüm güvenlik ekipmanları dahil',
    'services.features.insurance': 'Sigorta kapsamı',
    'services.features.photos': 'Temel fotoğraf paketi',
    'services.features.transfer': 'Ölüdeniz\'den transfer',
    'services.features.golden.hour': 'Altın saat deneyimi',
    'services.features.extended': 'Uzatılmış uçuş süresi',
    'services.features.pro.media': 'Profesyonel fotoğraf ve video',
    'services.features.champagne': 'Şampanya tostu',
    'services.features.premium.insurance': 'Premium sigorta',
    'services.features.hotel.pickup': 'Otel alımı dahil',
    'services.features.earlybird.time': 'Sabah 08:00 kalkış saati',
    'services.features.gopro': 'GoPro kamera kaydı',
    'services.features.drone': 'Drone çekimi dahil',
    'services.features.private.pilot': 'Özel deneyimli pilot',
    'services.features.group.min': 'Min. 4 kişi ile geçerli',
    'services.features.group.discount': 'Kişi başı %12 indirim',
    // Info stats
    'services.info.tandem': 'Tandem Uçuşlar',
    'services.info.tandem.desc': 'Deneyim gerekmiyor',
    'services.info.pilots': 'Sertifikalı Pilotlar',
    'services.info.pilots.desc': 'En az 20 yıl deneyim',
    'services.info.photos': 'Fotoğraf Paketi',
    'services.info.photos.desc': 'Profesyonel çekimler dahil',
    'services.info.daily': 'Günlük Uçuşlar',
    'services.info.daily.desc': 'Hava durumu uygunsa',
    // Testimonials
    'testimonials.title': 'Müşteri Yorumları',
    'testimonials.subtitle': '- Misafirlerimiz Ne Diyor',
    'testimonials.description': 'Sadece bizim sözümüze güvenmeyin - Ölüdeniz\'in büyüsünü yukarıdan deneyimlemiş mutlu müşterilerimizden dinleyin',
    'testimonials.stats.customers': 'Mutlu Müşteri',
    'testimonials.stats.rating': 'Ortalama Puan',
    'testimonials.stats.recommend': 'Tavsiye Eder',
    'testimonials.sarah.text': 'Kesinlikle inanılmaz bir deneyim! Ölüdeniz üzerindeki manzara nefes kesiciydi ve eğitmenimiz kendimizi tamamen güvende hissettirdi. Çektikleri fotoğraflar profesyonel kalitedeydi. Kesinlikle tavsiye ederim!',
    'testimonials.michael.text': 'Türkiye\'de yaptığımız en iyi aktivite! Gün batımı uçuşu büyülü - güneş batarken Mavi Lagün üzerinde süzülmek unutulmazdı. Profesyonel ekip ve paranın karşılığını fazlasıyla veriyor.',
    'testimonials.emma.text': 'İlk başta gerginken ama eğitmenler o kadar deneyimli ve güven vericiydi ki. Uçuş çok pürüzsüzdü ve manzaralar bu dünyadan değildi. Gelecek yıl tekrar gelmeyi planlıyoruz!',
    'testimonials.marco.text': 'Baştan sona mükemmel organizasyon. Alım zamanında geldi, ekipmanlar en üst kalitedeydi ve 25 dakikalık uçuş sonsuza kadar sürebilirdi. Bu harika deneyim için teşekkürler!',
    'testimonials.date.2weeks': '2 hafta önce',
    'testimonials.date.1month': '1 ay önce',
    'testimonials.date.3weeks': '3 hafta önce',
    'testimonials.date.1week': '1 hafta önce',
    // Location
    'location.title': 'Ölüdeniz Lokasyonu',
    'location.subtitle': 've Buluşma Noktaları',
    'location.description': 'Fethiye Ölüdeniz\'de Babadağ\'dan kalkış yaparak Mavi Lagün üzerinde unutulmaz bir deneyim yaşayın',
    'location.info': 'Konum Bilgileri',
    'location.address': 'Adres',
    'location.contact': 'İletişim',
    'location.hours': 'Çalışma Saatleri',
    'location.how.to.reach': 'Nasıl Ulaşırım?',
    'location.agency': 'Yamaç paraşütü rezervasyon merkezi',
    'location.blue.lagoon': 'İniş noktası - Dünyanın en güzel kıyı şeridi',
    'location.babadag.title': 'Babadağ Kalkış Noktası',
    'location.babadag': 'Yamaç paraşütü kalkış',
    'location.address.text': 'Ölüdeniz Mahallesi\nBabadağ Yolu\n48300 Fethiye/Muğla',
    'location.phone': 'Telefon:',
    'location.email': 'E-posta:',
    'location.hours.text': 'Pazartesi - Pazar: 09:00 - 18:00',
    'location.hours.note': '* Hava koşullarına bağlı olarak değişebilir',
    'location.transport.airport': '• Dalaman Havalimanı\'ndan 45 dakika',
    'location.transport.center': '• Fethiye merkez\'den 15 dakika',
    'location.transport.hotel': '• Ücretsiz otel transferi mevcut',
    'location.transport.minibus': '• Kalkış noktasına minibüs servisi',
    // Footer
    'footer.description': 'Türkiye\'nin en güzel kıyı şeridi üzerinde yamaç paraşütü heyecanını yaşayın. 2008\'den beri sertifikalı eğitmenlerle profesyonel tandem uçuşlar.',
    'footer.quick.links': 'Hızlı Linkler',
    'footer.contact': 'İletişim',
    'footer.copyright': '2024 Ölüdeniz Yamaç Paraşütü. Tüm hakları saklıdır. | Lisanslı ve Sigortalı Operatör',
    'footer.home': 'Ana Sayfa - Ölüdeniz Yamaç Paraşütü',
    'footer.packages': 'Yamaç Paraşütü Paketleri',
    'footer.reviews': 'Müşteri Yorumları',
    'footer.location': 'Lokasyon & İletişim',
    'footer.whatsapp': 'WhatsApp Rezervasyon'
  },
  en: {
    // Hero
    'hero.title': 'Ölüdeniz',
    'hero.subtitle': 'Paragliding',
    'hero.description': 'Discover freedom in Fethiye skies with the world\'s best pilots. Don\'t miss the 3500 TL opportunity!',
    'hero.special.offer': '🎯 SPECIAL CAMPAIGN: 3500 TL',
    'hero.whatsapp': '📱 WhatsApp Call',
    'hero.height': 'Flight Altitude',
    'hero.duration': 'Average Flight Time',
    'hero.safety': 'Safety Record',
    // Services
    'services.title': 'Our Paragliding Packages',
    'services.subtitle': '- Choose Your Adventure',
    'services.description': 'Professional tandem paragliding experiences over the world-famous Ölüdeniz Blue Lagoon',
    'services.popular': 'Most Popular',
    'services.reserve': 'Reserve',
    // Tour titles
    'services.standard.title': 'Standard Flight',
    'services.sunset.title': 'Sunset Flight',
    'services.earlybird.title': 'Early Morning Flight',
    'services.photovideo.title': 'Photo & Video Package',
    'services.vip.title': 'VIP Private Flight',
    'services.group.title': 'Group Flight',
    // Badges
    'services.badge.earlybird': '🌅 Early Bird',
    'services.badge.vip': '👑 VIP',
    'services.badge.group': '👥 Group Discount',
    // Features
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
    'services.features.earlybird.time': 'Morning 08:00 takeoff',
    'services.features.gopro': 'GoPro camera recording',
    'services.features.drone': 'Drone footage included',
    'services.features.private.pilot': 'Private experienced pilot',
    'services.features.group.min': 'Valid for min. 4 people',
    'services.features.group.discount': '12% discount per person',
    // Info stats
    'services.info.tandem': 'Tandem Flights',
    'services.info.tandem.desc': 'No experience required',
    'services.info.pilots': 'Certified Pilots',
    'services.info.pilots.desc': 'At least 20 years experience',
    'services.info.photos': 'Photo Package',
    'services.info.photos.desc': 'Professional shots included',
    'services.info.daily': 'Daily Flights',
    'services.info.daily.desc': 'Weather permitting',
    // Testimonials
    'testimonials.title': 'Customer Reviews',
    'testimonials.subtitle': '- What Our Guests Say',
    'testimonials.description': 'Don\'t just take our word for it - hear from our happy customers who experienced the magic of Ölüdeniz from above',
    'testimonials.stats.customers': 'Happy Customers',
    'testimonials.stats.rating': 'Average Rating',
    'testimonials.stats.recommend': 'Recommend',
    'testimonials.sarah.text': 'Absolutely incredible experience! The view over Ölüdeniz was breathtaking and our instructor made us feel completely safe. The photos they took were professional quality. Definitely recommend!',
    'testimonials.michael.text': 'Best activity we did in Turkey! The sunset flight was magical - gliding over the Blue Lagoon as the sun set was unforgettable. Professional team and more than worth the money.',
    'testimonials.emma.text': 'We were nervous at first but the instructors were so experienced and reassuring. The flight was so smooth and the views were out of this world. Planning to come back next year!',
    'testimonials.marco.text': 'Perfect organization from start to finish. Pickup was on time, equipment was top quality and the 25-minute flight could have lasted forever. Thank you for this amazing experience!',
    'testimonials.date.2weeks': '2 weeks ago',
    'testimonials.date.1month': '1 month ago',
    'testimonials.date.3weeks': '3 weeks ago',
    'testimonials.date.1week': '1 week ago',
    // Location
    'location.title': 'Ölüdeniz Location',
    'location.subtitle': 'and Meeting Points',
    'location.description': 'Experience an unforgettable adventure by taking off from Babadağ in Fethiye Ölüdeniz over the Blue Lagoon',
    'location.info': 'Location Information',
    'location.address': 'Address',
    'location.contact': 'Contact',
    'location.hours': 'Working Hours',
    'location.how.to.reach': 'How to Reach?',
    'location.agency': 'Paragliding reservation center',
    'location.blue.lagoon': 'Landing point - World\'s most beautiful coastline',
    'location.babadag.title': 'Babadağ Launch Point',
    'location.babadag': 'Paragliding takeoff',
    'location.address.text': 'Ölüdeniz Mahallesi\nBabadağ Yolu\n48300 Fethiye/Muğla',
    'location.phone': 'Phone:',
    'location.email': 'Email:',
    'location.hours.text': 'Monday - Sunday: 09:00 - 18:00',
    'location.hours.note': '* Subject to weather conditions',
    'location.transport.airport': '• 45 minutes from Dalaman Airport',
    'location.transport.center': '• 15 minutes from Fethiye center',
    'location.transport.hotel': '• Free hotel transfer available',
    'location.transport.minibus': '• Minibus service to takeoff point',
    // Footer
    'footer.description': 'Experience the excitement of paragliding over Turkey\'s most beautiful coastline. Professional tandem flights with certified instructors since 2008.',
    'footer.quick.links': 'Quick Links',
    'footer.contact': 'Contact',
    'footer.copyright': '2024 Ölüdeniz Paragliding. All rights reserved. | Licensed and Insured Operator',
    'footer.home': 'Home - Ölüdeniz Paragliding',
    'footer.packages': 'Paragliding Packages',
    'footer.reviews': 'Customer Reviews',
    'footer.location': 'Location & Contact',
    'footer.whatsapp': 'WhatsApp Reservation'
  },
  zh: {
    // Hero
    'hero.title': '厄吕代尼兹',
    'hero.subtitle': '滑翔伞',
    'hero.description': '与世界顶级飞行员一起在费特希耶天空中发现自由。不要错过3500里拉的机会！',
    'hero.special.offer': '🎯 特别活动：3500里拉',
    'hero.whatsapp': '📱 WhatsApp电话',
    'hero.height': '飞行高度',
    'hero.duration': '平均飞行时间',
    'hero.safety': '安全记录',
    // Services
    'services.title': '我们的滑翔伞套餐',
    'services.subtitle': '- 选择您的冒险',
    'services.description': '在世界著名的厄吕代尼兹蓝色泻湖上空的专业双人滑翔伞体验',
    'services.popular': '最受欢迎',
    'services.reserve': '预订',
    // Tour titles
    'services.standard.title': '标准飞行',
    'services.sunset.title': '日落飞行',
    'services.earlybird.title': '清晨早鸟飞行',
    'services.photovideo.title': '照片与视频套餐',
    'services.vip.title': 'VIP 专属飞行',
    'services.group.title': '团体飞行',
    // Badges
    'services.badge.earlybird': '🌅 早鸟优惠',
    'services.badge.vip': '👑 VIP',
    'services.badge.group': '👥 团体折扣',
    // Features
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
    'services.features.earlybird.time': '早上08:00起飞',
    'services.features.gopro': 'GoPro相机录制',
    'services.features.drone': '包含无人机拍摄',
    'services.features.private.pilot': '专属经验丰富飞行员',
    'services.features.group.min': '最少4人有效',
    'services.features.group.discount': '每人享12%折扣',
    // Info stats
    'services.info.tandem': '双人飞行',
    'services.info.tandem.desc': '无需经验',
    'services.info.pilots': '认证飞行员',
    'services.info.pilots.desc': '至少20年经验',
    'services.info.photos': '照片套餐',
    'services.info.photos.desc': '包含专业拍摄',
    'services.info.daily': '每日飞行',
    'services.info.daily.desc': '天气允许的情况下',
    // Testimonials
    'testimonials.title': '客户评价',
    'testimonials.subtitle': '- 客人们的评价',
    'testimonials.description': '不要只听我们的话 - 听听从空中体验厄吕代尼兹魅力的快乐客户的评价',
    'testimonials.stats.customers': '满意客户',
    'testimonials.stats.rating': '平均评分',
    'testimonials.stats.recommend': '推荐',
    'testimonials.sarah.text': '绝对令人难以置信的体验！厄吕代尼兹的景色令人叹为观止，我们的教练让我们感到完全安全。他们拍摄的照片质量很专业。绝对推荐！',
    'testimonials.michael.text': '我们在土耳其做的最好的活动！日落飞行很神奇——夕阳西下时在蓝色泻湖上滑翔令人难忘。专业团队，物超所值。',
    'testimonials.emma.text': '起初我们很紧张，但教练们经验丰富，令人安心。飞行非常平稳，景色美得不像话。计划明年再来！',
    'testimonials.marco.text': '从头到尾的完美组织。接送准时，设备一流，25分钟的飞行可以永远持续下去。感谢这次美妙的体验！',
    'testimonials.date.2weeks': '2周前',
    'testimonials.date.1month': '1个月前',
    'testimonials.date.3weeks': '3周前',
    'testimonials.date.1week': '1周前',
    // Location
    'location.title': '厄吕代尼兹位置',
    'location.subtitle': '和集合点',
    'location.description': '在费特希耶厄吕代尼兹的巴巴山起飞，在蓝色泻湖上空体验难忘的冒险',
    'location.info': '位置信息',
    'location.address': '地址',
    'location.contact': '联系方式',
    'location.hours': '工作时间',
    'location.how.to.reach': '如何到达？',
    'location.agency': '滑翔伞预订中心',
    'location.blue.lagoon': '着陆点 - 世界最美海岸线',
    'location.babadag.title': '巴巴山起飞点',
    'location.babadag': '滑翔伞起飞点',
    'location.address.text': 'Ölüdeniz Mahallesi\nBabadağ Yolu\n48300 Fethiye/Muğla',
    'location.phone': '电话：',
    'location.email': '邮箱：',
    'location.hours.text': '周一 - 周日：09:00 - 18:00',
    'location.hours.note': '* 根据天气条件可能变化',
    'location.transport.airport': '• 距离达拉曼机场45分钟',
    'location.transport.center': '• 距离费特希耶中心15分钟',
    'location.transport.hotel': '• 提供免费酒店接送',
    'location.transport.minibus': '• 到起飞点的小巴服务',
    // Footer
    'footer.description': '在土耳其最美丽的海岸线上体验滑翔伞的刺激。自2008年以来与认证教练进行专业双人飞行。',
    'footer.quick.links': '快速链接',
    'footer.contact': '联系方式',
    'footer.copyright': '2024年厄吕代尼兹滑翔伞。保留所有权利。| 持证和投保运营商',
    'footer.home': '首页 - 厄吕代尼兹滑翔伞',
    'footer.packages': '滑翔伞套餐',
    'footer.reviews': '客户评价',
    'footer.location': '位置和联系方式',
    'footer.whatsapp': 'WhatsApp预订'
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
