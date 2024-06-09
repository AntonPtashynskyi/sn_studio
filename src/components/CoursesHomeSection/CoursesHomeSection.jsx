import React from "react";
import { CourseTile } from "../CourseTile/CourseTile";
import Link from "next/link";

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
        <Link href="/contact-form" className="text-[#EDC385] font-semibold">{t("free consultation")}</Link>
      </p>
      <div className="course-tile-container">
        <CourseTile
          time={`2 ${t("days")}`}
          title={t("Basic Brows")}
          description={t("Basic eyebrow styling training. Includes: eyebrow geometry, coloring with dye and henna, tweezing and waxing.")}
          t={t}
          url={`${lang}/training-eyebrow`}
        />
        <CourseTile
          time={`3 ${t("days")}`}
          title={t("Basic Brows+Lami")}
          description={t("Basic eyebrow styling training + eyebrow lamination training")}
          t={t}
          url={`${lang}/training-eyebrow`}
        />
        <CourseTile
          time={`2 ${t("days")}`}
          title={t("Eyelash lamination")}
          description={t("Eyelash lamination training from A to Z. Includes work with three brands of products: Inley, Elan, Zola. And all types of curls.")}
          t={t}
          url={`${lang}/training-eyebrow`}
        />
        <CourseTile
          time={`1 ${t("day")}`}
          title={t("Lami brows")}
          description={t("Training intended for people with basic knowledge of eyebrow styling. Contains a large theoretical part about the chemistry of products and hair biochemistry. Coloring without darkening the hairs.")}
          t={t}
          url={`${lang}/training-eyebrow`}
        />
        <CourseTile
          time={`1 ${t("day")}`}
          title={t("Supplementary training")}
          description={t("Qualification upgrade in any area tailored individually to each student.")}
          t={t}
          url={`${lang}/training-eyebrow`}
        />
      </div>
    </>
  );
};

export default CoursesHomeSection;
