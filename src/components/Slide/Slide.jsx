import React from "react";
import "./slide.scss";
import Link from "next/link";
import Image from "next/image";

export const Slide = ({
  path,
  title,
  copy,
  bgClassName,
  imageSrc,
  imageAlt,
  index,
}) => {
  return (
    <Link className={`${bgClassName} slide-container`} href={path}>
      <div className="block-text">
        <h3 className="text-[20px] md:text-[36px] text-[#CDB2B1] font-medium uppercase leading-[100%] mb-8">
          {title}
        </h3>
        <p className="copy text-[16px] font-medium text-[#767676]">{copy}</p>
      </div>
      <div className="block-image">
        <Image
          src={imageSrc}
          alt={imageAlt}
          className="object-cover h-full w-full"
        />
      </div>
    </Link>
  );
};
