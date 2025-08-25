import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface HeroProps {
  showAIAgent: boolean;
  setShowAIAgent: (show: boolean) => void;
}

const Hero = ({ showAIAgent, setShowAIAgent }: HeroProps) => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: subtitleRef, isVisible: subtitleVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: buttonRef, isVisible: buttonVisible } = useScrollAnimation({ threshold: 0.3 });

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 
            ref={titleRef}
            className={`text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight transition-all duration-1000 ${
              titleVisible ? 'opacity-100 animate-fade-in-up' : 'opacity-0 translate-y-8'
            }`}
          >
            Получите разрешение на строительство и ввод в эксплуатацию
          </h1>
          <p 
            ref={subtitleRef}
            className={`text-xl md:text-2xl text-muted-foreground mb-4 font-medium transition-all duration-1000 delay-300 ${
              subtitleVisible ? 'opacity-100 animate-fade-in-up' : 'opacity-0 translate-y-8'
            }`}
          >
            без штрафов, сносов и бесконечных согласований
          </p>
          
          {/* AI Agent под заголовком */}
          <div 
            ref={buttonRef}
            className={`mb-8 transition-all duration-1000 delay-500 ${
              buttonVisible ? 'opacity-100 animate-scale-in' : 'opacity-0 scale-95'
            }`}
          >
            <Button
              onClick={() => setShowAIAgent(!showAIAgent)}
              className="btn-cta px-8 py-3 rounded text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Icon name="MessageCircle" className="h-5 w-5 mr-2" />
              Спросить консультанта
            </Button>
            {showAIAgent && (
              <div className="mt-4 max-w-2xl mx-auto">
                <iframe
                  allow="microphone;autoplay"
                  style={{ width: '100%', height: '400px', borderRadius: '16px', border: '1px solid #e2e8f0' }}
                  src="https://functions.pro-talk.ru/api/v1.0/chatgpt_widget_dialog_api?record_id=recnmE0ZxDcfwmU79&promt_id=33617&lang=ru&fullscreen=0&voice=1&file=1&circle=1"
                />
              </div>
            )}
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
            <div className="flex items-center text-muted-foreground">
              <Icon name="Phone" className="h-5 w-5 mr-2 text-primary" />
              <span className="font-medium">+7 (952) 147-46-03</span>
            </div>
            <div className="flex items-center text-muted-foreground">
              <Icon name="Mail" className="h-5 w-5 mr-2 text-primary" />
              <span>k.karpp@mail.ru</span>
            </div>
          </div>
          
          <p className="text-muted-foreground text-lg">
            Работаем по всей России. Дистанционно. Без личного присутствия.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;