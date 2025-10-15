import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const VvodVEkspluataciuPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Ввод в эксплуатацию — Центр строительных решений"
        description="Получение разрешения на ввод объекта в эксплуатацию. Подготовка актов, заключение госнадзора. Работаем по всей России с 2004 года."
        keywords="ввод в эксплуатацию, разрешение на ввод, акты приемки, госстройнадзор"
        canonicalUrl="https://karpp.ru/uslugi/vvod-v-ekspluataciyu/"
      />
      <Header />
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Разрешение на ввод объекта в эксплуатацию
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground mb-8">
              Построили, но не можете ввести объект? Мы подготовим все акты и получим заключение госнадзора.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Что входит в услугу</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Icon name="CheckCircle" className="h-6 w-6 text-primary shrink-0 mt-1" />
                <span>Подготовка актов приёмки скрытых работ</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="CheckCircle" className="h-6 w-6 text-primary shrink-0 mt-1" />
                <span>Акты соответствия построенного объекта проекту</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="CheckCircle" className="h-6 w-6 text-primary shrink-0 mt-1" />
                <span>Акты подключения к инженерным сетям</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="CheckCircle" className="h-6 w-6 text-primary shrink-0 mt-1" />
                <span>Получение заключения государственного строительного надзора</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="CheckCircle" className="h-6 w-6 text-primary shrink-0 mt-1" />
                <span>Оформление разрешения на ввод в эксплуатацию</span>
              </li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Кому подходит</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Застройщики завершённых объектов</li>
              <li>Владельцы построенных зданий без ввода</li>
              <li>Те, кому госнадзор требует переделки</li>
              <li>Покупатели недвижимости для легализации</li>
            </ul>
            
            <div className="bg-gray-50 p-6 rounded-lg mt-8">
              <h3 className="text-xl font-bold mb-3">Сроки и стоимость</h3>
              <p className="mb-2"><strong>Срок:</strong> от 2 до 6 месяцев</p>
              <p><strong>Стоимость:</strong> рассчитывается после осмотра объекта</p>
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

export default VvodVEkspluataciuPage;
