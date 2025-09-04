import { useLanguage } from "@/contexts/LanguageContext";
import { Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Ölüdeniz Yamaç Paraşütü</h3>
            <p className="text-primary-foreground/80 mb-4 max-w-md">
              {t('footer.description')}
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
            <h4 className="text-lg font-semibold mb-4">{t('footer.quick.links')}</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="/" className="hover:text-white transition-colors" rel="canonical">{t('footer.home')}</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">{t('footer.packages')}</a></li>
              <li><a href="#testimonials" className="hover:text-white transition-colors">{t('footer.reviews')}</a></li>
              <li><a href="#location" className="hover:text-white transition-colors">{t('footer.location')}</a></li>
              <li><a href="https://wa.me/905321234567" className="hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">{t('footer.whatsapp')}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.contact')}</h4>
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
          <p>&copy; {t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;