import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock } from "lucide-react";

const LocationMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState('');
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  const initializeMap = (token: string) => {
    if (!mapContainer.current || !token) return;

    mapboxgl.accessToken = token;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/satellite-streets-v12',
      zoom: 12,
      center: [29.1167, 36.5500], // Ölüdeniz coordinates
      pitch: 45,
    });

    // Add marker for Ölüdeniz
    new mapboxgl.Marker({ color: '#ff6b35' })
      .setLngLat([29.1167, 36.5500])
      .setPopup(new mapboxgl.Popup().setHTML('<h3>Ölüdeniz Yamaç Paraşütü</h3><p>Mavi Lagün üzerinde uçuş noktası</p>'))
      .addTo(map.current);

    // Add marker for Babadağ (takeoff point)
    new mapboxgl.Marker({ color: '#22c55e' })
      .setLngLat([29.1089, 36.5789])
      .setPopup(new mapboxgl.Popup().setHTML('<h3>Babadağ Kalkış Noktası</h3><p>1969m yükseklik</p>'))
      .addTo(map.current);

    // Add navigation controls
    map.current.addControl(
      new mapboxgl.NavigationControl({
        visualizePitch: true,
      }),
      'top-right'
    );

    setIsMapLoaded(true);
  };

  const handleTokenSubmit = () => {
    if (mapboxToken.trim()) {
      initializeMap(mapboxToken.trim());
    }
  };

  useEffect(() => {
    return () => {
      map.current?.remove();
    };
  }, []);

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
                Harita
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              {!isMapLoaded && (
                <div className="p-6 space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Haritayı görüntülemek için Mapbox token'ınızı girin. 
                    <a href="https://mapbox.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline ml-1">
                      Mapbox.com
                    </a> adresinden ücretsiz token alabilirsiniz.
                  </p>
                  <div className="flex gap-2">
                    <Input
                      placeholder="Mapbox Public Token"
                      value={mapboxToken}
                      onChange={(e) => setMapboxToken(e.target.value)}
                      type="password"
                    />
                    <Button onClick={handleTokenSubmit}>Yükle</Button>
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