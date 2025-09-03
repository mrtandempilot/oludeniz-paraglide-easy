import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import tandemImage from "@/assets/tandem-flight.jpg";
import sunsetImage from "@/assets/sunset-flight.jpg";
import { Clock, Users, Camera, Award } from "lucide-react";

const Services = () => {
  const packages = [
    {
      title: "Standart Uçuş",
      price: "€80",
      duration: "20-25 dk",
      image: tandemImage,
      features: [
        "Profesyonel sertifikalı eğitmen",
        "Tüm güvenlik ekipmanları dahil",
        "Sigorta kapsamı",
        "Temel fotoğraf paketi",
        "Ölüdeniz'den transfer"
      ],
      popular: false
    },
    {
      title: "Gün Batımı Uçuşu",
      price: "€120",
      duration: "25-30 dk", 
      image: sunsetImage,
      features: [
        "Altın saat deneyimi",
        "Uzatılmış uçuş süresi",
        "Profesyonel fotoğraf ve video",
        "Şampanya tostı",
        "Premium sigorta",
        "Otel alımı dahil"
      ],
      popular: true
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Maceranızı
            <span className="text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text"> Seçin</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Dünyaca ünlü Ölüdeniz Mavi Lagün üzerinde profesyonel tandem yamaç paraşütü deneyimleri
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {packages.map((pkg, index) => (
            <Card key={index} className={`relative overflow-hidden transition-all duration-300 hover:shadow-adventure ${pkg.popular ? 'ring-2 ring-primary scale-105' : ''}`}>
              {pkg.popular && (
                <div className="absolute top-4 right-4 bg-gradient-to-r from-primary to-secondary text-white px-3 py-1 rounded-full text-sm font-semibold z-10">
                  En Popüler
                </div>
              )}
              
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={pkg.image} 
                  alt={pkg.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>

              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-2xl">{pkg.title}</CardTitle>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-primary">{pkg.price}</div>
                    <div className="text-sm text-muted-foreground flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {pkg.duration}
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  variant={pkg.popular ? "hero" : "default"} 
                  className="w-full"
                  size="lg"
                >
                  {pkg.title} Rezerve Et
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <Users className="w-8 h-8 text-primary mx-auto" />
            <div className="font-semibold">Tandem Uçuşlar</div>
            <div className="text-sm text-muted-foreground">Deneyim gerekmiyor</div>
          </div>
          <div className="space-y-2">
            <Award className="w-8 h-8 text-primary mx-auto" />
            <div className="font-semibold">Sertifikalı Pilotlar</div>
            <div className="text-sm text-muted-foreground">15+ yıl deneyim</div>
          </div>
          <div className="space-y-2">
            <Camera className="w-8 h-8 text-primary mx-auto" />
            <div className="font-semibold">Fotoğraf Paketi</div>
            <div className="text-sm text-muted-foreground">Profesyonel çekimler dahil</div>
          </div>
          <div className="space-y-2">
            <Clock className="w-8 h-8 text-primary mx-auto" />
            <div className="font-semibold">Günlük Uçuşlar</div>
            <div className="text-sm text-muted-foreground">Hava durumu uygunsa</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;