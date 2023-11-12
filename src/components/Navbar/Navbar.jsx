"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import "./navbar.scss";
import logo from "../../../public/assets/svg/logo--in_brows.svg";
import instagram from "../../../public/assets/svg/instagram--in_brows.svg";
import facebook from "../../../public/assets/svg/facebook--in_brows.svg";

export const Navbar = () => {
  const [open, setOpen] = useState("");
  const [coursesIsOpen, setShowCourses] = useState("");

  return (
    <>
      <header className={`${open} navBar`}>
        <div className="flex justify-between items-center z-[9999] relative">
          <Link href="/">
            <Image src={logo} alt="In brows" width="auto" height="auto" />
          </Link>
          <div
            className={`${open} menu-btn`}
            onClick={() =>
              setOpen((prev) => (prev === "active" ? "" : "active"))
            }
          >
            <span></span>
          </div>
        </div>
      </header>
      <div className={`menu-wrapper ${open}`}>
        <div className="flex flex-col justify-between flex-grow h-full">
          <nav>
            <ul className="menu">
              <li>
                <Link
                  href="/#services"
                  className="link"
                  onClick={() => setOpen("")}
                >
                  Usługi
                </Link>
              </li>
              <li>
                <Link
                  href="/#price"
                  className="link"
                  onClick={() => setOpen("")}
                >
                  Cennik
                </Link>
              </li>
              <li className="flex flex-col justify-center items-center">
                <p
                  className={`course-btn ${coursesIsOpen}`}
                  onClick={() =>
                    setShowCourses((prev) =>
                      prev === "active" ? "" : "active"
                    )
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
    </>
  );
};
