import React from "react";
import Link from "next/link";
import Image from "next/image";

import "./serviceTile.scss";
import arrow from "../../../public/assets/svg/arrow--more.svg";

export const ServiceTile = ({ title, path, number, styleClass }) => {
  return (
    <Link href={path} className="tile">
      <div className={`${styleClass} image`}>
        <div className="absolute inset-0 bg-white bg-opacity-30"></div>
        <h3 className="service-title">{title}</h3>
        <div className="w-[115px] h-[60] py-[10px] bg-black absolute left-0 bottom-0 flex justify-center items-center">
          <Image
            src={arrow}
            width={40}
            height={40}
            alt="arrow"
            className="arrow-more z-50 relative"
          />
        </div>
        <span className="z-50 text-[128px] absolute right-1 bottom-1 font-semibold color-bigNumber leading-[100%]">
          {number}
        </span>
      </div>
    </Link>
  );
};
