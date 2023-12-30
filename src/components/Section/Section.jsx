import React from "react";
import "./section.scss";

export const Section = ({ title, children, id, className }) => {
  return (
    <section
      className={`py-[4rem] lg:py-[10rem] lg:pb-0 lg:mb-40 section ${className}`}
      id={id}
    >
      <div className="container relative z-50">
        <h2 className="section-title text-h2TextColor uppercase wrapper select-none text-center mb-[3rem]">
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
};
