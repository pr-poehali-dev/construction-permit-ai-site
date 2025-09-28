import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problems from "@/components/Problems";
import Services from "@/components/Services";
import Cases from "@/components/Cases";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const Index = () => {
  const [showAIAgent, setShowAIAgent] = useState(false);



  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Центр строительных решений - Получите разрешение на строительство без штрафов и сносов"
        description="Центр строительных решений оформляет документы на строительство и ввод в эксплуатацию по всей России. С 2004 года помогаем получить разрешения без штрафов и сносов."
        keywords="разрешение на строительство, ввод в эксплуатацию, строительные документы, узаконивание, техническое заказчик, строительные решения"
        ogTitle="Центр строительных решений - Документы без штрафов и сносов"
        ogDescription="Оформляем разрешения на строительство и ввод в эксплуатацию по всей России с 2004 года. Работаем дистанционно."
      />
      <Header />
      
      <Hero showAIAgent={showAIAgent} setShowAIAgent={setShowAIAgent} />
      
      <Problems />
      
      <Services />
      
      <Cases />
      
      <CTA showAIAgent={showAIAgent} setShowAIAgent={setShowAIAgent} />
      
      <Footer />

      {/* Floating AI Agent Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => {
            setShowAIAgent(true);
            // Переходим к агенту с небольшой задержкой для плавности
            setTimeout(() => {
              const agentElement = document.querySelector('[data-ai-agent]');
              if (agentElement) {
                agentElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
              }
            }, 100);
          }}
          size="lg"
          className="rounded-full w-16 h-16 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-2xl hover:shadow-3xl transition-all duration-300"
        >
          <Icon name="MessageCircle" className="h-6 w-6" />
        </Button>
      </div>

      {/* AI Agent Chat Widget */}
      {showAIAgent && (
        <div 
          data-ai-agent
          className="fixed inset-4 bg-background border rounded-lg shadow-2xl z-[60] flex flex-col"
        >
          <div className="flex items-center justify-between p-4 border-b">
            <h3 className="font-semibold text-foreground"></h3>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowAIAgent(false)}
            >
              <Icon name="X" className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex-1 p-0 overflow-hidden">
            <iframe 
              allow="microphone;autoplay" 
              style={{width: '100%', height: '100%', border: 'none'}}
              src="https://functions.pro-talk.ru/api/v1.0/chatgpt_widget_dialog_api?record_id=recnmE0ZxDcfwmU79&promt_id=33617&lang=ru&fullscreen=0&voice=1&file=1&circle=1"
              title="ИИ-консультант"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;