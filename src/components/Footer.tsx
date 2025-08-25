import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
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
  );
};

export default Footer;