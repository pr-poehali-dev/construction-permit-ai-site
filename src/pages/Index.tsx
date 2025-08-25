import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problems from "@/components/Problems";
import Services from "@/components/Services";
import Cases from "@/components/Cases";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  const [showAIAgent, setShowAIAgent] = useState(false);

  useEffect(() => {
    document.title = "Центр строительных разрешений - Получите разрешение на строительство без штрафов и сносов";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Центр строительных разрешений оформляет документы на строительство и ввод в эксплуатацию по всей России. С 2004 года помогаем получить разрешения без штрафов и сносов.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
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
          onClick={() => setShowAIAgent(!showAIAgent)}
          size="lg"
          className="rounded-full w-16 h-16 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-2xl hover:shadow-3xl transition-all duration-300 animate-pulse"
        >
          <Icon name="MessageCircle" className="h-6 w-6" />
        </Button>
      </div>

      {/* Exit Intent AI Agent (placeholder) */}
      <div id="exit-intent-agent" className="hidden">
        {/* This would be triggered on exit intent */}
      </div>
    </div>
  );
};

export default Index;