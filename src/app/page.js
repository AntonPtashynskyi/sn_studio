import { Contact } from "@/components/Contact/Contact";
import { Courses } from "@/components/Courses/Courses";
import { HeroSection } from "@/components/Hero/HeroSection";
import { PriceTable } from "@/components/PriceTable/PriceTable";
import { Section } from "@/components/Section/Section";
import { ServiceTile } from "@/components/ServiceTile/ServiceTile";

export default function Home() {
  return (
    <>
      <HeroSection title="In </br> Brows" />
      <Section title="Usługi" id="services">
        <ServiceTile
          title="Brwi"
          number="01"
          path="eyebrows-styling"
          styleClass="brows"
        />
        <ServiceTile
          title="Rzęsy"
          number="02"
          path="eyelashes-styling"
          styleClass="eyelashes"
        />
        <ServiceTile
          title="Pmu"
          number="03"
          path="permanent-makeup"
          styleClass="pmu"
        />
      </Section>
      <Section title="Cennik" id="price">
        <PriceTable />
      </Section>
      <Section title="Szkolenia">
        <Courses />
      </Section>
      <Section title="Kontakt" id="contact">
        <Contact />
      </Section>
    </>
  );
}
