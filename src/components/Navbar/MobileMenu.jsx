"use client";
import React, { useState } from "react";

import MobileMenuWrapper from "./MobileMenuWrapper";
import MobileMenuButton from "./MobileMenuButton";
import HeaderLogo from "./HeaderLogo";

const MobileMenu = ({pageLanguage}) => {
  const [open, setOpen] = useState("");

  return (
    <>
      <div className="mobile-menu">
        <HeaderLogo/>
        <MobileMenuButton open={open} setOpen={setOpen}/>
        <MobileMenuWrapper open={open} setOpen={setOpen} pageLanguage={pageLanguage}/>
      </div>
    </>
  );
};

export default MobileMenu;
