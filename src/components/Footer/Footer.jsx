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
            <a href="mailto:snisarinna7@gmail.com">snisarinna7@gmail.com</a>
            <a href="tel:+48 794 232 846">+48 794 232 846</a>
          </div>
          <div className="flex flex-1 flex-col gap-2">
            <span className="uppercase font-medium">
              {t("Training sessions")}
            </span>
            <Link
              href={`/${pageLanguage}/basic-brows`}
              aria-label={t("Learn eyebrow architecture training")}
              title={t("View details about eyebrow architecture training")}
            >
              {t("Eyebrow architecture training")}
            </Link>
            <Link
              href={`/${pageLanguage}/lash-lamination`}
              aria-label={t("Learn eyelash lamination training")}
              title={t("View details about eyelash lamination training")}
            >
              {t("Eyelash lamination training")}
            </Link>
          </div>
          <div className="flex flex-1 flex-col gap-2">
            <span className="uppercase font-medium">{t("Services")}</span>
            <Link
              href={`/${pageLanguage}/services#brows`}
              aria-label={t("View brows services")}
              title={t("See our eyebrow services")}
            >
              {t("Brows")}
            </Link>
            <Link
              href={`/${pageLanguage}/services#lashes`}
              aria-label={t("View lashes services")}
              title={t("See our eyelash services")}
            >
              {t("Lashes")}
            </Link>
            <Link
              href={`/${pageLanguage}/services#pmu`}
              aria-label={t("View permanent makeup services")}
              title={t("See our permanent makeup services")}
            >
              {t("Permanent Makeup")}
            </Link>
          </div>
          <div className="flex flex-1 flex-col"></div>
        </div>
        <div className="flex justify-between py-5">
          <Image src={logo} alt={t("Logo_alt")} className="object-contain" width="0" height="0" style={{ width: '4rem', height: 'auto' }}/>
          <Link
            href={`/${pageLanguage}/privacy-policy`}
            aria-label={t("View privacy policy")}
            title={t("Read our privacy policy")}
          >
            {t("Privacy Policy")}
          </Link>
        </div>
      </div>
    </footer>
  );
};
