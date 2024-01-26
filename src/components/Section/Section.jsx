import React from "react";
import "./section.scss";

export const Section = ({ title, children, id, className = "" }) => {
  return (
    <section className={`main-section ${className}`} id={id}>
      <div className="wrapper container">
        {title && <h2 className="section-title">{title}</h2>}
        {children}
      </div>
    </section>
  );
};
