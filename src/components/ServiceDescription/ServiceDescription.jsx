import Image from "next/image";
import React from "react";

import "./serviceDescription.scss";

export const ServiceDescription = ({
  title,
  imageSrc,
  positionNumber,
  copyOne,
  copyTwo,
  price,
  time,
  id,
}) => {
  return (
    <section className="content-section" id={id}>
      <div className="content container mt-[100px] md:mb-[100px] md:flex md:justify-around wrapper">
        <div className="service--image-block">
          <Image
            alt={title}
            src={imageSrc}
            style={{ objectFit: "cover" }}
            fill={true}
          />
          <span className="service--decorative-number">{positionNumber}</span>
        </div>
        <div className="service--content-block wrapper ">
          <h2
            className="service--title"
            dangerouslySetInnerHTML={{ __html: title }}
          ></h2>
          <p>{copyOne}</p>
          {copyTwo && (
            <>
              <p className="mt-3">Zabieg obejmuje:</p>
              <ul
                className="service--list"
                dangerouslySetInnerHTML={{ __html: copyTwo }}
              ></ul>
            </>
          )}
          <div className="service--details-block">
            <div className="service--detail">
              <p>Cena:</p>
              <span>{price}</span>
            </div>
            <div className="service--detail">
              <p>Czas:</p>
              <span>{time}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
