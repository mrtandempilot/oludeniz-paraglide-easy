// src/components/ChatWidget.tsx
import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useChat } from '@/hooks/useChat';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const { messages, sendMessage, isLoading } = useChat();
  const { t, language } = useLanguage();
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    await sendMessage(inputValue);
    setInputValue('');
  };

  // Initial greeting based on language
  const getInitialGreeting = () => {
    if (messages.length === 0) {
      return language === 'tr'
        ? '👋 Merhaba! Size nasıl yardımcı olabilirim? Paragliding rezervasyonu yapmak ister misiniz?'
        : '👋 Hi! How can I help you? Would you like to book a paragliding experience?';
    }
    return null;
  };

  const greeting = getInitialGreeting();

  return (
    <>
      {/* Chat Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-xl z-50 transition-all duration-300",
          "bg-gradient-to-r from-primary to-secondary hover:scale-110",
          isOpen && "scale-0"
        )}
        size="icon"
        aria-label="Open chat"
      >
        <MessageCircle className="h-6 w-6 text-white" />
        <span className="absolute top-0 right-0 h-3 w-3 bg-green-500 rounded-full animate-pulse" />
      </Button>

      {/* Chat Window */}
      <div
        className={cn(
          "fixed bottom-6 right-6 w-[380px] h-[600px] bg-background rounded-2xl shadow-2xl z-50 flex flex-col transition-all duration-300 border",
          isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0 pointer-events-none"
        )}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-primary to-secondary p-4 rounded-t-2xl text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center">
                <MessageCircle className="h-5 w-5" />
              </div>
              <span className="absolute bottom-0 right-0 h-3 w-3 bg-green-400 rounded-full border-2 border-white" />
            </div>
            <div>
              <h3 className="font-semibold">
                {language === 'tr' ? 'Ölüdeniz Paragliding' : 'Ölüdeniz Paragliding'}
              </h3>
              <p className="text-xs text-white/80">
                {language === 'tr' ? 'Genellikle hemen yanıt verir' : 'Usually replies instantly'}
              </p>
            </div>
          </div>
          <Button
            onClick={() => setIsOpen(false)}
            variant="ghost"
            size="icon"
            className="text-white hover:bg-white/20"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Messages */}
        <ScrollArea className="flex-1 p-4" ref={scrollRef}>
          <div className="space-y-4">
            {/* Initial greeting */}
            {greeting && (
              <div className="flex gap-2">
                <div className="bg-muted rounded-2xl rounded-tl-sm p-3 max-w-[80%]">
                  <p className="text-sm">{greeting}</p>
                  <span className="text-xs text-muted-foreground">
                    {new Date().toLocaleTimeString(language === 'tr' ? 'tr-TR' : 'en-US', {
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </span>
                </div>
              </div>
            )}

            {/* Chat messages */}
            {messages.map((message) => (
              <div
                key={message.id}
                className={cn(
                  "flex gap-2",
                  message.role === 'user' ? "justify-end" : "justify-start"
                )}
              >
                <div
                  className={cn(
                    "rounded-2xl p-3 max-w-[80%]",
                    message.role === 'user'
                      ? "bg-primary text-primary-foreground rounded-tr-sm"
                      : "bg-muted rounded-tl-sm"
                  )}
                >
                  <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                  <span className={cn(
                    "text-xs",
                    message.role === 'user' ? "text-primary-foreground/70" : "text-muted-foreground"
                  )}>
                    {message.timestamp.toLocaleTimeString(language === 'tr' ? 'tr-TR' : 'en-US', {
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </span>
                </div>
              </div>
            ))}

            {/* Loading indicator */}
            {isLoading && (
              <div className="flex gap-2">
                <div className="bg-muted rounded-2xl rounded-tl-sm p-3">
                  <Loader2 className="h-4 w-4 animate-spin" />
                </div>
              </div>
            )}
          </div>
        </ScrollArea>

        {/* Input */}
        <form onSubmit={handleSubmit} className="p-4 border-t">
          <div className="flex gap-2">
            <Input
              ref={inputRef}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder={language === 'tr' ? 'Mesajınızı yazın...' : 'Type your message...'}
              className="flex-1"
              disabled={isLoading}
            />
            <Button
              type="submit"
              size="icon"
              disabled={!inputValue.trim() || isLoading}
              className="bg-gradient-to-r from-primary to-secondary"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
          <p className="text-xs text-muted-foreground mt-2 text-center">
            {language === 'tr'
              ? 'AI asistanımız size 7/24 yardımcı olmaya hazır'
              : 'Our AI assistant is ready to help you 24/7'}
          </p>
        </form>
      </div>
    </>
  );
}
