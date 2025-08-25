import Icon from "@/components/ui/icon";

const Problems = () => {
  const problems = [
    "Потеряли 3–6 месяцев — потому что подали не тот пакет?",
    "Получили отказ — из-за ошибки в схеме или несогласованного выноса сетей?",
    "Грозят сносом — потому что построили без разрешения?",
    "Не можете ввести в эксплуатацию — хотя объект готов?",
    "ТУ не дают — газ, свет, вода — и проект \"висит\" годами?"
  ];

  return (
    <>
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
    </>
  );
};

export default Problems;