import React from "react";
import "./hero.scss";

export const HeroSection = ({ title, className }) => {
  return (
    <section>
      <div className={`hero hero__${className}`}>
        <p
          className="hero__text"
          dangerouslySetInnerHTML={{ __html: title }}
        ></p>
      </div>
    </section>
  );
};
