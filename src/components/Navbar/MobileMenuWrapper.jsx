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
                ariaLabel={t("Go to main page")}
                onClick={closeMobileMenu}
              />
              <MenuLink
                href={`/${pageLanguage}/#price`}
                title={t("Price list")}
                ariaLabel={t("View price list")}
                onClick={closeMobileMenu}
              />
              <MobileMenuDropDown title={t("Services")}>
                <MenuLink
                  href={`/${pageLanguage}/services`}
                  title={t("All services")}
                  ariaLabel={t("View all services")}
                  onClick={closeMobileMenu}
                />
                <MenuLink
                  href={`/${pageLanguage}/services#brows`}
                  title={t("Brows")}
                  ariaLabel={t("View brows services")}
                  onClick={closeMobileMenu}
                />
                <MenuLink
                  href={`/${pageLanguage}/services#lashes`}
                  title={t("Lashes")}
                  ariaLabel={t("View lashes services")}
                  onClick={closeMobileMenu}
                />
                <MenuLink
                  href={`/${pageLanguage}/services#pmu`}
                  title={t("Permanent Makeup")}
                  ariaLabel={t("View permanent makeup services")}
                  onClick={closeMobileMenu}
                />
                <MenuLink
                  href={`/${pageLanguage}/services#faq`}
                  title={t("FAQ")}
                  ariaLabel={t("View frequently asked questions")}
                  onClick={closeMobileMenu}
                />
              </MobileMenuDropDown>
              <MobileMenuDropDown title={t("Training sessions")}>
                <MenuLink
                  href={`/${pageLanguage}/basic-brows`}
                  title={t("Basic Brows")}
                  ariaLabel={t("Learn eyebrow architecture training")}
                  onClick={closeMobileMenu}
                />
                <MenuLink
                  href={`/${pageLanguage}/lash-lamination`}
                  key="lash-lamination"
                  title={t("Eyelash lamination")}
                  ariaLabel={t("Learn eyelash lamination training")}
                  onClick={closeMobileMenu}
                />
              </MobileMenuDropDown>
              <MenuLink
                href={`/${pageLanguage}/#contact`}
                title={t("Contact")}
                ariaLabel={t("Go to contact section")}
                onClick={closeMobileMenu}
              />
            </div>
          </nav>
          <div className="flex items-center flex-col">
            <Link
              href="https://dikidi.net/1788548"
              target="_blank"
              rel="noopener noreferrer nofollow"
              aria-label="Book appointment online - InBrows beauty studio"
              title="Book appointment online via Dikidi"
              className="bg-black mb-3 bg-opacity-90 px-4 py-4 rounded-[3rem] text-white text-center block w-[80%] md:w-[50%] mx-auto font-light mt-6"
            >
              {t("Online reservation")}
            </Link>
            <p className="mb-9">{t("Wroclaw")}</p>
            <div className="flex gap-11 mb-9">
              <Link
                href="https://www.instagram.com/in_brows__?igsh=MWhlN2s3eDQzOW16Zg%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit InBrows Instagram page"
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
                rel="noopener noreferrer"
                aria-label="Visit InBrows Facebook page"
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
