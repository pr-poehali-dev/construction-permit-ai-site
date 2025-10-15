import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Icon from "@/components/ui/icon";
import { Helmet } from "react-helmet-async";

const FAQ = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: faqRef, isVisible: faqVisible } = useScrollAnimation();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Сколько занимает узаконивание самостроя?",
      answer: "От 4 до 12 месяцев в зависимости от региона, типа объекта и сложности ситуации. После анализа документов даём точный прогноз по срокам."
    },
    {
      question: "Что делать, если объект в приаэродромной зоне?",
      answer: "Требуется согласование с аэропортом и Росавиацией. Мы проводим экспертизу влияния на радионавигацию, получаем заключение и оформляем согласование. Срок — от 6 месяцев."
    },
    {
      question: "Можно ли всё сделать дистанционно?",
      answer: "Да. Работаем по доверенности и ЭДО. Документы подаются в установленной форме, результаты направляем в электронном виде."
    },
    {
      question: "Что влияет на сроки получения ТУ?",
      answer: "Регион, ведомства, наличие исходных данных и особых зон (приаэродромная, охранные зоны сетей). Сроки согласуем до старта."
    },
    {
      question: "Какие документы нужны для ввода?",
      answer: "Акты освидетельствования скрытых работ, исполнительная документация, акты подключения к сетям, заключение госстройнадзора. Мы подготовим полный комплект."
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section id="faq" className="py-16 bg-white">
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
            Частые вопросы
          </h2>
        </div>
        
        <div 
          ref={faqRef}
          className={`max-w-3xl mx-auto space-y-4 transition-all duration-1000 delay-300 ${
            faqVisible ? 'opacity-100 animate-fade-in-up' : 'opacity-0 translate-y-8'
          }`}
        >
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="border rounded-lg overflow-hidden bg-white hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-foreground pr-4">
                  {faq.question}
                </span>
                <Icon 
                  name={openIndex === index ? "ChevronUp" : "ChevronDown"} 
                  className="h-5 w-5 text-primary shrink-0"
                />
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-4 text-muted-foreground animate-fade-in">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
