import { Helmet } from "react-helmet-async";

const WebSiteStructuredData = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Центр строительных разрешений",
    "url": "https://xn----8sbahgaasxkl7arw.xn--p1ai",
    "description": "Оформление разрешений на строительство и ввод в эксплуатацию по всей России с 2004 года",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://xn----8sbahgaasxkl7arw.xn--p1ai/?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Центр строительных разрешений",
      "telephone": "+7 (952) 147-46-03",
      "email": "k.karpp@mail.ru"
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default WebSiteStructuredData;
