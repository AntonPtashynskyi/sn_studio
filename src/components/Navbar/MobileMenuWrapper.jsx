import React from "react";

import Image from "next/image";
import instagram from "../../../public/assets/svg/instagram--in_brows.svg";
import facebook from "../../../public/assets/svg/facebook--in_brows.svg";
import LanguageChanger from "./LanguageSwitcher";
import MenuLink from "./MenuLink";
import MobileMenuDropDown from "./MobileMenuDropDown";

const MobileMenuWrapper = ({ open, pageLanguage, setOpen, t }) => {
  const closeMobileMenu = () => setOpen("");

  return (
    <div className={`mobile-menu-wrapper ${open}`}>
      <div className="flex flex-col justify-center flex-grow h-full">
        <div className="min-h-[80%] overflow-y-scroll py-6 flex flex-col justify-center">
          <nav>
            <div className="menu">
              <MenuLink href={`/${pageLanguage}`} title={t('mainPage')} onClick={closeMobileMenu} />
              <MenuLink href={`/${pageLanguage}/#price`} title="Cennik" onClick={closeMobileMenu} />
              <MobileMenuDropDown title="Usługi">
                  <MenuLink href={`/${pageLanguage}/services`} title="Wzystkie usługi" onClick={closeMobileMenu} />
                  <MenuLink href={`/${pageLanguage}/services#brows`} title="Brwi" onClick={closeMobileMenu} />
                  <MenuLink href={`/${pageLanguage}/services#lashes`} title="Rzęsy" onClick={closeMobileMenu} />
                  <MenuLink href={`/${pageLanguage}/services#pmu`} title="PMU" onClick={closeMobileMenu} />
              </MobileMenuDropDown>
              <MobileMenuDropDown title="Szkolenia">
                  <MenuLink href={`/${pageLanguage}/szkolenie_laminacja_rzes`} title="Szkolenie z laminacji rzęs" onClick={closeMobileMenu} />
                  <MenuLink href={`/${pageLanguage}/szkolenie_laminacja_brwi`} title="Szkolenie z laminacji brwi" onClick={closeMobileMenu} />
              </MobileMenuDropDown>
              <MenuLink href={`/${pageLanguage}/#contact`} title="Kontakt" onClick={closeMobileMenu} />
            </div>
          </nav>
          <div className="flex items-center flex-col">
            <p className="mb-9">Wroclaw</p>
            <div className="flex gap-11 mb-9">
              <Image
                src={instagram}
                alt="Instagram In Brows"
                width={30}
                height={30}
              />
              <Image
                src={facebook}
                alt="FaceBook In Brows"
                width={30}
                height={30}
              />
            </div>
            <LanguageChanger pageLanguage={pageLanguage} />
          </div>
        </div>
      </div>
    </div>
  );
};


export default MobileMenuWrapper;