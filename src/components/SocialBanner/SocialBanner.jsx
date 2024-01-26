import React from "react";
import "./social-banner.scss";
import Link from "next/link";
import { InstagramIcon } from "../Icons/InstagramIcon";

export const SocialBanner = () => {
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
              Obserwuj mnie <br />
              na instagramie
            </h2>
            <InstagramIcon />
          </div>
          <div className="block--right"></div>
        </Link>
      </div>
    </section>
  );
};
