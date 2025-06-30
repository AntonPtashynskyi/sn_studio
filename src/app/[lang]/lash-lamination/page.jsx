import React from "react";
import { useTranslation } from "@/app/i18n";

import { HeroSection } from "@/components/Hero/HeroSection";
import { Contact } from "@/components/Contact/Contact";
import { Section } from "@/components/Section/Section";
import AccordionSchedule from "@/components/AccordionSchedule/AccordionSchedule";
import AccordionContentTheory from "@/components/CorsesDescription/AccordionContentTheoryLashes/AccordionContentTheory";
import TrainingAdvantageList from "@/components/TrainingAdvantage/TrainingAdvantageList";
import TrainingAdvantage from "@/components/TrainingAdvantage/TrainingAdvantage";
import "@/components/Section/section.scss"

import experienceImage from "../../../../public/assets/images/courses/best-customer-experience.webp";
import qualificationImage from "../../../../public/assets/images/courses/qualification.webp";
import supportImage from "../../../../public/assets/images/courses/support.webp";
import traineesImage from "../../../../public/assets/images/courses/trainees.webp";
import selfImprovementImage from "../../../../public/assets/images/courses/self-improvement.webp";

import AccordionContentPractice from "@/components/CorsesDescription/AccordionContentTheoryLashes/AccordionContentPractice";
import ModalContent from "@/components/Modal/Modal";
import { getMetadata } from "@/app/actions";
import AccordionContentPracticeDay3 from "@/components/CorsesDescription/AccordionContentTheoryLashes/AccordionContentPracticeDay3";
import AccordionContentPracticeBonus from "@/components/CorsesDescription/AccordionContentTheoryLashes/AccordionContentPracticeBonus";
import Link from "next/link";

export async function generateMetadata({ params }) {
  const { lang } = params;
  const metaData = await getMetadata(lang);

  return {
    title: metaData.lashLamination.title,
    description: metaData.lashLamination.description,
  }
}

