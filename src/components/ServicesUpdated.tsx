// src/components/ServicesUpdated.tsx
// Replace your current Services.tsx with this file
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { Clock, Users, Camera, Award, MapPin, Loader2 } from "lucide-react";
import { useTours } from "@/hooks/useTours";
import { useState } from "react";

// Placeholder images - you can replace with your actual images
import tandemImage from "@/assets/tandem-flight.jpg";
import sunsetImage from "@/assets/sunset-flight.jpg";

export default function ServicesUpdated() {
  const { t, language } = useLanguage();
  const { data: tours, isLoading, error } = useTours();
  const [selectedTour, setSelectedTour] = useState<string | null>(null);

  const handleBookClick = (tourName: string) => {
    // This will open the chat widget with pre-filled message
    setSelectedTour(tourName);
    // Trigger chat widget to open (we'll add this functionality)
    window.dispatchEvent(new CustomEvent('openChat', { 
      detail: { 
        message: language === 'tr' 
          ? `${tourName} turunu rezerve etmek istiyorum`
          : `I want to book ${tourName}` 
      } 
    }));
  };

  if (isLoading) {
    return (
      <section id="services" className="py-20 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-6">
          <div className="flex justify-center items-center min-h-[400px]">
            <Loader2 className="h-12 w-12 animate-spin text-primary" />
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="services" className="py-20 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <p className="text-red-500">Failed to load tours. Please refresh the page.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {language === 'tr' ? 'Turlarımız' : 'Our Tours'}
            <span className="text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text">
              {' '}{language === 'tr' ? '& Paketler' : '& Packages'}
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {language === 'tr' 
              ? 'Fethiye\'de unutulmaz deneyimler için profesyonel turlarımızı keşfedin'
              : 'Discover our professional tours for unforgettable experiences in Fethiye'}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {tours && tours.map((tour, index) => (
            <Card key={tour.id} className="relative overflow-hidden transition-all duration-300 hover:shadow-adventure">
              {tour.category === 'adventure' && (
                <div className="absolute top-4 right-4 bg-gradient-to-r from-primary to-secondary text-white px-3 py-1 rounded-full text-sm font-semibold z-10">
                  {language === 'tr' ? 'Popüler' : 'Popular'}
                </div>
              )}
              
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={tour.image_url || (index % 2 === 0 ? tandemImage : sunsetImage)}
                  alt={language === 'tr' ? tour.name_tr || tour.name : tour.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                
                {/* Category badge */}
                <div className="absolute bottom-2 left-2 bg-black/70 text-white px-3 py-1 rounded-full text-xs">
                  {tour.category}
                </div>
              </div>

              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-2xl">
                    {language === 'tr' ? tour.name_tr || tour.name : tour.name}
                  </CardTitle>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-primary">
                      {tour.currency === 'EUR' ? '€' : '₺'}{tour.price_adult}
                    </div>
                    <div className="text-sm text-muted-foreground flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {tour.duration}
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <p className="text-sm text-muted-foreground">
                  {language === 'tr' ? tour.description_tr || tour.short_description : tour.short_description}
                </p>

                {/* Features */}
                {tour.included && tour.included.length > 0 && (
                  <ul className="space-y-2">
                    {tour.included.slice(0, 4).map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Additional info */}
                <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground">
                  {tour.age_limit && (
                    <div className="flex items-center gap-1">
                      <Users className="w-3 h-3" />
                      {tour.age_limit}
                    </div>
                  )}
                  {tour.pickup_available && (
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {language === 'tr' ? 'Otel alımı' : 'Hotel pickup'}
                    </div>
                  )}
                </div>

                {/* Child price if different */}
                {tour.price_child && tour.price_child !== tour.price_adult && (
                  <div className="text-sm text-muted-foreground">
                    {language === 'tr' ? 'Çocuk' : 'Child'}: {tour.currency === 'EUR' ? '€' : '₺'}{tour.price_child}
                  </div>
                )}

                <Button 
                  variant={tour.category === 'adventure' ? "hero" : "default"} 
                  className="w-full"
                  size="lg"
                  onClick={() => handleBookClick(tour.name)}
                >
                  {language === 'tr' ? 'Rezervasyon Yap' : 'Book Now'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Info Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <Users className="w-8 h-8 text-primary mx-auto" />
            <div className="font-semibold">
              {language === 'tr' ? 'Tandem Uçuş' : 'Tandem Flight'}
            </div>
            <div className="text-sm text-muted-foreground">
              {language === 'tr' ? 'Deneyim gerekmez' : 'No experience needed'}
            </div>
          </div>
          <div className="space-y-2">
            <Award className="w-8 h-8 text-primary mx-auto" />
            <div className="font-semibold">
              {language === 'tr' ? 'Uzman Pilotlar' : 'Expert Pilots'}
            </div>
            <div className="text-sm text-muted-foreground">
              {language === 'tr' ? 'Lisanslı ve tecrübeli' : 'Licensed & experienced'}
            </div>
          </div>
          <div className="space-y-2">
            <Camera className="w-8 h-8 text-primary mx-auto" />
            <div className="font-semibold">
              {language === 'tr' ? 'Fotoğraf & Video' : 'Photos & Videos'}
            </div>
            <div className="text-sm text-muted-foreground">
              {language === 'tr' ? 'Profesyonel çekim' : 'Professional shooting'}
            </div>
          </div>
          <div className="space-y-2">
            <Clock className="w-8 h-8 text-primary mx-auto" />
            <div className="font-semibold">
              {language === 'tr' ? 'Her Gün' : 'Daily Flights'}
            </div>
            <div className="text-sm text-muted-foreground">
              {language === 'tr' ? 'Hava durumuna göre' : 'Weather permitting'}
            </div>
          </div>
        </div>

        {/* WhatsApp CTA */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            {language === 'tr' 
              ? 'Sorularınız mı var? Hemen bizimle iletişime geçin!'
              : 'Have questions? Contact us now!'}
          </p>
          <Button 
            size="lg"
            variant="outline"
            onClick={() => window.open('https://wa.me/905321234567', '_blank')}
            className="bg-green-600/10 border-green-500 text-green-700 hover:bg-green-600/20"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
}
