import React from "react";
import { Contact } from "@/components/Contact/Contact";
import { HeroSection } from "@/components/Hero/HeroSection";
import { Section } from "@/components/Section/Section";
import { SectionLinks } from "@/components/SectionLinks/SectionLinks";
import { ServiceDescription } from "@/components/ServiceDescription/ServiceDescription";

import styledEyelashes from "../../../public/assets/images/services/eyelashes_lamination.jpg";
import eyelashes from "../../../public/assets/images/hero/hero--eyelashes.jpg";

const links = [
  {
    key: 1,
    path: "eyebrows-styling",
    name: "Brows",
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

const EyelashesPage = () => {
  return (
    <>
      <HeroSection
        className="eyelashes_page"
        title="Rzęsy"
        bgImage={eyelashes}
        h1Title="Natrualne rzęsy właśnie to czego szukasz!"
        description="Jak najlepiew dbać i jakie zabiegi warto robić"
        h2Title="Rzęsy!"
      />
      <div className="content-block">
        <ServiceDescription
          title="Stylizacja </br><span>rzęs</span>"
          key="1"
          imageSrc={styledEyelashes}
          positionNumber="01"
          copyOne="Laminacja rzęs to zabieg kosmetyczny, celem którego jest podkreślenie naturalnego piękna rzęs poprzez podkręcenie i uniesienie ich od nasady za pomocą specjalnych wałków i preparatów. W rezultacie uzyskujemy uniesione i podkręcone naturalne rzęsy, efekt utrzymuje się nawet do 2 miesięcy."
          copyTwo="<li>Dobór odpowiedniego skrętu rzęs.</li>
        <li> Koloryzacje rzęs</li>
        <li>Odżywienie rzęs za pomocą botoksu</li>"
          price="140 zł"
          time="60-90min"
        />
        <SectionLinks urlsArray={links} />
      </div>
      <Section title="Contact">
        <Contact />
      </Section>
    </>
  );
};

export default EyelashesPage;
