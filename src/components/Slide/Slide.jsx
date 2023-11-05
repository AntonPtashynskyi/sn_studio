import React from "react";
import "./slide.scss";
import Link from "next/link";

export const Slide = ({ path, title, copy, bgClassName, index }) => {
  return (
    <Link className={`${bgClassName} slide-container`} href={path}>
      <div className="block-text">
        <h3 className="text-[20px] font-medium uppercase leading-[100%]">
          {title}
        </h3>
        <p className="copy text-[16px] font-medium text-slideCopyColor">
          {copy}
        </p>
      </div>
    </Link>
  );
};
