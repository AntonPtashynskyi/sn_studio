import React from "react";
import Link from "next/link";
import Image from "next/image";
import Map from "../Maps/Maps";

import instagramLogo from "../../../public/assets/svg/instagram--in_brows.svg";
import emailLogo from "../../../public/assets/svg/email--logo.svg";
import "./contact.scss";

export const Contact = () => {
  return (
    <>
      <div className="contact-wrapper">
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
        <Link
          href="https://www.instagram.com/in_brows__/"
          className="contact-link"
        >
          <Image
            src={emailLogo}
            width={40}
            height={40}
            alt="In brows instagram"
            className="image-contact"
          />
          <p className="text-[20px] font-light text-black">
            snissarinna@gmail.com
          </p>
        </Link>
      </div>
      <Map />
    </>
  );
};
