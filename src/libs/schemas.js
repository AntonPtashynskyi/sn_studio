const BASE_URL = "https://inbrows.pl";

export function localBusinessSchema(lang) {
  const names = { pl: "InBrows Studio", en: "InBrows Studio", ua: "InBrows Studio", ru: "InBrows Studio" };
  const descriptions = {
    pl: "Profesjonalne studio kosmetyczne we Wrocławiu. Laminacja brwi, stylizacja rzęs, regulacja brwi i makijaż permanentny.",
    en: "Professional beauty studio in Wrocław. Brow lamination, lash styling, eyebrow shaping and permanent makeup.",
    ua: "Професійна студія краси у Вроцлаві. Ламінування брів, стилізація вій, корекція брів та перманентний макіяж.",
    ru: "Профессиональная студия красоты во Вроцлаве. Ламинирование бровей, стилизация ресниц, коррекция бровей и перманентный макияж.",
  };

  return {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    name: names[lang] || names.pl,
    description: descriptions[lang] || descriptions.pl,
    url: `${BASE_URL}/${lang}`,
    logo: `${BASE_URL}/assets/svg/logo--in_brows.svg`,
    image: `${BASE_URL}/opengraph-image.jpg`,
    telephone: "+48794232846",
    email: "snisarinna7@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "ul. Niemczańska 22",
      addressLocality: "Wrocław",
      addressRegion: "Dolnośląskie",
      postalCode: "52-131",
      addressCountry: "PL",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 51.07601158716394,
      longitude: 17.03834648611571,
    },
    sameAs: ["https://www.instagram.com/in_brows__/"],
    openingHoursSpecification: [],
    priceRange: "60–900 PLN",
    currenciesAccepted: "PLN",
    paymentAccepted: "Cash, Credit Card",
    areaServed: {
      "@type": "City",
      name: "Wrocław",
    },
  };
}

export function faqPageSchema(faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer,
      },
    })),
  };
}

export function courseSchema({ lang, name, description, price, currency = "PLN", slug }) {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name,
    description,
    url: `${BASE_URL}/${lang}/${slug}`,
    provider: {
      "@type": "Organization",
      name: "InBrows Studio",
      url: `${BASE_URL}/${lang}`,
    },
    offers: {
      "@type": "Offer",
      price,
      priceCurrency: currency,
      availability: "https://schema.org/InStock",
      url: "https://dikidi.net/1788548",
    },
    inLanguage: lang === "ua" ? "uk" : lang,
    educationalLevel: "Beginner",
    teaches: name,
    locationCreated: {
      "@type": "Place",
      name: "InBrows Studio, Wrocław",
    },
  };
}

export const FAQ_PL = [
  { question: "Co to jest laminacja brwi?", answer: "Laminacja brwi to zabieg polegający na trwałym ułożeniu włosków brwi w określonym kierunku, dzięki czemu brwi stają się bardziej pełne, symetryczne i zadbane. Efekt utrzymuje się przez kilka tygodni." },
  { question: "Jak długo utrzymuje się efekt laminacji brwi?", answer: "Efekt laminacji brwi utrzymuje się zazwyczaj od 4 do 6 tygodni, w zależności od indywidualnych cech włosków oraz pielęgnacji po zabiegu." },
  { question: "Czy laminacja brwi jest bezpieczna?", answer: "Tak, laminacja brwi jest bezpieczna, pod warunkiem że jest wykonywana przez wykwalifikowanego specjalistę i przy użyciu odpowiednich produktów." },
  { question: "Jak przygotować się do zabiegu laminacji brwi?", answer: "Przed zabiegiem należy unikać stosowania silnych kosmetyków i peelingów na brwi. Ważne jest również, aby brwi były czyste i pozbawione makijażu." },
  { question: "Jak długo utrzymują się permanentne brwi?", answer: "Efekt permanentnych brwi utrzymuje się zazwyczaj od 1 do 2 lat, w zależności od rodzaju skóry, stylu życia i stosowanej pielęgnacji." },
  { question: "Jak często można wykonywać laminację brwi?", answer: "Zaleca się, aby zabieg laminacji brwi wykonywać nie częściej niż co 6–8 tygodni, aby dać włoskom czas na regenerację." },
];

export const FAQ_EN = [
  { question: "What is eyebrow lamination?", answer: "Eyebrow lamination is a procedure that involves permanently setting the eyebrow hairs in a specific direction, making the brows appear fuller, more symmetrical, and well-groomed. The effect lasts for several weeks." },
  { question: "How long does the eyebrow lamination effect last?", answer: "The eyebrow lamination effect usually lasts from 4 to 6 weeks, depending on the individual characteristics of the hairs and post-procedure care." },
  { question: "Is eyebrow lamination safe?", answer: "Yes, eyebrow lamination is safe, provided it is performed by a qualified specialist using appropriate products." },
  { question: "How to prepare for the eyebrow lamination procedure?", answer: "Before the procedure, avoid using strong cosmetics and peels on the eyebrows. It is also important that the eyebrows are clean and free of makeup." },
  { question: "How long do permanent eyebrows last?", answer: "The effect of permanent eyebrows usually lasts from 1 to 2 years, depending on skin type, lifestyle, and care." },
  { question: "How often can eyebrow lamination be performed?", answer: "It is recommended to perform eyebrow lamination no more frequently than every 6-8 weeks to give the hairs time to regenerate." },
];

export const FAQ_UA = [
  { question: "Що таке ламінування брів?", answer: "Ламінування брів – це процедура трвалого укладання волосків брів у певному напрямку. Брови стають більш пишними, симетричними та доглянутими. Ефект тримається кілька тижнів." },
  { question: "Як довго тримається ефект ламінування брів?", answer: "Ефект ламінування брів зазвичай тримається від 4 до 6 тижнів залежно від індивідуальних особливостей волосків та догляду після процедури." },
  { question: "Чи безпечне ламінування брів?", answer: "Так, ламінування брів є безпечним за умови виконання кваліфікованим спеціалістом із застосуванням відповідних засобів." },
  { question: "Як довго тримається перманентний макіяж брів?", answer: "Ефект перманентного макіяжу брів зазвичай тримається від 1 до 2 років залежно від типу шкіри та догляду." },
  { question: "Як часто можна робити ламінування брів?", answer: "Рекомендується робити ламінування брів не частіше ніж кожні 6–8 тижнів, щоб дати волоскам час на відновлення." },
];

export const FAQ_RU = [
  { question: "Что такое ламинирование бровей?", answer: "Ламинирование бровей – это процедура постоянной укладки волосков бровей в определённом направлении. Брови становятся более пышными, симметричными и ухоженными. Эффект держится несколько недель." },
  { question: "Как долго держится эффект ламинирования бровей?", answer: "Эффект ламинирования бровей обычно держится от 4 до 6 недель в зависимости от индивидуальных особенностей волосков и ухода после процедуры." },
  { question: "Безопасно ли ламинирование бровей?", answer: "Да, ламинирование бровей безопасно, если выполняется квалифицированным специалистом с использованием соответствующих средств." },
  { question: "Как долго держится перманентный макияж бровей?", answer: "Эффект перманентного макияжа бровей обычно держится от 1 до 2 лет в зависимости от типа кожи и ухода." },
  { question: "Как часто можно делать ламинирование бровей?", answer: "Рекомендуется делать ламинирование бровей не чаще одного раза в 6–8 недель, чтобы дать волоскам время на восстановление." },
];

export const faqByLang = { pl: FAQ_PL, en: FAQ_EN, ua: FAQ_UA, ru: FAQ_RU };
