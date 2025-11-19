import React from "react";
import { useTranslation } from "@/app/i18n";

import { HeroSection } from "@/components/Hero/HeroSection";
import { Contact } from "@/components/Contact/Contact";
import { Section } from "@/components/Section/Section";
import AccordionSchedule from "@/components/AccordionSchedule/AccordionSchedule";
import TrainingAdvantageList from "@/components/TrainingAdvantage/TrainingAdvantageList";
import TrainingAdvantage from "@/components/TrainingAdvantage/TrainingAdvantage";
import "@/components/Section/section.scss"

import experienceImage from "../../../../public/assets/images/courses/best-customer-experience.webp";
import qualificationImage from "../../../../public/assets/images/courses/qualification.webp";
import supportImage from "../../../../public/assets/images/courses/support.webp";
import traineesImage from "../../../../public/assets/images/courses/trainees.webp";
import selfImprovementImage from "../../../../public/assets/images/courses/self-improvement.webp";

import { getMetadata } from "@/app/actions";
import Link from "next/link";
import { generatePageMetadata } from "@/utils/generatePageMetaData";

export async function generateMetadata({ params }) {
  const { lang } = params;
  const meta = await getMetadata(lang);

  return generatePageMetadata({
    lang,
    slug: "lash-lamination",
    meta: meta.lashLamination,
  });
}

const BrowsPage = async ({ params: { lang } }) => {
  const { t } = await useTranslation(lang, "trainings");

  return (
    <>
      <HeroSection
        className="brows_training"
        h1MobileTitle={t("Lami lashes training")}
        mobileSubtitle={t("Training")}
        h1Title={t("Lami lashes training")}
        description={t("Comprehensive training in lash lamination and lifting from scratch.")}
        CTAText={t("Sign up for training!")}
        lang={lang}
      />
      <Section id="brows_courses_theory">
        <h2 className="uppercase mb-6 md:mb-10 text-4xl text-[#888888]">
          {t("Training Description")}
        </h2>
        <div className="my-8">
          <div className="bg-lightBgColor relative p-5 rounded-md mt-14 shadow-md">
            <h2 className="bg-lightBgColor w-fit p-3 font-medium absolute -top-9 rounded-md text-xl">{t("Lami lashes training")}</h2>
            <p className="text-lg font-light">{t("After completing this course, you will master the techniques of perfect curling and lifting of lashes, gaining the skills needed for professional styling.")} 
            </p>
          </div>
          
          <h2 className="uppercase my-10 text-4xl text-[#888888]">
            {t("Your training program")}
          </h2>
          
          <div className="flex gap-4 flex-col md:flex-row">
            <div className="bg-lightBgColor relative p-5 rounded-md mt-14 flex-1 shadow-md">
              <h2 className="bg-lightBgColor w-fit p-3 font-medium absolute -top-9 rounded-md text-xl">
                {t("First day")}
              </h2>
              <p className="text-lg font-light mb-3">{t("✅ theoretical part - 4-5h")}</p>
              <ul className="text-lg font-light list-disc  list-inside">
                <li className="pl-3 list-none">{t("📍 What is lash lamination")}</li>
                <li className="pl-3 list-none">{t("📍 Benefits of the procedure")}</li>
                <li className="pl-3 list-none">{t("📍Indications/Contraindications for the procedure")}</li>
                <li className="pl-3 list-none">{t("📍 Hair structure")}</li>
                <li className="pl-3 list-none">{t("📍 Chemistry of products")}</li>
                <li className="pl-3 list-none">{t("📍 Composition and action of the products")}</li>
                <li className="pl-3 list-none">{t("📍 Types of lashes")}</li>
                <li className="pl-3 list-none">{t("📍 Types of rods")}</li>
                <li className="pl-3 list-none">{t("📍How to properly choose a rod")}</li>
                <li className="pl-3 list-none">{t("📍 Steps of lash lamination")}</li>
                <li className="pl-3 list-none">{t("📍 Necessary tools and materials")}</li>
              </ul>
            </div>
            
            <div className="bg-lightBgColor relative p-5 rounded-md mt-14 flex-1 shadow-md">
              <h2 className="bg-lightBgColor w-fit p-3 font-medium absolute -top-9 rounded-md text-xl">{t("Second day")}</h2>
              <p className="text-lg font-light">{t("✅ demonstration model")}</p>
              <p className="text-lg font-light">{t("✅ 2 models for the trainee")}</p>
              <p className="text-lg font-light">{t("✅ lunch")}</p>
              <p className="text-lg font-light">{t("✅ training manual + ongoing support after training")}</p>
              <p className="text-lg font-light">{t("✅ certificate of completion")}</p>
            </div>
          </div>

          <div>
            <div className="md:w-1/2">
              <div className="bg-lightBgColor relative p-5 rounded-md mt-14 flex-1 shadow-md">
                <h2 className="bg-lightBgColor w-fit p-3 font-medium absolute -top-9 rounded-md text-xl">{t("🎁Bonus")}</h2>
                <p className="text-lg font-light">{t("Instagram photography lesson.")}</p>
                <p className="text-lg font-light">{t("📍What equipment I use to take nice shots.")}</p>
                <p className="text-lg font-light">{t("📍How to manage your social media profile to gain reach and attract new clients.")}</p>
                <p className="text-lg font-light">{t("📍Which apps I use to edit photos.")}</p>
                <p className="text-lg font-light">{t("📍Apps for editing reels")}</p>
                <p className="text-lg font-light">{t("📍Apps for editing reels")}</p>
              </div>
            </div>
            <div className="flex-1 md:w-1/2"></div>
          </div>

          <p className="mt-6 text-lg font-light">* {t("The training also provides meals and beverages for the participants.")}</p>
        </div>
        
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
