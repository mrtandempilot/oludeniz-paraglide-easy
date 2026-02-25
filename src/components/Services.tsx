import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { Clock, Users, Camera, Award, Star } from "lucide-react";
import tourStandard from "@/assets/tour-standard.jpg";
import tourSunset from "@/assets/tour-sunset.jpg";
import tourEarlyBird from "@/assets/tour-early-bird.jpg";
import tourPhotoVideo from "@/assets/tour-photo-video.jpg";
import tourVip from "@/assets/tour-vip.jpg";
import tourGroup from "@/assets/tour-group.jpg";

const Services = () => {
  const { t } = useLanguage();

  const packages = [
    {
      key: "standard",
      price: "3.200 TL",
      duration: "20-25 dk",
      image: tourStandard,
      popular: false,
      badge: null,
      features: [
        "services.features.instructor",
        "services.features.equipment",
        "services.features.insurance",
        "services.features.photos",
        "services.features.transfer"
      ]
    },
    {
      key: "sunset",
      price: "3.800 TL",
      duration: "25-30 dk",
      image: tourSunset,
      popular: true,
      badge: "services.popular",
      features: [
        "services.features.golden.hour",
        "services.features.extended",
        "services.features.pro.media",
        "services.features.champagne",
        "services.features.premium.insurance",
        "services.features.hotel.pickup"
      ]
    },
    {
      key: "earlybird",
      price: "2.900 TL",
      duration: "20-25 dk",
      image: tourEarlyBird,
      popular: false,
      badge: "services.badge.earlybird",
      features: [
        "services.features.earlybird.time",
        "services.features.instructor",
        "services.features.equipment",
        "services.features.insurance",
        "services.features.transfer"
      ]
    },
    {
      key: "photovideo",
      price: "4.200 TL",
      duration: "20-25 dk",
      image: tourPhotoVideo,
      popular: false,
      badge: null,
      features: [
        "services.features.gopro",
        "services.features.pro.media",
        "services.features.drone",
        "services.features.instructor",
        "services.features.equipment",
        "services.features.insurance"
      ]
    },
    {
      key: "vip",
      price: "5.500 TL",
      duration: "35-45 dk",
      image: tourVip,
      popular: false,
      badge: "services.badge.vip",
      features: [
        "services.features.extended",
        "services.features.private.pilot",
        "services.features.pro.media",
        "services.features.premium.insurance",
        "services.features.hotel.pickup",
        "services.features.champagne"
      ]
    },
    {
      key: "group",
      price: "2.800 TL",
      duration: "20-25 dk",
      image: tourGroup,
      popular: false,
      badge: "services.badge.group",
      features: [
        "services.features.group.min",
        "services.features.instructor",
        "services.features.equipment",
        "services.features.insurance",
        "services.features.group.discount",
        "services.features.transfer"
      ]
    }
  ];

  const badgeColors: Record<string, string> = {
    "services.popular": "bg-gradient-to-r from-primary to-secondary text-primary-foreground",
    "services.badge.earlybird": "bg-amber-500 text-white",
    "services.badge.vip": "bg-purple-600 text-white",
    "services.badge.group": "bg-green-600 text-white",
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t('services.title')}
            <span className="text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text"> {t('services.subtitle')}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('services.description')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {packages.map((pkg) => (
            <Card key={pkg.key} className={`relative overflow-hidden transition-all duration-300 hover:shadow-adventure hover:-translate-y-1 ${pkg.popular ? 'ring-2 ring-primary' : ''}`}>
              {pkg.badge && (
                <div className={`absolute top-4 right-4 ${badgeColors[pkg.badge] || 'bg-primary text-primary-foreground'} px-3 py-1 rounded-full text-xs font-semibold z-10`}>
                  {t(pkg.badge)}
                </div>
              )}

              <div className="relative h-48 overflow-hidden">
                <img
                  src={pkg.image}
                  alt={`${t(`services.${pkg.key}.title`)} - Ölüdeniz yamaç paraşütü`}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-3 left-3 text-white">
                  <div className="flex items-center gap-1 text-xs">
                    <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                    <span>5.0</span>
                  </div>
                </div>
              </div>

              <CardHeader className="pb-2">
                <div className="flex justify-between items-start gap-2">
                  <CardTitle className="text-lg leading-tight">{t(`services.${pkg.key}.title`)}</CardTitle>
                  <div className="text-right shrink-0">
                    <div className="text-2xl font-bold text-primary">{pkg.price}</div>
                    <div className="text-xs text-muted-foreground flex items-center gap-1 justify-end">
                      <Clock className="w-3 h-3" />
                      {pkg.duration}
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full shrink-0"></div>
                      <span className="text-sm text-muted-foreground">{t(feature)}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={pkg.popular ? "hero" : "default"}
                  className="w-full"
                  size="sm"
                >
                  {t(`services.${pkg.key}.title`)} - {t('services.reserve')}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <Users className="w-8 h-8 text-primary mx-auto" />
            <div className="font-semibold">{t('services.info.tandem')}</div>
            <div className="text-sm text-muted-foreground">{t('services.info.tandem.desc')}</div>
          </div>
          <div className="space-y-2">
            <Award className="w-8 h-8 text-primary mx-auto" />
            <div className="font-semibold">{t('services.info.pilots')}</div>
            <div className="text-sm text-muted-foreground">{t('services.info.pilots.desc')}</div>
          </div>
          <div className="space-y-2">
            <Camera className="w-8 h-8 text-primary mx-auto" />
            <div className="font-semibold">{t('services.info.photos')}</div>
            <div className="text-sm text-muted-foreground">{t('services.info.photos.desc')}</div>
          </div>
          <div className="space-y-2">
            <Clock className="w-8 h-8 text-primary mx-auto" />
            <div className="font-semibold">{t('services.info.daily')}</div>
            <div className="text-sm text-muted-foreground">{t('services.info.daily.desc')}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
