import { HeroSection } from "@/components/Hero/HeroSection";
import { ServiceDescription } from "@/components/ServiceDescription/ServiceDescription";
import React from "react";

import pmuBrows from "../../../public/assets/images/services/brows_pmu.jpg";
import pmuLips from "../../../public/assets/images/services/lips_pmu.jpg";
import { SectionLinks } from "@/components/SectionLinks/SectionLinks";
import { Section } from "@/components/Section/Section";
import { Contact } from "@/components/Contact/Contact";

const links = [
  {
    key: 1,
    path: "eyelashes-styling",
    name: "Rzęsy",
  },
  {
    key: 2,
    path: "eyebrows-styling",
    name: "Brows",
  },
  {
    key: 3,
    path: "courses",
    name: "Szkolenia",
  },
];

const PmuPage = () => {
  return (
    <>
      <HeroSection className="permanent_page" title="Makijaż permanentny" />
      <ServiceDescription
        title="Makijaż permanentny </br><span>brwi</span>"
        key="1"
        imageSrc={pmuBrows}
        positionNumber="01"
        copyOne="Zabieg makijażu permanentnego brwi, znany także jako mikropigmentacja brwi, to procedura, w której pigment jest wprowadzany pod skórę w celu trwałego podkreślenia kształtu i koloru brwi. Poprzez precyzyjne umieszczanie pigmentu, osiąga się efekt trwającego makijażu brwi, eliminując konieczność codziennego ręcznego ich rysowania czy wypełniania. To rozwiązanie może być szczególnie atrakcyjne dla osób pragnących oszczędzić czas na codziennym makijażu brwi."
        price="700 zł"
        time="120-160min"
      />
      <ServiceDescription
        title="Makijaż permanentny </br><span>ust</span>"
        key="2"
        imageSrc={pmuLips}
        positionNumber="02"
        copyOne="Makijaż permanentny ust, znany również jako mikropigmentacja ust, to innowacyjny zabieg, w którym pigment jest wprowadzany pod skórę, trwale podkreślając kontur i kolor ust. Ten zabieg może poprawić symetrię ust, nadać im pełniejszy wygląd lub po prostu podkreślić naturalny kształt. Dzięki makijażowi permanentnemu ust możesz cieszyć się trwałym efektem, eliminując konieczność częstego nakładania szminki czy konturówki. Przed przystąpieniem do zabiegu zawsze warto skonsultować się z doświadczonym specjalistą, aby uzyskać efekt dostosowany do Twoich indywidualnych preferencji."
        price="600 zł"
        time="120-160min"
      />
      <SectionLinks urlsArray={links} />
      <Section title="Contact">
        <Contact />
      </Section>
    </>
  );
};

export default PmuPage;
