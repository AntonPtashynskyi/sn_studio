import React from 'react'

const AccordionContentPracticeBonus = ({t}) => {
  return (
    <ul className="pl-[15%] pr-[10%] list-disc text-[#6C6C6C]">
      <li className="description-text">{t("Lekcja robienia instagramowych zdjęć. ")}</li>
      <li className="description-text">{t("Jakiego sprzętu używam do zrobienia ładnych ujęć.")}</li>
      <li className="description-text">{t("Jak prowadzić swój profil na social media, żeby uzyskać dobre zasięgi i zdobyć nowych klientów.")}</li>
      <li className="description-text">{t("Jakie aplikacje używam do obróbki zdjęć.")}</li>
      <li className="description-text">{t("Aplikacje do montażu rolek/ Reels")}</li>
  </ul>
  )
}

export default AccordionContentPracticeBonus