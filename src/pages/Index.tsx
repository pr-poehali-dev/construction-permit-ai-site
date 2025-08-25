import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useEffect, useState } from "react";

const Index = () => {
  const [showAIAgent, setShowAIAgent] = useState(false);

  useEffect(() => {
    document.title = "Центр строительных разрешений - Получите разрешение на строительство без штрафов и сносов";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Центр строительных разрешений оформляет документы на строительство и ввод в эксплуатацию по всей России. С 2004 года помогаем получить разрешения без штрафов и сносов.');
    }
  }, []);

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

  const problems = [
    "Потеряли 3–6 месяцев — потому что подали не тот пакет?",
    "Получили отказ — из-за ошибки в схеме или несогласованного выноса сетей?",
    "Грозят сносом — потому что построили без разрешения?",
    "Не можете ввести в эксплуатацию — хотя объект готов?",
    "ТУ не дают — газ, свет, вода — и проект \"висит\" годами?"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b sticky top-0 bg-white/95 backdrop-blur-sm z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Building2" className="h-8 w-8 text-primary" />
              <h1 className="text-xl font-bold">Центр строительных разрешений</h1>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
              <a href="#cases" className="hover:text-primary transition-colors">Кейсы</a>
              <a href="#contacts" className="hover:text-primary transition-colors">Контакты</a>
              <Button>
                <Icon name="Phone" className="h-4 w-4 mr-2" />
                +7 (952) 147-46-03
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Получите разрешение на строительство и ввод в эксплуатацию
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-medium">
              без штрафов, сносов и бесконечных согласований
            </p>
            
            {/* AI Agent под заголовком */}
            <div className="mb-8">
              <Button
                onClick={() => setShowAIAgent(!showAIAgent)}
                className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white px-8 py-3 rounded-full text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Icon name="MessageCircle" className="h-5 w-5 mr-2" />
                Спросить консультанта
              </Button>
              {showAIAgent && (
                <div className="mt-4 max-w-2xl mx-auto">
                  <iframe
                    allow="microphone;autoplay"
                    style={{ width: '100%', height: '400px', borderRadius: '16px', border: '1px solid #e2e8f0' }}
                    src="https://functions.pro-talk.ru/api/v1.0/chatgpt_widget_dialog_api?record_id=recnmE0ZxDcfwmU79&promt_id=33617&lang=ru&fullscreen=0&voice=1&file=1&circle=1"
                  />
                </div>
              )}
            </div>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
              <div className="flex items-center text-muted-foreground">
                <Icon name="Phone" className="h-5 w-5 mr-2 text-primary" />
                <span className="font-medium">+7 (952) 147-46-03</span>
              </div>
              <div className="flex items-center text-muted-foreground">
                <Icon name="Mail" className="h-5 w-5 mr-2 text-primary" />
                <span>k.karpp@mail.ru</span>
              </div>
            </div>
            
            <p className="text-muted-foreground text-lg">
              Работаем по всей России. Дистанционно. Без личного присутствия.
            </p>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="py-16 bg-red-50/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
              Вы теряете деньги, если оформляете документы сами
            </h2>
            <div className="grid gap-4 mb-8">
              {problems.map((problem, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-background rounded-lg border border-red-200/50 shadow-sm">
                  <Icon name="AlertTriangle" className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <p className="text-foreground text-left">{problem}</p>
                </div>
              ))}
            </div>
            <div className="bg-background p-8 rounded-2xl border border-red-200/50 shadow-sm">
              <p className="text-lg text-foreground mb-4 font-medium">Вы не виноваты.</p>
              <p className="text-muted-foreground">
                Система устроена так, чтобы вы ошиблись, заплатили штраф — и пришли к тем, кто знает, как надо.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
              Мы делаем так, чтобы вы не платили дважды
            </h2>
            <div className="bg-primary/5 p-8 rounded-2xl border border-primary/20 mb-8">
              <p className="text-lg text-foreground mb-6">
                С 2004 года мы оформляем разрешения на строительство и ввод в эксплуатацию — не как посредники, а как технический заказчик.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="text-left">
                  <h3 className="font-semibold text-foreground mb-4">Мы знаем:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Icon name="CheckCircle" className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Какие документы примут — а какие сразу вернут</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Icon name="CheckCircle" className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Куда подавать — и в какой форме</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Icon name="CheckCircle" className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Кто принимает решение — и как с ним говорить</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Icon name="CheckCircle" className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Где можно ускорить — а где лучше не спешить</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-background p-6 rounded-xl border">
                  <h3 className="font-semibold text-primary mb-4">Наша задача:</h3>
                  <p className="text-foreground font-medium text-lg">
                    Чтобы ваш объект прошёл согласования с первого раза
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Что мы делаем
            </h2>
          </div>
          
          <div className="grid gap-8 max-w-6xl mx-auto">
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
                        <p className="text-sm font-medium text-red-600 mb-2">Боль:</p>
                        <p className="text-sm text-muted-foreground mb-4 italic">«{service.pain}»</p>
                      </div>
                      
                      <div>
                        <p className="text-sm font-medium text-primary mb-2">Решение:</p>
                        <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
                      </div>
                      
                      <div>
                        <p className="text-sm font-medium text-green-600 mb-2">Результат:</p>
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

      {/* Cases Section */}
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

      {/* CTA Section */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              Хотите, чтобы документы прошли — а не «были поданы»?
            </h2>
            
            <div className="bg-background p-8 rounded-2xl shadow-lg border">
              <p className="text-lg text-foreground mb-6">
                Позвоните или напишите. Расскажите, что нужно оформить.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="text-left">
                  <h3 className="font-semibold text-foreground mb-4">Мы скажем:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <Icon name="CheckCircle" className="h-4 w-4 text-primary" />
                      <span className="text-muted-foreground">можно ли</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="CheckCircle" className="h-4 w-4 text-primary" />
                      <span className="text-muted-foreground">сколько времени займёт</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="CheckCircle" className="h-4 w-4 text-primary" />
                      <span className="text-muted-foreground">во что обойдётся</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="CheckCircle" className="h-4 w-4 text-primary" />
                      <span className="text-muted-foreground">какие риски</span>
                    </li>
                  </ul>
                  <p className="text-sm text-muted-foreground mt-4 font-medium">
                    Без воды. По делу.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-center gap-4">
                    <Icon name="Phone" className="h-6 w-6 text-primary" />
                    <span className="text-xl font-semibold text-foreground">+7 (952) 147-46-03</span>
                  </div>
                  <div className="flex items-center justify-center gap-4">
                    <Icon name="Mail" className="h-6 w-6 text-primary" />
                    <span className="text-lg text-foreground">k.karpp@mail.ru</span>
                  </div>
                  <div className="flex justify-center gap-4 pt-4">
                    <Button className="bg-green-600 hover:bg-green-700">
                      <Icon name="MessageSquare" className="h-4 w-4 mr-2" />
                      WhatsApp
                    </Button>
                    <Button variant="outline">
                      <Icon name="Send" className="h-4 w-4 mr-2" />
                      Telegram
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
              Мы не обещаем 100%
            </h2>
            
            <div className="bg-secondary/20 p-8 rounded-2xl border">
              <p className="text-lg text-foreground mb-6">
                Но мы делаем всё, чтобы:
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex flex-col items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="Shield" className="h-6 w-6 text-primary" />
                  </div>
                  <p className="text-muted-foreground text-center">вас не оштрафовали</p>
                </div>
                
                <div className="flex flex-col items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="Home" className="h-6 w-6 text-primary" />
                  </div>
                  <p className="text-muted-foreground text-center">объект не снесли</p>
                </div>
                
                <div className="flex flex-col items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="CheckCircle" className="h-6 w-6 text-primary" />
                  </div>
                  <p className="text-muted-foreground text-center">документы приняли с первого раза</p>
                </div>
              </div>
              
              <Separator className="my-8" />
              
              <p className="text-xl font-semibold text-primary">
                Вы платите за результат, а не за попытку.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contacts" className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-4">Получить консультацию</h2>
              <p className="text-muted-foreground">Расскажите о своей ситуации, и мы дадим экспертную оценку</p>
              
              {/* AI Agent в форме заявки */}
              <div className="mt-6">
                <Button
                  onClick={() => setShowAIAgent(!showAIAgent)}
                  variant="outline"
                  className="mb-4"
                >
                  <Icon name="Bot" className="h-4 w-4 mr-2" />
                  Помощь подобрать услугу →
                </Button>
              </div>
            </div>
            
            <Card className="p-6">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Имя</label>
                    <Input placeholder="Ваше имя" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Телефон</label>
                    <Input placeholder="+7 (___) ___-__-__" />
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Email</label>
                  <Input placeholder="your@email.com" type="email" />
                </div>
                
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Опишите вашу ситуацию</label>
                  <Textarea 
                    placeholder="Расскажите, что нужно оформить, в каком городе, какие сложности возникли..."
                    rows={4}
                  />
                </div>
                
                <Button size="lg" className="w-full">
                  <Icon name="Send" className="h-4 w-4 mr-2" />
                  Получить консультацию
                </Button>
                
                <p className="text-xs text-muted-foreground text-center">
                  Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
                </p>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-foreground text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Building2" className="h-6 w-6" />
                <h3 className="text-lg font-bold">Центр строительных разрешений</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Документальные операции с недвижимостью по всей России. С 2004 года.
              </p>
              <div className="flex gap-4">
                <Button variant="ghost" size="sm" className="text-white hover:bg-white/10">
                  <Icon name="MessageSquare" className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" className="text-white hover:bg-white/10">
                  <Icon name="Send" className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Навигация</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#services" className="hover:text-white transition-colors">Услуги</a></li>
                <li><a href="#cases" className="hover:text-white transition-colors">Кейсы</a></li>
                <li><a href="#contacts" className="hover:text-white transition-colors">Контакты</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-300">
                <div className="flex items-center gap-2">
                  <Icon name="Phone" className="h-4 w-4" />
                  <span>+7 (952) 147-46-03</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Mail" className="h-4 w-4" />
                  <span>k.karpp@mail.ru</span>
                </div>
                <p className="text-sm">Работаем по всей России. Дистанционно.</p>
              </div>
            </div>
          </div>
          
          <Separator className="my-8 bg-gray-700" />
          
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Центр строительных разрешений. Все права защищены.
            </p>
            <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">
              Политика конфиденциальности
            </a>
          </div>
        </div>
      </footer>

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