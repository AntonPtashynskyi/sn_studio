import React from "react";
import "./faq.scss";
import { AccordionBlock } from "./AccordionBlock";

export const FAQ_services = ({ t }) => {
  return (
    <div className="container">
      <AccordionBlock
        title="Co to jest laminacja brwi?"
        copy="Laminacja brwi to zabieg polegający na trwałym ułożeniu włosków brwi w określonym kierunku, dzięki czemu brwi stają się bardziej pełne, symetryczne i zadbane. Efekt utrzymuje się przez kilka tygodni."
      />
      <AccordionBlock
        title="Jak długo utrzymuje się efekt laminacji brwi?"
        copy="Efekt laminacji brwi utrzymuje się zazwyczaj od 4 do 6 tygodni, w zależności od indywidualnych cech włosków oraz pielęgnacji po zabiegu."
      />
      <AccordionBlock
        title="Czy laminacja brwi jest bezpieczna?"
        copy="Tak, laminacja brwi jest bezpieczna, pod warunkiem że jest wykonywana przez wykwalifikowanego specjalistę i przy użyciu odpowiednich produktów."
      />
      <AccordionBlock
        title="Czy laminacja brwi jest bolesna?"
        copy="Nie, laminacja brwi jest bezbolesna. Może wystąpić jedynie delikatne uczucie dyskomfortu podczas aplikacji produktów na brwi."
      />
      <AccordionBlock
        title="Jak przygotować się do zabiegu laminacji brwi?"
        copy="Przed zabiegiem należy unikać stosowania silnych kosmetyków i peelingów na brwi. Ważne jest również, aby brwi były czyste i pozbawione makijażu."
      />
      <AccordionBlock
        title="Czy mogę stosować makijaż po laminacji brwi?"
        copy="Tak, można stosować makijaż po laminacji brwi, ale zaleca się odczekać co najmniej 24 godziny po zabiegu, aby efekty były trwałe i niezakłócone."
      />
      <AccordionBlock
        title="Czy laminacja brwi jest odpowiednia dla każdego?"
        copy="Laminacja brwi jest odpowiednia dla większości osób, ale nie jest zalecana dla osób z bardzo delikatnymi, rzadkimi lub uszkodzonymi włoskami. Konsultacja z profesjonalistą przed zabiegiem pomoże ocenić, czy jest to odpowiednia opcja."
      />
      <AccordionBlock
        title="Jak pielęgnować brwi po laminacji?"
        copy="Po zabiegu należy unikać moczenia brwi przez 24 godziny, a także unikać gorących kąpieli, sauny i intensywnego wysiłku fizycznego. Ważne jest również stosowanie odżywek i olejków, które pomogą utrzymać zdrowe włoski."
      />
      <AccordionBlock
        title="Czy laminacja brwi może uszkodzić naturalne włoski?"
        copy="Prawidłowo przeprowadzony zabieg laminacji brwi nie powinien uszkodzić naturalnych włosków. Kluczowe jest, aby zabieg wykonywał wykwalifikowany specjalista z użyciem profesjonalnych produktów."
      />
      <AccordionBlock
        title="Jak często można wykonywać laminację brwi?"
        copy="Zaleca się, aby zabieg laminacji brwi wykonywać nie częściej niż co 6-8 tygodni, aby dać włoskom czas na regenerację i zachowanie zdrowego wyglądu."
      />
      <AccordionBlock
        title="Jak często można farbować brwi farbką lub henną?"
        copy="Brwi można farbować farbką lub henną co 3-6 tygodni. Częstotliwość zależy od tempa wzrostu włosków oraz indywidualnych potrzeb i preferencji. Farbowanie brwi zbyt często może prowadzić do ich osłabienia, dlatego ważne jest, aby dać włoskom czas na regenerację między zabiegami."
      />
      <AccordionBlock
        title="Jak długo utrzymują się permanentne brwi?"
        copy="Efekt permanentnych brwi utrzymuje się zazwyczaj od 1 do 2 lat, w zależności od rodzaju skóry, stylu życia i stosowanej pielęgnacji. Kolor może stopniowo blaknąć i wymagać korekty."
      />
      <AccordionBlock
        title="Czy zabieg jest bolesny?"
        copy="Większość osób odczuwa tylko niewielki dyskomfort podczas zabiegu, który jest zazwyczaj minimalizowany przez zastosowanie kremu znieczulającego."
      />
      <AccordionBlock
        title="Jak długo trwa zabieg?"
        copy="Zabieg trwa zazwyczaj od 2 do 3 godzin, w zależności od techniki i skomplikowania kształtu brwi."
      />
      <AccordionBlock
        title="Jak wygląda proces gojenia?"
        copy="Proces gojenia trwa około 10-20 dni. Przez pierwsze kilka dni brwi mogą być ciemniejsze, a następnie kolor stopniowo się zmniejsza. Ważne jest, aby unikać drapania i moczenia brwi oraz stosować się do zaleceń dotyczących pielęgnacji po zabiegu."
      />
      <AccordionBlock
        title="Jak należy pielęgnować brwi po zabiegu?"
        copy="Po zabiegu należy unikać moczenia brwi, nadmiernego pocenia się, ekspozycji na słońce, sauny i solarium przez około tydzień. Stosowanie zalecanych maści przyspiesza gojenie i chroni pigment."
      />
      <AccordionBlock
        title="Czy można usunąć permanentne brwi, jeśli nie jestem zadowolona z efektu?"
        copy="Tak, permanentne brwi można usunąć za pomocą specjalistycznych zabiegów laserowych lub innych metod usuwania makijażu permanentnego."
      />
    </div>
  );
};
