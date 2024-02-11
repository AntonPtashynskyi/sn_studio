"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

import logo from "../../../public/assets/svg/logo--in_brows.svg";
import { MobileMenuWrapper } from "./MobileMenuWrapper";

const MobileMenu = () => {
  const [open, setOpen] = useState("");

  return (
    <>
      <div className="mobile-menu">
        <Link href="/">
          <Image
            src={logo}
            alt="In brows"
            width="auto"
            height="auto"
            className="logo-link"
          />
        </Link>
        <div
          className={`menu-btn ${open}`}
          onClick={() => setOpen((prev) => (prev === "active" ? "" : "active"))}
        >
          <span className="lines"></span>
        </div>
      </div>
      <MobileMenuWrapper open={open} />
    </>
  );
};

export default MobileMenu;
