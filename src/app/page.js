import { Contact } from "@/components/Contact/Contact";
import { Courses } from "@/components/Courses/Courses";
import { Hero } from "@/components/Hero/Hero";
import { PriceTable } from "@/components/PriceTable/PriceTable";
import { Section } from "@/components/Section/Section";
import { ServiceTile } from "@/components/ServiceTile/ServiceTile";

export default function Home() {
  return (
    <>
      <Hero />
      <Section title="Usługi">
        <ServiceTile title="Brwi" number="01" path="brwi" styleClass="brows" />
        <ServiceTile
          title="Rzęsy"
          number="02"
          path="eyelashes"
          styleClass="eyelashes"
        />
        <ServiceTile title="Pmu" number="03" path="pmu" styleClass="pmu" />
      </Section>
      <Section title="Cennik">
        <PriceTable />
      </Section>
      <Section title="Szkolenia">
        <Courses />
      </Section>
      <Section title="Contact">
        <Contact />
      </Section>
    </>
  );
}
