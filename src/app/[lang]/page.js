import { Contact } from "@/components/Contact/Contact";
import { HeroSection } from "@/components/Hero/HeroSection";
import { PriceTable } from "@/components/PriceTable/PriceTable";
import { Section } from "@/components/Section/Section";
import { ServiceTile } from "@/components/ServiceTile/ServiceTile";
import { SocialBanner } from "@/components/SocialBanner/SocialBanner";
import { useTranslation } from "../i18n";
import CoursesHomeSection from "@/components/CoursesHomeSection/CoursesHomeSection";

export default async function Home({params: { lang }}) {
  const { t } = await useTranslation(lang, "translation");
  return (
    <>
      <HeroSection
        h1MobileTitle="In </br> Brows"
        className="main-page"
        h1Title="What is Lorem Ipsum?"
        description="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
        h2Title="Cześć!"
      />
      <Section>
          <CoursesHomeSection t={t}/>
      </Section>
      <SocialBanner />
      <Section title="Usługi" id="services">
        <div className="lg:flex service-wrapper">
          <ServiceTile
            title={t("brows")}
            path={`${lang}/services#brows`}
            styleClass="brows"
          />
          <ServiceTile
            title="Rzęsy"
            path={`${lang}/services#lashes`}
            styleClass="eyelashes"
          />
          <ServiceTile
            title="Pmu"
            path={`${lang}/services#pmu`}
            styleClass="pmu"
          />
        </div>
      </Section>

      <Section title="Cennik" id="price">
        <PriceTable />
      </Section>

      <Section title="Kontakt" id="contact">
        <Contact />
      </Section>
    </>
  );
}
