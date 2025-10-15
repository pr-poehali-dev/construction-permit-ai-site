import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const KejsyPage = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: casesRef, isVisible: casesVisible } = useScrollAnimation();

  const cases = [
    {
      title: "СТО в Новосибирске",
      description: "Узаконили за 4 месяца. Был риск сноса",
      location: "Новосибирск",
      duration: "4 месяца",
      type: "Узаконивание",
      problem: "Построили автосервис без разрешения. Администрация выдала предписание о сносе в течение 30 дней.",
      solution: "Провели юридический анализ, собрали техническую документацию задним числом, согласовали с МЧС и Роспотребнадзором, получили разрешение через суд.",
      result: "Объект узаконен, зарегистрирован в Росреестре. Риск сноса устранён."
    },
    {
      title: "АЗС в Краснодаре",
      description: "Получили ТУ и разрешение. Проект \"встал\" — мы его \"разморозили\"",
      location: "Краснодар",
      duration: "6 месяцев",
      type: "Разрешение",
      problem: "Проект стоял 8 месяцев — не могли получить ТУ от газовой компании и согласование МЧС.",
      solution: "Пересогласовали проект с учётом требований МЧС, получили ТУ на газ через областную комиссию, оформили все разрешения.",
      result: "Разрешение на строительство получено. Стройка запущена."
    },
    {
      title: "Павильон в ЯНАО",
      description: "Согласовали в приаэродромной зоне. Другие отказались браться",
      location: "ЯНАО",
      duration: "8 месяцев",
      type: "Согласование",
      problem: "Торговый павильон попал в приаэродромную зону аэропорта. Три компании отказались — сказали невозможно.",
      solution: "Провели экспертизу влияния на радионавигацию, получили заключение НИИ, согласовали с Росавиацией и аэропортом.",
      result: "Объект согласован. Получено разрешение на строительство."
    },
    {
      title: "Склад в Татарстане",
      description: "Ввели в эксплуатацию с первого раза. Без переделок",
      location: "Татарстан",
      duration: "3 месяца",
      type: "Ввод в эксплуатацию",
      problem: "Склад построен, но подрядчик не вёл исполнительную документацию. Госстройнадзор грозил отказом.",
      solution: "Восстановили всю исполнительную документацию, провели выборочное вскрытие конструкций, оформили акты освидетельствования.",
      result: "Разрешение на ввод получено с первого раза. Объект в эксплуатации."
    },
    {
      title: "Производственный цех в Свердловской области",
      description: "Сменили ВРИ и получили разрешение за 5 месяцев",
      location: "Свердловская область",
      duration: "5 месяцев",
      type: "Оформление земли",
      problem: "Участок под промзону с ВРИ \"для сельхозпроизводства\". Местная администрация не шла на контакт.",
      solution: "Инициировали публичные слушания, подготовили обоснование изменений в ПЗЗ, получили положительное заключение комиссии.",
      result: "ВРИ изменён на \"производственная деятельность\". Получено разрешение на строительство."
    },
    {
      title: "Офисное здание в Московской области",
      description: "Полное сопровождение от проекта до ввода за 14 месяцев",
      location: "Московская область",
      duration: "14 месяцев",
      type: "Технический заказчик",
      problem: "Инвестор хотел построить офисный центр, но не хотел заниматься документами и контролем подрядчиков.",
      solution: "Взяли на себя функции технического заказчика: получили все разрешения, контролировали стройку, принимали работы, ввели объект.",
      result: "Объект построен и введён в эксплуатацию. Инвестор получил готовое здание."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Кейсы — примеры наших работ | Центр строительных решений"
        description="Реальные примеры работ: узаконивание самостроя, получение разрешений, ввод в эксплуатацию. Работаем по всей России с 2004 года."
        keywords="кейсы строительство, примеры работ, узаконивание объектов, разрешение на строительство"
        canonicalUrl="https://karpp.ru/kejsy/"
      />
      <Header />
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 
              ref={titleRef}
              className={`text-4xl md:text-5xl font-bold text-foreground mb-4 transition-all duration-1000 ${
                titleVisible ? 'opacity-100 animate-fade-in-up' : 'opacity-0 translate-y-8'
              }`}
            >
              Примеры, а не обещания
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Реальные проекты, которые мы реализовали по всей России
            </p>
          </div>
          
          <div 
            ref={casesRef}
            className={`grid md:grid-cols-2 gap-8 max-w-6xl mx-auto transition-all duration-1000 delay-300 ${
              casesVisible ? 'opacity-100 animate-fade-in-up' : 'opacity-0 translate-y-8'
            }`}
          >
            {cases.map((caseItem, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="secondary">{caseItem.type}</Badge>
                    <span className="text-sm text-muted-foreground">{caseItem.duration}</span>
                  </div>
                  <CardTitle className="text-2xl mb-2">{caseItem.title}</CardTitle>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Icon name="MapPin" className="h-4 w-4 mr-1" />
                    {caseItem.location}
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2 flex items-center">
                      <Icon name="AlertCircle" className="h-4 w-4 mr-2 text-destructive" />
                      Проблема
                    </h4>
                    <p className="text-muted-foreground text-sm">{caseItem.problem}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-2 flex items-center">
                      <Icon name="Lightbulb" className="h-4 w-4 mr-2 text-primary" />
                      Решение
                    </h4>
                    <p className="text-muted-foreground text-sm">{caseItem.solution}</p>
                  </div>
                  
                  <div className="bg-primary/5 p-4 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-2 flex items-center">
                      <Icon name="CheckCircle" className="h-4 w-4 mr-2 text-green-600" />
                      Результат
                    </h4>
                    <p className="text-foreground text-sm font-medium">{caseItem.result}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
      <CookieBanner />
    </div>
  );
};

export default KejsyPage;
