import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock } from "lucide-react";

declare global {
  interface Window {
    google: any;
    initMap: () => void;
  }
}

const LocationMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const [googleApiKey, setGoogleApiKey] = useState('');
  const [isMapLoaded, setIsMapLoaded] = useState(false);
  const [map, setMap] = useState<any>(null);

  const initializeMap = () => {
    if (!mapContainer.current || !window.google) return;

    const oludenizLocation = { lat: 36.5500, lng: 29.1167 };
    const babadagLocation = { lat: 36.5789, lng: 29.1089 };

    const mapInstance = new window.google.maps.Map(mapContainer.current, {
      zoom: 12,
      center: oludenizLocation,
      mapTypeId: 'satellite',
      tilt: 45,
      styles: [
        {
          featureType: 'poi',
          elementType: 'labels',
          stylers: [{ visibility: 'on' }]
        }
      ]
    });

    // Ölüdeniz marker
    new window.google.maps.Marker({
      position: oludenizLocation,
      map: mapInstance,
      title: 'Ölüdeniz - İniş Noktası',
      icon: {
        url: 'https://maps.google.com/mapfiles/ms/icons/red-dot.png'
      }
    });

    // Ölüdeniz info window
    const oludenizInfo = new window.google.maps.InfoWindow({
      content: `
        <div style="padding: 10px;">
          <h3 style="margin: 0 0 5px 0; color: #333;">Ölüdeniz Mavi Lagün</h3>
          <p style="margin: 0; color: #666;">İniş noktası - Dünyanın en güzel kıyı şeridi</p>
        </div>
      `
    });

    // Babadağ marker
    const babadagMarker = new window.google.maps.Marker({
      position: babadagLocation,
      map: mapInstance,
      title: 'Babadağ - Kalkış Noktası',
      icon: {
        url: 'https://maps.google.com/mapfiles/ms/icons/green-dot.png'
      }
    });

    // Babadağ info window
    const babadagInfo = new window.google.maps.InfoWindow({
      content: `
        <div style="padding: 10px;">
          <h3 style="margin: 0 0 5px 0; color: #333;">Babadağ Kalkış Noktası</h3>
          <p style="margin: 0; color: #666;">1969m yükseklik - Yamaç paraşütü kalkış</p>
        </div>
      `
    });

    // Add click listeners for info windows
    new window.google.maps.Marker({
      position: oludenizLocation,
      map: mapInstance,
      title: 'Ölüdeniz - İniş Noktası'
    }).addListener('click', () => {
      oludenizInfo.open(mapInstance, babadagMarker);
    });

    babadagMarker.addListener('click', () => {
      babadagInfo.open(mapInstance, babadagMarker);
    });

    setMap(mapInstance);
    setIsMapLoaded(true);
  };

  const loadGoogleMaps = (apiKey: string) => {
    if (window.google) {
      initializeMap();
      return;
    }

    window.initMap = initializeMap;

    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
  };

  const handleApiKeySubmit = () => {
    if (googleApiKey.trim()) {
      loadGoogleMaps(googleApiKey.trim());
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Konumumuz
            <span className="text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text"> & İletişim</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Fethiye Ölüdeniz'de Babadağ'dan kalkış yaparak Mavi Lagün üzerinde unutulmaz bir deneyim yaşayın
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <Card className="overflow-hidden">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                Google Harita
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              {!isMapLoaded && (
                <div className="p-6 space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Google Haritası'nı görüntülemek için Google Maps API key'inizi girin. 
                    <a href="https://developers.google.com/maps/documentation/javascript/get-api-key" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline ml-1">
                      Google Cloud Console
                    </a> adresinden API key alabilirsiniz.
                  </p>
                  <div className="flex gap-2">
                    <Input
                      placeholder="Google Maps API Key"
                      value={googleApiKey}
                      onChange={(e) => setGoogleApiKey(e.target.value)}
                      type="password"
                    />
                    <Button onClick={handleApiKeySubmit}>Yükle</Button>
                  </div>
                </div>
              )}
              <div 
                ref={mapContainer} 
                className={`w-full transition-all duration-300 ${isMapLoaded ? 'h-96' : 'h-0'}`}
              />
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  Adres
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Ölüdeniz Mahallesi<br />
                  Babadağ Yolu<br />
                  48300 Fethiye/Muğla
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-primary" />
                  İletişim
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="font-medium">Telefon:</span>
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
                  <span className="font-medium">E-posta:</span>
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
                  Çalışma Saatleri
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Pazartesi - Pazar:</span>
                    <span>09:00 - 18:00</span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    * Hava koşullarına bağlı olarak değişebilir
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2">Nasıl Ulaşırım?</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Dalaman Havalimanı'ndan 45 dakika</li>
                  <li>• Fethiye merkez'den 15 dakika</li>
                  <li>• Ücretsiz otel transferi mevcut</li>
                  <li>• Kalkış noktasına minibüs servisi</li>
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