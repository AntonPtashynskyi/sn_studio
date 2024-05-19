"use client";
import React, { useState } from "react";

import MobileMenuWrapper from "./MobileMenuWrapper";
import MobileMenuButton from "./MobileMenuButton";
import HeaderLogo from "./HeaderLogo";
import { useTranslation } from "@/app/i18n/client";

const MobileMenu = ({ pageLanguage }) => {
  const [open, setOpen] = useState("");
  const { t } = useTranslation(pageLanguage, "common");

  return (
    <>
      <div className="mobile-menu">
        <HeaderLogo />
        <MobileMenuButton open={open} setOpen={setOpen} />
        <MobileMenuWrapper
          open={open}
          setOpen={setOpen}
          pageLanguage={pageLanguage}
          t={t}
        />
      </div>
    </>
  );
};

export default MobileMenu;