const BrowsPage = async ({ params: { lang } }) => {
  const { t } = await useTranslation(lang, "trainings");

  return (
    <>
      <HeroSection
        className="brows_training"
        h1MobileTitle={t("Basic Brows Training")}
        mobileSubtitle={t("Training")}
        h1Title={t("Basic Brows Training")}
        description={t("Individual basic training in brow styling.")}
        CTAText={t("Sign up for training!")}
        lang={lang}
      />
      <Section id="brows_courses_theory">
        <h2 className="uppercase mb-6 md:mb-10 text-4xl text-[#888888]">
          {t("Training Description")}
        </h2>
        <div className="my-8 pb-16">
          <div className="bg-lightBgColor relative p-5 rounded-md mt-14 shadow-md">
            <h2 className="bg-lightBgColor w-fit p-3 font-medium absolute -top-9 rounded-md text-xl">BASIC BROWS</h2>
            <p className="text-lg font-light"> - Pełne szkolenie ze stylizacji brwi od podstaw oraz laminacji brwi. Podczas tego szkolenia przekażę całą wiedzę, którą zdobyłam przez 4 lata pracy. Zaprojektowane dla osób pragnących zdobyć kompleksową wiedzę i umiejętności w tej dziedzinie. 
            </p>
          </div>
          
          <div className="flex gap-4 flex-col md:flex-row">
            <div className="bg-lightBgColor relative p-5 rounded-md mt-14 flex-1 shadow-md">
              <h2 className="bg-lightBgColor w-fit p-3 font-medium absolute -top-9 rounded-md text-xl">
                {t("First day")}
              </h2>
              <p className="text-lg font-light mb-3">{t("Includes a 6-hour theoretical part where participants will learn:")}</p>
              <ul className="text-lg font-light list-disc  list-inside">
                <li className="pl-3">{t("The structure of hair and skin, hair growth phases, and its chemical composition.")}</li>
                <li className="pl-3">{t("The effect of hair porosity on coloring and how to prepare different skin types for the procedure.")}</li>
                <li className="pl-3">{t("Brow geometry, preliminary drawing techniques, coloring with dye and henna, and brow shaping with tweezers and wax.")}</li>
                <li className="pl-3">{t("Contraindications for the procedure and recommendations for the client.")}</li>
              </ul>
            </div>
            
            <div className="bg-lightBgColor relative p-5 rounded-md mt-14 flex-1 shadow-md">
              <h2 className="bg-lightBgColor w-fit p-3 font-medium absolute -top-9 rounded-md text-xl">{t("Second day")}</h2>
              <p className="text-lg font-light">{t("Is dedicated to the practical part, where each trainee will have the opportunity to work on four models, perfecting the techniques discussed in the theoretical part.")}</p>
            </div>
          </div>

          <div>
            <div className="md:w-1/2">
              <div className="bg-lightBgColor relative p-5 rounded-md mt-14 flex-1 shadow-md">
                <h2 className="bg-lightBgColor w-fit p-3 font-medium absolute -top-9 rounded-md text-xl">Dzień trzeci</h2>
                <p className="text-lg font-light">Trzeci dzień kursu poświęcony jest laminacji brwi. W programie znajduje się 3-godzinna sesja teoretyczna, obejmująca chemię preparatów, działanie poszczególnych składników na strukturę włosa oraz specyfikę pracy z farbką po laminacji. W drugiej części odbędzie się pokaz na modelce, a każda kursantka będzie miała możliwość pracy na dwóch modelkach.</p>
              </div>
            </div>
            <div className="flex-1 md:w-1/2"></div>
          </div>

          <p className="mt-6 text-lg font-light">* {t("The training also provides meals and beverages for the participants.")}</p>
        </div>

        <h2 className="uppercase mb-6 md:mb-10 text-4xl text-[#888888]">
          {t("Your training program")}
        </h2>
        <AccordionSchedule
          positionNumber="1"
          title={t("theoretical part")}
          description={`${t("Day 1. Duration -")} 6${t("h")}`}
        >
          <AccordionContentTheory t={t} />
        </AccordionSchedule>
        <AccordionSchedule
          positionNumber="2"
          title={t("practical part")}
          description={`${t("Day 2. Duration -")} 8${t("h")}`}
        >
          <AccordionContentPractice t={t} />
        </AccordionSchedule>
        <AccordionSchedule
          positionNumber="3"
          title={t("Theoretical and practical part")}
          description="Dzień 3: Czas trwania 6h"
        >
          <AccordionContentPracticeDay3 t={t} />
        </AccordionSchedule>
        <AccordionSchedule
          positionNumber="4"
          title="Bonus"
          description="Dzień 3"
        >
          <AccordionContentPracticeBonus t={t} />
        </AccordionSchedule>
        <AccordionSchedule
          title={t("Price")}
          description={`1500 ${t("pln")}`}
          isInteractive={false}
        ></AccordionSchedule>
      </Section>
      <Section id="brows_advatage" className="brow-advantage-section">
        <h2 className="uppercase mb-6 md:mb-10 text-4xl text-[#888888]">
          {t("Why should you choose me?")}
        </h2>
        <TrainingAdvantageList>
          <TrainingAdvantage
            imagePath={experienceImage}
            imageTitle={t("Training")}
            stepTitle={`1.${t("Extensive professional experience")}`}
            stepDescription={t("I have 4 years of practice as a brow and lash stylist, during which I have served over 500 satisfied clients. My experience allows me to share proven techniques and best practices.")}
          />
          <TrainingAdvantage
            imagePath={qualificationImage}
            imageTitle={t("Training")}
            stepTitle={`2.${t("Continuous qualification improvement")}`}
            stepDescription={t("I regularly attend courses and training to stay updated with the latest trends and techniques in the industry. This ensures that my training is always current and based on the latest advancements.")}
          />
          <TrainingAdvantage
            imagePath={supportImage}
            imageTitle={t("Training")}
            
            stepTitle={`3.${t("International reach and diverse trainees")}`}
            stepDescription={t("Since 2021, I have been conducting training for trainees from all over Poland and other countries. My approach is universal and adapted to different markets, ensuring that every trainee, regardless of location, gains valuable knowledge.")}
          />
          <TrainingAdvantage
            imagePath={traineesImage}
            imageTitle={t("Training")}
            stepTitle={`4.${t("Individual approach to each trainee")}`}
            stepDescription={t("Every trainee is unique to me, so I tailor the training program to their individual needs and skill levels. I ensure that everyone feels comfortable and confident in acquiring new skills.")}
          />
          <TrainingAdvantage
            imagePath={selfImprovementImage}
            imageTitle={t("Training")}
            stepTitle={`5.${t("Comprehensive support after training")}`}
            stepDescription={t("My support does not end with the completion of the course. I provide trainees with support even after the training, offering consultations, advice, and access to educational materials. I care about the development of my trainees and their professional success.")}
          />
        </TrainingAdvantageList>
      </Section>
      <Section>
          <Link href="https://dikidi.net/1788548" target="_blank" className="bg-black mb-3 bg-opacity-90 px-4 py-4 rounded-[3rem] text-white text-center block w-[80%] md:w-[50%] mx-auto font-light mt-6">
            {t("Sign up for training!")}
          </Link>
      </Section>
      <Section>
        <Contact t={t}/>
      </Section>
    </>
  );
};

export default BrowsPage;
