import React from "react";

import "./sectionLinks.scss";
import Link from "next/link";

export const SectionLinks = ({ urlsArray }) => {
  return (
    <section className="section section--links">
      {urlsArray.map((url) => {
        return (
          <Link href={`/${url.path}`} key={url.key} className="link">
            <p className="title">{url.name}</p>
            <span className="arrow"></span>
          </Link>
        );
      })}
    </section>
  );
};
