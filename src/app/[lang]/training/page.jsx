import React from "react";
import { HeroSection } from "@/components/Hero/HeroSection";
import { Contact } from "@/components/Contact/Contact";
import { Section } from "@/components/Section/Section";
import { FAQ } from "@/components/FAQ/Faq";
import AccordionSchedule from "@/components/AccordionSchedule/AccordionSchedule";

const BrowsPage = () => {
  return (
    <>
      <HeroSection
        className="brows_page"
        title="Reserve best training ever"
        h1Title="Szkolenia"
        description="Najlepszę szkolenie"
        h2Title="Szkolenia!"
      />
      <Section>
        <h2 className="uppercase mb-10 text-2xl">Twój program szkoleniowy</h2>
        <AccordionSchedule positionNumber="1" title="część teoretyczna">
          <ul className="pl-[10%] pr-[10%] list-disc text-[#6C6C6C]">
            <li className="py-3 text-xl uppercase">Budowa włosa i skóry</li>
            <li className="py-3 text-xl uppercase">Fazy wzrostu włosa</li>
            <li className="py-3 text-xl uppercase">Skład włosa</li>
            <li className="py-3 text-xl uppercase">Porowatość włosa i jej wpływ na proces koloryzacji</li>
            <li className="py-3 text-xl uppercase">Skład chemiczny</li>
            <li className="py-3 text-xl uppercase">Przygotowanie skóry do zabiegu (skóra normalna, sucha, tłusta – jakie produkty dobrać, aby uzyskać równomierne pofarbowanie)</li>
            <li className="py-3 text-xl uppercase">Geometria brwi</li>
            <li className="py-3 text-xl uppercase">rysunek wstępny na dwa sposoby kredką pudrową i pastą</li>
            <li className="py-3 text-xl uppercase">Koloryzacja farbką i henną</li>
            <li className="py-3 text-xl uppercase">Regulacja pęsetą i woskiem</li>
            <li className="py-3 text-xl uppercase">Praca z woskiem, który wosk wybrać</li>
            <li className="py-3 text-xl uppercase">Odpowiednie kierunki regulacji</li>
            <li className="py-3 text-xl uppercase">Przeciwwskazania do zbiegu</li>
            <li className="py-3 text-xl uppercase">Zalecenia dla klienta</li>
          </ul>
        </AccordionSchedule>
      </Section>
      <Section>
        <FAQ />
      </Section>
      <Section title="Contact">
        <Contact />
      </Section>
    </>
  );
};

export default BrowsPage;
