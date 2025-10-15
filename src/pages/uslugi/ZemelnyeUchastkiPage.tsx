import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const ZemelnyeUchastkiPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Оформление земельных участков — Центр строительных решений"
        description="Оформление земельных участков под строительство. Смена ВРИ, аудит участка, получение ГПЗУ. Работаем по всей России с 2004 года."
        keywords="оформление земельного участка, смена ВРИ, ГПЗУ, земля под строительство"
        canonicalUrl="https://karpp.ru/uslugi/oformlenie-zemelnyh-uchastkov/"
      />
      <Header />
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Оформление земельных участков
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground mb-8">
              Хотите строить, но ВРИ не подходит? Не знаете, можно ли строить на участке? Мы проведём аудит и подготовим землю.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Что входит в услугу</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Icon name="CheckCircle" className="h-6 w-6 text-primary shrink-0 mt-1" />
                <span>Градостроительный аудит участка (возможность строительства)</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="CheckCircle" className="h-6 w-6 text-primary shrink-0 mt-1" />
                <span>Смена вида разрешённого использования (ВРИ)</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="CheckCircle" className="h-6 w-6 text-primary shrink-0 mt-1" />
                <span>Изменение территориальной зоны</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="CheckCircle" className="h-6 w-6 text-primary shrink-0 mt-1" />
                <span>Внесение изменений в ПЗЗ (правила землепользования и застройки)</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="CheckCircle" className="h-6 w-6 text-primary shrink-0 mt-1" />
                <span>Получение градостроительного плана земельного участка (ГПЗУ)</span>
              </li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Кому подходит</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Владельцы участков с неподходящим ВРИ</li>
              <li>Покупатели земли под застройку</li>
              <li>Инвесторы коммерческих проектов</li>
              <li>Те, кто не знает, можно ли строить на участке</li>
            </ul>
            
            <div className="bg-gray-50 p-6 rounded-lg mt-8">
              <h3 className="text-xl font-bold mb-3">Сроки и стоимость</h3>
              <p className="mb-2"><strong>Срок:</strong> от 2 до 8 месяцев (зависит от процедур)</p>
              <p><strong>Стоимость:</strong> от 50 000 ₽ за аудит, смена ВРИ — индивидуально</p>
            </div>
            
            <div className="mt-10 text-center">
              <Button size="lg" className="text-lg px-8">
                <Icon name="MessageCircle" className="mr-2 h-5 w-5" />
                Получить консультацию
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
      <CookieBanner />
    </div>
  );
};

export default ZemelnyeUchastkiPage;
