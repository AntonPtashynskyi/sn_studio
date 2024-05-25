import React from "react";
import Link from "next/link";
import Image from "next/image";
import Map from "../Maps/Maps";

import instagramLogo from "../../../public/assets/svg/instagram--in_brows.svg";
import emailLogo from "../../../public/assets/svg/email--logo.svg";
import "./contact.scss";

export const Contact = ({ t }) => {
  return (
    <div className="flex flex-col md:flex-row gap-6">
      <div className="flex-col min-w-[15rem] flex-[1]">
        <Link
          href="https://www.instagram.com/in_brows__/"
          className="contact-link"
        >
          <Image
            src={instagramLogo}
            width={40}
            height={40}
            alt="In brows instagram"
            className="image-contact"
          />
          <p className="text-[20px] font-light text-black">in_brows__</p>
        </Link>
        <Link href="mailto:snisarinna7@gmail.com" className="contact-link">
          <Image
            src={emailLogo}
            width={40}
            height={40}
            alt="In brows mail"
            className="image-contact"
          />
          <p className="text-[20px] font-light text-black">{t("Mail me")}</p>
        </Link>
      </div>
      <Map />
    </div>
  );
};
