import React from "react";
import { HeroSection } from "@/components/Hero/HeroSection";
import { ServiceDescription } from "@/components/ServiceDescription/ServiceDescription";
import { Contact } from "@/components/Contact/Contact";
import { Section } from "@/components/Section/Section";
import { useTranslation } from "@/app/i18n";

import "./browsPage.scss";

import styledBrows from "../../../../public/assets/images/services/brows_style.jpg";
import laminationBrows from "../../../../public/assets/images/services/brows_lamination.jpg";
import regulationBrows from "../../../../public/assets/images/services/brows_paint.jpg";
import styledEyelashes from "../../../../public/assets/images/services/eyelashes_lamination.jpg";
import pmuBrows from "../../../../public/assets/images/services/brows_pmu.jpg";
import pmuLips from "../../../../public/assets/images/services/lips_pmu.jpg";
import { FAQ_services } from "@/components/FAQ/FAQ_services";
import ModalContent from "@/components/Modal/Modal";
import { getMetadata } from "@/app/actions";

export async function generateMetadata({ params }) {
  const { lang } = params;
  const metaData = await getMetadata(lang);
 
  return {
    title: metaData.services.title,
    description: metaData.services.description,
  }
}

const ServicesPage = async ({params: {lang}}) => {
  const { t } = await useTranslation(lang, "common");

  return (
    <>
      <HeroSection
        className="services_page"
        h1MobileTitle={t("Services")}
        description={t("Eyebrows play a key role in giving the face expressiveness, shape, and symmetry, uniquely highlighting the natural beauty of the eyes and the entire face.")}
        h2Title="Brwi!"
        CTAText={t("Sign up for a service!")}
        lang={lang}
      />
      <div className="content-block">
        <ServiceDescription
          title={`${t("styling")}</br><span>${t("eyebrow")}</span>`}
          key="1"
          imageSrc={styledBrows}
          copyOne={t("Eyebrow styling is a delicate procedure that helps discover your individual shape and subtly highlight natural beauty.")}
          copyTwo={`<li>${t("Individual selection of eyebrow shape to match the client's beauty.")}</li>
                    <li>${t("Tweezing and waxing eyebrow shaping.")}</li>
                    <li>${t("Eyebrow coloring with dye or powder henna.")}</li>`
                  }
          price="100"
          time="30-60"
          id="brows"
          t={t}
        />
        <ServiceDescription
          title={`${t("Lamination")}</br><span>${t("eyebrow")}</span>`}
          key="2"
          imageSrc={laminationBrows}
          copyOne={t("Eyebrow lamination is a cosmetic procedure aimed at emphasizing and shaping the eyebrows. During this procedure, the eyebrows are shaped to achieve the desired shape and appearance.")}
          copyTwo={`<li>${t("Modeling and shaping the hairs using special preparations")}</li>
                    <li>${t("Individual selection of the eyebrow shape, harmoniously adjusted to the client's beauty.")}</li>
                    <li>${t("Precise eyebrow regulation with tweezers and wax.")}</li>
                    <li>${t("Coloring the eyebrows with dye.")}</li>
                    <li>${t("Nourishment of the hairs using botox to emphasize a healthy appearance.")}</li>`}
          price="140"
          time="60"
          t={t}
        />
        <ServiceDescription
          title={`${t("Regulation")}</br><span>${t("eyebrow")}</span>`}
          key="3"
          imageSrc={regulationBrows}
          copyOne={t("Eyebrow shaping is the process of shaping and tidying eyebrows using various techniques such as tweezing, waxing, or threading. The aim of eyebrow shaping is to give them a nice shape, tailored to the individual facial features, which can significantly enhance appearance and expression.")}
          price="50"
          time="15-30"
          t={t}
        />
        <ServiceDescription
          title={`${t("Lamination")}</br><span>${t("lashes")}</span>`}
          key="4"
          imageSrc={styledEyelashes}
          copyOne={t("Eyelash lamination is a cosmetic procedure aimed at enhancing the natural beauty of lashes by curling and lifting them from the base using special rods and preparations. As a result, we get lifted and curled natural lashes, and the effect lasts up to 2 months.")}
          copyTwo={`<li>${t("Selection of the appropriate curl of lashes.")}</li>
                   <li>${t("Eyelash coloring.")}</li>
                   <li>${t("Nourishment of lashes using botox.")}</li>`}
          price="150"
          time="60-90"
          id="lashes"
          t={t}
        />
        <ServiceDescription
          title={`${t("Permanent makeup")}</br><span>${t("eyebrow")}</span>`}
          key="5"
          imageSrc={pmuBrows}
          copyOne={t("Permanent eyebrow makeup, also known as eyebrow micropigmentation, is a procedure in which pigment is inserted into the skin to permanently emphasize the shape and color of the eyebrows. By precisely placing the pigment, the effect of lasting eyebrow makeup is achieved, eliminating the need for daily manual drawing or filling. This solution may be particularly attractive for people looking to save time on their daily eyebrow makeup.")}
          price="800"
          time="120-160"
          id="pmu"
          t={t}
        />
        <ServiceDescription
          title={`${t("Permanent makeup")}</br><span>${t("lips")}</span>`}
          key="6"
          imageSrc={pmuLips}
          copyOne={t("Permanent lip makeup, also known as lip micropigmentation, is an innovative procedure in which pigment is introduced into the skin, permanently emphasizing the contour and color of the lips. This procedure can improve lip symmetry, give them a fuller appearance, or simply accentuate their natural shape. With permanent lip makeup, you can enjoy long-lasting effects, eliminating the need for frequent lipstick or lip liner application. It's always worth consulting with an experienced specialist before undergoing the procedure to achieve results tailored to your individual preferences.")}
          price="800"
          time="120-160"
          t={t}
        />
      </div>
      <Section id="faq" className="faq-section">
        <h2 className="uppercase mb-6 md:mb-10 text-4xl text-[#888888]">
          {t("Frequently Asked Questions")}
        </h2>
        <FAQ_services t={t} />
      </Section>

      <Section title={t("Contact")}>
        <Contact t={t}/>
      </Section>
      <Section>
        <div className="mx-auto relative">
          <ModalContent showCloseButton={false} lang={lang}/>
        </div>
      </Section>
    </>
  );
};

export default ServicesPage;
