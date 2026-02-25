import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { MapPin, Phone, Clock, Navigation } from "lucide-react";

const LocationMap = () => {
  const { t } = useLanguage();

  return (
    <section id="location" className="py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t('location.title')}
            <span className="text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text"> {t('location.subtitle')}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('location.description')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <Card className="overflow-hidden">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Navigation className="w-5 h-5 text-primary" />
                {t('location.info')}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 bg-primary/5 rounded-lg border border-primary/10">
                  <div className="w-3 h-3 rounded-full bg-blue-500 mt-1.5"></div>
                  <div>
                    <h4 className="font-semibold text-primary">Eftelya Paragliding Agency</h4>
                    <p className="text-sm text-muted-foreground">{t('location.agency')}</p>
                    <p className="text-xs text-muted-foreground mt-1">3.8⭐ (74 değerlendirme)</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-4 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200 dark:border-red-800/30">
                  <div className="w-3 h-3 rounded-full bg-red-500 mt-1.5"></div>
                  <div>
                    <h4 className="font-semibold text-red-700 dark:text-red-400">Ölüdeniz Mavi Lagün</h4>
                    <p className="text-sm text-muted-foreground">{t('location.blue.lagoon')}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800/30">
                  <div className="w-3 h-3 rounded-full bg-green-500 mt-1.5"></div>
                  <div>
                    <h4 className="font-semibold text-green-700 dark:text-green-400">{t('location.babadag.title')}</h4>
                    <p className="text-sm text-muted-foreground">1969m yükseklik - {t('location.babadag')}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  {t('location.address')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {t('location.address.text').split('\n').map((line, i) => (
                    <span key={i}>{line}<br /></span>
                  ))}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-primary" />
                  {t('location.contact')}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="font-medium">{t('location.phone')}</span>
                  <a href="tel:+905321234567" className="text-primary hover:underline">
                    +90 532 123 45 67
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-medium">WhatsApp:</span>
                  <a 
                    href="https://wa.me/905321234567" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-green-600 hover:underline"
                  >
                    +90 532 123 45 67
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-medium">{t('location.email')}</span>
                  <a href="mailto:info@oludenizparagliding.com" className="text-primary hover:underline">
                    info@oludenizparagliding.com
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  {t('location.hours')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-muted-foreground">
                  <div className="flex justify-between">
                    <span>{t('location.hours.text')}</span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {t('location.hours.note')}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2">{t('location.how.to.reach')}</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>{t('location.transport.airport')}</li>
                  <li>{t('location.transport.center')}</li>
                  <li>{t('location.transport.hotel')}</li>
                  <li>{t('location.transport.minibus')}</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;