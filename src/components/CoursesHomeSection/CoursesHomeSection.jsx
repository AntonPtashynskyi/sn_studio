import React from "react";
import { CourseTile } from "../CourseTile/CourseTile";

const CoursesHomeSection = ({ t, lang }) => {
  return (
    <>
      <h2 className="section-title">{t("Training sessions")}</h2>
      <p className="lg:max-w-[80%] text-lg md:text-2xl font-light">
        {t(
          "Choose the training that suits you and change your professional career."
        )}
        <br />
        {t("Get in touch with me to schedule a")}{" "}
        <a href={`/${lang}#contact`} className="text-[#EDC385] font-semibold">
          {t("free consultation")}
        </a>
      </p>
      <div className="course-tile-container">
        <CourseTile
          time="10h ~"
          title={t("Eyebrow lamination")}
          // TODO! Translate
          description="Program  szkoleniowy z laminacji brwi w którym się dowiesz jak poprawnie robuić laminacje"
          t={t}
          url={`${lang}/training_eyebrow`}
        />
        <CourseTile
          time="10h ~"
          title={t("Eyebrow architecture")}
          // TODO! Translate
          description="Program  szkoleniowy z laminacji brwi w którym się dowiesz jak poprawnie robuić laminacje"
          t={t}
          url={`${lang}/training_eyebrow`}
        />
        <CourseTile
          time="10h ~"
          title={t("Eyelash lamination")}
          // TODO! Translate
          description="Program  szkoleniowy z laminacji brwi w którym się dowiesz jak poprawnie robuić laminacje"
          t={t}
          url={`${lang}/training_eyebrow`}
        />
      </div>
    </>
  );
};

export default CoursesHomeSection;
