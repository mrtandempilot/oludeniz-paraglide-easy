import { Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Ölüdeniz Yamaç Paraşütü</h3>
            <p className="text-primary-foreground/80 mb-4 max-w-md">
              Türkiye'nin en güzel kıyı şeridi üzerinde yamaç paraşütü heyecanını yaşayın. 
              2008'den beri sertifikalı eğitmenlerle profesyonel tandem uçuşlar.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Hızlı Linkler</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#" className="hover:text-white transition-colors">Ana Sayfa</a></li>
              <li><a href="#booking" className="hover:text-white transition-colors">Rezervasyon</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Hakkımızda</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Güvenlik</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Galeri</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">İletişim</h4>
            <ul className="space-y-3 text-primary-foreground/80">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+90 252 617 0511</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>info@oludenizparagliding.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1" />
                <span>Ölüdeniz Plajı, Fethiye<br />Muğla, Türkiye</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-primary-foreground/60">
          <p>&copy; 2024 Ölüdeniz Yamaç Paraşütü. Tüm hakları saklıdır. | Lisanslı ve Sigortalı Operatör</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;