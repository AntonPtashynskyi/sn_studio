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
        <Link href="https://dikidi.net/1788548" target="_blank" className="text-[#000000] font-semibold">{t("free consultation")}</Link>
      </p>
      <div className="course-tile-container">
        <CourseTile
          time={`3 ${t("days")}`}
          title={t("Basic Brows")}
          description={t("A full training course on eyebrow styling from scratch and eyebrow lamination.")}
          t={t}
          url={`${lang}/basic-brows`}
        />
        <CourseTile
          time={`2 ${t("days")}`}
          title={t("Eyelash lamination")}
          description={t("Eyelash lamination training from A to Z. Includes work with three brands of products: Inley, Elan, Zola. And all types of curls.")}
          t={t}
          url={`${lang}/lash-lamination`}
        />
        <CourseTile
          time={`1 ${t("day")}`}
          title={t("Supplementary training")}
          description={t("Qualification upgrade in any area tailored individually to each student.")}
          t={t}
          url={`https://dikidi.net/1788548`}
          blank={true}
        />
      </div>
    </>
  );
};

export default CoursesHomeSection;
