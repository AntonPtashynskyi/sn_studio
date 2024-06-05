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
          // TODO! Translate
          time="2 dni"
          title={t("Basic Brows")}
          description="Szkolenie podstawowe ze stylizacji brwi. Obejmuje: geometrię brwi, koloryzacja farbką i henną, regulacją pęsettą i woskiem."
          t={t}
          url={`${lang}/training-eyebrow`}
        />
        <CourseTile
          // TODO! Translate
          time="3 dni"
          title={t("Basic Brows+Lami")}
          description="Szkolenie podstawowe ze stylizacji brwi + szkolenie z laminacji brwi"
          t={t}
          url={`${lang}/training-eyebrow`}
        />
        <CourseTile
          // TODO! Translate
          time="2 dni"
          title={t("Eyelash lamination")}
          description="Szkolenie z laminacji rzęs od A do Z. Zawierające prace na trzech markach preparatów: Inley, Elan, Zola. Oraz wszystkie typy skęrów."
          t={t}
          url={`${lang}/training-eyebrow`}
        />
        <CourseTile
          // TODO! Translate
          time="1 dzień"
          title={t("Lami brows")}
          description="Szkolenie przeznaczone dla osób z podstawołą wiedzą o stylizacji brwi. Zawiera dużą część teoretyczną o chenii preparatów i biocheii włosa. Koloryzacja bez zaciemnineia włosków."
          t={t}
          url={`${lang}/training-eyebrow`}
        />
        <CourseTile
          // TODO! Translate
          time="1 dzień"
          title={t("Doszkolenie")}
          description="Podwyszenie kwalifikacji w dowolym zakeresię dostosowane indywidualnie do każdej kursanti."
          t={t}
          url={`${lang}/training-eyebrow`}
        />
      </div>
    </>
  );
};

export default CoursesHomeSection;
