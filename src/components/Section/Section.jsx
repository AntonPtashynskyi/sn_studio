import React from "react";
import "./section.scss";

export const Section = ({ title, children }) => {
  return (
    <section className="pt-[60px]">
      <h2 className="section-title text-h2TextColor uppercase wrapper">
        {title}
      </h2>
      {children}
    </section>
  );
};
