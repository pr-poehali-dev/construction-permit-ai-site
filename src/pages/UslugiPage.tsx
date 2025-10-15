import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import CookieBanner from "@/components/CookieBanner";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const UslugiPage = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: servicesRef, isVisible: servicesVisible } = useScrollAnimation();

  const services = [
    {
      icon: "FileText",
      title: "Узаконивание самовольно построенных объектов",
      description: "Анализ рисков, подготовка документов задним числом, согласование с администрацией, регистрация в Росреестре",
      slug: "/uslugi/uzakonivanie-samostroya",
      badge: "Популярное"
    },
    {
      icon: "Building",
      title: "Разрешение на строительство",
      description: "Получение ТУ от всех сетей, согласование с МЧС, Роспотребнадзором, аэропортами",
      slug: "/uslugi/razreshenie-na-stroitelstvo",
      badge: "Обязательное"
    },
    {
      icon: "CheckCircle",
      title: "Ввод в эксплуатацию",
      description: "Подготовка актов: приёмки, соответствия, подключения. Получение заключения госнадзора",
      slug: "/uslugi/vvod-v-ekspluataciyu",
      badge: "Завершающий этап"
    },
    {
      icon: "MapPin",
      title: "Оформление земельных участков",
      description: "Градостроительный аудит участка, смена ВРИ, зоны, внесение в ПЗЗ, получение ГПЗУ",
      slug: "/uslugi/oformlenie-zemelnyh-uchastkov",
      badge: "Старт проекта"
    },
    {
      icon: "Users",
      title: "Технический заказчик",
      description: "Полное сопровождение от проекта до ввода, взаимодействие со всеми госорганами",
      slug: "/uslugi/tehnicheskij-zakazchik",
      badge: "Под ключ"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Услуги по строительным разрешениям — Центр строительных решений"
        description="Полный спектр услуг: узаконивание самостроя, разрешение на строительство, ввод в эксплуатацию, оформление земли, технический заказчик. Работаем по всей России с 2004 года."
        keywords="услуги строительство, разрешение на строительство, узаконивание, ввод в эксплуатацию, технический заказчик"
        canonicalUrl="https://karpp.ru/uslugi/"
      />
      
      <Header />
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 
              ref={titleRef}
              className={`text-4xl md:text-5xl font-bold text-foreground mb-6 transition-all duration-1000 ${
                titleVisible ? 'opacity-100 animate-fade-in-up' : 'opacity-0 translate-y-8'
              }`}
            >
              Услуги по оформлению разрешений
            </h1>
            <p className="text-lg text-muted-foreground">
              Помогаем пройти все этапы: от выбора участка до ввода объекта в эксплуатацию. 
              Работаем дистанционно по всей России.
            </p>
          </div>

          <div 
            ref={servicesRef}
            className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-1000 delay-300 ${
              servicesVisible ? 'opacity-100 animate-fade-in-up' : 'opacity-0 translate-y-8'
            }`}
          >
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon name={service.icon} className="h-6 w-6 text-primary" />
                    </div>
                    <Badge variant="secondary">{service.badge}</Badge>
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-between">
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <Link to={service.slug}>
                    <Button variant="outline" className="w-full">
                      Подробнее <Icon name="ArrowRight" className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold mb-4">Не знаете, с чего начать?</h2>
            <p className="text-muted-foreground mb-6">
              Позвоните нам — разберём вашу ситуацию и предложим оптимальное решение
            </p>
            <a href="tel:+79521474603">
              <Button size="lg">
                <Icon name="Phone" className="mr-2 h-5 w-5" />
                +7 (952) 147-46-03
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <CookieBanner />
    </div>
  );
};

export default UslugiPage;
