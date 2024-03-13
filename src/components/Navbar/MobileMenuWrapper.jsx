import React, { useState } from "react";

import Image from "next/image";
import Link from "next/link";
import instagram from "../../../public/assets/svg/instagram--in_brows.svg";
import facebook from "../../../public/assets/svg/facebook--in_brows.svg";
import LanguageChanger from "./LanguageSwitcher";

const MobileMenuWrapper = ({ open, pageLanguage, setOpen }) => {
  const [coursesIsOpen, setShowCourses] = useState("");
  const [servicesIsOpen, setShowServices] = useState("");

  return (
    <div className={`mobile-menu-wrapper ${open}`}>
      <div className="flex flex-col justify-center flex-grow h-full">
        <div className="min-h-[80%] overflow-y-scroll py-6 flex flex-col justify-center">
          <nav>
            <ul className="menu">
              <li>
                <Link href={`/${pageLanguage}/`} className="link" onClick={() => setOpen("")}>
                  Główna
                </Link>
              </li>
              <li>
                <Link href={`/${pageLanguage}/#price`} className="link" onClick={() => setOpen("")}>
                  Cennik
                </Link>
              </li>
              <li className="flex flex-col justify-center items-center">
                <p
                  className={`interactive-btn ${servicesIsOpen}`}
                  onClick={() =>
                    setShowServices((prev) => (prev === "active" ? "" : "active"))
                  }
                >
                  Usługi
                </p>
                <ul className="courses-menu text-xs uppercase flex flex-col items-center">
                  <li className="my-3">
                    <Link
                      href={`/${pageLanguage}/services`}
                      className="link"
                      onClick={() => setOpen("")}
                    >
                      Wzystkie usługi
                    </Link>
                  </li>
                  <li className="my-3">
                    <Link
                      href={`/${pageLanguage}/services#brows`}
                      className="link"
                      onClick={() => setOpen("")}
                    >
                      Brwi
                    </Link>
                  </li>
                  <li className="my-3">
                    <Link
                      href={`/${pageLanguage}/services#lashes`}
                      className="link"
                      onClick={() => setOpen("")}
                    >
                      Rzęsy
                    </Link>
                  </li>
                  <li className="my-3">
                    {" "}
                    <Link
                      href={`/${pageLanguage}/services#pmu`}
                      className="link"
                      onClick={() => setOpen("")}
                    >
                      PMU
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="flex flex-col justify-center items-center">
                <p
                  className={`interactive-btn ${coursesIsOpen}`}
                  onClick={() =>
                    setShowCourses((prev) => (prev === "active" ? "" : "active"))
                  }
                >
                  Szkolenia
                </p>
                <ul className="courses-menu text-xs uppercase">
                  <li className="my-6">
                    <Link
                      href="/szkolenie_laminacja_rzes"
                      className="link"
                      onClick={() => setOpen("")}
                    >
                      Szkolenie z laminacji rzęs
                    </Link>
                  </li>
                  <li className="my-6 border-b-[1px]">
                    <Link
                      href="/szkolenie_laminacja_brwi"
                      className="link"
                      onClick={() => setOpen("")}
                    >
                      Szkolenie z laminacji brwi
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link
                  href="/#contact"
                  className="link"
                  onClick={() => setOpen("")}
                >
                  Kontakt
                </Link>
              </li>
            </ul>
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