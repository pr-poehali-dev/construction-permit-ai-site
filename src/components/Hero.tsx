import React from 'react';
import Icon from '@/components/ui/icon';

export default function Hero() {
  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-5"
        style={{
          backgroundImage: 'url(/img/a345b5bc-4f96-4ac5-84b5-ff1050936060.jpg)'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white/90 to-white/95" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-8 leading-tight">
            Центр строительных разрешений
          </h1>
          
          <h2 className="text-xl md:text-2xl text-secondary mb-12 font-medium leading-relaxed">
            Получите разрешение на строительство и ввод в эксплуатацию —<br />
            <span className="text-accent font-semibold">без штрафов, сносов и бесконечных согласований</span>
          </h2>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            <a 
              href="tel:+79521474603" 
              className="flex items-center gap-3 text-lg font-semibold text-primary hover:text-accent transition-colors"
            >
              <Icon name="Phone" size={20} />
              +7 (952) 147-46-03
            </a>
            <span className="hidden sm:block text-gray-300">|</span>
            <a 
              href="mailto:k.karpp@mail.ru" 
              className="flex items-center gap-3 text-lg font-semibold text-primary hover:text-accent transition-colors"
            >
              <Icon name="Mail" size={20} />
              k.karpp@mail.ru
            </a>
          </div>
          
          <p className="text-secondary mb-12 text-lg">
            Работаем по всей России. Дистанционно. Без личного присутствия.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/79521474603" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#20bc5a] text-white px-8 py-4 rounded font-semibold flex items-center justify-center gap-3 transition-all duration-300 hover:shadow-lg"
            >
              <Icon name="MessageCircle" size={20} />
              WhatsApp
            </a>
            <a 
              href="https://t.me/csrek_bot" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#0088cc] hover:bg-[#006ba6] text-white px-8 py-4 rounded font-semibold flex items-center justify-center gap-3 transition-all duration-300 hover:shadow-lg"
            >
              <Icon name="Send" size={20} />
              Telegram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}