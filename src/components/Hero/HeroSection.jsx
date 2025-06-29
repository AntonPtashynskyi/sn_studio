import React from "react";
import Image from "next/image";

import "./hero.scss";

import logo from "../../../public/assets/svg/logo--strocked.svg";
import heroImage from "../../../public/assets/images/hero/hero--desktop.jpg";
import Link from "next/link";


export const HeroSection =  ({
  h1MobileTitle,
  mobileSubtitle,
  className,
  bgImage = heroImage,
  h1Title,
  description,
  h2Title,
  CTAText,
}) => {


  return (
    <section className={`${className} hero-base-section`}>
      <div
        className={`hero hero__${className} wrapper container flex flex-col justify-end md:justify-center pt-12 pb-8 md:py-0`}
      >
        <div className="mobile-only md:hidden mt-auto">
          <h2 className="text-white uppercase font-bold opacity-80 text-xl">{mobileSubtitle}</h2>
          <h1
            className="hero__text"
            dangerouslySetInnerHTML={{ __html: h1MobileTitle }}
          ></h1>
          <Link href="https://dikidi.net/1788548" target="_blank" className="bg-black bg-opacity-90 px-4 py-4 rounded-[3rem] text-white text-center block w-[80%] mx-auto font-light mt-6">{CTAText}</Link>
        </div>
        <div className="desktop-only hero-content">
          <div className="left-block">
            <div className="self-start w-full flex flex-col gap-4">
              <Image src={logo} alt="In brows" />
              <h1 className="text-[40px]">{h1Title}</h1>
              <h2 className="text-2xl max-w-[50%]">{description}</h2>
              <div className="mt-10">
                <Link href="https://dikidi.net/1788548" target="_blank" className="px-10 py-5 text-xl bg-black hover:bg-gray-900 transition-all text-white rounded-lg shadow-sm">{CTAText}</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
