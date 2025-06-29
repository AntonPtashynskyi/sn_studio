import React from "react";
import Link from "next/link";
import Image from "next/image";

import "./serviceTile.scss";
import arrow from "../../../public/assets/svg/arrow--more.svg";

export const ServiceTile = ({ title, path, number, styleClass }) => {
  return (
    <Link href={path} className="tile flex-1 group">
      <div className={`${styleClass} image relative md:flex p-4`}>
        <h3 className="service-title">{title}</h3>
        <div className="opacity-layout absolute inset-0 bg-white bg-opacity-30 group-hover:bg-opacity-0 transition-all"></div>
        <div className="arrow-more__container">
          <Image
            src={arrow}
            width={40}
            height={40}
            alt="arrow"
            className="arrow-more"
            loading="lazy"
          />
        </div>
        {number && <span className="tile__decorative-number">{number}</span>}
      </div>
    </Link>
  );
};
