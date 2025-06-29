import React from "react";
import "./social-banner.scss";
import Link from "next/link";
import Image from "next/image";

import { InstagramIcon } from "../Icons/InstagramIcon";
import instagram_banner from "@public/assets/images/social/social_instagram.webp";
import instagram_face from "@public/assets/images/social/social_instagram_rounded.webp";

export const SocialBanner = ({ t }) => {
  return (
    <section>
      <div className="wrapper container">
        <Link
          className="social-banner"
          href="https://www.instagram.com/in_brows__/"
          target="_blank"
        >
          <div className="block--left">
            <h2 className="social-banner--title">
              {t("Follow me")} <br />
              {t("on Instagram")}
            </h2>
            <div className="images-block flex">
              <InstagramIcon class_name="absolute z-10 left-0 max-w-[30%]" />
              <Image
                src={instagram_face}
                alt="Instagram In_brows"
                className="max-w-[150px] z-10 object-contain"
              />
            </div>
          </div>
          <div className="block--right">
            <Image
              src={instagram_banner}
              alt="Instagram In_brows"
              className="social-image"
            />
          </div>
        </Link>
      </div>
    </section>
  );
};
