import React from "react";

import "./sectionLinks.scss";
import Link from "next/link";

export const SectionLinks = ({ urlsArray }) => {
  return (
    <section className="section section--links container ">
      <div className="wrapper flex flex-col md:flex-row flex-1">
        {urlsArray.map((url) => {
          return (
            <Link href={`/${url.path}`} key={url.key} className="link">
              <p className="title">{url.name}</p>
            </Link>
          );
        })}
      </div>
    </section>
  );
};
