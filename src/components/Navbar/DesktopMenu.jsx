import React from "react";
import { useTranslation } from "@/app/i18n";
import LanguageChanger from "./LanguageSwitcher";
import MenuDropDown from "./MenuDropDown";
import MenuLink from "./MenuLink";

export default async function DesktopMenu({pageLanguage}) {
  const { t } = await useTranslation(pageLanguage, "pages");
  
  return (
    <div className="menu-container">
      <nav className="navigation-links">
        <MenuLink href={`/${pageLanguage}`} key="home_page" title={t("main")}/>
        <MenuDropDown title="Usługi">
          <MenuLink href={`/${pageLanguage}/services`} key="eyebrows_styling" title="Wszystkie usługi"/>
          <MenuLink href={`/${pageLanguage}/services#brows`} key="eyebrows_styling_brows" title="Brwi"/>
          <MenuLink href={`/${pageLanguage}/services#lashes`} key="eyelashes_styling" title="Rzesy"/>
          <MenuLink href={`/${pageLanguage}/services#pmu`} key="permanent_makeup" title="Permanent"/>
        </MenuDropDown>
        <MenuLink href={`/${pageLanguage}/#price`} key="price" title="Cennik"/>
        <MenuDropDown title="Szkolenia">
          <MenuLink href={`/${pageLanguage}/training_eyebrow`} key="training_eyebrow" title="Szkolenia z laminacji brwi"/>
        </MenuDropDown>
        <MenuLink href={`/${pageLanguage}/#contact`} key="contact" title="Contact"/>
        <LanguageChanger pageLanguage={pageLanguage}/>
      </nav>
    </div>
  );
};