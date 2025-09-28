import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="border-b sticky top-0 bg-white/95 backdrop-blur-sm z-40">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon name="Building2" className="h-8 w-8 text-primary" />
            <h1 className="text-xl font-bold">Центр строительных решений</h1>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
            <a href="#cases" className="hover:text-primary transition-colors">Кейсы</a>
            <a href="#contacts" className="hover:text-primary transition-colors">Контакты</a>
            <Button asChild>
              <a href="tel:+79521474603">
                <Icon name="Phone" className="h-4 w-4 mr-2" />
                +7 (952) 147-46-03
              </a>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;