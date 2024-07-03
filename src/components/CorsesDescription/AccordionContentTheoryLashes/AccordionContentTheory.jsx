import React from 'react'
import "../accordion-style.scss"

const AccordionContentTheory = ({t}) => {
  return (
    <ul className="accordion-content-panel pl-[15%] pr-[10%] list-disc text-[#6C6C6C]">
      <li className="description-text">{t("Hair and Skin Structure")}</li>
      <li className="description-text">{t("Hair Growth Phases")}</li>
      <li className="description-text">{t("Hair Composition")}</li>
      <li className="description-text">{t("Hair Porosity and Its Effect on Coloring Process")}</li>
      <li className="description-text">{t("Chemical Composition")}</li>
      <li className="description-text">{t("Skin Preparation for Procedure (normal skin, dry, oily – which products to choose to achieve even coloring)")}</li>
      <li className="description-text">{t("Brow Geometry")}</li>
      <li className="description-text">{t("Preliminary Drawing in Two Ways: Powder Pencil and Paste")}</li>
      <li className="description-text">{t("Coloring with Dye and Henna")}</li>
      <li className="description-text">{t("Tweezing and Waxing")}</li>
      <li className="description-text">{t("Working with Wax: Which Wax to Choose")}</li>
      <li className="description-text">{t("Appropriate Directions for Tweezing")}</li>
      <li className="description-text">{t("Contraindications for Procedure")}</li>
      <li className="description-text">{t("Recommendations for Client")}</li>
  </ul>
  )
}

export default AccordionContentTheory