import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useState } from "react";

interface HeroProps {
  showAIAgent: boolean;
  setShowAIAgent: (show: boolean) => void;
}

const Hero = ({ showAIAgent, setShowAIAgent }: HeroProps) => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Получите разрешение на строительство и ввод в эксплуатацию
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-medium">
            без штрафов, сносов и бесконечных согласований
          </p>
          
          {/* AI Agent под заголовком */}
          <div className="mb-8">
            <Button
              onClick={() => setShowAIAgent(!showAIAgent)}
              className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white px-8 py-3 rounded-full text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
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