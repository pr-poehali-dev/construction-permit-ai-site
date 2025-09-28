import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState } from "react";

const CTA = () => {
  const { ref: ctaTitleRef, isVisible: ctaTitleVisible } = useScrollAnimation();
  const { ref: ctaContentRef, isVisible: ctaContentVisible } = useScrollAnimation();
  const { ref: guaranteeTitleRef, isVisible: guaranteeTitleVisible } = useScrollAnimation();
  const { ref: guaranteeContentRef, isVisible: guaranteeContentVisible } = useScrollAnimation();
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      const response = await fetch('https://functions.poehali.dev/93c2df5c-e5d7-4c27-b8e3-6452b5f7a6b2', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', phone: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <>
      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 
              ref={ctaTitleRef}
              className={`text-3xl md:text-4xl font-bold text-foreground mb-8 transition-all duration-1000 ${
                ctaTitleVisible ? 'opacity-100 animate-fade-in-up' : 'opacity-0 translate-y-8'
              }`}
            >
              Хотите, чтобы документы прошли — а не «были поданы»?
            </h2>
            
            <div 
              ref={ctaContentRef}
              className={`bg-background p-8 rounded-2xl shadow-lg border transition-all duration-1000 delay-300 ${
                ctaContentVisible ? 'opacity-100 animate-scale-in' : 'opacity-0 scale-95'
              }`}
            >
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
                    <a 
                      href="https://wa.me/79521474603" 
                      target="_blank"
                      className="text-xl font-semibold text-foreground hover:text-primary transition-colors cursor-pointer"
                    >
                      +7 (952) 147-46-03
                    </a>
                  </div>
                  <div className="flex items-center justify-center gap-4">
                    <Icon name="Mail" className="h-6 w-6 text-primary" />
                    <a 
                      href="mailto:k.karpp@mail.ru" 
                      className="text-lg text-foreground hover:text-primary transition-colors cursor-pointer"
                    >
                      k.karpp@mail.ru
                    </a>
                  </div>
                  <div className="flex justify-center gap-4 pt-4">
                    <Button 
                      className="bg-[#25D366] hover:bg-[#20bc5a] text-white font-medium"
                      onClick={() => window.open('https://wa.me/79521474603', '_blank')}
                    >
                      <Icon name="MessageCircle" className="h-4 w-4 mr-2" />
                      WhatsApp
                    </Button>
                    <Button 
                      variant="outline"
                      className="border-[#0088cc] text-[#0088cc] hover:bg-[#0088cc] hover:text-white font-medium"
                      onClick={() => window.open('https://t.me/csrek_bot', '_blank')}
                    >
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
            <h2 
              ref={guaranteeTitleRef}
              className={`text-2xl md:text-3xl font-bold text-foreground mb-8 transition-all duration-1000 ${
                guaranteeTitleVisible ? 'opacity-100 animate-fade-in-up' : 'opacity-0 translate-y-8'
              }`}
            >
              Мы не обещаем 100%
            </h2>
            
            <div 
              ref={guaranteeContentRef}
              className={`bg-secondary/20 p-8 rounded-2xl border transition-all duration-1000 delay-300 ${
                guaranteeContentVisible ? 'opacity-100 animate-scale-in' : 'opacity-0 scale-95'
              }`}
            >
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
      <section id="contacts" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-4">Получить консультацию</h2>
              <p className="text-muted-foreground">Расскажите о своей ситуации, и мы дадим экспертную оценку</p>
              

            </div>
            
            <Card className="p-6">
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-center gap-2">
                    <Icon name="CheckCircle" className="h-5 w-5 text-green-600" />
                    <p className="text-green-800 font-medium">Заявка отправлена!</p>
                  </div>
                  <p className="text-green-700 text-sm mt-1">Мы свяжемся с вами в ближайшее время</p>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <div className="flex items-center gap-2">
                    <Icon name="AlertCircle" className="h-5 w-5 text-red-600" />
                    <p className="text-red-800 font-medium">Ошибка отправки</p>
                  </div>
                  <p className="text-red-700 text-sm mt-1">Попробуйте еще раз или свяжитесь по телефону</p>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Имя</label>
                    <Input 
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Ваше имя" 
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Телефон</label>
                    <Input 
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+7 (___) ___-__-__" 
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Email</label>
                  <Input 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your@email.com" 
                    type="email" 
                    required
                  />
                </div>
                
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Опишите вашу ситуацию</label>
                  <Textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Расскажите, что нужно оформить, в каком городе, какие сложности возникли..."
                    rows={4}
                    required
                  />
                </div>
                
                <Button size="lg" className="w-full" type="submit" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Icon name="Loader2" className="h-4 w-4 mr-2 animate-spin" />
                      Отправляем...
                    </>
                  ) : (
                    <>
                      <Icon name="Send" className="h-4 w-4 mr-2" />
                      Получить консультацию
                    </>
                  )}
                </Button>
                
                <p className="text-xs text-muted-foreground text-center">
                  Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
                </p>
              </form>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default CTA;