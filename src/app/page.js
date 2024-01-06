import { Contact } from "@/components/Contact/Contact";
import { CourseTile } from "@/components/CourseTile/CourseTile";
import { Courses } from "@/components/Courses/Courses";
import { HeroSection } from "@/components/Hero/HeroSection";
import { PriceTable } from "@/components/PriceTable/PriceTable";
import { Section } from "@/components/Section/Section";
import { ServiceTile } from "@/components/ServiceTile/ServiceTile";

export default function Home() {
  return (
    <>
      <HeroSection
        title="In </br> Brows"
        className="main-page"
        h1Title="What is Lorem Ipsum?
"
        description="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
        h2Title="Cześć!"
      />

      <section className="py-[4rem] lg:py-[10rem] container wrapper">
        <h2 className="text-bigNumber text-8xl uppercase font-medium">Szkolenia</h2>
        <p className="max-w-[80%] text-2xl font-light">
          Wybierz szkolenie dla Siebie i zmień swoją zawodową karierę.
          <br/>
          Skontaktuj się ze mną w celu umuwiena się na <a href="" className="text-[#EDC385] font-semibold">bezpłatną konsultację</a>
        </p>
        <div className="course-tile-container">
           <CourseTile time="10h ~" title="Laminacja brwi" description="Program  szkoleniowy z laminacji brwi w którym się dowiesz jak poprawnie robuić laminacje"/>
          <CourseTile time="10h ~" title="Laminacja brwi" description="Program  szkoleniowy z laminacji brwi w którym się dowiesz jak poprawnie robuić laminacje"/>
          <CourseTile time="10h ~" title="Laminacja brwi" description="Program  szkoleniowy z laminacji brwi w którym się dowiesz jak poprawnie robuić laminacje"/> 
        </div>
      </section>

      <Section title="Usługi" id="services" className="decorative-right">
        <div className="lg:flex wrapper service-wrapper">
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
        </div>
      </Section>
      <Section title="Cennik" id="price" className="decorative-left">
        <PriceTable />
      </Section>
      <Section title="Szkolenia">
        <Courses />
      </Section>
      <Section title="Kontakt" id="contact" className="decorative-button">
        <Contact />
      </Section>
    </>
  );
}
