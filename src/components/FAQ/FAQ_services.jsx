import React from "react";
import "./faq.scss";
import { AccordionBlock } from "./AccordionBlock";

export const FAQ_services = ({ t }) => {
  return (
    <div className="container">
      <AccordionBlock
        title={t("What is eyebrow lamination?")}
        copy={t("Eyebrow lamination is a procedure that involves permanently setting the eyebrow hairs in a specific direction, making the brows appear fuller, more symmetrical, and well-groomed. The effect lasts for several weeks.")}
      />
      <AccordionBlock
        title={t("How long does the eyebrow lamination effect last?")}
        copy={t("The eyebrow lamination effect usually lasts from 4 to 6 weeks, depending on the individual characteristics of the hairs and post-procedure care.")}
      />
      <AccordionBlock
        title={t("Is eyebrow lamination safe?")}
        copy={t("Yes, eyebrow lamination is safe, provided it is performed by a qualified specialist using appropriate products.")}
      />
      <AccordionBlock
        title={t("How to prepare for the eyebrow lamination procedure?")}
        copy={t("Before the procedure, avoid using strong cosmetics and peels on the eyebrows. It is also important that the eyebrows are clean and free of makeup.")}
      />
      <AccordionBlock
        title={t("Can I apply makeup after eyebrow lamination?")}
        copy={t("Yes, you can apply makeup after eyebrow lamination, but it is recommended to wait at least 24 hours after the procedure to ensure lasting and undisturbed results.")}
      />
      <AccordionBlock
        title={t("Is eyebrow lamination suitable for everyone?")}
        copy={t("Eyebrow lamination is suitable for most people, but it is not recommended for those with very delicate, sparse, or damaged eyebrow hairs. A consultation with a professional before the procedure will help determine if it is the right option.")}
      />
      <AccordionBlock
        title={t("How to care for eyebrows after lamination?")}
        copy={t("After the procedure, avoid wetting the eyebrows for 24 hours, as well as avoiding hot baths, saunas, and intense physical exertion. It is also important to use conditioners and oils to help maintain healthy hairs.")}
      />
      <AccordionBlock
        title={t("Can eyebrow lamination damage natural hairs?")}
        copy={t("A properly performed eyebrow lamination procedure should not damage natural hairs. It is crucial that the procedure is carried out by a qualified specialist using professional products.")}
      />
      <AccordionBlock
        title={t("How often can eyebrow lamination be performed?")}
        copy={t("It is recommended to perform eyebrow lamination no more frequently than every 6-8 weeks to give the hairs time to regenerate and maintain a healthy appearance.")}
      />
      <AccordionBlock
        title={t("How often can eyebrows be tinted with dye or henna?")}
        copy={t("Eyebrows can be tinted with dye or henna every 3-6 weeks. The frequency depends on the rate of hair growth and individual needs and preferences. Tinting eyebrows too often can lead to their weakening, so it is important to give the hairs time to regenerate between procedures.")}
      />
      <AccordionBlock
        title={t("How long do permanent eyebrows last?")}
        copy={t("The effect of permanent eyebrows usually lasts from 1 to 2 years, depending on skin type, lifestyle, and care. The color may gradually fade and require touch-ups.")}
      />
      <AccordionBlock
        title={t("Is the procedure painful?")}
        copy={t("Most people experience only slight discomfort during the procedure, which is usually minimized by the application of a numbing cream.")}
      />
      <AccordionBlock
        title={t("How long does the procedure take?")}
        copy={t("The procedure usually takes 2 to 3 hours, depending on the technique and complexity of the eyebrow shape.")}
      />
      <AccordionBlock
        title={t("What does the healing process look like?")}
        copy={t("The healing process takes about 10-20 days. During the first few days, the eyebrows may be darker, and then the color gradually fades. It is important to avoid scratching and wetting the eyebrows and to follow the aftercare instructions.")}
      />
      <AccordionBlock
        title={t("How should eyebrows be cared for after the procedure?")}
        copy={t("After the procedure, avoid wetting the eyebrows, excessive sweating, sun exposure, saunas, and tanning beds for about a week. Using recommended ointments speeds up healing and protects the pigment.")}
      />
      <AccordionBlock
        title={t("Can permanent eyebrows be removed if I am not satisfied with the result?")}
        copy={t("Yes, permanent eyebrows can be removed using specialized laser treatments or other methods of permanent makeup removal.")}
      />
    </div>
  );
};
