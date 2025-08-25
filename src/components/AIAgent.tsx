import React, { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon';

export default function AIAgent() {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Плавающая кнопка ИИ-агента */}
      <div className="fixed bottom-6 right-6 z-50">
        {!isOpen && (
          <button
            onClick={toggleChat}
            className="bg-primary hover:bg-primary/90 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 animate-bounce"
            aria-label="Открыть чат с консультантом"
          >
            <Icon name="MessageSquare" size={24} />
          </button>
        )}
      </div>

      {/* Модальное окно чата */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-end md:items-center justify-center p-4">
          <div className="bg-white rounded-t-2xl md:rounded-2xl w-full max-w-md h-[80vh] md:h-[600px] flex flex-col">
            {/* Заголовок чата */}
            <div className="flex items-center justify-between p-4 border-b bg-primary text-white rounded-t-2xl md:rounded-t-2xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Icon name="Bot" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold">ИИ-консультант</h3>
                  <p className="text-sm text-white/80">Онлайн</p>
                </div>
              </div>
              <button
                onClick={toggleChat}
                className="text-white/80 hover:text-white transition-colors"
              >
                <Icon name="X" size={20} />
              </button>
            </div>

            {/* Область чата */}
            <div className="flex-1 p-4">
              <div className="h-full">
                <iframe
                  allow="microphone;autoplay"
                  style={{
                    width: '100%',
                    height: '100%',
                    border: 'none',
                    borderRadius: '8px'
                  }}
                  src="https://functions.pro-talk.ru/api/v1.0/chatgpt_widget_dialog_api?record_id=recnmE0ZxDcfwmU79&promt_id=33617&lang=ru&fullscreen=0&voice=1&file=1&circle=1"
                  title="ИИ-консультант по строительным разрешениям"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Информационная подсказка */}
      {isVisible && !isOpen && (
        <div className="fixed bottom-28 right-6 z-40">
          <div className="bg-white rounded-lg shadow-lg p-4 max-w-xs border animate-fade-in">
            <div className="flex items-center gap-3 mb-2">
              <Icon name="Sparkles" size={16} className="text-accent" />
              <span className="font-medium text-primary">Спросите ИИ-консультанта</span>
            </div>
            <p className="text-sm text-secondary">
              Получите мгновенный ответ на вопросы о строительных разрешениях
            </p>
            <div className="absolute -bottom-2 right-8 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white"></div>
          </div>
        </div>
      )}
    </>
  );
}