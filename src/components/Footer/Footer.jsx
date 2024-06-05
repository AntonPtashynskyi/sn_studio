"use client";
import { useTranslation } from "@/app/i18n/client";
import Link from "next/link";
import React from "react";

import logo from "../../../public/assets/svg/logo--in_brows.svg";
import Image from "next/image";

export const Footer = ({ pageLanguage }) => {
  const year = new Date().getFullYear();
  const { t } = useTranslation(pageLanguage, "common");

  return (
    <footer className="bg-navBarBgColor">
      <div className="wrapper container">
        <div className="flex flex-col md:flex-row py-14 gap-6">
          <div className="flex flex-1 flex-col gap-2">
            <span className="uppercase font-medium">In_brows</span>
            <p>{t("Address")}</p>
            <a href="mailto:snissarinna@gmail.com">snissarinna@gmail.com</a>
            <a href="tel:+48 794 232 846">+48 794 232 846</a>
          </div>
          <div className="flex flex-1 flex-col gap-2">
            <span className="uppercase font-medium">
              {t("Training sessions")}
            </span>
            <Link href={`/${pageLanguage}/training-eyebrow`}>
              {t("Eyebrow architecture training")}
            </Link>
            <Link href={`/${pageLanguage}/training-eyebrow`}>
              {t("Eyebrow lamination training")}
            </Link>
            <Link href={`/${pageLanguage}/training-eyebrow`}>
              {t("Eyelash lamination training")}
            </Link>
          </div>
          <div className="flex flex-1 flex-col gap-2">
            <span className="uppercase font-medium">{t("Services")}</span>
            <Link href={`/${pageLanguage}/services#brows`}>{t("Brows")}</Link>
            <Link href={`/${pageLanguage}/services#lashes`}>{t("Lashes")}</Link>
            <Link href={`/${pageLanguage}/services#pmu`}>
              {t("Permanent Makeup")}
            </Link>
          </div>
          <div className="flex flex-1 flex-col"></div>
        </div>
        <div className="flex justify-between py-5">
          <Image src={logo} alt={t("Logo_alt")} className="object-contain" />
          <Link href={`/${pageLanguage}/privacy-policy`}>
            {t("Privacy Policy")}
          </Link>
        </div>
      </div>
    </footer>
  );
};
