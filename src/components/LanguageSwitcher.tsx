import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="fixed top-16 right-6 z-50 flex gap-2">
      <Button
        variant={language === 'tr' ? 'default' : 'outline'}
        size="sm"
        onClick={() => setLanguage('tr')}
        className="w-12 h-8 p-0 text-xs font-semibold bg-background/80 backdrop-blur-sm border-white/20 hover:bg-background/90"
      >
        🇹🇷
      </Button>
      <Button
        variant={language === 'en' ? 'default' : 'outline'}
        size="sm"
        onClick={() => setLanguage('en')}
        className="w-12 h-8 p-0 text-xs font-semibold bg-background/80 backdrop-blur-sm border-white/20 hover:bg-background/90"
      >
        🇬🇧
      </Button>
    </div>
  );
};

export default LanguageSwitcher;