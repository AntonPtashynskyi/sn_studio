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
          title="Laminacja </br><span>brwi</span>"
          key="2"
          imageSrc={laminationBrows}
          copyOne="Laminacja brwi - to zabieg kosmetyczny mający na celu podkreślenie i ukształtowanie brwi. Podczas tego zabiegu brwi są modelowane, aby uzyskać pożądany kształt i wygląd"
          copyTwo="<li>Wymodelowanie i ukształtowanie włosków za pomocą specjalnych preparatów.</li>
                  <li>Indywidualny dobór kształtu brwi, harmonijnie dostosowany do urody klienta.</li>
                  <li>Precyzyjną regulację brwi pęsetą i woskiem.</li>
                  <li>Koloryzację brwi farbką</li>
                  <li>Odżywienie włosków za pomocą botoksu, aby podkreślić zdrowy wygląd.</li>"
          price="140"
          time="60"
          t={t}
        />
        <ServiceDescription
          title="Regulacja </br><span>brwi</span>"
          key="3"
          imageSrc={regulationBrows}
          copyOne="Regulacja brwi to proces kształtowania i porządkowania brwi za pomocą różnych technik, takich jak usuwanie nadmiaru włosków pęsetą, woskiem czy nitką. Celem regulacji brwi jest nadanie im ładnego kształtu, dostosowanego do indywidualnych cech twarzy, co może znacznie poprawić wygląd i wyrażenie spojrzenia."
          price="50"
          time="15-30"
          t={t}
        />
        <ServiceDescription
          title="Laminacja </br><span>rzęs</span>"
          key="4"
          imageSrc={styledEyelashes}
          copyOne="Laminacja rzęs to zabieg kosmetyczny, celem którego jest podkreślenie naturalnego piękna rzęs poprzez podkręcenie i uniesienie ich od nasady za pomocą specjalnych wałków i preparatów. W rezultacie uzyskujemy uniesione i podkręcone naturalne rzęsy, efekt utrzymuje się nawet do 2 miesięcy."
          copyTwo="<li>Dobór odpowiedniego skrętu rzęs.</li>
        <li> Koloryzacje rzęs</li>
        <li>Odżywienie rzęs za pomocą botoksu</li>"
          price="150"
          time="60-90"
          id="lashes"
          t={t}
        />
        <ServiceDescription
          title="Makijaż permanentny </br><span>brwi</span>"
          key="5"
          imageSrc={pmuBrows}
          copyOne="Zabieg makijażu permanentnego brwi, znany także jako mikropigmentacja brwi, to procedura, w której pigment jest wprowadzany pod skórę w celu trwałego podkreślenia kształtu i koloru brwi. Poprzez precyzyjne umieszczanie pigmentu, osiąga się efekt trwającego makijażu brwi, eliminując konieczność codziennego ręcznego ich rysowania czy wypełniania. To rozwiązanie może być szczególnie atrakcyjne dla osób pragnących oszczędzić czas na codziennym makijażu brwi."
          price="800"
          time="120-160"
          id="pmu"
          t={t}
        />
        <ServiceDescription
          title="Makijaż permanentny </br><span>ust</span>"
          key="6"
          imageSrc={pmuLips}
          copyOne="Makijaż permanentny ust, znany również jako mikropigmentacja ust, to innowacyjny zabieg, w którym pigment jest wprowadzany pod skórę, trwale podkreślając kontur i kolor ust. Ten zabieg może poprawić symetrię ust, nadać im pełniejszy wygląd lub po prostu podkreślić naturalny kształt. Dzięki makijażowi permanentnemu ust możesz cieszyć się trwałym efektem, eliminując konieczność częstego nakładania szminki czy konturówki. Przed przystąpieniem do zabiegu zawsze warto skonsultować się z doświadczonym specjalistą, aby uzyskać efekt dostosowany do Twoich indywidualnych preferencji."
          price="800"
          time="120-160"
          t={t}
        />
      </div>
      <Section id="faq" className="faq-section">
        <h2 className="uppercase mb-6 md:mb-10 text-4xl text-[#888888]">
          Najczęściej zadawane pytania
        </h2>
        <FAQ_services t={t} />
      </Section>

      <Section title="Contact">
        <Contact t={t}/>
      </Section>
      <Section>
        <div className="mx-auto relative">
          <ModalContent showCloseButton={false}/>
        </div>
      </Section>
    </>
  );
};

export default ServicesPage;
