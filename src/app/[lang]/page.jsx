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
import { getMetadata } from "../actions";

export async function generateMetadata({ params }) {
  const { lang } = params;
  const metaData = await getMetadata(lang);
 
  return {
    title: metaData.title,
    description: metaData.description,
    keywords: metaData.keywords,
  }
}

export default async function Home({ params }) {
  const {lang} = params;
  const { t } = await useTranslation(lang, "common");

  return (
    <>
      <HeroSection
        h1MobileTitle="In </br> Brows"
        mobileSubtitle={t("Studio")}
        className="main-page"
        description={t("Do you want to enhance your natural beauty or learn to do it professionally? Contact me today!")}
        h2Title="Cześć!"
        CTAText={t("Make an appointment!")}
        lang={lang}
      />
      <Section  title={t("About me")} id="about-me">
        <div className="flex flex-col md:flex-row items-center gap-10">
        <Image
            src={aboutMe}
            width={300}
            height={300}
            alt={t("Inna Snisar")}
          />
          <p className="relative text-lg md:text-2xl font-light bg-darkBgColor text-black p-6 rounded-lg after:w-7 after:h-7 after:bg-darkBgColor after:rotate-45 after:rounded-md after:-top-3 after:left-1/2  md:after:top-[15%] md:after:-left-3 after:-translate-x-1/2 md:after:-translate-x-0 after:absolute after:block">
            {t("Hi, my name is")} <span className="font-medium">{t("Inna Snisar")}</span> {t("I am an experienced eyebrow and eyelash stylist, specializing in creating natural, harmonious effects that highlight each client's individual beauty. I also conduct professional training for students from Poland and abroad, sharing my knowledge and passion for styling.")}
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
