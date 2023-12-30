"use client";

import React, { createRef, useEffect } from "react";
import Image from "next/image";
import { Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Slide } from "../Slide/Slide";

import arrow from "../../../public/assets/svg/arrow--more.svg";
import course_1 from "../../../public/assets/images/courses/course_1.jpg";
import "./courses.scss";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export const Courses = () => {
  return (
    <>
      <div className="wrapper mb-2">
        <Swiper
          slidesPerView={1}
          centeredSlides={true}
          spaceBetween={20}
          loop={true}
          navigation={{ nextEl: ".arrow-right", prevEl: ".arrow-left" }}
          pagination={{
            clickable: true,
          }}
          modules={[Navigation]}
          className="courses-slider"
        >
          <SwiperSlide>
            <Slide
              path="courses"
              title="SZKOLENIA Z LAMINACJI RZĘS!"
              copy="Duża dawka więdzy!"
              bgClassName="lips"
              imageSrc={course_1}
              imageAlt="Brows Course"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Slide
              path="courses"
              title="SZKOLENIA Z  LAMINACJI RZĘS!"
              copy="Duża dawka więdzy!"
              bgClassName="brows"
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="flex justify-center gap-2 wrapper py-1">
        <button onClick={() => {}} className={`arrow arrow-left `}>
          <Image
            src={arrow}
            width={40}
            height={40}
            alt="arrow prev"
            className="arrow-more z-50 relative rotate-180"
          />
        </button>

        <button onClick={() => {}} className="arrow arrow-right ">
          <Image
            src={arrow}
            width={40}
            height={40}
            alt="arrow next"
            className="arrow-more z-50 relative"
          />
        </button>
      </div>
    </>
  );
};
