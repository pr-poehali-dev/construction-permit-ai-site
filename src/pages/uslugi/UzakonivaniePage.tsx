import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const UzakonivaniePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Узаконивание самостроя — Центр строительных решений"
        description="Узаконим самовольно построенный объект. Анализ рисков, подготовка документов, согласование с администрацией. Работаем по всей России с 2004 года."
        keywords="узаконивание самостроя, легализация самостроя, самовольная постройка, узаконить объект"
        canonicalUrl="https://karpp.ru/uslugi/uzakonivanie-samostroya/"
      />
      <Header />
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Узаконивание самовольно построенных объектов
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground mb-8">
              Построили без разрешения? Грозят сносом? Мы проанализируем риски и узаконим объект по всем правилам.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Что входит в услугу</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Icon name="CheckCircle" className="h-6 w-6 text-primary shrink-0 mt-1" />
                <span>Юридический анализ объекта и рисков сноса</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="CheckCircle" className="h-6 w-6 text-primary shrink-0 mt-1" />
                <span>Подготовка технической документации задним числом</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="CheckCircle" className="h-6 w-6 text-primary shrink-0 mt-1" />
                <span>Согласование с местной администрацией</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="CheckCircle" className="h-6 w-6 text-primary shrink-0 mt-1" />
                <span>Регистрация права собственности в Росреестре</span>
              </li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Кому подходит</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Владельцы самостроев жилых домов и дач</li>
              <li>Собственники коммерческих объектов без документов</li>
              <li>Те, кто получил предписание о сносе</li>
              <li>Покупатели объектов с незаконной перепланировкой</li>
            </ul>
            
            <div className="bg-gray-50 p-6 rounded-lg mt-8">
              <h3 className="text-xl font-bold mb-3">Сроки и стоимость</h3>
              <p className="mb-2"><strong>Срок:</strong> от 4 до 12 месяцев (зависит от региона и сложности)</p>
              <p><strong>Стоимость:</strong> рассчитывается индивидуально после анализа</p>
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

export default UzakonivaniePage;
