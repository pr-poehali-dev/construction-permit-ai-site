import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const TehnicheskijZakazchikPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Технический заказчик — Центр строительных решений"
        description="Услуги технического заказчика. Полное сопровождение строительства от проекта до ввода в эксплуатацию. Работаем по всей России."
        keywords="технический заказчик, сопровождение строительства, контроль строительства"
        canonicalUrl="https://karpp.ru/uslugi/tehnicheskij-zakazchik/"
      />
      <Header />
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Функции технического заказчика
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground mb-8">
              Хотите контролировать процесс, но не хотите ходить по инстанциям? Мы возьмём на себя все функции заказчика.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Что входит в услугу</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Icon name="CheckCircle" className="h-6 w-6 text-primary shrink-0 mt-1" />
                <span>Полное сопровождение от проекта до ввода в эксплуатацию</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="CheckCircle" className="h-6 w-6 text-primary shrink-0 mt-1" />
                <span>Взаимодействие со всеми государственными органами</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="CheckCircle" className="h-6 w-6 text-primary shrink-0 mt-1" />
                <span>Контроль качества строительных работ</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="CheckCircle" className="h-6 w-6 text-primary shrink-0 mt-1" />
                <span>Координация подрядчиков и проектировщиков</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="CheckCircle" className="h-6 w-6 text-primary shrink-0 mt-1" />
                <span>Ведение документации и отчётности</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="CheckCircle" className="h-6 w-6 text-primary shrink-0 mt-1" />
                <span>Приёмка выполненных работ</span>
              </li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Кому подходит</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Инвесторы, которым некогда заниматься стройкой</li>
              <li>Застройщики коммерческих объектов</li>
              <li>Владельцы бизнеса, строящие помещения</li>
              <li>Те, кто хочет контролировать без личного участия</li>
            </ul>
            
            <div className="bg-gray-50 p-6 rounded-lg mt-8">
              <h3 className="text-xl font-bold mb-3">Сроки и стоимость</h3>
              <p className="mb-2"><strong>Срок:</strong> на всё время строительства (от 6 месяцев до 3 лет)</p>
              <p><strong>Стоимость:</strong> от 3-5% стоимости строительства или фиксированная плата</p>
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

export default TehnicheskijZakazchikPage;
