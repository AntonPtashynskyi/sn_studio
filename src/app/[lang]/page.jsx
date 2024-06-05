import { Contact } from "@/components/Contact/Contact";
import { HeroSection } from "@/components/Hero/HeroSection";
import { PriceTable } from "@/components/PriceTable/PriceTable";
import { Section } from "@/components/Section/Section";
import { ServiceTile } from "@/components/ServiceTile/ServiceTile";
import { SocialBanner } from "@/components/SocialBanner/SocialBanner";
import { useTranslation } from "../i18n";
import CoursesHomeSection from "@/components/CoursesHomeSection/CoursesHomeSection";
import Image from "next/image";

import aboutMe from "@public/assets/images/main/about-me.png";

export default async function Home({ params }) {
  const {lang} = params;
  const { t } = await useTranslation(lang, "common");

  return (
    <>
      <HeroSection
        h1MobileTitle="In </br> Brows"
        className="main-page"
        description="Chcesz podkreślić swoje naturalne piękno lub nauczyć się tego zawodowo? Skontaktuj się ze mną już dziś!"
        h2Title="Cześć!"
        CTAText="Umów się!"
      />
      <Section  title={t("O mnie")} id="about-me">
        <div className="flex flex-col md:flex-row items-center gap-10">
        <Image
            src={aboutMe}
            width={300}
            height={300}
            alt="Inna"
          />
          <p className="relative text-lg md:text-2xl font-light bg-darkBgColor text-black p-6 rounded-lg after:w-7 after:h-7 after:bg-darkBgColor after:rotate-45 after:rounded-md after:-top-3 after:left-1/2  md:after:top-[15%] md:after:-left-3 after:-translate-x-1/2 md:after:-translate-x-0 after:absolute after:block">
            Hej, nazywam się <span className="font-medium">Inna Snisar</span> Jestem doświadczoną stylistką brwi i rzęs, specjalizującą się w tworzeniu naturalnych, harmonijnych efektów, które podkreślają indywidualne piękno każdej klientki. Prowadzę także profesjonalne szkolenia dla kursantek z Polski i zagranicy, dzieląc się swoją wiedzą i pasją do stylizacji.
          </p>
        </div>
      </Section>
      <Section>
        <CoursesHomeSection t={t} lang={lang} />
      </Section>
      <SocialBanner t={t} />
      <Section title={t("Services")} id="services">
        <div className="lg:flex service-wrapper">
          <ServiceTile
            title={t("Brows")}
            path={`${lang}/services#brows`}
            styleClass="brows"
          />
          <ServiceTile
            title={t("Lashes")}
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

      <Section title={t("Price list")} id="price">
        <PriceTable t={t} />
      </Section>

      <Section title={t("Contact")} id="contact">
        <Contact t={t} />
      </Section>
    </>
  );
}
