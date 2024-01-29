"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import "./navbar.scss";
import logo from "../../../public/assets/svg/logo--in_brows.svg";
import { MobileMenuWrapper } from "./MobileMenuWrapper";

export const Navbar = () => {
  const [open, setOpen] = useState("");

  return (
    <>
      <header className={`${open} navBar`}>
        <div className="flex justify-between items-center z-[50] relative p-4">
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
      <MobileMenuWrapper open={open} />
    </>
  );
};
