import React from "react";
import { useTranslation } from "@/app/i18n";

import { HeroSection } from "@/components/Hero/HeroSection";
import { Contact } from "@/components/Contact/Contact";
import { Section } from "@/components/Section/Section";
import { FAQBrows } from "@/components/FAQ/FAQ_brows";
import AccordionSchedule from "@/components/AccordionSchedule/AccordionSchedule";
import AccordionContentTheory from "@/components/BrowsCorsesDescription/AccordionContentTheory/AccordionContentTheory";
import TrainingAdvantageList from "@/components/TrainingAdvantage/TrainingAdvantageList";
import TrainingAdvantage from "@/components/TrainingAdvantage/TrainingAdvantage";

import mainImage from "../../../../public/assets/images/courses/course_1.jpg";
import TrainingCarousel from "@/components/TrainingCarousel/TrainingCarousel";

const BrowsPage = async ({ params: { lang } }) => {
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
        <h2 className="uppercase mb-6 md:mb-10 text-4xl text-[#888888]">
          Twój program szkoleniowy
        </h2>
        <AccordionSchedule
          positionNumber="1"
          title="część teoretyczna"
          description="Czas trwania - 3h"
        >
          <AccordionContentTheory t={t} />
        </AccordionSchedule>
        <AccordionSchedule
          positionNumber="2"
          title="część praktyczna"
          description="Czas trwania - 8h"
        >
          <AccordionContentTheory t={t} />
        </AccordionSchedule>
        <AccordionSchedule
          positionNumber="3"
          title="Cena"
          description="3000 PLN"
          isInteractive={false}
        ></AccordionSchedule>
      </Section>
      <Section id="brows_advatage" className="brow-advantage-section">
        <h2 className="uppercase mb-6 md:mb-10 text-4xl text-[#888888]">
          Dlaczego musisz obrać mnie?
        </h2>
        <TrainingAdvantageList>
          <TrainingAdvantage
            imagePath={mainImage}
            imageTitle="Szkolenia"
            stepTitle="1. Materiały szkoleniowe"
            stepDescription="40 stron materiałów szkoleniowych, zawierających najważniejsze wskazówki, jak osiągnąć najlepsze rezultaty."
          />
          <TrainingAdvantage
            imagePath={mainImage}
            imageTitle="Szkolenia"
            stepTitle="2. Praca na najleposzy marriałach"
            stepDescription="Nauczysz się pracować z najlepszymi preparatami Inley i Elan."
          />
          <TrainingAdvantage
            imagePath={mainImage}
            imageTitle="Szkolenia"
            stepTitle="3. Praktyczne zastosowanie wiedzy"
            stepDescription="Jedną z modelek pokażę osobiście, a następnie przeprowadzimy praktyczne zastosowanie wiedzy na dwóch modelkach."
          />
          <TrainingAdvantage
            imagePath={mainImage}
            imageTitle="Szkolenia"
            stepTitle="4. Certyfikat oraz wsparcie"
            stepDescription="Każda kursantka otrzyma certyfikat ukończenia kursu z laminacji brwi oraz wsparcie na całe życie w dalszym rozwoju."
          />
        </TrainingAdvantageList>
      </Section>
      <Section>
        <TrainingCarousel />
      </Section>
      <Section id="brows_faq" className="faq-section">
        <h2 className="uppercase mb-6 md:mb-10 text-4xl text-[#888888]">
          Najczęściej zadawane pytania
        </h2>
        <FAQBrows t={t} />
      </Section>
    </>
  );
};

export default BrowsPage;
