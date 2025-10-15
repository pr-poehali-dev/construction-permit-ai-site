import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const RazreshenieNaStroitelstvoPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Разрешение на строительство — Центр строительных решений"
        description="Получение разрешения на строительство любых объектов. ТУ от всех сетей, согласование с МЧС, Роспотребнадзором. Работаем по всей России."
        keywords="разрешение на строительство, получить разрешение, строительство объектов, ТУ на подключение"
        canonicalUrl="https://karpp.ru/uslugi/razreshenie-na-stroitelstvo/"
      />
      <Header />
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Оформление разрешения на строительство
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground mb-8">
              Проект готов, но не дают разрешение? Мы получим все ТУ и согласования, чтобы вы могли начать строительство.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Что входит в услугу</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Icon name="CheckCircle" className="h-6 w-6 text-primary shrink-0 mt-1" />
                <span>Получение ТУ от всех инженерных сетей (вода, газ, электричество, канализация)</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="CheckCircle" className="h-6 w-6 text-primary shrink-0 mt-1" />
                <span>Согласование с МЧС, Роспотребнадзором, Ростехнадзором</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="CheckCircle" className="h-6 w-6 text-primary shrink-0 mt-1" />
                <span>Согласование с аэропортами (при необходимости)</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="CheckCircle" className="h-6 w-6 text-primary shrink-0 mt-1" />
                <span>Получение разрешения на строительство</span>
              </li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Кому подходит</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Застройщики коммерческих объектов</li>
              <li>Владельцы земли под строительство</li>
              <li>Проектные организации</li>
              <li>Инвесторы строительных проектов</li>
            </ul>
            
            <div className="bg-gray-50 p-6 rounded-lg mt-8">
              <h3 className="text-xl font-bold mb-3">Сроки и стоимость</h3>
              <p className="mb-2"><strong>Срок:</strong> от 3 до 8 месяцев</p>
              <p><strong>Стоимость:</strong> зависит от типа объекта и региона</p>
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

export default RazreshenieNaStroitelstvoPage;
