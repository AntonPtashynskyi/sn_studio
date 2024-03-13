import React from "react";
import { HeroSection } from "@/components/Hero/HeroSection";
import { ServiceDescription } from "@/components/ServiceDescription/ServiceDescription";
import { Contact } from "@/components/Contact/Contact";
import { Section } from "@/components/Section/Section";

import "./browsPage.scss";

import styledBrows from "../../../../public/assets/images/services/brows_style.jpg";
import laminationBrows from "../../../../public/assets/images/services/brows_lamination.jpg";
import regulationBrows from "../../../../public/assets/images/services/brows_paint.jpg";
import styledEyelashes from "../../../../public/assets/images/services/eyelashes_lamination.jpg";
import pmuBrows from "../../../../public/assets/images/services/brows_pmu.jpg";
import pmuLips from "../../../../public/assets/images/services/lips_pmu.jpg";

const ServicesPage = ({params: {lang}}) => {

  return (
    <>
      <HeroSection
        className="brows_page"
        title="Brows"
        h1Title="Najlepsze brwi"
        description="Jak zdobyć najkepszy kształt"
        h2Title="Brwi!"
      />
      <div className="content-block">
        <ServiceDescription
          title="Stylizacja </br><span>brwi</span>"
          key="1"
          imageSrc={styledBrows}
          copyOne="Stylizacja brwi to delikatny zabieg, który pomaga odkryć twój indywidualny kształt i subtelnie podkreślić naturalne piękno."
          copyTwo="<li>Indywidualny dobór kształtu brwi do urody klienta.</li>
        <li>Regulację brwi pęsetą i woskiem.</li>
        <li>Koloryzację brwi farbką lub henną pudrową.</li>"
          price="70 zł"
          time="30-60min"
          id="brows"
        />
        <ServiceDescription
          title="Laminacja </br><span>brwi</span>"
          key="2"
          imageSrc={laminationBrows}
          copyOne="Laminacja brwi - to zabieg kosmetyczny mający na celu podkreślenie i ukształtowanie brwi. Podczas tego zabiegu brwi są modelowane, aby uzyskać pożądany kształt i wygląd"
          copyTwo="<li>Wymodelowanie i ukształtowanie włosków za pomocą specjalnych preparatów.</li>
        <li>Indywidualny dobór kształtu brwi, harmonijnie dostosowany do urody klienta.</li>
        <li>Precyzyjną regulację brwi pęsetą i woskiem.</li>
        <li>Koloryzację brwi farbką</li>
        <li>Odżywienie włosków za pomocą botoksu, aby podkreślić zdrowy wygląd.</li>"
          price="130 zł"
          time="60-90min"
        />
        <ServiceDescription
          title="Regulacja </br><span>brwi</span>"
          key="3"
          imageSrc={regulationBrows}
          copyOne="Regulacja brwi to proces kształtowania i porządkowania brwi za pomocą różnych technik, takich jak usuwanie nadmiaru włosków pęsetą, woskiem czy nitką. Celem regulacji brwi jest nadanie im ładnego kształtu, dostosowanego do indywidualnych cech twarzy, co może znacznie poprawić wygląd i wyrażenie spojrzenia."
          price="30 zł"
          time="15-30min"
        />
        <ServiceDescription
          title="Stylizacja </br><span>rzęs</span>"
          key="4"
          imageSrc={styledEyelashes}
          copyOne="Laminacja rzęs to zabieg kosmetyczny, celem którego jest podkreślenie naturalnego piękna rzęs poprzez podkręcenie i uniesienie ich od nasady za pomocą specjalnych wałków i preparatów. W rezultacie uzyskujemy uniesione i podkręcone naturalne rzęsy, efekt utrzymuje się nawet do 2 miesięcy."
          copyTwo="<li>Dobór odpowiedniego skrętu rzęs.</li>
        <li> Koloryzacje rzęs</li>
        <li>Odżywienie rzęs za pomocą botoksu</li>"
          price="140 zł"
          time="60-90min"
          id="lashes"
        />
        <ServiceDescription
          title="Makijaż permanentny </br><span>brwi</span>"
          key="5"
          imageSrc={pmuBrows}
          copyOne="Zabieg makijażu permanentnego brwi, znany także jako mikropigmentacja brwi, to procedura, w której pigment jest wprowadzany pod skórę w celu trwałego podkreślenia kształtu i koloru brwi. Poprzez precyzyjne umieszczanie pigmentu, osiąga się efekt trwającego makijażu brwi, eliminując konieczność codziennego ręcznego ich rysowania czy wypełniania. To rozwiązanie może być szczególnie atrakcyjne dla osób pragnących oszczędzić czas na codziennym makijażu brwi."
          price="700 zł"
          time="120-160min"
          id="pmu"
        />
        <ServiceDescription
          title="Makijaż permanentny </br><span>ust</span>"
          key="6"
          imageSrc={pmuLips}
          copyOne="Makijaż permanentny ust, znany również jako mikropigmentacja ust, to innowacyjny zabieg, w którym pigment jest wprowadzany pod skórę, trwale podkreślając kontur i kolor ust. Ten zabieg może poprawić symetrię ust, nadać im pełniejszy wygląd lub po prostu podkreślić naturalny kształt. Dzięki makijażowi permanentnemu ust możesz cieszyć się trwałym efektem, eliminując konieczność częstego nakładania szminki czy konturówki. Przed przystąpieniem do zabiegu zawsze warto skonsultować się z doświadczonym specjalistą, aby uzyskać efekt dostosowany do Twoich indywidualnych preferencji."
          price="600 zł"
          time="120-160min"
        />
      </div>
      <Section title="Contact">
        <Contact />
      </Section>
    </>
  );
};

export default ServicesPage;
