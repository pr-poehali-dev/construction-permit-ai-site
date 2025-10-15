import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import SEOHead from "@/components/SEOHead";
import Icon from "@/components/ui/icon";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Helmet } from "react-helmet-async";

const FAQPage = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: faqRef, isVisible: faqVisible } = useScrollAnimation();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      category: "Узаконивание самостроя",
      questions: [
        {
          question: "Сколько занимает узаконивание самостроя?",
          answer: "От 4 до 12 месяцев в зависимости от региона, типа объекта и сложности ситуации. После анализа документов даём точный прогноз по срокам."
        },
        {
          question: "Можно ли узаконить объект, если уже есть предписание о сносе?",
          answer: "Да, можно. Мы приостанавливаем действие предписания через суд, параллельно собираем документы и узакониваем объект. Работали с такими случаями неоднократно."
        },
        {
          question: "Какие объекты невозможно узаконить?",
          answer: "Объекты на чужой земле, в водоохранных зонах, на территории заповедников, на землях лесного фонда. В остальных случаях — разбираем индивидуально."
        }
      ]
    },
    {
      category: "Разрешение на строительство",
      questions: [
        {
          question: "Что влияет на сроки получения ТУ?",
          answer: "Регион, ведомства, наличие исходных данных и особых зон (приаэродромная, охранные зоны сетей). Сроки согласуем до старта."
        },
        {
          question: "Сколько стоит получение разрешения на строительство?",
          answer: "Зависит от типа объекта, региона и количества согласований. Для коммерческих объектов — от 150 000 ₽, для жилых домов — от 80 000 ₽. Точную цену рассчитаем после анализа."
        },
        {
          question: "Что делать, если объект в приаэродромной зоне?",
          answer: "Требуется согласование с аэропортом и Росавиацией. Мы проводим экспертизу влияния на радионавигацию, получаем заключение и оформляем согласование. Срок — от 6 месяцев."
        }
      ]
    },
    {
      category: "Ввод в эксплуатацию",
      questions: [
        {
          question: "Какие документы нужны для ввода в эксплуатацию?",
          answer: "Акты освидетельствования скрытых работ, исполнительная документация, акты подключения к сетям, заключение госстройнадзора. Мы подготовим полный комплект."
        },
        {
          question: "Можно ли ввести объект, если стройка велась без надзора?",
          answer: "Да. Восстанавливаем исполнительную документацию, проводим выборочное вскрытие конструкций, делаем экспертизу. Сложнее и дороже, но решаемо."
        },
        {
          question: "Что делать, если госстройнадзор требует переделать?",
          answer: "Анализируем требования, оцениваем их обоснованность. Либо выполняем переделки, либо оспариваем через вышестоящие инстанции. Смотрим по ситуации."
        }
      ]
    },
    {
      category: "Работа с нами",
      questions: [
        {
          question: "Можно ли всё сделать дистанционно?",
          answer: "Да. Работаем по доверенности и ЭДО. Документы подаются в установленной форме, результаты направляем в электронном виде."
        },
        {
          question: "Какие гарантии вы даёте?",
          answer: "Работаем по договору с прописанными сроками и обязательствами. Если не получили результат по нашей вине — возвращаем деньги. За 20 лет не было ни одного такого случая."
        },
        {
          question: "Как формируется стоимость услуг?",
          answer: "Анализируем объект, регион, сложность согласований. Просчитываем трудозатраты и риски. Даём фиксированную цену или работаем поэтапно. Прозрачное ценообразование."
        },
        {
          question: "Сколько стоит первичная консультация?",
          answer: "Первая консультация бесплатная. Разбираем вашу ситуацию, даём план действий и прогноз по срокам и стоимости. Звоните: +7 (952) 147-46-03"
        }
      ]
    }
  ];

  const allQuestions = faqs.flatMap(cat => 
    cat.questions.map(q => ({ ...q, category: cat.category }))
  );

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": allQuestions.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      
      <SEOHead 
        title="Частые вопросы (FAQ) — Центр строительных решений"
        description="Ответы на частые вопросы об узаконивании самостроя, получении разрешений на строительство, вводе в эксплуатацию. Работаем с 2004 года."
        keywords="faq строительство, вопросы узаконивание, разрешение на строительство вопросы"
        canonicalUrl="https://karpp.ru/faq/"
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
              Частые вопросы
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ответы на самые популярные вопросы о наших услугах
            </p>
          </div>
          
          <div 
            ref={faqRef}
            className={`max-w-4xl mx-auto space-y-8 transition-all duration-1000 delay-300 ${
              faqVisible ? 'opacity-100 animate-fade-in-up' : 'opacity-0 translate-y-8'
            }`}
          >
            {faqs.map((category, catIndex) => (
              <div key={catIndex}>
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center">
                  <Icon name="Folder" className="h-6 w-6 mr-3 text-primary" />
                  {category.category}
                </h2>
                
                <div className="space-y-3">
                  {category.questions.map((faq, qIndex) => {
                    const globalIndex = faqs.slice(0, catIndex).reduce((sum, cat) => sum + cat.questions.length, 0) + qIndex;
                    return (
                      <div 
                        key={qIndex}
                        className="border rounded-lg overflow-hidden bg-white hover:shadow-md transition-shadow"
                      >
                        <button
                          onClick={() => setOpenIndex(openIndex === globalIndex ? null : globalIndex)}
                          className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                        >
                          <span className="font-semibold text-foreground pr-4">
                            {faq.question}
                          </span>
                          <Icon 
                            name={openIndex === globalIndex ? "ChevronUp" : "ChevronDown"} 
                            className="h-5 w-5 text-primary shrink-0"
                          />
                        </button>
                        
                        {openIndex === globalIndex && (
                          <div className="px-6 pb-4 text-muted-foreground animate-fade-in">
                            {faq.answer}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center bg-gray-50 p-8 rounded-lg max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Не нашли ответ на свой вопрос?</h3>
            <p className="text-muted-foreground mb-6">
              Позвоните нам — разберём вашу ситуацию и дадим бесплатную консультацию
            </p>
            <a href="tel:+79521474603" className="inline-flex items-center justify-center px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-semibold">
              <Icon name="Phone" className="mr-2 h-5 w-5" />
              +7 (952) 147-46-03
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
      <CookieBanner />
    </div>
  );
};

export default FAQPage;
