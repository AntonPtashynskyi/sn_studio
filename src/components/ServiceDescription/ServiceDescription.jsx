import Image from "next/image";
import React from "react";

import "./serviceDescription.scss";
import Link from "next/link";

export const ServiceDescription = ({
  title,
  imageSrc,
  positionNumber,
  copyOne,
  copyTwo,
  price,
  time,
  id,
  t
}) => {
  return (
    <section className="content-section wrapper" id={id}>
      <div className="content container md:flex md:justify-center wrapper">
        <div className="service--image-block">
          <Image
            alt={title}
            src={imageSrc}
            style={{ objectFit: "cover" }}
            fill={true}
            sizes="100%"
            loading="lazy"
          />
          {positionNumber && <span className="service--decorative-number">{positionNumber}</span>}
        </div>
        <div className="service--content-block wrapper">
          <h2
            className="service--title"
            dangerouslySetInnerHTML={{ __html: title }}
          ></h2>
          <p className="text-lg">{copyOne}</p>
          <Link href="https://dikidi.net/1788548" target="_blank" className="underline text-lg font-bold">{t("Make an appointment!")}</Link>
          {copyTwo && (
            <>
              <p className="mt-3 text-lg font-bold">{t("The treatment includes:")}</p>
              <ul
                className="service--list"
                dangerouslySetInnerHTML={{ __html: copyTwo }}
              ></ul>
            </>
          )}
          <div className="service--details-block">
            <div className="service--detail">
              <p>{t("Price")}</p>
              <span>{price} {t("pln")}</span>
            </div>
            <div className="service--detail">
              <p>{t("Time:")}</p>
              <span>{time} {t("min")}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
