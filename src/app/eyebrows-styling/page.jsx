import React from "react";
import { HeroSection } from "@/components/Hero/HeroSection";
import { ServiceDescription } from "@/components/ServiceDescription/ServiceDescription";
import { Contact } from "@/components/Contact/Contact";
import { Section } from "@/components/Section/Section";
import { SectionLinks } from "@/components/SectionLinks/SectionLinks";

import "./browsPage.scss";

import styledBrows from "../../../public/assets/images/services/brows_style.jpg";
import laminationBrows from "../../../public/assets/images/services/brows_lamination.jpg";
import regulationBrows from "../../../public/assets/images/services/brows_paint.jpg";
import heroBrows from "../../../public/assets/images/hero/hero--brows.jpg";

const links = [
  {
    key: 1,
    path: "eyelashes-styling",
    name: "Rzęsy",
  },
  {
    key: 2,
    path: "permanent-makeup",
    name: "PMU",
  },
  {
    key: 3,
    path: "courses",
    name: "Szkolenia",
  },
];

const BrowsPage = () => {
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
          positionNumber="01"
          copyOne="Stylizacja brwi to delikatny zabieg, który pomaga odkryć twój indywidualny kształt i subtelnie podkreślić naturalne piękno."
          copyTwo="<li>Indywidualny dobór kształtu brwi do urody klienta.</li>
        <li>Regulację brwi pęsetą i woskiem.</li>
        <li>Koloryzację brwi farbką lub henną pudrową.</li>"
          price="70 zł"
          time="30-60min"
        />
        <ServiceDescription
          title="Laminacja </br><span>brwi</span>"
          key="2"
          imageSrc={laminationBrows}
          positionNumber="02"
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
          positionNumber="03"
          copyOne="Regulacja brwi to proces kształtowania i porządkowania brwi za pomocą różnych technik, takich jak usuwanie nadmiaru włosków pęsetą, woskiem czy nitką. Celem regulacji brwi jest nadanie im ładnego kształtu, dostosowanego do indywidualnych cech twarzy, co może znacznie poprawić wygląd i wyrażenie spojrzenia."
          price="30 zł"
          time="15-30min"
        />
      </div>
      <SectionLinks urlsArray={links} />
      <Section title="Contact">
        <Contact />
      </Section>
    </>
  );
};

export default BrowsPage;
