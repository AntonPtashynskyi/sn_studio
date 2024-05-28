import { Contact } from "@/components/Contact/Contact";
import { HeroSection } from "@/components/Hero/HeroSection";
import { PriceTable } from "@/components/PriceTable/PriceTable";
import { Section } from "@/components/Section/Section";
import { ServiceTile } from "@/components/ServiceTile/ServiceTile";
import { SocialBanner } from "@/components/SocialBanner/SocialBanner";
import { useTranslation } from "../i18n";
import CoursesHomeSection from "@/components/CoursesHomeSection/CoursesHomeSection";

export default async function Home({ params }) {
  const {lang} = params;
  const { t } = await useTranslation(lang, "common");

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
        <div>
          Odkryj pełną gamę usług laminacji, stylizacji brwi i rzęs, a także
          permanentnego makijażu brwi i ust na naszej platformie. Zanurz się w
          świecie piękna i elegancji, korzystając z naszych profesjonalnych
          usług, które podkreślą Twoje naturalne piękno. Ponadto, oferujemy
          kursy, które umożliwią Ci opanowanie tych technik, abyś mógł/a w pełni
          wykorzystać swój talent. Dołącz do naszej społeczności i odkryj, jak
          możemy pomóc Ci osiągnąć pożądane efekty!
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
