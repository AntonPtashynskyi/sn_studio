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
import AccordionContentPractice from "@/components/BrowsCorsesDescription/AccordionContentTheory/AccordionContentPractice";

const BrowsPage = async ({ params: { lang } }) => {
  const { t } = await useTranslation(lang, "translation");

  return (
    <>
      <HeroSection
        className="brows_page"
        h1MobileTitle="Training for you"
        h1Title="Szkolenie Basic Brows"
        description="Indywidualne szkolenie podstawowe ze stylizacji brwi."
        CTAText="Umów się na szkolenie!"
      />
      <Section id="brows_courses_theory">
        <h2 className="uppercase mb-6 md:mb-10 text-4xl text-[#888888]">
          Opis Szkolenia
        </h2>
        <div>
          <p>BASIC BROWS to intensywne, dwudniowe szkolenie podstawowe ze stylizacji brwi, zaprojektowane dla osób pragnących zdobyć kompleksową wiedzę i umiejętności w tej dziedzinie. </p>
          <p>Dzień pierwszy obejmuje 6-godzinną część teoretyczną, w której uczestnicy poznają:</p>
          <ul>
            <li>Budowę włosa i skóry, fazy wzrostu włosa oraz jego skład chemiczny.</li>
            <li>Wpływ porowatości włosa na koloryzację i jak przygotować różne typy skóry do zabiegu.</li>
            <li>Geometrię brwi, techniki rysunku wstępnego, koloryzację farbką i henną, oraz regulację brwi pęsetą i woskiem.</li>
            <li>Przeciwwskazania do zabiegu oraz zalecenia dla klienta.</li>
          </ul>
          <p>Szkolenie zapewnia również posiłki oraz napoje dla uczestników.</p>
          <p>Dzień drugi poświęcony jest części praktycznej, gdzie każda kursantka będzie miała okazję pracować na czterech modelkach, doskonaląc techniki omówione w części teoretycznej.</p>
        </div>

        <h2 className="uppercase mb-6 md:mb-10 text-4xl text-[#888888]">
          Twój program szkoleniowy
        </h2>
        <AccordionSchedule
          positionNumber="1"
          title="część teoretyczna"
          description="Dzień 1. Czas trwania - 6h"
        >
          <AccordionContentTheory t={t} />
        </AccordionSchedule>
        <AccordionSchedule
          positionNumber="2"
          title="część praktyczna"
          description="Dzień 2. Czas trwania - 8h"
        >
          <AccordionContentPractice t={t} />
        </AccordionSchedule>
        <AccordionSchedule
          positionNumber="3"
          title="Cena"
          description="2000 PLN"
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
            stepTitle="1. Bogate doświadczenie zawodowe"
            // TODO add years couner from 2020.
            stepDescription="Posiadam 4 lata praktyki jako stylistka brwi i rzęs, a w tym czasie obsłużyłam ponad 500 zadowolonych klientek. Moje doświadczenie pozwala mi dzielić się sprawdzonymi technikami i najlepszymi praktykami."
          />
          <TrainingAdvantage
            imagePath={mainImage}
            imageTitle="Szkolenia"
            stepTitle="2. Ciągłe podnoszenie kwalifikacji"
            stepDescription="Regularnie uczestniczę w kursach i szkoleniach, aby być na bieżąco z najnowszymi trendami i technikami w branży. Dzięki temu moje szkolenia są zawsze aktualne i oparte na najnowszych osiągnięciach."
          />
          <TrainingAdvantage
            imagePath={mainImage}
            imageTitle="Szkolenia"
            stepTitle="3. Międzynarodowy zasięg i różnorodność kursantek"
            stepDescription="Od 2021 roku prowadzę szkolenia dla kursantek z całej Polski oraz z innych krajów. Moje podejście jest uniwersalne i dostosowane do różnych rynków, co sprawia, że każda kursantka, niezależnie od lokalizacji, wyniesie wartościową wiedzę."
          />
          <TrainingAdvantage
            imagePath={mainImage}
            imageTitle="Szkolenia"
            stepTitle="4. Indywidualne podejście do każdej kursantki"
            stepDescription="Każda kursantka jest dla mnie wyjątkowa, dlatego dostosowuję program szkolenia do jej indywidualnych potrzeb i poziomu zaawansowania. Dbam o to, aby każda osoba czuła się komfortowo i pewnie w zdobywaniu nowych umiejętności."
          />
          <TrainingAdvantage
            imagePath={mainImage}
            imageTitle="Szkolenia"
            stepTitle="5. Kompleksowe wsparcie po szkoleniu:"
            stepDescription="Moja pomoc nie kończy się na zakończeniu kursu. Zapewniam kursantkom wsparcie również po szkoleniu, oferując konsultacje, porady oraz dostęp do materiałów edukacyjnych. Dbam o rozwój moich kursantek i ich sukces zawodowy."
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
