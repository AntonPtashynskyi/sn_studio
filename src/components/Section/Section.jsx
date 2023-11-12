import React from "react";
import "./section.scss";

export const Section = ({ title, children, id }) => {
  return (
    <section className="pt-[60px]" id={id}>
      <h2 className="section-title text-h2TextColor uppercase wrapper">
        {title}
      </h2>
      {children}
    </section>
  );
};
