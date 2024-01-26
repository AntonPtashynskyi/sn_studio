import React, { useState } from "react";

import Image from "next/image";
import Link from "next/link";
import instagram from "../../../public/assets/svg/instagram--in_brows.svg";
import facebook from "../../../public/assets/svg/facebook--in_brows.svg";

export const MobileMenuWrapper = ({ open }) => {
  const [coursesIsOpen, setShowCourses] = useState("");
  const [servicesIsOpen, setShowServices] = useState("");

  return (
    <div className={`menu-wrapper ${open}`}>
      <div className="flex flex-col justify-between flex-grow h-full">
        <nav>
          <ul className="menu">
            <li>
              <Link href="/#price" className="link" onClick={() => setOpen("")}>
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
              <ul className="courses-menu text-xs uppercase">
                <li className="my-6">
                  {" "}
                  <Link
                    href="eyebrows-styling"
                    className="link"
                    onClick={() => setOpen("")}
                  >
                    Brwi
                  </Link>
                </li>
                <li className="my-6">
                  <Link
                    href="eyelashes-styling"
                    className="link"
                    onClick={() => setOpen("")}
                  >
                    Rzęsy
                  </Link>
                </li>
                <li className="my-6">
                  {" "}
                  <Link
                    href="permanent-makeup"
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
                    SZKOLENIE Z LAMINACJI RZĘS
                  </Link>
                </li>
                <li className="my-6 border-b-[1px]">
                  <Link
                    href="/szkolenie_laminacja_brwi"
                    className="link"
                    onClick={() => setOpen("")}
                  >
                    SZKOLENIE Z LAMINACJI BRWI
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
          <div className="languageSwitcher">
            <ul className="flex  gap-[45px]">
              <li>PL</li>
              <li>UA</li>
              <li>EN</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
