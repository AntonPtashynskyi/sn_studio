import React from "react";
import { HeroSection } from "@/components/Hero/HeroSection";
import { Contact } from "@/components/Contact/Contact";
import { Section } from "@/components/Section/Section";
import { FAQBrows } from "@/components/FAQ/FAQ_brows";
import AccordionSchedule from "@/components/AccordionSchedule/AccordionSchedule";
import AccordionContentTheory from "@/components/BrowsCorsesDescription/AccordionContentTheory/AccordionContentTheory";
import { useTranslation } from "@/app/i18n";

const BrowsPage = async ({params: { lang }}) => {
  const { t } = await useTranslation(lang, "translation");

  return (
    <>
      <HeroSection
        className="brows_page"
        h1MobileTitle="Training for you"
        h1Title="Szkolenia"
        description="Najlepszę szkolenie"
        h2Title="Szkolenia!"
      />
      <Section id="brows_courses_theory">
        <h2 className="uppercase mb-6 md:mb-10 text-4xl text-[#888888]">Twój program szkoleniowy</h2>
        <AccordionSchedule positionNumber="1" title="część teoretyczna" description="Czas trwania - 3h">
          <AccordionContentTheory t={t}/>
        </AccordionSchedule>
        <AccordionSchedule positionNumber="2" title="część praktyczna" description="Czas trwania - 8h">
          <AccordionContentTheory t={t}/>
        </AccordionSchedule>
      </Section>
      <Section id="brows_faq" className="faq-section" >
        <h2 className="uppercase mb-6 md:mb-10 text-4xl text-[#888888]">Najczęściej zadawane pytania</h2>
        <FAQBrows t={t} />
      </Section>
      <Section title="Contact">
        <Contact />
      </Section>
    </>
  );
};

export default BrowsPage;
