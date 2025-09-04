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
        className="w-16 h-10 p-0 text-lg font-semibold bg-background/20 backdrop-blur-sm border-white/20 hover:bg-background/30"
      >
        🇹🇷
      </Button>
      <Button
        variant={language === 'en' ? 'default' : 'outline'}
        size="sm"
        onClick={() => setLanguage('en')}
        className="w-16 h-10 p-0 text-lg font-semibold bg-background/20 backdrop-blur-sm border-white/20 hover:bg-background/30"
      >
        🇬🇧
      </Button>
      <Button
        variant={language === 'zh' ? 'default' : 'outline'}
        size="sm"
        onClick={() => setLanguage('zh')}
        className="w-16 h-10 p-0 text-lg font-semibold bg-background/20 backdrop-blur-sm border-white/20 hover:bg-background/30"
      >
        🇨🇳
      </Button>
    </div>
  );
};

export default LanguageSwitcher;