import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Cases = () => {
  const cases = [
    {
      title: "СТО в Новосибирске",
      description: "Узаконили за 4 месяца. Был риск сноса",
      location: "Новосибирск",
      duration: "4 месяца",
      type: "Узаконивание"
    },
    {
      title: "АЗС в Краснодаре",
      description: "Получили ТУ и разрешение. Проект \"встал\" — мы его \"разморозили\"",
      location: "Краснодар",
      duration: "6 месяцев",
      type: "Разрешение"
    },
    {
      title: "Павильон в ЯНАО",
      description: "Согласовали в приаэродромной зоне. Другие отказались браться",
      location: "ЯНАО",
      duration: "8 месяцев",
      type: "Согласование"
    },
    {
      title: "Склад в Татарстане",
      description: "Ввели в эксплуатацию с первого раза. Без переделок",
      location: "Татарстан",
      duration: "3 месяца",
      type: "Ввод в эксплуатацию"
    }
  ];

  return (
    <section id="cases" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Примеры, а не обещания
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {cases.map((caseItem, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary">{caseItem.type}</Badge>
                  <span className="text-sm text-muted-foreground">{caseItem.duration}</span>
                </div>
                <CardTitle className="text-lg">{caseItem.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{caseItem.description}</p>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Icon name="MapPin" className="h-4 w-4 mr-1" />
                  {caseItem.location}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <Button variant="outline" size="lg">
            Смотреть все кейсы
            <Icon name="ArrowRight" className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Cases;