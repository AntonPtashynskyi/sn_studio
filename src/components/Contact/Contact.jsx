import React from "react";
import Link from "next/link";
import Image from "next/image";

import instagramLogo from "../../../public/assets/svg/instagram--in_brows.svg";
import emailLogo from "../../../public/assets/svg/email--logo.svg";
import "./contact.scss";

export const Contact = () => {
  return (
    <div className="wrapper flex flex-col gap-6">
      <Link
        href="https://www.instagram.com/in_brows__/"
        className="flex items-center bg-borderColor py-[25px] px-[20px] gap-6"
      >
        <Image
          src={instagramLogo}
          width={40}
          height={40}
          alt="In brows instagram"
          className="image-contact"
        />
        <p className="text-[20px] font-light text-white">in_brows__</p>
      </Link>
      <Link
        href="https://www.instagram.com/in_brows__/"
        className="flex items-center bg-borderColor py-[25px] px-[20px] gap-6"
      >
        <Image
          src={emailLogo}
          width={40}
          height={40}
          alt="In brows instagram"
          className="image-contact"
        />
        <p className="text-[20px] font-light text-white">
          snissarinna@gmail.com
        </p>
      </Link>
    </div>
  );
};
