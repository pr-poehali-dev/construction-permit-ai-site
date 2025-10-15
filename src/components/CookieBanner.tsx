import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setTimeout(() => setIsVisible(true), 1000);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const rejectCookies = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    setIsVisible(false);
    
    if (window.ym) {
      window.ym(104309066, 'setUserID', null);
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg z-50 animate-fade-in-up">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex-1 text-sm text-muted-foreground">
            <p>
              Мы используем cookie для улучшения работы сайта и анализа трафика (Яндекс.Метрика). 
              Продолжая использовать сайт, вы соглашаетесь с{' '}
              <a 
                href="/privacy.html" 
                className="text-primary hover:underline"
                target="_blank"
              >
                Политикой конфиденциальности
              </a>.
            </p>
          </div>
          <div className="flex gap-2 shrink-0">
            <Button 
              variant="outline" 
              size="sm"
              onClick={rejectCookies}
            >
              Отклонить
            </Button>
            <Button 
              size="sm"
              onClick={acceptCookies}
            >
              Принять
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
