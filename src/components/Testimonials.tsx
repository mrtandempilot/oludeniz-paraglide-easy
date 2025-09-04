import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const { t } = useLanguage();
  const testimonials = [
    {
      name: "Sarah Johnson",
      country: "İngiltere",
      rating: 5,
      text: "Kesinlikle inanılmaz bir deneyim! Ölüdeniz üzerindeki manzara nefes kesiciydi ve eğitmenimiz kendimizi tamamen güvende hissettirdi. Çektikleri fotoğraflar profesyonel kalitedeydi. Kesinlikle tavsiye ederim!",
      date: "2 hafta önce"
    },
    {
      name: "Michael Schmidt",
      country: "Almanya", 
      rating: 5,
      text: "Türkiye'de yaptığımız en iyi aktivite! Gün batımı uçuşu büyülüyü - güneş batarken Mavi Lagün üzerinde süzülmek unutulmazdı. Profesyonel ekip ve paranın karşılığını fazlasıyla veriyor.",
      date: "1 ay önce"
    },
    {
      name: "Emma & James",
      country: "Avustralya",
      rating: 5,
      text: "İlk başta gerginken ama eğitmenler o kadar deneyimli ve güven vericiydi ki. Uçuş çok pürüzsüzdü ve manzaralar bu dünyadan değildi. Gelecek yıl tekrar gelmeyi planlıyoruz!",
      date: "3 hafta önce"
    },
    {
      name: "Marco Rossi",
      country: "İtalya",
      rating: 5,
      text: "Baştan sona mükemmel organizasyon. Alım zamanında geldi, ekipmanlar en üst kalitedeydi ve 25 dakikalık uçuş sonsuza kadar sürebilirdi. Bu harika deneyim için teşekkürler!",
      date: "1 hafta önce"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t('testimonials.title')}
            <span className="text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text"> {t('testimonials.subtitle')}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('testimonials.description')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="transition-all duration-300 hover:shadow-adventure hover:scale-105 relative overflow-hidden">
              <CardContent className="p-8">
                <Quote className="w-8 h-8 text-primary/20 mb-4" />
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>

                <p className="text-muted-foreground mb-6 italic leading-relaxed">
                  "{testimonial.text}"
                </p>

                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.country}</div>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {testimonial.date}
                  </div>
                </div>

                <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full -z-10" />
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-sm text-muted-foreground">{t('testimonials.stats.customers')}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary mb-2">4.9★</div>
              <div className="text-sm text-muted-foreground">{t('testimonials.stats.rating')}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-muted-foreground">{t('testimonials.stats.recommend')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;