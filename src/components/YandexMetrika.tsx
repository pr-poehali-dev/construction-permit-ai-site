import { useEffect } from 'react';

declare global {
  interface Window {
    ym: any;
  }
}

const YandexMetrika = () => {
  useEffect(() => {
    // Проверяем, что счетчик еще не установлен
    if (window.ym) return;

    // Создаем скрипт Яндекс.Метрики
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = 'https://mc.yandex.ru/metrika/tag.js';
    
    script.onload = () => {
      // Инициализируем счетчик после загрузки скрипта
      (function(m: any, e: any, t: any, r: any, i: any, k: any, a: any) {
        m[i] = m[i] || function() {
          (m[i].a = m[i].a || []).push(arguments);
        };
        m[i].l = 1 * new Date();
        for (let j = 0; j < document.scripts.length; j++) {
          if (document.scripts[j].src === r) { return; }
        }
        k = e.createElement(t);
        a = e.getElementsByTagName(t)[0];
        k.async = 1;
        k.src = r;
        a.parentNode.insertBefore(k, a);
      })(window, document, 'script', 'https://mc.yandex.ru/metrika/tag.js', 'ym');

      // Инициализируем с настройками
      window.ym(104309066, 'init', {
        ssr: true,
        webvisor: true,
        clickmap: true,
        ecommerce: "dataLayer",
        accurateTrackBounce: true,
        trackLinks: true
      });
    };

    document.head.appendChild(script);

    // Добавляем noscript элемент для пользователей без JavaScript
    const noscript = document.createElement('noscript');
    const img = document.createElement('img');
    img.src = 'https://mc.yandex.ru/watch/104309066';
    img.style.position = 'absolute';
    img.style.left = '-9999px';
    img.alt = '';
    noscript.appendChild(img);
    document.body.appendChild(noscript);

    // Cleanup функция
    return () => {
      // Удаляем скрипт при размонтировании компонента
      const existingScript = document.querySelector('script[src*="mc.yandex.ru/metrika/tag.js"]');
      if (existingScript) {
        existingScript.remove();
      }
      
      const existingNoscript = document.querySelector('noscript img[src*="mc.yandex.ru/watch"]');
      if (existingNoscript?.parentElement) {
        existingNoscript.parentElement.remove();
      }
    };
  }, []);

  return null; // Компонент не рендерит никакого UI
};

export default YandexMetrika;