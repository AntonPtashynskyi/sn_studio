import { useTranslation } from "@/app/i18n";
import Link from "next/link";
import React from "react";
import LanguageChanger from "./LanguageSwitcher";

export default async function DesktopMenu({pageLanguage}) {
  const { t } = await useTranslation(pageLanguage, "pages");
  
  return (
    <div className="menu-container">
      <nav className="navigation-links">
        <Link href={`/${pageLanguage}`} key="home-page" className="link">
          <p className="title">{t("main")}</p>
        </Link>
        <span className="link drop-down">
          <p>Usługi </p>
          <div className="drop-down--list">
            <Link href={`/${pageLanguage}/services`} key="eyebrows_styling" className="link">
              <p className="title">Wszystkie usługi</p>
            </Link>
            <Link
              href={`/${pageLanguage}/services#brows`}
              key="eyebrows_styling_brows"
              className="link"
            >
              <p className="title">Brwi</p>
            </Link>
            <Link href={`/${pageLanguage}/services#lashes`} key="eyelashes_styling" className="link">
              <p className="title">Rzesy</p>
            </Link>
            <Link href={`/${pageLanguage}/services#pmu`} key="permanent_makeup" className="link">
              <p className="title">Permanent</p>
            </Link>
          </div>
        </span>
        <Link href={`/${pageLanguage}/#price`} key="price" className="link">
          <p className="title">Cennik</p>
        </Link>
        <Link href={`/${pageLanguage}/training`} key="training" className="link">
          <p className="title">Szkolenia</p>
        </Link>
        <Link href={`/${pageLanguage}/#contact`} key="contact" className="link">
          <p className="title">Contact</p>
        </Link>
        <LanguageChanger pageLanguage={pageLanguage}/>
      </nav>
    </div>
  );
};