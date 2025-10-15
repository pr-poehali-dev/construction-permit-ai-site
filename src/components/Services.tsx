import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Helmet } from "react-helmet-async";

const Services = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: servicesRef, isVisible: servicesVisible } = useScrollAnimation();
  const services = [
    {
      icon: "FileText",
      title: "Узаконивание самовольно построенных объектов",
      description: "Анализ рисков, подготовка документов задним числом, согласование с администрацией, регистрация в Росреестре",
      pain: "Построил, а теперь грозят сносом",
      result: "Объект становится вашим по закону"
    },
    {
      icon: "MapPin",
      title: "Оформление земельных участков",
      description: "Градостроительный аудит участка, смена ВРИ, зоны, внесение в ПЗЗ, получение ГПЗУ",
      pain: "Хочу строить, но не знаю, можно ли. Или ВРИ не подходит",
      result: "Участок, на котором можно строить по закону"
    },
    {
      icon: "Building",
      title: "Оформление разрешения на строительство",
      description: "Получение ТУ от всех сетей, согласование с МЧС, Роспотребнадзором, аэропортами",
      pain: "Проект готов, но не дают разрешение. Требуют то одно, то другое",
      result: "Получаете разрешение и начинаете строить"
    },
    {
      icon: "CheckCircle",
      title: "Разрешение на ввод объекта в эксплуатацию",
      description: "Подготовка актов: приёмки, соответствия, подключения. Получение заключения госнадзора",
      pain: "Построили, но не могут ввести. Госстройнадзор требует переделать",
      result: "Объект можно использовать, сдавать, продавать"
    },
    {
      icon: "Users",
      title: "Функции технического заказчика",
      description: "Полное сопровождение от проекта до ввода, взаимодействие со всеми госорганами",
      pain: "Хочу контролировать, но не хочу сам ходить по инстанциям",
      result: "Процесс идёт без вашего участия"
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Разрешение на строительство",
    "provider": {
      "@type": "Organization",
      "name": "Центр строительных решений"
    },
    "areaServed": "RU",
    "serviceType": "ConstructionPermit",
    "offers": {
      "@type": "Offer",
      "priceCurrency": "RUB",
      "availability": "https://schema.org/InStock"
    }
  };

  return (
    <section id="services" className="py-16 bg-white">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 
            ref={titleRef}
            className={`text-3xl md:text-4xl font-bold text-foreground mb-4 transition-all duration-1000 ${
              titleVisible ? 'opacity-100 animate-fade-in-up' : 'opacity-0 translate-y-8'
            }`}
          >
            Что мы делаем
          </h2>
        </div>
        
        <div 
          ref={servicesRef}
          className={`grid gap-8 max-w-6xl mx-auto transition-all duration-1000 delay-300 ${
            servicesVisible ? 'opacity-100 animate-fade-in-up' : 'opacity-0 translate-y-8'
          }`}
        >
          {services.map((service, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-primary">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name={service.icon} className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="mb-4">
                    <Badge variant="outline" className="text-xs mb-2">
                      {index + 1}
                    </Badge>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {service.title}
                    </h3>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <p className="text-sm font-medium text-destructive mb-2">Ситуация:</p>
                      <p className="text-sm text-muted-foreground mb-4 italic">«{service.pain}»</p>
                    </div>
                    
                    <div>
                      <p className="text-sm font-medium text-primary mb-2">Как мы это решаем:</p>
                      <p className="text-sm text-muted-foreground mb-4">{service.description.replace('задним числом', 'ретроспективно')}</p>
                    </div>
                    
                    <div>
                      <p className="text-sm font-medium text-accent mb-2">Что вы получаете:</p>
                      <p className="text-sm text-foreground font-medium">{service.result}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;