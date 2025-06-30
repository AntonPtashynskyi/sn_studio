import React from "react";

import Image from "next/image";
import instagram from "../../../public/assets/svg/instagram--in_brows.svg";
import facebook from "../../../public/assets/svg/facebook--in_brows.svg";
import LanguageChanger from "./LanguageSwitcher";
import MenuLink from "./MenuLink";
import MobileMenuDropDown from "./MobileMenuDropDown";
import Link from "next/link";

const MobileMenuWrapper = ({ open, pageLanguage, setOpen, t }) => {
  const closeMobileMenu = () => setOpen("");

  return (
    <div className={`mobile-menu-wrapper ${open}`}>
      <div className="flex flex-col justify-center flex-grow h-full">
        <div className="min-h-[80%] overflow-y-scroll py-6 flex flex-col justify-center">
          <nav>
            <div className="menu">
              <MenuLink
                href={`/${pageLanguage}`}
                title={t("Main")}
                onClick={closeMobileMenu}
              />
              <MenuLink
                href={`/${pageLanguage}/#price`}
                title={t("Price list")}
                onClick={closeMobileMenu}
              />
              <MobileMenuDropDown title={t("Services")}>
                <MenuLink
                  href={`/${pageLanguage}/services`}
                  title={t("All services")}
                  onClick={closeMobileMenu}
                />
                <MenuLink
                  href={`/${pageLanguage}/services#brows`}
                  title={t("Brows")}
                  onClick={closeMobileMenu}
                />
                <MenuLink
                  href={`/${pageLanguage}/services#lashes`}
                  title={t("Lashes")}
                  onClick={closeMobileMenu}
                />
                <MenuLink
                  href={`/${pageLanguage}/services#pmu`}
                  title="PMU"
                  onClick={closeMobileMenu}
                />
                <MenuLink
                  href={`/${pageLanguage}/services#faq`}
                  title="FAQ"
                  onClick={closeMobileMenu}
                />
              </MobileMenuDropDown>
              <MobileMenuDropDown title={t("Training sessions")}>
                <MenuLink
                  href={`/${pageLanguage}/basic-brows`}
                  title={t("Basic Brows")}
                  onClick={closeMobileMenu}
                />
                <MenuLink
                  href={`/${pageLanguage}/lash-lamination`}
                  key="lash-lamination"
                  title={t("Eyelash lamination")}
                  onClick={closeMobileMenu}
                />
                <MenuLink
                  href={`/${pageLanguage}/additional-trainings`}
                  key="additional-trainings"
                  title={t("Supplementary training")}
                  onClick={closeMobileMenu}
                />
              </MobileMenuDropDown>
              <MenuLink
                href={`/${pageLanguage}/#contact`}
                title={t("Contact")}
                onClick={closeMobileMenu}
              />
            </div>
          </nav>
          <div className="flex items-center flex-col">
            <Link href="https://dikidi.net/1788548" target="_blank" className="bg-black mb-3 bg-opacity-90 px-4 py-4 rounded-[3rem] text-white text-center block w-[80%] md:w-[50%] mx-auto font-light mt-6">
              {t("Online reservation")}
            </Link>
            <p className="mb-9">{t("Wroclaw")}</p>
            <div className="flex gap-11 mb-9">
              <Link
                href="https://www.instagram.com/in_brows__?igsh=MWhlN2s3eDQzOW16Zg%3D%3D&utm_source=qr"
                target="_blank"
              >
                <Image
                  src={instagram}
                  alt="Instagram In Brows"
                  width={30}
                  height={30}
                />
              </Link>
              <Link
                href="https://www.facebook.com/share/16hjUVdrCD/?mibextid=wwXIfr"
                target="_blank"
              >
                <Image
                  src={facebook}
                  alt="FaceBook In Brows"
                  width={30}
                  height={30}
                />
              </Link>
            </div>
            <LanguageChanger pageLanguage={pageLanguage} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenuWrapper;
