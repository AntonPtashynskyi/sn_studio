import React from "react";
import { useTranslation } from "@/app/i18n";
import LanguageChanger from "./LanguageSwitcher";
import MenuDropDown from "./MenuDropDown";
import MenuLink from "./MenuLink";

export default async function DesktopMenu({ pageLanguage }) {
  const { t } = await useTranslation(pageLanguage, "common");

  return (
    <div className="menu-container">
      <nav className="navigation-links">
        <MenuLink href={`/${pageLanguage}`} key="home_page" title={t("Main")} />
        <MenuDropDown title={t("Services")}>
          <MenuLink
            href={`/${pageLanguage}/services`}
            key="eyebrows_styling"
            title={t("All services")}
          />
          <MenuLink
            href={`/${pageLanguage}/services#brows`}
            key="eyebrows_styling_brows"
            title={t("Brows")}
          />
          <MenuLink
            href={`/${pageLanguage}/services#lashes`}
            key="eyelashes_styling"
            title={t("Lashes")}
          />
          <MenuLink
            href={`/${pageLanguage}/services#pmu`}
            key="permanent_makeup"
            title={t("Permanent Makeup")}
          />
          <MenuLink
            href={`/${pageLanguage}/services#faq`}
            key="permanent_makeup"
            title={t("FAQ")}
          />
        </MenuDropDown>
        <MenuLink
          href={`/${pageLanguage}/#price`}
          key="price"
          title={t("Price list")}
        />
        <MenuDropDown title={t("Training sessions")}>
          <MenuLink
            href={`/${pageLanguage}/basic-brows`}
            key="basic-brows"
            title={t("Basic Brows")}
          />
          <MenuLink
            href={`/${pageLanguage}/lash-lamination`}
            key="lash-lamination"
            title={t("Eyelash lamination")}
          />
        </MenuDropDown>
        <MenuLink
          href={`/${pageLanguage}/#contact`}
          key="contact"
          title={t("Contact")}
        />
        <LanguageChanger pageLanguage={pageLanguage} />
      </nav>
    </div>
  );
}
